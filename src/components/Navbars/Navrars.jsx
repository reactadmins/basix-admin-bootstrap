import { useDashboardDataContext } from "../../context/dashboardDataContext";
import NavBarBgWrapper from "./NavBarBgWrapper";
import DualTopNav from "./NavbarType/DualTopNav";
import HorizontalNav from "./NavbarType/HorizontalNav";
import VerticalNav from "./NavbarType/VerticalNav";

const Navbars = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return (
                <NavBarBgWrapper>
                    <VerticalNav />
                </NavBarBgWrapper>
            );
        case "horizontal":
            return (
                <NavBarBgWrapper>
                    <HorizontalNav />
                </NavBarBgWrapper>
            );
        case "combo":
            return <HorizontalNav type="combo" />;
        case "dual_nav":
            return <DualTopNav type={activeVariation} />;
        default:
            return null;
    }
};

export default Navbars;
