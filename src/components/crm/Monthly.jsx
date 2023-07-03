import React from "react";
import {CgShapeCircle} from 'react-icons/cg'
import {TiMinus} from 'react-icons/ti'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  options: {
    scales: {
        x: {
            grid: {
                display: false ,
                
            }
        },
        y: {
            ticks: {
                callback: (value, index, values) => {
                    return value > 0 ? '$' + ((value < 1000000) ? Math.floor(value / 1000) + 'k' : Math.floor(value / 1000000) + 'M') : value;
                }
            },

        }
        
    },
    responsive: true,
    maintainAspectRatio: true,
  //  aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
          mode: 'index',
         callbacks: {
              label: context => {
                  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(context.parsed.y);
              },
              labelColor: context => {
                  return {
                      backgroundColor: context.dataset.borderColor
                  }
              }
          }
      },
      mouseLine: {
          enabled: true
      }}}
};

export const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Expected',
                        data: [9440, 18021, 34081, 43804, 30409, 22532, 21986, 27227, 32636, 30171, 32753, 19589],
                        backgroundColor: "#00BAC7",
                        borderColor: "#00BAC7",
                        borderWidth: 2,
                        
                        pointRadius: 4,
                        pointBorderWidth: 3,
                        pointBorderColor: "#00BAC7",
                        pointBackgroundColor: "#00BAC7",
                        
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 3,
                        pointHoverBorderColor: "#00BAC7",
                        pointHoverBackgroundColor: "#00BAC7",
                        tension: 0
                    },
                    {
                        label: 'Actual',
                        data: [2440, 9247, 23081, 30839, 39923, 36532, 28386, 34227, 38636, 37171, 25753, 25589],
                        borderWidth: 2,
                        borderDash: [5, 5],
                        borderColor: "#3280b4",
                        pointRadius: 0,
                        pointHoverRadius:5,
                        pointHoverBackgroundColor: "#3280b4",
                        tension: 0
                    }
  ],
};

const Monthly = () => {
  return (
    <div className="bg-white w-full rounded-lg p-5">
      <div className="flex justify-between items-center pb-3">
        <h3 className="text-sm font-bold">MONTHLY ACTIVITY</h3>
        <div className="text-xs font-bold flex gap-5 items-center text-[#9ea9b4]">
            <button className="flex gap-2 items-center">
                <CgShapeCircle className="text-[#00BAC7]"/>
                EXPECTED REVENUE</button>
            <button className="flex gap-2 items-center">
                <TiMinus className="text-[#3280b4]"/>
                ACTUAL REVENUE</button>
        </div>
      </div>
      <div>
      <Line className="rounded-lg" options={options.options} data={data} height={125}/>
      </div>
    </div>
  );
};

export default Monthly;
