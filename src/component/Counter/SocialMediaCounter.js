import React from "react";
import CountUp from "react-countup";
const SocialMediaCounter = ({ icon, iconBg = "", count }) => {
  return (
    <div className="d-flex gap-4 align-items-center bg-white border">
      <div
        style={{ width: "90px", backgroundColor: `${iconBg}`, padding: "24px" }}
      >
        <i
          className={`${icon} text-white`}
          style={{ fontSize: "2.8125em" }}
        ></i>
      </div>
      <div>
        <CountUp
          end={count}
          duration={3}
          style={{ fontSize: "1.1rem", fontWeight: "500" }}
        ></CountUp>
        <span
          className="d-block"
          style={{ fontSize: "14px", color: "#868e96" }}
        >
          Followers
        </span>
      </div>
    </div>
  );
};

export default SocialMediaCounter;
