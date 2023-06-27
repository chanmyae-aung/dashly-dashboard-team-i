import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1 May ,2022",
    percent: 17,
  },
  {
    name: "5 May ,2022",
    percent: 20,
  },
  {
    name: "10 May ,2022",
    percent: 24,
  },
  {
    name: "15 May ,2022",
    percent: 34,
  },
  {
    name: "20 May ,2022",
    percent: 12,
  },
  {
    name: "25 May ,2022",
    percent: 10,
  },
  {
    name: "30 May ,2022",
    percent: 8,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <BarChart width={250} height={70} data={data}>
        <XAxis dataKey="name" hide="false" />
        <Tooltip />
        <Bar dataKey="percent" barSize={10} radius={7} fill="#abe9ec"/>
      </BarChart>
    );
  }
}
