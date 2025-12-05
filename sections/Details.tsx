import React from 'react';
import { Section } from '../components/ui/Section';
import { Brain, Wrench, Layers, Lightbulb, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Details: React.FC = () => {
  const { t } = useTranslation();

  const outcomes = [
    { icon: Wrench, titleKey: "details.outcome1Title", descKey: "details.outcome1Desc" },
    { icon: Brain, titleKey: "details.outcome2Title", descKey: "details.outcome2Desc" },
    { icon: Lightbulb, titleKey: "details.outcome3Title", descKey: "details.outcome3Desc" }
  ];

  return (
    <Section id="details" className="bg-white relative overflow-hidden">
      {/* Background gradient for this section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#002FB8]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">{t('details.sectionLabel')}</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            {t('details.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column: The Teaser */}
          <div className="lg:col-span-6 space-y-10">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              {t('details.description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 shrink-0">
                  <Check size={14} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">{t('details.feature1Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('details.feature1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 shrink-0">
                  <Check size={14} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">{t('details.feature2Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('details.feature2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 shrink-0">
                  <Check size={14} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">{t('details.feature3Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('details.feature3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Outcomes */}
          <div className="lg:col-span-6 grid gap-4">
            {outcomes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all backdrop-blur-sm"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 font-semibold mb-1">{t(item.titleKey)}</h4>
                  <p className="text-gray-600 font-normal text-sm">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};