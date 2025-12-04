import React from 'react';
import { UserPlus } from 'lucide-react';

export const StickyNav: React.FC = () => {
    const scrollToWaitlist = () => {
        const element = document.getElementById('waitlist');
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <button
                onClick={scrollToWaitlist}
                className="flex items-center gap-3 bg-brand-blue text-white px-6 py-3.5 rounded-xl shadow-2xl shadow-brand-blue/40 hover:shadow-brand-blue/60 hover:bg-blue-700 transition-all duration-300 font-semibold text-base"
            >
                <UserPlus size={20} strokeWidth={2} />
                <span>Join the Waitlist</span>
            </button>
        </div>
    );
};

