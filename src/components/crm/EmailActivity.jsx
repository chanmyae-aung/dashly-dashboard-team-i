import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BsThreeDotsVertical } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Opened", "Clicked", "Bounce", "Spam"],
  datasets: [
    {
      //   label: '# of Votes',
      data: [49, 22, 13, 5],
      backgroundColor: ["#1EB8E2", "#20E281", "#FFD933", "#EC1A52"],
      border: false,

    },
  ],
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      }
    }
  }
};


const EmailActivity = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-5">
        <h3 className="text-sm font-bold">EMAIL ACTIVITY</h3>
        <BsThreeDotsVertical />
      </div>
      <div className="px-5 lg:w-full w-96 mx-auto">
      <Pie data={data} options={data.options}/>
      <div className="text-center text-sm mx-9 py-5">
        <p className="text-[#9ea9b4] mb-4">Activity in the last 30 days</p>
        <button className=" rounded-full w-full py-2 border-[1.5px] font-semibold border-[#00C5D9] text-[#00C5D9] hover:text-white hover:bg-[#00C5D9]">See more</button>
      </div>
      </div>
    </div>
  );
};

export default EmailActivity;
