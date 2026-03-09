import React from 'react';
import useSEO from '../hooks/useSEO';
import ServicesSection from '../components/ServicesSection';

const Solutions = () => {
    useSEO({
        title: 'Solutions — Access Control, Video Surveillance, Automation, IT Infrastructure',
        description: 'Explore DisTechSol solutions: Suprema biometric access control, Network Optix & Milestone VMS, AI video analytics, CRM/ERP integration, N8N workflow automation, and enterprise IT infrastructure in Azerbaijan.',
        canonical: 'https://distechsol.com/solutions'
    });

    return (
        <div style={{ paddingTop: '80px' }}>
            <ServicesSection />
        </div>
    );
};

export default Solutions;
