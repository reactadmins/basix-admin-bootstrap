import React from "react";
import CountUp from "react-countup";
import "./CountUp.scss";

const FirstCounter = ({
  dolar = "",
  count = "",
  percentage = "",
  count_name = "",
  icon = "",
  counterBg = "",
}) => {
  return (
    <div className="card rounded-0">
      <div className={`card-body ${counterBg}`}>
        <div className="d-flex justify-content-between">
          <div className="counter">
            <div>
              {dolar && <span className="mx-1">{dolar}</span>}
              <CountUp end={count} duration={3}></CountUp>
              {percentage && <span>{percentage}</span>}
            </div>
            <p>{count_name}</p>
          </div>
          <div className="counter-icon">
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCounter;
