import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";

const Contact = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Get In" title_bottom="Get In" />
            <HeroBanner bg_img="/assets/img/contact/contact-banner.jpg" />
            {/* <OfficeLocation /> */}
            {/* <CtaArea />
            <br /> */}
            <ContactInner />
            {/* <ContactFormArea /> */}
          </main>
          <FooterFour style_contact={true} style_team={true} />
          {/* <FooterFive style_contact={true} style_team={true} /> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
