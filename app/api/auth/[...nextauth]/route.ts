import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const clientId = process.env.NEXT_PUBLIC_GITHUB_ID as string;
const clientSecret = process.env.NEXT_PUBLIC_GITHUB_SECRET as string;

export const options = { providers: [GitHub({ clientId, clientSecret })] };

export const handler = NextAuth(options);

export { handler as GET, handler as POST };
