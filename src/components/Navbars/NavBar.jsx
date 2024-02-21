import { useDashboardDataContext } from "@/context/dashboardDataContext";
import VerticalNav from "@/components/Navbars/NavbarType/VerticalNav";
import HorizontalNav from "@/components/Navbars/NavbarType/HorizontalNav";

const NavBar = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return <VerticalNav />;
        case "horizontal":
            return <HorizontalNav />;
        default:
            return null;
    }
};

export default NavBar;
