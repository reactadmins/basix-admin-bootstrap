import { Fragment } from "react";
import {
    Badge,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    ProgressBar,
    Row,
} from "react-bootstrap";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import OverlayCard from "../components/OverlayCard/OverlayCard";
import WidgetsCard from "../components/WidgetsCard/WidgetsCard";
import placeholder from "../assets/image/placeholder.png";
import NotificationStatsCart from "../components/NotificationStatsCart/NotificationStatsCart";
import userImg from "../assets/image/admin.jpg";

const Cards = () => {
let now = 10;
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
                    <WidgetsCard>
                        <CardHeader>
                            <h2>Card with switch</h2>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard>
                        <CardHeader>
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Card with switch</h2>{" "}
                                <Badge bg="success">Success</Badge>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard>
                        <CardHeader>
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Card with switch</h2>{" "}
                                <Badge bg="danger">49</Badge>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard borderColor="primary">
                        <CardHeader>
                            <h2>Card with switch</h2>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard borderColor="secondary">
                        <CardHeader>
                            <h2>Card with switch</h2>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard borderColor="success">
                        <CardHeader>
                            <h2>Card with switch</h2>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard bgColor="danger">
                        <CardBody>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                        <CardFooter>
                            <p className="text-light">
                                - Someone famous in Source Title
                            </p>
                        </CardFooter>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard bgColor="warning">
                        <CardBody>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                        <CardFooter>
                            <p className="text-light">
                                - Someone famous in Source Title
                            </p>
                        </CardFooter>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard bgColor="primary">
                        <CardBody>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                        <CardFooter>
                            <p className="text-light">
                                - Someone famous in Source Title
                            </p>
                        </CardFooter>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard bgColor="primary">
                        <CardHeader className="bg-secondary rounded-0">
                            <h2 className="text-light">Card Outline</h2>
                        </CardHeader>
                        <CardBody>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard bgColor="danger">
                        <CardHeader className="bg-dark rounded-0">
                            <h2 className="text-light">Card Outline</h2>
                        </CardHeader>
                        <CardBody>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard>
                        <CardHeader className="bg-success rounded-0">
                            <h2 className="text-light">Card Outline</h2>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard>
                        <img src={placeholder} alt="" />
                        <CardBody>
                            <h2 className="card-title">Card Image Title</h2>
                            <p className="card-text mt-2">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard>
                        <img src={placeholder} alt="" />
                        <CardBody>
                            <h2 className="card-title">Card Image Title</h2>
                            <p className="card-text mt-2">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard>
                        <img src={placeholder} alt="" />
                        <CardBody>
                            <h2 className="card-title">Card Image Title</h2>
                            <p className="card-text mt-2">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </WidgetsCard>
                </Col>
                {/* end widgets card section */}
            </Row>
        </Fragment>
    );
};

export default Cards;
