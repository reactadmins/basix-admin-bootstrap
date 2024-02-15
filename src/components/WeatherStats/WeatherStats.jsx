import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";
import style from "../../assets/scss/WeatherStats.module.scss";

export const Stats = ({ title, counter, Symbol }) => {
    return (
        <div className={`${style.stats} text-center`}>
            <span className={`${style.stats_title} text-uppercase fw-normal`}>
                {title}
            </span>
            <span className={`${style.stats_counter} d-block fw-semibold`}>
                {counter}
                {Symbol}
            </span>
        </div>
    );
};

const WeatherStats = () => {
    const [isOpen, setIsOpen] = useState();
    return (
        <Card className={`${style.card} rounded-0 border-0`}>
            <CardHeader
                className={`${style.card_header} border-0 rounded-0 d-flex justify-content-between align-items-center`}
            >
                <h2 className="text-white mb-0 fw-semibold">Weather</h2>
                <button
                    type="button"
                    className="border-0 bg-transparent text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className="fa fa-ellipsis-v"></i>
                </button>
                {isOpen ? (
                    <div className={style.card_setting}>
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
            </CardHeader>
            <CardBody className={`${style.card_body} p-0 border-0`}>
                <div
                    className={`${style.weather_stats} p-4 pt-0 pb-2 d-flex justify-content-between align-items-center`}
                >
                    <span className={style.weather_icon}>
                        <i className="fa fa-cloud text-white"></i>
                    </span>
                    <div className={style.media_body}>
                        <h3 className="text-white mb-0">Partly Cloudy</h3>
                        <span className="text-white text-end d-block">
                            Sunday, April 2023
                        </span>
                    </div>
                </div>
                <div
                    className={`${style.media_content} p-4 d-flex justify-content-between align-items-center`}
                >
                    <div>
                        <h5 className="text-uppercase fs-6 fw-normal mb-0">
                            New York
                        </h5>
                        <span className="text-uppercase fw-normal">Usa</span>
                    </div>
                    <div
                        className={`${style.weather_counte} d-flex align-items-baseline`}
                    >
                        <h2 className="mb-0 fw-normal">21</h2>
                        <span className="d-block">°C</span>
                    </div>
                </div>
            </CardBody>
            <CardFooter className={style.card_footer}>
                <div className="d-flex justify-content-between align-items-center">
                    <Stats title="Feels" counter={23} Symbol="°" />
                    <hr className="mx-3" />
                    <Stats title="Humidity" counter={37} Symbol="%" />
                    <hr className="mx-3" />
                    <Stats title="Wind" counter={4} Symbol=" km/h" />
                </div>
            </CardFooter>
        </Card>
    );
};

export default WeatherStats;
