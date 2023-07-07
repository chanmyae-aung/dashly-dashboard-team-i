import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbUsersGroup } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import EcommerceAreaChart from "./EcommerceAreaChart";

const Category = () => {
  return (
    <div className="w-[95%] mx-auto">
      <h4 className="text-2xl font-bold mb-4">E-commerce</h4>
      <div className="flex justify-between gap-6">
        <div className="custom-shadow rounded-2xl bg-white w-full h-[175px]">
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-xs text-[#9ea9b4] mb-2">CLIENTS</p>
              <h6 className="text-xl font-bold">6,328</h6>
            </div>
            <TbUsersGroup className="text-3xl font-light text-[#00bac7]" />
          </div>
          <hr className="border-[1px] border-[#f4f9fd] mt-4" />
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-[10px] text-[#9ea9b4]">TODAY CILENTS</p>
              <h6 className="text-sm font-bold">57</h6>
            </div>
            <div className="text-end">
              <p className="text-[10px] text-[#9ea9b4]">Monthly CILENTS</p>
              <h6 className="text-sm font-bold">681</h6>
            </div>
          </div>
        </div>
        <div className="custom-shadow rounded-2xl bg-white w-full h-[175px]">
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-xs text-[#9ea9b4] mb-2">ORDERS</p>
              <h6 className="text-xl font-bold">15,386</h6>
            </div>
            <HiOutlineShoppingCart className="text-3xl font-light text-[#00bac7]" />
          </div>
          <hr className="border-[1px] border-[#f4f9fd] mt-4" />
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-[10px] text-[#9ea9b4]">TODAY ORDERS</p>
              <h6 className="text-sm font-bold">121</h6>
            </div>
            <div className="text-end">
              <p className="text-[10px] text-[#9ea9b4]">Monthly ORDERS</p>
              <h6 className="text-sm font-bold">1944</h6>
            </div>
          </div>
        </div>
        <div className="custom-shadow rounded-2xl bg-white w-full h-[175px]">
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-xs text-[#9ea9b4] mb-2">EARNINGS</p>
              <h6 className="text-xl font-bold">$717,214</h6>
            </div>
            <AiOutlineFundProjectionScreen className="text-3xl font-light text-[#00bac7]" />
          </div>
          <hr className="border-[1px] border-[#f4f9fd] mt-4" />
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-[10px] text-[#9ea9b4]">TODAY EARNINGS</p>
              <h6 className="text-sm font-bold">€2,230</h6>
            </div>
            <div className="text-end">
              <p className="text-[10px] text-[#9ea9b4]">Monthly EARNGINGS</p>
              <h6 className="text-sm font-bold">$158,990</h6>
            </div>
          </div>
        </div>
        <div className="custom-shadow rounded-2xl bg-[#00BAC7] w-full h-[175px] relative">
          <div className="flex justify-between p-5">
            <div className="text-white">
              <p className="text-md font-semibold">Current Balance</p>
              <h6 className="text-xl font-bold">$981,340</h6>
            </div>
          </div>
          <div className="w-[90%] mx-auto mb-5 absolute -bottom-2 left-4">
            <EcommerceAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
