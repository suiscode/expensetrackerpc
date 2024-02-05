import React from "react";

function Note({ recordData, setRecordData }) {
  return (
    <label className="form-control h-full">
      <div className="label">
        <span className="label-text">Note</span>
      </div>
      <textarea
        value={recordData.note}
        required
        onChange={(e) =>
          setRecordData((prev) => ({ ...prev, note: e.target.value }))
        }
        className="textarea bg-gray-100 text-lg textarea-bordered h-full"
        placeholder="Note"
      ></textarea>
    </label>
  );
}

export default Note;
