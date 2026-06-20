import {userModel} from "../models/userModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup=async(req,res)=>{
    const {userName,email,password}=req.body;
    if(!userName || !email || !password) return res.status(400).json({message:"All fields are required"})

    const ExistUser= await userModel.findOne({
        $or:[
            {userName},
            {email}
        ]
    });
    if(ExistUser) return res.status(409).json({message:"User already exists"})
    
    const hashedPassword= await  bcrypt.hash(password,10);

    await userModel.create({
        userName: userName,
        email: email,
        password: hashedPassword
    })

    res.json({message:"User registered!"})
}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    
    if(!email || !password) return res.status(400).json({message:"All fields are required"})
    
    const ExistUser= await userModel.findOne({email});
    if(!ExistUser){
        return res.status(404).json({
            message:"User not found"
    });
    }

    const comparison= await bcrypt.compare(password,ExistUser.password);
    if(!comparison) return res.status(400).json({message:"Invalid credentials"})

    const token= jwt.sign(
        {
            id: ExistUser._id,
            userName: ExistUser.userName,
            email: ExistUser.email
        },
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    )
    console.log("TOKEN GENERATED:");
    console.log("LOGIN ID:", ExistUser._id);
    res.json({token})

}

// Update username
export const updateUsername = async (req, res) => {
    try {
        const { userName } = req.body;
        if (!userName || !userName.trim()) {
            return res.status(400).json({ message: "Username cannot be empty" });
        }

        const updatedUser = await userModel.findByIdAndUpdate(
            req.user.id,
            { userName: userName.trim() },
            {  returnDocument: "after" }
        )

        const token = jwt.sign(
            {
                id: updatedUser._id,
                userName: updatedUser.userName,
                email: updatedUser.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );
        res.status(200).json({
            message: "Username updated successfully",
            token
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update password
export const updatePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: "Both current and new password are required" });
        }

        const user = await userModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Current password is incorrect" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};