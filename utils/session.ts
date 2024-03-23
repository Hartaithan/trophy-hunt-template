import type { NextApiRequest } from "next";
import { getServerSession as getSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { cookies as cookiesStore } from "next/headers";

const secret = process.env.NEXTAUTH_SECRET;

export const getServerSession = async () => {
  const session = await getSession();
  const cookies = cookiesStore();
  const req = { cookies } as unknown as NextApiRequest;
  const token = await getToken({ req, secret });
  if (session) session.access_token = token?.access_token;
  return session;
};
