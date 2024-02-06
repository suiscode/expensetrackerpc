import React, { useState } from "react";

function DateAndTime({ recordData, setRecordData }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    setRecordData((prev) => ({ ...prev, date: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setRecordData((prev) => ({ ...prev, time: e.target.value }));

  };

  return (
    <div>
      <input value={recordData.date} onChange={handleDateChange} required type="date" />
      <input value={recordData.time} onChange={handleTimeChange} required type="time" />
    </div>
  );
}

export default DateAndTime;
