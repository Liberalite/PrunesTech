import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import CtaArea from "../contact/cta-area";
import BlogGrid from "./blog-grid";
import Portfolio from "./portfolio";
import FooterFour from "../../layout/footers/footer-4";

const Blog = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog Grid Classic"} />
        <BlogGrid />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterFour style_contact={true} style_team={true} />
    </>
  );
};

export default Blog;
