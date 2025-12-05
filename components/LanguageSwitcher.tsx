import React from 'react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-blue/30 bg-white/80 backdrop-blur-sm transition-all hover:bg-white text-sm font-medium text-gray-700 hover:text-brand-blue overflow-hidden"
            aria-label="Switch language"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={language}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                >
                    <img
                        src={language === 'en' ? '/flag-usa.png' : '/flag-uae.png'}
                        alt={language === 'en' ? 'English' : 'العربية'}
                        className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="uppercase font-semibold">{language === 'en' ? 'EN' : 'AR'}</span>
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};
