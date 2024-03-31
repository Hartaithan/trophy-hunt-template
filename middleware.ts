import { NextResponse, type NextMiddleware } from "next/server";

const authPages = new Map<string, boolean>([["/signIn", true]]);
const publicPages = new Map<string, boolean>([
  ["/", true],
  ["/download", true],
  ["/tutorial", true],
]);
const requestPages = /^(.*?)(?:\/progress|\/check|\/uncheck)$/;

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|favicon.ico).*)",
};

const resetCookies = (res: NextResponse): NextResponse => {
  res.cookies.delete("notion-token");
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
  const notion_token = req.cookies.get("notion-token")?.value;
  const isAuth = !!notion_token;

  if (!isAuth && !isAuthPage) {
    const toSignIn = NextResponse.redirect(new URL("/signIn", req.url));
    return resetCookies(toSignIn);
  }

  if (isAuth && isAuthPage) {
    const toHome = NextResponse.redirect(new URL("/", req.url));
    return toHome;
  }

  return res;
};
