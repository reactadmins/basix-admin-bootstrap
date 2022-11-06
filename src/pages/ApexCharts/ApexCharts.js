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
            cardHeader={
              <>
                <strong className="fs-6">Stacked Columns</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <LineChart></LineChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Area Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <AreaChart></AreaChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Column Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <ColumnChart></ColumnChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Candlestick Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <CandlestickChart></CandlestickChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Pie Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <PieChart></PieChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Bubble Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
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
