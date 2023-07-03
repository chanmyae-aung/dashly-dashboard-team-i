import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BsThreeDotsVertical } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Opened", "Clicked", "Bounce", "Spam"],
  datasets: [
    {
      //   label: '# of Votes',
      data: [49, 22, 13, 5],
      backgroundColor: ["#2A9FC0", "#2DBE78", "#D5BE4C", "#d82c5b"],
      border: false,
    },
  ],
  options: {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
  },
};

const EmailActivity = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h3 className="text-sm font-bold">EMAIL ACTIVITY</h3>
        <BsThreeDotsVertical />
      </div>
      <div className="px-5 w-80 mx-auto">
        <div className="px-5">
          <Pie data={data} options={data.options} />
        </div>
          <div className="flex gap-2 mt-3">
            <p className="flex text-sm text-slate-400 gap-1 items-center"><span className="p-1 w-3 h-3  rounded-full bg-[#2A9FC0]"></span>Opened</p>
            <p className="flex text-sm text-slate-400 gap-1 items-center"><span className="p-1 w-3 h-3  rounded-full bg-green-500"></span>Clicked</p>
            <p className="flex text-sm text-slate-400 gap-1 items-center"><span className="p-1 w-3 h-3  rounded-full bg-[#D5BE4C]"></span>Bounce</p>
            <p className="flex text-sm text-slate-400 gap-1 items-center"><span className="p-1 w-3 h-3  rounded-full bg-[#d82c5b]"></span>Spam</p>
          </div>
        <div className="text-center text-sm mx-5 py-4">
          <p className="text-[#9ea9b4] mb-4">Activity in the last 30 days</p>
          <button className=" rounded-full w-full py-2 border-[1.5px] font-semibold border-[#00C5D9] text-[#00C5D9] hover:text-white hover:bg-[#00C5D9]">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailActivity;
