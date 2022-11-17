import React from "react";

const Card = ({
  cardStyle = "",
  cardHeaderStyle = "",
  cardHeaderBg = "",
  cardBody = "",
  cardBodyStyle = "",
  cardBodyBg = "",
  cardFooter = "",
  cardFooterStyle = "",
  cardFooterBg = "",
  iconName = {},
  iconColor = "",
  headerTitle = "",
  headerTitleColot = "",
  titleFontSize = "",
  titlefontWeight = "",
  titleCode = "",
  cardHeaderIcon = "",
}) => {
  return (
    <div className={`card rounded-0 ${cardStyle}`}>
      <div
        className={`card-header ${cardHeaderStyle}`}
        style={{ backgroundColor: `${cardHeaderBg}`, padding: "12px 16px" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {cardHeaderIcon && (
              <i
                className={`${cardHeaderIcon}`}
                style={{ marginRight: "4px", fontSize: "14px" }}
              ></i>
            )}
            <strong
              style={{
                fontSize: `${titleFontSize}`,
                fontWeight: `${titlefontWeight}`,
                color: `${headerTitleColot}`,
              }}
            >
              {headerTitle}
            </strong>
            {titleCode}
          </div>
          <div className="card-actions d-flex gap-3">
            {iconName?.icons?.map((icon) => (
              <>
                <a
                  href="#"
                  type="button"
                  style={{ fontSize: "11px", color: `${iconColor}` }}
                >
                  <i className={icon}></i>
                </a>
              </>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`card-body ${cardBodyStyle}`}
        style={{ backgroundColor: `${cardBodyBg}` }}
      >
        {cardBody}
      </div>
      {cardFooter && (
        <div
          className={`card-footer ${cardFooterStyle}`}
          style={{ backgroundColor: `${cardFooterBg}`, padding: "12px 16px" }}
        >
          {cardFooter}
        </div>
      )}
    </div>
  );
};

export default Card;
