import React from "react";
import Card from "../../component/Card/Card";
import LineChart from "../../component/Chart/chart js/LineChart";
import BarChart from "../../component/Chart/chart js/BarChart";
import DoughnutChart from "../../component/Chart/chart js/DoughnutChart";
import RadarChart from "../../component/Chart/chart js/RadarChart";
import PieChart from "../../component/Chart/chart js/PieChart";
import PolarAreaChart from "../../component/Chart/chart js/PolarAreaChart";
const ChartJS = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Line Chart"
            cardBody={
              <>
                <LineChart></LineChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Bar Chart"
            cardBody={
              <>
                <BarChart></BarChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Doughnut Chart"
            cardBody={
              <>
                <DoughnutChart></DoughnutChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Radar Chart"
            cardBody={
              <>
                <RadarChart></RadarChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Pie Chart"
            cardBody={
              <>
                <PieChart></PieChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Polar Area Chart"
            cardBody={
              <>
                <PolarAreaChart></PolarAreaChart>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default ChartJS;
