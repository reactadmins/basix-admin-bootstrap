import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 4000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2000,
    pv: 4300,
    amt: 2100,
  },
];

const EarningStats = () => {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <BarChart width={580} height={300} data={data}>
        <Bar dataKey="uv" fill="#F58F8D" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EarningStats;
