import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';
import './Vendors.css';

const vendorCategories = [
    {
        id: 'physical-security',
        title: 'Physical Security & Access Control',
        description: 'World-class biometric and access control hardware for enterprise and government.',
        vendors: [
            {
                name: 'Suprema',
                tagline: 'Biometric Access Control',
                description: 'Global leader in biometric access control. Face recognition, fingerprint, and RFID terminals deployed at government, banking, and enterprise sites across Azerbaijan.',
                logo: '/vendors/suprema.png',
            },
        ],
    },
    {
        id: 'video-surveillance',
        title: 'Video Surveillance & VMS',
        description: 'Open-platform video management and intelligent video solutions.',
        vendors: [
            {
                name: 'Network Optix (Nx)',
                tagline: 'Video Management Software',
                description: 'Open-platform VMS with AI-powered video analytics, multi-site monitoring, and seamless camera integration. Used in smart cities and enterprise deployments.',
                logo: '/vendors/nx.png',
            },
            {
                name: 'March Networks',
                tagline: 'Intelligent IP Video',
                description: 'Enterprise IP video surveillance and business intelligence solutions trusted by banks, retailers, and transportation networks worldwide.',
                logo: '/vendors/march-networks.png',
            },
        ],
    },
    {
        id: 'security-software',
        title: 'Security Software & Analytics',
        description: 'AI-driven analytics, visitor management and security integration platforms.',
        vendors: [
            {
                name: 'Incoresoft',
                tagline: 'AI Video Analytics',
                description: 'AI-powered video analytics, face recognition, and smart city solutions. Access control management, visitor tracking, and security system integration.',
                logo: '/vendors/incoresoft.png',
            },
        ],
    },
    {
        id: 'networking',
        title: 'Networking & Infrastructure',
        description: 'Enterprise connectivity, SD-WAN, and structured cabling solutions.',
        vendors: [
            {
                name: 'Peplink',
                tagline: 'SD-WAN & Connectivity',
                description: 'Multi-WAN routers and SD-WAN solutions ensuring uninterrupted connectivity with load balancing, failover, and 5G/LTE bonding for mission-critical deployments.',
                logo: '/vendors/peplink.png',
            },
            {
                name: 'SAMM Fotaş',
                tagline: 'Fiber & Network Infrastructure',
                description: 'Fiber optic cables, structured cabling, and network infrastructure solutions. Turkish manufacturer with a full portfolio of cabling and connectivity products.',
                logo: '/vendors/samm-fotas.png',
            },
        ],
    },
    {
        id: 'it-hardware',
        title: 'IT Hardware & Compute',
        description: 'Enterprise servers, workstations, and endpoint hardware.',
        vendors: [
            {
                name: 'DELL Technologies',
                tagline: 'Servers & Workstations',
                description: 'Enterprise servers, storage, workstations, and end-user devices powering business operations. Official partnership for Azerbaijan deployments.',
                logo: '/vendors/dell.png',
            },
        ],
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        description: 'Modern AI assistants and workflow automation tooling for enterprise productivity.',
        vendors: [
            {
                name: 'Claude (Anthropic)',
                tagline: 'Enterprise AI Assistant',
                description: 'Frontier AI models from Anthropic. We integrate Claude into customer workflows for document processing, customer support, and internal copilots.',
                logo: '/vendors/claude.png',
            },
            {
                name: 'n8n',
                tagline: 'Workflow Automation',
                description: 'Open-source workflow automation platform. We build custom automations connecting CRM, ERP, security systems, and SaaS tools for streamlined operations.',
                logo: '/vendors/n8n.png',
            },
        ],
    },
];

const vendorKeywordList = vendorCategories
    .flatMap((c) => c.vendors.map((v) => `${v.name} Azerbaijan`))
    .join(', ');

const Vendors = () => {
    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DisTechSol',
        url: 'https://distechsol.com/vendors',
        description:
            'Authorized distributor and integrator of Suprema, Network Optix, March Networks, Incoresoft, Peplink, SAMM Fotaş, DELL, Claude AI and n8n in Azerbaijan.',
        brand: vendorCategories.flatMap((c) =>
            c.vendors.map((v) => ({ '@type': 'Brand', name: v.name }))
        ),
    };

    return (
        <div className="vendors-page">
            <Helmet>
                <title>Vendors – Suprema, Network Optix, March Networks, DELL | DisTechSol Azerbaijan</title>
                <meta
                    name="description"
                    content="Official distributor in Azerbaijan of Suprema biometrics, Network Optix VMS, March Networks, Incoresoft AI analytics, Peplink SD-WAN, SAMM Fotaş, DELL, Claude AI, and n8n automation."
                />
                <meta
                    name="keywords"
                    content={`${vendorKeywordList}, Suprema Baku, Network Optix Baku, March Networks Azerbaijan, Incoresoft Azerbaijan, Peplink Azerbaijan, SAMM Fotas Azerbaijan, DELL Azerbaijan, Claude AI Azerbaijan, n8n Azerbaijan, biometric distributor Azerbaijan, VMS distributor Baku, SD-WAN Azerbaijan`}
                />
                <link rel="canonical" href="https://distechsol.com/vendors" />
                <meta property="og:title" content="Vendors – Suprema, Network Optix, March Networks, DELL | DisTechSol Azerbaijan" />
                <meta
                    property="og:description"
                    content="Authorized distributor of Suprema, Network Optix, March Networks, Incoresoft, Peplink, SAMM Fotaş, DELL, Claude AI and n8n in Azerbaijan."
                />
                <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
            </Helmet>

            <div className="container">
                <AnimatedSection className="vendors-header">
                    <h1 className="text-gradient vendors-title" data-i18n="vendors_title">
                        Our Vendors & Technology Partners
                    </h1>
                    <p className="vendors-subtitle" data-i18n="vendors_subtitle">
                        We distribute and integrate solutions from world-leading technology brands across Azerbaijan and the region.
                    </p>
                </AnimatedSection>

                {vendorCategories.map((category) => (
                    <section key={category.id} className="vendor-category-block" id={category.id}>
                        <AnimatedSection className="vendor-category-header">
                            <h2 className="vendor-category-title">{category.title}</h2>
                            <p className="vendor-category-description">{category.description}</p>
                        </AnimatedSection>

                        <div className="vendors-grid">
                            {category.vendors.map((vendor) => (
                                <AnimatedSection key={vendor.name} className="vendor-card">
                                    <div className="vendor-logo-wrapper">
                                        <img
                                            src={vendor.logo}
                                            alt={`${vendor.name} ${vendor.tagline} – DisTechSol Azerbaijan`}
                                            className="vendor-logo"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                if (e.target.nextSibling) {
                                                    e.target.nextSibling.style.display = 'flex';
                                                }
                                            }}
                                        />
                                        <div className="vendor-logo-placeholder" style={{ display: 'none' }}>
                                            {vendor.name.charAt(0)}
                                        </div>
                                    </div>
                                    <h3 className="vendor-name">{vendor.name}</h3>
                                    <span className="vendor-category">{vendor.tagline}</span>
                                    <p className="vendor-description">{vendor.description}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Vendors;
