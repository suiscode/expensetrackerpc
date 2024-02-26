"use client";
import { useGlobalContext } from "@/app/context/Context";
import React from "react";

function ChooseCateg({ recordData, setRecordData }) {
  const { category } = useGlobalContext();
  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text text-lg">Category</span>
      </div>
      <select
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
        {category.map((item) => (
          <option key={crypto.randomUUID()} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default ChooseCateg;
