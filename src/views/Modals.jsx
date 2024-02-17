import { useState } from "react";
import Card from "../components/Card/Card";
import { Button, CardBody, Col, Container, Modal, Row } from "react-bootstrap";

const Modals = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className="p-0">
            <Row>
                <Col sm={12} md={12} lg={12} xl={7}>
                    <Card title="Modals">
                        <CardBody>
                            <div>
                                <Button variant="primary" onClick={handleShow}>Small</Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal> 
                            </div> 
                            <div>
                            
                            </div>            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Modals;
