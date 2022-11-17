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
            cardHeaderBg="#f7f7f7"
            headerTitle="Line Chart"
            cardBody={
              <>
                <RechartLineChart></RechartLineChart>
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
                <RechartAreaChart></RechartAreaChart>
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
                <RechartBarChart></RechartBarChart>
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
                <RechartPieChart></RechartPieChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Radial Bar Chart"
            cardBody={
              <>
                <RechartRadialBarChart></RechartRadialBarChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeaderBg="#f7f7f7"
            headerTitle="Scatter Chart"
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
