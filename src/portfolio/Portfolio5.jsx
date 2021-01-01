import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderWhite from "../component/header/HeaderWhite";
import {FaGithub} from "react-icons/fa";
import CallAction from "../elements/callaction/CallAction";


const SocialShare = [
    {Social: <FaGithub /> , link: 'https://github.com/SeanGoyel/VenPlan'},
]



class Portfolio extends Component{


    render(){
        return(

            <React.Fragment>

              <div id="project">

                <PageHelmet pageTitle='VenPlan' />
                <HeaderWhite homeLink="/" logo="symbol-dark" color="color-black"/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'VenPlan'} details={'Cinema Venue Relational Database Application'} />
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
                                                  <h4>A CPSC 304 database project for cinema venues to mange and analyze their theatres, movies, showings and seatings plans.</h4>
                                                </div>
                                              </div>
                                              <br></br>
                                              <br></br>

                                            <div className="portfolio-view-list service-style--2 d-flex flex-wrap" color="color-white">

                                                <div className="port-view">
                                                    <h4>Technologies</h4>
                                                    <span>MySQL</span>
                                                    <span>Java</span>
                                                    <span>JavaFX</span>
                                                    <span>XML</span>
                                                </div>

                                            </div>

                                            <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                                <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                    {SocialShare.map((val , i) => (
                                                        <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="portfolio-thumb-inner">

                                                <div className="thumb mb--30 center">
                                                  <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/p5-VenPlan.gif`} alt="Portfolio Image"/>
                                                </div>
                                                <div className="thumb mb--30 center">
                                                  <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/p5-VenPlan.png`} alt="Portfolio Image"/>
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
