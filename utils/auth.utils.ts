import { compare, hash } from "bcrypt"

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
  const match = await compare(password, hashedPassword);
  return match;
}
