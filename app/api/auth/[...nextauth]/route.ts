import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const clientId = process.env.GITHUB_ID as string;
const clientSecret = process.env.GITHUB_SECRET as string;

const options: AuthOptions = {
  providers: [GitHub({ clientId, clientSecret })],
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.access_token) {
        token.access_token = account.access_token;
        cookies().set("access_token", account.access_token, {
          expires: account.expires_at,
        });
      }
      return token;
    },
    async session({ session, token }) {
      // TODO: fix token assign
      if (session) session.access_token = token.access_token;
      return session;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
