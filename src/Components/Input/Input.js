import React from "react";

const Input = ({ placeholder, className, name, value }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={`outline-none p-2 border-b text-white border-white w-full mb-4 bg-transparent ${className}`}
      />
    </div>
  );
};

export default Input;
