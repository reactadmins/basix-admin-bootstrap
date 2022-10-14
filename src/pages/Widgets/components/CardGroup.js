import React from "react";

const CardGroup = ({
  headingTag = "",
  cardBg = "",
  font = "",
  fontColor = "",
  FontSize = "",
  conunt = "",
  color = "",
  conuntName = "",
  conuntColor = "",
  progressBg = "",
  progressMargin = "",
}) => {
  return (
    <div className="card rounded-0" style={{ backgroundColor: `${cardBg}` }}>
      <div className="card-body">
        <div className={`text-end ${headingTag}`}>
          <i
            className={`${font}`}
            style={{ color: `${fontColor}`, fontSize: `${FontSize}` }}
          ></i>
        </div>
        <div>
          <span style={{ fontSize: "1.5rem", color: `${color}` }}>
            {conunt}
          </span>
          <small
            className="d-block text-uppercase"
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: `${conuntColor}`,
            }}
          >
            {conuntName}
          </small>
          <div
            className={`${progressMargin}`}
            style={{
              width: "40%",
              height: "5px",
              backgroundColor: `${progressBg}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
