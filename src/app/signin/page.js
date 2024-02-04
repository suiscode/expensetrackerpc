import React from "react";
import LoginLink from "./LoginLink";
import LoginForm from "./LoginForm";
import LoginTitle from "./LoginTitle";

function LoginPage() {

  return (
    <div className="flex">
      <div className="w-1/2 min-h-screen justify-center items-center flex">
        <div className="flex items-center flex-col gap-10 w-[384px]">
          <LoginTitle/>
          <LoginForm/>
          <LoginLink/>
        </div>
      </div>
      <div className="bg-primary w-1/2 min-h-screen"></div>
    </div>
  );
}

export default LoginPage;
