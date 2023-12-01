import React from "react";
import SEO from "../../../common/seo";
import HomeFour from "../homes/home";
import Wrapper from "../../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Prunes Tech - AI Marketing & Analytics"} />
      <HomeFour />
    </Wrapper>
  );
};

export default index;
