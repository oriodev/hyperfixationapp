'use server'

import { cookies } from "next/headers";

// TYPES
import { User } from "@/types";

// UTILS
import { decodeToken } from "./token.utils";
import { getFixations, getFixationTags } from "./fixations.utils";
import { getPinnedInfodumps } from "./infodumps.utils";
import { getCheckins } from "./checkins.utils";
import { getUser } from "./user.utils";

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
  try {
    const session = await getSession();
    if (!session) return null;

    const userId = decodeToken(session);
    if (!userId) return null;

    const user = await getUser(userId);

    // FETCH ADDITIONAL USER DATA FROM OTHER TABLES
    const profileTags = await getFixationTags(userId).catch(() => { return []; });
    const pinnedInfodumps = await getPinnedInfodumps(userId).catch(() => { return []; });
    const fixations = await getFixations(userId).catch(() => { return []; });
    const checkins = await getCheckins(userId).catch(() => { return []; });

    const completeUser: User = {
      id: user.id,
      username: user.username,
      email: user.email,
      hashedPassword: user.hashedPassword,
      bio: user.bio,
      pronouns: user.pronouns,
      profilePicture: user.profilePicture,
      profileTags: profileTags,
      pinnedInfodumps: pinnedInfodumps,
      fixations: fixations,
      checkins: checkins,
      created: user.created,
      lastLoggedIn: user.lastLoggedIn
    };

    return completeUser;

  } catch (error) {
    console.log('getting complete user from session: ', error)
    throw error
  }
  
}