import { Card, CardBody } from "react-bootstrap";
import CountUp from "react-countup";
import { Fragment } from "react";
import style from "../../assets/scss/StatsCard.module.scss";

const StatsCard = ({
    cardType = "",
    cardBg = "",
    icon = "",
    isCounter = false,
    counter = "",
    symbolDirection = "",
    symbol = "",
    title = "",
    progressPercent = "",
    progressTitle = "",
}) => {
    const count = (counter) => {
        return (
            <h2 className="d-flex gap-1 align-items-center mb-0">
                {symbolDirection === "left" && <span>{symbol}</span>}
                {isCounter == true ? (
                    <CountUp end={counter} duration={3} />
                ) : (
                    <Fragment>{counter}</Fragment>
                )}
                {symbolDirection === "right" && <span>{symbol}</span>}
            </h2>
        );
    };

    switch (cardType) {
        case "revenue-counter":
            return (
                <Card
                    className={`${style.card} p-0 rounded-0 h-100`}
                    style={{
                        backgroundColor: cardBg,
                        borderColor: cardBg,
                    }}
                >
                    <CardBody>
                        <div className="d-flex align-items-center justify-content-between w-100 h-100">
                            <div className={style.title}>
                                {count(counter)}
                                <h4>{title}</h4>
                            </div>
                            {icon ? (
                                <div className={style.icon}>
                                    {typeof icon === "string" ? (
                                        <i className={`${icon}`}></i>
                                    ) : (
                                        icon
                                    )}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </CardBody>
                </Card>
            );
        case "revenue-progressBar":
            return (
                <Card
                    className={`${style.card} rounded-0`}
                    style={{
                        backgroundColor: cardBg,
                        borderColor: cardBg,
                    }}
                >
                    <CardBody>
                        <div className={style.title}>
                            {count(counter)}
                            <h4 className="mb-0">{title}</h4>
                        </div>
                        <div
                            className={`${style.progress} bg-white my-2`}
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                        <p>{progressTitle}</p>
                    </CardBody>
                </Card>
            );
        default:
            null;
    }
};

export default StatsCard;
