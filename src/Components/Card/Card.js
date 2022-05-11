import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt={img} className="w-full" />
      <span className="text-center text-2xl font-times italic font-semibold mt-4">
        {title}
      </span>
    </div>
  );
};

export default Card;
