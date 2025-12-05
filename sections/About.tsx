import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" className="bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-5/12 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
              {/* Decorative border */}
              <div className="absolute inset-0 border border-gray-200 rounded-2xl z-20 pointer-events-none"></div>
              <img
                src="/eric-photo.jpg"
                alt="Eric McQuesten"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-bold text-xl">{t('about.name')}</p>
                <p className="text-gray-200 text-sm">{t('about.role')}</p>
              </div>
            </div>
            {/* Background accent */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-gray-200 rounded-2xl hidden md:block"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-6/12 space-y-8"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-blue">{t('about.sectionLabel')}</h2>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
              {t('about.title')}
            </h3>

            <div className="space-y-5 text-gray-600 text-base font-normal leading-relaxed">
              <p>{t('about.bio1')}</p>
              <p>{t('about.bio2')}</p>
              <p>{t('about.bio3')}</p>
              <p>{t('about.bio4')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};