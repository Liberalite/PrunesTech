import { CopyRight, SocialLinksTwo } from '@/src/common/social-links';
import EmailThree from '@/src/svg/email-3';
import LocationTwo from '@/src/svg/location-2';
import PhoneThree from '@/src/svg/phone-3';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import footer_shape from "../../../public/assets/img/footer/footer-bottom-shape-4-1.png";
import white_logo from "../../../public/assets/img/logo/logo-white.png";

import EmailIcon from '@/src/svg/email';
import RightArrow from '@/src/svg/right-arrow';
import footer_logo from "../../../public/assets/img/logo/logo-white.png";
import black_logo from "../../../public/assets/img/logo/logo-black.png";
import logo from "../../../public/assets/img/logo/logo-black.png";

const footer_content = {
   sub_title: "SUBSCRIBE TO OUR NEWSLETTER",
   policy_text: <>By subscribing, you accept our <a href="#">Privacy Policy</a></>,
   phone: "+4 0724 968 373",
   email: "prunestechnological@gmail.com",
   location: <>Constanta, <br />Romania</>,

   footer_lisks: [
      { name: "Home", link: "/" },
      { name: "Contact", link: "/contact" },
      { name: "Services", link: "/#services" },
      // { name: "About", link: "/about" },
      // { name: "Pricing Plan", link: "/price" },
      // { name: "Blog", link: "/blog" },
      { name: "FAQ", link: "/faq" },
      { name: "Portofolio", link: "/portofolio" },
   ],
}
const {sub_title, policy_text, phone, email, location, footer_lisks } = footer_content

const FooterFour = () => {
   return (
      <>
         <footer>
            <div className="tp-footer__pl-pr blue-bg z-index fix">
               <div className="tp-footer__area tp-footer__border-bottom-4 fix">
                  <div className="tp-footer-bottom-shape">
                     <Image src={footer_shape} alt="theme-pure" />
                  </div>
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-1">
                              <div className="tp-footer__logo mb-25">
                                 <Link href="/">
                                    <Image src={white_logo} alt="theme-pure" />
                                 </Link>
                              </div>
                              <h3 className="footer-subtitle-3">SOCIAL MEDIA</h3>
                              {/* <h3 className="footer-subtitle-3">{sub_title}</h3> */}
                              {/* <div className="tp-footer__input mb-15 p-relative">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Business email adress" required />
                                    <span>
                                       <EmailIcon />
                                    </span>
                                    <button>
                                       <RightArrow />
                                    </button>
                                 </form>
                              </div> */}
                              {/* <p>{policy_text}</p> */}
                              <div className="tp-team-social">
                                 <SocialLinksTwo />
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-2">
                              <h4 className="tp-footer__widget-title">Platform</h4>
                              <div className="tp-footer__content">
                                 <ul>
                                    {footer_lisks.map((item, i) =>
                                       <li key={i}><Link href={item.link}>{item.name}</Link></li>
                                    )}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-3">
                              <h4 className="tp-footer__widget-title">Contact Info</h4>
                              <div className="tp-contact-info-box">
                                 <ul>
                                    <li>
                                       <PhoneThree />
                                       <Link href={`tel:${phone}`}>{phone}</Link>
                                    </li>
                                    <li>
                                       <EmailThree />
                                       <Link href={`mailto:${email}`}>{email}</Link>
                                    </li>
                                    <li>
                                       <LocationTwo />  <Link href="https://www.google.com/maps/place/Bd.+Tomis,+Constan%C8%9Ba/data=!4m2!3m1!1s0x40bae52fc1462c2d:0xdef182dc9c2f6c7?sa=X&ved=2ahUKEwiIhOOb_e2CAxXyygIHHdxTA1UQ8gF6BAgPEAA" target="_blank">{location}</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="tp-copyright__text tp-copyright__text-4 text-center">
                              <span><CopyRight /></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </footer>
      </>
   );
};

export default FooterFour;