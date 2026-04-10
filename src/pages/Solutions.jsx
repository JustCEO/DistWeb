import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './Solutions.css';

const verticals = [
    {
        id: 'government',
        title: 'Government & Public Sector',
        tagline: 'Mission-critical security for ministries, courts, and municipal facilities.',
        challenges: [
            'Strict access control for sensitive areas and VIP zones',
            'Compliance with government security and data protection standards',
            'Unified monitoring across multiple buildings and agencies',
        ],
        solutions: [
            'Biometric access control with face recognition at all entry points',
            'Multi-zone hierarchical access policies with audit logs',
            'AI video analytics and perimeter intrusion detection',
            'Secure, segregated networking with NGFW and VPN',
        ],
        tech: ['Suprema BioStation 3', 'FaceStation F2', 'Network Optix', 'Incoresoft', 'Peplink'],
    },
    {
        id: 'energy',
        title: 'Energy, Oil & Gas',
        tagline: 'Harsh-environment security and communications for upstream, midstream, and offshore.',
        challenges: [
            'Perimeter protection for large industrial sites and pipelines',
            'Explosion-proof and IP67-rated hardware for outdoor/offshore',
            'Always-on connectivity at remote and offshore locations',
        ],
        solutions: [
            'Ruggedized outdoor biometric and RFID access terminals',
            'Multi-site VMS with AI detection for intrusion and loitering',
            'SD-WAN with 5G/LTE failover for remote facilities',
            'Time and attendance integration with HR and payroll',
        ],
        tech: ['Suprema XPass 2', 'CoreStation', 'Peplink SD-WAN', 'Network Optix', 'DELL'],
    },
    {
        id: 'banking',
        title: 'Banking & Finance',
        tagline: 'Layered security for branches, vaults, and data centers.',
        challenges: [
            'Dual-factor authentication for sensitive vault and server rooms',
            'High-resolution video retention per banking regulations',
            'Unified identity management across branches',
        ],
        solutions: [
            'Biometric + RFID dual authentication for high-security zones',
            'Enterprise VMS with long-term video retention and fast search',
            'AI face recognition for fraud prevention and VIP detection',
            'Redundant networking with high-availability SD-WAN',
        ],
        tech: ['Suprema BioStation 3', 'BioEntry W2', 'March Networks', 'Incoresoft', 'Peplink'],
    },
    {
        id: 'industrial',
        title: 'Industrial & Manufacturing',
        tagline: 'Plant security, workforce tracking, and operational continuity.',
        challenges: [
            'Controlling access across multi-zone factories and warehouses',
            'Accurate shift-based time and attendance for hundreds of workers',
            'Connecting legacy OT systems to modern IT monitoring',
        ],
        solutions: [
            'Large-scale biometric access with centralized BioStar 2 platform',
            'Automated T&A with HR and payroll integration',
            'Video analytics for PPE compliance and safety incidents',
            'Industrial-grade structured cabling and fiber backbone',
        ],
        tech: ['Suprema XPass D2', 'CoreStation', 'BioStar 2', 'SAMM Fotaş', 'Network Optix'],
    },
    {
        id: 'retail-hospitality',
        title: 'Retail & Hospitality',
        tagline: 'Customer experience, loss prevention, and multi-site operations.',
        challenges: [
            'Loss prevention without disrupting customer experience',
            'People counting and behavior analytics for merchandising',
            'Centralized management across multiple locations',
        ],
        solutions: [
            'AI video analytics for theft detection and heatmaps',
            'Customer face recognition for VIP and blacklist alerts',
            'Cloud VMS with centralized multi-site dashboards',
            'Guest Wi-Fi with SD-WAN for reliable connectivity',
        ],
        tech: ['March Networks', 'Incoresoft', 'Network Optix', 'Peplink'],
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        tagline: 'Patient safety, restricted areas, and staff workflow optimization.',
        challenges: [
            'Restricted access to labs, pharmacies, and operating rooms',
            'Hygienic touchless authentication for clinical staff',
            'Patient safety monitoring and incident response',
        ],
        solutions: [
            'Touchless face recognition access control',
            'Video analytics for patient fall detection and wandering',
            'Secure HIPAA-aligned networking and data segregation',
            'Staff T&A integrated with hospital HR systems',
        ],
        tech: ['Suprema FaceStation F2', 'BioStar 2', 'Network Optix', 'Incoresoft'],
    },
    {
        id: 'corporate',
        title: 'Corporate & Enterprise Offices',
        tagline: 'Smart workplace, hybrid work, and enterprise productivity.',
        challenges: [
            'Modern, frictionless office access for employees and visitors',
            'Meeting-room and workspace optimization',
            'Intelligent automation to reduce repetitive work',
        ],
        solutions: [
            'Mobile-credential biometric access control',
            'Visitor management system with pre-registration',
            'Custom AI copilots and workflow automation (Claude, n8n)',
            'Enterprise IT stack: servers, Wi-Fi, SD-WAN, endpoint protection',
        ],
        tech: ['Suprema Mobile Access', 'Incoresoft', 'DELL', 'Claude AI', 'n8n'],
    },
    {
        id: 'logistics',
        title: 'Logistics & Transportation',
        tagline: 'Fleet, depot, and cargo security with always-on connectivity.',
        challenges: [
            'Secure access to depots, yards, and warehouses',
            'Real-time video and telemetry from mobile assets',
            'Connectivity resilience across distributed sites',
        ],
        solutions: [
            'Biometric and RFID access control at gates and depots',
            'Mobile VMS for fleet and in-vehicle surveillance',
            'Multi-WAN bonding for uninterrupted field connectivity',
            'AI-based number plate recognition (ANPR/LPR)',
        ],
        tech: ['Suprema XPass 2', 'March Networks', 'Peplink', 'Incoresoft'],
    },
];

const Solutions = () => {
    return (
        <div className="solutions-page">
            <Helmet>
                <title>Solutions by Industry – Security, Networking, AI | DisTechSol Azerbaijan</title>
                <meta
                    name="description"
                    content="Industry-specific security and IT solutions in Azerbaijan: government, energy, banking, industrial, retail, healthcare, corporate, logistics. Biometric access, VMS, SD-WAN, AI automation."
                />
                <meta
                    name="keywords"
                    content="security solutions Azerbaijan, biometric access Baku, VMS Azerbaijan, SD-WAN Baku, banking security, government security, oil gas security, retail analytics, healthcare access control, enterprise IT Azerbaijan"
                />
                <link rel="canonical" href="https://distechsol.com/solutions" />
            </Helmet>

            <div className="container">
                <AnimatedSection className="solutions-header">
                    <h1 className="text-gradient solutions-title" data-i18n="solutions_title">
                        Solutions by Industry
                    </h1>
                    <p className="solutions-subtitle" data-i18n="solutions_subtitle">
                        Tailored security, networking, and AI solutions for every vertical we serve across Azerbaijan and the region.
                    </p>
                </AnimatedSection>

                <div className="verticals-grid">
                    {verticals.map((vertical) => (
                        <AnimatedSection key={vertical.id} className="vertical-card" id={vertical.id}>
                            <div className="vertical-card-header">
                                <h2 className="vertical-title">{vertical.title}</h2>
                                <p className="vertical-tagline">{vertical.tagline}</p>
                            </div>

                            <div className="vertical-body">
                                <div className="vertical-section">
                                    <h4 className="vertical-section-title">Key Challenges</h4>
                                    <ul className="vertical-list">
                                        {vertical.challenges.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="vertical-section">
                                    <h4 className="vertical-section-title">Our Solutions</h4>
                                    <ul className="vertical-list vertical-list-check">
                                        {vertical.solutions.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="vertical-tech">
                                <span className="vertical-tech-label">Key Technologies:</span>
                                <div className="vertical-tech-list">
                                    {vertical.tech.map((t, i) => (
                                        <span key={i} className="vertical-tech-chip">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="solutions-cta">
                    <h3>Don't see your industry?</h3>
                    <p>We tailor security and IT solutions to your specific operational needs. Let's talk.</p>
                    <Link to="/contacts" className="btn btn-hero">Contact Us</Link>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Solutions;
