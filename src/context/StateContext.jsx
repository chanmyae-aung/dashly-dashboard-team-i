import { createContext, useContext, useState } from "react";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [image, setImage] = useState();
  const [showNoti, setShowNoti] = useState(false);
  const [showSetting, setShowSetting] = useState(false)

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const toggleApps = () => {
    setShowApps(!showApps);
  };

  const toggleNoti = () => {
    setShowNoti(!showNoti);
  };

  const toggleSetting = () => {
    setShowSetting(!showSetting)
  }

  const hide = () => {
    show === true && setShow(false);
    showLanguage === true && setShowLanguage(false);
    showApps === true && setShowApps(false);
    // showNoti === true && setShowNoti(false);
    // showSetting === true && setShowSetting(false);
  };

  const data = {
    show,
    toggleShow,
    showLanguage,
    toggleLanguage,
    image,
    setImage,
    showApps,
    toggleApps,
    showNoti,
    toggleNoti,
    showSetting,
    toggleSetting,
    hide,
  };
  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};

export const stateContextCustom = () => useContext(stateContext);
