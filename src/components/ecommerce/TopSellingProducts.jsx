import React from "react";
import { topSellingProducts } from "../../constants/ecommerce";
import { BsThreeDotsVertical } from "react-icons/bs";
import { tr } from "@faker-js/faker";

const TopSellingProducts = () => {
  return (
    <div className="w-full mx-auto my-10 bg-white rounded-2xl custom-shadow">
      <div className="flex justify-between items-center p-6">
        <h6 className="text-sm font-bold uppercase">Top Selling Products</h6>
        <BsThreeDotsVertical className="text-[#9ea9b4]" />
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#f4f5f6]">
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
              Name
            </th>
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
              Price
            </th>
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
              Quantity
            </th>
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
              Amount
            </th>
            <th className="text-end text-xs text-[#9ea9b4] pe-6 py-2 w-[300px]">
              Sale
            </th>
          </tr>
        </thead>
        <tbody>
          {topSellingProducts.map((i) => {
            return (
              <tr key={i.id}>
                <td className="ps-6 h-14 text-sm font-bold">{i.name}</td>
                <td className="ps-6 h-14 ">{i.price}</td>
                <td className="ps-6 h-14 ">{i.quantity}</td>
                <td className="ps-6 h-14 ">{i.amount}</td>
                <td className="pe-6 h-14 text-[#c8c8c8] ">
                  <div className="relative pt-5">
                    <div className="overflow-hidden h-[15px] mb-4 text-xs flex rounded-full bg-[#EDEEF0]">
                      <div
                        style={{ width: i.sales }}
                        className={`${i.status > 5 ? 'bg-[#00BAC7]' : "bg-black"} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}
                      >
                        <p className="absolute left-10">{i.sales}</p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
