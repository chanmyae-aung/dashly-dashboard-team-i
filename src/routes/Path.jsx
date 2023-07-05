import React from "react";
import CRM from "../pages/dashboard/CRM";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Ecommerce from "../components/ecommerce/Ecommerce";
import Account from "../pages/Account";
import Default from "../components/Default/Default";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Ecommerce />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/account" element={<Account />} />
          <Route path="/default" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
