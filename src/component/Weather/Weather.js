import React from "react";
import Card from "../Card/Card";

const Weather = () => {
  return (
    <>
      <Card
        cardStyle="border-0"
        cardHeaderStyle="border-0 rounded-0"
        iconName={{
          icons: ["fa fa-ellipsis-v"],
        }}
        iconColor="#fff"
        cardHeaderBg="rgb(255, 167, 38)"
        headerTitle="Revenue"
        headerTitleColot="#fff"
        cardBodyBg="bg-white"
        cardBodyStyle="p-0"
        cardBody={
          <div className="weather-wrapper">
            <div
              className="d-flex justify-content-between p-4 p-lg-2 p-xl-4"
              style={{ backgroundColor: "#ffa726" }}
            >
              <i
                className="fa fa-cloud text-white"
                style={{ fontSize: "3.75em" }}
              ></i>
              <div className="mt-2">
                <h3
                  className="text-white mb-0"
                  style={{ fontSize: "1.125em", fontWeight: "400" }}
                >
                  Partly Cloudy
                </h3>
                <span
                  className="text-white text-end"
                  style={{ fontSize: "12px" }}
                >
                  Sunday, Mar 2022
                </span>
              </div>
            </div>
            <div className="row p-4 p-lg-2 p-xl-4">
              <div className="col-6">
                <h5
                  className="text-uppercase mb-0"
                  style={{ fontSize: "1em", fontWeight: "400 " }}
                >
                  New York
                </h5>
                <span className="text-uppercase" style={{ color: "#868e96" }}>
                  Usa
                </span>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <h2 style={{ fontSize: "2rem" }}>21</h2>
                  <span
                    className="mx-1"
                    style={{
                      color: "#868e96",
                      fontSize: "14px",
                      marginTop: "14px ",
                    }}
                  >
                    °C
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
        cardFooterStyle="bg-white p-lg-2"
        cardFooter={
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-center" style={{ width: "33%" }}>
              <span
                className="text-uppercase"
                style={{ fontSize: " 12px", color: "#868e96" }}
              >
                Feels
              </span>
              <span
                className="d-block"
                style={{
                  color: "#333648",
                  fontSize: " 13px",
                  fontWeight: "600",
                }}
              >
                23°
              </span>
            </div>
            <hr
              className="mx-3"
              style={{
                width: "1px",
                height: "32px",
                backgroundColor: "rgb(18 18 18)",
              }}
            />
            <div className="text-center" style={{ width: "33%" }}>
              <span
                className="text-uppercase"
                style={{ fontSize: " 12px", color: "#868e96" }}
              >
                Humidity
              </span>
              <span
                className="d-block"
                style={{
                  color: "#333648",
                  fontSize: " 13px",
                  fontWeight: "600",
                }}
              >
                37%
              </span>
            </div>
            <hr
              className="mx-3"
              style={{
                width: "1px",
                height: "32px",
                backgroundColor: "rgb(18 18 18)",
              }}
            />
            <div className="text-center" style={{ width: "33%" }}>
              <span
                className="text-uppercase"
                style={{ fontSize: " 12px", color: "#868e96" }}
              >
                Wind
              </span>
              <span
                className="d-block"
                style={{
                  color: "#333648",
                  fontSize: " 13px",
                  fontWeight: "600",
                }}
              >
                4 km/h
              </span>
            </div>
          </div>
        }
      ></Card>
    </>
  );
};

export default Weather;
