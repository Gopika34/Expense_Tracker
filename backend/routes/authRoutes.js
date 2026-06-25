import {Router} from "express";
import {signup,login, updatePassword,updateUsername} from "../controllers/authController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"
import validate from "../validation/middlewareValidate.js"
import {signupSchema, loginSchema, updatePasswordSchema,updateUsernameSchema} from "../validation/schemas.js"

const authRoutes = Router();

authRoutes.post('/signup',validate(signupSchema),signup);
authRoutes.post('/login',validate(loginSchema),login);
authRoutes.put("/profile/update-username", authMiddleware,validate(updateUsernameSchema), updateUsername)
authRoutes.put("/profile/update-password", authMiddleware,validate(updatePasswordSchema), updatePassword)
export default authRoutes;