import React from "react";
import { BarChart, LineChart, Bar, Line } from "recharts";
import Card from "../../component/Card/Card";
import CartDataCount from "../../component/CartDataCount/CartDataCount";
import DownloadChart from "../../component/Chart/apexchart/DownloadChart";
import RevenueChart from "../../component/Chart/apexchart/RevenueChart";
import Timeseries from "../../component/Chart/apexchart/Timeseries";
import AnalyticsStats from "../../component/Chart/chart js/AnalyticsStats";
import EarningStats from "../../component/Chart/recharts/EarningStats";
import TrafficChart from "../../component/Chart/recharts/TrafficChart";
import FirstCounter from "../../component/Counter/FirstCounter/FirstCounter";
import SocialMediaCounter from "../../component/Counter/SocialMediaCounter";
import DeviceViewGraph from "../../component/DeviceViewGraph/DeviceViewGraph";
import MonthlyDataUpdate from "../../component/MonthlyDataUpdate/MonthlyDataUpdate";
import Stats from "../../component/Stats/Stats";
import Timeline from "../../component/Timeline/Timeline";
import UserDataCount from "../../component/UserDataCount/UserDataCount";
import Weather from "../../component/Weather/Weather";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="container-fluid p-0 p-0">
      <div className="row">
        <div>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <span className="badge  badge-primary mx-1">Success</span>
            You successfully read this important alert.
            <button
              style={{ fontSize: "13px" }}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 mb-4">
          <FirstCounter
            conuterBg="#5c6bc0"
            count={23569}
            dolar="$"
            count_name="Revenue"
            icon={
              <>
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ color: "#fff", fontSize: "3.68em" }}
                ></i>
              </>
            }
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3  col-xl-3 mb-4">
          <FirstCounter
            conuterBg="#66bb6a"
            count={85}
            percentage="%"
            count_name="Sales Increase"
            icon={
              <>
                <BarChart
                  width={100}
                  height={80}
                  data={[
                    {
                      name: "Page A",
                      uv: 2000,
                      pv: 2400,
                      amt: 2400,
                    },
                    {
                      name: "Page B",
                      uv: 6000,
                      pv: 1398,
                      amt: 2210,
                    },
                    {
                      name: "Page C",
                      uv: 4000,
                      pv: 9800,
                      amt: 2290,
                    },
                    {
                      name: "Page D",
                      uv: 8000,
                      pv: 3908,
                      amt: 2000,
                    },
                    {
                      name: "Page E",
                      uv: 4000,
                      pv: 4800,
                      amt: 2181,
                    },
                    {
                      name: "Page F",
                      uv: 6000,
                      pv: 3800,
                      amt: 2500,
                    },
                    {
                      name: "Page G",
                      uv: 2000,
                      pv: 4300,
                      amt: 2100,
                    },
                    {
                      name: "Page G",
                      uv: 5000,
                      pv: 4300,
                      amt: 2100,
                    },
                  ]}
                >
                  <Bar dataKey="uv" fill="#fff" />
                </BarChart>
              </>
            }
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 mb-4">
          <FirstCounter
            conuterBg="#ffa726"
            count={6596}
            count_name="Total Clients"
            icon={
              <>
                <i
                  className="fa-solid fa-user-group"
                  style={{ color: "#fff", fontSize: "3.68em" }}
                ></i>
              </>
            }
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <FirstCounter
            conuterBg="#42a5f5"
            count={1490}
            count_name="New Users"
            icon={
              <>
                <LineChart
                  width={100}
                  height={70}
                  data={[
                    {
                      name: "Page A",
                      uv: 400,
                      pv: 400,
                      amt: 2400,
                    },
                    {
                      name: "Page B",
                      uv: 30,
                      pv: 25000,
                      amt: 2210,
                    },
                    {
                      name: "Page C",
                      uv: 10,
                      pv: 10500,
                      amt: 2290,
                    },
                    {
                      name: "Page D",
                      uv: 20,
                      pv: 50000,
                      amt: 2000,
                    },
                  ]}
                >
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                </LineChart>
              </>
            }
          ></FirstCounter>
        </div>
        <div className="col-md-12 col-lg-4 col-xl-4 mb-4">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#fafafa"
            headerTitle="Timeseries"
            titleFontSize=".875em"
            titlefontWeight="600"
            headerTitleColot="#343a40"
            cardBodyBg="bg-white"
            cardBody={
              <>
                <Timeseries></Timeseries>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-8 col-xl-8 mb-4">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#fafafa"
            headerTitle="Traffic"
            titleFontSize=".875em"
            titlefontWeight="600"
            headerTitleColot="#343a40"
            cardBodyBg="bg-white"
            cardBody={
              <>
                <TrafficChart></TrafficChart>
              </>
            }
            cardFooterStyle="border-0 bg-white"
            cardFooter={
              <div className="mb-4 px-4">
                <div className="row">
                  <div className="col-4 text-center">
                    <span style={{ color: "#868e96", fontSize: "14px" }}>
                      Visits
                    </span>
                    <h4
                      className="m-0 text-up pb-1"
                      style={{ fontSize: "1.1rem" }}
                    >
                      29.703 Users (40%)
                    </h4>
                    <div
                      className="progress"
                      style={{ backgroundColor: "#e9ecef", height: "5px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow=""
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "40%", backgroundColor: "#28a745" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <span style={{ color: "#868e96", fontSize: "14px" }}>
                      Visits
                    </span>
                    <h4
                      className="m-0 text-up pb-1"
                      style={{ fontSize: "1.1rem" }}
                    >
                      29.703 Users (40%)
                    </h4>
                    <div
                      className="progress"
                      style={{ backgroundColor: "#e9ecef", height: "5px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow=""
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "40%", backgroundColor: "#28a745" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <span style={{ color: "#868e96", fontSize: "14px" }}>
                      Visits
                    </span>
                    <h4
                      className="m-0 text-up pb-1"
                      style={{ fontSize: "1.1rem" }}
                    >
                      29.703 Users (40%)
                    </h4>
                    <div
                      className="progress"
                      style={{ backgroundColor: "#e9ecef", height: "5px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow=""
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "40%", backgroundColor: "#28a745" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6 mb-4">
          <Card
            cardStyle="border-0"
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#fff"
            headerTitle="Earning Stats"
            titleFontSize=".875em"
            titlefontWeight="600"
            headerTitleColot="#fff"
            cardHeaderStyle="border-0 py-2"
            cardHeaderBg="#ef5350"
            cardBodyBg="#ef5350"
            cardBodyStyle="pb-0"
            cardBody={
              <>
                <EarningStats></EarningStats>
              </>
            }
            cardFooterBg="#CC4744"
            cardFooterStyle="border-0"
            cardFooter={
              <>
                <div className="d-flex justify-content-between">
                  <span
                    className="text-white"
                    style={{
                      fontSize: ".875em",
                      fontWeight: "600",
                    }}
                  >
                    Total Earning
                  </span>
                  <span
                    className="text-white"
                    style={{
                      fontSize: ".875em",
                      fontWeight: "600",
                    }}
                  >
                    $ 3265986
                  </span>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6 mb-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4 mb-md-0">
                <Card
                  iconName={{
                    icons: ["fa fa-ellipsis-v"],
                  }}
                  iconColor="#868e96"
                  cardHeaderBg="#fafafa"
                  headerTitle="Download"
                  titleFontSize=".875em"
                  titlefontWeight="600"
                  headerTitleColot="#343a40"
                  cardBodyBg="bg-white"
                  cardBody={
                    <>
                      <DownloadChart></DownloadChart>
                    </>
                  }
                ></Card>
              </div>
            </div>
            <div className="col-md-6">
              <Card
                iconName={{
                  icons: ["fa fa-ellipsis-v"],
                }}
                iconColor="#868e96"
                cardHeaderBg="#fafafa"
                headerTitle="Revenue"
                titleFontSize=".875em"
                titlefontWeight="600"
                headerTitleColot="#343a40"
                cardBodyBg="bg-white"
                cardBody={
                  <>
                    <RevenueChart></RevenueChart>
                  </>
                }
              ></Card>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-8 col-xl-8 mb-4">
          <Stats></Stats>
          <div className="row mt-4">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="mb-4 mb-md-0">
                <SocialMediaCounter
                  icon="fa-brands fa-twitter"
                  iconBg="#1da1f2"
                  count="1875980"
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <div className="mb-4 mb-md-0">
                <SocialMediaCounter
                  icon="fa-brands fa-facebook-f"
                  iconBg="#3B5998"
                  count="1875980"
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <div className="mb-4 mb-md-0">
                <SocialMediaCounter
                  icon="fa-brands fa-instagram"
                  iconBg="#833AB4"
                  count="1875980"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 col-xl-4 mb-4">
          <Timeline />
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6 mb-4">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#fafafa"
            headerTitle="Revenue"
            titleFontSize=".875em"
            titlefontWeight="600"
            headerTitleColot="#343a40"
            cardBodyBg="bg-white"
            cardBody={
              <>
                <AnalyticsStats />
              </>
            }
            cardFooterStyle="border-0 bg-white"
            cardFooter={
              <div className="row" style={{ padding: "35px 30px 24px 30px" }}>
                <div className="col-4">
                  <CartDataCount
                    chadtColor="bounce-rate"
                    countName="Bounce Rate"
                  ></CartDataCount>
                </div>
                <div className="col-4">
                  <CartDataCount
                    chadtColor="pageviews"
                    countName="Pageviews"
                  ></CartDataCount>
                </div>
                <div className="col-4">
                  <CartDataCount
                    chadtColor="new-users"
                    countName="New Users"
                  ></CartDataCount>
                </div>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6 mb-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4 mb-md-0">
                <Weather></Weather>
              </div>
            </div>
            <div className="col-md-6">
              <UserDataCount></UserDataCount>
            </div>
          </div>
          <div
            className="row mt-4"
            style={{ marginLeft: "0px", marginRight: "0px" }}
          >
            <div className="col-md-6 p-lg-0">
              <div className="mb-4 mb-md-0">
                <MonthlyDataUpdate></MonthlyDataUpdate>
              </div>
            </div>
            <div className="col-md-6 p-lg-0">
              <DeviceViewGraph></DeviceViewGraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
