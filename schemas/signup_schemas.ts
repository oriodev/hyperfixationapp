import * as z from "zod";

export const SignupSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  passwordCheck: z.string()
})