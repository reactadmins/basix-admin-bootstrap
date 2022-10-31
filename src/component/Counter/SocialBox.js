import React from "react";

const SocialBox = ({
  background = "",
  font = "",
  total = "",
  followersCount = "",
  SocialCount = "",
  followers = "",
  SocialName = "",
}) => {
  return (
    <div className="card rounded-0">
      <div className="card-body p-0">
        <div
          className="text-center"
          style={{ backgroundColor: `${background}`, padding: "40px" }}
        >
          <i className={`${font} text-white`} style={{ fontSize: "40px" }}></i>
        </div>
        <div className="d-flex gap-3 justify-content-center align-items-center py-4">
          <div style={{ color: "#949ca0" }}>
            <strong style={{ fontSize: "20px", fontWeight: "800" }}>
              <span
                className="mx-1"
                style={{ fontWeight: "500" }}
              >{`${followersCount}`}</span>
              {`${total}`}
            </strong>
            <span
              className="d-block text-uppercase"
              style={{ fontSize: "14px" }}
            >
              {followers}
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "55px",
              backgroundColor: "#949ca0",
            }}
          ></div>
          <div style={{ color: "#949ca0" }}>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              {SocialCount}
            </span>
            <span
              className="d-block text-uppercase"
              style={{ fontSize: "14px" }}
            >
              {SocialName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBox;
