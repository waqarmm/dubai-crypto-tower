import React from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  RegisterButton,
  Paragraph,
  BusinessAdvertisment,
  H2,
  SpaceY,
  ContactFrom,
} from "../../Components";
const CryptoTower = () => {
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
      <Header bgImg="bg-uptwonTower">
        <div className="bg-header-gradient absolute h-screen w-full"></div>
        <H2 className="text-xl md:text-heading1 font-semibold text-center w-3/4 lg:w-2/4 xl:w-5/12 2xl:w-1/4 px-2 leading-4 md:leading-lhxl xl:leading-lh2xl text-white uppercase opacity-95  ">
          welcome <span className="italic lowercase">to</span>
          <br /> Crypto tower
        </H2>
      </Header>
      <section className="w-full max-w-screen-xl 2xl:container  mx-auto mb-10 px-4 xl:px-16">
        <div className="w-full max-w-screen-xl 2xl:container mx-auto">
          <RegisterButton title="register your interest" link="#interested" />
          <div className="pt-12 w-full sm:w-[80%] mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="The first tower to be released in the premium Crypto Dubai district, Crypto Tower is designed by world-renowned architects AS+GG, and is set to transform the Dubai skyline. "
            />
          </div>
          <div className="py-6 w-full sm:w-[80%] mx-auto">
            <Paragraph
              className=" text-center  font-body text-lg"
              para="An architectural marvel rising for 340 meters, providing stunning uninterrupted views and housing a 188-key 5-star luxury hotel - SO/ Crypto Dubai - and 229 signature SO/ branded residences, 46,000 SQM GFA of Grade A office space, as well as amazing amenities like opulent restaurants, exclusive retail, spas and many other state-of-the-art commercial and residential features. "
            />
          </div>
        </div>
      </section>
      <BusinessAdvertisment
        para="Set to be home to the world’s most powerful global brands, specialist commodities and innovative start-ups, Crypto Tower provides premium commercial spaces and fully-serviced offices to the highest specifications."
        buttonText="register your interest"
        link="#interested"
        background="bg-business"
        className="mr-3"
        justifyContent="end"
        alignContent="evenly"
      >
        <H2 className="italic text-4xl xl:text-heading1 font-medium text-center pt-8 px-2 md:leading-lhlg xl:leading-lhxl text-white">
          the
          <span className="font-semibold not-italic uppercase">
            {" "}
            Perfect Address{" "}
          </span>
          <span className="font-medium"> for </span>
          <span className="font-medium"> your </span>
          <span className="font-semibold not-italic	uppercase">Business </span>
        </H2>
      </BusinessAdvertisment>
      <SpaceY />
      <BusinessAdvertisment
        para="Fashion-led SO/ Sofitel is a high-end boutique hotel and collection of branded residences. Each SO/ development is entirely unique and inspired by local influences."
        buttonText="FIND OUT MORE"
        link="#interested"
        background="bg-dubaiResidence"
        className="mr-3"
        justifyContent="start"
        alignContent="evenly"
      >
        <H2 className="text-4xl xl:text-heading1 font-semibold text-center pt-8 px-2  md:leading-lhlg xl:leading-lhxl text-white uppercase">
          SO/ Crypto Dubai Residences
        </H2>
      </BusinessAdvertisment>
      <SpaceY />
      <BusinessAdvertisment
        para="SO/ Sofitel hotels are a playful mix of sophistication and the dynamic style of each locale. Highly creative and fashion-led, each SO/ Sofitel is an avant-garde masterpiece imaginatively inspired by an iconic, signature designer. Unique to the Middle East, SO/ Crypto Dubai will be the first and only SO/ hotel and branded residences in the region."
        buttonText="comming soon"
        link="#interested"
        background="bg-dubaiHotel"
        className="mr-3"
        justifyContent="end"
        alignContent="evenly"
      >
        <H2 className="text-4xl xl:text-heading1 font-semibold text-center pt-8 px-2  md:leading-lhlg xl:leading-lhxl text-white uppercase">
          SO/ Crypto Dubai Hotel
        </H2>
      </BusinessAdvertisment>
      <SpaceY />
      <ContactFrom />
      <SpaceY />
    </>
  );
};

export default CryptoTower;
