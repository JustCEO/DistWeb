import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
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
                                    alt={`${vendor.name} logo`}
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
            </div>
        </div>
    );
};

export default Vendors;
