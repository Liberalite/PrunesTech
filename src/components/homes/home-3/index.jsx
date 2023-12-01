import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import TestimonialArea from "../home-3/testimonial-area";
import BlogArea from "./blog-area";
import CardArea from "../../../common/card-area";
import CounterArea from "./counter-area";
import HeroArea from "./hero-area";
import IntegrationArea from "./integration-area";
import RatedArea from "./rated-area";
import SalesArea from "../../../common/sales-area";
import ServiceArea from "./service-area";

const HomeThree = () => {
  return (
    <>
      <HeaderFour />
      <HeroArea />
      <CounterArea />
      <ServiceArea />
      <RatedArea />
      <CardArea />
      <SalesArea />
      <TestimonialArea />
      <IntegrationArea />
      <BlogArea />
      <FooterFour />
    </>
  );
};

export default HomeThree;
