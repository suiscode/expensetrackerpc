import React from "react";

function Payee({ recordData, setRecordData }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Payee</span>
      </div>
      <input
        type="text"
        placeholder="Payee"
        required
        value={recordData.payee}
        onChange={(e) =>
          setRecordData((prev) => ({ ...prev, payee: e.target.value }))
        }
        className="input input-bordered bg-gray-100 w-full max-w-xs"
      />
    </label>
  );
}

export default Payee;
