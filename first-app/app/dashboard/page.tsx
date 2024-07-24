import React from "react";
import LineChart from "./line-chart";

function BarChart() {
  return <div>BarChart</div>;
}

export default function Dashboard() {
  return (
    <div>
      <BarChart />
      Dashboard
      <LineChart />
    </div>
  );
}
