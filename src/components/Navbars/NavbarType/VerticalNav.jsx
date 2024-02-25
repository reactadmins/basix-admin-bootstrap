import { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBarBgWrapper from "@/components/Navbars/NavBarBgWrapper";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import Notification from "@/components/Navbars/Notification/Notification";
import Message from "@/components/Navbars/Message/Message";
import UserProfile from "@/components/Navbars/UserProfile/UserProfile";
import SearchBar from "@/components/SearchBar/SearchBar";
import profile from "@/assets/image/admin.jpg";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/navbars/VerticalNav.module.scss";
import DarkModeSwitch from "@/components/DarkModeSwitch/DarkModeSwitch";

const VerticalNav = () => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [isOpenSearch, setIsOpenSearch] = useState(true);
    const { topNavbarBgColor, setSidebarMini, sidebarMini, isThemeDirection } =
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
            <Navbar
                data-color={topNavbarBgColor}
                className={`p-4 ${styles.vertical_nav}`}
            >
                <Container fluid className="p-0">
                    <Navbar.Collapse className="justify-content-between">
                        <Nav className={styles.navbar_nav}>
                            <ul
                                className={styles.header_left}
                                ref={dropRef}
                                style={{
                                    paddingLeft: `${!sidebarMini ? "5px" : ""}`,
                                }}
                            >
                                <li
                                    className={`${styles.sidebar_menu} ${
                                        sidebarMini ? styles.active : ""
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSidebarMini(!sidebarMini)
                                        }
                                    >
                                        <span
                                            className={styles.sidebar_menu_icon}
                                        ></span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsOpenSearch(!isOpenSearch)
                                        }
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpenNotification(
                                                !openNotification
                                            );
                                            setOpenMessage(true);
                                        }}
                                        className={styles.for_notification}
                                    >
                                        <i className="fa fa-bell"></i>
                                        <span
                                            className={`${styles.count} ${
                                                topNavbarBgColor === "red"
                                                    ? "bg-info"
                                                    : "bg-danger"
                                            }`}
                                        >
                                            5
                                        </span>
                                    </button>
                                    {!openNotification ? (
                                        <DropdownMenu
                                            top="66px"
                                            right="auto"
                                            left="auto"
                                        >
                                            <Notification />
                                        </DropdownMenu>
                                    ) : null}
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpenMessage(!openMessage);
                                            setOpenNotification(true);
                                        }}
                                        className={styles.for_message}
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                        <span
                                            className={`${styles.count} bg-primary`}
                                        >
                                            5
                                        </span>
                                    </button>
                                    {!openMessage ? (
                                        <DropdownMenu
                                            top="66px"
                                            right="auto"
                                            left="auto"
                                        >
                                            <Message />
                                        </DropdownMenu>
                                    ) : null}
                                </li>
                            </ul>
                        </Nav>
                        <Nav
                            className={`${styles.navbar_nav} ${styles.navbar_nav_right}`}
                            ref={dropRef}
                        >
                            <DarkModeSwitch />
                            <div className={styles.user_area}>
                                <a
                                    href="#"
                                    onClick={() => {
                                        setOpenUser(!openUser);
                                        setOpenMessage(true);
                                        setOpenNotification(true);
                                    }}
                                    className={styles.user_dropdown}
                                >
                                    <img src={profile} alt="uesr" />
                                </a>
                            </div>
                            {!openUser ? (
                                <DropdownMenu
                                    top="50px"
                                    right={isThemeDirection ? "auto" : "24px"}
                                    left={isThemeDirection ? "24px" : "auto"}
                                >
                                    <UserProfile />
                                </DropdownMenu>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {!isOpenSearch ? (
                    <SearchBar
                        isOpenSearch={isOpenSearch}
                        setIsOpenSearch={setIsOpenSearch}
                    />
                ) : null}
            </Navbar>
        </NavBarBgWrapper>
    );
};

export default VerticalNav;
