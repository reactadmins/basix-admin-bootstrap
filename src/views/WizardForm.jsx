import { Fragment } from "react";
import { CardBody, Col, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";
import StepCircleWizard from "@/components/Form/StepWizards/StepCircleWizard";
import StepSquarWizard from "@/components/Form/StepWizards/StepSquarWizard";
import StepTabWizard from "@/components/Form/StepWizards/StepTabWizard";

const WizardForm = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={12}>
                    <Card title="Basic Wizard - Circle">
                        <CardBody>
                            <StepCircleWizard />
                        </CardBody>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card title="Square Wizard">
                        <CardBody>
                            <StepSquarWizard />
                        </CardBody>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card title="Tab Wizard: Custom button and title text">
                        <CardBody>
                            <StepTabWizard />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default WizardForm;
