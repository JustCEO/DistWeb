const translations = {
    EN: {
        // Nav
        nav_company: 'Company',
        nav_about: 'About Us',
        nav_services: 'Our Services',
        nav_leadership: 'Leadership',
        nav_careers: 'Careers',
        nav_solutions: 'Solutions',
        nav_vendors: 'Vendors',
        nav_projects: 'Projects',
        nav_contact: 'Contact Us',

        // Hero
        hero_line1: 'Secure. Automate.',
        hero_line2: 'Innovate.',
        hero_subtitle: 'DISTECHSOL is your partner in Security, Automation, and IT Infrastructure. Official distributor of global brands, serving Azerbaijan and the UAE since 2020.',
        hero_cta: 'Explore Solutions',

        // Stats bar
        stat_clients: 'Clients',
        stat_years: 'Years on the Market',
        stat_countries: 'Countries',
        stat_vendors: 'Vendor Partners',

        // Company section
        company_title: 'About DisTechSol',
        company_subtitle: 'Your Partner in Security & Automation',

        // Services section
        services_title: 'Our Solutions',
        services_subtitle: 'Distributing global brands & delivering custom integration.',

        // Contact page
        contact_title: 'Get In Touch',
        contact_subtitle: 'Have a project in mind or questions about our solutions? Reach out to us through any of the channels below.',

        // Vendors page
        vendors_title: 'Our Vendors & Technology Partners',
        vendors_subtitle: 'We distribute and integrate solutions from world-leading technology brands.',

        // Footer
        footer_tagline: 'Innovative IT solutions for a complex world.',
        footer_company: 'Company',
        footer_services: 'Services',
        footer_copyright: '© 2025 DisTechSol. All rights reserved.',
    },
    RU: {
        nav_company: 'Компания',
        nav_about: 'О нас',
        nav_services: 'Наши услуги',
        nav_leadership: 'Руководство',
        nav_careers: 'Карьера',
        nav_solutions: 'Решения',
        nav_vendors: 'Вендоры',
        nav_projects: 'Проекты',
        nav_contact: 'Контакты',

        hero_line1: 'Безопасность. Автоматизация.',
        hero_line2: 'Инновации.',
        hero_subtitle: 'DISTECHSOL — ваш партнёр в области безопасности, автоматизации и ИТ-инфраструктуры. Официальный дистрибьютор мировых брендов в Азербайджане и ОАЭ с 2020 года.',
        hero_cta: 'Наши решения',

        stat_clients: 'Клиентов',
        stat_years: 'Лет на рынке',
        stat_countries: 'Страны',
        stat_vendors: 'Вендор-партнёров',

        company_title: 'О DisTechSol',
        company_subtitle: 'Ваш партнёр в безопасности и автоматизации',

        services_title: 'Наши решения',
        services_subtitle: 'Дистрибуция мировых брендов и заказная интеграция.',

        contact_title: 'Свяжитесь с нами',
        contact_subtitle: 'Есть проект или вопросы о наших решениях? Свяжитесь с нами любым удобным способом.',

        vendors_title: 'Наши вендоры и технологические партнёры',
        vendors_subtitle: 'Мы дистрибутируем и интегрируем решения ведущих мировых технологических брендов.',

        footer_tagline: 'Инновационные ИТ-решения для сложного мира.',
        footer_company: 'Компания',
        footer_services: 'Услуги',
        footer_copyright: '© 2025 DisTechSol. Все права защищены.',
    },
    AZ: {
        nav_company: 'Şirkət',
        nav_about: 'Haqqımızda',
        nav_services: 'Xidmətlərimiz',
        nav_leadership: 'Rəhbərlik',
        nav_careers: 'Karyera',
        nav_solutions: 'Həllər',
        nav_vendors: 'Vendorlar',
        nav_projects: 'Layihələr',
        nav_contact: 'Əlaqə',

        hero_line1: 'Təhlükəsizlik. Avtomatlaşdırma.',
        hero_line2: 'İnnovasiya.',
        hero_subtitle: 'DISTECHSOL — təhlükəsizlik, avtomatlaşdırma və İT infrastruktur sahəsində tərəfdaşınız. 2020-ci ildən Azərbaycan və BƏƏ-də qlobal brendlərin rəsmi distribütoru.',
        hero_cta: 'Həllərimiz',

        stat_clients: 'Müştəri',
        stat_years: 'İl bazarda',
        stat_countries: 'Ölkə',
        stat_vendors: 'Vendor tərəfdaş',

        company_title: 'DisTechSol haqqında',
        company_subtitle: 'Təhlükəsizlik və avtomatlaşdırmada tərəfdaşınız',

        services_title: 'Həllərimiz',
        services_subtitle: 'Qlobal brendlərin distribusiyası və fərdi inteqrasiya.',

        contact_title: 'Bizimlə əlaqə',
        contact_subtitle: 'Layihəniz və ya həllərimiz haqqında suallarınız var? Aşağıdakı kanallardan bizimlə əlaqə saxlayın.',

        vendors_title: 'Vendorlarımız və texnologiya tərəfdaşları',
        vendors_subtitle: 'Biz dünyanın aparıcı texnologiya brendlərinin həllərini distribusiya və inteqrasiya edirik.',

        footer_tagline: 'Mürəkkəb dünya üçün innovativ İT həlləri.',
        footer_company: 'Şirkət',
        footer_services: 'Xidmətlər',
        footer_copyright: '© 2025 DisTechSol. Bütün hüquqlar qorunur.',
    },
};

export function applyTranslations(lang) {
    const t = translations[lang] || translations.EN;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
}

export function getTranslation(lang, key) {
    const t = translations[lang] || translations.EN;
    return t[key] || translations.EN[key] || key;
}

export default translations;
