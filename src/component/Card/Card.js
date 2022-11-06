import React from "react";

const Card = ({
  cardStyle = "",
  cardHeader = "",
  cardHeaderStyle = "",
  cardHeaderBg = "",
  cardBody = "",
  cardBodyStyle = "",
  cardBodyBg = "",
  cardFooter = "",
  cardFooterStyle = "",
  cardFooterBg = "",
}) => {
  return (
    <div className={`card ${cardStyle}`}>
      {cardHeader && (
        <div
          className={`card-header ${cardHeaderStyle}`}
          style={{ backgroundColor: `${cardHeaderBg}` }}
        >
          {cardHeader}
        </div>
      )}
      <div
        className={`card-body ${cardBodyStyle}`}
        style={{ backgroundColor: `${cardBodyBg}` }}
      >
        {cardBody}
      </div>
      {cardFooter && (
        <div
          className={`card-footer ${cardFooterStyle}`}
          style={{ backgroundColor: `${cardFooterBg}` }}
        >
          {cardFooter}
        </div>
      )}
    </div>
  );
};

export default Card;
