import BreadcrumbEight from "@/src/common/breadcrumbs/breadcrumb-8";
// import FooterFive from "@/src/layout/footers/footer-5";
// import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ProjectArea from "../homes/home-copy/project-area";
import ProjectDetailsArea from "./project-details-area";
import ThumbArea from "./thumb-area";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";

const ProjectDetails = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight />
            <ThumbArea />
            <ProjectDetailsArea />
            <ProjectArea />
          </main>
          <FooterFour style_contact={true}  style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
