import { Card, CardBody } from "react-bootstrap";
import CountUp from "react-countup";
import { Fragment } from "react";
import style from "../../assets/scss/StatsCard.module.scss";

export const Count = ({
    counter = "",
    symbolPosition = "",
    symbol = "",
    isCounter = "",
}) => {
    return (
        <h2 className="d-flex gap-1 align-items-center mb-0">
            {symbolPosition === "left" && <span>{symbol}</span>}
            {isCounter == true ? (
                <CountUp end={counter} duration={3} />
            ) : (
                <Fragment>{counter}</Fragment>
            )}
            {symbolPosition === "right" && <span>{symbol}</span>}
        </h2>
    );
};

export const Progress = (progressPercent, description) => {
    return (
        <Fragment>
            <div
                className={`${style.progress} bg-white my-2`}
                style={{ width: `${progressPercent}%` }}
            ></div>
            <p>{description}</p>
        </Fragment>
    );
};

const StatsCard = ({
    type = "",
    bgColor = "white",
    icon = "",
    isCounter = false,
    counter = "",
    symbolPosition = "left",
    symbol = "",
    title = "",
    isProgress = false,
    progressPercent = "",
    description = "",
    borderColor = "",
    isIconBorder = false,
}) => {
    return (
        <Card
            className={`${style.card} p-0 rounded-0 h-100`}
            style={{
                backgroundColor: bgColor,
                borderColor: `${type === "revenue-counter" && bgColor}`,
            }}
        >
            <CardBody>
                <div
                    className={`d-flex ${
                        style[type.replace(/-/g, "_")]
                    } w-100 h-100`}
                >
                    <div className={style.title}>
                        <Count
                            counter={counter}
                            symbolPosition={symbolPosition}
                            symbol={symbol}
                            isCounter={isCounter}
                        />
                        <h4 className="mb-0">{title}</h4>
                    </div>
                    {icon ? (
                        <div
                            className={`${style.icon} ${
                                isIconBorder
                                    ? "d-flex align-items-center justify-content-center rounded-circle"
                                    : ""
                            }`}
                            style={{
                                width: `${isIconBorder ? "66px" : ""}`,
                                height: `${isIconBorder ? "66px" : ""}`,
                                border: `${
                                    isIconBorder
                                        ? `3px solid ${borderColor}`
                                        : ""
                                }`,
                            }}
                        >
                            {typeof icon === "string" ? (
                                <i
                                    className={`${icon}`}
                                    style={{
                                        color: `${
                                            isIconBorder
                                                ? borderColor
                                                : "#868e96"
                                        }`,
                                    }}
                                ></i>
                            ) : (
                                icon
                            )}
                        </div>
                    ) : null}
                    {isProgress ? (
                        <Progress
                            progressPercent={progressPercent}
                            description={description}
                        />
                    ) : null}
                </div>
            </CardBody>
        </Card>
    );
};

export default StatsCard;
