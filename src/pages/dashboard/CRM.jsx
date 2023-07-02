import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import RecentOrder from "../../components/crm/RecentOrder";
import EmailActivity from "../../components/crm/EmailActivity";
import Monthly from "../../components/crm/Monthly";
import TotalSale from "../../components/crm/TotalSale";
import TotalExpense from "../../components/crm/TotalExpense";
import Volume from "../../components/crm/Volume";
import Revenue from "../../components/crm/Revenue";
// import Revenue from "../../components/crm/Revenue";

const CRM = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold pb-16 bg-[#F8FAFB] px-10 -mb-10">CRM</h1>
      <div className="px-10">
        <div className="lg:flex gap-10 justify-between mb-5">
          <div className="lg:w-[70%]">
            <RecentOrder />
          </div>
          <div className="lg:w-[30%]">
            <EmailActivity />
          </div>
        </div>
        <div className="lg:flex justify-between mb-5">
          <div className="bg-white lg:w-[657.5px] w-full rounded-lg">
            <Monthly />
          </div>
          <div className="flex lg:flex-col my-5 gap-10 items-center">
            <div className="lg:w-[314px] w-full">
              <TotalSale />
            </div>
            <div className="lg:w-[314px] w-full">
              <TotalExpense />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-10">
          <Revenue />
          <Volume />
        </div>
        <p className="my-10">© Dashly. 2023 Webinning.</p>
      </div>
    </div>
  );
};

export default CRM;
