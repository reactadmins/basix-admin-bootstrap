import React from "react";

const ProfileCard = ({
  cardHeader = "",
  cardImg = "",
  icon = "",
  cardFooter = "",
}) => {
  return (
    <div className="card">
      {cardHeader && (
        <div className="card-header" style={{ padding: "12px 20px" }}>
          {icon && <i className={`${icon}`} style={{ marginRight: "6px" }}></i>}
          <strong style={{ fontSize: " 0.975em", fontWeight: "700" }}>
            {cardHeader}
          </strong>
        </div>
      )}
      <div className="card-body">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img
            src={cardImg}
            alt="Card image"
            className="rounded-circle inline-blocks w-50"
          />
          <span className="mt-2">Steven Lee</span>
          <span>
            <i className="fa-solid fa-location-dot"></i> California, United
            States
          </span>
          <hr className="w-100 bg-secondary" />
          <div className="d-flex gap-2">
            <a href="#" className="text-decoration-none text-secondary">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              <i className="fa-brands fa-pinterest "></i>
            </a>
          </div>
        </div>
      </div>
      {cardFooter && (
        <div className="card-footer" style={{ padding: "12px 20px" }}>
          <strong className="card-title">{cardFooter}</strong>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
