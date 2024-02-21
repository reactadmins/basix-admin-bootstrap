import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

const GoogleMaps = () => {
    const mapStyles = {
        height: "100vh",
        width: "100%",
    };

    const defaultCenter = {
        lat: 43.653225,
        lng: -79.383186,
    };

    return (
        <Card title="Google Maps">
            <CardBody>
                <LoadScript>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                    ></GoogleMap>
                </LoadScript>
            </CardBody>
        </Card>
    );
};

export default GoogleMaps;
