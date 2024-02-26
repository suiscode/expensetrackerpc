import React from "react";

function Amount({ recordData, setRecordData }) {
  return (
    <div className="bg-gray-100 flex flex-col gap-2 px-4 py-3 border-[2px] border-gray-300 rounded-xl">
      <h1>Amount</h1>
      <input
        value={recordData.amount}
        onChange={(e) =>
          setRecordData((prev) => ({
            ...prev,
            amount:e.target.value,
          }))
        }
        required
        placeholder="$ 000.00"
        type="number"
        className="bg-gray-100 text-2xl outline-none"
      />
    </div>
  );
}

export default Amount;
