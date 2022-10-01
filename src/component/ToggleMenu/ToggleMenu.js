import React, { useEffect, useRef, useState } from "react";
import "./ToggleMenu.scss";

const ToggleMenu = ({ icon, title, isOpen, submenu }) => {
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
    <>
      <div ref={dropRef} className="dropdown">
        {isOpen ? (
          <div>
            <button
              type="button"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={`d-lg-flex gap-lg-5 align-items-center border-0 w-100  toggle-menu ${
                toggleMenu ? "" : "show-icon"
              }`}
            >
              <i className={`menu-hover ${icon}`}></i>{" "}
              <span className="d-none d-lg-block toggle-menu-title">
                {title}
              </span>
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={`border-0 w-100 toggle-active-menu
            }`}
            >
              <i className={`menu-hover menu-icon-active ${icon}`}></i>
            </button>
          </div>
        )}

        <ul
          className={`${
            toggleMenu ? "open" : "toggl-active"
          }  d-flex flex-column  ${isOpen ? "" : "show-mwnu"}`}
        >
          {submenu}
        </ul>
      </div>
    </>
  );
};

export default ToggleMenu;
