import React from "react";
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {TbUsersGroup} from 'react-icons/tb'
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

const Category = () => {
  return (
    <div className="w-[95%] mx-auto">
      <h4 className="text-2xl font-bold">E-commerce</h4>
      <div className="flex justify-between gap-6">
        <div className="custom-shadow rounded-2xl bg-white w-full ">
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-xs text-[#9ea9b4]">CLIENTS</p>
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
        <div className="custom-shadow rounded-2xl bg-white w-full ">
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-xs text-[#9ea9b4]">ORDERS</p>
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
        <div className="custom-shadow rounded-2xl bg-white w-full ">
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-xs text-[#9ea9b4]">EARNINGS</p>
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
        <div className="custom-shadow rounded-2xl bg-white w-full ">
          <div className="flex justify-between p-5">
            <div className="">
              <p className="text-xs text-[#9ea9b4]">CLIENTS</p>
              <h6 className="text-xl font-bold">6,328</h6>
            </div>
            <svg
              fill="#00bac7"
              viewBox="0 0 24 24"
              height="30"
              width="30"
              class="text-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.250 6.000 A2.250 2.250 0 1 0 6.750 6.000 A2.250 2.250 0 1 0 2.250 6.000 Z"
                fill="#fff"
                stroke="#00bac7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M4.5,9.75A3.75,3.75,0,0,0,.75,13.5v2.25h1.5l.75,6H6"
                fill="#fff"
                stroke="#00bac7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.250 6.000 A2.250 2.250 0 1 0 21.750 6.000 A2.250 2.250 0 1 0 17.250 6.000 Z"
                fill="#fff"
                stroke="#00bac7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M19.5,9.75a3.75,3.75,0,0,1,3.75,3.75v2.25h-1.5l-.75,6H18"
                fill="#fff"
                stroke="#00bac7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M9.000 3.750 A3.000 3.000 0 1 0 15.000 3.750 A3.000 3.000 0 1 0 9.000 3.750 Z"
                fill="#fff"
                stroke="#00bac7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.25,13.5a5.25,5.25,0,0,0-10.5,0v2.25H9l.75,7.5h4.5l.75-7.5h2.25Z"
                fill="#fff"
                stroke="#00bac7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </svg>
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
      </div>
    </div>
  );
};

export default Category;
