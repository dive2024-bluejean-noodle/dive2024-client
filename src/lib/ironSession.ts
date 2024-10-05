import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export interface ISessionData {
  token: string;
  username: string;
}

export async function getIronSessionData() {
  if (!process.env.NEXT_PUBLIC_SESSION_PW) {
    throw new Error("NEXT_PUBLIC_SESSION_PW is not defined");
  }

  try {
    const session = await getIronSession<ISessionData>(cookies(), {
      password: process.env.NEXT_PUBLIC_SESSION_PW as string,
      cookieName: "bu-meet-login-cookie",
      cookieOptions: {
        secure: true,
      },
    });
    return session;
  } catch (error) {
    throw error;
  }
}
