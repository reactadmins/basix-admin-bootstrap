import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

const BarChart = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "PRODUCT A",
                data: [13, 23, 20, 8, 13, 27],
            },
            {
                name: "PRODUCT B",
                data: [13, 23, 20, 8, 13, 27],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: true,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    dataLabels: {
                        total: {
                            enabled: false,
                            style: {
                                fontSize: "13px",
                                fontWeight: 900,
                            },
                        },
                    },
                },
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "01/01/2011 GMT",
                    "01/02/2011 GMT",
                    "01/03/2011 GMT",
                    "01/04/2011 GMT",
                    "01/05/2011 GMT",
                    "01/06/2011 GMT",
                ],
            },
            legend: {
                position: "top",
                offsetY: 20,
            },
            fill: {
                opacity: 1,
            },
        },
    });
    return (
        <Card title="Stacked Columns">
            <CardBody>
                <div className="d-flex justify-content-center align-items-center overflow-hidden">
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        height={300}
                        style={{ width: "100%" }}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default BarChart;