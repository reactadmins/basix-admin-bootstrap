import { Card } from "react-bootstrap";
import admin from "../../assets/image/admin.jpg";
import style from "../../assets/scss/OverlayCard.module.scss";

const OverlayCard = () => {
    return (
        <Card
            className={`${style.card} rounded-0 rounded-top border-0 w-100 h-100`}
        >
            <Card.Body className={`${style.card_body} p-0`}>
                <div className={style.media_container}>
                    <div className={`${style.twt_mark} rounded-top`}>
                        <i className="fa-brands fa-twitter d-flex justify-content-end p-2 text-light fs-5"></i>
                        <div className={style.twt_overlay}></div>
                        <div className="d-flex gap-4 align-items-center rounded-top px-3 position-relative">
                            <img
                                src={admin}
                                alt="user"
                                className="w-25 rounded-circle"
                            />
                            <div>
                                <h1 className="text-light display-6 m-0">
                                    Jim Doe
                                </h1>
                                <p className="text-light m-0">
                                    Project Manager
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${style.counter_content} py-3 d-flex justify-content-center gap-5`}
                    >
                        <div className="text-center">
                            <span className={style.counter}>750</span>
                            <span className={style.title}>Tweets</span>
                        </div>
                        <div
                            className={`${style.weather_category} text-center`}
                        >
                            <span className={style.counter}>865</span>
                            <span className={style.title}>Following</span>
                        </div>
                        <div
                            className={`${style.weather_category} text-center`}
                        >
                            <span className={style.counter}>3645</span>
                            <span className={style.title}>Followers</span>
                        </div>
                    </div>
                    <div className={`${style.media_body} px-3 py-3`}>
                        <textarea
                            placeholder="Write your Tweet and Enter"
                            rows="1"
                            className="w-100 form-control"
                        ></textarea>
                        <div className="mt-4 d-flex justify-content-between">
                            <div>
                                <a href="#" className="mx-1">
                                    <i className="fa-solid fa-location-dot"></i>
                                </a>
                                <span>New Castle, UK</span>
                            </div>
                            <span>32</span>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default OverlayCard;
