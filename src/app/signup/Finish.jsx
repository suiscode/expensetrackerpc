import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useGlobalContext } from "../context/Context";

function Finish() {
  const router = useRouter();
  const { setStage, setCredential } = useGlobalContext();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/dashboard");
    setStage(0);
    setCredential({
      name: "",
      email: "",
      password: "",
      rePassword: "",
      currency: "MNT",
      balance: "",
    });
  };

  return (
    <div className="mt-[100px] gap-4 flex flex-col items-center w-[384px]">
      <Image alt="balance" width={48} height={48} src="/balance.png" />
      <h1 className="text-2xl font-semibold">Good Job!</h1>

      <p className="text-xs text-gray-500">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
      <Button label={"Go to Dashboard"} handleClick={handleClick} />
    </div>
  );
}

export default Finish;
