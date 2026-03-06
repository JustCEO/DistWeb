import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import './HeroSection.css';
import heroBg from '../assets/images/hero-bg.png';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const { t } = useTranslation();

    const stats = [
        { number: '50+', labelKey: 'hero_stat_clients' },
        { number: '5', labelKey: 'hero_stat_years' },
        { number: '2', labelKey: 'hero_stat_countries' },
        { number: '20+', labelKey: 'hero_stat_vendors' },
    ];

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
                        <span className="block-reveal">{t('hero_line1')}</span>
                        <br />
                        <span className="text-gradient block-reveal delay-1">{t('hero_line2')}</span>
                    </h1>
                    <p className="hero-subtitle block-reveal delay-2">
                        {t('hero_subtitle')}
                    </p>
                    <div className="hero-actions block-reveal delay-3">
                        <a href="#solutions" className="btn btn-hero">{t('hero_cta')}</a>
                    </div>
                </AnimatedSection>

                <div className="hero-stats block-reveal delay-3">
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className="stat-divider"></span>}
                            <div className="hero-stat-item">
                                <span className="hero-stat-number">{stat.number}</span>
                                <span className="hero-stat-label">{t(stat.labelKey)}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
