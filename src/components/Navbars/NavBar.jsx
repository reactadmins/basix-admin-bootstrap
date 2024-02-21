import { useDashboardDataContext } from "@/context/dashboardDataContext";
import VerticalNav from "@/components/Navbars/NavbarType/VerticalNav";

const NavBar = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return <VerticalNav />;
        default:
            return null;
    }
};

export default NavBar;
