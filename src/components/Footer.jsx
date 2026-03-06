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
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/#company">About Us</a></li>
                        <li><Link to="/vendors">Vendors</Link></li>
                        <li><Link to="/contacts">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><Link to="/solutions">Security</Link></li>
                        <li><Link to="/solutions">Networking</Link></li>
                        <li><Link to="/solutions">Development</Link></li>
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
