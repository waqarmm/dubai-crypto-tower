import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Video,
  RegisterButton,
  Paragraph,
  BusinessAdvertisment,
  H2,
  ContactFrom,
  Card,
  AnchorTag,
  H4,
} from "../../Components";
import residentLobby from "../../assets/images/residentLobby.jpg";
import lounge from "../../assets/images/lounge.png";
import cinema from "../../assets/images/cinema.jpg";
import pool from "../../assets/images/pool.jpg";
import sofit from "../../assets/images/sofit.jpg";
import arriveStyle from "../../assets/images/arriveStyle.jpg";
import iconbell from "../../assets/images/ico-bell.svg";
import bell from "../../assets/images/bell.svg";
import wifi from "../../assets/images/wifi.svg";
import parking from "../../assets/images/parking.svg";

const primeLocation = [
  {
    img: residentLobby,
    title: "Residents' Lobby",
  },
  {
    img: lounge,
    title: "Residents' Lounge",
  },
  {
    img: cinema,
    title: "Private Cinema",
  },
  {
    img: pool,
    title: "Exclusive Pool & Spa",
  },
  {
    img: sofit,
    title: "Exclusive Pool & Spa",
  },
  {
    img: arriveStyle,
    title: "Arrive in Style",
  },
];
const benifits = [
  {
    icon: iconbell,
    text: "24-7 concierge",
  },
  {
    icon: bell,
    text: "Bell services",
  },
  {
    icon: wifi,
    text: "WiFi in lounge",
  },
  {
    icon: parking,
    text: "Valet parking",
  },
];
const SOResidence = () => {
  const [videoURL, setVideoURL] = useState(
    "https://www.uptowndubai.ae/application/files/5815/6093/5798/so_hotel.mp4"
  );
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
      <section className="w-full bg-black">
        <div className="bg-header-gradient absolute h-screen w-full"></div>
        <Video videoURL={videoURL} />
      </section>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto mb-16 px-4 xl:px-16">
        <div className="w-full max-w-screen-xl 2xl:container mx-auto">
          <RegisterButton title="register your interest" link="#interested" />
          <div className="pt-12 w-full sm:w-3/4 mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="The first of its kind in the Middle East, enter a new world of fashion and glamour at SO/ Crypto Dubai. Located in the iconic Crypto Tower, a building inspired by the shape and light reflections of a diamond, you can enjoy uninterrupted views of Dubai’s awe-inspiring skyline and Crypto Dubai's Central Plaza below. Here you can experience complete luxury with amenities and service excellence delivered with an audacious and fashionable twist."
            />
          </div>
        </div>
      </section>
      <BusinessAdvertisment
        para="SO/ Crypto Dubai is an artistic vision brought to life. From avant-garde in-room touches to inspiring installations, mixed with interior themes and motifs, the hotel and residences embrace the imagination with stunning effect."
        buttonText="register your interest"
        link="#interested"
        background="bg-SOStyle"
        className="mr-3"
        justifyContent="end"
        alignContent="center"
      >
        <H2 className="italic text-4xl xl:text-heading1 font-semibold text-center pt-8 px-2  xl:leading-10 text-white">
          SO / Styles
        </H2>
      </BusinessAdvertisment>
      <section className="w-full mx-auto py-20">
        <div className="max-w-screen-xl 2xl:container mx-auto w-full  px-4 xl:px-16">
          <H2 className="w-full lg:w-8/12  text-center mx-auto">
            STYLISH
            <span className="italic font-medium xl:ml-4">and </span>
            <span className="sm:text-heading2 xl:text-6xl">EXCITING </span>
            <span className="sm:text-heading2 xl:text-6xl block">
              LIVING AWAITS YOU{" "}
            </span>
          </H2>
          <div className="py-12 w-full sm:w-[70%] mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="Live in one of the most luxurious addresses in Dubai. The upper-most floors of the stunning Crypto Tower are reserved exclusively for SO/ Crypto Dubai residents. A limited collection of 229 private residences will be available in one, two, three bedroom apartments and four-bedroom duplexes configurations all with stunning views."
            />
          </div>
        </div>
        <div className="w-full h-full bg-stylishLiving aspect-video bg-center bg-no-repeat  bg-contain"></div>
      </section>
      <section className="w-full max-w-screen-xl 2xl:container px-4 xl:px-16 mx-auto">
        <H2 className="w-full md:w-10/12 text-center mx-auto text-3xl">
          UNRIVALLED AMENITIES
          <span className="italic font-medium xl:ml-4">at </span>
          <br />
          <span className="italic font-medium xl:ml-4">your </span>
          <span className="sm:text-heading2 xl:text-6xl">FINGER TIPS </span>
        </H2>
        <div className="py-12 w-full sm:w-[70%] mx-auto">
          <Paragraph
            className=" text-center  font-body text-lg"
            para="Live in one of the most luxurious addresses in Dubai. The upper-most floors of the stunning Crypto Tower are reserved exclusively for SO/ Crypto Dubai residents. A limited collection of 229 private residences will be available in one, two, three bedroom apartments and four-bedroom duplexes configurations all with stunning views."
          />
        </div>
        <div className="grid grid-cols-12  md:grid-cols-12 lg:grid-cols-12 py-10 lg:py-12 sm:gap-7 gap-y-4">
          {primeLocation.map((item, i) => (
            <div
              className="w-full  col-span-12 md:col-span-6 lg:col-span-4"
              key={i}
            >
              <Card img={item.img} title={item.title} />
            </div>
          ))}
        </div>
      </section>
      <section className="w-full  bg-lightGrey">
        <div className="max-w-screen-xl 2xl:container mx-auto px-4 xl:px-16">
          <div className="grid grid-cols-12  md:grid-cols-6 py-10 lg:py-20 sm:gap-x-4 lg:gap-x-16 ">
            <div className="w-full  h-screen col-span-12 md:col-span-3 mb-6 sm:mb-0 bg-ownersBenifit bg-right bg-no-repeat  bg-auto"></div>
            <div className="w-full lg:w-11/12 flex flex-col justify-evenly 2xl:justify-center items-start col-span-12 md:col-span-3 mx-auto lg:pl-6">
              <H2 className="flex flex-wrap">OWNERS BENEFITS</H2>
              <H4 className="text-black " title="Top-tier status in Le Club" />
              <div className="py-2 lg:py-0">
                <Paragraph
                  className="pb-4 text-lg"
                  para="SO/ Crypto Dubai residents are welcomed into the exclusive Le Club privileges programme. "
                />
                <Paragraph
                  className="text-lg"
                  para="As an exclusive member, you’ll receive unrivalled services and priority attention at AccorHotels around the world, whether you are at home in SO/ Crypto Dubai, on holiday or travelling for business."
                />
              </div>
              <div className="flex justify-between">
                {benifits.map((items, i) => (
                  <div
                    key={i}
                    className="w-2/12 flex flex-col items-center text-center text-sm leading-4 font-times italic font-bold"
                  >
                    <img src={items.icon} alt={items.icon} className="w-9/12" />
                    <span className="w-full mt-4 text-center">
                      {items.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center my-4 md:my-0">
                <AnchorTag
                  to="#interested"
                  className="text-black border-black bg-transparent px-6 lg:px-4 xl:px-10 hover:text-white hover:bg-black"
                  title="explore more benifits"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFrom />
    </>
  );
};

export default SOResidence;
