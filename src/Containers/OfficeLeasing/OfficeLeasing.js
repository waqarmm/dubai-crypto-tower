import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  H2,
  Header,
  RegisterButton,
  Paragraph,
  AnchorTag,
  Checkbox,
  Input,
  Select,
  SpaceY,
} from "../../Components";

const OfficeLeasing = () => {
  const [checked, setChecked] = useState(false);
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

  const ToggleChange = (e) => {
    const target = e.target.name;
    let checked = target.checked;
    setChecked(checked);
  };

  return (
    <>
      <Header bgImg="bg-officeLeasing">
        <div className="bg-header-gradient absolute h-screen w-full"></div>
        <div className="bg-header-gradient absolute h-screen w-full"></div>
        <H2 className="text-xl md:text-heading1 font-semibold text-center w-11/12 lg:w-3/4  px-2 leading-4 md:leading-lhxl xl:leading-lh2xl text-white uppercase">
          Crypto tower offices <br />
          discover
          <span className="italic lowercase font-medium"> new</span> heights
        </H2>
      </Header>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto mb-16 px-4 xl:px-16">
        <div className="w-full max-w-screen-xl 2xl:container mx-auto">
          <RegisterButton title="fill out form" link="#interested" />
        </div>
      </section>
      <section className="w-full  px-4 xl:px-16 bg-darkGrey">
        <div className="max-w-screen-xl 2xl:container  mx-auto">
          <div className="grid grid-cols-12  md:grid-cols-6 grid-rows-2 py-10 lg:py-12 sm:gap-x-4 lg:gap-x-10 gap-y-4 ">
            <div className="w-full lg:w-10/12 row-span-2  flex flex-col justify-center   col-span-12 md:col-span-3 mx-auto">
              <H2 className="flex flex-col  uppercase  font-semibold font-times   py-4">
                EXPERIENCE <br />
                THE WONDER
              </H2>
              <Paragraph
                className="py-4 font-medium font-body text-lg tracking-wide"
                para="Crypto Tower forms the impressive centrepiece of Crypto Dubai, the latest and most illustrious project of DMCC (Dubai Multi Commodities Centre), the award-winning and globally acclaimed free zone."
              />
              <Paragraph
                className="py-4 font-medium font-body text-lg tracking-wide"
                para="Drawing on its renowned strengths, DMCC has raised the bar by delivering a signature development that is perfectly positioned in Dubai to offer the ultimate location and lifestyle experience. This urban masterpiece is the undisputed destination for pioneering businesses, exclusive retail, luxury living and the finest in F&B, culture, and entertainment."
              />
            </div>
            <div className="w-full  h-[70vh] col-span-12 md:col-span-3  bg-officeLeasing1  bg-no-repeat bg-bottom  bg-cover"></div>
            <div className="w-full  h-[70vh] col-span-12 md:col-span-3  bg-officeLeasing2 bg-bottom bg-no-repeat  bg-cover"></div>
          </div>
        </div>
      </section>
      <section className="w-full  mx-auto max-w-screen-xl 2xl:container py-8 px-4 xl:px-16">
        <div className="grid grid-cols-12  md:grid-cols-6  py-10 lg:py-12 sm:gap-x-4 lg:gap-x-10 gap-y-4 ">
          <div className="w-full  col-span-12 md:col-span-3  bg-officeLeasingTower  bg-no-repeat bg-top  bg-cover 2xl:bg-contain"></div>
          <div className="w-full lg:w-10/12  flex flex-col justify-center  col-span-12 md:col-span-3 mx-auto">
            <H2 className="flex flex-col  uppercase  font-bold font-times  py-4">
              DESIGNED <br />
              TO IMPRESS, BUILT TO PERFORM
            </H2>
            <Paragraph
              className="py-4 font-medium font-body text-lg tracking-wide"
              para="Designed by the globally acclaimed Chicago-based architects Adrian Smith + Gordon Gill Architecture, Crypto Tower is set to become a city landmark that offers high-performance and energy-efficient architecture. Rising 340m above the ground, this iconic tower features 22 floors of premium Grade A commercial spaces complemented by the elegant five-star SO/Crypto Hotel and exquisite SO/Crypto Residences."
            />
            <Paragraph
              className="py-4 font-medium font-body text-lg tracking-wide"
              para="The office component comprises 22 floors with a highly efficient floor plate ranging from 14,096 - 22,113 sq. ft. The building offers excellent vertical transportation with 6 dedicated lifts and 2 lobby entrances for the office component only. Starting from floors 9 till 30, each office level offers a stunning view of the coast and city."
            />
            <Paragraph
              className="py-4 font-medium font-body text-lg tracking-wide"
              para="Construction is in full swing and the tower structure has reached its top point with completion scheduled for Q3 2022. Book your space now and take advantage of early access for fit-out."
            />
            <Paragraph
              className="pb-6 pt-2 font-medium font-body text-lg tracking-wide"
              para="Register your interest by clicking the button below."
            />
            <div className="text-left">
              <AnchorTag
                to="#interested"
                className="text-black border-black bg-transparent px-6 lg:px-4 xl:px-10 hover:text-white hover:bg-black"
                title="send an enquiry"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  px-4 xl:px-16 bg-darkGrey">
        <div className="max-w-screen-xl 2xl:container  mx-auto">
          <div className="grid grid-cols-12  md:grid-cols-6 grid-rows-2 py-10 sm:gap-x-4 lg:gap-x-10 gap-y-4 ">
            <div className="w-full lg:w-10/12 row-span-2  flex flex-col justify-center   col-span-12 md:col-span-3 mx-auto">
              <H2 className="flex flex-col  uppercase  font-bold font-times   py-4">
                THE OFFICE <br />
                COMPONENT
              </H2>
              <Paragraph
                className="py-4 font-medium font-body text-lg tracking-wide"
                para="The office component comprises of 22 floors with a highly efficient floor plate ranging from 14,096 - 22,113 sq. ft. The building offers excellent vertical transportation with 10 dedicated lifts and 2 lobby entrances for the office component only."
              />
              <Paragraph
                className="py-1 font-medium font-body text-lg tracking-wide"
                para="To learn more about our office layouts and sizes or to download the flyer, please send us an enquiry."
              />
              <div className="text-left py-8">
                <AnchorTag
                  to="#interested"
                  className="text-black border-black bg-transparent px-6 lg:px-4 xl:px-10 hover:text-white hover:bg-black"
                  title="send an enquiry"
                />
              </div>
            </div>
            <div className="w-full  h-[70vh] col-span-12 md:col-span-3  bg-officeComponents1  bg-no-repeat bg-bottom  bg-cover"></div>
            <div className="w-full  h-[70vh] col-span-12 md:col-span-3  bg-officeComponents2 bg-bottom bg-no-repeat  bg-cover"></div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-screen-xl 2xl:container mx-auto px-4 py-16 xl:px-16">
        <H2 className="text-xl md:text-heading1 font-semibold text-center   px-2 leading-4 md:leading-lhxl xl:leading-lh2xl  uppercase">
          POSITIONED FOR SUCCESS
        </H2>
        <div className="w-full h-full bg-mapResize aspect-video bg-center bg-no-repeat  bg-contain"></div>
      </section>
      <section
        id="interested"
        className="h-full overflow-hidden relative w-full  bg-black z-10"
      >
        <div className="mx-auto h-full z-10 w-full flex flex-col items-center py-8 lg:py-20 px-4">
          <H2 className="text-center text-white my-2 text-3xl sm:text-4xl leading-lhlg xl:text-5xl">
            SEND AN ENQUIRY
          </H2>
          <div className="pt-12 w-full sm:w-8/12 mx-auto">
            <Paragraph
              className=" text-center text-white  font-body text-lg"
              para="To register your interest or receive a callback, please full out the form and a representative will contact you."
            />
          </div>
          <div className="max-w-screen-xl 2xl:container grid grid-cols-12  md:grid-cols-12 py-4 md:py-8 sm:gap-x-4 lg:gap-x-8 w-full">
            <div className="w-full col-span-12 md:col-span-12 mb-6  sm:mb-0">
              <form className="flex flex-wrap justify-between mx-auto  w-4/5  lg:w-4/6">
                <div className="w-full md:w-2/4 px-2">
                  <Input name="FirstName" placeholder="First Name*" />
                </div>
                <div className="w-full md:w-2/4 px-1">
                  <Input name="LastName" placeholder="Last Name*" />
                </div>
                <div className="w-full md:w-2/4 px-1">
                  <Input name="Email" placeholder="Email*" />
                </div>
                <div className="w-full md:w-2/4 px-1">
                  <Input name="Email" placeholder="Phone Number*" />
                </div>
                <div className="w-full  md:w-[33%] px-1">
                  <Select
                    name="DMCC"
                    label="Are you a DMCC member company?*"
                    className="text-white"
                  >
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </Select>
                </div>
                <div className="w-full  md:w-[30%] px-1 flex flex-col justify-evenly xl:justify-start">
                  <label for="cars" className="text-white text-xs">
                    {" "}
                    Company Name*
                  </label>
                  <Input
                    name="compnayName"
                    placeholder="Company Name*"
                    className=" mb-0"
                  />
                </div>
                <div className="w-full  md:w-[36%] px-1 pt-2 sm:pt-0">
                  <Select
                    name="intrested"
                    label="What type of office are you interested in?*"
                    className="text-white"
                  >
                    <option value="yes">Full floor office</option>
                    <option value="no">
                      Individual office on a multi-tenant floor
                    </option>
                  </Select>
                </div>
              </form>
            </div>
          </div>
          <div className="py-1 md:py-4 lg:py-0 max-w-screen-xl 2xl:container w-4/5 lg:w-4/6 2xl:w-5/12 sm:mb-6 px-1 xl:px-4">
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
              label="Consent to receive emails about Crypto Tower"
              className="text-sm pt-2  tracking-wide"
              checked={checked}
              value={checked}
              onChange={ToggleChange}
            />
            <Paragraph
              className="py-2 text-sm  text-white tracking-wide"
              para="You may unsubscribe from these communications at any time. For more
            information on how to unsubscribe, our privacy practices, and how we
            are committed to protecting and respecting your privacy, please
            review our Privacy Policy."
            />
            <Paragraph
              className="text-sm text-white tracking-wide"
              para=" By clicking submit below, you consent to allow DMCC to store and
            process the personal information submitted above to provide you the
            content requested."
            />
          </div>
          <div className="text-center mt-2 sm:mt-6">
            <AnchorTag
              to="#"
              className="border-white text-white px-6 lg:px-2  xl:px-14 hover:text-black hover:bg-white"
              title="Submit"
            />
          </div>
        </div>
      </section>
      <SpaceY />
    </>
  );
};

export default OfficeLeasing;
