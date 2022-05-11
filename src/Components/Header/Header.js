import React from "react";

const Header = ({ title, bgImg, children }) => {
  return (
    <section
      className={`w-full relative aspect-video lg:h-screen  bg-center bg-no-repeat  bg-cover opacity-90 ${bgImg}`}
    >
      <div className="w-full h-full flex justify-center items-center ">
        {children}
      </div>
      <span className="w-px absolute h-1/5 block border border-white left-1/2 bottom-[15%]"></span>
    </section>
  );
};

export default Header;
