import React from "react";
import CountUp from "react-countup";
import "./firstcounter.scss";

const FirstCounter = ({
  dolar = "",
  count = "",
  percentage = "",
  count_name = "",
  icon = "",
  conuterClassNmae = "",
}) => {
  return (
    <div className="card border-0 overflow-hidden counter-wrapper">
      <div
        className={`card-body rounded-2 counter-bg ${conuterClassNmae}`}
        style={{ padding: "20px" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="counter">
            <div style={{ fontSize: "1.75rem", fontWeight: "400" }}>
              {dolar && <span className="mx-1">{dolar}</span>}
              <CountUp end={count} duration={3}></CountUp>
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
