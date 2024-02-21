import React, { useEffect, useState } from "react";
import Button from "../Button";
import Title from "./Title";
import IeToggler from "./IeToggler";
import Amount from "./Amount";
import ChooseCateg from "./ChooseCateg";
import Payee from "./Payee";
import Note from "./Note";
import DateAndTime from "./DateAndTime";
import axios from "axios";
import { useGlobalContext } from "@/app/context/Context";

function AddRecord({ setRecordState }) {
  const { user } = useGlobalContext();
  const [recordData, setRecordData] = useState({
    type: "Expense",
    amount: "",
    category: "",
    payee: "",
    note: "",
  });

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault()
    console.log(recordData);
    console.log(`${date}T${time}:00`,);
    const response = await axios.post("/api/transactions/", {
      ...recordData,
      userId: user._id,
      date:`${date}T${time}`
    });
    setRecordData({
      type: "Expense",
      amount: "",
      category: "",
      date: "",
      payee: "",
      note: "",
    });

    setRecordState(false);
  };

  useEffect(()=>{
    console.log(recordData);
  },[recordData])

  return (
    <>
      <Title />
      <form
        onSubmit={handleSubmit}
        className="px-6 py-5 h-full flex justify-between"
      >
        <div className="gap-5  w-[55%] flex-col flex rounded-xl px-6">
          <IeToggler setRecordData={setRecordData} recordData={recordData} />
          <Amount recordData={recordData} setRecordData={setRecordData} />
          <ChooseCateg recordData={recordData} setRecordData={setRecordData} />
          <DateAndTime date={date} setDate={setDate} time={time} setTime={setTime}/>

          <button
            className={`${
              recordData.type !== "Expense"
                ? "bg-green-600 text-white"
                : "bg-primary text-black"
            } rounded-3xl h-12 text-white`}
          >
            Add Record
          </button>
        </div>
        <div className="flex w-[45%] flex-col rounded-xl px-6">
          <Payee recordData={recordData} setRecordData={setRecordData} />
          <Note recordData={recordData} setRecordData={setRecordData} />
        </div>
      </form>
    </>
  );
}

export default AddRecord;
