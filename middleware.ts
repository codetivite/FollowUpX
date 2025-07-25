import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isBlockedRoute =
    pathname.startsWith("/dashboard") ||
    pathname === "/login" ||
    pathname === "/signup";

  if (isBlockedRoute) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard", "/login", "/signup"],
};

