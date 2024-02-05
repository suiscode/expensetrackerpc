import React, { useState } from "react";
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
    // date: "",
    // time: "",
    payee: "",
    note: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/transactions/", {
      ...recordData,
      userId: user._id,
    });
    setRecordData({
      type: "Expense",
      amount: "",
      category: "",
      // date: "",
      // time: "",
      payee: "",
      note: "",
    });
    setRecordState(false);
  };

  return (
    <div className="flex flex-col w-1/2 rounded-xl bg-white">
      <Title setRecordState={setRecordState} />
      <form
        onSubmit={handleSubmit}
        className="px-6 py-5 h-full flex justify-between"
      >
        <div className="gap-5  w-[55%] flex-col flex rounded-xl px-6">
          <IeToggler setRecordData={setRecordData} recordData={recordData} />
          <Amount recordData={recordData} setRecordData={setRecordData} />
          <ChooseCateg recordData={recordData} setRecordData={setRecordData} />
          {/* <DateAndTime /> */}

          <Button label={"Add Record"} />
        </div>
        <div className="flex w-[45%] flex-col rounded-xl px-6">
          <Payee recordData={recordData} setRecordData={setRecordData} />
          <Note recordData={recordData} setRecordData={setRecordData} />
        </div>
      </form>
    </div>
  );
}

export default AddRecord;
