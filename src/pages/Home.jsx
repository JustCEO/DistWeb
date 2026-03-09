import React from 'react';
import useSEO from '../hooks/useSEO';
import HeroSection from '../components/HeroSection';
import PartnersCarousel from '../components/PartnersCarousel';
import CompanySection from '../components/CompanySection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
    useSEO({
        title: null, // Use default base title for homepage
        description: 'DisTechSol — leading system integrator in Azerbaijan. Suprema biometric access control, Network Optix & Milestone video surveillance, CRM/ERP integration, N8N automation, IT infrastructure. Serving Baku & UAE since 2020.',
        canonical: 'https://distechsol.com/'
    });

    return (
        <>
            <HeroSection />
            <PartnersCarousel />
            <CompanySection />
            <ServicesSection />
        </>
    );
};

export default Home;
