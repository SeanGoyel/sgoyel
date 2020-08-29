import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import Particles from 'react-particles-js';
import HeaderThree from "../component/header/HeaderThree";
import TabTwo from "../elements/tab/TabTwo";
import CallAction from "../elements/callaction/CallAction";


const SlideList = [
    {
        textPosition: 'text-left',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
const Home = () => {
    let title = 'About Me',
        description = 'I am a 3rd Year Computer Science and Master of Management (B+MM) student at UBC. My dedication and interest for technology is fuelled by my desire to create, to learn and to make change. Technology, more specifically computer science, is a platform which holds the ability to facilitate innovation and is a platform which I continue to explore each and everyday.';

    return (
        <div className="active-dark">
            <Helmet pageTitle="Home" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    <div className="slider-activation slider-creative-agency with-particles" id="home">
                        <div className="frame-layout__particles">
                          <Particles
                              params={{
                                  "particles": {
                                      "number": {
                                          "value": 100
                                      },
                                      "size": {
                                          "value": 4
                                      }
                                  },
                                  "interactivity": {
                                      "events": {
                                          "onhover": {
                                              "enable": true,
                                              "mode": "repulse"
                                          }
                                      }
                                  }
                              }}
                          />
                        </div>
                        <div>
                        {SlideList.map((value , index) => (
                            <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center" key={index}>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                <h1 className="title">Hi, I’m Sean Goyel<br/>
                                                <TextLoop>
                                                    <span> Developer.</span>
                                                    <span> Student.</span>
                                                    <span> Innovator.</span>
                                                </TextLoop>{" "}
                                                </h1>
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                      </div>
                    </div>

                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */}

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/me.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End About Area */}


            {/* Start call To Action  */}
            <div id="contact">
                <CallAction />
            </div>
            {/* End call To Action  */}





            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>
    )
}

export default Home;
