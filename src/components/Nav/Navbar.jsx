import React from "react";
import { BiSearch } from "react-icons/bi";
import { PiSunBold, PiBell } from "react-icons/pi";
import { RiAppsLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { stateContextCustom } from "../../context/StateContext";
import uk from "../../assets/icons8-great-britain-96.png";
import Theme from "./Theme";
import Languages from "./Languages";
import ShowApps from "./ShowApps";
import NotiSidebar from "./NotiSidebar";
import SettingSidebar from "./SettingSidebar";
import Profile from "./Profile";

const Navbar = () => {
  const {
    show,
    setShow,
    toggleShow,
    showLanguage,
    toggleLanguage,
    image,
    showApps,
    toggleApps,
    showNoti,
    toggleNoti,
    showSetting,
    toggleSetting,
    showProfile,
    toggleProfile,
  } = stateContextCustom();
  
  const closeSideBars = () => {
    showNoti &&toggleNoti();
    showSetting && toggleSetting()
    showProfile && toggleProfile()
  }

  return (
    <>
      <main className="flex relative w-screen items-center justify-center md:justify-between md:p-10 p-5">
        <div className="hidden relative w-[287.5px] md:flex items-center shadow rounded-md">
          <input
            type="text"
            className="bg-[#F1F5F7] text-sm w-full outline-none rounded-md py-2 px-4"
            placeholder="Search..."
          />
          <button className="bg-[#00C5D9] p-2 text-white rounded-lg absolute right-1">
            <BiSearch className="" />
          </button>
        </div>
        <div className="flex">
          {/* Select Theme */}
          <div className="relative mx-5">
            <button onClick={toggleShow} className="nav-btn">
              <PiSunBold className=""/>
            </button>
            <div
              onClick={() => setShow(false)}
              className={`${!show ? "hidden" : "block"} absolute right-0`}
            >
              <Theme />
            </div>
          </div>
          {/* Select Languages */}
          <div className="relative px-5 border-l">
            <button onClick={toggleLanguage} className="nav-btn">
              <img src={image ? image : uk} alt="" className="w-[30px]" />
            </button>
            <div
              className={`${
                !showLanguage ? "hidden" : "block"
              } absolute right-0`}
            >
              <Languages />
            </div>
          </div>
          {/* closed sidebar  */}
            <div
              onClick={closeSideBars}
              className={
                showNoti || showSetting || showProfile
                  ? "w-full h-screen ml-[110px] fixed top-0 right-0 bg-transparent"
                  : null
              }
            ></div>
          <div className="flex gap-5 border-x px-5">
            {/* Notification */}
            <div className="relative">
              <button onClick={toggleNoti} className="nav-btn">
                <PiBell />
                <span className="text-xs bg-red-500 rounded-full text-white px-1.5 absolute -top-2 -right-3">
                  20+
                </span>
              </button>
            </div>
            <div
              className={`${
                !showNoti ? "translate-x-[400px]" : "translate-x-0"
              } shadow-lg transition-all ease-in duration-200 w-[400px] fixed right-0 top-0  h-screen bg-white z-10 overflow-y-scroll `}
            >
              <NotiSidebar />
            </div>
            {/* Show Apps */}
            <div className="relative">
              <button onClick={toggleApps} className="nav-btn">
                <RiAppsLine />
              </button>
              <div
                className={`${!showApps ? "hidden" : "block"} absolute right-0`}
              >
                <ShowApps />
              </div>
            </div>
            {/* Settings */}
            <div className="relative ">
              <button onClick={toggleSetting} className="nav-btn">
                <MdOutlineSettings className=" animate-spin"/>
              </button>
            </div>
            <div
              className={`${
                !showSetting ? "translate-x-[400px]" : "translate-x-0"
              } w-[400px] fixed right-0 top-0 transition-all ease-in duration-200 h-screen bg-white z-10 overflow-y-scroll `}
            >
              <SettingSidebar />
            </div>
          </div>
          {/* Profile */}
          <div className="relative cursor-pointer">
            <div
              onClick={toggleProfile}
              className="w-[40px] h-[40px] rounded-full overflow-hidden ml-5"
            >
              <img
                className=""
                src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
                alt=""
              />
            </div>
            <span className="w-3 h-3 absolute right-0 bottom-0 border border-white rounded-full bg-green-500"></span>
            <div
              className={`${
                !showProfile ? "hidden" : "block"
              } absolute right-0`}
            >
              <Profile />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
