import React from "react";
import CountUp from "react-countup";

const SecondCounter = ({
  icon = "",
  countName = "",
  count = "",
  borderColor = "",
}) => {
  return (
    <div className="card rounded-0">
      <div className="card-body bg-white d-flex gap-4 align-items-center">
        <div
          className={`border border-3 ${borderColor} rounded-circle d-flex justify-content-center align-items-center`}
          style={{ width: "65px", height: "65px" }}
        >
          <i className={`${icon}`} style={{ fontSize: "30px" }}></i>
        </div>
        <div>
          <p className="text-secondary m-0">{`${countName}`}</p>
          <CountUp
            end={`${count}`}
            duration={3}
            style={{ fontSize: "24px", color: "#373757" }}
          ></CountUp>
        </div>
      </div>
    </div>
  );
};

export default SecondCounter;
