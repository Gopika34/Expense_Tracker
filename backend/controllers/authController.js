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
    if(ExistUser) return res.status(404).json({message:"User already exists"})
    
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
    console.log(email,password);
    
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
    console.log(token);
    // login controller
    console.log("LOGIN SECRET:", process.env.JWT_SECRET);
    res.json({token})

}

