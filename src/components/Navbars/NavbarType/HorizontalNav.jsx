import { Fragment, useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { miniNav } from "@/nav";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import Notification from "../Notification/Notification";
import Message from "../Message/Message";
import UserProfile from "../UserProfile/UserProfile";
import SearchBar from "../../SearchBar/SearchBar";
import { useDashboardDataContext } from "../../../context/dashboardDataContext";
import logo from "../../../assets/image/logo.png";
import mini_logo from "../../../assets/image/mini-logo.png";
import black_logo from "../../../assets/image/black-logo.png";
import black_mini_logo from "../../../assets/image/black-mini-logo.png";
import profile from "../../../assets/image/admin.jpg";
import DarkModeSwitch from "../../DarkModeSwitch/DarkModeSwitch";
import NavBarBgWrapper from "../NavBarBgWrapper";
import styles from "../../../assets/scss/variation/topNav/HorizontalNav.module.scss";

const HorizontalNav = ({ setSidebarMini, sidebarMini, navType = "" }) => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [isOpenSearch, setIsOpenSearch] = useState(true);

    const { topNavbarBgColor, navbarFixed, isDark, activeVariation } =
        useDashboardDataContext();

    let dropRef = useRef();
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setOpenNotification(true);
                setOpenMessage(true);
                setOpenUser(true);
            }
        });
    }, []);

    return (
        <NavBarBgWrapper>
            <div className={styles.horizontal_nav}>
                <div className="d-flex align-item-center justify-content-between p-4 w-full">
                    <div className="">
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
                    <div>2</div>
                    <ul>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </NavBarBgWrapper>
    );
};

export default HorizontalNav;
