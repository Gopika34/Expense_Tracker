import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDb from "../backend/config/db.js";
import authRoutes from "./routes/authRoutes.js";
import ExpenseRoutes from "./routes/ExpenseRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

dotenv.config();
connectDb();

const app= express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/expensetracker',authMiddleware,ExpenseRoutes)


const port= process.env.PORT;

app.listen(port, ()=>{
    console.log(`App connect to ${port} port`);
})
