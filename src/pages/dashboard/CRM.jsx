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
    <div className="w-ful">
      <h1 className="text-xl font-bold pb-16 bg-[#F8FAFB] px-10 -mb-10">CRM</h1>
<div className="px-10">
<div className="flex justify-between mb-5">
        <div className="w-[657.5px]">
          <RecentOrder />
        </div>
        <div className="w-[314px]">
          <EmailActivity />
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <div className="bg-white w-[657.5px] rounded-lg">
          <Monthly />
        </div>
        <div className="flex flex-col">
          <div className="w-[314px]">
            <TotalSale />
          </div>
          <div className="w-[314px]">
            <TotalExpense />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-10">
        <Revenue />
        <Volume/>
      </div>
      <p className="my-10">© Dashly. 2023 Webinning.</p>
</div>
    </div>
  );
};

export default CRM;
