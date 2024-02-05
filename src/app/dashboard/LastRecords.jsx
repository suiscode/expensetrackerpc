import Image from "next/image";
import React from "react";

function LastRecords() {
  return (
    <div className="flex flex-col rounded-xl w-full bg-white">
      <div className="border-b-[2px] flex items-center gap-2 py-4 px-6">
        <h1 className="font-semibold">Income - Expense</h1>
      </div>
      <div className="px-6 py-5 h-full flex flex-col justify-between">
        <ul className='flex flex-col'>
          <li className="flex w-full py-5 justify-between items-center border-b-2">
            <div className="flex items-center gap-4">
              <h1>IMAGE</h1>
              <div className="flex flex-col gap-2">
                <h1>Lending & Renting</h1>
                <h1 className="text-xs text-gray-400">3 hours ago</h1>
              </div>
            </div>
            <h1 className="text-lime-500"> - 1000$</h1>
          </li>
          <li className="flex w-full py-5 justify-between items-center border-b-2">
            <div className="flex items-center gap-4">
              <h1>IMAGE</h1>
              <div className="flex flex-col gap-2">
                <h1>Lending & Renting</h1>
                <h1 className="text-xs text-gray-400">3 hours ago</h1>
              </div>
            </div>
            <h1 className="text-lime-500"> - 1000$</h1>
          </li><li className="flex w-full py-5 justify-between items-center border-b-2">
            <div className="flex items-center gap-4">
              <h1>IMAGE</h1>
              <div className="flex flex-col gap-2">
                <h1>Lending & Renting</h1>
                <h1 className="text-xs text-gray-400">3 hours ago</h1>
              </div>
            </div>
            <h1 className="text-lime-500"> - 1000$</h1>
          </li><li className="flex w-full py-5 justify-between items-center border-b-2">
            <div className="flex items-center gap-4">
              <h1>IMAGE</h1>
              <div className="flex flex-col gap-2">
                <h1>Lending & Renting</h1>
                <h1 className="text-xs text-gray-400">3 hours ago</h1>
              </div>
            </div>
            <h1 className="text-lime-500"> - 1000$</h1>
          </li>
        </ul>
        {/* <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-4xl">1,200,000₮</h1>
          <p className="text-gray-400 ">Your Income Amount</p>
        </div>
        <div className="flex gap-1">
          <h1>UP</h1>
          <h1>%% from last month</h1>
        </div> */}
      </div>
    </div>
  );
}

export default LastRecords;