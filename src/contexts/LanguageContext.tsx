import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
    language: string;
    isRTL: boolean;
    toggleLanguage: () => void;
    setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguageState] = useState(i18n.language || 'en');
    const isRTL = language === 'ar';

    const setLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguageState(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    };

    // Update document direction when language changes
    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = language;

        // Add/remove RTL class for Tailwind
        if (isRTL) {
            document.documentElement.classList.add('rtl');
        } else {
            document.documentElement.classList.remove('rtl');
        }
    }, [isRTL, language]);

    return (
        <LanguageContext.Provider value={{ language, isRTL, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
