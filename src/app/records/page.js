'use client'
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Transactions from "./Transactions";

function RecordsPage() {

  const [type, setType] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Header />
      <div className="w-[1440px] min-h-[calc(100vh-85px)] gap-6 flex py-8 px-[120px]">
        <Navbar type={type} setType={setType} setSearch={setSearch} search={search}/>
        <Transactions type={type} search={search}/>
      </div>
    </div>
  );
}

export default RecordsPage;
