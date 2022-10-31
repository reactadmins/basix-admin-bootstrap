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
        <div className="card-header">
          <i className={`${icon} mx-2`}></i>
          <strong className="fs-6">{cardHeader}</strong>
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
        <div className="card-footer">
          <strong className="card-title">{cardFooter}</strong>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
