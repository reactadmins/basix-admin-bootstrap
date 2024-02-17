import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import style from "../../assets/scss/Sidebar.module.scss";

const SidebarMenu = ({ item, index, navIsOpen, setNavIsOpen }) => {
    return (
        <Link
            to={item?.path}
            onClick={() => setNavIsOpen(navIsOpen === index ? null : index)}
            className="d-flex align-items-center justify-content-between"
        >
            <div className="d-flex align-items-center">
                <i className={`${item?.icon} ${style.menu_iocn}`}></i>
                <span className="">{item?.name}</span>
            </div>
            {item?.badge ? (
                <Badge bg={item?.badge?.variant}>{item?.badge?.text}</Badge>
            ) : null}
            {item.children ? (
                <i
                    className={`${
                        navIsOpen === index
                            ? "fa-solid fa-angle-down"
                            : "fa-solid fa-chevron-right"
                    } ${style.arrow_icon}`}
                ></i>
            ) : null}
        </Link>
    );
};

export default SidebarMenu;
