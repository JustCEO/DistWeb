import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img src={logo} alt="DisTechSol" />
                </Link>

                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <span className="nav-link" data-i18n="nav_company">Company</span>
                            <div className="dropdown-menu">
                                <Link to="/#about" className="dropdown-item" data-i18n="nav_about">About Us</Link>
                                <Link to="/#services" className="dropdown-item" data-i18n="nav_services">Our Services</Link>
                                <Link to="/contacts" className="dropdown-item" data-i18n="nav_leadership">Leadership</Link>
                                <Link to="/contacts" className="dropdown-item" data-i18n="nav_careers">Careers</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link to="/solutions" className="nav-link" data-i18n="nav_solutions">Solutions</Link>
                            <div className="dropdown-menu wide">
                                <div className="dropdown-col">
                                    <h4 data-i18n="nav_physical_security">Physical Security</h4>
                                    <Link to="/service/physical-security" className="dropdown-item" data-i18n="nav_biometric">Biometric Access Control</Link>
                                    <Link to="/service/physical-security" className="dropdown-item" data-i18n="nav_locking">Intelligent Locking</Link>
                                </div>
                                <div className="dropdown-col">
                                    <h4 data-i18n="nav_digital_security">Digital Security &amp; AI</h4>
                                    <Link to="/service/video-analytics" className="dropdown-item" data-i18n="nav_vms">Video Surveillance (VMS)</Link>
                                    <Link to="/service/video-analytics" className="dropdown-item" data-i18n="nav_ai">AI Analytics</Link>
                                </div>
                                <div className="dropdown-col">
                                    <h4 data-i18n="nav_tech_services">Tech Services</h4>
                                    <Link to="/service/software-development" className="dropdown-item" data-i18n="nav_software">Software Development</Link>
                                    <Link to="/service/it-infrastructure" className="dropdown-item" data-i18n="nav_it_infra">IT Infrastructure</Link>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item"><Link to="/vendors" className="nav-link" data-i18n="nav_vendors">Vendors</Link></li>

                        <li className="nav-item"><Link to="/projects" className="nav-link" data-i18n="nav_projects">Projects</Link></li>

                        <li className="nav-item"><Link to="/contacts" className="nav-link contact-us-btn" data-i18n="nav_contact">Contact Us</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
