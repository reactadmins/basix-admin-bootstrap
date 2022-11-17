import React from "react";
import Card from "../../component/Card/Card";
import AreaChart from "../../component/Chart/apexchart/AreaChart";
import BubbleChart from "../../component/Chart/apexchart/BubbleChart";
import CandlestickChart from "../../component/Chart/apexchart/CandlestickChart";
import ColumnChart from "../../component/Chart/apexchart/ColumnChart";
import LineChart from "../../component/Chart/apexchart/LineChart";
import PieChart from "../../component/Chart/apexchart/PieChart";

const ApexCharts = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Stacked Columns"
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
            headerTitle="Area Chart"
            cardBody={
              <>
                <AreaChart></AreaChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Column Chart"
            cardBody={
              <>
                <ColumnChart></ColumnChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Candlestick Chart"
            cardBody={
              <>
                <CandlestickChart></CandlestickChart>
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
            headerTitle="Bubble Chart"
            cardBody={
              <>
                <BubbleChart></BubbleChart>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default ApexCharts;
