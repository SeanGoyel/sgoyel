import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderWhite from "../component/header/HeaderWhite";
import {FaGithub} from "react-icons/fa";
import CallAction from "../elements/callaction/CallAction";


const SocialShare = [
    {Social: <FaGithub /> , link: 'https://github.com/SeanGoyel/SortVis'},
]



class Portfolio extends Component{


    render(){
        return(

            <React.Fragment>

              <div id="project">

                <PageHelmet pageTitle='SortVis' />
                <HeaderWhite homeLink="/" logo="symbol-dark" color="color-black"/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'SortVis'} details={'Algorithm Visualizer'} />
                {/* End Breadcrump Area */}
                    {/* Start Portfolio Details */}
                    <div className="rn-portfolio-details ptb--120 bg_color--4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                          <div className="portfolio-details">
                                            <div className="inner section-title text-left service-style--2 mb--30" color="color-white">
                                            <div className="portfolio-thumb-inner">

                                            <div className="port-view" style={{fontSize:"1.3em"}}>
                                              <a href="https://seangoyel.github.io/SortVis/" target="_blank">
                                                <span style={{color:"white", margin:"10 10"}}> Check it out </span>
                                                <span style={{color:"#f81f01"}}>here!</span>
                                              </a>
                                            </div>
                                                <div className="thumb mb--30 center">
                                                    <a href="https://seangoyel.github.io/SortVis/" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/p1-image.png`} alt="Portfolio Image"/></a>
                                                </div>
                                            </div>

                                            <h3>Details</h3>
                                            <br></br>
                                            <div className="portfolio-view-list service-style--2 d-flex flex-wrap" color="color-white">
                                              <div className="port-view">
                                                  <h4>A passion project I have created fuelled by my passion for sorting algorithms.This project offers the ability to watch an algorithm at a fraction of its speed to learn about the fascinating operations taking place or it can be sped up to see the power of sorting algorithms.</h4>
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
                                                  <span>Quick Sort</span>
                                                  <span>Merge Sort</span>
                                                  <span>Insertion Sort</span>
                                                  <span>Bubble Sort</span>
                                                  <span>Selection Sort</span>
                                                </div>

                                                <div className="port-view">
                                                    <h4>Technologies</h4>
                                                    <span>HTML5</span>
                                                    <span>CSS</span>
                                                    <span>JavaScript</span>
                                                </div>



                                                <div className="port-view">
                                                    <h4>Design</h4>
                                                    <span>Separation of Concerns</span>
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
