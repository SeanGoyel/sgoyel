import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderWhite from "../component/header/HeaderWhite";
import {FaGithub} from "react-icons/fa";
import CallAction from "../elements/callaction/CallAction";


const SocialShare = [
    {Social: <FaGithub /> , link: 'https://github.com/SeanGoyel/Foodimize'},
]

class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
              <div id="project">

                <PageHelmet pageTitle='Foodimize' />
                <HeaderWhite homeLink="/" logo="symbol-dark" color="color-black"/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Foodimize'} details={'Food Consumption Tracker'}  />
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
                                                  <h4>Foodimize is an application which gives the user the ability to see the effects and impacts of the food they eat. This application will record food along with the effects it has on the individual who consumes it. The collected data will be organized in a manner which provides users with the insight of which foods should be avoided and which should be ingested. </h4>
                                                </div>
                                              </div>

                                              <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                                  <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                      {SocialShare.map((val , i) => (
                                                          <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
                                                      ))}
                                                  </ul>
                                              </div>

                                            <div className="portfolio-view-list service-style--2 d-flex flex-wrap" color="color-white">
                                              <div className="port-view">
                                                  <h4>Functionality</h4>
                                                  <span>Adding, removing, sorting, summoning, editing food items</span>
                                                  <span>Data persistence: storing, retrieving and updating data into a file</span>
                                                  <span>Error checking and handling</span>
                                                  <span>The implementation of robust class structures</span>
                                                  <span>Ui interaction audio</span>
                                                </div>

                                                <div className="port-view">
                                                    <h4 style={{marginTop:"30px"}}>Programing Practices</h4>
                                                    <span>Black box testing with JUnit</span>
                                                    <span>Reading and creating UML diagrams</span>
                                                    <span>Implementing hierarchies</span>
                                                    <span>Implementing interfaces</span>
                                                    <span>Implementing bi-directional relationships</span>
                                                    <span>Adhering to Cohesion and Coupling principles</span>
                                                    <span>Adhering to the Liskov Substitution principle</span>
                                                </div>


                                            </div>



                                            <div className="portfolio-thumb-inner">

                                                <div className="thumb mb--30 center">
                                                     <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/p3-image.png`} alt="Portfolio Image"/>
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
                    <div>
                        <CallAction />
                    </div>
                    </div>

            </React.Fragment>
        )
    }
}
export default Portfolio;
