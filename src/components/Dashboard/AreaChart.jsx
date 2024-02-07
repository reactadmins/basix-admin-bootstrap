import { Fragment, useState } from "react";
import CardContent from "../Card/CardContent";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "series2",
                data: [28, 30, 32, 32, 34, 35, 36],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        },
    });
    return (
        <Fragment>
            <CardContent
                title="Real Time"
                icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                CardBody={
                    <div className="d-flex justify-content-center align-items-center overflow-hidden">
                        <ReactApexChart
                            options={state.options}
                            series={state.series}
                            type="area"
                            height={446}
                            style={{ width: "100%" }}
                        />
                    </div>
                }
            />
        </Fragment>
    );
};

export default AreaChart;
