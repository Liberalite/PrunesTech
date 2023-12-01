import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import BlogGrid from "../blog/blog-grid";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";

const BlogList = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog Grid Classic"} />
            <BlogGrid />
            <Portfolio />
            <PostboxArea />
            <CtaArea />
          </main>
          <FooterFour style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default BlogList;
