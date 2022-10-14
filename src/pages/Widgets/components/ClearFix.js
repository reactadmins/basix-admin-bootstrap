import React from "react";

const ClearFix = ({
  clearFixbg = "",
  font = "",
  color = "",
  ViewMore = "",
  width = "",
  height = "height",
  padding = "",
  paddingBottom = "",
}) => {
  return (
    <div className="card rounded-0">
      <div className={`card-body ${padding}`}>
        <div className="d-flex gap-3 align-items-center">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: `${width}`,
              height: `${height}`,
              backgroundColor: `${clearFixbg}`,
            }}
          >
            <i
              className={`${font} text-white`}
              style={{ fontSize: "18px" }}
            ></i>
          </div>
          <div className={`${paddingBottom}`}>
            <p className="h5 m-0" style={{ color: `${color}` }}>
              $4.999,50
            </p>
            <span
              style={{ fontSize: "14px", fontWeight: "700", color: "#868e96" }}
            >
              INCOME
            </span>
          </div>
        </div>
        <div>{ViewMore}</div>
      </div>
    </div>
  );
};

export default ClearFix;
