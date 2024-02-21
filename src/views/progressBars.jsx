import { Fragment } from "react";
import { CardBody, Col, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const progressBars = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={6}>
                    <Card title="Background">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar progressBg="#28a745" value="25" />
                                <ProgressBar progressBg="#17a2b8" value="50" />
                                <ProgressBar progressBg="#ffc107" value="75" />
                                <ProgressBar progressBg="#dc3545" value="100" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Animated Background">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar isAnimated={true} progressBg="#28a745" value="25" />
                                <ProgressBar isAnimated={true} progressBg="#17a2b8" value="50" />
                                <ProgressBar isAnimated={true} progressBg="#ffc107" value="75" />
                                <ProgressBar isAnimated={true} progressBg="#dc3545" value="100" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="labels">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar progressBg="#28a745" value="25" label="25" />
                                <ProgressBar progressBg="#17a2b8" value="50" label="50" />
                                <ProgressBar progressBg="#ffc107" value="75" label="75" />
                                <ProgressBar progressBg="#dc3545" value="100" label="100" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Animated labels">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isAnimated={true}
                                    progressBg="#28a745"
                                    value="25"
                                    label="25"
                                />
                                <ProgressBar
                                    isAnimated={true}
                                    progressBg="#17a2b8"
                                    value="50"
                                    label="50"
                                />
                                <ProgressBar
                                    isAnimated={true}
                                    progressBg="#ffc107"
                                    value="75"
                                    label="75"
                                />
                                <ProgressBar
                                    isAnimated={true}
                                    progressBg="#dc3545"
                                    value="100"
                                    label="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Progress Striped">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar isStriped={true} progressBg="#28a745" value="25" />
                                <ProgressBar isStriped={true} progressBg="#17a2b8" value="50" />
                                <ProgressBar isStriped={true} progressBg="#ffc107" value="75" />
                                <ProgressBar isStriped={true} progressBg="#dc3545" value="100" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Animated Progress Striped">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isAnimated={true}
                                    isStriped={true}
                                    progressBg="#28a745"
                                    value="25"
                                    label="25"
                                />
                                <ProgressBar
                                    isAnimated={true}
                                    isStriped={true}
                                    progressBg="#17a2b8"
                                    value="50"
                                    label="50"
                                />
                                <ProgressBar
                                    isAnimated={true}
                                    isStriped={true}
                                    progressBg="#ffc107"
                                    value="75"
                                    label="75"
                                />
                                <ProgressBar
                                    isAnimated={true}
                                    isStriped={true}
                                    progressBg="#dc3545"
                                    value="100"
                                    label="100"
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
