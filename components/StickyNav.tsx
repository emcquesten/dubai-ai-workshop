import React, { useState } from 'react';
import { Wrench, User, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const StickyNav: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('workshop');

    const tabs = [
        { id: 'workshop', labelKey: 'nav.theWorkshop', shortLabelKey: 'nav.workshop', icon: Wrench },
        { id: 'about', labelKey: 'nav.about', shortLabelKey: 'nav.about', icon: User },
        { id: 'waitlist', labelKey: 'nav.joinWaitlist', shortLabelKey: 'nav.joinWaitlist', icon: Clock }
    ];

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id === 'workshop' ? 'details' : id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full sm:w-auto">
            <div className="bg-gray-900 rounded-lg shadow-2xl px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-center gap-1 sm:gap-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => scrollToSection(tab.id)}
                            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 ${isActive
                                ? 'bg-brand-blue text-white font-semibold shadow-lg'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            <Icon size={18} strokeWidth={2} className="flex-shrink-0" />
                            <span className="text-xs sm:text-sm whitespace-nowrap">
                                <span className="sm:hidden">{t(tab.shortLabelKey)}</span>
                                <span className="hidden sm:inline">{t(tab.labelKey)}</span>
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
