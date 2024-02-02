import "leaflet/dist/leaflet.css";
import CardContent from "../components/Card/CardContent";
import Voyager from "../components/Maps/LeafletMaps/Voyager";
import { Col, Container, Row } from "react-bootstrap";
import StreetMap from "../components/Maps/LeafletMaps/StreetMap";
import WorldImagery from "../components/Maps/LeafletMaps/WorldImagery";
import DarkMatter from "../components/Maps/LeafletMaps/DarkMatter";

const LeafletMaps = () => {
    return (
        <Container fluid className="p-0">
            <Row className="gy-4 gx-4 mb-4">
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="Voyager"
                        CardBody={
                            <>
                                <Voyager />
                            </>
                        }
                    />
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="Street Map"
                        CardBody={
                            <>
                                <StreetMap />
                            </>
                        }
                    />
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="WorldImagery"
                        CardBody={
                            <>
                                <WorldImagery />
                            </>
                        }
                    />
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="Dark Matter"
                        CardBody={
                            <>
                                <DarkMatter />
                            </>
                        }
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default LeafletMaps;
