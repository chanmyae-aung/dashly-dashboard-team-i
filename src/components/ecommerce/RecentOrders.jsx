import React from "react";
import { recentOrders } from "../../constants/ecommerce";

const RecentOrders = () => {
  return (
    <div className="w-full mx-auto my-10 bg-white rounded-2xl custom-shadow">
      <div className="flex justify-between items-center p-6">
        <h6 className="text-sm font-bold uppercase">Recent Orders</h6>
        <p className="text-[#c9caca] font-bold text-sm">View all</p>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#f4f5f6]">
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-[11.5px]">
              Name
            </th>
            <th className="text-start text-xs text-[#9ea9b4] ps-3 py-[11.5px]">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((i) => {
            return (
              <tr key={i.id}>
                <td className="ps-6 h-14 ">
                  <div className="flex items-center gap-2">
                    <img
                      src={i.image}
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <div className="">
                      <p className="text-sm font-bold">{i.name}</p>
                      <p className="text-xs font-light">{i.time}</p>
                    </div>
                  </div>
                </td>
                <td className="text-end pe-6 h-14 text-sm font-bold">{i.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
