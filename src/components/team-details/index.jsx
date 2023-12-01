import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import CtaArea from "../contact/cta-area";
import TeamDetailsArea from "./team-details-area";
import FooterFour from "../../layout/footers/footer-4";

const TeamDetails = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Team Single"} innertitle={" Team Member "} team_details={true} />
            <TeamDetailsArea />
            <CtaArea />
          </main>
          <FooterFour style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
