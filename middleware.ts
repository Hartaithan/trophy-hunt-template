import type { NextRequest } from "next/server";
import { NextResponse, type NextMiddleware } from "next/server";
import { getCookieExpires } from "./utils/cookies";

const authPages = new Set<string>(["/signIn"]);
const publicPages = new Set<string>(["/", "/download", "/tutorial", "/help"]);
const requestPages = /^(.*?)(?:\/progress|\/check|\/uncheck)$/;

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|favicon.ico).*)",
};

const extendCookies = (req: NextRequest, res: NextResponse) => {
  const databaseId = req.cookies.get("database-id");
  const notionToken = req.cookies.get("notion-token");
  const expires = getCookieExpires();
  if (databaseId)
    res.cookies.set("database-id", databaseId?.value, { expires });
  if (notionToken)
    res.cookies.set("notion-token", notionToken?.value, { expires });
  return res;
};

export const middleware: NextMiddleware = async (req) => {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const isRequestPage = requestPages.test(pathname);
  if (isRequestPage) return res;

  const isPublicPage = publicPages.has(pathname);
  if (isPublicPage) return res;

  const isAuthPage = authPages.has(pathname);
  const notionToken = req.cookies.get("notion-token")?.value;
  const isAuth = !!notionToken;

  if (!isAuth && !isAuthPage) {
    const toSignIn = NextResponse.redirect(new URL("/signIn", req.url));
    toSignIn.cookies.delete("notion-token");
    return toSignIn;
  }

  if (isAuth && isAuthPage) {
    const toHome = NextResponse.redirect(new URL("/", req.url));
    return extendCookies(req, toHome);
  }

  return extendCookies(req, res);
};
