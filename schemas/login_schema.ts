import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .email("Please enter an email")
    .nonempty("Please enter an required"),

  password: z
    .string()
    .nonempty("Please enter a password")
    .min(6, "Password must be at least 6 characters"),
});

export type loginSchema = z.infer<typeof loginSchema>;