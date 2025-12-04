import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { FutureProofedLogo } from './FutureProofedLogo';

interface NavbarProps {
  hideNavLinks?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ hideNavLinks = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If we're on the home page, prevent default and smooth scroll
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Otherwise, let the link navigate normally to /#section
  };

  const handleWaitlistClick = () => {
    if (window.location.pathname === '/') {
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
    } else {
      window.location.href = '/#waitlist';
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-5 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm' : 'py-8 bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <a href="/" className="flex items-center gap-4">
            <FutureProofedLogo className="h-10 w-auto" />
          </a>

          {/* Navigation - Center (Desktop only) */}
          {!hideNavLinks && (
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              <a href="/#pain-points" onClick={(e) => handleNavClick(e, 'pain-points')} className="text-base text-gray-700 hover:text-brand-blue transition-colors font-medium">Challenges</a>
              <a href="/#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className="text-base text-gray-700 hover:text-brand-blue transition-colors font-medium">Benefits</a>
              <a href="/#details" onClick={(e) => handleNavClick(e, 'details')} className="text-base text-gray-700 hover:text-brand-blue transition-colors font-medium">Workshop</a>
              <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-base text-gray-700 hover:text-brand-blue transition-colors font-medium">About</a>
            </div>
          )}

          {/* CTA - Right */}
          <Button
            onClick={handleWaitlistClick}
            variant="outline"
            className="!bg-brand-blue !text-white hover:!bg-blue-700 !border-brand-blue transition-colors text-base px-6 py-2.5 !rounded-lg"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};