import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { useDashboardDataContext } from "../context/dashboardDataContext";
import NavBar from "../components/Navbars/NavBar";
import style from "../assets/scss/Layouts.module.scss";
import { Fragment } from "react";

const Layouts = () => {
    const { activeVariation, sidebarMini, navbarFixed } =
        useDashboardDataContext();
    switch (activeVariation) {
        case "vertical": {
            return (
                <div className={style.layout}>
                    <Sidebar />
                    <div
                        className={style.content}
                        style={{
                            width: `${
                                sidebarMini
                                    ? "calc(100% - 70px)"
                                    : "calc(100% - 280px)"
                            }`,
                        }}
                    >
                        <NavBar />
                        <div
                            className="p-4"
                            style={{
                                marginTop: `${navbarFixed ? "80px" : "0"}`,
                            }}
                        >
                            <Outlet />
                        </div>
                    </div>
                </div>
            );
        }
        case "horizontal": {
            return (
                <Fragment>
                    <NavBar />
                    <div
                        className="p-4"
                        style={{
                            marginTop: `${navbarFixed ? "80px" : "0"}`,
                        }}
                    >
                        <Outlet />
                    </div>
                </Fragment>
            );
        }
        case "combo": {
            return (
                <div className={style.layout}>
                    <Sidebar type="combo" />
                    <div
                        className={style.content}
                        style={{
                            width: `${
                                sidebarMini
                                    ? "calc(100% - 70px)"
                                    : "calc(100% - 280px)"
                            }`,
                        }}
                    >
                        <div className="p-4">
                            <Outlet />
                        </div>
                    </div>
                </div>
            );
        }
        case "dual_nav": {
            return "";
        }
        default:
            return null;
    }
};

export default Layouts;
