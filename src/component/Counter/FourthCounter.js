import React from "react";
import CountUp from "react-countup";

const FourthCounter = ({
  cardBg = "",
  count = "",
  percentage = "",
  dolar = "",
}) => {
  console.log("bg", dolar);
  return (
    <div className="card rounded-0">
      <div
        className="card-body text-white"
        style={{ backgroundColor: `${cardBg}` }}
      >
        <div className="d-flex align-items-center">
          <span className="mx-1" style={{ fontSize: "25px" }}>
            {dolar}
          </span>
          <CountUp
            end={`${count}`}
            duration={3}
            style={{ fontSize: "25px" }}
          ></CountUp>
          <span className="m-0" style={{ fontSize: "25px" }}>
            {percentage}
          </span>
        </div>
        <div>
          <h4 style={{ fontSize: "17px" }}>Lorem ipsum...</h4>
          <div
            className="bg-white"
            style={{ width: "55px", height: "5px" }}
          ></div>
          <small style={{ fontSize: "80%" }} name="">
            Lorem ipsum dolor sit amet enim.
          </small>
        </div>
      </div>
    </div>
  );
};

export default FourthCounter;
