import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import './index.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }
    return (
        <div class="container-footer w-container">
        <div class="w-row">
          <div class="footer-column w-clearfix w-col w-col-4">
          <a className="main" onClick={scrollToTop}>
                            <Link to="/" className="nav-logo">
                            <img className="codeOverflow-logo-img" src={logo} alt="codeOverflow" />
                            <h1 className="codeOverflow-logo-text-footer">codeOverflow</h1>
                            </Link>
                            
            </a>
            <Link to="/signup" >
                <p class="footer-description-failory"> Join the codeOverflow Moringa community.<br/></p>
            </Link>
          </div>
          <div class="footer-column w-col w-col-8">
            <div class="w-row">
              <div class="w-col w-col-8">
                <div class="w-row">
                  <div class="w-col w-col-7 w-col-small-6 w-col-tiny-7">
                    <h3 class="footer-titles">Learn</h3>
                    <p class="footer-links"><a href="" target="_blank"><span class="footer-link">Failed Startups<br/></span></a><a href=""><span class="footer-link">Successful Startups<br/></span></a><a href=""><span class="footer-link">Blog</span></a><span><br/></span><a href=""><span class="footer-link">Entrepreneurial Tools<br/></span></a><a href=""><span class="footer-link">Startup Cemetery<br/></span></a><a href=""><span class="footer-link">Podcast</span></a><strong><br/></strong></p>
                  </div>
                  <div class="w-col w-col-5 w-col-small-6 w-col-tiny-5">
                    <h3 class="footer-titles">Other</h3>
                    <p class="footer-links"><a href=""><span class="footer-link">Sponsor Us!<br/></span></a><a href=""><span class="footer-link">Open Startup<br/></span></a><a href=""><span class="footer-link"></span></a><a href=""><span class="footer-link">Contribute<br/></span></a><a href=""><span class="footer-link">FAQ</span></a><strong><br/></strong></p>
                  </div>
                </div>
              </div>
              <div class="column-center-mobile w-col w-col-4">
                <h3 class="footer-titles">Follow Us!</h3>
                <a href="" target="_blank" class="footer-social-network-icons w-inline-block">
                    <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbf0a2f2b67e3b3ba079c_Twitter%20Icon.svg" width="20" alt="Twitter icon"/></a><a href="" target="_blank" class="footer-social-network-icons w-inline-block">
                    <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbfe70fcf5a0514c5b1da_Instagram%20Icon.svg" width="20" alt="Instagram icon"/></a><a href="" target="_blank" class="footer-social-network-icons w-inline-block">
                    <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbe42e1e6034fdaba46f6_Facebook%20Icon.svg" width="20" alt="Facebook Icon"/></a><a href="" target="_blank" class="footer-social-network-icons w-inline-block"/>
                    <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0002f2b676eb4ba0869_LinkedIn%20Icon.svg" width="20" alt="LinkedIn Icon"/><a/><a href="" target="_blank" class="footer-social-network-icons w-inline-block">
                 </a>
                <p class="footer-description">Email us at: <a href=""><strong class="link-email-footer">code@overflow.com</strong></a><br/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Footer;