"use client";
import React, { useEffect, useState } from "react";

function page() {
const [count,setCount] = useState(0)

const dec =() => {
  setCount(count - 1)
}

const sec = () => {
  setCount(count + 1)
}


  return (
    <div className="flex gap-10">
        <button onClick={dec}>-</button>
        <h1>{count}</h1>
        <button onClick={sec}>+</button>
    </div>
  );
}

export default page;
