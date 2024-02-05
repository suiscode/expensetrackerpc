import React from "react";

function IeToggler({setRecordData}) {
  return (
    <div className="flex w-full bg-slate-100 rounded-3xl">
      <div onClick={()=>setRecordData((prev) => ({ ...prev, type: 'Expense' }))} className="bg-primary text-center text-white rounded-3xl py-2 w-full">
        Expense
      </div>
      <div onClick={()=>setRecordData((prev) => ({ ...prev, type: 'Income' }))} className="bg-slate-100 text-center text-black rounded-3xl py-2 w-full">
        Income
      </div>
    </div>
  );
}

export default IeToggler;
