import { NextRequest, NextResponse } from "next/server";
import { getIronSessionData } from "@/lib/ironSession";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/main") ||
    request.nextUrl.pathname.startsWith("/busan")
  ) {
    const session = await getIronSessionData();
    const token = session.token;
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname.startsWith("/signup")
  ) {
    const session = await getIronSessionData();
    const { token, userInfo } = session;

    if (token) {
      if (userInfo?.mento) {
        return NextResponse.redirect(new URL("/busan", request.url));
      }
      return NextResponse.redirect(new URL("/main", request.url));
    }
  }

  return NextResponse.next();
}
