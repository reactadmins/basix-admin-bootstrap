import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        height={300}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default PieChart;
