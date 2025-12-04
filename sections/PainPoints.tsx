import React from 'react';
import { Section } from '../components/ui/Section';
import { Mail, Clock, Users, Database, Zap, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const points = [
  {
    icon: Mail,
    title: "Too many leads, not enough buyers",
    description: "You already know the drill. Most of the people reaching out aren't serious. Fake numbers, tire-kickers, people just browsing. It's exhausting."
  },
  {
    icon: Search,
    title: "Qualifying takes forever",
    description: "You spend hours every evening trying to figure out who's real and who's not. By the time you get to the good ones, you're already burnt out."
  },
  {
    icon: Clock,
    title: "People expect instant replies",
    description: "Someone reaches out at 11pm and by morning they've already talked to three other agents. Speed matters, but you can't be on 24/7."
  },
  {
    icon: Users,
    title: "Personal touch doesn't scale",
    description: "Every buyer expects you to remember their name, their preferences, their timeline. That's hard when you're juggling 50 conversations a day."
  },
  {
    icon: Database,
    title: "Nobody taught you this stuff",
    description: "Your brokerage showed you how to close deals, not how to set up automations or use AI. So you're figuring it out as you go."
  },
  {
    icon: Zap,
    title: "Other agents are moving faster",
    description: "Some of your competitors are already using these tools. They're responding quicker, qualifying faster, and closing more. You can feel it."
  }
];

export const PainPoints: React.FC = () => {
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
            You can close. Your systems can't keep up.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg font-normal"
          >
            You've got the skills. You've closed the deals. But the lead volume has outpaced what any agent can handle manually. These are the problems everyone's dealing with.
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
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-brand-blue/10 group-hover:border-brand-blue/30">
                  <point.icon className="text-brand-blue" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl mb-3 text-gray-900 group-hover:text-brand-blue transition-colors">{point.title}</h3>
                <p className="font-body text-gray-600 font-normal leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};