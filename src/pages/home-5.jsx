import React from "react";
import SEO from "../common/seo";
import HomeFive from "../components/homes/home-5";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Prunes Tech - Data analytics"} />
      <HomeFive />
    </Wrapper>
  );
};

export default index;
