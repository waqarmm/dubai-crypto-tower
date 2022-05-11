import React from "react";
import { NavLinks, Footer } from "../../Components";

const Layout = ({ children }) => {
  return (
    <div className=" relative flex flex-col items-center w-full">
      <NavLinks />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
