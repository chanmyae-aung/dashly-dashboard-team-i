import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const EcommerceAreaChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 400,
      // pv: 2400,
      // amt: 2400,
    },
    {
      name: "Feb",
      uv: 1000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 3000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 1500,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 5000,
      pv: 300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 8000,
      pv: 600,
      amt: 1100,
    },
    {
      name: "Oct",
      uv: 6000,
      pv: 1300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 5500,
      pv: 6300,
      amt: 5100,
    },
    {
      name: "Dec",
      uv: 6500,
      pv: 300,
      amt: 2100,
    },
  ];
  return (
    <AreaChart
      width={280}
      height={100}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" />
     <YAxis />  */}
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#fff" fill="#fafafa" style={{"background": "linear-gradient(to top, #dae2f8, #d6a4a4)"}} />
    </AreaChart>
  );
};

export default EcommerceAreaChart;
