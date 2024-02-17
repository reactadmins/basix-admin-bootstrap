import style from "../../assets/scss/NavBarBgWrapper.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
const NavBarBgWrapper = ({ children }) => {
    const { topNavbarBgColor } = useDashboardDataContext();
    return (
        <div data-bg-color={topNavbarBgColor} className={style.nav_bar_bg}>
            {children}
        </div>
    );
};

export default NavBarBgWrapper;
