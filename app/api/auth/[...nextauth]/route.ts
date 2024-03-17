import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const clientId = process.env.GITHUB_ID as string;
const clientSecret = process.env.GITHUB_SECRET as string;

const options = { providers: [GitHub({ clientId, clientSecret })] };

const handler = NextAuth(options);

export { handler as GET, handler as POST };
