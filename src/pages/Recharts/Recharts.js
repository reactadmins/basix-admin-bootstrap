import React from "react";
import Card from "../../component/Card/Card";
import RechartAreaChart from "../../component/Chart/recharts/RechartAreaChart";
import RechartBarChart from "../../component/Chart/recharts/RechartBarChart";
import RechartLineChart from "../../component/Chart/recharts/RechartLineChart";
import RechartPieChart from "../../component/Chart/recharts/RechartPieChart";
import RechartRadialBarChart from "../../component/Chart/recharts/RechartRadialBarChart";
import RechartScatterChart from "../../component/Chart/recharts/RechartScatterChart";

const Recharts = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Line Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <RechartLineChart></RechartLineChart>
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
                <RechartAreaChart></RechartAreaChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Bar Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <RechartBarChart></RechartBarChart>
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
                <RechartPieChart></RechartPieChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Radial Bar Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <RechartRadialBarChart></RechartRadialBarChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Scatter Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <RechartScatterChart></RechartScatterChart>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Recharts;
