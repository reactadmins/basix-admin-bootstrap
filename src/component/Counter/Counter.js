import React from "react";
import CountUp from "react-countup";
import "./CountUp.scss";

const Counter = ({ dolar, count, percentage, count_name, icon, counterBg }) => {
  return (
    <div className={`card-body ${counterBg} p-3`}>
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
  );
};

export default Counter;
