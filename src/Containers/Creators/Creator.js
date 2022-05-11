import React from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  ContactFrom,
  Paragraph,
  AnchorTag,
  RegisterButton,
  H2,
  H4,
  SpaceY,
} from "../../Components";
import Architect from "../../assets/images/architect.png";
import AccorHotel from "../../assets/images/accorHotel.png";

const Creator = () => {
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
      <Header bgImg="bg-creators">
        <div className="bg-header-gradient absolute h-screen w-full"></div>
        <H2 className="text-xl md:text-heading1 font-semibold text-center w-3/4 lg:w-2/4 xl:w-5/12 2xl:w-1/4 px-2 leading-4 md:leading-lhxl xl:leading-lh2xl text-white uppercase opacity-95  ">
          Creating{" "}
          <span className="italic lowercase font-medium">
            a new <br />
            icon of
          </span>{" "}
          Dubai
        </H2>
      </Header>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto px-4 xl:px-16">
        <div className="w-full max-w-screen-xl 2xl:container  ">
          <RegisterButton title="register your interest" link="#interested" />
          <div className="pt-12 w-full sm:w-[80%] mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="With its two iconic towers, Crypto Dubai will set a new standard in luxury and style, adding its unique signature to the impressive skyline of Dubai. To bring this ambitious vision to life, we gathered a global team of the world’s finest developers, architects and designers."
            />
          </div>
        </div>
        <div className="grid grid-cols-12  md:grid-cols-6 py-10 lg:py-12 sm:gap-x-4 lg:gap-x-10">
          <div className="w-full aspect-square col-span-12 md:col-span-3 mb-6 sm:mb-0 bg-almasTower bg-center bg-no-repeat  bg-contain"></div>
          <div className="w-full lg:w-10/12 flex flex-col justify-center items-start col-span-12 md:col-span-3 mx-auto">
            <H4 title="developer" />
            <H2 className="flex flex-col  uppercase tracking-[-0.099em] font-extrabold font-body text-navyBlue py-4">
              dmcc
            </H2>
            <Paragraph
              className="py-4 font-medium font-body text-lg tracking-wide"
              para="DMCC, the number one global free zone of the year for the past five years and master planners of the JLT district, are the driving force behind the iconic Crypto Dubai development, transforming the way people can live, work and be entertained."
            />
            <div className="text-center pt-4">
              <AnchorTag
                to="#"
                className="text-black border-black bg-white px-6 lg:px-4 xl:px-12 hover:text-white hover:bg-black"
                title="play video"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightGrey w-full mx-auto">
        <div className="w-full max-w-screen-xl 2xl:container  mx-auto px-4 xl:px-16">
          <div className="grid grid-cols-12  md:grid-cols-6 py-10 lg:py-12 sm:gap-x-4 ">
            <div className="w-full lg:w-10/12 flex flex-col justify-center items-start col-span-12 md:col-span-3 mx-auto">
              <H4 title="Architects" className="font-bold" />
              <img src={Architect} alt={Architect} className="py-6" />
              <Paragraph
                className="py-4 font-medium font-body text-lg tracking-wide"
                para="Founded in 2008, Adrian Smith and Gordon Gill (AS+GG), the visionaries behind some of the world’s tallest buildings including the Burj Khalifa and Jeddah Tower, are the perfect architects to create Crypto Dubai’s iconic super towers."
              />
              <div className="text-center pt-4">
                <AnchorTag
                  to="#"
                  className="text-black border-black bg-white px-6 lg:px-4 xl:px-12 hover:text-white hover:bg-black"
                  title="play video"
                />
              </div>
            </div>
            <div className="w-full aspect-square col-span-12 md:col-span-3 mb-6 sm:mb-0 bg-architects bg-center bg-no-repeat  bg-contain"></div>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto">
        <div className="w-full max-w-screen-xl 2xl:container  mx-auto px-4 xl:px-16">
          <div className="grid grid-cols-12  md:grid-cols-6 py-10 lg:py-12 sm:gap-x-4 lg:gap-x-16 ">
            <div className="w-full aspect-square col-span-12 md:col-span-3 mb-6 sm:mb-0 bg-partner bg-center bg-no-repeat  bg-contain"></div>
            <div className="w-full lg:w-10/12 flex flex-col justify-center items-start col-span-12 md:col-span-3 mx-auto">
              <H4 title="Partners" className="font-bold" />
              <img src={AccorHotel} alt={AccorHotel} className="py-6" />
              <Paragraph
                className="py-4 font-medium font-body text-lg tracking-wide"
                para="AccorHotels are the masters of luxurious hospitality, firmly established in 1967. With 4,300 hotels in 100 countries, hotels are in their name and DNA."
              />
              <div className="text-center pt-4">
                <AnchorTag
                  to="#"
                  className="text-black border-black bg-white px-6 lg:px-4 xl:px-12 hover:text-white hover:bg-black"
                  title="play video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFrom />
      <SpaceY />
    </>
  );
};

export default Creator;
