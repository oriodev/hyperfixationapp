'use server';

import { generateToken } from "@/utils/session.utils";
import { NextResponse } from "next/server";
import { comparePasswords } from "@/utils/auth.utils";
import { User, LoginData } from "@/types";

export const POST = async (request: Request) => {

  const user: LoginData = await request.json();
  const { email, password } = user;

  try {
    // TODO: find the user in db from the email (mocked for now)
    const response: User = {
      id: '1',
      username: 'user',
      email: email,
      hashedPassword: '$2b$10$gBXNhS.S9te1g4kDHcFq0ecrm89Puu6j3tu8ItcMmiXWTJITzrNIe'
    };

    if (!response) {
      return NextResponse.json({ error: 'COULD NOT FIND USER IN DB' }, { status: 404 });
    }

    const match = await comparePasswords(password, response.hashedPassword);
    if (!match) {
      return NextResponse.json({ error: 'PASSWORDS DO NOT MATCH' }, { status: 401 });
    }

    const token = await generateToken(response.id);
    return NextResponse.json({ token }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'INTERNAL SERVER ERROR' }, { status: 500 });
  }
};
