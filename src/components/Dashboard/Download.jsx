import { useState } from "react";
import Card from "../Card/Card";
import ReactApexChart from "react-apexcharts";
import { CardBody } from "react-bootstrap";

const Download = () => {
    const [state, setState] = useState({
        series: [60],
        options: {
            chart: {
                height: 350,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "60%",
                        background: "transparent",
                    },
                },
            },
            labels: ["Cricket", "ract"],
        },
    });
    return (
        <Card title="Download" icons={["fa fa-ellipsis-v"]}>
            <CardBody>
                <div
                    className="d-flex align-items-center"
                    style={{ height: "258px" }}
                >
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="radialBar"
                        height={250}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default Download;
