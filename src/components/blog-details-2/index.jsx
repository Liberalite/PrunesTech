import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import Portfolio from "../blog-details/portfolio";
import PostboxArea from "../blog-details/postbox-area";
import FooterFour from "../../layout/footers/footer-4";

const BlogDetailsTwo = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main> 
            <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog Grid Classic"} />
            <PostboxArea style_details_2={true} />
            <Portfolio />
          </main>
          <FooterFour style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsTwo;
