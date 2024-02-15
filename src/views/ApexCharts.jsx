import { Col, Row } from "react-bootstrap";
import LineChart from "../components/ApexCharts/LineChart";
import AreaChart from "../components/ApexCharts/AreaChart";
import ColumnChart from "../components/ApexCharts/ColumnChart";
import CandlestickChart from "../components/ApexCharts/CandlestickChart";
import PieChart from "../components/ApexCharts/PieChart";
import BubbleChart from "../components/ApexCharts/BubbleChart";

const ApexCharts = () => {
    return (
        <Row className="gy-4 gx-4">
            <Col md={12} lg={6}>
                <LineChart />
            </Col>
            <Col md={12} lg={6}>
                <AreaChart />
            </Col>
            <Col md={12} lg={6}>
                <ColumnChart />
            </Col>
            <Col md={12} lg={6}>
                <CandlestickChart />
            </Col>
            <Col md={12} lg={6}>
                <PieChart />
            </Col>
            <Col md={12} lg={6}>
                <BubbleChart />
            </Col>
        </Row>
    );
};

export default ApexCharts;
