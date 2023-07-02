
import React from "react";
import CRM from "../pages/dashboard/CRM";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Ecommerce from "../pages/Ecommerce";
import Account from "../pages/Account";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Ecommerce />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
