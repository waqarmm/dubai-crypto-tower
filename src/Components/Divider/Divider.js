import React from "react";

const Divider = ({ className }) => {
  return (
    <span
      className={`border-t border-slate-400 h-px  my-2.5 block mx-auto opacity-70 ${className}`}
    ></span>
  );
};

export default Divider;
