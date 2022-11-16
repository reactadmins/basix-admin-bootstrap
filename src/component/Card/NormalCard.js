import React from "react";

const NormalCard = ({
  cardBorderColor = "",
  headerBgColor = "",
  cardTitle = "",
  cardTitleColor = "",
  badgeText = "",
  badgeBg = "",
  cardBodyBg = "",
  cardBodyText = "",
  cardBodyTextColor = "",
  footerText = "",
}) => {
  return (
    <div
      className="card rounded-0"
      style={{ border: `1px solid ${cardBorderColor}` }}
    >
      {cardTitle && (
        <div
          className="card-header rounded-0 d-flex justify-content-between"
          style={{ backgroundColor: `${headerBgColor}`, padding: "12px 20px" }}
        >
          <strong
            style={{
              color: `${cardTitleColor}`,
              fontSize: "0.975em",
              fontWeight: "700",
            }}
          >
            {cardTitle}
          </strong>

          {badgeText && (
            <span className={`${badgeBg} text-white`}>{badgeText}</span>
          )}
        </div>
      )}
      {cardBodyText && (
        <div
          className="card-body"
          style={{ backgroundColor: `${cardBodyBg}`, padding: "20px" }}
        >
          <p
            className="card-text"
            style={{
              color: `${cardBodyTextColor}`,
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            {cardBodyText}
          </p>
          {footerText && (
            <div className="d-flex gap-2 align-items-center">
              <div
                className="bg-light"
                style={{
                  width: "20px",
                  height: "2px",
                }}
              ></div>
              <footer className="text-light">{footerText}</footer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NormalCard;
