import React from "react";

const Card = ({
  cardHeader = "",
  cardBody = "",
  cardBodyBg = "",
  cardFooter = "",
  userInfo = "",
}) => {
  return (
    <div className="card">
      {cardHeader && (
        <div className={`card-header ${userInfo}`}>{cardHeader}</div>
      )}
      <div className={`card-body ${cardBodyBg}`}>{cardBody}</div>
      {cardFooter && <div className="card-footer">{cardFooter}</div>}
    </div>
  );
};

export default Card;
