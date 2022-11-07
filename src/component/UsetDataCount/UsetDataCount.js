import React from "react";
import Card from "../Card/Card";
import userImg from "../../images/admin.jpg";

const UsetDataCount = () => {
  return (
    <>
      <Card
        cardStyle="border-0"
        cardHeaderStyle="border-0"
        cardHeaderBg="#5c6bc0"
        cardHeader={
          <div className="d-flex justify-content-end align-items-center py-1">
            <i className="fa fa-ellipsis-v text-white"></i>
          </div>
        }
        cardBodyBg="bg-white"
        cardBodyStyle="p-0"
        cardBody={
          <div className="weather-wrapper position-relative">
            <div
              className="p-4 pt-0"
              style={{ backgroundColor: "#5c6bc0", height: "108px" }}
            >
              <h5
                className="text-center text-white"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                Martin Luther
              </h5>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ marginTop: "-70px", marginBottom: "35px" }}
            >
              <img
                className="rounded-circle"
                src={userImg}
                alt="user img"
                style={{ width: "140px" }}
              />
            </div>
          </div>
        }
        cardFooterStyle="bg-white p-lg-2"
        cardFooter={
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-center" style={{ width: "33%" }}>
              <i
                className="fa-solid fa-thumbs-up"
                style={{ color: "#868e96", fontSize: "20px" }}
              ></i>
              <span
                className="d-block"
                style={{
                  color: "#333648",
                  fontSize: " 13px",
                  fontWeight: "600",
                }}
              >
                3,548
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
              <i
                className="fa-solid fa-user-group"
                style={{ color: "#868e96", fontSize: "20px" }}
              ></i>
              <span
                className="d-block"
                style={{
                  color: "#333648",
                  fontSize: " 13px",
                  fontWeight: "600",
                }}
              >
                23,548
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
              <i
                className="fa-solid fa-message"
                style={{ color: "#868e96", fontSize: "20px" }}
              ></i>
              <span
                className="d-block"
                style={{
                  color: "#333648",
                  fontSize: " 13px",
                  fontWeight: "600",
                }}
              >
                3,548
              </span>
            </div>
          </div>
        }
      ></Card>
    </>
  );
};

export default UsetDataCount;
