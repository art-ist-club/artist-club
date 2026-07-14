import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  SOFT_LAUNCH_DESTINATION,
  isSoftLaunch,
  isSoftLaunchBlockedPath,
} from "@/lib/launch";

export function middleware(request: NextRequest) {
  if (!isSoftLaunch()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (!isSoftLaunchBlockedPath(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = SOFT_LAUNCH_DESTINATION;
  url.search = "";
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    "/discover",
    "/discover/:path*",
    "/login",
    "/login/:path*",
    "/register",
    "/register/:path*",
    "/profile",
    "/profile/:path*",
    "/dashboard",
    "/dashboard/:path*",
    "/artist",
    "/artist/:path*",
    "/test",
    "/test/:path*",
  ],
};
