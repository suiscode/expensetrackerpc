import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../context/Context";
import Currency from "./Currency";
import StageTracker from "./StageTracker";
import Balance from "./Balance";
import Finish from "./Finish";

function SignupSecondStep() {
  const { stage } = useGlobalContext();
  return (
    <div className="flex flex-col items-center py-12">
      <div className="flex gap-2 items-center mb-12">
        <div className="relative w-[23px] h-[23px]">
          <Image src="/Vector.png" alt="logo" layout="fill" />
        </div>
        <h1 className="text-xl font-bold">Geld</h1>
      </div>
      <StageTracker/>
      {stage == 1 && <Currency />}
      {stage == 2 && <Balance/>}
      {stage == 3 && <Finish />}
    </div>
  );
}

export default SignupSecondStep;
