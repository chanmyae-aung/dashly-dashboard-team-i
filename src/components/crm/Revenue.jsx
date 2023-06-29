

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { BiTrendingUp } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
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
      backgroundColor: "rgba(0, 104, 179, 0.2)",
      borderColor: "#0068B3",
      borderWidth: 2,
      pointStyle: false,
      barPercentage: 0.5,
      barThickness: 10,
      maxBarThickness: 10,
      minBarLength: 2,
    //   drawActiveElementsOnTop: true,
      data: [
        1534797,1807907,2991201,3206722,3400109,4490270,4811541,5079186,5416371,5445881,5285721,5625865,6689399,7659140,8811657,8960763,9335633,9519522,10975742,12644259,13035177,13337221,14407691,15102984,15140604,15498567,15582300,16034956,15600252,17132937,17277658,17985396,19104049,19606166,19641876,19987294
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
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          offset: true,
        },
      },
      y: {
        grid: {
          display: true,
          offset: false,
        },
        ticks: {
          display:true,
          callback: (value, index, values) => {
                return value > 0 ? '$' + ((value < 1000000) ? Math.floor(value / 2000) + 'k' : Math.floor(value / 1000000) + 'M') : value;
            },
            min: 0,
            max: 20000000,
            // stepSize: 1000000 ? 1000000/500000 + "k": 1000000/1000000 + "M",
            stepSize: 5000000,
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

const Revenue = () => {
  return (
    <div className="mb-5">
      <h2 className="text-[0.95rem] font-semibold">REVENUE</h2>
      <h2 className="text-3xl font-bold mt-3">$7,762,988</h2>
      <div className="mb-3">
        <p className="text-green-500 text-sm flex items-center font-bold w-fit rounded">
          {" "}
          16.7%
          <BiTrendingUp />
        </p>
        <p className="text-xs text-gray-400">vs last year</p>
      </div>
      <div>
      <Line options={data.options} data={data} height={70}/>
      </div>
    </div>
  );
};

export default Revenue;

