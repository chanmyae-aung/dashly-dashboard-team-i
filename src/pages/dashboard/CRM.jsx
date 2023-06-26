import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import RecentOrder from "../../components/crm/RecentOrder";

const CRM = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">CRM</h1>
      <div className="flex">
        <div className="w-[70%]">
          <RecentOrder />
        </div>
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
};

export default CRM;
