import React from "react";
import RecentOrder from "../../components/crm/RecentOrder";
import EmailActivity from "../../components/crm/EmailActivity";
import Monthly from "../../components/crm/Monthly";
import TotalSale from "../../components/crm/TotalSale";
import TotalExpense from "../../components/crm/TotalExpense";
import Volume from "../../components/crm/Volume";
import Revenue from "../../components/crm/Revenue";
import Navbar from "../../components/Nav/Navbar";

const CRM = () => {
  return (
    <main className="w-full">
      <Navbar />
      <div className="w-full">
        <h1 className="text-xl font-bold pb-16 bg-[#F8FAFB] px-10 -mb-10">
          CRM
        </h1>
        <div className="px-10">
          <div className="lg:flex gap-8 justify-between lg:mb-8">
            <div className="lg:w-[65%] shadow rounded-lg">
              <RecentOrder />
            </div>
            <div className="lg:w-[35%] my-5 lg:my-0 shadow rounded-lg">
              <EmailActivity />
            </div>
          </div>
          <div className="lg:flex gap-8 w-full justify-between mb-5 lg:mb-8">
            <div className="bg-white  lg:w-[67%] h-fit w-full rounded-lg shadow">
              <Monthly />
            </div>
            <div className="flex lg:w-[33%] lg:flex-col gap-5 lg:justify-between lg:gap-3 my-5 lg:my-0">
              <div className="w-full shadow rounded-lg">
                <TotalSale />
              </div>
              <div className="w-full shadow rounded-lg">
                <TotalExpense />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-10 shadow">
            <Revenue />
            <Volume />
          </div>
          <p className="my-10">© Dashly. 2023 Webinning.</p>
        </div>
      </div>
    </main>
  );
};

export default CRM;
