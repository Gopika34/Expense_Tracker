import {getExpense,addExpense,deleteExpense,editExpense} from "../controllers/expenseController.js";
import {Router} from "express";
import {expenseSchema} from "../validation/schemas.js"
import validate from "../validation/middlewareValidate.js"


const ExpenseRoutes = Router();

ExpenseRoutes.get('/',getExpense);
ExpenseRoutes.post('/',validate(expenseSchema),addExpense);
ExpenseRoutes.delete('/:id',deleteExpense);
ExpenseRoutes.put('/:id',validate(expenseSchema),editExpense);

export default ExpenseRoutes;