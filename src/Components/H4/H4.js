import React from "react";

const H4 = ({ className, title }) => {
  return (
    <h4
      className={`font-medium font-times tracking-tighter text-3xl md:text-4xl italic capitalize ${className}`}
    >
      {title}
    </h4>
  );
};

export default H4;
