import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDb from "../backend/config/db.js";
import authRoutes from "./routes/authRoutes.js";
import ExpenseRoutes from "./routes/ExpenseRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();

const app= express();

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/expensetracker',authMiddleware,ExpenseRoutes);

app.use(errorHandler);

const port= process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`App connect to ${port} port`);
})
