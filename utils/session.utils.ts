'use server'

import { cookies } from "next/headers";
import { decodeToken } from "./token.utils";
import { getUser } from "./db.utils";
import { User } from "@/types";

export const createSession = async (token: string) => {
  try {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const cookieStore = await cookies();

    cookieStore.set("session", token, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSession = async () => {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");
    if (sessionCookie) {
      return sessionCookie.value;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("session");
  } catch (error) {
    console.log(error);
  }
};


export const fetchUserFromSession = async () => {
  const session = await getSession();
  if (!session) return null;

  const userId = decodeToken(session);
  if (!userId) return null;

  const user = await getUser(userId);

  const temporarilyModifiedUser: User = {
      id: user.id,
      username: user.username,
      email: user.email,
      hashedPassword: user.hashedPassword,
      bio: user.bio,
      pronouns: user.pronouns,
      profilePicture: user.profilePicture,
      profileTags: [],
      pinnedInfodumps: [],
      fixations: [],
      checkins: [],
  };

  return temporarilyModifiedUser;
}