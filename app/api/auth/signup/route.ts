'use server';

import { generateToken } from "@/utils/session.utils";
import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/auth.utils";
import { User, SignupData } from "@/types";

export const POST = async (request: Request) => {
  const user: SignupData = await request.json();
  const { username, email, password } = user;

  try {
    const hashedPassword = await hashPassword(password);

    const createdUser = {
      username,
      email,
      hashedPassword
    }

    // TODO: add createdUser to database (mocked for now)
    const response: User = {
      id: '1',
      ...createdUser
    };

    // TODO: check for email/username duplicates and throw errors if found

    // return token
    const token = await generateToken(response.id);
    return NextResponse.json({ token }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'INTERNAL SERVER ERROR' }, { status: 500 });
  }
};
