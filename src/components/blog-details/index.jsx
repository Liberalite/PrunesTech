import BreadcrumbSix from "@/src/common/breadcrumbs/breadcrumb-6";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import Banner from "./banner";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";
import FooterFour from "../../layout/footers/footer-4";

const BlogDetails = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSix />
            <Banner />
            <PostboxArea />
            <Portfolio />
          </main>
          <FooterFour style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
