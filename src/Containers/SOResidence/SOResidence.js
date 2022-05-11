import React, { useState } from "react";
import {
  Video,
  RegisterButton,
  Paragraph,
  BusinessAdvertisment,
  H2,
} from "../../Components";

const SOResidence = () => {
  const [videoURL, setVideoURL] = useState(
    "https://www.uptowndubai.ae/application/files/5815/6093/5798/so_hotel.mp4"
  );
  return (
    <>
      <section className="w-full bg-black">
        <Video videoURL={videoURL} />
      </section>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto mb-10 px-4 xl:px-16">
        <div className="w-full max-w-screen-xl 2xl:container mx-auto">
          <RegisterButton />
          <div className="pt-12 w-full sm:w-3/4 mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="The first of its kind in the Middle East, enter a new world of fashion and glamour at SO/ Uptown Dubai. Located in the iconic Uptown Tower, a building inspired by the shape and light reflections of a diamond, you can enjoy uninterrupted views of Dubai’s awe-inspiring skyline and Uptown Dubai's Central Plaza below. Here you can experience complete luxury with amenities and service excellence delivered with an audacious and fashionable twist."
            />
          </div>
        </div>
      </section>
      <BusinessAdvertisment
        para="SO/ Uptown Dubai is an artistic vision brought to life. From avant-garde in-room touches to inspiring installations, mixed with interior themes and motifs, the hotel and residences embrace the imagination with stunning effect."
        buttonText="register your interest"
        link="/"
        background="bg-SOStyle"
        className="mr-3"
        justifyContent="end"
      >
        <H2 className="italic text-4xl xl:text-heading1 font-semibold text-center pt-8 px-2  xl:leading-10 text-white">
          SO / Styles
        </H2>
      </BusinessAdvertisment>
    </>
  );
};

export default SOResidence;
