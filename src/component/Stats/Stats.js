import React, { useState } from "react";
import Day from "./Day";
import Month from "./Month";
import Year from "./Year";

const Stats = () => {
  const [date, setDate] = useState("day");
  return (
    <div
      className="col-12 border border-1 tablist"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="position-relative overflow-hidden w-100">
        <ul className=" nav nav-tabs">
          {["day", "month", "year"].map((el) => (
            <li
              className={`${date === el ? "active" : ""} tab text-uppercase`}
              onClick={() => setDate(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div>{date === "day" && <Day />}</div>
      <div>{date === "month" && <Month />}</div>
      <div>{date === "year" && <Year />}</div>
    </div>
  );
};

export default Stats;
