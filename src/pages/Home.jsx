import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import PartnersCarousel from '../components/PartnersCarousel';
import CompanySection from '../components/CompanySection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>DisTechSol – Suprema, Network Optix, Peplink Distributor Azerbaijan | Security, AI & IT Baku</title>
                <meta name="description" content="DisTechSol is the official distributor of Suprema, Network Optix, March Networks, Incoresoft, Peplink, SAMM Fotaş, DELL, Claude AI and n8n in Azerbaijan. Biometric access control, AI video analytics, SD-WAN networking, and enterprise automation in Baku." />
                <link rel="canonical" href="https://distechsol.com/" />
            </Helmet>
            <HeroSection />
            <PartnersCarousel />
            <CompanySection />
            <ServicesSection />
        </>
    );
};

export default Home;
