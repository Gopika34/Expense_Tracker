import {transactionModel} from "../models/transactionModel.js";

export const getExpense= async(req,res)=>{
    try{
        const expense= await transactionModel.find({userId: req.user.id}).lean();
        // if(!expense) return res.status(404).json({message:"expense not found"}); 
        
        res.json(expense);
    }
    catch(err){
        return res.status(500).json({message:"failed to fetch expenses"});
    }
}

export const addExpense= async(req,res)=>{
    try{
        const expense= await transactionModel.create({
            title: req.body.title,
            amount: req.body.amount,
            category: req.body.category,
            userId: req.user.id
        });
        // if(!expense) return res.status(500).json({message:"Expense cant be created"});
        res.status(201).json(expense);
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({message:"Expense cant be created"});
    }
}

export const deleteExpense= async(req,res)=>{
    try{
        const expense= await transactionModel.findOneAndDelete(
            {
                _id: req.params.id,
                userId: req.user.id
            }
        )
        if(!expense) return res.status(404).json({message:"Expense not found"});
        res.json({message:"deleted successfully!"});
    }
    catch(err){
        return res.status(500).json({message:"Expense cant be deleted"});
    }
}
export const editExpense= async(req,res)=>{
    try{
        const expense= await transactionModel.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.id
            },
            req.body,
            {new:true}
        )
        if(!expense) return res.status(404).json({message:"Expense not found"});
        res.json(expense);
    }
    catch(err){
        return res.status(500).json({message:"Expense cant be updated"});
    }
}