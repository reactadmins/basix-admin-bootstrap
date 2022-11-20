import React from "react";
import Card from "../Card/Card";
import userImg from "../../images/admin.jpg";
import "./userdatacount.scss";

const UsetDataCount = () => {
  return (
    <>
      <Card
        cardStyle="border-0"
        cardHeaderStyle="border-0 rounded-0"
        iconName={{
          icons: ["fa fa-ellipsis-v"],
        }}
        iconColor="#fff"
        cardHeaderBg="rgb(92, 107, 192)"
        headerTitleColot="#fff"
        cardBodyBg="bg-white"
        cardBodyStyle="p-0"
        cardBody={
          <div className="user-data-count-wrapper position-relative overflow-hidden">
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
              className="d-flex justify-content-center align-items-center user-data-count-img"
              style={{ marginTop: "-70px", marginBottom: "35px" }}
            >
              <img className="rounded-circle" src={userImg} alt="user img" />
            </div>
          </div>
        }
        cardFooterStyle="bg-white p-lg-2"
        cardFooter={
          <div className="d-flex justify-content-between align-items-center overflow-hidden">
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
