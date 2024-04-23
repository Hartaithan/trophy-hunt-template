import { NextResponse, type NextMiddleware } from "next/server";

const authPages = new Set<string>(["/signIn"]);
const publicPages = new Set<string>(["/", "/download", "/tutorial"]);
const requestPages = /^(.*?)(?:\/progress|\/check|\/uncheck)$/;

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|favicon.ico).*)",
};

export const middleware: NextMiddleware = async (req) => {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const isRequestPage = requestPages.test(pathname);
  if (isRequestPage) return res;

  const isPublicPage = publicPages.has(pathname);
  if (isPublicPage) return res;

  const isAuthPage = authPages.has(pathname);
  const notion_token = req.cookies.get("notion-token")?.value;
  const isAuth = !!notion_token;

  if (!isAuth && !isAuthPage) {
    const toSignIn = NextResponse.redirect(new URL("/signIn", req.url));
    toSignIn.cookies.delete("notion-token");
    return toSignIn;
  }

  if (isAuth && isAuthPage) {
    const toHome = NextResponse.redirect(new URL("/", req.url));
    return toHome;
  }

  return res;
};
