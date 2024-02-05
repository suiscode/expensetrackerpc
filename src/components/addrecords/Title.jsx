import React from "react";

function Title({setRecordState}) {
  return (
    <div className="border-b-[2px] justify-between flex items-center gap-2 py-4 px-6">
      <h1 className="font-semibold">Income - Expense</h1>
      <h1 className="cursor-pointer font-semibold" onClick={()=>setRecordState(false)}>X</h1>

    </div>
  );
}

export default Title;
