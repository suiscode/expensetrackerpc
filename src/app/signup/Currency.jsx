import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../context/Context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Currency() {
  const { credential, setCredential, setStage } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStage(2);
  };

  return (
    <form
      className="mt-[100px] gap-4 flex flex-col items-center w-[384px]"
      onSubmit={handleSubmit}
    >
      <Image alt="currency" width={48} height={48} src="/currency.png" />
      <h1 className="text-2xl font-semibold">Select base currency</h1>
      <select
        value={credential.currency}
        onChange={(e) => {
          setCredential((prev) => ({ ...prev, currency: e.target.value }));
        }}
        className="bg-gray-100 select select-bordered w-full max-w-xs"
      >
        <option value={"MNT"}>MNT - Mongolia Tugrik</option>
        <option value={"USD"}>USD - American Dollar</option>
      </select>

      <p className="text-xs text-gray-500">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one{" "}
      </p>
      <Button label={"Confirm"} />
    </form>
  );
}

export default Currency;
