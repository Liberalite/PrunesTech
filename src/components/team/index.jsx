import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import CtaArea from "../contact/cta-area";
import TeamArea from "./team-area";
import FooterFour from "../../layout/footers/footer-4";

const Team = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Team Member"} innertitle={"Team Member"} />
            <TeamArea />
            <CtaArea />
          </main>
          <FooterFour style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Team;
