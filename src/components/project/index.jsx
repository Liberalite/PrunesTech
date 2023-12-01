import BreadcrumbSeven from "@/src/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/src/layout/footers/footer-5";
// import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import HeaderFour from "@/src/layout/headers/header-4";
import FooterFour from "@/src/layout/footers/footer-4";

const Project = () => {
  return (
    <>
      <HeaderFour style_2={true} />
      <main>
        <BreadcrumbSeven />
        <Portfolio />
        {/* <CtaArea /> */}
      </main>
      <FooterFour style_contact={true}  style_team={true} />
    </>
  );
};

export default Project;
