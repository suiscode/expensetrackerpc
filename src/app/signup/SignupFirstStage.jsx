import React from 'react'
import SignupLink from "./SignupLink";
import SignupTitle from "./SignupTitle";
import SignupForm from "./SignupForm";


function SignupFirstStage() {
  return (
    <div className="flex">
      <div className="w-1/2 justify-center items-center flex flex-col">
        <div className="flex items-center flex-col gap-10 w-[384px]">
          <SignupTitle />
          <SignupForm/>
          <SignupLink />
        </div>
      </div>
      <div className="bg-primary w-1/2 min-h-screen"></div>
    </div>
  )
}

export default SignupFirstStage