"use client";
import React, { useEffect, useState } from "react";

function page() {
const [count,setCount] = useState(0)

const list = [12,32,13]

  return (
    <div className="flex gap-10">
        <button onClick={()=>setCount(prev=>prev-1)}>-</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>+</button>
    </div>
  );
}

export default page;
