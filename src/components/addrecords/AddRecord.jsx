import React, { useState } from "react";
import Button from "../Button";
import Title from "./Title";
import IeToggler from "./IeToggler";
import Amount from "./Amount";
import ChooseCateg from "./ChooseCateg";
import Payee from "./Payee";
import Note from "./Note";
import DateAndTime from "./DateAndTime";

function AddRecord({ setRecordState }) {
  const [recordData, setRecordData] = useState({
    type: "Expense",
    amount: "",
    category: "",
    date: "",
    time: "",
    payee: "",
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recordData);
  };

  return (
    <div className="flex flex-col w-1/2 rounded-xl bg-white">
      <Title setRecordState={setRecordState} />
      <form
        onSubmit={handleSubmit}
        className="px-6 py-5 h-full flex justify-between"
      >
        <div className="flex-[1] gap-5 flex-col flex rounded-xl px-6">
          <IeToggler setRecordData={setRecordData} />
          <Amount recordData={recordData} setRecordData={setRecordData} />
          <ChooseCateg recordData={recordData} setRecordData={setRecordData} />
          <DateAndTime />

          <Button label={"Add Record"} />
        </div>
        <div className="flex-[1] flex flex-col rounded-xl px-6">
          <Payee recordData={recordData} setRecordData={setRecordData} />
          <Note recordData={recordData} setRecordData={setRecordData} />
        </div>
      </form>
    </div>
  );
}

export default AddRecord;
