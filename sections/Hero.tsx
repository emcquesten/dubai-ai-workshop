import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ArrowDown, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import { BrandStar } from '../components/BrandStar';

const AI_MESSAGE = "Hi Sara, thanks for your interest in Marina Heights. Quick question: are you looking for investment or a primary residence? I'll send details tailored to your needs.";

export const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [hasTyped, setHasTyped] = useState(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering && !hasTyped) {
      let currentIndex = 0;
      setDisplayedText('');

      typingRef.current = setInterval(() => {
        if (currentIndex < AI_MESSAGE.length) {
          setDisplayedText(AI_MESSAGE.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (typingRef.current) clearInterval(typingRef.current);
          setHasTyped(true);
        }
      }, 25); // typing speed in ms
    }

    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, [isHovering, hasTyped]);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-48 pb-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft gradient blobs */}
        <div className="absolute top-[20%] right-[15%] w-[700px] h-[700px] bg-brand-blue/8 blur-[140px] rounded-full animate-blob" />
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-blue-400/6 blur-[130px] rounded-full animate-blob animation-delay-2000" />
        <div className="absolute top-[50%] right-[40%] w-[500px] h-[500px] bg-brand-coral/4 blur-[120px] rounded-full animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(#002FB8 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 backdrop-blur-sm mb-6 hover:bg-brand-blue/10 transition-colors"
            >
              <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                AI Workshop for Dubai Real Estate Agents
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-sans text-4xl md:text-5xl leading-[1.15] font-bold tracking-tight mb-6 text-gray-900"
            >
              Stop chasing leads that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-600 to-brand-blue">
                never respond.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 mb-4 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Learn how to build an AI-powered lead system that replies instantly, qualifies automatically, and finds the buyers who are actually serious.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-sm text-brand-blue font-semibold mb-10 max-w-lg mx-auto lg:mx-0"
            >
              For Dubai real estate agents who want faster follow-up, cleaner pipelines, and more closings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-12"
            >
              <Button
                onClick={scrollToWaitlist}
                className="md:text-lg px-10 py-5 !bg-brand-blue !text-white hover:!bg-blue-700 shadow-xl shadow-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/40 transition-all hover:scale-105 !rounded-lg"
              >
                Get on the Waitlist
              </Button>
            </motion.div>


          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl blur-2xl opacity-20"></div>

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 space-y-6">
                {/* Workflow visualization */}
                <div className="space-y-4">
                  {/* Step 1 - Lead Comes In */}
                  <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-5 transform transition-all hover:scale-[1.02] hover:shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400 animate-pulse"></div>
                      <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">2:47 AM - New Lead</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowDown className="text-brand-blue animate-pulse" size={24} />
                  </div>

                  {/* Step 2 - AI Responds */}
                  <div
                    className="bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl p-5 text-white shadow-lg transform transition-all hover:scale-[1.02] cursor-pointer"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                      <span className="text-xs uppercase tracking-widest font-bold">Instant AI Response</span>
                    </div>
                    <p className="text-sm leading-relaxed italic min-h-[4.5rem]">
                      "{hasTyped ? AI_MESSAGE : (displayedText || AI_MESSAGE)}"
                      {isHovering && !hasTyped && <span className="animate-pulse">|</span>}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowDown className="text-brand-blue animate-pulse" size={24} />
                  </div>

                  {/* Step 3 - Qualified Lead */}
                  <div className="bg-gradient-to-r from-green-50 to-white border-2 border-green-200 rounded-2xl p-5 transform transition-all hover:scale-[1.02]">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-sm font-bold text-gray-900">Hot Lead Ready for Call - AED 2.8M Budget</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats - Bottom Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-green-500" size={24} />
              <span className="text-3xl font-bold text-gray-900">24/7</span>
            </div>
            <p className="text-base text-gray-600 font-medium">Respond instantly, even while you sleep</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-brand-coral" size={24} />
              <span className="text-3xl font-bold text-gray-900">5+ Hrs</span>
            </div>
            <p className="text-base text-gray-600 font-medium">Saved every day on manual texting</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-brand-blue" size={24} />
              <span className="text-3xl font-bold text-gray-900">2x</span>
            </div>
            <p className="text-base text-gray-600 font-medium">Increase conversions by fixing follow-up</p>
          </div>
        </motion.div>
      </div>

    </section >
  );
};