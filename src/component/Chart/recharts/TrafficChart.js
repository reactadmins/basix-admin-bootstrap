import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 25000,
    pv: 13000,
    amt: 13000,
  },
  {
    name: "Feb",
    uv: 15000,
    pv: 27000,
    amt: 17000,
  },
  {
    name: "Mar",
    uv: 37000,
    pv: 15000,
    amt: 35000,
  },
  {
    name: "Apr",
    uv: 25000,
    pv: 30000,
    amt: 20000,
  },
  {
    name: "Jun",
    uv: 15000,
    pv: 20000,
    amt: 25000,
  },
  {
    name: "Jul",
    uv: 20000,
    pv: 30000,
    amt: 27000,
  },
  {
    name: "Aug",
    uv: 30000,
    pv: 14000,
    amt: 23000,
  },
  {
    name: "Sep",
    uv: 25000,
    pv: 14000,
    amt: 20000,
  },
  {
    name: "Oct",
    uv: 18000,
    pv: 23000,
    amt: 18000,
  },
  {
    name: "Nov",
    uv: 35000,
    pv: 16000,
    amt: 35000,
  },
  {
    name: "Dec",
    uv: 17000,
    pv: 30000,
    amt: 20000,
  },
  {
    name: "",
    uv: 14000,
    pv: 18000,
    amt: 25000,
  },
];

const TrafficChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={345}>
        <AreaChart
          width={1000}
          height={400}
          data={data}
          fontSize="11px"
          color="#999999"
          margin={{
            top: 10,
            right: 10,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            connectNulls
            type="monotone"
            dataKey="amt"
            stroke="#93CF96"
            fill="#93CF96"
          />
          <Area
            connectNulls
            type="monotone"
            dataKey="pv"
            stroke="#D47765"
            fill="#D47765"
          />
          <Area
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#5C6BC0"
            fill="#5C6BC0"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default TrafficChart;
