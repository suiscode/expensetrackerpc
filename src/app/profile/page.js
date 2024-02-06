'use client'
import Header from "@/components/Header";
import React from "react";
import { useGlobalContext } from "../context/Context";

function page() {
    const {user} = useGlobalContext()
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Header />
      <div className="w-[1440px] min-h-[calc(100vh-85px)] gap-6 flex flex-col py-8 px-[120px]">
        <h1>Name:   {user.name}</h1>
        <h1>Email:   {user.email}</h1>
      </div>
    </div>
  );
}

export default page;
