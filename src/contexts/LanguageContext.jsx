import React, { createContext, useContext, useState, useCallback } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('distechsol-lang') || 'EN';
    });

    const changeLanguage = useCallback((langCode) => {
        setLanguage(langCode);
        localStorage.setItem('distechsol-lang', langCode);
    }, []);

    const t = useCallback((key, fallback) => {
        const strings = translations[language];
        return (strings && strings[key]) || fallback || key;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
}
