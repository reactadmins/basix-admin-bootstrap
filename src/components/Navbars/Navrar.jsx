import { useDashboardDataContext } from "@/context/dashboardDataContext";
import VerticalNav from "@/components/Navbar/NavbarType/VerticalNav";
import HorizontalNav from "@/components/Navbar/NavbarType/HorizontalNav";
import DualTopNav from "./NavbarType/DualTopNav";
import NavbarType from "./NavbarType/NavbarType";
import NavBarBgWrapper from "./NavBarBgWrapper";

const Navbar = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return (
                <NavBarBgWrapper>
                    <NavbarType type="vertical" />
                </NavBarBgWrapper>
            );
        case "horizontal":
            return (
                <NavBarBgWrapper>
                    <NavbarType type="horizontal" />
                </NavBarBgWrapper>
            );
        case "combo":
            return <HorizontalNav type={activeVariation} />;
        case "dual_nav":
            return <DualTopNav type={activeVariation} />;
        default:
            return null;
    }
};

export default Navbar;
