import React from "react";
import { AnchorTag, Paragraph } from "..";

const BusinessAdvertisment = ({
  para,
  buttonText,
  children,
  link,
  background,
  className,
  justifyContent,
  alignContent,
}) => {
  return (
    <section
      className={`h-screen w-full bg-center bg-no-repeat  bg-cover ${background}`}
    >
      <div
        className={`max-w-screen-xl 2xl:container mx-auto  w-full h-full flex justify-${justifyContent} m-t px-6`}
      >
        <div
          className={`w-full sm:w-3/5 h-3/4	 lg:w-2/5   2xl:h-2/3  bg-lightBlack mt-10  flex justify-${alignContent} items-center flex-col px-1 sm:px-10 ${className}`}
        >
          {children}
          <Paragraph
            className={`tracking-wider text-white text-center font-normal ${
              alignContent === "center" ? "my-8" : "my-0"
            }`}
            para={para}
          />
          <div className="text-center">
            <AnchorTag
              to={link}
              className="border-white text-white px-6 lg:px-2  xl:px-6 hover:text-black hover:bg-white"
              title={buttonText}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAdvertisment;
