import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <div className="container footer-content">
                <div className="footer-col">
                    <Link to="/" className="footer-logo-link">
                        <img src={logo} alt="DisTechSol" />
                    </Link>
                    <p data-i18n="footer_tagline">Innovative IT solutions for a complex world.</p>
                </div>
                <div className="footer-col">
                    <h4 data-i18n="footer_company">Company</h4>
                    <ul>
                        <li><a href="/#company">About Us</a></li>
                        <li><Link to="/vendors">Vendors</Link></li>
                        <li><Link to="/contacts">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 data-i18n="footer_services">Services</h4>
                    <ul>
                        <li><Link to="/solutions" data-i18n="footer_security">Security</Link></li>
                        <li><Link to="/solutions" data-i18n="footer_networking">Networking</Link></li>
                        <li><Link to="/solutions" data-i18n="footer_development">Development</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 data-i18n="footer_navigation">Navigation</h4>
                    <ul>
                        <li><Link to="/solutions" data-i18n="nav_solutions">Solutions</Link></li>
                        <li><Link to="/vendors" data-i18n="nav_vendors">Vendors</Link></li>
                        <li><Link to="/projects" data-i18n="nav_projects">Success History</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p data-i18n="footer_copyright">&copy; 2025 DisTechSol. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
