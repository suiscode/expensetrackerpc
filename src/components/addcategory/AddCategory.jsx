"use client";
import Image from "next/image";
import React, { useState } from "react";
import Categorylist from "./Categorylist";
import axios from "axios";
import { useGlobalContext } from "@/app/context/Context";

function AddCategory() {
  const { setRefresh } = useGlobalContext();
  const [category, setCategory] = useState({
    name: "",
    img: "/house.svg",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRefresh(true);
    const res = await axios.post("/api/category/", { category });
    if (res.data === "Category already exists") {
      setError(res.data);
    } else {
      setError("");
      setCategory({
        name: "",
        img: "/house.svg",
      });
    }
    console.log(res);

    setRefresh(false);
  };

  return (
    <div className="flex flex-col w-full rounded-xl gap-6 bg-white">
      <h1 className="text-2xl font-medium">Add Category</h1>
      <form
        onSubmit={handleSubmit}
        className="px-6 py-5 h-full flex flex-col justify-between border-t-2 gap-4"
      >
        <div className="flex justify-between items-center gap-2">
          <Categorylist category={category} setCategory={setCategory} />
          <input
            onChange={(e) =>
              setCategory((prev) => ({ ...prev, name: e.target.value }))
            }
            value={category.name}
            type="text"
            placeholder="Type here"
            className="max-w-full bg-gray-100 input input-bordered w-full "
          />
        </div>
        {error && <h1 className="text-red-400">{error}</h1>}
        <button
          className={` bg-green-600 text-white
            rounded-3xl h-12 `}
        >
          Add Record
        </button>
      </form>
    </div>
  );
}

export default AddCategory;