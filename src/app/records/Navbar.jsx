"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { useGlobalContext } from "@/app/context/Context";

function Navbar() {
  const { setRecordState, recordState } = useGlobalContext();
  const [rangeValue, setRangeValue] = useState([20, 80]);

  const handleRangeChange = (value) => {
    setRangeValue(value);
  };
  return (
    <div className="flex px-4 py-6 flex-col w-[282px] gap-6 h-[2000px] bg-white rounded-xl border-[1px] ">
      <h1 className="text-2xl font-semibold ">Records</h1>
      <button
        onClick={() => setRecordState(true)}
        className=" bg-primary flex items-center justify-center text-white rounded-3xl py-2 h-[32px] w-full"
      >
        Add
      </button>
      <input
        type="text"
        placeholder="Type here"
        className="input   bg-gray-100 input-sm input-bordered w-full max-w-xs"
      />
      <h1>Types</h1>
      <div className="flex flex-col gap-3 px-4">
        <div className="flex items-center gap-3">
          <input type="radio" name="radio-1" className="radio" />
          <label>All</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="radio" name="radio-1" className="radio" />
          <label>Expense</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="radio" name="radio-1" className="radio" />
          <label>Income</label>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <h1>Category</h1>
        <h1 className="text-gray-200">Clear</h1>
      </div>
      <div className="w-full bg-red-100">
        <h1>Add Category</h1>
      </div>
      <div>
        <h1>Amount Range</h1>
        <div className="flex gap-4 justify-between">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
