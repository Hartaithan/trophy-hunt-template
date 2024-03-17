import type { DefaultSession } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    access_token?: string | unknown;
  }
  interface JWT extends DefaultJWT {
    access_token?: string | unknown;
  }
}
