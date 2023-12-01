import ScrollToTop from "@/src/hooks/scroll-to-top";
import React from "react";
import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import PriceArea from "./price-area";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
import ServicesArea from "./services-area";
import TestimonialArea from "./testimonial-area";
import FooterFour from "../../../layout/footers/footer-4";
import HeaderFour from "../../../layout/headers/header-4";

const HomeOne = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix">
      <HeroSlider />
      <FeatureArea />
      <AboutArea />
      <ServicesArea />
      <ProjectArea />
      <TestimonialArea />
      <RankArea />
      <PriceArea />
      </main> 
      <FooterFour />
      <ScrollToTop />
      </div>
      </div>
    </>
  );
};

export default HomeOne;
