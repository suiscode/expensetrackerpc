"use client";
import React, { useState } from "react";
import SignupFirstStage from "./SignupFirstStage";
import { useGlobalContext } from "../context/Context";
import SignupSecondStep from "./SignupSecondStep";

function Signup() {
  const { stage } = useGlobalContext();

  return <>{stage == 0 ? <SignupFirstStage /> : <SignupSecondStep />}</>;
}

export default Signup;
