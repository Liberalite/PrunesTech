import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import feature_data from '@/src/data/feature-data';


const feature_content = {
    title: <>Prunes Tech <span> Integrations </span></>,
    des: <>Take your business to the next level with premium tools</>,
    integraton_title: "What you will get",
    integraton_des: <>Take your business to the next level with  <span> 09</span> accessible premium  extensions <br /> & different features</>,
}
const {title, des, integraton_title, integraton_des}  = feature_content


const FeatureArea = ({style_integraton}) => {
    return (
        <>
            <div className={`tp-feature-area ${style_integraton ? "pt-130 pb-30" : "blue-bg pt-130 pb-110"}`}>
                  <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-section-box text-center mb-40">
                            {style_integraton ? 
                                <>
                                <h3 className="tp-section-title-5 text-white">
                                    <span>
                                        {integraton_title}
                                    </span>
                                </h3>
                                    <p className='text-white'>{integraton_des}</p>
                                </>
                                :
                                <>
                                <h3 className="tp-section-title-5 text-white">{title}</h3>
                                <p className='text-white'>{des}</p>                                
                                </>
                            }
                           </div>
                        </div>
                     </div>
                     {/* #3137D2 */}
                     <div className="row gx-0 tp-feature-five-wrapper-main">
                        {feature_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-${item.color} text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            <Image src={item.img} alt="theme-pure" />
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="tp-feature-five-btn">
                                            <Link className="tp-btn-purple" href="/service-details">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-link text-center">
                              <span className='text-white'>Check out all of our <Link href="/service-details" className='text-white'>All features</Link></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </>
    );
};

export default FeatureArea;