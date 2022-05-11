import React from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  RegisterButton,
  H2,
  ContactFrom,
  Paragraph,
  Card,
  SpaceY,
} from "../../Components";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";
import Img5 from "../../assets/images/img5.jpg";
import Img6 from "../../assets/images/img6.jpg";

const primeLocation = [
  {
    img: Img1,
    title: "5 minutes to the beach",
  },
  {
    img: Img2,
    title: "10 minutes to 19 schools ",
  },
  {
    img: Img3,
    title: "10 minutes from 3 shopping malls",
  },
  {
    img: Img4,
    title: " 10 minutes to Montgomerie and Emirates Golf Clubs",
  },
  {
    img: Img5,
    title: "20 minutes to DWC Airport ",
  },
  {
    img: Img6,
    title: "Easy access to Sheikh Zayed Road and Dubai Metro ",
  },
];
const Locations = () => {
  const { pathname, hash, key } = useLocation();

  React.useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return (
    <>
      <Header bgImg="bg-locations">
        <div className="bg-header-gradient absolute h-screen w-full"></div>
        <H2 className="text-xl md:text-heading1 font-semibold text-center w-3/4 lg:w-2/4 xl:w-5/12 2xl:w-1/4 px-2 leading-4 md:leading-lhxl xl:leading-lh2xl text-white uppercase opacity-95  ">
          the new hub <br />
          <span className="italic lowercase font-medium"> of</span> Dubai
        </H2>
      </Header>
      <section className="w-full">
        <div className="w-full max-w-screen-xl 2xl:container mx-auto px-4 xl:px-16">
          <RegisterButton title="register your interest" link="#interested" />
          <div className="pt-12 w-full sm:w-[72%] mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="Crypto Dubai’s location is ideally suited to provide easy access to all the city has to offer. Direct links to Dubai Metro and Sheikh Zayed road connect Crypto Dubai to two international airports, with many major attractions and beachfronts only minutes away."
            />
          </div>
        </div>
        <div className="w-full h-full bg-mapResize aspect-video bg-center bg-no-repeat  bg-contain"></div>
      </section>
      <section className="w-full max-w-screen-xl 2xl:container mx-auto py-16 px-4 xl:px-16">
        <H2 className="w-full lg:w-8/12 text-center mx-auto">
          PRIME LOCATION
          <span className="italic font-medium  xl:ml-4">for </span>
          <br />
          <span className="sm:text-heading2 xl:text-6xl">BUSINESS </span>
          <span className="italic font-medium ">and </span>
          <span className="sm:text-heading2 xl:text-6xl">LEISURE </span>
        </H2>
        <div className="grid grid-cols-12  md:grid-cols-12 lg:grid-cols-12 py-10 lg:py-12 sm:gap-7 gap-y-4">
          {primeLocation.map((item, i) => (
            <div
              className="w-full  col-span-12 md:col-span-6 lg:md:col-span-4 "
              key={i}
            >
              <Card img={item.img} title={item.title} />
            </div>
          ))}
        </div>
      </section>
      <ContactFrom />
      <SpaceY />
    </>
  );
};

export default Locations;
