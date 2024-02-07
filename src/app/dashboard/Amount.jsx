import React from "react";

function Amount({name,transactions}) {
  const list = transactions.filter(item=> item.type === name)
  const sum = list.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="flex flex-col rounded-xl w-[384px] bg-white">
      <div className="border-b-[2px] flex items-center gap-2 py-4 px-6">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <h1 className="font-semibold">Your {name}</h1>
      </div>
      <div className="px-6 py-5 h-full flex flex-col justify-between">
        <div className='flex flex-col gap-1'>
          <h1 className="font-semibold text-4xl">{sum.toLocaleString()}₮</h1>
          <p className="text-gray-400 ">Your {name} Amount</p>
        </div>
        <div className='flex gap-1'>
          <h1>UP</h1>
          <h1>%% from last month</h1>
        </div>
      </div>
    </div>
  );
}

export default Amount;
