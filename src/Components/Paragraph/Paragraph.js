import React from "react";

const Paragraph = ({ para, className }) => {
  return <p className={`font-body ${className}`}>{para}</p>;
};

export default Paragraph;
