import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import './ServicesSection.css';
import biostationImg from '../assets/images/biostation3.png';
import vmsImg from '../assets/images/vms1.jpg';
import customSoftImg from '../assets/images/Custom_Software.jpeg';
import itInfraImg from '../assets/images/IT_Infrastructure.jpg';

const services = [
    {
        title: "Physical Security & Access",
        subtitle: "Biometric & Wireless Systems",
        desc: "Integrated biometric access control and wireless intelligent locking systems. Featuring diverse biometric portfolios and German-engineered electronic locks for a complete physical security ecosystem.",
        icon: biostationImg,
        link: "/service/physical-security"
    },
    {
        title: "Video Surveillance & AI",
        subtitle: "VMS & Intelligent Analytics",
        desc: "Open-platform video management and AI analytics. Featuring Network Optix, Milestone, and Incoresoft for proactive threat detection, behavioral analysis, and city-scale monitoring.",
        icon: vmsImg,
        link: "/service/video-analytics"
    },
    {
        title: "Custom Software & Automation",
        subtitle: "CRM / ERP / N8N Integration",
        desc: "CRM and ERP integration, N8N workflow automation, and custom middleware. Connect security systems with SAP, Bitrix24, 1C, and automate business processes end-to-end.",
        icon: customSoftImg,
        link: "/service/software-development"
    },
    {
        title: "IT Infrastructure",
        subtitle: "Enterprise Networking",
        desc: "Robust server and networking solutions ensuring 24/7 operational continuity. From enterprise switching to secure SD-WAN and disaster recovery solutions.",
        icon: itInfraImg,
        link: "/service/it-infrastructure"
    }
];

const ServicesSection = () => {
    const { t } = useTranslation();

    return (
        <section className="services-section" id="solutions">
            <div className="container">
                <AnimatedSection className="section-header">
                    <h2 className="section-title text-gradient">{t('services_title')}</h2>
                    <p className="section-subtitle">{t('services_subtitle')}</p>
                </AnimatedSection>

                <div className="services-grid">
                    {services.map((item, index) => (
                        <AnimatedSection className="service-card" key={index} delay={index * 0.1}>
                            <div className="card-icon">
                                {item.icon ? (
                                    <img src={item.icon} alt={item.title} />
                                ) : (
                                    <div className="icon-placeholder"></div>
                                )}
                            </div>
                            <h3>{item.title}</h3>
                            <h4 className="service-subtitle">{item.subtitle}</h4>
                            <p>{item.desc}</p>
                            <Link to={item.link} className="read-more">Learn more &rarr;</Link>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
