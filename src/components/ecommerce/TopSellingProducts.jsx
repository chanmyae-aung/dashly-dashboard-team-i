import React, { useState } from "react";
import { topSellingProducts } from "../../constants/ecommerce";
import { BsThreeDotsVertical } from "react-icons/bs";
import { tr } from "@faker-js/faker";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const TopSellingProducts = () => {
  const [showName, setShowName] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showQty, setShowQty] = useState(false);
  const [showAmt, setShowAmt] = useState(false);
  const [showSales, setShowSales] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      name: "Nexus 3",
      price: "$349",
      quantity: "98",
      amount: "$34,202",
      sales: "41%",
      status: "4",
    },
    {
      id: 2,
      name: "iPhone SE",
      price: "$499",
      quantity: "127",
      amount: "$63,373",
      sales: "25%",
      status: "2",
    },
    {
      id: 3,
      name: "iPad Air",
      price: "$599	",
      quantity: "135",
      amount: "$80,865",
      sales: "81%",
      status: "8",
    },
    {
      id: 4,
      name: "Apple watch series-6",
      price: "$599",
      quantity: "214",
      amount: "$128,186",
      sales: "62%",
      status: "6",
    },
    {
      id: 5,
      name: "Apple TV 4K",
      price: "$1200",
      quantity: "51",
      amount: "$61,200",
      sales: "36%",
      status: "3",
    },
  ]);

  const [sortOrder, setSortOrder] = useState("asc");

  const sortByProperty = (property) => {
    const sortedData = [...data].sort((a, b) => { 
      let result;
      if (property === "name") {
        result = a.name.localeCompare(b.name);
      } else if (property === "price" || property === "amount") {
        const priceA = parseFloat(a[property].replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b[property].replace(/[^0-9.-]+/g, ""));
        result = priceA - priceB;
      } else if (property === "quantity" || property === "status") {
        result = parseInt(a[property]) - parseInt(b[property]);
      } else if (property === "sales") {
        const salesA = parseFloat(a[property].replace("%", ""));
        const salesB = parseFloat(b[property].replace("%", ""));
        result = salesA - salesB;
      }

      // Reverse the result if sorting order is descending
      if (sortOrder === "desc") {
        result *= -1;
      }

      return result;
    });

    setData(sortedData);
    // Toggle the sorting order
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

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
              <div className="flex items-center gap-2">
                <p>Name</p>
                <div className="flex flex-col ">
                  <VscTriangleUp
                    onClick={() => (
                      sortByProperty("name"), setShowName(!showName)
                    )}
                    className={`${
                      showName ? "opacity-20" : "opacity-100"
                    } font-bold  duration-200`}
                  />
                  <VscTriangleDown
                    onClick={() => (
                      sortByProperty("name"), setShowName(!showName)
                    )}
                    className={`${
                      showName ? "opacity-100" : "opacity-20"
                    } font-bold  duration-200`}
                  />
                </div>
              </div>
            </th>
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
              <div className="flex items-center gap-2">
                <p>Price</p>
                <div className="flex flex-col ">
                  <VscTriangleUp
                    onClick={() => (
                      sortByProperty("price"), setShowPrice(!showPrice)
                    )}
                    className={`${
                      showPrice ? "opacity-20" : "opacity-100"
                    } font-bold  duration-200`}
                  />
                  <VscTriangleDown
                    onClick={() => (
                      sortByProperty("price"), setShowPrice(!showPrice)
                    )}
                    className={`${
                      showPrice ? "opacity-100" : "opacity-20"
                    } font-bold  duration-200`}
                  />
                </div>
              </div>
            </th>
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
              <div className="flex items-center gap-2">
                <p>Quantity</p>
                <div className="flex flex-col ">
                  <VscTriangleUp
                    onClick={() => (
                      sortByProperty("quantity"), setShowQty(!showQty)
                    )}
                    className={`${
                      showQty ? "opacity-20" : "opacity-100"
                    } font-bold  duration-200`}
                  />
                  <VscTriangleDown
                    onClick={() => (
                      sortByProperty("quantity"), setShowQty(!showQty)
                    )}
                    className={`${
                      showQty ? "opacity-100" : "opacity-20"
                    } font-bold  duration-200`}
                  />
                </div>
              </div>
            </th>
            <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
              <div className="flex items-center gap-2">
                <p>Amount</p>
                <div className="flex flex-col ">
                  <VscTriangleUp
                    onClick={() => (
                      sortByProperty("amount"), setShowAmt(!showAmt)
                    )}
                    className={`${
                      showAmt ? "opacity-20" : "opacity-100"
                    } font-bold  duration-200`}
                  />
                  <VscTriangleDown
                    onClick={() => (
                      sortByProperty("amount"), setShowAmt(!showAmt)
                    )}
                    className={`${
                      showAmt ? "opacity-100" : "opacity-20"
                    } font-bold  duration-200`}
                  />
                </div>
              </div>
            </th>
            <th className="text-end text-xs text-[#9ea9b4] pe-6 py-2 w-[300px]">
              <div className="flex items-center justify-end gap-2">
                <p>Sale</p>
                <div className="flex flex-col ">
                  <VscTriangleUp
                    onClick={() => (
                      sortByProperty("sales"), setShowSales(!showSales)
                    )}
                    className={`${
                      showSales ? "opacity-20" : "opacity-100"
                    } font-bold  duration-200`}
                  />
                  <VscTriangleDown
                    onClick={() => (
                      sortByProperty("sales"), setShowSales(!showSales)
                    )}
                    className={`${
                      showSales ? "opacity-100" : "opacity-20"
                    } font-bold  duration-200`}
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => {
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
                        className={`${
                          i.status > 5 ? "bg-[#00BAC7]" : "bg-black"
                        } shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}
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
