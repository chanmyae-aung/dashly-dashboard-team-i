import React from "react";
import CRM from "../pages/dashboard/CRM";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Ecommerce from "../pages/Ecommerce";
const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Ecommerce />} />
        </Route>
        <Route path="/" element={<CRM />} />
      </Routes>
    </div>
  );
};

export default Path;
