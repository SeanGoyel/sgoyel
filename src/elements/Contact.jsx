import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiPhone , FiMail , FiMapPin } from "react-icons/fi";
import HeaderNotHome from "../component/header/HeaderNotHome";
import FooterTwo from "../component/footer/FooterTwo";
import Particles from 'react-particles-js';

class Contact extends Component{

    render(){
        return(

          <div className="one-page active-dark" id="contact">

                <PageHelmet pageTitle='Contact' />

                <HeaderNotHome homeLink="/" logo="symbol-dark" color="color-white"/>

                <div className="slider-activation slider-creative-agency with-particles max-width">
                    <div className="frame-layout__particles">
                    <div calssName="max-height">
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
                              "color": {
                                "value": "#0a7d17"
                              },
                              "interactivity": {
                                  "events": {
                                      "onhover": {
                                          "enable": false,
                                          "mode": "repulse"
                                      }
                                  }
                              }
                          }}
                      />
                    </div>
                    </div>

                 {/* Start Breadcrump Area */}

                 <div className=" active-dark "  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Let's get in touch!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">

                        <div className="row">
                            {/* Start Single Address  */}

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address active-dark">
                                <a href="tel:+1 604 600 2148">

                                    <div className="icon">
                                    <FiPhone />
                                    </div>

                                    <div className="inner">
                                        <h4 className="title">Phone Number</h4>
                                        <h6 className="title">604 - 600 - 2148</h6>
                                    </div>

                                    </a>
                                </div>
                            </div>

                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address active-dark">
                                  <a href="mailto: seangoyel@hotmail.com">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <h6 className="title">seangoyel@hotmail.com</h6>
                                    </div>

                                    </a>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address active-dark">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <h6 className="title">Vancouver BC, Canada</h6>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}



                <div className="lock-bottom">
                  <FooterTwo />
                </div>


          </div>
          </div>
        )
    }
}
export default Contact
