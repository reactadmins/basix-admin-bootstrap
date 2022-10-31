import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "./BasixAdmin.scss";

const BasixAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="wrapper">
      <div className="d-flex">
        <div className="left-panel">
          <div className={`${isOpen ? "isopen" : "isactive"} `}>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}></SideBar>
          </div>
        </div>
        <div className="w-100">
          <div>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}></NavBar>
          </div>
          <div className="px-3 px-lg-4 py-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasixAdmin;
