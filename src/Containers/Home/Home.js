import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Video,
  AnchorTag,
  H2,
  ContactFrom,
  Paragraph,
  RegisterButton,
  BusinessAdvertisment,
} from "../../Components";
import UptownDubai from "../../assets/images/Uptown-Dubai-Aerial-LP.png";

const Home = () => {
  const [videoURL, setVideoURL] = useState(
    "https://www.uptowndubai.ae/application/files/6815/5410/9548/u1920-2MBPS.mp4"
  );
  return (
    <div className="h-100 w-full">
      <section className="w-full bg-black">
        <Video videoURL={videoURL} />
      </section>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto px-4 xl:px-16">
        <RegisterButton />
        <div className="grid grid-cols-12  md:grid-cols-6 py-10 lg:py-20 sm:gap-x-4 lg:gap-x-24">
          <div className="w-full lg:aspect-square col-span-12 md:col-span-3 mb-6 sm:mb-0">
            <img src={UptownDubai} alt="UptownDubai" className="lg:mt-7" />
          </div>
          <div className="w-full lg:w-11/12 flex flex-col justify-around items-start col-span-12 md:col-span-3 mx-auto">
            <H2 className="flex flex-wrap">
              EXPLORE
              <span className="italic font-semibold xl:ml-4">where</span>
              <span className="sm:text-heading2 xl:text-7xl sm:mt-2 sm:mb-4 xl:mt-1 xl:mb-2.5 2xl:my-0">
                ADVENTURE
              </span>
              <span className="sm:text-heading2 xl:text-7xl">LIVES</span>
            </H2>
            <div className="py-4 lg:py-0">
              <Paragraph
                className="pb-4 text-lg"
                para="Welcome to the world of Uptown Dubai. One like no other.
                Inherently creative, exciting and eccentric. An evolving
                development that will continue to tell stories for years to
                come."
              />
              <Paragraph
                className="text-lg"
                para="A 24-hour neighbourhood brimming with world-class dining, unique
                high-end retail outlets, a central entertainment plaza and home
                to some of the world’s most desirable hotels and businesses."
              />
            </div>
            <div className="text-center">
              <AnchorTag
                to="#"
                className="text-black border-black bg-white px-6 lg:px-4 xl:px-16 hover:text-white hover:bg-black"
                title=" register your interest"
              />
            </div>
          </div>
        </div>
      </section>
      <BusinessAdvertisment
        para="The first of its kind in the Middle East, SO/ Uptown Dubai is a
                playful mix of sophistication and the dynamic style of each
                locale. Highly creative and fashion-led, SO/ Uptown Dubai is an
                avant-garde masterpiece with a unique 'Just Say SO' attitude.
                Providing residents and guests with service excellence, yet
                delivered with an audacious and fashionable twist"
        buttonText="register your interest"
        link="/"
        background="bg-uptown"
        justifyContent="end"
      >
        <H2 className="italic text-4xl xl:text-5xl font-semibold text-center pt-8 px-10 tracking-tighter text-white">
          Be the
          <span className="font-medium"> first to </span>
          <span className="font-medium"> say</span>
          <span className="font-semibold"> SO/</span>
        </H2>
      </BusinessAdvertisment>
      <section className="max-w-screen-xl 2xl:container mx-auto px-4 xl:px-16">
        <div className=" flex justify-center flex-col py-6 md:py-10 xl:py-20">
          <H2 className="text-center pb-10">
            INTRODUCING <br />
            UPTOWN <span className="block sm:inline"></span> TOWER
          </H2>
          <Paragraph
            className=" text-center  font-body text-lg"
            para="Take a peek behind the scenes"
          />
          <div className="grid grid-cols-12 py-4 sm:py-8">
            <div className="w-full lg:aspect-video col-span-12  mb-2 sm:mb-0">
              <Video videoURL="https://d1wm4a3wbyqlwf.cloudfront.net/uptown/T2_WEB.mp4" />
            </div>
          </div>
        </div>
      </section>
      <ContactFrom />
      <section className="h-screen max-w-screen-xl 2xl:container  mx-auto px-4 xl:px-16  my-16">
        <div className=" h-full flex justify-start flex-col">
          <H2 className="text-center xl:text-5xl">LATEST NEWS</H2>
          <Link to="" className="mt-16 font-body h-full ">
            <div className="grid grid-cols-12  md:grid-cols-6 sm:gap-x-4 lg:gap-x-10 h-full">
              <div className="w-full h-full    col-span-12 md:col-span-3 lg:col-span-4  mb-6 sm:mb-0">
                <div className="w-full h-full lg:h-3/4 bg-uptownConstruction  bg-center bg-no-repeat  bg-cover flex justify-end flex-col  hover:underline">
                  <div className="h-16 bg-black opacity-70 text-center p-2">
                    <Link to="" className="w-full text-white text-lg font-bold">
                      Uptown Tower by DMCC in Dubai Surpasses 20% Completion
                      Milestone
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between w-full py-4 pb-4 sm:pb-0 border-b sm:border-b-0 border-black">
                  <div className="uppercase border-b-2 border-black text-base  font-bold">
                    read article
                  </div>
                  <span className=" font-bold opacity-80">16.02.2020</span>
                </div>
              </div>
              <div className="w-full h-auto   mt-16 sm:mt-0  flex flex-col justify-start items-start gap-y-4 col-span-12 md:col-span-3 lg:col-span-2">
                <div className="h-full lg:h-2/5 flex flex-col justify-between sm:border-l-2 border-black pl-0 sm:pl-8">
                  <Link
                    to="/"
                    className="capitalize text-lg  font-bold  opacity-90 hover:underline"
                  >
                    DMCC awards Uptown Dubai Super Tall Tower Construction
                    Contract to Belhasa Six Construct
                  </Link>
                  <div className="flex justify-between w-full mt-4 lg:mt-0  pb-4 sm:pb-0 border-b sm:border-b-0 border-black">
                    <div className="uppercase border-b-2 border-black text-base  font-bold">
                      read article
                    </div>
                    <span className=" font-bold opacity-80">13.01.2019</span>
                  </div>
                </div>
                <div className="h-4/5 lg:h-2/5 flex flex-col justify-between  sm:border-l-2 border-black pl-0 sm:pl-8">
                  <Link
                    to="/"
                    className="capitalize text-lg  font-bold  opacity-90 hover:underline"
                  >
                    DMCC's Uptown Dubai Proceeds at Pace; Foundation Works
                    Completed for First Super Tall Tower in Uptown Dubai
                    District
                  </Link>
                  <div className="flex justify-between w-full mt-4 lg:mt-0 pb-4 sm:pb-0 border-b sm:border-b-0 border-black">
                    <div className="uppercase border-b-2 border-black  text-base font-bold">
                      read article
                    </div>
                    <span className=" font-bold opacity-80">13.01.2019</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="text-center mt-20 lg:mt-10">
            <AnchorTag
              to="#"
              className="border-black text-black px-6 lg:px-4  xl:px-16 hover:text-black hover:bg-white"
              title="view more"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
