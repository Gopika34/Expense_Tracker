import { z } from "zod";


export const signupSchema = z.object({
    userName: z
        .string()
        .trim()
        .min(3, "Username must contain 3 characters")
        .max(20, "Username too long"),
    email: z
        .string()
        .trim()
        .email("Invalid email"),
    password: z
        .string()
        .min(6, "Password must contain 6 characters")
});

export const loginSchema = z.object({
    email:z
        .string()
        .email("Invalid email"),
    password:z
        .string()
        .min(1,"Password required")
});

export const expenseSchema = z.object({
    title:z
        .string()
        .trim()
        .min(1,"Title required"),
    amount:z
        .coerce
        .number()
        .positive("Amount must be greater than 0"),
    category:z
        .string()
        .min(1,"Category required")
});



export const updateUsernameSchema = z.object({
    userName:z
        .string()
        .trim()
        .min(3,"Username too short")
});

export const updatePasswordSchema = z.object({
    currentPassword:z
        .string()
        .min(1),
    newPassword:z
        .string()
        .min(6)
});