
import React from "react";
import CRM from "../pages/dashboard/CRM";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Ecommerce from "../pages/Ecommerce";
import Account from "../pages/Account";
import Default from "../components/Default/Default";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Path = () => {
  return (
    <div>

      <Routes>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Ecommerce />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/account" element={<Account />} />
          <Route path="/default" element={<Default/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
