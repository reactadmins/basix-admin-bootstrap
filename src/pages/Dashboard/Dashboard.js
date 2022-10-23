import React, { useState } from "react";
import Card from "../../component/Card/Card";
import RealTime from "../../component/Chart/RealTime";
import FirstCounter from "../Widgets/components/FirstCounter";
import Day from "./component/Day";
import Month from "./component/Month";
import SocialMediaCounter from "./component/SocialMediaCounter";
import Timeline from "./component/Timeline";
import Year from "./component/Year";
import "./dashboard.scss";

const Dashboard = () => {
  const [date, setDate] = useState("day");

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
            counterBg="revenue-bg"
            count={23569}
            dolar="$"
            count_name="Revenue"
            icon="fa-solid fa-cart-shopping"
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3  col-xl-3 mb-4">
          <FirstCounter
            counterBg="sales-increase-bg"
            count={85}
            percentage="%"
            count_name="Sales Increase"
            icon="fa-solid fa-cart-shopping"
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 mb-4">
          <FirstCounter
            counterBg="total-clients-bg"
            count={6596}
            count_name="Total Clients"
            icon="fa-solid fa-user-group"
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <FirstCounter
            counterBg="users-bg"
            count={1490}
            count_name="New Users"
            icon="fa-solid fa-cart-shopping"
          ></FirstCounter>
        </div>
        <div className="col-md-12 col-lg-4 col-xl-4 mb-4">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong style={{ fontSize: ".875em" }}>Real Time </strong>
                </div>
                <div className="d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog" style={{ fontSize: "12px" }}></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i
                      className="fa fa-angle-down"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times" style={{ fontSize: "12px" }}></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <RealTime />
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-12 col-lg-8 col-xl-8 mb-4">
          <h1>Hello 2</h1>
        </div>
        <div className="col-12 col-md-12 col-lg-8 col-xl-8 mb-4">
          <div
            className="col-12 border border-1 tablist"
            style={{ backgroundColor: "#FAFAFA" }}
          >
            <div className="position-relative overflow-hidden w-100">
              <ul className=" nav nav-tabs">
                {["day", "month", "year"].map((el) => (
                  <li
                    className={`${
                      date === el ? "active" : ""
                    } tab text-uppercase`}
                    onClick={() => setDate(el)}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div>{date === "day" && <Day />}</div>
            <div>{date === "month" && <Month />}</div>
            <div>{date === "year" && <Year />}</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <SocialMediaCounter
                icon="fa-brands fa-twitter"
                iconBg="#1da1f2"
                count="1875980"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <SocialMediaCounter
                icon="fa-brands fa-facebook-f"
                iconBg="#3B5998"
                count="1875980"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <SocialMediaCounter
                icon="fa-brands fa-instagram"
                iconBg="#833AB4"
                count="1875980"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 col-xl-4 mb-4">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
