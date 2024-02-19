import { Card } from "react-bootstrap";
import admin from "@/assets/image/admin.jpg";
import styles from "@/assets/scss/OverlayCard.module.scss";

const OverlayCard = () => {
    return (
        <Card
            className={`${stylescard} rounded-0 rounded-top border-0 w-100 h-100`}
        >
            <Card.Body className={`${stylescard_body} p-0`}>
                <div className={stylesmedia_container}>
                    <div className={`${stylestwt_mark} rounded-top`}>
                        <i className="fa-brands fa-twitter d-flex justify-content-end p-2 text-light fs-5"></i>
                        <div className={stylestwt_overlay}></div>
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
                        className={`${stylescounter_content} py-3 d-flex justify-content-center gap-5`}
                    >
                        <div className="text-center">
                            <span className={stylescounter}>750</span>
                            <span className={stylestitle}>Tweets</span>
                        </div>
                        <div
                            className={`${stylesweather_category} text-center`}
                        >
                            <span className={stylescounter}>865</span>
                            <span className={stylestitle}>Following</span>
                        </div>
                        <div
                            className={`${stylesweather_category} text-center`}
                        >
                            <span className={stylescounter}>3645</span>
                            <span className={stylestitle}>Followers</span>
                        </div>
                    </div>
                    <div className={`${stylesmedia_body} px-3 py-3`}>
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
