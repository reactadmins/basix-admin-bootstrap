import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DownloadChart = () => {
  const [state, setState] = useState({
    series: [60],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        color: "red",
        radialBar: {
          hollow: {
            size: "60%",
            background: "#fff",
          },
        },
      },
      labels: ["Cricket"],
    },
  });
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="radialBar"
      height={258}
    />
  );
};

export default DownloadChart;
