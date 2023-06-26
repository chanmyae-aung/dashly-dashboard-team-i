import { createContext, useContext, useState } from "react";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [image, setImage] = useState();
  const [showNoti, setShowNoti] = useState(false);
  const [showSetting, setShowSetting] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showStatus, setShowStatus] = useState(false)

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
  const toggleProfile = () => {
    setShowProfile(!showProfile)
  }
  const toggleStatus = () => {
    setShowStatus(!showStatus)
  }

  const hide = () => {
    show === true && setShow(false);
    showLanguage === true && setShowLanguage(false);
    showApps === true && setShowApps(false);
    // showProfile === true && setShowProfile(false);
    // showNoti === true && setShowNoti(false);
    // showSetting === true && setShowSetting(false);
  };

  const data = {
    show,
    setShow,
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
    showProfile,
    toggleProfile,
    showStatus,
    toggleStatus,
    hide,
  };
  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};

export const stateContextCustom = () => useContext(stateContext);
