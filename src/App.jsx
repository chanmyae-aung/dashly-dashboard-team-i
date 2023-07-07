import React, { useEffect, useState } from "react";
import Path from "./routes/Path";
import { stateContextCustom } from "./context/StateContext";
import { FlapperSpinner } from "react-spinners-kit";

const App = () => {
  const { hide } = stateContextCustom();
  
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
    <div onClick={hide} className="bg-[#F1F5F7]">
      <Path />
    </div>
  );
};

export default App;
