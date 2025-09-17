"use server";

import { generateToken } from "@/utils/session.utils";
import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/auth.utils";
import { User, SignupData } from "@/types";
import {
  writeUser,
  usernameExists,
  emailExists,
  getUserId,
} from "@/utils/db.utils";

export const POST = async (request: Request) => {
  const user: SignupData = await request.json();
  const { username, email, password } = user;

  try {
    const hashedPassword = await hashPassword(password);
    let userId: string, response: User;

    if (await usernameExists(username)) {
      throw new Error("Error while adding new user: Username already exists.");
    } else if (await emailExists(email)) {
      throw new Error("Error while adding new user: Email already exists.");
    } else {
      // Write new user to database.
      await writeUser(username, email, hashedPassword);
      // Fetch newly created user ID from database.
      userId = await getUserId(email);
      // Populate response object.
      response = {
        id: userId,
        username,
        email,
        hashedPassword,
      };
    }

    // return token
    const token = await generateToken(response.id);
    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "INTERNAL SERVER ERROR" },
      { status: 500 }
    );
  }
};
