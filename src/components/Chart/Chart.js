import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log(dataPointsValue);
  const toMaxValue = Math.max(...dataPointsValue);
  console.log(toMaxValue);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={toMaxValue}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
}
