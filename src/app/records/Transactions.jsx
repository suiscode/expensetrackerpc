"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Context";
import axios from "axios";
import Image from "next/image";

function Transactions() {
  const { recordState, category } = useGlobalContext();

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/transactions/");
      setTransactions(data.data);
    };
    fetchData();
  }, [recordState]);
  console.log(transactions);
  return (
    <div className="flex flex-1 h-[2000px] gap-6">
      <ul className="flex flex-col w-full gap-3">
        {transactions.map((item) => {
          return (
            <li
              key={item._id}
              className="flex w-full py-5 bg-white rounded-2xl px-5 justify-between items-center border-b-2"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`${
                    item.type !== "Expense" ? "bg-primary" : "bg-red-600"
                  } p-2 rounded-full`}
                >
                  {category
                    .filter((categ) => categ._id === item.category)
                    .map((filteredCategory) => (
                      <Image
                        src={filteredCategory.img}
                        alt="img"
                        width={30}
                        height={30}
                      />
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h1>
                    {category
                      .filter((categ) => categ._id === item.category)
                      .map((filteredCategory) => (
                        <span key={filteredCategory._id}>
                          {filteredCategory.name}
                        </span>
                      ))}
                  </h1>
                  <h1 className="text-xs text-gray-400">{item.time}</h1>
                </div>
              </div>
              <h1
                className={`font-medium ${
                  item.type === "Expense" ? "text-red-400" : "text-lime-500"
                }`}
              >
                {item.type === "Expense" ? "-" : "+"} {item.amount}₮
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Transactions;
