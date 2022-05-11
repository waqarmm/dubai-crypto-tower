import React from "react";
import {
  Video,
  RegisterButton,
  Paragraph,
  BusinessAdvertisment,
  H2,
  Header,
} from "../../Components";

const OfficeLeasing = () => {
  return (
    <Header bgImg="bg-officeLeasing">
      <H2 className="text-xl md:text-heading1 font-semibold text-center w-3/4 lg:w-2/4 xl:w-5/12 2xl:w-1/4 px-2 leading-4 md:leading-lhxl xl:leading-lh2xl text-white uppercase">
        Creating{" "}
        <span className="italic lowercase font-medium">a new icon of</span>{" "}
        Dubai
      </H2>
    </Header>
  );
};

export default OfficeLeasing;
