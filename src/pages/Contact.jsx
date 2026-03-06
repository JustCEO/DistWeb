import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

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
    },
];

const Contact = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)', paddingBottom: '60px' }}>
            <div className="container">
                <AnimatedSection className="contact-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="text-gradient" style={{ fontSize: '48px', marginBottom: '20px' }} data-i18n="contact_title">Get In Touch</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }} data-i18n="contact_subtitle">
                        Have a project in mind or questions about our solutions? Reach out to us through any of the channels below.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                    }}>
                        {contactItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: '24px 28px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(0, 212, 255, 0.1)',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{
                                    flexShrink: 0,
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '12px',
                                    background: 'rgba(0, 212, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        color: '#00d4ff',
                                        marginBottom: '4px',
                                    }}>
                                        {item.label}
                                    </div>
                                    <div style={{
                                        fontSize: '17px',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                    }}>
                                        {item.value}
                                    </div>
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
