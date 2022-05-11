import React from "react";
import { Link } from "react-router-dom";

const AnchorTag = ({ to, title, className }) => {
  return (
    <Link
      to={to}
      className={`border-2 py-2 uppercase  tracking-widest text-xs md:text-base font-bold + ${className}`}
    >
      {title}
    </Link>
  );
};

export default AnchorTag;
