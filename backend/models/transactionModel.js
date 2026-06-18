import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    }
},{timestamps: true})

export const transactionModel = mongoose.model("TransactionModel",transactionSchema);