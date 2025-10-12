'use server';

import { deleteSession } from "@/utils/session.utils";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    deleteSession();
    return NextResponse.json({ message: 'LOGGED OUT' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'INTERNAL SERVER ERROR' }, { status: 500 });
  }
};
