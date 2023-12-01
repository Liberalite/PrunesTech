import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CareerDetailsArea from "./career-details-area";

const CareerDetails = () => {
  return (
    <>
      <HeaderFour />
      <main>
      <BreadcrumbTwo title={"Careers Details"} innertitle={" Careers page"} career_details={true} />
      <CareerDetailsArea />
      <JobArea style_carrer={true}/>
      <CtaArea />
      </main>
      <FooterFour style_contact={true} style_team={true} />
    </>
  );
};

export default CareerDetails;
