import React from "react";

const Checkbox = ({ className, name, value, label, checked }) => {
  return (
    <div className="my-1">
      <input
        type="checkbox"
        name={name}
        value={value}
        className={`p-3 form-check-input appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-white checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ${className}`}
        checked={checked && checked}
      />
      <label
        htmlFor={name}
        className={`form-check-label inline-block text-white text-lg pt-1 font-body ${className}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
