import React from "react";

function Chart() {
  return (
    <div className="flex flex-col rounded-xl flex-[1] bg-white">
      <div className="border-b-[2px] flex items-center gap-2 py-4 px-6">
        <h1 className="font-semibold">Income - Expense</h1>
      </div>
      <div className="px-6 py-5 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-4xl">1,200,000₮</h1>
          <p className="text-gray-400 ">Your Income Amount</p>
        </div>
        <div className="flex gap-1">
          <h1>UP</h1>
          <h1>%% from last month</h1>
        </div>
      </div>
    </div>
  );
}

export default Chart;
