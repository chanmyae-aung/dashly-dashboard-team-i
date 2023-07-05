import React from "react";
import Navbar from "../Nav/Navbar";
import "./Ecommerce.css";

import Category from "./Category";
import TopSellingProducts from "./TopSellingProducts";
import TableSection from "./TableSection";

const Ecommerce = () => {
  return (
    <div>
      <Navbar />
      <Category/>
      <TableSection/>
      
    </div>
  );
};

export default Ecommerce;
