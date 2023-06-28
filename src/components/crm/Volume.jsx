import React from "react";
import { Bar } from "react-chartjs-2";
import { BiTrendingUp } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  Filler,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const colorCode = "#00A7B3";
const data = {
  labels: [
    "Jan 2020",
    "Feb 2020",
    "Mar 2020",
    "Apr 2020",
    "May 2020",
    "Jun 2020",
    "Jul 2020",
    "Aug 2020",
    "Sep 2020",
    "Oct 2020",
    "Nov 2020",
    "Dec 2020",
    "Jan 2021",
    "Feb 2021",
    "Mar 2021",
    "Apr 2021",
    "May 2021",
    "Jun 2021",
    "Jul 2021",
    "Aug 2021",
    "Sep 2021",
    "Oct 2021",
    "Nov 2021",
    "Dec 2021",
    "Jan 2022",
    "Feb 2022",
    "Mar 2022",
    "Apr 2022",
    "May 2022",
    "Jun 2022",
    "Jul 2022",
    "Aug 2022",
    "Sep 2022",
    "Oct 2022",
    "Nov 2022",
    "Dec 2022",
  ],
  datasets: [
    {
      fill: true,
      label: null,
      backgroundColor: colorCode,
      borderColor: colorCode,
      borderWidth: 0,
      barPercentage: 0.5,
      barThickness: 10,
      maxBarThickness: 10,
      minBarLength: 2,
      // clip: {left: 5, top: false, right: -2, bottom: 0},
      data: [
        62818, 41778, 48100, 106833, 189364, 152544, 203980, 218007, 269406,
        290798, 357599, 323096, 307246, 375954, 408444, 368624, 529254, 594473,
        514196, 456412, 428602, 535077, 628141, 602323, 564725, 648952, 690027,
        796537, 876486, 961475, 816575, 861616, 912809, 869996, 904038, 981902,
      ],
    },
  ],
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        callbacks: {
          label: (context) => {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          },
          labelColor: (context) => {
            return {
              backgroundColor: context.dataset.borderColor,
            };
          },
        },
      },
      mouseLine: {
        enabled: true,
      },
    },
    scales: {
      x: {
        stack: false,
        grid: {
          offset: false,
          display: false,

        },
      },
      y: {
        stack: false,
        grid: {
          offset: false,
          display: true,
        },
        ticks: {
          display: true,
          callback: (value, index, values) => {
            return value > 0
              ? "$" +
                  (value < 1000000
                    ? Math.floor(value / 2000) + "k"
                    : Math.floor(value / 1000000) + "M")
              : value;
          },
          min: 0,
          max: 1000000,
          // stepSize: 1000000 ? 1000000/500000 + "k": 1000000/1000000 + "M",
          stepSize: 200000,
        },
        // min: 0,
        // max: 1000000,
        // ticks: {
        //   stepSize: 200000,
        // forces step size to be 50 units
        // },
      },
    },
  },
};

const Volume = () => {
  return (
    <div className="h-40">
      <h2 className="text-[0.95rem] font-semibold">VOLUME</h2>
      <h2 className="text-3xl font-bold mt-3">$19,782</h2>
      <div className="mb-3">
        <p className="text-green-500 text-sm flex items-center font-bold w-fit rounded">
          {" "}
          34.73%
          <BiTrendingUp />
        </p>
        <p className="text-xs text-gray-400">vs last year</p>
      </div>
      <div>
        <Bar options={data.options} data={data} />
      </div>
    </div>
  );
};

export default Volume;
