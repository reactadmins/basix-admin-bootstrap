import React from "react";
import placeholder from "../../images/placeholder.png";
const CardImage = () => {
  return (
    <div className="card rounded-0">
      <img src={placeholder} className="card-img-top" alt="placeholder" />
      <div className="card-body rounded-0">
        <h5
          className="card-title mb-3"
          style={{ fontSize: "1.1rem", fontWeight: "500" }}
        >
          Card Image Title
        </h5>
        <p
          className="card-text"
          style={{ fontSize: "16px", fontWeight: "400", color: "#878787" }}
        >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default CardImage;
