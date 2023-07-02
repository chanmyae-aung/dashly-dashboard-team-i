import React from "react";
import { BsBagPlus, BsCashCoin } from "react-icons/bs";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const Charts = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-10">
      <div className="flex justify-between items-start p-5 w-[48%] bg-white rounded-xl shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex gap-1 items-end">
            <div className="w-[6px] h-[6px] rounded-full bg-[#31cf80] mb-[7px]"></div>
            <div className="">
              <p className="text-gray-400 tracking-wide text-sm">INCOME</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">$3,240</h1>
            <p className="text-xs text-gray-400 tracking-wider">
              No additional income
            </p>
          </div>
        </div>
        <div className="">
          <BsBagPlus className="text-4xl text-[#00C5D9]" />
        </div>
      </div>
      <div className="flex justify-between items-start p-5 w-[48%] bg-white rounded-xl shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex gap-1 items-end">
            <div className="w-[6px] h-[6px] rounded-full bg-red-600 mb-[7px]"></div>
            <div className="">
              <p className="text-gray-400 tracking-wide text-sm">EXPENSE</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">$1,500</h1>
            <p className="text-xs text-gray-400 tracking-wider">
              + $6.50 bank charges fee
            </p>
          </div>
        </div>
        <div className="">
          <BsCashCoin className="text-4xl text-[#00C5D9]" />
        </div>
      </div>
      <div className="flex justify-between items-center p-5 w-[48%] bg-white rounded-xl shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex gap-1 items-end">
            <div className="">
              <p className="text-gray-400 tracking-wide text-sm">TOTAL</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">$74.925</h1>
            <p className="text-xs text-gray-400 tracking-wider flex items-center gap-2">
              <span className="flex items-center gap-1 text-xs text-green-600 font-semibold px-2  bg-green-100 rounded-lg">
                <FaArrowTrendUp />
                <p>12%</p>
              </span>
              from $65,934
            </p>
          </div>
        </div>
        <div className="">
          <AreaChart />
        </div>
      </div>
      <div className="flex justify-between items-start p-5 w-[48%] bg-white rounded-xl shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex gap-1 items-end">
            <div className="flex items-center gap-3">
              <div className="">
                <p className="text-gray-400 tracking-wide text-sm">PAGEVIEWS</p>
              </div>
              <div className="flex justify-center items-center w-[17px] h-[17px] bg-gray-500 rounded-full">
                <p className="text-xs text-white">i</p>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">$74.925</h1>
            <p className="text-xs text-gray-400 tracking-wider flex items-center gap-2">
              <span className="flex items-center gap-1 text-xs text-red-600 font-semibold px-2  bg-red-100 rounded-lg">
                <FaArrowTrendDown />
                <p>9.2%</p>
              </span>
              from 134,969
            </p>
          </div>
        </div>
        <div className="">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
