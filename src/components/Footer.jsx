import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import logo from '../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer" id="contacts">
            <div className="container footer-content">
                <div className="footer-col">
                    <Link to="/" className="footer-logo-link">
                        <img src={logo} alt="DisTechSol" />
                    </Link>
                    <p>{t('footer_tagline')}</p>
                </div>
                <div className="footer-col">
                    <h4>{t('footer_company')}</h4>
                    <ul>
                        <li><Link to="/#company">{t('nav_about')}</Link></li>
                        <li><Link to="/contacts">{t('footer_team')}</Link></li>
                        <li><Link to="/contacts">{t('nav_contact')}</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>{t('footer_services')}</h4>
                    <ul>
                        <li><Link to="/solutions">{t('footer_security')}</Link></li>
                        <li><Link to="/solutions">{t('footer_networking')}</Link></li>
                        <li><Link to="/solutions">{t('footer_development')}</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>{t('footer_navigation')}</h4>
                    <ul>
                        <li><Link to="/solutions">{t('nav_solutions')}</Link></li>
                        <li><Link to="/vendors">{t('nav_vendors')}</Link></li>
                        <li><Link to="/projects">{t('nav_projects')}</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 DisTechSol. {t('footer_rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
