import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import OpenAccountArea from "./open-account-area";
import PaymentArea from "./payment-area";
import PaymentMethodArea from "./payment-method-area";
import ServiceArea from "./service-area";
import TestimonialArea from "./testimonial-area";

const HomeTwo = () => {
  return (
    <>

      <HeaderFour />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix"> 
      <HeroArea />
      <PaymentArea />
      <PaymentMethodArea />
      <ServiceArea />
      <OpenAccountArea />
      <TestimonialArea />
      <FaqArea />
      <CtaArea /> 
      </main>
      <FooterFour />
      </div>
      </div>

    </>
  );
};

export default HomeTwo;
