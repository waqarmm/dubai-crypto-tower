import React from "react";
import AnchorTag from "../AnchorTag/AnchorTag";

const RegisterButton = ({ title }) => {
  return (
    <div className="mx-auto text-center -translate-y-3">
      <AnchorTag
        to="#"
        className="text-black border-black bg-white px-10 md:px-12 hover:text-white hover:bg-black"
        title={title}
      />
    </div>
  );
};

export default RegisterButton;
