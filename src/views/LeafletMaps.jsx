import "leaflet/dist/leaflet.css";
import Card from "@/components/Card/Card";
import Voyager from "@/components/Maps/LeafletMaps/Voyager";
import { CardBody, Col, Container, Row } from "react-bootstrap";
import StreetMap from "@/components/Maps/LeafletMaps/StreetMap";
import WorldImagery from "@/components/Maps/LeafletMaps/WorldImagery";
import DarkMatter from "@/components/Maps/LeafletMaps/DarkMatter";

const LeafletMaps = () => {
    return (
        <Container fluid className="p-0">
            <Row className="gy-4 gx-4 mb-4">
                <Col col={6} lg={6} xl={6}>
                    <Card title="Voyager">
                        <CardBody>
                            <Voyager />
                        </CardBody>
                    </Card>
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <Card title="Street Map">
                        <CardBody>
                            <StreetMap />
                        </CardBody>
                    </Card>
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <Card title="WorldImagery">
                        <CardBody>
                            <WorldImagery />
                        </CardBody>
                    </Card>
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <Card title="Dark Matter">
                        <CardBody>
                            <DarkMatter />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LeafletMaps;
