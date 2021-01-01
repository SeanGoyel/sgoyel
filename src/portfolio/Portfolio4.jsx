import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderWhite from "../component/header/HeaderWhite";
import {FaLink} from "react-icons/fa";
import CallAction from "../elements/callaction/CallAction";


const SocialShare = [
    {Social: <FaLink /> , link: 'https://eskil.com.tr/'},
]



class Portfolio extends Component{

    render(){
        return(

            <React.Fragment>

              <div id="project">

                <PageHelmet pageTitle='Eskil' />
                <HeaderWhite homeLink="/" logo="symbol-dark" color="color-black"/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Eskil'}  details={'E-commerce Website Design'} />
                {/* End Breadcrump Area */}
                    {/* Start Portfolio Details */}
                    <div className="rn-portfolio-details ptb--120 bg_color--4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-details">
                                      <div className="inner section-title text-left service-style--2 mb--30" color="color-white">
                                            <h3>Details</h3>
                                            <br></br>
                                            <div className="portfolio-view-list service-style--2 d-flex flex-wrap" color="color-white">
                                              <div className="port-view">
                                                  <h4>Designed and helped create a user-friendly e-commerce website. Exhibited an ability to self learn by researching SEO and implementing several aspects to improve SEO such as website load time, image tags and page meta data. Displayed creativity and marketing skills through online campaigns and giveaways through targeted Instagram and Facebook ads. </h4>
                                                </div>
                                              </div>
                                              <br></br>
                                              <br></br>



                                            <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                                <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                    {SocialShare.map((val , i) => (
                                                        <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="portfolio-thumb-inner">


                                                <div className="thumb mb--30 center">
                                                    <a href="https://eskil.com.tr/" target="_blank">
                                                      <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/p4-image.png`} alt="Portfolio Image"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Details */}





                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}


                  <CallAction />

                </div>

            </React.Fragment>
        )
    }
}
export default Portfolio;
