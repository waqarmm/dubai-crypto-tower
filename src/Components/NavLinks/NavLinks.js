import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/uptown-logo.svg";
import Divider from "../Divider/Divider";

const NavLinks = () => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setToggle(true);
  };
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <header
      className={`absolute w-full	 xl:px-16 z-10 ${
        toggle ? "m-0 p-0" : "md:mt-4 md:px-4"
      }`}
    >
      <nav
        className={`max-w-screen-xl 2xl:container mx-auto flex items-center justify-between w-full flex-wrap  ${
          toggle ? "w-full h-screen bg-white" : "p-3 lg:p-6"
        }`}
      >
        {toggle && (
          <span
            className="lg:hidden text-5xl w-3/5 flex justify-center mb-10 cursor-pointer font-times"
            onClick={handleClose}
          >
            &times;
          </span>
        )}
        <div
          className={` items-center flex-shrink-0 text-white  ${
            toggle ? "hidden" : "flex"
          }`}
        >
          <Link to="/">
            {" "}
            <img src={Logo} alt="logo" className="w-20 md:w-auto" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handleOpen}
            className="flex items-center text-white border-white hover:text-white hover:border-white cursor-pointer"
          >
            <svg
              className="fill-current h-6 w-8 sm:h-8 sm:w-8 rotate-90"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full  flex-grow lg:flex lg:items-center lg:w-auto ${
            toggle ? "flex justify-center h-full" : "hidden"
          }`}
        >
          <ul
            className={`lg:divide-x  font-body lg:flex-grow lg:flex lg:justify-end justify-center text-center  space-y-10 lg:space-y-0  xl:space-x-9 lg:space-x-6 text-black lg:text-slate-100 items-center uppercase tracking-wider font-semibold  ${
              toggle ? "text-2xl" : "text-sm "
            }`}
          >
            <li className=" lg:py-0 pl-2  mb-32 lg:mb-0 lg:border-l h-4 hover:transition-all">
              <Link
                onMouseOver={() => setMenuOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setMenuOpen(false);
                  }, 1000);
                }}
                to="/uptown-tower"
                className="block lg:inline-block lg:hover:text-white"
              >
                <span className="lg:hover:border-b-3   border-white  pb-1 ">
                  uptown tower
                </span>
                {menuOpen && (
                  <div className="hidden lg:flex flex-col text-xs space-y-2 mt-2 ">
                    <Link to="/uptown-tower/office-leasing">
                      Office Leasing
                    </Link>
                    <Link to="/uptown-tower/so-residences">SO/ Residences</Link>
                  </div>
                )}
                <div className="lg:hidden  flex flex-col space-y-2 mt-2 text-xl font-normal">
                  <Link to="/uptown-tower/office-leasing">Office Leasing</Link>
                  <Link to="/uptown-tower/so-residences">SO/ Residences</Link>
                </div>
              </Link>
            </li>
            <li className="pl-2 flex items-center justify-center h-4 hover:transition-all">
              <Link
                to="/creators"
                className="blocklg:inline-block lg:hover:text-white"
              >
                <Divider className="lg:hidden w-1/4" />
                <span className="lg:hover:border-b-3  lg:border-white  pb-1 ">
                  creators
                </span>
              </Link>
            </li>
            <li className="pl-2 flex items-center justify-center h-4 hover:transition-all">
              <Link
                to="/locations"
                className="blocklg:inline-block lg:hover:text-white"
              >
                <Divider className="lg:hidden w-1/4" />
                <span className="lg:hover:border-b-3   border-white  pb-1 ">
                  locations
                </span>
              </Link>
            </li>
            <li className="pl-2 flex items-center justify-center h-4 hover:transition-all">
              <Link
                to="/contact-us"
                className="blocklg:inline-block lg:hover:text-white"
              >
                <Divider className="lg:hidden w-1/4" />
                <span className="lg:hover:border-b-3   border-white  pb-1 ">
                  contact us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavLinks;
