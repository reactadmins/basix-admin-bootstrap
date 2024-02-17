import style from "../../assets/scss/SidebarBgWrapper.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const SidebarBgWrapper = ({ children }) => {
    const { sidebarMini, sidebarBgColor, sidebarBgImg, isThemeDirection } =
        useDashboardDataContext();

    return (
        <div
            data-background-color={sidebarBgColor}
            className={`${style.sidebar_bg} ${sidebarMini ? style.active : ""}`}
        >
            {children}
            <div
                style={{
                    backgroundImage: `url(${sidebarBgImg ? sidebarBgImg : ""})`,
                }}
                className={style.overlay_bg}
            ></div>
        </div>
    );
};

export default SidebarBgWrapper;
