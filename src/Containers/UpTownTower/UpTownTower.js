import React from "react";
import {
  Header,
  RegisterButton,
  Paragraph,
  BusinessAdvertisment,
  H2,
  SpaceY,
  ContactFrom,
} from "../../Components";
const UpTownTower = () => {
  return (
    <>
      <Header bgImg="bg-uptwonTower">
        <H2 className="text-xl md:text-heading1 font-semibold text-center w-3/4 lg:w-2/4 xl:w-5/12 2xl:w-1/4 px-2 leading-4 md:leading-lhxl xl:leading-lh2xl text-white uppercase">
          welcome <span className="italic lowercase">to</span> uptown tower
        </H2>
      </Header>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto mb-10 px-4 xl:px-16">
        <div className="w-full max-w-screen-xl 2xl:container mx-auto">
          <RegisterButton />
          <div className="pt-12 w-full sm:w-[80%] mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="The first tower to be released in the premium Uptown Dubai district, Uptown Tower is designed by world-renowned architects AS+GG, and is set to transform the Dubai skyline. "
            />
          </div>
          <div className="py-6 w-full sm:w-[80%] mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="An architectural marvel rising for 340 meters, providing stunning uninterrupted views and housing a 188-key 5-star luxury hotel - SO/ Uptown Dubai - and 229 signature SO/ branded residences, 46,000 SQM GFA of Grade A office space, as well as amazing amenities like opulent restaurants, exclusive retail, spas and many other state-of-the-art commercial and residential features. "
            />
          </div>
        </div>
      </section>
      <BusinessAdvertisment
        para="Set to be home to the world’s most powerful global brands, specialist commodities and innovative start-ups, Uptown Tower provides premium commercial spaces and fully-serviced offices to the highest specifications."
        buttonText="register your interest"
        link="/"
        background="bg-business"
        className="mr-3"
        justifyContent="end"
      >
        <H2 className="italic text-4xl xl:text-heading1 font-medium text-center pt-8 px-2  xl:leading-10 text-white">
          the
          <span className="font-semibold not-italic uppercase">
            {" "}
            Perfect Address{" "}
          </span>
          <span className="font-medium"> For </span>
          <span className="font-medium"> Your </span>
          <span className="font-semibold not-italic	uppercase">Business </span>
        </H2>
      </BusinessAdvertisment>
      <SpaceY />
      <BusinessAdvertisment
        para="Fashion-led SO/ Sofitel is a high-end boutique hotel and collection of branded residences. Each SO/ development is entirely unique and inspired by local influences."
        buttonText="FIND OUT MORE"
        link="/"
        background="bg-dubaiResidence"
        className="mr-3"
        justifyContent="start"
      >
        <H2 className="text-4xl xl:text-heading1 font-semibold text-center pt-8 px-2  xl:leading-10 text-white uppercase">
          SO/ Uptown Dubai Residences
        </H2>
      </BusinessAdvertisment>
      <SpaceY />
      <BusinessAdvertisment
        para="Fashion-led SO/ Sofitel is a high-end boutique hotel and collection of branded residences. Each SO/ development is entirely unique and inspired by local influences."
        buttonText="comming soon"
        link="/"
        background="bg-dubaiHotel"
        className="mr-3"
        justifyContent="end"
      >
        <H2 className="text-4xl xl:text-heading1 font-semibold text-center pt-8 px-2  xl:leading-10 text-white uppercase">
          SO/ Uptown Dubai Hotel
        </H2>
      </BusinessAdvertisment>
      <SpaceY />
      <ContactFrom />
      <SpaceY />
    </>
  );
};

export default UpTownTower;
