import React from 'react';
import { FutureProofedLogo } from '../components/FutureProofedLogo';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 pt-12 pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          {/* Logo - Left */}
          <a href="/" className="flex items-center gap-3 md:absolute md:left-0">
            <FutureProofedLogo className="h-12 w-auto" />
          </a>

          {/* Links - Center */}
          <div className="flex gap-8 text-sm text-gray-600 md:mx-auto">
            <a href="/privacy" className="hover:text-brand-blue transition-colors">{t('footer.privacy')}</a>
            <a href="/terms" className="hover:text-brand-blue transition-colors">{t('footer.terms')}</a>
          </div>

          {/* Copyright - Right */}
          <p className="text-sm text-gray-500 md:absolute md:right-0">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};