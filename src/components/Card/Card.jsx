import { Fragment, useState } from "react";
import { Card as BootstrapCard, CardHeader } from "react-bootstrap";
import CardStyle from "../../assets/scss/Card.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const Card = ({ title = "", subscript = "", icons = [], children = "" }) => {
    const [isOpen, setIsOpen] = useState();
    const [hiddenContent, setHiddenContent] = useState();
    const { isDark } = useDashboardDataContext();

    return (
        <Fragment>
            {!hiddenContent ? (
                <BootstrapCard
                    className={`${CardStyle.card} rounded-0`}
                    style={{
                        border: `${isDark ? "0" : ""}`,
                        boxShadow: `${isDark ? "0 0 0 1px #ffffff25" : ""}`,
                    }}
                >
                    <CardHeader
                        className={`${CardStyle.card_header} rounded-0`}
                    >
                        <div
                            className={`d-flex align-items-center ${
                                icons > 0 ? "justify-content-between" : " "
                            }`}
                        >
                            <strong className={CardStyle.card_title}>
                                {title}
                            </strong>
                            {subscript}
                            {icons.length > 0 && (
                                <div
                                    className={`d-flex align-items-center ${CardStyle.card_icon}`}
                                >
                                    {icons?.map((item, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => {
                                                setIsOpen(
                                                    item === "fa fa-cog"
                                                        ? !isOpen
                                                        : "" ||
                                                          item ===
                                                              "fa fa-ellipsis-v"
                                                        ? !isOpen
                                                        : ""
                                                );
                                                setHiddenContent(
                                                    item === "fa fa-times"
                                                        ? !hiddenContent
                                                        : ""
                                                );
                                            }}
                                            className={`${CardStyle.content_settings} border-0 bg-transparent`}
                                        >
                                            <i className={item}></i>
                                        </button>
                                    ))}
                                    {isOpen ? (
                                        <div className={CardStyle.card_setting}>
                                            <button type="button">
                                                <i className="fa-solid fa-gear"></i>
                                                Edit
                                            </button>
                                            <button type="button">
                                                <i className="fa-solid fa-trash"></i>
                                                Delete
                                            </button>
                                            <button type="button">
                                                <i className="fa-solid fa-recycle"></i>
                                                Update
                                            </button>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            )}
                        </div>
                    </CardHeader>
                    {children}
                </BootstrapCard>
            ) : (
                ""
            )}
        </Fragment>
    );
};

export default Card;
