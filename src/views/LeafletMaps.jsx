import "leaflet/dist/leaflet.css";
import CardContent from "../components/Card/CardContent";
import PopupWithMarker from "../components/Maps/LeafletMaps/PopupWithMarker";
import { Col, Container, Row } from "react-bootstrap";
import VectorLayers from "../components/Maps/LeafletMaps/VectorLayers";
import LayersControlMaps from "../components/Maps/LeafletMaps/LayersControlMaps";
import LeafletSVGOverlay from "../components/Maps/LeafletMaps/LeafletSVGOverlay";

const LeafletMaps = () => {
    return (
        <Container fluid className="p-0">
            <Row className="gy-4 gx-4 mb-4">
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="Popup with Marker"
                        CardBody={
                            <>
                                <PopupWithMarker />
                            </>
                        }
                    />
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="Vector layers"
                        CardBody={
                            <>
                                <VectorLayers />
                            </>
                        }
                    />
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="Layers control Maps"
                        CardBody={
                            <>
                                <LayersControlMaps />
                            </>
                        }
                    />
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <CardContent
                        title="Leaflet SVG Overlay"
                        CardBody={
                            <>
                                <LeafletSVGOverlay />
                            </>
                        }
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default LeafletMaps;
