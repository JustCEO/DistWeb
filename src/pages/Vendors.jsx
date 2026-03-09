import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import useSEO from '../hooks/useSEO';
import AnimatedSection from '../components/AnimatedSection';
import './Vendors.css';

const vendors = [
    {
        name: 'Suprema',
        category: 'Biometric Access Control',
        description: 'Leading manufacturer of fingerprint recognition and biometric access control systems used in enterprise and government facilities.',
        logo: '/vendors/suprema.png'
    },
    {
        name: 'Network Optix (Nx)',
        category: 'Video Management Software',
        description: 'Open-platform VMS enabling AI-powered video analytics, multi-site monitoring, and seamless camera integration.',
        logo: '/vendors/nx.png'
    },
    {
        name: 'Milestone Systems',
        category: 'Intelligent Surveillance',
        description: 'Enterprise-grade video management platform supporting thousands of cameras with advanced analytics and open integration.',
        logo: '/vendors/milestone.png'
    },
    {
        name: 'Incoresoft',
        category: 'Security Software',
        description: 'Software solutions for access control management, visitor tracking, and security system integration.',
        logo: '/vendors/incoresoft.png'
    },
    {
        name: 'Cisco',
        category: 'Enterprise Networking',
        description: 'Industry-leading networking hardware including switches, routers, firewalls, and SD-WAN solutions for enterprise environments.',
        logo: '/vendors/cisco.png'
    },
    {
        name: 'Peplink',
        category: 'SD-WAN & Connectivity',
        description: 'Multi-WAN routers and SD-WAN solutions ensuring uninterrupted connectivity with load balancing and failover.',
        logo: '/vendors/peplink.png'
    },
    {
        name: 'HP',
        category: 'IT Hardware',
        description: 'Servers, workstations, laptops, and enterprise IT hardware powering business operations worldwide.',
        logo: '/vendors/hp.png'
    },
    {
        name: 'Cambium Networks',
        category: 'Wireless Infrastructure',
        description: 'Carrier-grade wireless broadband and radio communication solutions for enterprise and outdoor deployments.',
        logo: '/vendors/cambium.png'
    }
];

const Vendors = () => {
    const { t } = useTranslation();

    useSEO({
        title: 'Vendors — Suprema, Network Optix, Milestone, Cisco, Peplink',
        description: 'DisTechSol technology partners: Suprema biometric access control, Network Optix Nx Witness VMS, Milestone XProtect, Incoresoft AI analytics, Cisco networking, Peplink SD-WAN, HP, Cambium Networks. Official distributor in Azerbaijan.',
        canonical: 'https://distechsol.com/vendors'
    });

    return (
        <div className="vendors-page">
            <div className="container">
                <AnimatedSection className="vendors-header">
                    <h1 className="text-gradient">{t('vendors_title')}</h1>
                    <p>{t('vendors_subtitle')}</p>
                </AnimatedSection>

                <div className="vendors-grid">
                    {vendors.map((vendor, index) => (
                        <AnimatedSection className="vendor-card" key={index} delay={index * 0.07}>
                            <div className="vendor-logo-wrapper">
                                <img
                                    src={vendor.logo}
                                    alt={`${vendor.name} — ${vendor.category} partner of DisTechSol Azerbaijan`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('no-logo');
                                    }}
                                />
                                <span className="vendor-logo-fallback">{vendor.name.charAt(0)}</span>
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">{vendor.name}</h3>
                                <span className="vendor-category">{vendor.category}</span>
                                <p className="vendor-desc">{vendor.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="vendors-seo-section" delay={0.3}>
                    <div style={{
                        marginTop: '80px',
                        padding: '40px',
                        background: 'var(--bg-card)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '24px' }}>
                            Official Technology Distributor in Azerbaijan & UAE
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
                            DisTechSol is the official distributor and system integrator for leading global technology brands in Azerbaijan and the UAE.
                            We provide end-to-end solutions from <strong>Suprema</strong> biometric access control (BioStation 3, FaceStation F2, BioStar 2),
                            <strong> Network Optix</strong> Nx Witness and <strong>Milestone</strong> XProtect video management systems,
                            to <strong>Cisco</strong> enterprise networking and <strong>Peplink</strong> SD-WAN solutions.
                            Our expertise also covers <strong>CRM and ERP integration</strong>, <strong>N8N workflow automation</strong>,
                            and custom software development for security and business process automation.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Vendors;
