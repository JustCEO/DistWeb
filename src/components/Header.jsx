import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img src={logo} alt="DisTechSol" />
                </Link>

                <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
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
                                    <h4>Public Sector</h4>
                                    <Link to="/solutions#government" className="dropdown-item">Government & Public Sector</Link>
                                    <Link to="/solutions#healthcare" className="dropdown-item">Healthcare</Link>
                                    <Link to="/solutions#energy" className="dropdown-item">Energy, Oil & Gas</Link>
                                </div>
                                <div className="dropdown-col">
                                    <h4>Commercial</h4>
                                    <Link to="/solutions#banking" className="dropdown-item">Banking & Finance</Link>
                                    <Link to="/solutions#retail-hospitality" className="dropdown-item">Retail & Hospitality</Link>
                                    <Link to="/solutions#corporate" className="dropdown-item">Corporate & Enterprise</Link>
                                </div>
                                <div className="dropdown-col">
                                    <h4>Operations</h4>
                                    <Link to="/solutions#industrial" className="dropdown-item">Industrial & Manufacturing</Link>
                                    <Link to="/solutions#logistics" className="dropdown-item">Logistics & Transportation</Link>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item"><Link to="/vendors" className="nav-link" data-i18n="nav_vendors">Vendors</Link></li>

                        <li className="nav-item"><Link to="/projects" className="nav-link" data-i18n="nav_projects">Success History</Link></li>

                        <li className="nav-item contact-nav-item"><Link to="/contacts" className="nav-link contact-nav-link" data-i18n="nav_contact">Contact Us</Link></li>
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
