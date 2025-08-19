// TYPES
export type User = {
  id: string;
  username: string;
  email: string;
  hashedPassword: string;
}

export type LoginData = {
  email: string;
  password: string;
}

export type SignupData = {
  username: string;
  email: string;
  password: string;
}

// ENUMS
export enum InputType {
  text = "text",
  email = "email",
  password = "password",
  passwordCheck = "passwordCheck"
}