import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import './HeroSection.css';
import heroBg from '../assets/images/hero-bg.png';

const stats = [
    { number: '50+', label: 'Clients', i18nLabel: 'hero_stat_clients' },
    { number: '5', label: 'Years on the Market', i18nLabel: 'hero_stat_years' },
    { number: '2', label: 'Countries', i18nLabel: 'hero_stat_countries' },
    { number: '20+', label: 'Vendor Partners', i18nLabel: 'hero_stat_vendors' },
];

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="hero-section">
            <motion.div
                className="hero-bg-parallax"
                style={{ backgroundImage: `url(${heroBg})`, y }}
            />
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <AnimatedSection className="hero-text-content">
                    <h1 className="hero-title">
                        <span className="block-reveal" data-i18n="hero_line1">Secure. Automate.</span>
                        <br />
                        <span className="text-gradient block-reveal delay-1" data-i18n="hero_line2">Innovate.</span>
                    </h1>
                    <p className="hero-subtitle block-reveal delay-2" data-i18n="hero_subtitle">
                        DISTECHSOL is your partner in Security, Automation, and IT Infrastructure.
                        Official distributor of global brands, serving Azerbaijan and the UAE since 2020.
                    </p>
                    <div className="hero-actions block-reveal delay-3">
                        <a href="#services" className="btn btn-hero" data-i18n="hero_cta">Explore Solutions</a>
                    </div>
                </AnimatedSection>

                <div className="hero-stats block-reveal delay-3">
                    <div className="hero-stat">
                        <span className="hero-stat-number">50+</span>
                        <span className="hero-stat-label" data-i18n="stat_clients">Clients</span>
                    </div>
                    <span className="hero-stat-divider"></span>
                    <div className="hero-stat">
                        <span className="hero-stat-number">5</span>
                        <span className="hero-stat-label" data-i18n="stat_years">Years on the Market</span>
                    </div>
                    <span className="hero-stat-divider"></span>
                    <div className="hero-stat">
                        <span className="hero-stat-number">2</span>
                        <span className="hero-stat-label" data-i18n="stat_countries">Countries</span>
                    </div>
                    <span className="hero-stat-divider"></span>
                    <div className="hero-stat">
                        <span className="hero-stat-number">20+</span>
                        <span className="hero-stat-label" data-i18n="stat_vendors">Vendor Partners</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
