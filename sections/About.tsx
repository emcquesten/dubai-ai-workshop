import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
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
                <p className="text-white font-bold text-xl">Eric McQuesten</p>
                <p className="text-gray-200 text-sm">Founder, FutureProofed</p>
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
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-blue">Who's running this?</h2>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
              Hey, I'm Eric.
            </h3>

            <div className="space-y-5 text-gray-600 text-base font-normal leading-relaxed">
              <p>
                I've spent the last few years building AI and automation systems for businesses: sales teams, operations, customer service. I've seen what works and what doesn't.
              </p>
              <p>
                When I started paying attention to Dubai real estate, I kept seeing the same thing: really talented agents drowning in admin work, barely keeping up with leads, and using tools their brokerages never taught them how to use properly.
              </p>
              <p>
                Most agents I've talked to tell me they want to automate but don't know where to start. That's why I put this workshop together to actually show you how, step by step, in a way that makes sense.
              </p>
              <p>
                No fluff. No theory. You'll leave with something that works.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};