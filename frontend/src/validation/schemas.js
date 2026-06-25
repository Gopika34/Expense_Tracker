import {z} from "zod";

export const signupSchema= z.object({
    userName: z
        .string()
        .min(3,"Username must be at least 3 characters.")
        .max(20,"Username can't be too long."),
    
    email: z
        .string()
        .email("Invalid email"),
    
    password: z
        .string()
        .min(6,"passwords must contain at least 6 characters.")
        .regex(/[A-Z]/,'Password must contain at least one upper character.')
        .regex(/[^a-zA-Z0-9]/,'Password must contain at least one special character.')
});

export const loginSchema= z.object({
    email: z
        .string()
        .min(1, "Email is required.") 
        .email("Invalid email"),
    
    password: z
        .string()
        .min(1,"passwords is required.")
});

export const expenseSchema= z.object({

    title: z
        .string()
        .min(1,"Title is required."),

    category: z
        .string()
        .min(1,"Category is required."),

    amount: z
        .coerce
        .number()
        .min(1,"Amount is required."),
});

export const profileSchema = z.object({

    userName:z
        .string()
        .min(3,"Username must be at least 3 characters")

});


export const passwordSchema = z.object({

    currentPassword:z
        .string()
        .min(1,"Current password required"),

    newPassword:z
        .string()
        .min(6,"Password must contain 6 characters")

});




