import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const MonthlyDataUpdate = () => {
  return (
    <div
      className="rounded-0"
      style={{ padding: "20px", backgroundColor: "#42a5f5" }}
    >
      <h5
        className="text-white"
        style={{ fontSize: ".875em", fontWeight: "600" }}
      >
        February
      </h5>
      <ResponsiveContainer width="100%" height={82}>
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
          <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyDataUpdate;
