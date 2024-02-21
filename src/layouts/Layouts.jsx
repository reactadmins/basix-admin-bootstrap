import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { useDashboardDataContext } from "../context/dashboardDataContext";
import NavBar from "../components/Navbars/NavBar";
import style from "../assets/scss/Layouts.module.scss";

const Layouts = () => {
    const { activeVariation, sidebarMini } = useDashboardDataContext();
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
                        <div className="p-4">
                            <Outlet />
                        </div>
                    </div>
                </div>
            );
        }
        case "horizontal": {
            return "";
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
