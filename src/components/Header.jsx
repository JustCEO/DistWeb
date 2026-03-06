import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import './Header.css';
import logo from '../assets/images/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img src={logo} alt="DisTechSol" />
                </Link>

                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item has-dropdown">
                            <Link to="/#company" className="nav-link">{t('nav_company')}</Link>
                            <div className="dropdown-menu">
                                <Link to="/#company" className="dropdown-item">{t('nav_about')}</Link>
                                <Link to="/#solutions" className="dropdown-item">{t('nav_services')}</Link>
                                <Link to="/contacts" className="dropdown-item">{t('nav_leadership')}</Link>
                                <Link to="/contacts" className="dropdown-item">{t('nav_careers')}</Link>
                            </div>
                        </li>

                        <li className="nav-item has-dropdown">
                            <Link to="/solutions" className="nav-link">{t('nav_solutions')}</Link>
                            <div className="dropdown-menu wide">
                                <div className="dropdown-col">
                                    <h4>{t('nav_physical_security')}</h4>
                                    <Link to="/service/physical-security" className="dropdown-item">{t('nav_biometric')}</Link>
                                    <Link to="/service/physical-security" className="dropdown-item">{t('nav_locking')}</Link>
                                </div>
                                <div className="dropdown-col">
                                    <h4>{t('nav_digital_security')}</h4>
                                    <Link to="/service/video-analytics" className="dropdown-item">{t('nav_vms')}</Link>
                                    <Link to="/service/video-analytics" className="dropdown-item">{t('nav_ai')}</Link>
                                </div>
                                <div className="dropdown-col">
                                    <h4>{t('nav_tech_services')}</h4>
                                    <Link to="/service/software-development" className="dropdown-item">{t('nav_software')}</Link>
                                    <Link to="/service/it-infrastructure" className="dropdown-item">{t('nav_it_infra')}</Link>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item"><Link to="/vendors" className="nav-link">{t('nav_vendors')}</Link></li>

                        <li className="nav-item"><Link to="/projects" className="nav-link">{t('nav_projects')}</Link></li>

                        <li className="nav-item"><Link to="/contacts" className="nav-link contact-us-btn">{t('nav_contact')}</Link></li>
                    </ul>

                    <div className="mobile-lang-switcher">
                        <LanguageSwitcher />
                    </div>
                </nav>

                <div className="header-actions">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
