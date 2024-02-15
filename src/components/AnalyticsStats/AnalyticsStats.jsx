import { Fragment } from "react";
import Card from "../Card/Card";
import { Row, Col, CardBody, CardFooter } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line as PeityLine } from "peity-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const AnalyticsInfo = ({ count = "", title = "" }) => {
    return (
        <div className="analytics-wrapper">
            <span
                className="text-uppercase d-block"
                style={{
                    color: "var(--content-text-color)",
                    fontSize: "14px",
                    marginBottom: "6px",
                }}
            >
                {title}
            </span>
            <div className="d-flex gap-3 align-items-center">
                <PeityLine
                    values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                    width={60}
                    height={20}
                />
                <div className="counter-up">
                    <div className="d-flex align-items-center gap-1">
                        <i
                            className="fa fa-caret-up"
                            style={{ color: "#4dbd74", fontSize: "14px" }}
                        ></i>
                        <span
                            className="mx-1"
                            style={{
                                fontSize: "14px",
                                color: "var(--hedging-text-color)",
                            }}
                        >
                            {count}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AnalyticsStats = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

    const data = {
        labels,
        datasets: [
            {
                label: "Bounce Rate",
                data: [2700, 7000, 3500, 6900, 2600, 6500, 2200],
                borderColor: "#2B45D4",
                backgroundColor: "#2B45D4",
            },
            {
                label: "Pageviews",
                data: [5000, 2700, 8500, 5500, 4500, 4900, 3000],
                borderColor: "#299FFF",
                backgroundColor: "#299FFF",
            },
            {
                label: "New Users",
                data: [5500, 2900, 7000, 3500, 5000, 3300, 4800],
                borderColor: "#43CB4C",
                backgroundColor: "#43CB4C",
            },
        ],
    };
    return (
        <Fragment>
            <Card
                title="Analytics Stats"
                icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
            >
                <CardBody>
                    <div
                        className="d-flex justify-content-center"
                        style={{ width: "100%", height: "310px" }}
                    >
                        <Line options={options} data={data} />
                    </div>
                </CardBody>
                <CardFooter style={{ borderColor: "var(--border-colo)" }}>
                    <Row className="gy-4 m-0" style={{ padding: "16px 20px" }}>
                        <Col sm={12} md={4} className="m-0">
                            <AnalyticsInfo count={65.79} title="Bounce Rate" />
                        </Col>
                        <Col sm={12} md={4} className="m-0">
                            <AnalyticsInfo count={65.79} title="Pageviews" />
                        </Col>
                        <Col sm={12} md={4} className="m-0">
                            <AnalyticsInfo count={65.79} title="New Users" />
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </Fragment>
    );
};

export default AnalyticsStats;
