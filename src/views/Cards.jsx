import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import OverlayCard from "../components/Card/OverlayCard";
import WidgetsCard from "../components/Card/WidgetsCard";
import placeholder from "../assets/image/placeholder.png";
import NotificationStatsCart from "../components/NotificationStatsCart/NotificationStatsCart";
import userImg from "../assets/image/admin.jpg";

const Cards = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start profile card section */}
                <Col md={6} lg={4}>
                    <ProfileCard
                        title="Profile Card"
                        userName="Steven Lee"
                        isHeader={true}
                        image={userImg}
                        userInfo={
                            <Fragment>
                                <span>
                                    <i className="fa-solid fa-location-dot"></i>{" "}
                                    California, United States
                                </span>
                                <hr className="w-100 border-0" />
                                <div className="d-flex gap-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>
                            </Fragment>
                        }
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ProfileCard
                        title="Profile Card"
                        userName="Steven Lee"
                        isFooter={true}
                        image={userImg}
                        userInfo={
                            <Fragment>
                                <span>
                                    <i className="fa-solid fa-location-dot"></i>{" "}
                                    California, United States
                                </span>
                                <hr className="w-100 border-0" />
                                <div className="d-flex gap-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>
                            </Fragment>
                        }
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ProfileCard
                        title="Profile Card"
                        userName="Steven Lee"
                        icon="fa-solid fa-user"
                        isHeader={true}
                        image={userImg}
                        userInfo={
                            <Fragment>
                                <span>
                                    <i className="fa-solid fa-location-dot"></i>{" "}
                                    California, United States
                                </span>
                                <hr className="w-100 border-0" />
                                <div className="d-flex gap-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>
                            </Fragment>
                        }
                    />
                </Col>
                {/* end profile card section */}

                {/* start notification stats card section */}
                <Col md={6} lg={4}>
                    <NotificationStatsCart />
                </Col>
                {/* end notification stats card section */}

                {/* start profile card section */}
                <Col md={6} lg={4}>
                    <ProfileCard
                        userName="Kanye West"
                        image={userImg}
                        userInfo={
                            <p
                                className="text-center fs-6 px-3 py-3"
                                style={{
                                    color: "var(--content-text-color)",
                                }}
                            >
                                Just got a pretty neat project via @ooomf - Give
                                it a try
                                <a
                                    href="#"
                                    className="text-decoration-none mx-1"
                                    style={{ color: "var(--link-color)" }}
                                >
                                    http://t.co/e02DwGEeOJ
                                </a>
                            </p>
                        }
                    />
                </Col>
                {/* end profile card section */}

                {/* start overlay card section */}
                <Col md={6} lg={4}>
                    <OverlayCard />
                </Col>
                {/* end overlay card section */}

                {/* start widgets card section */}
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card with switch"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card with Label"
                        badge="Success"
                        badgeBg="success"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card with Label"
                        badge="49"
                        badgeBg="danger"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        cardBorderColor="primary"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        cardBorderColor="secondary"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        cardBorderColor="success"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        cardBg="danger"
                        bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        footerContent="Someone famous in Source Title"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        cardBg="warning"
                        bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        footerContent="Someone famous in Source Title"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        cardBg="primary"
                        bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        footerContent="Someone famous in Source Title"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        headerBg="secondary"
                        bodyBg="primary"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        headerBg="dark"
                        bodyBg="danger"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        headerBg="success"
                        bodyBg="warning"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        title="Card Image Title"
                        cardImage={placeholder}
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        title="Card Image Title"
                        cardImage={placeholder}
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        title="Card Image Title"
                        cardImage={placeholder}
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                {/* end widgets card section */}
            </Row>
        </Fragment>
    );
};

export default Cards;
