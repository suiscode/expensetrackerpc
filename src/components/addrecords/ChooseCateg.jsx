"use client";
import { useGlobalContext } from "@/app/context/Context";
import Image from "next/image";
import React, { useState } from "react";
import AddRecord from "./AddRecord";

function ChooseCateg({ recordData, setRecordData }) {
  const { category } = useGlobalContext();
  const [state, setState] = useState(false);
  const [categoryName, setCategoryName] = useState("Find or choose category");

  return (
    <label className="form-control w-full relative">
      <div className="label">
        <span className="label-text text-lg">Category</span>
      </div>
      <button
        type="button"
        onClick={() => setState((prev) => !prev)}
        className="bg-gray-100 h-12 rounded-xl border-2 px-4 text-gray-500 text-start"
      >
        {categoryName}
      </button>

      {state && (
        <div className="bg-white shadow-xl w-full rounded-2xl p-2 absolute top-[92px]">
          <div
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="p-2"
          >
            Add Category
          </div>
          <ul className="flex flex-col border-t-[1.5px]">
            {category.map((item) => (
              <li
                className="bg-white hover:bg-gray-200 flex gap-2 p-3 rounded-lg items-center"
                key={crypto.randomUUID()}
                value={item.id}
                onClick={() => {
                  setCategoryName(item.name),
                    setRecordData((prev) => ({ ...prev, category: item.id }));
                }}
              >
                <Image
                  src={item.img}
                  width="30"
                  height="30"
                  alt="icon"
                  className="bg-black"
                />
                <h1>{item.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      )}
    </label>
  );
}

export default ChooseCateg;

{
  /* <select
        required
        value={recordData.category}
        onChange={(e) =>
          setRecordData((prev) => ({ ...prev, category: e.target.value }))
        }
        className="select select-lg select-bordered h-[50px] bg-gray-100"
      >
        <option disabled value="">
          Choose
        </option>
        
      </select> */
}
