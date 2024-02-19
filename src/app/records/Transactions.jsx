"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Context";
import axios from "axios";
import Image from "next/image";
import Transaction from "./Transaction";

function Transactions({ type, search }) {
  const { recordState, category } = useGlobalContext();
  const [sort, setSort] = useState("1");

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/transactions/");
      setTransactions(data.data);
    };
    fetchData();
  }, [recordState]);
  console.log(transactions);

  let sortedTransactions;

  if (sort === "1") {
    sortedTransactions = [...transactions].reverse();
  } else {
    sortedTransactions = [...transactions].sort((a, b) => b.amount - a.amount);
  }

  const filteredTransactions = sortedTransactions.filter((item) => {
    if (!type) {
      return true;
    } else {
      return item.type === type;
    }
  });

  const filteredCategory = category.filter((item) =>
    item.name.includes(search)
  );

  const listExpense = transactions.filter((item) => item.type === "Expense");
  const listIncome = transactions.filter((item) => item.type === "Income");

  const sumExpense = listExpense.reduce(
    (total, item) => total + item.amount,
    0
  );
  const sumIncome = listIncome.reduce((total, item) => total + item.amount, 0);
  const balance = sumIncome - sumExpense;
  let numtype = balance >= 0 ? false : true

  return (
    <div className="flex flex-1 h-[2000px] gap-6 flex-col">
      <div className="flex flex-col gap-6">
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
          className="bg-gray-100 select select-bordered w-full max-w-xs"
        >
          <option value={"1"}>Latest First</option>
          <option value={"2"}>Highest First</option>
        </select>
        <div className="bg-white p-3 rounded-2xl flex justify-between">
          <h1>Select All</h1>
          <h1 className={`${!numtype ? "text-lime-500" : "text-red-500"} flex gap-2`}>
            {!numtype && "+ "}
            {balance}
          </h1>
        </div>
      </div>
      <ul className="flex flex-col w-full gap-3">
        {filteredTransactions.map((item) => (
          <Transaction key={item.id} category={category} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
