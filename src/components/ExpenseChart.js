import React from "react";
import Chart from "./Chart/Chart";

export default function ExpenseChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Fab", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expenses of props.expense) {
    const expenseMonth = expenses.date.getMonth();
    chartDataPoints[expenseMonth].value += expenses.amount;
    console.log(chartDataPoints);
  }
  return <Chart dataPoints={chartDataPoints} />;
}
