import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaGithub} from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MainDemo from '../../dark/MainDemo.jsx';
import { HashLink as Link } from 'react-router-hash-link'



const SocialShare = [
    {Social: <FaGithub /> , link: 'https://github.com/SeanGoyel/'},
]

class HeaderThree extends Component{


    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })

    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    render(){

      var elements = document.querySelectorAll('.has-droupdown > a');
      for(var i in elements) {
          if(elements.hasOwnProperty(i)) {
              elements[i].onclick = function() {
                  this.parentElement.querySelector('.submenu').classList.toggle("active");
                  this.classList.toggle("open");
              }
          }
      }

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (document.querySelector('.header--fixed') != null){
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
          }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;


        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">

                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','contact','personal-project']} currentClassName="is-current" offset={-200}>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>

                                <li><Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link></li>
                                <li className="has-droupdown "><Link to="#" >Personal Projects</Link>
                                    <ul className="submenu">
                                      <li><Link to={`${process.env.PUBLIC_URL}/portfolio1#personal-project`}>SortVis</Link></li>
                                      <li><Link to={`${process.env.PUBLIC_URL}/portfolio2#personal-project`}>Picture Run</Link></li>
                                      <li><Link to={`${process.env.PUBLIC_URL}/portfolio3#personal-project`}>Foodimize</Link></li>
                                      <li><Link to={`${process.env.PUBLIC_URL}/portfolio4#personal-project`}>Eskil</Link></li>
                                    </ul>
                                </li>

                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-btn">
                            <a className="rn-btn" target="_blank" href="https://images8.alphacoders.com/380/thumb-1920-380977.jpg">
                                <span>Resume</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderThree;
