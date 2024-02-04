import { Fragment } from "react";
import CardContent from "../Card/CardContent";
import user1 from "../../assets/image/avatar/user-1.jpg";
import user2 from "../../assets/image/avatar/user-2.jpg";
import user3 from "../../assets/image/avatar/user-3.jpg";
import user4 from "../../assets/image/avatar/user-4.jpg";
import timelineStyle from "../../assets/scss/Timeline.module.scss";

const Timeline = () => {
    return (
        <Fragment>
            <CardContent
                title="Timeline"
                icons={["fa fa-ellipsis-v"]}
                CardBody={
                    <div
                        className={`${timelineStyle.timeline_container} w-100`}
                    >
                        <div
                            className={`media d-flex gap-2 mb-3 ${timelineStyle.media}`}
                        >
                            <div className={timelineStyle.icon_wrapper}>
                                <i
                                    className="fa-regular fa-file text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#5c6bc0",
                                    }}
                                ></i>
                            </div>
                            <div
                                className={`media-body ${timelineStyle.media_body}`}
                            >
                                <h5 className="mt-0">
                                    <a href="#">Anthony Marshal</a> added a new
                                    file in the project folder
                                </h5>
                                <span className="d-block">5 Minutes ago</span>
                            </div>
                        </div>
                        <div
                            className={`media d-flex gap-2 mb-3 ${timelineStyle.media}`}
                        >
                            <div className={timelineStyle.icon_wrapper}>
                                <i
                                    className="fa-solid fa-check text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#4dbd74",
                                    }}
                                ></i>
                            </div>
                            <div
                                className={`media-body ${timelineStyle.media_body}`}
                            >
                                <h5 className="mt-0">
                                    <a href="#">Maria Monica</a> added a new
                                    file in the project folder
                                </h5>
                                <span className="d-block">5 Minutes ago</span>
                            </div>
                        </div>
                        <div
                            className={`media d-flex gap-2 mb-3 ${timelineStyle.media}`}
                        >
                            <div className={timelineStyle.icon_wrapper}>
                                <i
                                    className="fa-solid fa-image text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#ffa726",
                                    }}
                                ></i>
                            </div>
                            <div
                                className={`media-body ${timelineStyle.media_body}`}
                            >
                                <h5 className="mt-0">
                                    <a href="#">Patricia Watkins</a> added 4
                                    more photos to the album
                                </h5>
                                <div className="d-flex gap-2 my-3">
                                    <img
                                        src={user1}
                                        alt="img"
                                        style={{ height: "40px" }}
                                    />
                                    <img
                                        src={user2}
                                        alt="img"
                                        style={{ height: "40px" }}
                                    />
                                    <img
                                        src={user3}
                                        alt="img"
                                        style={{ height: "40px" }}
                                    />
                                    <img
                                        src={user4}
                                        alt="img"
                                        style={{ height: "40px" }}
                                    />
                                </div>
                                <span className="d-block">5 Minutes ago</span>
                            </div>
                        </div>
                        <div
                            className={`media d-flex gap-2 mb-3 ${timelineStyle.media}`}
                        >
                            <div className={timelineStyle.icon_wrapper}>
                                <i
                                    className="fa-solid fa-user text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#ef5350",
                                    }}
                                ></i>
                            </div>
                            <div
                                className={`media-body ${timelineStyle.media_body}`}
                            >
                                <h5 className="mt-0">
                                    <a href="#">Tiffany Scott</a> added 3
                                    friends
                                </h5>
                                <div className="d-flex gap-2 my-3">
                                    <img
                                        src={user1}
                                        alt="img"
                                        style={{ height: "40px" }}
                                    />
                                    <img
                                        src={user2}
                                        alt="img"
                                        style={{ height: "40px" }}
                                    />
                                    <img
                                        src={user3}
                                        alt="img"
                                        style={{ height: "40px" }}
                                    />
                                </div>
                                <span className="d-block">5 Minutes ago</span>
                            </div>
                        </div>
                    </div>
                }
            />
        </Fragment>
    );
};

export default Timeline;
