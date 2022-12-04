import React from "react";
import ToggleMenu from "../../component/ToggleMenu/ToggleMenu";
import Menu from "../../component/Menu/Menu";
import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";
import "./module.SideBar.scss";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`sidebar-wrapper ${
        isOpen ? "sidebar-isopen" : "sidebar-isactive"
      }`}
    >
      <div
        className={`sidebar-container d-flex align-item-center py-4 px-0 ${
          isOpen
            ? "justify-content-between px-lg-3"
            : "justify-content-center px-lg-0"
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
          className="border-0 sidebar-btn"
        >
          {isOpen ? (
            <i className="fa-solid fa-bars-progress"></i>
          ) : (
            <span className="sidebar-menu-icon"></span>
          )}
        </button>
      </div>
      <div>
        <ul className="list-group">
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              to="dashboard"
              icon="menu-icon fa fa-dashboard"
              title="Dashboard"
              badge="New"
              badge_bg="badge-primary"
            />
          </li>
          <li className="px-3 py-3 menu-title">
            <span className="text-uppercase fw-bold">UI elements</span>
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              icon="fa fa-puzzle-piece"
              title="Components"
              sowMenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="/components/button"
                      icon="fa fa-puzzle-piece"
                      title="Button"
                      badge_bg="badge-danger"
                      badge="New"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/badges"
                      icon="menu-icon fa fa fa-id-badge"
                      title="Badges"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/tabs"
                      icon="menu-icon fa fa-bars"
                      title="Tabs"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/socialbuttons"
                      icon="menu-icon fa fa-share-square"
                      title="Social Buttons"
                      badge_bg="badge-primary"
                      badge="New"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/cards"
                      icon="menu-icon fa fa-id-card"
                      title="Cards"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/alerts"
                      icon="menu-icon fa fa-exclamation-triangle"
                      title="Alerts"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/progressbars"
                      icon="menu-icon fa fa-spinner"
                      title="Progress Bars"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/modals"
                      icon="menu-icon fa fa-fire"
                      title="Modals"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/components/grids"
                      icon="menu-icon fa fa-th"
                      title="Grids"
                    />
                  </li>
                  <li>
                    <Menu
                      to="/components/typography"
                      icon="menu-icon fa fa-file-word"
                      title="Typography"
                    />
                  </li>
                </>
              }
            />
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              to="tables"
              icon="menu-icon fa fa-table"
              title="Tables"
            />
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              icon="fa fa-pencil-square"
              title="Forms"
              sowMenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="/forms/basic-form"
                      icon="menu-icon fa fa-pencil-square"
                      title="Basic Form"
                      badge="New"
                      badge_bg={"badge-warning"}
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/forms/advanced-form"
                      icon="menu-icon fa fa-pencil-square"
                      title="Advanced Form"
                    />
                  </li>
                  <li>
                    <Menu
                      to="/forms/form-wizard"
                      icon="menu-icon fa fa-pencil-square"
                      title="Form Wizard"
                      badge="New"
                      badge_bg={"badge-danger"}
                    />
                  </li>
                </>
              }
            />
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              to="icons"
              icon="menu-icon fa fa-star"
              title="Icons"
            />
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              to="widgets"
              icon="menu-icon fa fa-calculator"
              title="Widgets"
              badge="60+"
              badge_bg="badge-info"
            />
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              icon="fa fa-pie-chart"
              title="Charts"
              sowMenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="/charts/chart-js"
                      icon="menu-icon fa fa-line-chart"
                      title="Chart JS"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="/charts/apexcharts"
                      icon="menu-icon fa fa-line-chart"
                      title="Apex Charts"
                    />
                  </li>
                  <li>
                    <Menu
                      to="/charts/recharts"
                      icon="menu-icon fa fa-line-chart"
                      title="Recharts"
                    />
                  </li>
                </>
              }
            />
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              icon="fa-solid fa-location-dot"
              title="Maps"
              sowMenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="/maps/google-map"
                      icon="menu-icon fa fa-map"
                      title="Google Maps"
                    />
                  </li>
                  <li>
                    <Menu
                      to="/maps/leaflet-map"
                      icon="menu-icon fa fa-street-view"
                      title="Leaflet Maps"
                    />
                  </li>
                </>
              }
            />
          </li>
          <li className="px-0 px-lg-3 py-3 menu-title">
            <span className="text-uppercase fw-bold">Extras</span>
          </li>
          <li className="px-3 py-3">
            <ToggleMenu
              isOpen={isOpen}
              icon={"fa fa-paperclip"}
              title={"Pages"}
              sowMenu={
                <>
                  <li className="pt-4 pb-3">
                    <Menu
                      to="login"
                      icon="menu-icon fa fa fa-sign-in"
                      title="Login"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="register"
                      icon="menu-icon fa-solid fa-user-plus"
                      title="Register"
                    />
                  </li>
                  <li className="pb-3">
                    <Menu
                      to="error404"
                      icon="menu-icon fa-solid fa-triangle-exclamation"
                      title="Error 404"
                    />
                  </li>
                  <li>
                    <Menu
                      to="error500"
                      icon="menu-icon fa-solid fa-triangle-exclamation"
                      title="Error 500"
                    />
                  </li>
                </>
              }
            />
          </li>
          <li className="px-3 py-3 dashboard-info">
            <a
              href="https://docs.vuejsadmin.com/docs/basix-admin-free-vuejs-admin-template/"
              target={"_blank"}
              className="text-decoration-none"
              style={{ fontSize: "14px", color: "#8b939b" }}
            >
              <i
                className="fa-solid fa-file-lines"
                style={{ width: "55px" }}
              ></i>
              <span>Documentation</span>
            </a>
          </li>
          <li className="px-3 py-3 dashboard-info">
            <a
              href="https://themeforest.net/item/basix-admin-vuejs-bootstrap-admin-dashboard-template/20838455"
              target={"_blank"}
              className="text-decoration-none"
              style={{ fontSize: "14px", color: "#8b939b" }}
            >
              <i
                className="fa-solid fa-shopping-cart"
                style={{ width: "55px" }}
              ></i>
              <span>Purchase</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
