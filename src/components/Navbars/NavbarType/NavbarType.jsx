import { Fragment, useState } from "react";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import Notification from "../Notification/Notification";
import Message from "../Message/Message";
import DarkModeSwitch from "../../DarkModeSwitch/DarkModeSwitch";
import styles from "./NavbarType.module.scss";
import logo from "../../../assets/image/logo.png";
import mini_logo from "../../../assets/image/mini-logo.png";
import black_logo from "../../../assets/image/black-logo.png";
import black_mini_logo from "../../../assets/image/black-mini-logo.png";
import profile from "@/assets/image/admin.jpg";
import UserProfile from "../UserProfile/UserProfile";
import SearchBar from "../../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { navItems, miniNav } from "../../../nav";
import NavBarBgWrapper from "../NavBarBgWrapper";

const NavbarType = ({ type = null }) => {
    const [openNotification, setOpenNotification] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [toggle, setToggle] = useState(false);
    const {
        topNavbarBgColor,
        navbarFixed,
        isDark,
        activeVariation,
        isThemeDirection,
        sidebarMini,
        setSidebarMini,
    } = useDashboardDataContext();

    return (
        <div className={styles.navbar_type}>
            <div
                className="d-flex align-items-center justify-content-between w-100"
                style={{ height: `${type === "dual_nav" ? "80px" : "100%"}` }}
            >
                {type === "horizontal" ||
                type === "combo" ||
                type === "dual_nav" ? (
                    <div className="d-flex align-item-center gap-3">
                        <button
                            type="button"
                            className={`${styles.toggle_btn} ${
                                toggle ? styles.active : ""
                            }`}
                            onClick={() => setToggle(!toggle)}
                        >
                            <span></span>
                        </button>
                        <Link to="/">
                            {isDark ? (
                                <Fragment>
                                    <img
                                        className={styles.logo}
                                        src={logo}
                                        alt="logo"
                                    />
                                    <img
                                        className={styles.mini_logo}
                                        src={mini_logo}
                                        alt="logo"
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <img
                                        className={styles.logo}
                                        src={
                                            topNavbarBgColor === "white"
                                                ? black_logo
                                                : logo
                                        }
                                        alt="logo"
                                    />
                                    <img
                                        className={styles.mini_logo}
                                        src={
                                            topNavbarBgColor === "white"
                                                ? black_mini_logo
                                                : mini_logo
                                        }
                                        alt="logo"
                                    />
                                </Fragment>
                            )}
                        </Link>
                    </div>
                ) : null}
                {type === "horizontal" ? (
                    <NavItem navList={miniNav} toggle={toggle} />
                ) : null}
                <ul
                    className={`${styles.navbar_action} d-flex align-items-center justify-content-between`}
                >
                    {type === "vertical" && sidebarMini ? (
                        <li>
                            <button
                                type="button"
                                onClick={() => setSidebarMini(!sidebarMini)}
                                className={styles.sidebar_menu_tggole}
                            >
                                <span></span>
                            </button>
                        </li>
                    ) : null}
                    {type === "horizontal" ||
                    type === "combo" ||
                    type === "dual_nav" ? (
                        <li>
                            <DarkModeSwitch />
                        </li>
                    ) : null}
                    <li>
                        <Status
                            icon="fa fa-search"
                            isOpen={isOpenSearch}
                            setIsOpen={setIsOpenSearch}
                        />
                    </li>
                    <li>
                        <Status
                            icon="fa fa-bell"
                            count="5"
                            countBg="danger"
                            isOpen={openNotification}
                            setIsOpen={setOpenNotification}
                        />
                        {openNotification ? (
                            <DropdownMenu top="66px" right="auto" left="auto">
                                <Notification />
                            </DropdownMenu>
                        ) : null}
                    </li>
                    <li>
                        <Status
                            icon="fa-solid fa-envelope"
                            count="5"
                            countBg="primary"
                            left="18px"
                            isOpen={openMessage}
                            setIsOpen={setOpenMessage}
                        />
                        {openMessage ? (
                            <DropdownMenu top="66px" right="auto" left="auto">
                                <Message />
                            </DropdownMenu>
                        ) : null}
                    </li>
                    {type === "horizontal" ||
                    type === "combo" ||
                    type === "dual_nav" ? (
                        <li>
                            <button
                                type="button"
                                href="#"
                                onClick={() => {
                                    setOpenUser(!openUser);
                                }}
                                className={styles.user_profile}
                            >
                                <img src={profile} alt="uesr" />
                            </button>
                            {openUser ? (
                                <DropdownMenu
                                    top="50px"
                                    right={isThemeDirection ? "auto" : "24px"}
                                    left={isThemeDirection ? "24px" : "auto"}
                                >
                                    <UserProfile />
                                </DropdownMenu>
                            ) : null}
                        </li>
                    ) : null}
                </ul>
                {type === "vertical" ? (
                    <ul
                        className={`${styles.navbar_action} d-flex align-items-center`}
                    >
                        <li>
                            <DarkModeSwitch />
                        </li>
                        <li>
                            <button
                                type="button"
                                href="#"
                                onClick={() => {
                                    setOpenUser(!openUser);
                                }}
                                className={styles.user_profile}
                            >
                                <img src={profile} alt="uesr" />
                            </button>
                            {openUser ? (
                                <DropdownMenu
                                    top="50px"
                                    right={isThemeDirection ? "auto" : "24px"}
                                    left={isThemeDirection ? "24px" : "auto"}
                                >
                                    <UserProfile />
                                </DropdownMenu>
                            ) : null}
                        </li>
                    </ul>
                ) : null}
            </div>
            {type === "dual_nav" ? (
                <NavBarBgWrapper type="dual_nav">
                    <NavItem navList={navItems} toggle={toggle} />
                </NavBarBgWrapper>
            ) : null}
            {isOpenSearch ? (
                <SearchBar
                    isOpenSearch={isOpenSearch}
                    setIsOpenSearch={setIsOpenSearch}
                />
            ) : null}
        </div>
    );
};

export default NavbarType;

export const Status = ({
    icon,
    count,
    countBg = "",
    top = "-4px",
    left = "12px",
    isOpen,
    setIsOpen,
}) => {
    return (
        <button
            type="button"
            className={styles.status_btn}
            onClick={() => setIsOpen(!isOpen)}
        >
            <i className={icon} />
            {count ? (
                <span
                    className={`${styles.count} bg-${countBg}`}
                    {...(top || left
                        ? { style: { top: top, left: left } }
                        : "")}
                >
                    {count}
                </span>
            ) : null}
        </button>
    );
};

export const NavItem = ({ navList = [], toggle = "" }) => {
    return (
        <nav className={`${styles.nav} ${toggle ? styles.nav_active : ""}`}>
            <ul className="d-flex align-items-center gap-2">
                {navList.map((item, index) => {
                    return (
                        <li key={index} className={styles.nav_item}>
                            {item.children ? (
                                <a>
                                    <i className={item.icon} />
                                    {item.name}
                                </a>
                            ) : null}
                            {item.path && !item.url && !item.children ? (
                                <Link to={item.path}>
                                    <i className={item.icon} />
                                    {item.name}
                                </Link>
                            ) : null}
                            {item.url ? (
                                <a href={item.url} target="_blank">
                                    <i className={item.icon} />
                                    {item.name}
                                </a>
                            ) : null}
                            {item?.children ? (
                                <ul>
                                    {item?.children?.map((child, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={child.path}>
                                                    <i className={child.icon} />
                                                    {child.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : null}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
