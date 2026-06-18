import {getExpense,addExpense,deleteExpense,editExpense} from "../controllers/expenseController.js";
import {Router} from "express";

const ExpenseRoutes = Router();

ExpenseRoutes.get('/',getExpense);
ExpenseRoutes.post('/',addExpense);
ExpenseRoutes.delete('/:id',deleteExpense);
ExpenseRoutes.put('/:id',editExpense);

export default ExpenseRoutes;