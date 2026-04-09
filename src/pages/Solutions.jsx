import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/ServicesSection';

const Solutions = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>Security & IT Solutions – Biometric Access, VMS, Networking | DisTechSol</title>
                <meta name="description" content="Enterprise security solutions in Azerbaijan: Suprema biometric access control, video surveillance with Milestone & Network Optix, Cisco networking, SD-WAN, and custom software development." />
                <link rel="canonical" href="https://distechsol.com/solutions" />
            </Helmet>
            <ServicesSection />
        </div>
    );
};

export default Solutions;
