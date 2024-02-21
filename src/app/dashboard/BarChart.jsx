import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "start",
    },
  },
};

function getCurrentAndPastMonths() {
  let currentDate = new Date();
  let monthsArray = [];

  monthsArray.push(currentDate.toLocaleString("default", { month: "long" }));

  for (let i = 0; i < 6; i++) {
    currentDate.setMonth(currentDate.getMonth() - 1);
    monthsArray.push(currentDate.toLocaleString("default", { month: "long" }));
  }

  return monthsArray.reverse();
}

export function BarChart({ transactions }) {
  const labels = getCurrentAndPastMonths();

  let sumsByMonth = {};

  function getMonthName(monthNumber) {
    const date = new Date(2000, monthNumber - 1, 1);
    return date.toLocaleString("default", { month: "long" });
  }

  transactions.forEach((transaction) => {
    const month = getMonthName(parseInt(transaction.date.split("-")[1]));
    if (!sumsByMonth[month]) {
      sumsByMonth[month] = { Expense: 0, Income: 0 };
    }
    sumsByMonth[month][transaction.type] += transaction.amount;
  });

  const expenseData = labels.map((month) => sumsByMonth[month]?.Expense || 0);
  const incomeData = labels.map((month) => sumsByMonth[month]?.Income || 0);


  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        data: expenseData,
        backgroundColor: "rgba(132, 204, 22, 1)",
        borderRadius: 20,
      },
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "rgba(249, 115, 22, 1)",
        borderRadius: 20,
      },
    ],
  };

  return (
    <div className="flex-1 bg-white rounded-2xl p-5">
      <Bar options={options} data={data} />
    </div>
  );
}
