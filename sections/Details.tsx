import React from 'react';
import { Section } from '../components/ui/Section';
import { Brain, Wrench, Layers, Lightbulb, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Details: React.FC = () => {
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
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">The Workshop</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            You'll actually build something.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column: The Teaser */}
          <div className="lg:col-span-6 space-y-10">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              This isn't a seminar where someone talks at you for five hours and you leave with a notebook full of ideas you'll never use. By the end of the day, you'll have a real thing that works: a lead qualification system connected to your CRM that you can use right away.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 shrink-0">
                  <Check size={14} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">We build it together</h4>
                  <p className="text-gray-600 text-sm">I show you how to set up the automation, step by step. You follow along. By the end, you own it.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 shrink-0">
                  <Check size={14} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Designed for how you actually work</h4>
                  <p className="text-gray-600 text-sm">Not some generic template. We'll set up flows for the kind of leads you get: investors, end-users, off-plan buyers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 shrink-0">
                  <Check size={14} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">You don't need to know how to code</h4>
                  <p className="text-gray-600 text-sm">If you can use Google Sheets, you can do this. The tools we use are visual. Just drag, drop, connect.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Outcomes */}
          <div className="lg:col-span-6 grid gap-4">
            {[
              { icon: Wrench, title: "Something that actually works", desc: "Walk out with a live system that qualifies and responds to leads on its own." },
              { icon: Brain, title: "A new way of thinking", desc: "You'll start seeing all the little tasks you can automate, not just lead follow-up." },
              { icon: Lightbulb, title: "Skills for the future", desc: "AI is changing how real estate works. You'll be the one who understands it, not the one scrambling to catch up." }
            ].map((item, idx) => (
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
                  <h4 className="text-lg text-gray-900 font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-600 font-normal text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};