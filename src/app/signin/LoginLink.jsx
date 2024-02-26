import Link from "next/link";
import React from "react";

function LoginLink() {
  return (
    <h1 className="font-semibold">
      Don&apos;t have account?
      <Link className="text-primary" href="/signup">
        Sign up
      </Link>
    </h1>
  );
}

export default LoginLink;
