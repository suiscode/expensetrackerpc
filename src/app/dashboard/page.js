import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import Amount from "./Amount";

function DashBoardPage() {
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Header />
      <div className="w-[1440px] flex flex-col items-center py-8 px-[120px]">
        <div className="flex justify-between w-full">
          <Image src="/cart.png" alt="card" width={384} height={216} />
          <Amount />
          <Amount />
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
