import React from "react";
import { BsBagPlus, BsCashCoin } from "react-icons/bs";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const Charts = () => {
  return (
    <div className="flex justify-between items-center gap-7 w-full">
      <div className="flex justify-between items-center gap-7 w-[40%]">
        <div className="flex justify-between items-start p-4 w-full bg-white rounded-xl shadow-lg">
          <div className="flex flex-col gap-3">
            <div className="flex gap-1 items-end">
              <div className="w-[6px] h-[6px] rounded-full bg-[#31cf80] mb-[7px]"></div>
              <div className="">
                <p className="text-gray-400 tracking-wide text-xs">INCOME</p>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-lg">$3,240</h1>
              <p className="text-[10px] text-gray-400">No additional income</p>
            </div>
          </div>
          <div className="">
            <BsBagPlus className="text-3xl text-[#00C5D9]" />
          </div>
        </div>
        <div className="flex justify-between items-start p-4 bg-white rounded-xl shadow-lg w-full">
          <div className="flex flex-col gap-3">
            <div className="flex gap-1 items-end">
              <div className="w-[6px] h-[6px] rounded-full bg-red-600 mb-[7px]"></div>
              <div className="">
                <p className="text-gray-400 tracking-wide text-xs">EXPENSE</p>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-lg">$1,500</h1>
              <p className="text-[10px] text-gray-400">
                + $6.50 bank charges fee
              </p>
            </div>
          </div>
          <div className="">
            <BsCashCoin className="text-3xl text-[#00C5D9]" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-7 w-[60%]">
        <div className="flex justify-between items-center p-4 w-full bg-white rounded-xl shadow-lg">
          <div className="flex flex-col gap-3 w-[50%]">
            <div className="flex gap-1 items-end">
              <div className="">
                <p className="text-gray-400 tracking-wide text-xs">TOTAL</p>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-lg">$74.925</h1>
              <p className="text-[10px] text-gray-400 flex items-center gap-2">
                <span className="flex items-center gap-1 text-[10px] text-green-600 font-semibold px-2  bg-green-100 rounded-lg">
                  <FaArrowTrendUp />
                  <p>12%</p>
                </span>
                from $65,934
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <AreaChart />
          </div>
        </div>
        <div className="flex justify-between items-center p-4 w-full bg-white rounded-xl shadow-lg">
          <div className="flex flex-col gap-3 w-[60%]">
            <div className="flex gap-1 items-end">
              <div className="flex items-center gap-3">
                <div className="">
                  <p className="text-gray-400 tracking-wide text-xs">
                    PAGEVIEWS
                  </p>
                </div>
                <div className="group relative">
                  <div className="flex justify-center items-center w-[14px] h-[14px] bg-gray-500 rounded-full">
                    <p className="text-xs text-white cursor-pointer">i</p>
                    <div className="p-3 rounded-lg bg-black hidden group-hover:block absolute w-[180px] text-center -top-[70px]">
                      <p className="text-[10px] text-white">
                        Page preview is a matric defined as the total number of page viewed.                       
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-lg">$123,598</h1>
              <p className="text-[10px] text-gray-400 flex items-center gap-2">
                <span className="flex items-center gap-1 text-[10px] text-red-600 font-semibold px-2  bg-red-100 rounded-lg">
                  <FaArrowTrendDown />
                  <p>9.2%</p>
                </span>
                from 134,969
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
