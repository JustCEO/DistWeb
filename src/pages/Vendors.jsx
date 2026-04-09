import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';
import './Vendors.css';

const vendors = [
    {
        name: 'Suprema',
        category: 'Biometric Access Control',
        description: 'Leading manufacturer of fingerprint recognition and biometric access control systems used in enterprise and government facilities.',
        logo: '/vendors/suprema.png',
    },
    {
        name: 'Network Optix (Nx)',
        category: 'Video Management Software',
        description: 'Open-platform VMS enabling AI-powered video analytics, multi-site monitoring, and seamless camera integration.',
        logo: '/vendors/nx.png',
    },
    {
        name: 'Milestone Systems',
        category: 'Intelligent Surveillance',
        description: 'Enterprise-grade video management platform supporting thousands of cameras with advanced analytics and open integration.',
        logo: '/vendors/milestone.png',
    },
    {
        name: 'Incoresoft',
        category: 'Security Software',
        description: 'Software solutions for access control management, visitor tracking, and security system integration.',
        logo: '/vendors/incoresoft.png',
    },
    {
        name: 'Cisco',
        category: 'Enterprise Networking',
        description: 'Industry-leading networking hardware including switches, routers, firewalls, and SD-WAN solutions for enterprise environments.',
        logo: '/vendors/cisco.png',
    },
    {
        name: 'Peplink',
        category: 'SD-WAN & Connectivity',
        description: 'Multi-WAN routers and SD-WAN solutions ensuring uninterrupted connectivity with load balancing and failover.',
        logo: '/vendors/peplink.png',
    },
    {
        name: 'HP',
        category: 'IT Hardware',
        description: 'Servers, workstations, laptops, and enterprise IT hardware powering business operations worldwide.',
        logo: '/vendors/hp.png',
    },
    {
        name: 'Cambium Networks',
        category: 'Wireless Infrastructure',
        description: 'Carrier-grade wireless broadband and radio communication solutions for enterprise and outdoor deployments.',
        logo: '/vendors/cambium.png',
    },
];

const Vendors = () => {
    return (
        <div className="vendors-page">
            <Helmet>
                <title>Our Vendors – Suprema, Cisco, Milestone, HP | DisTechSol Azerbaijan</title>
                <meta name="description" content="DisTechSol partners with Suprema, Cisco, Milestone Systems, Network Optix, HP, Peplink, Cambium Networks, and Incoresoft. Official distributor of biometric and security technology in Azerbaijan." />
                <link rel="canonical" href="https://distechsol.com/vendors" />
            </Helmet>
            <div className="container">
                <AnimatedSection style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="text-gradient vendors-title" data-i18n="vendors_title">Our Vendors & Technology Partners</h1>
                    <p className="vendors-subtitle" data-i18n="vendors_subtitle">
                        We distribute and integrate solutions from world-leading technology brands.
                    </p>
                </AnimatedSection>

                <div className="vendors-grid">
                    {vendors.map((vendor, index) => (
                        <AnimatedSection key={index} className="vendor-card">
                            <div className="vendor-logo-wrapper">
                                <img
                                    src={vendor.logo}
                                    alt={vendor.name}
                                    className="vendor-logo"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="vendor-logo-placeholder" style={{ display: 'none' }}>
                                    {vendor.name.charAt(0)}
                                </div>
                            </div>
                            <h3 className="vendor-name">{vendor.name}</h3>
                            <span className="vendor-category">{vendor.category}</span>
                            <p className="vendor-description">{vendor.description}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vendors;
