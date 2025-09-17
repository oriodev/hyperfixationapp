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

    const response: User = {
      id: row.id,
      username: row.username,
      email: row.email,
      hashedPassword: row.hashed_password,
    };

    // FIXME: this is not a sufficient check for lack of user.
    if (response.id === undefined) {
      return NextResponse.json(
        { error: "COULD NOT FIND USER IN DB" },
        { status: 404 }
      );
    }

    // FIXME: we should comparePasswords every time, regardless of whether
    // user exists, so that we don't give away whether the user
    // exists by it taking a different amount of time to process credentials.
    const match = await comparePasswords(password, response.hashedPassword);
    if (!match) {
      // FIXME: this gives the user too much info (i.e. it tells them that
      // a user exists with that email, but the password is wrong)
      return NextResponse.json(
        { error: "PASSWORDS DO NOT MATCH" },
        { status: 401 }
      );
    }

    const token = await generateToken(response.id);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "INTERNAL SERVER ERROR" },
      { status: 500 }
    );
  }
};
