import ContextProvider from "@/src/context/ContextProvider";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import BusinessBox from "./business-box";
import CtaArea from "./cta-area";
import FeatureArea from "./feature-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import IntegrationArea from "./integration-area";
import PlanArea from "./plan-area";
import ServiceArea from "./service-area";
import TestimonialArea from "../../../common/testimonial-area";
import VideoArea from "./video-area";
import AnimateMouse from "./AnimateMouse";

const HomeFive = () => {
  return (
    <ContextProvider>
      <AnimateMouse />
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <VideoArea />
            <FunFactArea />
            <ServiceArea />
            <CtaArea />
            <PlanArea />
            <TestimonialArea />
            <FeatureArea />
            <IntegrationArea />
            <BusinessBox />
          </main>
          <FooterFour bg_style={false} />
        </div>
      </div>
    </ContextProvider>
  );
};

export default HomeFive;
