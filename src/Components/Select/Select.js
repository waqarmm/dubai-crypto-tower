import React from "react";

const Select = ({ label, className, name, children }) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor="form" className="text-white text-sm">
        {label}
      </label>
      <select
        name={name}
        className={`outline-none p-2 border-b border-white w-full mb-4 bg-black ${className}`}
      >
        <option value="">Please Select</option>
        {children}
      </select>
    </div>
  );
};

export default Select;
