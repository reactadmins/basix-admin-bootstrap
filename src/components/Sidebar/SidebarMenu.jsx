import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import style from "@/assets/scss/Sidebar.module.scss";
import { Fragment } from "react";

const SidebarMenu = ({
    item,
    index = "",
    navIsOpen = "",
    setNavIsOpen = "",
    activeMenu = "",
    setActiveMenu = "",
}) => {
    return (
        <Fragment>
            {item?.children && item?.path ? (
                <a
                    aria-expanded={
                        navIsOpen === index && item?.children ? true : false
                    }
                    onClick={() =>
                        setNavIsOpen(navIsOpen === index ? null : index)
                    }
                    className={`d-flex align-items-center justify-content-between ${
                        activeMenu === item?.name.toLowerCase()
                            ? style.active
                            : ""
                    }`}
                >
                    <div className="d-flex align-items-center">
                        <i className={`${item?.icon} ${style.menu_iocn}`}></i>
                        <span className="">{item?.name}</span>
                    </div>
                    {item?.badge ? (
                        <Badge bg={item?.badge?.variant}>
                            {item?.badge?.text}
                        </Badge>
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
                </a>
            ) : (
                <Link
                    to={item.path}
                    aria-expanded={
                        navIsOpen === index && item?.children ? true : false
                    }
                    onClick={() => {
                        setActiveMenu(
                            !item.children && item?.name.toLowerCase()
                        );
                        setNavIsOpen(null);
                    }}
                    className={`d-flex align-items-center justify-content-between ${
                        activeMenu === item?.name.toLowerCase()
                            ? style.active
                            : ""
                    }`}
                >
                    <div className="d-flex align-items-center">
                        <i className={`${item?.icon} ${style.menu_iocn}`}></i>
                        <span className="">{item?.name}</span>
                    </div>
                    {item?.badge ? (
                        <Badge bg={item?.badge?.variant}>
                            {item?.badge?.text}
                        </Badge>
                    ) : null}
                </Link>
            )}
            <div
                className={`${style.sub_menu} ${
                    navIsOpen === index ? style.active : ""
                }`}
            >
                <ul>
                    {item?.children?.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    to={item?.path}
                                    className={`d-flex align-items-center justify-content-between ${
                                        activeMenu === item?.name.toLowerCase()
                                            ? style.active
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setActiveMenu(item?.name.toLowerCase());
                                    }}
                                >
                                    <div className="d-flex align-items-center">
                                        <i
                                            className={`${item?.icon} ${style.menu_iocn}`}
                                        ></i>
                                        <span className="">{item?.name}</span>
                                    </div>
                                    {item?.badge ? (
                                        <Badge bg={item?.badge?.variant}>
                                            {item?.badge?.text}
                                        </Badge>
                                    ) : null}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default SidebarMenu;
