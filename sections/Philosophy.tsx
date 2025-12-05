import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Philosophy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">{t('philosophy.sectionLabel')}</h2>

          <div className="space-y-12">
            <blockquote className="font-sans text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
              {t('philosophy.quote')} <span className="text-brand-blue">{t('philosophy.quoteHighlight')}</span>{t('philosophy.quoteEnd')}
            </blockquote>

            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-auto"></div>

            <p className="font-body text-xl md:text-2xl font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('philosophy.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};