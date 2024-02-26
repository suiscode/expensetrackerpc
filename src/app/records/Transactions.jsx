"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Context";
import axios from "axios";
import Image from "next/image";
import Transaction from "./Transaction";

function Transactions({ type, search, categorySort }) {
  const { recordState, category } = useGlobalContext();
  const [sort, setSort] = useState("Latest");

  let page = 1;

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/transactions?offset=${page}&limit=10&type=${type}&sort=${sort}&category=${categorySort}`
        );
        setTransactions(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [recordState, type, sort, categorySort]);

  // SUM OF TRANSACTIONS

  const listExpense = transactions.filter((item) => item.type === "Expense");
  const listIncome = transactions.filter((item) => item.type === "Income");

  const sumExpense = listExpense.reduce(
    (total, item) => total + item.amount,
    0
  );
  const sumIncome = listIncome.reduce((total, item) => total + item.amount, 0);
  const balance = sumIncome - sumExpense;
  let numtype = balance >= 0 ? false : true;

  console.log(transactions);

  return (
    <div className="flex flex-1 min-h-[1200px] gap-6 flex-col">
      <div className="flex flex-col gap-6">
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
          className="bg-gray-100 select select-bordered w-full max-w-xs"
        >
          <option value={"Latest"}>Latest First</option>
          <option value={"Highest"}>Highest First</option>
        </select>
        <div className="bg-white p-3 rounded-2xl flex justify-between">
          <h1>Select All</h1>
          <h1
            className={`${
              !numtype ? "text-lime-500" : "text-red-500"
            } flex gap-2`}
          >
            {!numtype && "+ "}
            {balance}
          </h1>
        </div>
      </div>
      <ul className="flex flex-col w-full gap-3">
        {transactions.map((item) => (
          <Transaction
            key={crypto.randomUUID()}
            category={category}
            item={item}
          />
        ))}
      </ul>
      <div className="flex w-full justify-center items-center gap-4">
        <button className="btn">Previous</button>
        <h1>1</h1>
        <h1>2</h1>
        <button className="btn">Next</button>
      </div>
    </div>
  );
}

export default Transactions;
