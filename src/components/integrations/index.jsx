import BreadcrumbFour from "@/src/common/breadcrumbs/breadcrumb-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import IntegrationArea from "../homes/home-3/integration-area";
import FeatureArea from "../homes/home-5/feature-area";
import FooterFour from "../../layout/footers/footer-4";

const Integrations = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFour />
            <FeatureArea style_integraton={true} />
            <IntegrationArea style_integraton={true}/>
          </main>
          <FooterFour style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Integrations;
