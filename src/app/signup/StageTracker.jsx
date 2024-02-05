import React from "react";
import { useGlobalContext } from "../context/Context";

function StageTracker() {
  const { stage } = useGlobalContext();

  return (
    <ul className="steps w-[300px]">
      <li
        className={`step ${stage == 1 && `step-primary`} ${
          stage == 3 && `step-primary`
        } ${stage == 2 && `step-primary`}`}
      >
        Currency
      </li>
      <li className={`step ${stage == 3 && `step-primary`} ${stage == 2 && `step-primary`}`}>Balance</li>
      <li className={`step ${stage == 3 && `step-primary`}`}>Finish</li>
    </ul>
  );
}

export default StageTracker;
