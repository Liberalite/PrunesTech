import HeaderFour from "@/src/layout/headers/header-4"; 
import React from "react";
import SingnInArea from "./singn-in-area";
import FooterFour from "../../layout/footers/footer-4";

const SignIn = () => {
  return (
    <>
      <HeaderFour />
      <SingnInArea />
      <FooterFour style_contact={true} style_team={true} />
    </>
  );
};

export default SignIn;
