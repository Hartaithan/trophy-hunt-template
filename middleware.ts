import { NextResponse, type NextMiddleware } from "next/server";

const publicPages = new Map<string, boolean>([["/signIn", true]]);

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|favicon.ico).*)",
};

const resetCookies = (res: NextResponse): NextResponse => {
  res.cookies.delete("notion-token");
  res.cookies.delete("database-id");
  return res;
};

export const middleware: NextMiddleware = async (req) => {
  const notion_token = req.cookies.get("notion-token")?.value;
  const database_id = req.cookies.get("database-id")?.value;

  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const isPublicPage = publicPages.has(pathname);
  const isAuth = !!notion_token && !!database_id;

  if (!isAuth && !isPublicPage) {
    const redirectRes = NextResponse.redirect(new URL("/signIn", req.url));
    return resetCookies(redirectRes);
  }

  if (isAuth && isPublicPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
};
