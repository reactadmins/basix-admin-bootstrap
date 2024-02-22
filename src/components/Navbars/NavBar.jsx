import { useDashboardDataContext } from "@/context/dashboardDataContext";
import VerticalNav from "@/components/Navbars/NavbarType/VerticalNav";
import HorizontalNav from "@/components/Navbars/NavbarType/HorizontalNav";
import DualTopNav from "./NavbarType/DualTopNav";

const NavBar = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return <VerticalNav />;
        case "horizontal":
            return <HorizontalNav />;
        case "combo":
            return <HorizontalNav type={activeVariation} />;
        case "dual_nav":
            return <DualTopNav />;
        default:
            return null;
    }
};

export default NavBar;
