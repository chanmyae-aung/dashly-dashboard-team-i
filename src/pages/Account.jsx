import React from "react";
import { PiPencilDuotone } from "react-icons/pi";
import { FaRegUserCircle, FaFingerprint } from "react-icons/fa";
import { BsPerson, BsBell, BsTrash } from "react-icons/bs";
import {
  AiOutlineRight,
  AiOutlineLock,
  AiOutlineShareAlt,
} from "react-icons/ai";
import CountrySelect from "./CountrySelect";

const Account = () => {
  const list = [
    { icon: <BsPerson />, name: "Basic information" },
    { icon: <FaRegUserCircle />, name: "Username" },
    { icon: <AiOutlineLock />, name: "Privacy and Safety" },
    { icon: <FaFingerprint />, name: "Payment methods" },
    { icon: <BsBell />, name: "Notification" },
    { icon: <AiOutlineShareAlt />, name: "Connected accounts" },
    { icon: <BsTrash />, name: "Delete account" },
  ];
  return (
    <div className="px-5 mx-auto mt-7">
      <div className="grid gap-x-10 grid-cols-12">
        {/* first */}
        <div className="flex col-span-12  justify-between">
          <h1 className=" text-lg font-bold">Account</h1>
          <div className="flex">
            <p className="text-slate-500 text-sm">pages</p>
            <p className="text-slate-500 mx-2 mt-1 text-sm">
              <AiOutlineRight />
            </p>
            <p className="text-black text-sm">Account</p>
          </div>
        </div>
        <div className="bg-[#FFFFFF] h-[700px] rounded-xl shadow-md lg:col-span-3 col-span-12 md:col-span-4 w-full mt-3">
          <div className="flex flex-col items-center pt-8 mx-auto ">
            <div className="relative cursor-pointer mb-3">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img
                  className=""
                  src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
                  alt=""
                />
              </div>
              <span className="w-8 h-8 absolute right-0 bottom-0 border border-white text-center flex justify-center items-center text-white rounded-full bg-green-500">
                <PiPencilDuotone />
              </span>
            </div>
            <h1 className="font-bold text-xl">Ellie Tucker</h1>
            <p className="text-slate-500">Assistant Manager</p>
          </div>
          {/* list  */}
          <hr className="w-4/5 mx-auto my-5" />
          <div className="">
            <ul>
              {list.map((i) => {
                return (
                  <li
                    className="flex ps-5 py-3 hover:text-[#00BAC7] hover:border-s-2
                 hover:border-s-[#00BAC7] text-slate-900"
                  >
                    <div className="items-center flex me-3 text-lg">
                      {i.icon}
                    </div>
                    <div className="">{i.name}</div>
                  </li>
                );
              })}
            </ul>
            <hr className="mx-auto my-5" />
            <button className="bg-gray-300 p-3 px-6 rounded-full mx-auto flex hover:bg-gray-400 duration-150 text-white font-bold">
              View Public Profile
            </button>
            <br />
          </div>
        </div>
        {/* third  */}
        <div className="h-screen overflow-auto col-span-12  mt-3 md:col-span-8 lg:col-span-9">
          <div className=" bg-[#ffffff] p-4 rounded-xl  shadow-md">
            <div>
              <div className="text-lg my-2 font-bold">Basic information</div>
              <hr className="my-4" />
              <div action="flex">
                {/* form con  */}
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Full Name
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"hello"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Phone
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"+1(119)980-03-11"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Email address
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"ellie.tucker@dashly.com"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Location
                  </p>
                  {/* <CountrySelect/> */}

                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={""}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0"></p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"Houston"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0"></p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"Texas"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Address line 1
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"3227 Wines Lane"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex-col justify-start flex font-semibold mb-2 ms-1 lg:mb-0">
                    Address Line 2
                    <p className="text-slate-300 text-start flex justify-start">
                      (optional)
                    </p>
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={""}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Zip code
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"77032"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm flex font-semibold mb-2 ms-1 lg:mb-0">
                    Overview
                  </p>
                  {/* <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                  defaultValue={"hello"}
                /> */}
                  <textarea
                    className="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <button className="p-2 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          {/* fourth  */}
          <div className=" bg-[#ffffff] p-4 rounded-xl mt-7  shadow-md">
            <div>
              <div className="text-lg my-2 font-bold">User</div>
              <hr className="my-4" />
              <p className="text-slate-300">
                Your current username is{" "}
                <span className="text-slate-400">@ellietucker</span>
              </p>
              <div action="flex">
                {/* form con  */}
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Username
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"ellietucker"}
                  />
                </div>
              </div>
              <button className="p-2 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          <div className=" bg-[#ffffff] p-4 rounded-xl mt-7  shadow-md">
            <div>
              <div className="text-lg my-2 font-bold">Password</div>
              <hr className="my-4" />
              <div action="flex">
                {/* form con  */}
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Current password
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"ellietucker"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    New password
                  </p>
                  <div className="flex gap-x-9 w-4/5 justify-between">
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border lg:w-5/6  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      placeholder="Your new password"
                    />
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      placeholder="comfirm your new password"
                    />
                  </div>
                </div>
              </div>
              <button className="p-2 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second img */}
    </div>
  );
};

export default Account;
