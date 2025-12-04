import React from 'react';
import { ArrowRight } from 'lucide-react';

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
                className="group flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full shadow-2xl shadow-brand-blue/40 hover:shadow-brand-blue/60 hover:scale-105 transition-all duration-300 font-semibold text-base"
            >
                <span>Join the Waitlist</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};
