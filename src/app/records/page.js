import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

function RecordsPage() {
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Header />
      <div className="w-[1440px] border-2 min-h-[calc(100vh-85px)] gap-6 flex py-8 px-[120px]">
        <Navbar/>
        <div className="flex flex-1 h-[2000px] bg-green-200 gap-6">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}

export default RecordsPage;
