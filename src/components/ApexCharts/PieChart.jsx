import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "../Card/Card";
import { CardBody } from "react-bootstrap";

const PieChart = () => {
    const [state, setState] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: "donut",
            },
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    });
    return (
        <Card title="Pie Chart">
            <CardBody>
                <div>
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="donut"
                        height={300}
                        style={{ width: "100%" }}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default PieChart;
