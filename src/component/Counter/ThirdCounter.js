import React from "react";
import CountUp from "react-countup";

const ThirdCounter = ({
  icon = "",
  dolar = "",
  countName = "",
  count = "",
}) => {
  return (
    <div className="card rounded-0">
      <div className="card-body bg-white d-flex gap-4 align-items-center">
        <div
          className={`d-flex justify-content-center align-items-center`}
          style={{ width: "65px", height: "65px" }}
        >
          <i
            className={`${icon} text-secondary`}
            style={{ fontSize: "35px" }}
          ></i>
        </div>
        <div>
          <p className="m-0" style={{ fontSize: "20px" }}>{`${countName}`}</p>
          <div className="d-flex gap-2">
            <p className="m-0" style={{ fontSize: "16px" }}>
              Total: {`${dolar}`}
            </p>
            <CountUp
              end={`${count}`}
              duration={3}
              style={{ fontSize: "16px" }}
            ></CountUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdCounter;
