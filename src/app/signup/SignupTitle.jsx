import Image from "next/image";
import React from "react";

function SignupTitle() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="relative w-[23px] h-[23px]">
          <Image src="/Vector.png" alt="logo" layout="fill" />
        </div>
        <h1 className="text-xl font-bold">Geld</h1>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="font-semibold text-2xl text-slate-900">Welcome Back</h1>
        <h3 className=" text-slate-700">
          Welcome back, Please enter your details
        </h3>
      </div>
    </>
  );
}

export default SignupTitle;
