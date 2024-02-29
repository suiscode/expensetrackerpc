"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/Context";
import AddCategory from "@/components/addcategory/AddCategory";
import Image from "next/image";

function Navbar({ setSearch, search, setType, categorySort, setCategorySort }) {
  const { category, setCategory } = useGlobalContext();
  return (
    <div className="flex px-4 py-6 flex-col w-[282px] gap-6 h-[1200px] bg-white rounded-xl border-[1px] ">
      <h1 className="text-2xl font-semibold ">Records</h1>
      <button
        className="btn bg-primary rounded-3xl text-white flex items-center"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <span className="text-4xl mt-[-4px] font-extralight">+</span>
        <h1 className="self-center">Record</h1>
      </button>
      <input
        type="text"
        placeholder="Type here"
        className="input   bg-gray-100 input-sm input-bordered w-full max-w-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>Types</h1>

      <div className="flex flex-col gap-3 px-4">
        <div className="flex items-center gap-3">
          <input
            onChange={() => setType("")}
            type="radio"
            name="radio-1"
            className="radio"
          />
          <label>All</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            onChange={() => setType("Expense")}
            type="radio"
            name="radio-1"
            className="radio"
          />
          <label>Expense</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            onChange={() => setType("Income")}
            type="radio"
            name="radio-1"
            className="radio"
          />
          <label>Income</label>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <h1>Category</h1>
        <h1 className="text-gray-200">Clear</h1>
      </div>

      <ul className="flex flex-col gap-2">
        {category.map((item) => (
          <div key={crypto.randomUUID()} className="flex items-center gap-2">
            <Image src="/eyeOff.svg" alt="eye" width={25} height={25} />
            <li
              className="text-lg cursor-pointer hover:text-gray-500 "
              onClick={() => setCategorySort(item.name)}
            >
              {item.name}
            </li>
          </div>
        ))}
      </ul>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Add category
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-[30%] h-[500px] flex">
          <AddCategory />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Navbar;
