"use client";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../context/Context";

function LastRecords({ transactions }) {
  const { category } = useGlobalContext();
  const currentDate = new Date();

  return (
    <div className="flex flex-col rounded-xl w-full bg-white">
      <div className="border-b-[2px] flex items-center gap-2 py-4 px-6">
        <h1 className="font-semibold">Income - Expense</h1>
      </div>
      <div className="px-6 py-5 h-full flex flex-col justify-between">
        <ul className="flex flex-col">
          {transactions.slice(0, 5).map((item) => {
            const transactionDate = new Date(`${item.date}T${item.time}`);

            const monthsPassed =
              (currentDate.getFullYear() - transactionDate.getFullYear()) * 12 +
              currentDate.getMonth() -
              transactionDate.getMonth();

            let timeElapsed = "";
            if (monthsPassed > 0) {
              timeElapsed = `${monthsPassed} month${
                monthsPassed > 1 ? "s" : ""
              } ago`;
            } else {
              const timeDifference = currentDate - transactionDate;
              const seconds = Math.floor(timeDifference / 1000);
              const minutes = Math.floor(seconds / 60);
              const hours = Math.floor(minutes / 60);
              const days = Math.floor(hours / 24);

              if (days > 0) {
                timeElapsed = `${days} day${days > 1 ? "s" : ""} ago`;
              } else if (hours > 0) {
                timeElapsed = `${hours} hour${hours > 1 ? "s" : ""} ago`;
              } else if (minutes > 0) {
                timeElapsed = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
              } else {
                timeElapsed = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
              }
            }
            return (
              <li
                key={item._id}
                className="flex w-full py-5 justify-between items-center border-b-2"
              >
                <div className="flex items-center gap-4">
                  <h1>Image</h1>
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
                    <h1 className="text-xs text-gray-400">{timeElapsed}</h1>
                  </div>
                </div>
                <h1
                  className={`${
                    item.type === "Expense" ? "text-red-400" : "text-lime-500"
                  }`}
                >
                  {item.type === "Expense" ? "-" : "+"} {item.amount}$
                </h1>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LastRecords;
