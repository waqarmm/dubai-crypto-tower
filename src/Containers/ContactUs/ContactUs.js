import React from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  AnchorTag,
  H2,
  ContactFrom,
  Paragraph,
  RegisterButton,
  SpaceY,
} from "../../Components";

const ContactUs = () => {
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
      <Header bgImg="bg-contactUs">
        <div className="bg-header-gradient absolute h-screen w-full"></div>
        <H2 className="uppercase text-white w-5/12 text-center opacity-95  ">
          contact us
        </H2>
      </Header>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto px-4 xl:px-16">
        <RegisterButton title="register your interest" link="#interested" />
        <div className="pt-12 w-full sm:w-8/12 mx-auto">
          <Paragraph
            className=" text-center  font-body text-lg"
            para="If you’d like to know more about Crypto Dubai, our team of experts are ready to answer your enquires. Call using the number below or visit our sales centre."
          />
        </div>
        <div className="grid grid-cols-12  md:grid-cols-6 py-10 lg:py-12 sm:gap-x-4 lg:gap-x-24">
          <div className="w-full aspect-square col-span-12 md:col-span-3 mb-6 sm:mb-0 bg-bitmap bg-center bg-no-repeat  bg-contain"></div>
          <div className="w-full lg:w-10/12 flex flex-col justify-evenly items-start col-span-12 md:col-span-3 mx-auto">
            <H2 className="flex flex-col">
              SALES
              <span className="sm:text-text-3xl xl:text-6xl leading-7 lg:mt-2 2xl:my-0 block">
                CENTRE
              </span>
            </H2>
            <div className="py-2 lg:py-0">
              <Paragraph
                className="pb-2 font-medium font-body text-lg tracking-wide"
                para="Almas Tower, Jumeirah Lake Towers PO Box 48800, Dubai, United Arab Emirates"
              />
              <div className="opacity-90 mb-4">
                <h4 className=" md:font-semibold font-times text-3xl italic">
                  Local
                </h4>
                <p className="font-body font-semibold text-base">
                  {" "}
                  600 54 2622
                </p>
              </div>
              <div className="opacity-90">
                <h4 className=" md:font-semibold font-times text-3xl italic">
                  International
                </h4>
                <p className="font-body font-semibold text-base">
                  +971 (0) 4424 9600
                </p>
              </div>
            </div>
            <div className="text-center">
              <AnchorTag
                to="#"
                className="text-black border-black bg-white px-6 lg:px-4 xl:px-16 hover:text-white hover:bg-black"
                title="view in maps"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactFrom />
      <SpaceY />
    </>
  );
};

export default ContactUs;
