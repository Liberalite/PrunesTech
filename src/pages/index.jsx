import React from "react";
import SEO from "../common/seo";
import HomeFour from "./home-4";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Prunes Tech - Data analytics"} />
      <HomeFour />
    </Wrapper>
  );
};

export default Home;
