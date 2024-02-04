import Link from "next/link";
import React from "react";

function SignupLink() {
  return (
    <h1 className="font-semibold">
      Already have an account?{" "}
      <Link className="text-primary" href="/signin">
        Sign in
      </Link>
    </h1>
  );
}

export default SignupLink;
