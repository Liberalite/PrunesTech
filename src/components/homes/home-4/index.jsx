import PriceArea from "@/src/common/price-area";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import AboutArea from "./about-area";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import PlatformArea from "../../../common/platform-area";
import SecurityArea from "./security-area";
import ServiceArea from "./service-area";
import TeamArea from "./team-area"; 
import FeatureArea from "../home-5/feature-area";
import TestimonialArea from "../home-2/testimonial-area";

const HomeFour = () => {
  return (
    <> 
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <BrandArea />
            <ServiceArea />
            <AboutArea />
            <FunFactArea />
            <PlatformArea />
            {/* <PriceArea /> */}
            {/* <TeamArea /> */}
            <SecurityArea />
          
            <TestimonialArea />
            {/* <BlogArea /> */}
            {/* <FeatureArea /> */}
            {/* <ContactArea /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default HomeFour;


// import React from "react";
// import SEO from "../../../common/seo";
// import HomeFour from ".";
// import Wrapper from "../../../layout/wrapper";

// const index = () => {
//   return (
//     <Wrapper>
//       <SEO pageTitle={"Prunes Tech - AI Marketing & Analytics"} />
//       <HomeFour />
//     </Wrapper>
//   );
// };

// export default index;
