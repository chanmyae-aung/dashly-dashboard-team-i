import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";
import SaleChart from "./SaleChart";

const TotalSale = () => {
  return (
    <div className="bg-white rounded-lg p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-sm font-bold">TOTAL SALES</h3>
        <BsThreeDotsVertical />
      </div>
      <div className="flex justify-between pt-4">
        <div>
          <h2 className="text-3xl font-bold">$74,925</h2>
          <div className="flex gap-2">
            <p className="text-green-500 bg-green-100 text-xs flex items-center font-bold w-fit rounded">
              {" "}
              <BiTrendingUp /> 12%
            </p>
            <p className="text-xs text-gray-400">from $65,934</p>
          </div>
        </div>
          <div>
            <SaleChart />
          </div>
      </div>
    </div>
  );
};

export default TotalSale;
