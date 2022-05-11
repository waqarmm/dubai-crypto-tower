import React from "react";
import Video from "../Video/Video";
import AnchorTag from "../AnchorTag/AnchorTag";
import H2 from "../H2/H2";
import Paragraph from "../Paragraph/Paragraph";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";

const ContactFrom = () => {
  return (
    <section className="h-full overflow-hidden relative w-full  bg-galaxy z-10">
      <div className="w-full -z-10 relative   top-0 mx-auto mb-2 sm:mb-0 bg-opacity-60">
        <Video
          videoURL="https://d1wm4a3wbyqlwf.cloudfront.net/uptown/interested-vid.mp4"
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        />
      </div>
      <div className="mx-auto h-full z-10 w-full flex flex-col items-center py-8 lg:py-20">
        <H2 className="text-center text-white my-2 text-3xl sm:text-4xl leading-lhlg xl:text-5xl">
          REGISTER
          <span className="italic font-semibold xl:ml-4">your</span>
          <span className="text-4xl xl:text-6xl block ">INTEREST</span>
        </H2>
        <div className="max-w-screen-xl 2xl:container grid grid-cols-12  md:grid-cols-6 py-8 sm:gap-x-4 lg:gap-x-8 w-full">
          <div className="w-full flex items-start md:items-end  col-span-12 md:col-span-3 mb-6 sm:mb-0">
            <form className="flex flex-col mx-auto md:ml-auto md:mx-0  w-4/5  lg:w-3/5">
              <Input name="FirstName" value="" placeholder="First Name" />
              <Input name="FirstName" value="" placeholder="First Name" />
              <Input name="Email" value="" placeholder="Email" />
            </form>
          </div>
          <div className="w-full lg:w-11/12  col-span-12 md:col-span-3 mx-auto border-l border-white pl-10">
            <form className="flex flex-col items-start text-white">
              <span className="text-lg ml-4">I'm interested in...*</span>
              <Checkbox
                name="gradeA"
                value="Grade A Office Space"
                label="Grade A Office Space"
                checked={true}
              />
              <Checkbox
                name="gradeA"
                value="Branded Residences"
                label="Branded Residences"
                checked={false}
              />
              <Checkbox
                name="investing"
                value="Investing"
                label="Investing"
                checked={true}
              />
              <Checkbox
                name="visitiing"
                value="Visiting the Sales Centre"
                label="Visiting the Sales Centre"
                checked={false}
              />
            </form>
          </div>
        </div>
        <div className="py-4 lg:py-0 max-w-screen-xl 2xl:container w-4/5 lg:w-7/12 2xl:w-5/12 sm:mb-6">
          <Paragraph
            className="pb-2 text-sm text-white tracking-wide"
            para="DMCC is committed to protecting and respecting your privacy, and
            we’ll only use your personal information to administer your account
            and to provide the products and services you requested from us. From
            time to time, we would like to contact you through email or by phone
            about our products and services, as well as other content that may
            be of interest to you. If you consent to us contacting you for this
            purpose, please tick below to say how you would like us to contact
            you:"
          />
          <Checkbox
            name="agree"
            value="agree"
            label="I agree to receive other information from DMCC.*"
            className="text-sm pt-2  tracking-wide"
            checked={true}
          />
          <Paragraph
            className="py-2 text-sm  text-white tracking-wide"
            para="You may unsubscribe from these communications at any time. For more
            information on how to unsubscribe, our privacy practices, and how we
            are committed to protecting and respecting your privacy, please
            review our Privacy Policy."
          />
          <Paragraph
            className="text-base text-white tracking-wide"
            para=" By clicking submit below, you consent to allow DMCC to store and
            process the personal information submitted above to provide you the
            content requested."
          />
        </div>
        <div className="text-center mt-2 sm:mt-6">
          <AnchorTag
            to="#"
            className="border-white text-white px-6 lg:px-2  xl:px-14 hover:text-black hover:bg-white"
            title="sign me up"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;