import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import Amount from "./Amount";
import Chart from "./Chart";
import LastRecords from "./LastRecords";
import { connectDB } from "@/lib/utils";
import { Transactions } from "@/lib/models";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

async function fetchData(request) {
  try {
    connectDB();
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const transactions = await Transactions.find({ userId: id });
    return transactions;
  } catch (error) {
    return "Error";
  }
}

async function DashBoardPage() {
  const transactions = await fetchData();
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Header />
      <div className="w-[1440px] min-h-[calc(100vh-85px)] gap-6 flex flex-col items-center py-8 px-[120px]">
        <div className="flex justify-between w-full">
          <Image src="/cart.png" alt="card" width={384} height={216} />
          <Amount transactions={transactions} name='Expense'/>
          <Amount transactions={transactions} name='Income'/>
        </div>
        <div className="flex justify-between w-full gap-6">
          <Chart />
          <Chart />
        </div>
        <LastRecords transactions={transactions} />
      </div>
    </div>
  );
}

export default DashBoardPage;
