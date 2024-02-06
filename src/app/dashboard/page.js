"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Amount from "./Amount";
import Chart from "./Chart";
import LastRecords from "./LastRecords";
import Card from "./Card";
import PieChart, { doughtnutData } from "./PieChart";
import axios from "axios";
import { useGlobalContext } from "../context/Context";

function DashBoardPage() {
  const {recordState} = useGlobalContext()

  const [transactions,setTransactions]= useState([])
  useEffect(()=>{
    const fetchData =async()=>{
      const {data} = await axios.get('/api/transactions/')
      setTransactions(data.data)
    }
  fetchData()
  },[recordState])
  
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Header />
      <div className="w-[1440px] min-h-[calc(100vh-85px)] gap-6 flex flex-col items-center py-8 px-[120px]">
        <div className="flex justify-between w-full">
          <Card transactions={transactions} />
          <Amount transactions={transactions} name="Expense" />
          <Amount transactions={transactions} name="Income" />
        </div>
        <div className="flex justify-between w-full gap-6">
          <Chart />
          <PieChart transactions={transactions} />
        </div>
        <LastRecords transactions={transactions} />
      </div>
    </div>
  );
}

export default DashBoardPage;
