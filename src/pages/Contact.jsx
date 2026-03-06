import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const contactItems = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
        ),
        label: 'Phone',
        value: '+994 51 233 93 70',
        href: 'tel:+994512339370',
        i18nLabel: 'contact_phone'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
        ),
        label: 'Email',
        value: 'office@distechsol.com',
        href: 'mailto:office@distechsol.com',
        i18nLabel: 'contact_email'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>
        ),
        label: 'Address',
        value: 'Heydar Aliyev 183C, Baku, AZ 1029, Azerbaijan',
        href: 'https://maps.google.com/?q=Heydar+Aliyev+183C,+Baku,+AZ+1029,+Azerbaijan',
        external: true,
        i18nLabel: 'contact_address'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
            </svg>
        ),
        label: 'LinkedIn',
        value: 'DisTechSol',
        href: 'https://www.linkedin.com/company/distechsol',
        external: true,
        i18nLabel: 'contact_linkedin'
    }
];

const Contact = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)', paddingBottom: '60px' }}>
            <div className="container">
                <AnimatedSection className="contact-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="text-gradient" style={{ fontSize: '48px', marginBottom: '20px' }} data-i18n="contact_title">Get In Touch</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }} data-i18n="contact_subtitle">
                        Have a project in mind or questions about our solutions? Reach out to us directly — we'd love to hear from you.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="contact-info-wrapper">
                    <div className="contact-info-grid">
                        {contactItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="contact-info-card"
                                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                <div className="contact-icon">{item.icon}</div>
                                <div className="contact-details">
                                    <span className="contact-label" data-i18n={item.i18nLabel}>{item.label}</span>
                                    <span className="contact-value">{item.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Contact;
