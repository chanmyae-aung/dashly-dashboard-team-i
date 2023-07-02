import React from "react";
import { orders } from "../../constants/crm";
import { BsThreeDotsVertical } from "react-icons/bs";

const RecentOrder = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h3 className="text-sm font-bold">RECENT ORDERS</h3>
        <BsThreeDotsVertical />
      </div>
      <div className="overflow-x-scroll">
      <table className=" w-[855.5px]">
        <thead className="h-8">
          <tr className="text-xs my-6 text-[#B3C3D6] bg-[#F4F5F6]">
            <th>No.</th>
            <th>Customer ID</th>
            <th>Product name</th>
            <th>Order date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody >
          {orders.map((i) => {
            return (
              <tr key={i.id} className="text-sm">
                <td>{i.id}</td>
                <td>{i.customer_id}</td>
                <td className="flex items-center gap-3">
                  <img className="w-10" src={i.image} alt="" />
                  {i.product_name}
                </td>
                <td>{i.date}</td>
                <td>{i.price}</td>
                <td>
                  <p
                    className={`
                ${
                  (i.status === "Paid" &&
                    "bg-green-100 font-semibold text-green-600") ||
                  (i.status === "Pending" &&
                    "bg-yellow-100 font-semibold text-yellow-600") ||
                  (i.status === "Shipped" &&
                    "bg-blue-100 font-semibold text-blue-600")
                } text-[.7rem] rounded-full px-2 w-fit
              `}
                  >
                    {i.status}
                  </p>
                </td>
                <td>{i.customer_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RecentOrder;
