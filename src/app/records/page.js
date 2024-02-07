import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Transactions from "./Transactions";

function RecordsPage() {
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Header />
      <div className="w-[1440px] border-2 min-h-[calc(100vh-85px)] gap-6 flex py-8 px-[120px]">
        <Navbar/>
        <Transactions/>
      </div>
    </div>
  );
}

export default RecordsPage;
