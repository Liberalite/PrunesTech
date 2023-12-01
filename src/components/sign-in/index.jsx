import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSeven from "@/src/layout/headers/header-7"; 
import React from "react";
import SingnInArea from "./singn-in-area";
import FooterFour from "../../layout/footers/footer-4";

const SignIn = () => {
  return (
    <>
      <HeaderSeven />
      <SingnInArea />
      <FooterFour style_contact={true} style_team={true} />
    </>
  );
};

export default SignIn;
