import { Fragment } from "react";
import CardContent from "../components/Card/CardContent";
import { Alert, Badge, Col, Row } from "react-bootstrap";

const Alerts = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start alerts  section */}
                <Col md={6}>
                    <CardContent
                        title="Alerts"
                        CardBody={
                            <Fragment>
                                <Alert variant="primary">
                                    This is a primary alert—check it out!
                                </Alert>

                                <Alert variant="secondary">
                                    This is a primary alert—check it out!
                                </Alert>
                                <Alert variant="success">
                                    This is a primary alert—check it out!
                                </Alert>
                                <Alert variant="danger">
                                    This is a primary alert—check it out!
                                </Alert>
                                <Alert variant="warning">
                                    This is a primary alert—check it out!
                                </Alert>
                                <Alert variant="info">
                                    This is a primary alert—check it out!
                                </Alert>
                            </Fragment>
                        }
                    />
                </Col>
                {/* end alerts  section */}

                {/* start dismissing alerts  section */}
                <Col md={6}>
                    <CardContent
                        title="Dismissing Alerts"
                        CardBody={
                            <Fragment>
                                <Alert variant="success" dismissible>
                                    <Badge bg="success">Success</Badge> You
                                    successfully read this important alert.
                                </Alert>
                                <Alert variant="primary" dismissible>
                                    <Badge bg="primary">Primary</Badge> You
                                    successfully read this important alert.
                                </Alert>
                                <Alert variant="secondary" dismissible>
                                    <Badge bg="secondary">Secondary</Badge> You
                                    successfully read this important alert.
                                </Alert>
                                <Alert variant="warning" dismissible>
                                    <Badge bg="warning">Warning</Badge> You
                                    successfully read this important alert.
                                </Alert>
                                <Alert variant="danger" dismissible>
                                    <Badge bg="danger">Danger</Badge> You
                                    successfully read this important alert.
                                </Alert>
                                <Alert variant="info" dismissible>
                                    <Badge bg="info">Info</Badge> You
                                    successfully read this important alert.
                                </Alert>
                            </Fragment>
                        }
                    />
                </Col>
                {/* end dismissing alerts  section */}

                {/* start link color alerts  section */}
                <Col md={6}>
                    <CardContent
                        title="Link Color Alerts"
                        CardBody={
                            <Fragment>
                                <Alert variant="primary">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                                <Alert variant="secondary">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                                <Alert variant="success">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                                <Alert variant="danger">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                                <Alert variant="warning">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                                <Alert variant="info">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                                <Alert variant="light">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                                <Alert variant="dark">
                                    This is a primary alert with
                                    <Alert.Link href="#" className="mx-1">
                                        an example link
                                    </Alert.Link>
                                    . Give it a click if you like.
                                </Alert>
                            </Fragment>
                        }
                    />
                </Col>
                {/* end link color alerts  section */}

                {/* start alerts contents section */}
                <Col md={6}>
                    <CardContent
                        title="Contents"
                        CardBody={
                            <Fragment>
                                <Alert variant="success">
                                    <Alert.Heading>Well done!</Alert.Heading>
                                    <p>
                                        You successfully read this important
                                        alert message. This example text is
                                        going to run a bit longer so that you
                                        can see alert content.
                                    </p>
                                    <hr />
                                    <p>
                                        Whenever you need to, be sure to use
                                        margin utilities nice and tidy.
                                    </p>
                                </Alert>
                                <Alert variant="warning">
                                    <Alert.Heading>Well done!</Alert.Heading>
                                    <p>
                                        You successfully read this important
                                        alert message. This example text is
                                        going to run a bit longer so that you
                                        can see how alert content.
                                    </p>
                                    <hr />
                                    <p>
                                        Whenever you need to, be sure to use
                                        margin utilities nice and tidy.
                                    </p>
                                </Alert>
                                <Alert variant="danger">
                                    <Alert.Heading>Well done!</Alert.Heading>
                                    <p>
                                        You successfully read this important
                                        alert message. This example text is
                                        going to run a bit longer so that you
                                        can see how alert content.
                                    </p>
                                    <hr />
                                    <p>
                                        Whenever you need to, be sure to use
                                        margin utilities nice and tidy.
                                    </p>
                                </Alert>
                            </Fragment>
                        }
                    />
                </Col>
                {/* end alerts contents section */}
            </Row>
        </Fragment>
    );
};

export default Alerts;
