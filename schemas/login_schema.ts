import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .email("That's not an email")
    .nonempty("Email is required"),

  password: z
    .string()
    .nonempty("That's not a password")
    .min(6, "Password must be at least 6 characters"),
});

export type loginSchema = z.infer<typeof loginSchema>;