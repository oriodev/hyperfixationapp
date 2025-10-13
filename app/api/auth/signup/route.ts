"use server";

import { generateToken } from "@/utils/token.utils";
import { NextResponse } from "next/server";
import { hashPassword, usernameExists, emailExists } from "@/utils/auth.utils";
import { SignupData } from "@/types";
import {
  writeUser,
  getUserId,
} from "@/utils/user.utils";

export const POST = async (request: Request) => {
  const user: SignupData = await request.json();
  const { username, email, password } = user;

  try {
    const hashedPassword = await hashPassword(password);

    if (await usernameExists(username)) {
      return NextResponse.json(
        { error: "Username already exists." },
        { status: 400 }
      );
    } 
    
    if (await emailExists(email)) {
      return NextResponse.json(
        { error: "Email already exists." },
        { status: 400 }
      );
    } 
  
    // Write new user to database.
    await writeUser(username, email, hashedPassword);
    // Fetch newly created user ID from database.
    const userId = await getUserId(email);
    // Populate currentUser object.
    const currentUser = {
      id: userId,
      username,
      email,
      hashedPassword,
    };

    // Return token
    const token = await generateToken(currentUser.id);
    return NextResponse.json({ token }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "INTERNAL SERVER ERROR" },
      { status: 500 }
    );
  }
};
