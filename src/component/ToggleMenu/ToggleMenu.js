import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ToggleMenu.scss";

const ToggleMenu = ({
  linkTo = "",
  icon = "",
  title = "",
  badge = "",
  badge_bg = "",
  sowMenu = "",
}) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  let dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setToggleMenu(true);
      }
    });
  }, []);

  return (
    <div ref={dropRef}>
      {linkTo && (
        <Link to={linkTo} className="toggle-menu text-decoration-none">
          <div
            className="d-flex justify-content-between align-items-center menu-item"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <div className="d-flex align-items-center">
              <i className={`${icon} menu-icon menu-gap`}></i>
              <span className="menu-title-text">{title}</span>
            </div>

            {sowMenu ? (
              <i
                style={{ fontSize: "13px" }}
                className={`${
                  toggleMenu
                    ? "fa-solid fa-chevron-right"
                    : "fa-solid fa-angle-down"
                }`}
              ></i>
            ) : (
              <span
                className={`badge ${badge_bg}`}
                style={{ padding: "6px 10px" }}
              >
                {badge}
              </span>
            )}
          </div>
          {sowMenu && (
            <div className={` ${toggleMenu ? "show-none" : "show-active"} `}>
              <ul
                className="d-flex flex-column"
                style={{ paddingLeft: "40px" }}
              >
                {sowMenu}
              </ul>
            </div>
          )}
        </Link>
      )}
      {!linkTo && (
        <div className="toggle-menu text-decoration-none">
          <div
            className="d-flex justify-content-between align-items-center menu-item"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <div className="d-flex align-items-center">
              <i className={`${icon} menu-icon menu-gap`}></i>
              <span className="menu-title-text ">{title}</span>
            </div>

            {sowMenu ? (
              <i
                style={{ fontSize: "13px" }}
                className={`arrow ${
                  toggleMenu
                    ? "fa-solid fa-chevron-right"
                    : "fa-solid fa-angle-down"
                }`}
              ></i>
            ) : (
              <span
                className={`badge ${badge_bg}`}
                style={{ padding: "6px 10px" }}
              >
                {badge}
              </span>
            )}
          </div>
          {sowMenu && (
            <div
              className={`sub-menu ${
                toggleMenu ? "show-none" : "show-active"
              } `}
            >
              <ul
                className="d-flex flex-column"
                style={{ paddingLeft: "40px" }}
              >
                {sowMenu}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
