import {Router} from "express";
import {signup,login, updatePassword,updateUsername} from "../controllers/authController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"

const authRoutes = Router();

authRoutes.post('/signup',signup);
authRoutes.post('/login',login);
authRoutes.put("/profile/update-username", authMiddleware, updateUsername)
authRoutes.put("/profile/update-password", authMiddleware, updatePassword)
export default authRoutes;