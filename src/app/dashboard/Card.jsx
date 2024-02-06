"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import Image from "next/image";

function Card({ transactions }) {
  const { user } = useGlobalContext();
  const listExpense = transactions.filter(item=> item.type === 'Expense')
  const listIncome = transactions.filter(item=> item.type === 'Income')

  const sumExpense = listExpense.reduce((total, item) => total + item.amount, 0);
  const sumIncome = listIncome.reduce((total, item) => total + item.amount, 0);
  const balance = user.balance + (sumIncome - sumExpense)

  return (
    <div className="w-[384px] h-[216px] relative">
      <Image src="/card.png" alt="card" layout="fill" />
      <h1 className="text-white absolute bottom-8 left-8 text-2xl">
        {balance ? balance : '...'}
      </h1>
    </div>
  );
}

export default Card;
