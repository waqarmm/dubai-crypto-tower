import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/uptown-logo.svg";
import Dmcc from "../../assets/images/dmcc.svg";
import Divider from "../Divider/Divider";

const Footer = () => {
  return (
    <footer className=" w-full h-auto bg-black  mx-auto px-8 xl:px-16">
      <div className="max-w-screen-xl 2xl:container mx-auto grid grid-cols-12  md:grid-cols-12 py-8 sm:gap-x-4 lg:gap-x-2 my-10 lg:mt-8 xl:mb-20">
        <div className="hidden w-full  sm:flex  items-start md:items-end col-span-12 md:col-span-4 lg:col-span-6  mb-6 sm:mb-0">
          <Link
            to="/"
            className="flex items-start  w-full h-full text-white cursor-pointer"
          >
            <img src={Logo} alt="logo" className="xl:w-2/5" />
          </Link>
        </div>
        <div className="w-full lg:w-11/12  col-span-12 md:col-span-4 lg:col-span-3 mx-auto xl:pl-10  mb-8 text-sm">
          <h4 className="uppercase text-white font-bold mb-4 text-lg">
            CONTACT
          </h4>
          <p className="text-white md:font-medium  mb-4">
            sales@uptowndubai.ae
          </p>
          <p className="text-white md:font-medium tracking-wider">
            +971 (0) 4424 9600
          </p>
          <p className="text-white md:font-medium tracking-wider">
            Local: 600 54 2622
          </p>
          <p className="text-white mt-4  md:font-medium xl:tracking-wider">
            Operating hours: 8 am – 7 pm <br />
            Monday to Saturday
          </p>
        </div>
        <div className="w-full lg:w-11/12  col-span-12 md:col-span-4 lg:col-span-3  mx-auto ">
          <h4 className="uppercase text-white font-bold mb-4 text-lg">
            SALES CENTRE
          </h4>
          <p className="text-white md:font-medium">
            Almas Tower
            <br /> Jumeirah Lakes Towers
            <br /> PO Box 48800 <br /> Dubai, United Arab Emirates
          </p>
        </div>
      </div>
      <Divider className="2xl:container w-full " />
      <div className="max-w-screen-xl 2xl:container  mx-auto flex justify-between items-center sm:items-start flex-wrap sm:flex-nowrap w-auto  sm:mb-24   my-4 sm:mt-10  ">
        <p className="order-last sm:order-1 text-xs text-white font-semibold py-4 sm:pt-0 sm:m-0 mx-auto">
          All rights reserved. © Uptown Dubai DMCC 2022
        </p>
        <div className="order-first  flex items-start sm:hidden w-2/5 sm:w-full h-full text-white ">
          <img src={Logo} alt="logo" className="xl:w-2/5" />
        </div>
        <div className="order-2 flex items-center  h-full text-white">
          <img src={Dmcc} alt="logo" className=" " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
