import React from "react";
import CountUp from "react-countup";
import "./firstcounter.scss";

const FirstCounter = ({
  dolar = "",
  count = "",
  percentage = "",
  count_name = "",
  icon = "",
  conuterBg = "",
}) => {
  return (
    <div className="card border-0 rounded-0  overflow-hidden counter-wrapper">
      <div
        className="card-body counter-bg "
        style={{ padding: "20px", backgroundColor: `${conuterBg}` }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="counter">
            <div style={{ fontSize: "1.75rem", fontWeight: "400" }}>
              {dolar && <span className="mx-1">{dolar}</span>}
              <CountUp end={count} duration={4}></CountUp>
              {percentage && <span>{percentage}</span>}
            </div>
            <p>{count_name}</p>
          </div>
          <div className="counter-icon">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default FirstCounter;
