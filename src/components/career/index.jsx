import BreadcrumbThree from "@/src/common/breadcrumbs/breadcrumb-3";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import PlatformArea from "../../common/platform-area";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CarrerBanner from "./carrer-banner";

const Career = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main> 
            <BreadcrumbThree />
            <CarrerBanner />
            <PlatformArea style_carrer={true} />
            <JobArea style_carrer={true} />
            <CtaArea />
          </main>
          <FooterFour style_contact={true} style_team={true}/>
        </div>
      </div>
    </>
  );
};

export default Career;
