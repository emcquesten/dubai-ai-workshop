import React, { useState, useEffect } from 'react';
import { FutureProofedLogo } from './FutureProofedLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  hideNavLinks?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ hideNavLinks = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
      {/* Use same container structure as page sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Floating white container */}
        <div
          className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)] rounded-xl px-6 md:px-8 py-3.5"
        >
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <a href="/" className="flex items-center shrink-0">
              <FutureProofedLogo className="h-9 w-auto" />
            </a>

            {/* Navigation - Center (Desktop only) */}
            {!hideNavLinks && (
              <div className="hidden lg:flex items-center gap-1">
                <NavLink href="/#pain-points" onClick={(e) => handleNavClick(e, 'pain-points')}>
                  {t('nav.challenges')}
                </NavLink>
                <NavLink href="/#benefits" onClick={(e) => handleNavClick(e, 'benefits')}>
                  {t('nav.benefits')}
                </NavLink>
                <NavLink href="/#details" onClick={(e) => handleNavClick(e, 'details')}>
                  {t('nav.workshop')}
                </NavLink>
                <NavLink href="/#about" onClick={(e) => handleNavClick(e, 'about')}>
                  {t('nav.about')}
                </NavLink>
              </div>
            )}

            {/* Right side - Language Switcher + CTAs */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              {/* Join Waitlist Button */}
              <button
                onClick={handleWaitlistClick}
                className="bg-brand-blue text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                {t('nav.joinWaitlist')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
interface NavLinkProps {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
  >
    {children}
  </a>
);