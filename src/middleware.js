import { NextResponse } from "next/server";

export const middleware = (req) => {
  const token = req.cookies.get("cookie")?.value;
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard"],
};
