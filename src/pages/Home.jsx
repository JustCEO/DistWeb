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
                <title>DisTechSol – Suprema Distributor in Azerbaijan | Security & IT Solutions Baku</title>
                <meta name="description" content="DisTechSol is the official Suprema distributor in Azerbaijan. We provide biometric access control, video surveillance (Nx, Milestone), Cisco networking, IT infrastructure, and custom software development in Baku." />
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
