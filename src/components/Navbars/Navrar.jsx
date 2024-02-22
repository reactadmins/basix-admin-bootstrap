import { useDashboardDataContext } from "@/context/dashboardDataContext";
import VerticalNav from "@/components/Navbar/NavbarType/VerticalNav";
import HorizontalNav from "@/components/Navbar/NavbarType/HorizontalNav";
import DualTopNav from "./NavbarType/DualTopNav";

const Navbar = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return <VerticalNav />;
        case "horizontal":
            return <HorizontalNav />;
        case "combo":
            return <HorizontalNav type={activeVariation} />;
        case "dual_nav":
            return <DualTopNav type={activeVariation} />;
        default:
            return null;
    }
};

export default Navbar;
