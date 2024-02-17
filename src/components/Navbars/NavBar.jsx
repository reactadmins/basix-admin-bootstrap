import { useDashboardDataContext } from "../../context/dashboardDataContext";
import NavBarBgWrapper from "./NavBarBgWrapper";
import VerticalNav from "./NavbarType/VerticalNav";

const NavBar = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return (
                <NavBarBgWrapper>
                    <VerticalNav />
                </NavBarBgWrapper>
            );
        default:
            return null;
    }
};

export default NavBar;
