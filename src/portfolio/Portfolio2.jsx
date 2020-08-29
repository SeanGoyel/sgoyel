import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderWhite from "../component/header/HeaderWhite";
import {FaGithub} from "react-icons/fa";
import CallAction from "../elements/callaction/CallAction";

const SocialShare = [
    {Social: <FaGithub /> , link: 'https://github.com/SeanGoyel/Picture-Run'},
]

class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
              <div id="personal-project">

                <PageHelmet pageTitle='Picture Run' />
                <HeaderWhite homeLink="/" logo="symbol-dark" color="color-black"/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Picture Run'} details={'Platform game with custom levels which players can design using everyday objects found in the real world'}  />
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
                                                  <h4>This is a passion project I developed which caters to my love for platform games and sandbox games. I wanted to make a unique platform game which would offer users the ability to create their own levels and provide them with a unique opportunity to merge the real world with this game. Users can build their own levels in the real world by placing objects onto a surface and snapping a picture of it then proceeding to play on this customized level in the game. This allows users to use their creativity to create fun, challenging and engaging levels for them to play.</h4>
                                                </div>
                                              </div>
                                              <br></br>
                                              <br></br>

                                            <div className="portfolio-view-list service-style--2 d-flex flex-wrap" color="color-white">
                                              <div className="port-view">
                                                  <h4>Visuals</h4>
                                                  <span>This project allowed me to learn a lot about graphics and visual components in Java. I enjoyed making aesthetic and engaging player models, block models, menu screens, etc.</span>
                                                </div>

                                                <div className="port-view">
                                                    <h4>Functionality</h4>
                                                    <span>Images are flood filled using BFS according to a colour tolerance to mark the background of the images.</span>
                                                    <span>Checked whether each identified object is an intended platform or an inconsistency in the image such as a blemish by checking the nature, positioning and neighbouring pixels of the object.</span>
                                                    <span>Each image is analyzed by checking that the calculated distance between platforms are within the necessary parameters to ensure that the level can be completed, in the cases that they are not then moving blocks are rendered in.</span>
                                                </div>

                                            </div>

                                            <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                                <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                    {SocialShare.map((val , i) => (
                                                        <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="row mt--10">
                                                {/* Start Single Portfolio */}
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="related-work text-center mt--30">
                                                        <div className="thumb">
                                                            <a href="/portfolio-details">
                                                                <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/p2-Example-Win.gif`} alt="Portfolio Image"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                 {/* End Single Portfolio */}
                                                {/* Start Single Portfolio */}
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="related-work text-center mt--30">
                                                        <div className="thumb">
                                                            <a href="/portfolio-details">
                                                                <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/p2-Example-Dead.gif`} alt="Portfolio Image"/>
                                                            </a>
                                                        </div>

                                                    </div>
                                                </div>
                                                 {/* End Single Portfolio */}
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
