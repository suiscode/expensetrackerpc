import React, { useEffect, useState } from "react";

function DateAndTime({ time,setTime,date,setDate }) {

  return (
    <div>
      <input value={date} onChange={e=>setDate(e.target.value)} required type="date" />
      <input value={time} onChange={e=>setTime(e.target.value)} required type="time" />
    </div>
  );
}

export default DateAndTime;
