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
                        <img src={logo} alt="DisTechSol — Security, Automation & IT Infrastructure in Azerbaijan" />
                    </Link>
                    <p>{t('footer_tagline')}</p>
                    <address className="footer-address">
                        Heydar Aliyev 183C, Baku, AZ 1029<br />
                        <a href="tel:+994512339370">+994 51 233 93 70</a><br />
                        <a href="mailto:office@distechsol.com">office@distechsol.com</a>
                    </address>
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
                        <li><Link to="/service/physical-security">Suprema Access Control</Link></li>
                        <li><Link to="/service/video-analytics">Network Optix VMS</Link></li>
                        <li><Link to="/service/software-development">CRM/ERP & N8N Automation</Link></li>
                        <li><Link to="/service/it-infrastructure">IT Infrastructure</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>{t('footer_navigation')}</h4>
                    <ul>
                        <li><Link to="/solutions">{t('nav_solutions')}</Link></li>
                        <li><Link to="/vendors">{t('nav_vendors')}</Link></li>
                        <li><Link to="/projects">{t('nav_projects')}</Link></li>
                        <li><a href="https://www.linkedin.com/company/distechsol" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 DisTechSol LLC. {t('footer_rights')} | Suprema, Network Optix, Milestone Distributor in Azerbaijan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
