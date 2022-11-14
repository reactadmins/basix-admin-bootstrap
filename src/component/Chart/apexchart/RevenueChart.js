import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RevenueChart = () => {
  const [state, setState] = useState({
    series: [67],
    options: {
      chart: {
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Median Ratio"],
    },
  });
  return (
    <div style={{ height: "229px" }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={230}
      />
    </div>
  );
};

export default RevenueChart;
