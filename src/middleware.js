import { NextResponse } from "next/server";

export const middleware = (req) => {
  const token = req.cookies.get("cookie")?.value;
  const requestedUrl = new URL(req.url);

  if ((requestedUrl.pathname === '/signin' || requestedUrl.pathname === '/signup') && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  

  if (!token && (requestedUrl.pathname === '/dashboard' || requestedUrl.pathname === '/records')) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/records", "/signin", "/signup"],
};
