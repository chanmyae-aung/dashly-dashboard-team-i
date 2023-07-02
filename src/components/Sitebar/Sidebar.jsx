import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { BsCalendar4 } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import './Sitebar.css'

const Sidebar = () => {

  const [showDash,setShowDash] = useState(false)
  const [showPage,setShowPage] = useState(false)
  const [showEmail,setShowEmail] = useState(false)
  const [showTask,setShowTask] = useState(false)
  const [showAuth,setShowAuth] = useState(false)

  return (
    <div className="w-[260px] h-screen overflow-y-scroll bg-[#0e2238] text-[#9ea9b4] sticky top-0 left-0">
      <div className="px-8 py-10">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/55307694d1a6b107d2d87c838a1aaede85cd3d84/66f18/assets/images/logo-dark.svg"
          alt=""
        />
      </div>
      <ul className="transition-all">
        <li onClick={()=>setShowDash(!showDash)}>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                class="nav-link-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <p className="text-sm font-semibold">Dashboards</p>
            </div>
            <FaAngleDown className={`${showDash && '-rotate-180'} text-xl duration-300`} />
          </NavLink>
          <ul onClick={(e)=>e.stopPropagation()} className={`${showDash ? 'min-h-max opacity-100' : 'h-0 opacity-0 hidden'} duration-10 ms-16 text-xs font-bold cursor-pointer`}>
            <li className="sub-site-link my-3 hover:text-white sub-menu">Default</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">E-commerce</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">CRM</li>
          </ul>
        </li>
        <li onClick={()=>setShowPage(!showPage)}>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <MdContentCopy className="transform -scale-y-100 text-lg" />
              <p className="text-sm font-semibold">Pages</p>
            </div>
            <FaAngleDown className={`${showPage && '-rotate-180'} text-xl duration-300`} />
          </NavLink>
          <ul onClick={(e)=>e.stopPropagation()} className={`${showPage ? 'min-h-max opacity-100' : 'h-0 opacity-0 hidden'} duration-10 ms-16 text-xs font-bold cursor-pointer`}>
            <li className="sub-site-link my-3 hover:text-white sub-menu">Account</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">User</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Pricing</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Wizard</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Help Center</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Invoice</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Api Keys</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Maintenance</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Connect Apps</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Landing Page</li>
          </ul>
        </li>
        <li>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                class="nav-link-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25,18.75a1.5,1.5,0,0,1-1.5-1.5V9.75a1.5,1.5,0,0,1,1.5-1.5h10.5a1.5,1.5,0,0,1,1.5,1.5v7.5a1.5,1.5,0,0,1-1.5,1.5h-1.5v4.5l-4.5-4.5Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M6.75,12.75l-3,3v-4.5H2.25a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75h10.5a1.5,1.5,0,0,1,1.5,1.5v3"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <p className="text-sm font-semibold">Chat</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <BsCalendar4 />
              <p className="text-sm font-semibold">Calendar</p>
            </div>
          </NavLink>
        </li>
        <li onClick={()=>setShowEmail(!showEmail)}>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <TfiEmail className="transform -scale-y-100 text-lg" />
              <p className="text-sm font-semibold">Email</p>
            </div>
            <FaAngleDown className={`${showEmail && '-rotate-180'} text-xl duration-300`} />
          </NavLink>
          <ul onClick={(e)=>e.stopPropagation()} className={`${showEmail ? 'min-h-max opacity-100' : 'h-0 opacity-0 hidden'} duration-10 ms-16 text-xs font-bold cursor-pointer`}>
            <li className="sub-site-link my-3 hover:text-white sub-menu">Inbox</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Read Email</li>            
          </ul>
        </li>
        <li onClick={()=>setShowTask(!showTask)}>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="nav-link-icon"
                height="18"
                width="18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5.25 10.511H10.5"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5.25 14.261H8.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5.25 18.011H8.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V6C0.75 5.60218 0.908035 5.22064 1.18934 4.93934C1.47064 4.65804 1.85218 4.5 2.25 4.5H6C6 3.50544 6.39509 2.55161 7.09835 1.84835C7.80161 1.14509 8.75544 0.75 9.75 0.75C10.7446 0.75 11.6984 1.14509 12.4017 1.84835C13.1049 2.55161 13.5 3.50544 13.5 4.5H17.25C17.6478 4.5 18.0294 4.65804 18.3107 4.93934C18.592 5.22064 18.75 5.60218 18.75 6V8.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M9.75 4.51099C9.54289 4.51099 9.375 4.34309 9.375 4.13599C9.375 3.92888 9.54289 3.76099 9.75 3.76099"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M9.75 4.51099C9.95711 4.51099 10.125 4.34309 10.125 4.13599C10.125 3.92888 9.95711 3.76099 9.75 3.76099"
                ></path>
                <g>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19.9239 15.505L17.0189 19.379C16.9543 19.4649 16.8721 19.536 16.7776 19.5873C16.6832 19.6387 16.5789 19.6692 16.4717 19.6768C16.3645 19.6844 16.2569 19.6689 16.1562 19.6313C16.0555 19.5937 15.964 19.535 15.8879 19.459L14.3879 17.959"
                  ></path>
                </g>
              </svg>
              <p className="text-sm font-semibold">Tasks</p>
            </div>
            <FaAngleDown className={`${showTask && '-rotate-180'} text-xl duration-300`} />
          </NavLink>
          <ul onClick={(e)=>e.stopPropagation()} className={`${showTask ? 'min-h-max opacity-100' : 'h-0 opacity-0 hidden'} duration-10 ms-16 text-xs font-bold cursor-pointer`}>
            <li className="sub-site-link my-3 hover:text-white sub-menu">Kanban Board</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Task Details</li>            
          </ul>
        </li>
        <li>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                class="nav-link-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.25,9.75v-3a1.5,1.5,0,0,0-1.5-1.5H8.25V3.75a1.5,1.5,0,0,0-1.5-1.5H2.25a1.5,1.5,0,0,0-1.5,1.5v16.3a1.7,1.7,0,0,0,3.336.438l2.351-9.657A1.5,1.5,0,0,1,7.879,9.75H21.75A1.5,1.5,0,0,1,23.2,11.636l-2.2,9A1.5,1.5,0,0,1,19.55,21.75H2.447"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <p className="text-sm font-semibold">File Manager</p>
            </div>
          </NavLink>
        </li>
        <li onClick={()=>setShowAuth(!showAuth)}>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="nav-link-icon"
                height="18"
                width="18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V21.75C3.75 22.5784 4.42157 23.25 5.25 23.25H18.75C19.5784 23.25 20.25 22.5784 20.25 21.75V11.25C20.25 10.4216 19.5784 9.75 18.75 9.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6.75 9.75V6C6.75 4.60761 7.30312 3.27226 8.28769 2.28769C9.27226 1.30312 10.6076 0.75 12 0.75C13.3924 0.75 14.7277 1.30312 15.7123 2.28769C16.6969 3.27226 17.25 4.60761 17.25 6V9.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M12 16.5C11.7929 16.5 11.625 16.3321 11.625 16.125C11.625 15.9179 11.7929 15.75 12 15.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M12 16.5C12.2071 16.5 12.375 16.3321 12.375 16.125C12.375 15.9179 12.2071 15.75 12 15.75"
                ></path>
              </svg>
              <p className="text-sm font-semibold">Authentication</p>
            </div>
            <FaAngleDown className={`${showAuth && '-rotate-180'} text-xl duration-300`} />
          </NavLink>
          <ul onClick={(e)=>e.stopPropagation()} className={`${showAuth ? 'min-h-max opacity-100' : 'h-0 opacity-0 hidden'} duration-10 ms-16 text-xs font-bold cursor-pointer`}>
            <li className="sub-site-link my-3 hover:text-white sub-menu">Sign up</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Sign In</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Reset Password</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Email Verification</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">2-setp Verification</li>
            <li className="sub-site-link mb-3 hover:text-white sub-menu">Error</li>            
          </ul>
        </li>
        <li>
          <div className="border-b border-slate-700 my-5"></div>
        </li>
        <li>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-2 rounded-e-full">
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="nav-link-icon"
                height="18"
                width="18"
              >
                <path
                  d="M22.627 14.87 15 22.5l-3.75.75.75-3.75 7.631-7.63a2.113 2.113 0 0 1 2.991 0l.009.008a2.116 2.116 0 0 1-.004 2.992zM8.246 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5V9m-10.5-3.75h6m-9 4.5h9m-9 4.5h7.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <p className="text-sm font-semibold">Documentation</p>
            </div>
            <span className="flex items-center justify-center h-3 px-2 py-2 rounded-full bg-[#00bac7] ms-auto">
              <p className="text-xs text-white">v1.4</p>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center justify-between hover:bg-[#0c3549] w-[85%] ps-8 py-4 pe-4 rounded-e-full">
            <div className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                class="nav-link-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.91,6.953,12.7,1.672a1.543,1.543,0,0,0-1.416,0L1.076,6.953a.615.615,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0L22.91,8.047a.616.616,0,0,0,0-1.094Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M.758,12.75l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,12.75"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M.758,17.25l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,17.25"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <p className="text-sm font-semibold">Components</p>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className="px-8 py-10">
        <div className="bg-[#0b4055] p-5 rounded-xl">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/562db41ab1c8390d2de557ae8ebd99c6add4f80b/2053e/assets/images/illustrations/upgrade-illustration.svg"
            alt=""
          />
          <p className="text-[10px] text-center my-5">
            Upgrade to explore <br />
            <span className="font-bold text-white">premium</span> features
          </p>
          <button className="ms-auto bg-[#00bac7] duration-300 hover:bg-[#009ea9] rounded-full w-full py-2 text-xs font-bold text-white">
            Upgrade to Business
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
