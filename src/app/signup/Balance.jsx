import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../context/Context";
import axios from "axios";

function Balance() {
  const { setStage, stage, setCredential, credential } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        name: credential.name,
        email: credential.email,
        password: credential.password,
        currency: credential.currency,
        balance: credential.balance,
      });
    console.log(response);

    } catch (error) {
      console.error("Signup failed:", error);
    }
    setStage(3);
  };
  return (
    <form
      className="mt-[100px] gap-4 flex flex-col items-center w-[384px]"
      onSubmit={handleSubmit}
    >
      <Image alt="balance" width={48} height={48} src="/balance.png" />
      <h1 className="text-2xl font-semibold">Set up your cash Balance</h1>
      <input
        value={credential.balance}
        onChange={(e) =>
          setCredential((prev) => ({ ...prev, balance: e.target.value }))
        }
        required
        type="number"
        placeholder="Balance"
        className="input input-bordered w-full bg-gray-100"
      />
      <p className="text-xs text-gray-500">
        How much cash do you have in your wallet?
      </p>
      <Button label={"Confirm"} />
    </form>
  );
}

export default Balance;
