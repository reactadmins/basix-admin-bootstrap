import React from "react";
import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";
import Menu from "../Menu/Menu";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import "./SideBar.scss";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div
        className={`toggle-container d-flex align-item-center py-4 px-0 ${
          isOpen
            ? "justify-content-between px-lg-3"
            : "justify-content-center px-lg-0 "
        }`}
      >
        <a href=" " className="logo">
          <img src={logo} alt="basix-admin" />
        </a>
        <a href=" " className="mini-logo">
          <img src={logo2} alt="basix-admin" />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-0 toggle-btn"
        >
          {isOpen ? (
            <i className="fa-solid fa-bars-progress"></i>
          ) : (
            <span className="position-relative toggle-menu-icon"></span>
          )}
        </button>
      </div>
      <div>
        <ul className="list-group">
          <li className="px-3 py-3">
            <Menu
              to="dashboard"
              icon="menu-icon fa fa-dashboard"
              title="Dashboard"
              badge="New"
              badge_bg={"badge-primary"}
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          <li className="px-3 py-2 menu-title">
            <span className="text-uppercase fw-bold">UI elements</span>
          </li>
          <li className="px-3 py-2">
            <ToggleMenu
              icon={"fa fa-puzzle-piece"}
              title={"Components"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="button"
                      icon="menu-icon fa fa-puzzle-piece"
                      title="Button"
                      badge="New"
                      badge_bg={"badge-danger"}
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="badges"
                      icon="menu-icon fa fa fa-id-badge"
                      title="Badges"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="socialbuttons"
                      icon="menu-icon fa fa-share-square"
                      title="Social Buttons"
                      displayStyle={"gap-4"}
                      badge="New"
                      badge_bg={"badge-primary"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="cards"
                      icon="menu-icon fa fa-id-card"
                      title="Cards"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="alerts"
                      icon="menu-icon fa fa-exclamation-triangle"
                      title="Alerts"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="progressbars"
                      icon="menu-icon fa fa-spinner"
                      title="Progress Bars"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="modals"
                      icon="menu-icon fa fa-fire"
                      title="Modals"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="grids"
                      icon="menu-icon fa fa-th"
                      title="Grids"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="typography"
                      icon="menu-icon fa fa-file-word"
                      title="Typography"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="px-3 py-3">
            <Menu
              to="tables"
              icon="menu-icon fa fa-table"
              title="Tables"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          <li className="px-3 py-2">
            <ToggleMenu
              icon={"fa fa-pencil-square"}
              title={"Forms"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="basic-form"
                      icon="menu-icon fa fa-pencil-square"
                      title="Basic Form"
                      displayStyle={"gap-4"}
                      badge="New"
                      badge_bg={"badge-warning"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="advanced-form"
                      icon="menu-icon fa fa-pencil-square"
                      title="Advanced Form"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="form-wizard"
                      icon="menu-icon fa fa-pencil-square"
                      title="Form Wizard"
                      displayStyle={"gap-4"}
                      badge="New"
                      badge_bg={"badge-danger"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="px-3 py-3">
            <Menu
              to="icons"
              icon="menu-icon fa fa-star"
              title="Icons"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          <li className="px-3 py-3">
            <Menu
              to="widgets"
              icon="menu-icon fa fa-calculator"
              title="Widgets"
              displayStyle={"gap-5"}
              badge="60+"
              badge_bg={"badge-info"}
              isOpen={isOpen}
            />
          </li>
          <li className="px-3 py-2">
            <ToggleMenu
              icon={"fa fa-pie-chart"}
              title={"Charts"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="chartjs"
                      icon="menu-icon fa fa-line-chart"
                      title="Chart JS"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="apexcharts"
                      icon="menu-icon fa fa-line-chart"
                      title="Apex Charts"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="recharts"
                      icon="menu-icon fa fa-line-chart"
                      title="Recharts"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="px-3 py-2">
            <ToggleMenu
              icon={"fa-solid fa-location-dot"}
              title={"Maps"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="googlemaps"
                      icon="menu-icon fa fa-map"
                      title="Google Maps"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="leafletmaps"
                      icon="menu-icon fa fa-street-view"
                      title="Leaflet Maps"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="px-0 px-lg-3 py-3 menu-title">
            <span className="text-uppercase fw-bold">Extras</span>
          </li>
          <li className="px-3 py-2">
            <ToggleMenu
              icon={"fa fa-paperclip"}
              title={"Pages"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="login"
                      icon="menu-icon fa fa fa-sign-in"
                      title="Login"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="register"
                      icon="menu-icon fa-solid fa-user-plus"
                      title="Register"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="error404"
                      icon="menu-icon fa-solid fa-triangle-exclamation"
                      title="Error 404"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="error500"
                      icon="menu-icon fa-solid fa-triangle-exclamation"
                      title="Error 500"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="px-3 py-2">
            <Menu
              to="/"
              icon="menu-icon fa-solid fa-file-lines"
              title="Documentation"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          <li className="px-3 py-2">
            <Menu
              to="/"
              icon="menu-icon fa-solid fa-shopping-cart"
              title="Purchase"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
