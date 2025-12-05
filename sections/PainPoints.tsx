import React from 'react';
import { Section } from '../components/ui/Section';
import { Mail, Clock, Users, Database, Zap, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const PainPoints: React.FC = () => {
  const { t } = useTranslation();

  const points = [
    {
      icon: Mail,
      titleKey: "painPoints.point1Title",
      descKey: "painPoints.point1Desc"
    },
    {
      icon: Search,
      titleKey: "painPoints.point2Title",
      descKey: "painPoints.point2Desc"
    },
    {
      icon: Clock,
      titleKey: "painPoints.point3Title",
      descKey: "painPoints.point3Desc"
    },
    {
      icon: Users,
      titleKey: "painPoints.point4Title",
      descKey: "painPoints.point4Desc"
    },
    {
      icon: Database,
      titleKey: "painPoints.point5Title",
      descKey: "painPoints.point5Desc"
    },
    {
      icon: Zap,
      titleKey: "painPoints.point6Title",
      descKey: "painPoints.point6Desc"
    }
  ];

  return (
    <Section id="pain-points" className="bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-semibold text-3xl md:text-4xl mb-6 text-gray-900 tracking-tight"
          >
            {t('painPoints.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg font-normal"
          >
            {t('painPoints.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-6 border border-brand-blue/10">
                  <point.icon className="text-brand-blue" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl mb-3 text-gray-900">{t(point.titleKey)}</h3>
                <p className="font-body text-gray-600 font-normal leading-relaxed">
                  {t(point.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};