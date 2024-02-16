import { Fragment } from "react";
import { CardBody, Col, Row } from "react-bootstrap";
import Card from "../components/Card/Card";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const progressBars = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={6}>
                    <Card title="Background">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    strokeColor="#28a745"
                                    percent="25"
                                />
                                <ProgressBar
                                    strokeColor="#17a2b8"
                                    percent="50"
                                />
                                <ProgressBar
                                    strokeColor="#ffc107"
                                    percent="75"
                                />
                                <ProgressBar
                                    strokeColor="#dc3545"
                                    percent="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Animated Background">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Labels">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    strokeColor="#28a745"
                                    percent="25"
                                    labels="25"
                                />
                                <ProgressBar
                                    strokeColor="#17a2b8"
                                    percent="50"
                                    labels="50"
                                />
                                <ProgressBar
                                    strokeColor="#ffc107"
                                    percent="75"
                                    labels="75"
                                />
                                <ProgressBar
                                    strokeColor="#dc3545"
                                    percent="100"
                                    labels="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Animated Labels">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                    labels="25"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                    labels="50"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                    labels="75"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                    labels="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Progress Striped">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                />
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                />
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                />
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Animated Progress Striped">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                    labels="25"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                    labels="50"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                    labels="75"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                    labels="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default progressBars;
