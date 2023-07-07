
import React, { useEffect, useState } from "react";
import CRM from "../pages/dashboard/CRM";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Ecommerce from "../pages/Ecommerce";
import Account from "../pages/Account";
import Default from "../components/Default/Default";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { FlapperSpinner } from "react-spinners-kit";

const Path = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FlapperSpinner size={40} color='#00BAC7'/>
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Default />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/account" element={<Account />} />
          <Route path="/ecommerce" element={<Ecommerce/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
