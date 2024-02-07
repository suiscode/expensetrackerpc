"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { useGlobalContext } from "../context/Context";

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
];

const getBackgroundColor = (index) => {
  return colors[index % colors.length];
};

function PieChart({ transactions }) {

  const {category}  = useGlobalContext()

  const chartRef = useRef(null);
  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
    }
  }, []);

  const listExpense = transactions
    .filter((item) => item.type === "Expense")
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  const amounts = listExpense.map((item) => item.amount);

  let doughtnutData = {
    datasets: [
      {
        label: "%",
        data: amounts,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex flex-col rounded-xl flex-1 bg-white">
      <div className="border-b-[2px] flex items-center gap-2 py-4 px-6">
        <h1 className="font-semibold">Income - Expense</h1>
      </div>
      <div className="flex-1 p-2 flex items-center gap-4 w-full h-[100px]">
        <div className="w-2/5 pl-4">
          <Doughnut
            ref={chartRef}
            data={doughtnutData}
            width={100}
            height={50}
          />
        </div>
        <ul>
          {listExpense.map((item, index) => (
            <li key={item._id} className="flex items-center gap-4">
              <div
                style={{ backgroundColor: getBackgroundColor(index) }}
                className="w-4 h-4 rounded-full"
              ></div>
              <h1>{category
                        .filter((categ) => categ._id === item.category)
                        .map((filteredCategory) => (
                          <span key={filteredCategory._id}>
                            {filteredCategory.name}
                          </span>
                        ))}</h1>
              <h1>{item.amount.toLocaleString()}$</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PieChart;
