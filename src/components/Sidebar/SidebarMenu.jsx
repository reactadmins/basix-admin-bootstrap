import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import style from "../../assets/scss/Sidebar.module.scss";
import { Fragment } from "react";

const SidebarMenu = ({
    item,
    index = "",
    navIsOpen = "",
    setNavIsOpen = "",
}) => {
    return (
        <Fragment>
            <Link
                to={item.path}
                aria-expanded={
                    navIsOpen === index && item?.children ? true : false
                }
                onClick={() => setNavIsOpen(navIsOpen === index ? null : index)}
                className={`d-flex align-items-center justify-content-between ${
                    item.path && navIsOpen === index && !item?.children
                        ? style.active
                        : ""
                }`}
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
            <div
                className={`${style.sub_menu} ${
                    navIsOpen === index ? style.active : ""
                }`}
            >
                {item?.children ? (
                    <ul>
                        {item?.children?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={item?.path}
                                        className="d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i
                                                className={`${item?.icon} ${style.menu_iocn}`}
                                            ></i>
                                            <span className="">
                                                {item?.name}
                                            </span>
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
                ) : null}
            </div>
        </Fragment>
    );
};

export default SidebarMenu;
