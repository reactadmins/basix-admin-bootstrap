import React from "react";
import FirstCounter from "../../component/Counter/FirstCounter/FirstCounter";
import SecondCounter from "../../component/Counter/SecondCounter";
import ThirdCounter from "../../component/Counter/ThirdCounter";
import FourthCounter from "../../component/Counter/FourthCounter";
import ClearFix from "../../component/Counter/ClearFix";
import SocialBox from "../../component/Counter/SocialBox";
import CardGroup from "../../component/Card/CardGroup";
import NotificationCart from "../../component/Card/NotificationCart";
import ProfileCard from "../../component/Card/ProfileCard";
import ProfileImg from "../../images/admin.jpg";
import OverlayCard from "../../component/Card/OverlayCard/OverlayCard";
import { BarChart, LineChart, Bar, Line } from "recharts";

const Widgets = () => {
  return (
    <div className="container-fluid p-0 p-0">
      <div className="row gy-4 gx-4">
        <div className="col-md-6 col-lg-3 col-xl-3">
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
        <div className="col-md-6 col-lg-3  col-xl-3">
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
        <div className="col-md-6 col-lg-3 col-xl-3">
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
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SecondCounter
            icon="fa-sharp fa-solid fa-dollar-sign text-success "
            countName="Total Profit"
            count="1012"
            borderColor="border-success"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SecondCounter
            icon="fa-sharp fa-solid fa-user text-primary "
            countName="New Customer"
            count="961"
            borderColor="border-primary"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SecondCounter
            icon="fa-solid fa-table-cells-large text-warning "
            countName="Active Projects"
            count="770"
            borderColor="border-warning"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SecondCounter
            icon="fa-sharp fa-solid fa-link text-danger "
            countName="Referrals"
            count="2781"
            borderColor="border-danger"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ThirdCounter
            icon="fa-solid fa-database "
            countName="Database"
            count="765"
            borderColor="border-danger"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ThirdCounter
            icon="fa-sharp fa-regular fa-user "
            countName="Users"
            count="24720"
            borderColor="border-danger"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ThirdCounter
            icon="fa-solid fa-chart-line "
            dolar="$"
            countName="Daily Sales"
            count="7658714"
            borderColor="border-danger"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <div className="card rounded-0">
            <div className="card-body bg-white d-flex gap-4 align-items-center">
              <div
                className={`d-flex justify-content-center align-items-center`}
                style={{ width: "65px", height: "65px" }}
              >
                <i
                  className="fa-solid fa-wave-square text-secondary"
                  style={{ fontSize: "35px" }}
                ></i>
              </div>
              <div>
                <p className="m-0" style={{ fontSize: "20px" }}>
                  Bandwidth
                </p>
                <p className="m-0" style={{ fontSize: "16px" }}>
                  Total: 4TB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <FourthCounter
            headingTag="h1"
            cardBg="#5c6bc0"
            count="89"
            percentage="%"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <FourthCounter headingTag="h1" cardBg="#FFA726" count="12124" />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <FourthCounter
            headingTag="h1"
            cardBg="#EF5350"
            count="9811100"
            dolar="$"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <FourthCounter
            headingTag="h1"
            cardBg="#42A5F5"
            count="9811100"
            dolar="$"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#4DBD74"
            font="fa-sharp fa-solid fa-gears "
            color="#868e96"
            width="45px"
            height="45px"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#17A2B8"
            font="fa-sharp fa-solid fa-laptop "
            color="#868e96"
            width="45px"
            height="45px"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#FFC107"
            font="fa-sharp fa-regular fa-moon"
            color="#868e96"
            width="45px"
            height="45px"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#DC3545"
            font="fa-sharp fa-solid fa-bell "
            color="#868e96"
            width="45px"
            height="45px"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#4DBD74"
            font="fa-sharp fa-solid fa-gears "
            color="#868e96"
            width="45px"
            height="45px"
            ViewMore={
              <div>
                <hr className="my-4" />
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-between text-decoration-none"
                  style={{
                    color: "#868e96",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                </a>
              </div>
            }
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#17A2B8"
            font="fa-sharp fa-solid fa-laptop "
            color="#868e96"
            width="45px"
            height="45px"
            ViewMore={
              <div>
                <hr className="my-4" />
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-between text-decoration-none"
                  style={{
                    color: "#868e96",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                </a>
              </div>
            }
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#FFC107"
            font="fa-sharp fa-regular fa-moon"
            color="#868e96"
            width="45px"
            height="45px"
            ViewMore={
              <div>
                <hr className="my-4" />
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-between text-decoration-none"
                  style={{
                    color: "#868e96",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                </a>
              </div>
            }
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#DC3545"
            font="fa-sharp fa-solid fa-bell "
            color="#868e96"
            width="45px"
            height="45px"
            ViewMore={
              <div>
                <hr className="my-4" />
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-between text-decoration-none"
                  style={{
                    color: "#868e96",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  View More <i className="fa-sharp fa-solid fa-angle-right"></i>
                </a>
              </div>
            }
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#4DBD74"
            font="fa-sharp fa-solid fa-gears "
            color="#4DBD74"
            width="70px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#17A2B8"
            font="fa-sharp fa-solid fa-laptop "
            color="#17A2B8"
            width="70px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#FFC107"
            font="fa-sharp fa-regular fa-moon"
            color="#FFC107"
            width="70px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#DC3545"
            font="fa-sharp fa-solid fa-bell "
            color="#DC3545"
            width="70px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#4DBD74"
            font="fa-sharp fa-solid fa-gears "
            color="#4DBD74"
            width="100px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#17A2B8"
            font="fa-sharp fa-solid fa-laptop "
            color="#17A2B8"
            width="100px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#FFC107"
            font="fa-sharp fa-regular fa-moon"
            color="#FFC107"
            width="100px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <ClearFix
            clearFixbg="#DC3545"
            font="fa-sharp fa-solid fa-bell "
            color="#DC3545"
            width="100px"
            height="70px"
            padding="p-0"
            paddingBottom="pt-3"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SocialBox
            background="#3B5998"
            font="fa-brands fa-facebook-f"
            followersCount="40"
            total="K"
            followers="FRIENDS"
            SocialCount="40"
            SocialName="FEEDS"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SocialBox
            background="#00ACED"
            font="fa-brands fa-twitter"
            followersCount="30"
            total="K"
            followers="FRIENDS"
            SocialCount="450"
            SocialName="TWEETS"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SocialBox
            background="#4875B4"
            font="fa-brands fa-linkedin-in"
            followersCount="40"
            total="+"
            followers="CONTACTS"
            SocialCount="250"
            SocialName="FEEDS"
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 ">
          <SocialBox
            background="#D34836"
            font="fa-brands fa-google-plus-g"
            followersCount="894 "
            total="k"
            followers="FOLLOWERS"
            SocialCount="92"
            SocialName="CIRCLES"
          />
        </div>
        <div className="col-md-12 col-lg-12 col-xl-12">
          <div className="card-group">
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#fff"
                font="fa-solid fa-user"
                fontColor="#868e96"
                FontSize="17px"
                conunt="87500"
                conuntName="Visitors"
                conuntColor="#868e96"
                progressBg="#5C6BC0"
                progressMargin="mt-3"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                cardBorder="data-v-049d8d42"
                headingTag="h1"
                cardBg="#fff"
                font="fa-solid fa-user-plus"
                fontColor="#868e96"
                FontSize="17px"
                conunt="385"
                conuntName="NEW CLIENTS"
                conuntColor="#868e96"
                progressBg="#42A5F5"
                progressMargin="mt-3"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#fff"
                font="fa-solid fa-cart-plus"
                fontColor="#868e96"
                FontSize="17px"
                conunt="1238"
                conuntName="Products sold"
                conuntColor="#868e96"
                progressBg="#FFA726"
                progressMargin="mt-3"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                cardBorder="data-v-049d8d44"
                headingTag="h1"
                cardBg="#fff"
                font="fa-solid fa-chart-pie"
                fontColor="#868e96"
                FontSize="17px"
                conunt="28%"
                conuntName="Returning Visitors"
                conuntColor="#868e96"
                progressBg="#4DBD74"
                progressMargin="mt-3"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                cardBorder="data-v-049d8d45"
                headingTag="h1"
                cardBg="#fff"
                font="fa-regular fa-clock"
                fontColor="#868e96"
                FontSize="17px"
                conunt="5:34:11"
                conuntName="Avg. Time"
                conuntColor="#868e96"
                progressBg="#EF5350"
                progressMargin="mt-3"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                cardBorder="data-v-049d8d46"
                headingTag="h1"
                cardBg="#fff"
                font="fa-regular fa-comments"
                fontColor="#868e96"
                FontSize="17px"
                conunt="972"
                conuntName="COMMENTS"
                conuntColor="#868e96"
                progressBg="#5C6BC0"
                progressMargin="mt-3"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xl-12">
          <div className="card-group">
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#5C6BC0"
                font="fa-solid fa-user"
                fontColor="#fff"
                FontSize="2rem"
                conunt="87500"
                color="#fff"
                conuntName="Visitors"
                conuntColor="#fff"
                progressBg="#fff"
                progressMargin="my-4"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#42A5F5"
                font="fa-solid fa-user-plus"
                fontColor="#fff"
                FontSize="2rem"
                conunt="385"
                color="#fff"
                conuntName="NEW CLIENTS"
                conuntColor="#fff"
                progressBg="#fff"
                progressMargin="my-4"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#FFA726"
                font="fa-solid fa-cart-plus"
                fontColor="#fff"
                FontSize="2rem"
                conunt="1238"
                color="#fff"
                conuntName="Products sold"
                conuntColor="#fff"
                progressBg="#fff"
                progressMargin="my-4"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#4DBD74"
                font="fa-solid fa-chart-pie"
                fontColor="#fff"
                FontSize="2rem"
                conunt="28%"
                color="#fff"
                conuntName="Returning Visitors"
                conuntColor="#fff"
                progressBg="#fff"
                progressMargin="my-4"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#EF5350"
                font="fa-regular fa-clock"
                fontColor="#fff"
                FontSize="2rem"
                conunt="5:34:11"
                color="#fff"
                conuntName="Avg. Time"
                conuntColor="#fff"
                progressBg="#fff"
                progressMargin="my-4"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-2">
              <CardGroup
                headingTag="h1"
                cardBg="#5C6BC0"
                font="fa-regular fa-comments"
                fontColor="#fff"
                FontSize="2rem"
                conunt="972"
                color="#fff"
                conuntName="COMMENTS"
                conuntColor="#fff"
                progressBg="#fff"
                progressMargin="my-4"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NotificationCart />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <ProfileCard cardHeader="Profile Card" cardImg={ProfileImg} />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <OverlayCard></OverlayCard>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
