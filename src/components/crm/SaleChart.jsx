import React from 'react'
import { Bar, Line } from "react-chartjs-2";
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      fill: false,
      label: null,
      backgroundColor: "rgba(0, 104, 179, 0.2)",
      borderColor: "#42E694",
      borderWidth: 3,
      pointStyle: false,
      barPercentage: 0.5,
      barThickness: 10,
      maxBarThickness: 10,
      minBarLength: 2,
    //   drawActiveElementsOnTop: true,
      data: [
        400,1000,1000,2500,3000,1500,4000,5000,8000,6000,5500,6500
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
          display: true,
          offset: true,
        },
      },
      y: {
        grid: {
          display: false,
          offset: false,
        },
        ticks: {
          display:false,
          // callback: (value, index, values) => {
          //       return value > 0 ? '$' + ((value < 10000) ? Math.floor(value / 2000) + 'k' : Math.floor(value / 1000000) + 'M') : value;
          //   },
            min: 0,
            max: 10000,
            // stepSize: 1000000 ? 1000000/500000 + "k": 1000000/1000000 + "M",
            stepSize: 1000,
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

const SaleChart = () => {
  return (
    <div>
      <Line options={data.options} data={data} width={120}
  height={50}
  />
    </div>
  )
}

export default SaleChart