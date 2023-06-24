import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PiSun, PiMoon, PiBell } from "react-icons/pi";
import {RiAppsLine} from 'react-icons/ri'
import { TbSunMoon } from "react-icons/tb";
import { stateContextCustom } from "../context/StateContext";
import { language } from "../constants/nav";
import uk from "../assets/icons8-great-britain-96.png";

const Navbar = () => {
  const { show, toggleShow , showLanguage, toggleLanguage} = stateContextCustom();
  const [image, setImage] = useState()

  return (
    <>
      <main className="flex items-center justify-between p-10">
        <div className="relative w-[287.5px] flex items-center shadow rounded-md">
          <input
            type="text"
            className="bg-[#F1F5F7] w-full outline-none rounded-md py-2 px-4"
            placeholder="Search..."
          />
          <button className="bg-[#00C5D9] p-2 text-white rounded-lg absolute right-1">
            <BiSearch className="" />
          </button>
        </div>
        <div className="flex ">
          <div className="relative mx-5">
            <button onClick={toggleShow} className="nav-btn">
              <PiSun />
            </button>
            <div
              className={`${
                !show ? "hidden" : "block"
              } absolute right-0 flex flex-col mt-3 justify-center py-2 w-40 rounded-lg bg-white`}
            >
              <button className="nav-dropdown">
                <PiSun /> Light mode
              </button>
              <button className="nav-dropdown">
                <PiMoon /> Dark mode
              </button>
              <button className="nav-dropdown">
                <TbSunMoon /> Auto
              </button>
            </div>
          </div>
          <div className="relative mx-5 ">
            <button onClick={toggleLanguage} className="nav-btn">
              <img src={image ? image : uk} alt="" className="w-[30px]" />
            </button>
            <ul
              className={`${
                !showLanguage ? "hidden" : "block"
              } absolute right-0 flex flex-col mt-3 justify-center py-2 w-40 rounded-lg bg-white`}
            >
              {language.map((i) => {
                let currentImg = i.image;
                return (
                  <li
                    onClick={() => setImage(currentImg)}
                    key={i.id}
                    className="nav-dropdown"
                  >
                    <img src={i.image} alt="" className="w-[20px]" />
                    <p>{i.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative">
            <button className="nav-btn">
              <PiBell />
              <span className="text-xs bg-red-500 rounded-full text-white px-1.5 absolute -top-2 -right-3">20+</span>
            </button>
          </div>
          <div className="relative">
            <button className="nav-btn">
              <RiAppsLine />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
