"use server";

import { generateToken } from "@/utils/session.utils";
import { NextResponse } from "next/server";
import { comparePasswords } from "@/utils/auth.utils";
import { User, LoginData } from "@/types";
import { getUser } from "@/utils/db.utils";

export const POST = async (request: Request) => {
  const user: LoginData = await request.json();
  const { email, password } = user;

  try {
    const dbResponse = await getUser(email);
    console.log(dbResponse.rows[0])
    const row = dbResponse.rows[0];

    const currentUser: User = {
      id: row.id,
      username: row.username,
      email: row.email,
      hashedPassword: row.hashed_password,
    };
    const match = await comparePasswords(password, currentUser.hashedPassword);

    if (!currentUser.id) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 404 }
      );
    }

    if (!match) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await generateToken(currentUser.id);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "INTERNAL SERVER ERROR" },
      { status: 500 }
    );
  }
};
