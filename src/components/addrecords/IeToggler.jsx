import React from "react";

function IeToggler({setRecordData,recordData}) {
  const value = recordData.type
  return (
    <div className="flex w-full bg-slate-100 rounded-3xl">
      <div onClick={()=>setRecordData((prev) => ({ ...prev, type: 'Expense' }))} className={`${value === 'Expense' ? 'bg-primary text-white' : "bg-slate-100 text-black"} cursor-pointer text-center  rounded-3xl py-2 w-full`} >
        Expense
      </div>
      <div onClick={()=>setRecordData((prev) => ({ ...prev, type: 'Income' }))} className={`${value !== 'Expense' ? 'bg-green-600 text-white' : "bg-slate-100 text-black"} cursor-pointer text-center  rounded-3xl py-2 w-full`}>
        Income
      </div>
    </div>
  );
}

export default IeToggler;
