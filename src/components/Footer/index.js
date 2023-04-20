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
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <div className="navigation">
                        <a className="main" onClick={scrollToTop}>
                            <Link to="/" className="nav-logo">
                            <img className="codeOverflow-logo-img" src={logo} alt="codeOverflow" />
                            <h1 className="codeOverflow-logo-text-footer">codeOverflow</h1>
                            </Link>
                        </a>
                        <ul> 
                            <Link to="/questions">
                                <li>FAQ</li>
                            </Link>
                            <a href="https://stackoverflow.com/help" target="_blank">
                                <li>Help</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="navigation">
                        <ul>
                            <a href="" target="_blank">
                                <li>Github</li>
                            </a>
                            <a href="" target="_blank">
                                <li>LinkedIn</li>
                            </a>
                            <a href="" target="_blank">
                                <li>Twitter</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;