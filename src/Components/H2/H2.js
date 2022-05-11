import React from "react";

const H2 = ({ children, className }) => {
  return (
    <h2
      className={`text-4xl xl:text-6xl font-bold  leading-lhlg md:leading-lhxl xl:leading-lh3xl font-times  ${className}`}
      // className={`text-4xl xl:text-6xl font-bold leading-7  xl:leading-12 font-times   ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
