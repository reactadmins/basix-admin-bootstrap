import { Card, CardHeader } from "react-bootstrap";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const MonthlyStats = () => {
    const { isDark } = useDashboardDataContext();
    return (
        <Card
            className="p-0 rounded-0 border-0"
            style={{
                padding: "20px",
                backgroundColor: `${isDark ? "var(--bg-content)" : "#42a5f5"}`,
                boxShadow: `${isDark ? "0 0 0 1px var(--border-color" : ""}`,
            }}
        >
            <CardHeader className="rounded-0 bg-transparent border-0 d-flex align-items-center pb-3">
                <h5
                    className="text-white m-0 fw-semibold"
                    style={{ fontSize: ".875em" }}
                >
                    February
                </h5>
            </CardHeader>
            <Card.Body className="pt-0">
                <ResponsiveContainer width="100%" height={85}>
                    <LineChart
                        width={250}
                        height={82}
                        data={[
                            {
                                name: "Page A",
                                uv: 400,
                                pv: 400,
                                amt: 2400,
                            },
                            {
                                name: "Page B",
                                uv: 30,
                                pv: 25000,
                                amt: 2210,
                            },
                            {
                                name: "Page C",
                                uv: 10,
                                pv: 10500,
                                amt: 2290,
                            },
                            {
                                name: "Page D",
                                uv: 20,
                                pv: 50000,
                                amt: 2000,
                            },
                            {
                                name: "Page A",
                                uv: 400,
                                pv: 400,
                                amt: 2400,
                            },
                            {
                                name: "Page B",
                                uv: 30,
                                pv: 25000,
                                amt: 2210,
                            },
                            {
                                name: "Page C",
                                uv: 10,
                                pv: 10500,
                                amt: 2290,
                            },
                            {
                                name: "Page D",
                                uv: 20,
                                pv: 50000,
                                amt: 2000,
                            },
                        ]}
                    >
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#fff"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
};

export default MonthlyStats;
