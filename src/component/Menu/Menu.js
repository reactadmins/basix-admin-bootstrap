import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({
  to = "",
  icon = "",
  title = "",
  badge_bg = "",
  badge = "",
}) => {
  return (
    <Link
      to={`${to}`}
      className="d-flex justify-content-between align-items-center text-decoration-none menu-wrapper"
    >
      <div className="d-flex align-items-center gap-4 menu-item">
        <i className={`${icon}`}></i>
        <span>{title}</span>
      </div>
      {badge && <span className={`badge ${badge_bg}`}>{badge}</span>}
    </Link>
  );
};

export default Menu;
