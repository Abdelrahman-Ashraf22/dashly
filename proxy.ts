import { NextResponse, NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: [
    "/about/:path*",
    "/auth/signin",
    "/auth/signout",
    "/auth/error",
    "/auth/verify-request",
    "/auth/new-user",
  ],
};
