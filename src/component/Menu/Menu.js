import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({
  to,
  displayStyle,
  icon,
  title,
  badge,
  badge_bg = "",
  isOpen,
}) => {
  return (
    <>
      {isOpen ? (
        <Link
          to={to}
          className={`d-flex justify-content-between align-items-center text-decoration-none menu-item`}
        >
          <div className={`d-flex align-items-center ${displayStyle}`}>
            <i className={`${icon} menu-icon menu-hover`}></i>
            <span className="menu-title-text d-none d-lg-block menu-hover">
              {title}
            </span>
          </div>
          {badge && (
            <span className={`badge ${badge_bg} d-none d-lg-block`}>
              {badge}
            </span>
          )}
        </Link>
      ) : (
        <Link
          to={to}
          className="d-flex justify-content-center text-decoration-none"
        >
          <i className={`${icon} menu-icon-active `}></i>
        </Link>
      )}
    </>
  );
};

export default Menu;
