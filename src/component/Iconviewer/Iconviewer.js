import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import IconHooks from "../../hooks/IconHooks";

const Iconviewer = ({ iconList, iconName, pageName }) => {
  const [items] = IconHooks(`${iconList}`);
  const showIcons = items?.lists?.icons.slice(0, 18);

  return (
    <div
      className="position-relative"
      style={{ backgroundColor: "#EEEEEE", padding: "30px" }}
    >
      <div className="row gy-5">
        {showIcons?.map((icon) => (
          <div className="col-2 p-0">
            <div className="d-flex justify-content-center align-items-center">
              <Icon
                style={{ fontSize: ".85rem", cursor: "pointer" }}
                icon={`${iconName}-${icon}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-100 position-absolute d-flex justify-content-center align-items-center"
        style={{ top: "0", left: "0", bottom: "0" }}
      >
        <Link to={`${pageName}`} className="btn btn-primary px-5">
          {items?.name}
        </Link>
      </div>
    </div>
  );
};

export default Iconviewer;
