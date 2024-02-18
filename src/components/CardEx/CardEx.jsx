import { Fragment, useState, useEffect, useRef } from "react";
import { Card as BootstrapCard, CardHeader } from "react-bootstrap";
import CardStyle from "../../assets/scss/Card.module.scss";
import classNames from "classnames";
import styles from "./CardEx.module.scss";

const CardEx = ({
    title = "",
    titleIcon = null,
    titleBg = "",
    isHeader = true,
    headerPosition = "top",
    bodyBg = "",
    padding = "16px",
    subscript = "",
    icons = [],
    dismissible = false,
    onClose = () => {},
    children = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return (
        <Fragment>
            <BootstrapCard className={`${CardStyle.card} rounded-0 w-100 h-100`}>
                {headerPosition === "bottom" ? (
                    <div style={{ padding: padding, background: bodyBg }}>{children}</div>
                ) : null}

                {!!isHeader ? (
                    <CardHeader
                        className={`${CardStyle.card_header} rounded-0`}
                        {...(titleBg ? { style: { background: titleBg } } : "")}>
                        <div
                            className={`d-flex align-items-center ${
                                icons.length > 0 ? "justify-content-between" : ""
                            }`}>
                            <div>
                                {titleIcon ? (
                                    <span className={classNames(styles.titleIcon, titleIcon)} />
                                ) : null}
                                <strong className={CardStyle.card_title}>{title}</strong>
                                {subscript}
                            </div>
                            {icons.length > 0 && (
                                <div className={`d-flex align-items-center ${CardStyle.card_icon}`}>
                                    {icons?.map((item, index) => (
                                        <Fragment key={index}>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsOpen(
                                                        item.icon === "fa fa-cog"
                                                            ? !isOpen
                                                            : "" || item.icon === "fa fa-ellipsis-v"
                                                            ? !isOpen
                                                            : ""
                                                    );
                                                }}
                                                className={`${CardStyle.content_settings} border-0 bg-transparent`}>
                                                <i className={item.icon} />
                                            </button>

                                            {isOpen && item?.dropdown?.length > 0 ? (
                                                <div ref={ref} className={CardStyle.card_setting}>
                                                    {item?.dropdown?.map((menu, i) => (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            onClick={menu?.method}>
                                                            <i className={menu?.icon} />
                                                            {menu.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </Fragment>
                                    ))}
                                    {!!dismissible ? (
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className={`${CardStyle.content_settings} border-0 bg-transparent`}>
                                            <i className={"fa fa-times"} />
                                        </button>
                                    ) : null}
                                </div>
                            )}
                        </div>
                    </CardHeader>
                ) : null}

                {headerPosition !== "bottom" ? (
                    <div style={{ padding: padding, background: bodyBg }}>{children}</div>
                ) : null}
            </BootstrapCard>
        </Fragment>
    );
};

export default CardEx;