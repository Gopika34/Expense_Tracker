import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
},{timestamps: true})

export const userModel= mongoose.model("UserModel", userSchema);