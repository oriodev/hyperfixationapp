import * as z from "zod";

export const signupSchema = z.object({
  username: z.string()
    .min(5, { message: "Must be more than 5 characters long" })
    .max(20, { message: "Must be less than20 characters long" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "No special characters" }),
  
  email: z
    .email({ message: "That's not an email address" }),
  
  password: z.string()
    .min(6, { message: "Must be more than 6 characters long" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Must contain at least one number" })
    .regex(/[\W_]/, { message: "Must contain at least one special character" }),

  passwordCheck: z.string()
})
  
  .superRefine(({ passwordCheck, password }, ctx) => {
  if (passwordCheck !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords must match",
      path: ['password']
    })
  }})

export type signupSchema = z.infer<typeof signupSchema>;
