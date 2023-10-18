import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiArrowRightCircle } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { TiDocument } from "react-icons/ti";
import { TfiViewListAlt } from "react-icons/tfi";
import GlobalContext from "../context/GlobalContext";

function SideBar() {
  const [isOpen, setOpen] = useState(false);
  const { loggedIn } = useContext(GlobalContext);

  return (
    <div
      className={` z-40 duration-300 h-full bg-white  drop-shadow-2xl border-r-[1px] fixed top-0 left-0 ${
        isOpen ? " w-40 md:w-44" : "w-10 md:w-20"
      } `}
    >
      <ul className=" text-lg pt-20 pl-2 md:pl-7 text-black flex gap-6 flex-col justify-center content-center  ">
        {/* <li>
              <Link to='/'>
              <div className="logo absolute top-12 text-center align-middle ">
                {isOpen?<img  src={logo} alt="" />:<HiFire size='1.4em'/>}
              </div>
              </Link>
            </li> */}

          {/* logo */}
        <li>
          <NavLink to="/">
            {isOpen ? (
              <p
                className={` font-mono font-bold text-2xl text-red-400 absolute left-10 top-12 ${
                  !isOpen && "scale-0"
                }  `}
              >
                job<span className="text-slate-950">spire</span>
              </p>
            ) : (
              <p className="font-mono font-bold invisible md:text-xl md:visible  text-red-400 absolute left-6 top-12">
                J<span className=" text-slate-950">S.</span>{" "}
              </p>
            )}
          </NavLink>
        </li>

        {/* dashboard */}

        {loggedIn 
          ?
          <li>
          <NavLink to="admin/recruiter/dashboard">
            <div className=" text-black flex flex-row gap-2 items-center ">
              <div>
                <RxDashboard className=" text-xl md: text-2xl"  />
              </div>
              <h1
                className={` duration-300 font-medium ${!isOpen && "scale-0"}`}
              >
                Dashboard
              </h1>
            </div>
          </NavLink>
        </li>
        :null        
        }

        {/* <li>
              <NavLink to='/'>
                <div className='text-black flex flex-row gap-2 items-center'>
                <div>
                <BiHomeAlt fontSize='1.5rem'  />
                  </div> 
                <h1 className={` duration-300 font-medium ${ !isOpen && 'scale-0'}`}>homepage</h1>
                </div>
              </NavLink>
            </li> */}

            {/* jobs */}

        <li>
          <NavLink to="/">
            <div className="flex flex-row gap-2 items-center">
              <div>
                <TfiViewListAlt className=" text-xl md: text-2xl" />
              </div>
              <h1
                className={` duration-300 font-medium ${!isOpen && "scale-0"}`}
              >
                Jobs
              </h1>
            </div>
          </NavLink>
        </li>

        {/* post job */}
        {loggedIn ? (
          <li>
            <NavLink to="admin/job/post">
              <div className=" text-black flex flex-row gap-2 items-center">
                <div>
                  <TiDocument className=" text-xl md: text-2xl" />
                </div>
                <h1
                  className={` duration-300 font-medium ${
                    !isOpen && "scale-0"
                  }`}
                >
                  Post job
                </h1>
              </div>
            </NavLink>
          </li>
        ) : null}

        {/* about  */}
        {/* 3 */}
        <li>
          <NavLink to="/about">
            <div className="flex flex-row gap-2 items-center">
              <div>
                <AiOutlineInfoCircle className=" text-xl md: text-2xl" />
              </div>
              <h1
                className={` duration-300 font-medium ${!isOpen && "scale-0"}`}
              >
                About
              </h1>
            </div>
          </NavLink>
        </li>

        <li
          className={`shadow-2xl absolute top-10 duration-500 right-[-15px] ${
            isOpen && "rotate-[-180deg]"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <HiArrowRightCircle fill="black" size="2em" />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
