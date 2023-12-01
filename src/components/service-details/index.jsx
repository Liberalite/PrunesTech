import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";

const ServiceDetails = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Web Design" innertitle="Help Desk Service Details" />
            <ServiceDetailsArea />
          </main>
          <FooterFour style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
