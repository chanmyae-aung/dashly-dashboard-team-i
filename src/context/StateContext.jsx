import { createContext, useContext, useState } from "react";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
    
  const [show, setShow] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const hide = () => {
    show === true && setShow(false);
    showLanguage === true && setShowLanguage(false);
  };
  
  const data = { show, toggleShow, toggleLanguage, showLanguage, hide };
  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};

export const stateContextCustom = () => useContext(stateContext);
