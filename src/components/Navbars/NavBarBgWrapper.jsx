import style from "../../assets/scss/NavBarBgWrapper.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
const NavBarBgWrapper = ({ children }) => {
    const { topNavbarBgColor, navbarFixed } = useDashboardDataContext();
    return (
        <div
            data-bg-color={topNavbarBgColor}
            className={`${style.navbar_bg} ${
                navbarFixed ? style.fixed_top : "position-relative"
            }`}
        >
            {children}
        </div>
    );
};

export default NavBarBgWrapper;
