import Image from "next/image";
import Link from "next/link";
import React from "react";


import icon_1 from "../../../public/assets/img/contact/contact-icon-sm-1.png";
import icon_2 from "../../../public/assets/img/contact/contact-icon-sm-2.png";
import icon_3 from "../../../public/assets/img/contact/contact-icon-sm-3.png";


const inner_content = {
  title: "Book a Demo!",
  description: <>We will contact again after receive your request in 24h</>,

  contact_data: [
    {
      id: 1,
      icon: icon_1,
      title: "prunestechnological@gmail.com",
      link: "mailto:prunestechnological@gmail.com",
    },
    {
      id: 2,
      icon: icon_2,
      title: "+40 724 968 373",
      link: "tel:+40 724 968 373",
    },
    {
      id: 3,
      icon: icon_3,
      title: "Bld Tomis Constanta",
      link: "https://www.google.com/maps/place/Bulevardul+Tomis/@44.2047767,28.617469,17z/data=!3m1!4b1!4m6!3m5!1s0x40bafaa979fce579:0x4b6a6b534a3c909f!8m2!3d44.2047729!4d28.6200439!16s%2Fg%2F120r4ydr?entry=ttu",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <Image src={item.icon} alt="theme-pure" />
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ContactInner;
