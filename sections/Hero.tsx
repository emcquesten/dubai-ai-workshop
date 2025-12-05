import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '../components/ui/MagneticButton';
import { ArrowDown, CheckCircle, Zap, TrendingUp, Send, Sparkles } from 'lucide-react';

// Sample lead messages for the interactive demo
const SAMPLE_MESSAGES = [
  "Hi, I'm interested in Marina Heights",
  "Looking for 2BR in Downtown Dubai",
  "What's available in Palm Jumeirah?",
];

// AI responses based on keywords - professional Dubai real estate agent tone
const generateAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('marina') || lowerMessage.includes('heights')) {
    return "Thank you for your interest in Marina Heights. To best assist you, may I ask - are you looking for an investment property or a primary residence? I'll prepare details tailored to your specific needs.";
  } else if (lowerMessage.includes('downtown')) {
    return "Excellent choice. Downtown Dubai continues to see strong demand. What budget range are you working with? And would this be for immediate occupancy or investment purposes?";
  } else if (lowerMessage.includes('palm') || lowerMessage.includes('jumeirah')) {
    return "Palm Jumeirah offers some of our most exclusive properties. Are you interested in apartments or villas? And what timeline are you considering for your purchase?";
  } else if (lowerMessage.includes('2br') || lowerMessage.includes('bedroom')) {
    return "Two-bedroom units are in high demand right now. Which area of Dubai are you considering? And what matters most to you - the view, building amenities, or proximity to specific locations?";
  } else {
    return "Thank you for reaching out. I'd be happy to help you find the right property. What area of Dubai interests you, and are you looking for an investment opportunity or a residence?";
  }
};

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Interactive AI Demo state
  const [userMessage, setUserMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  // Parallax scroll
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 500], [0, 150]);
  const blob2Y = useTransform(scrollY, [0, 500], [0, -100]);
  const blob3Y = useTransform(scrollY, [0, 500], [0, 75]);

  // Detect mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cycle through placeholder messages
  useEffect(() => {
    if (showDemo) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % SAMPLE_MESSAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showDemo]);

  // Disable animations on mobile or if user prefers reduced motion
  const skipAnimations = shouldReduceMotion || isMobile;

  // Handle AI response with typewriter effect
  const triggerAIResponse = (message: string) => {
    if (!message.trim()) return;

    setIsTyping(true);
    setAiResponse('');

    // Simulate thinking delay
    setTimeout(() => {
      const fullResponse = generateAIResponse(message);
      let currentIndex = 0;

      typingRef.current = setInterval(() => {
        if (currentIndex < fullResponse.length) {
          setAiResponse(fullResponse.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (typingRef.current) clearInterval(typingRef.current);
          setIsTyping(false);
        }
      }, 20);
    }, 800);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (userMessage.trim()) {
      setShowDemo(true);
      triggerAIResponse(userMessage);
    }
  };

  const handleTryAgain = () => {
    setUserMessage('');
    setAiResponse('');
    setShowDemo(false);
    setIsTyping(false);
    if (typingRef.current) clearInterval(typingRef.current);
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-48 pb-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft gradient blobs with parallax */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-[700px] h-[700px] bg-brand-blue/8 blur-[140px] rounded-full"
          style={{ y: skipAnimations ? 0 : blob1Y }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-blue-400/6 blur-[130px] rounded-full"
          style={{ y: skipAnimations ? 0 : blob2Y }}
        />
        <motion.div
          className="absolute top-[50%] right-[40%] w-[500px] h-[500px] bg-brand-coral/4 blur-[120px] rounded-full"
          style={{ y: skipAnimations ? 0 : blob3Y }}
        />

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
              initial={skipAnimations ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={skipAnimations ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 backdrop-blur-sm mb-6 hover:bg-brand-blue/10 transition-colors"
            >
              <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                AI Workshop for Dubai Real Estate Agents
              </span>
            </motion.div>

            <motion.h1
              initial={skipAnimations ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={skipAnimations ? { duration: 0 } : { duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-sans text-4xl md:text-5xl leading-[1.15] font-bold tracking-tight mb-6 text-gray-900"
            >
              Stop chasing leads that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-600 to-brand-blue">
                never respond.
              </span>
            </motion.h1>

            <motion.p
              initial={skipAnimations ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={skipAnimations ? { duration: 0 } : { duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 mb-4 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Learn how to build an AI-powered lead system that replies instantly, qualifies automatically, and finds the buyers who are actually serious.
            </motion.p>

            <motion.div
              initial={skipAnimations ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={skipAnimations ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-12"
            >
              <MagneticButton
                onClick={scrollToWaitlist}
                magneticStrength={0.1}
                className="md:text-lg px-10 py-5 bg-brand-blue text-white hover:bg-blue-700 shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/25 transition-all rounded-lg font-medium inline-flex items-center justify-center"
              >
                Get on the Waitlist
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column - Interactive AI Demo */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={skipAnimations ? { duration: 0 } : { duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl blur-2xl opacity-20"></div>

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 space-y-6">
                {/* Header with sparkle indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-coral" />
                    <span className="text-sm font-bold text-gray-900">Try it yourself</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs text-gray-500">AI Active</span>
                  </div>
                </div>

                {/* Interactive Demo Area */}
                <div className="space-y-4">
                  {/* User Input Section */}
                  <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Your Lead Message</span>
                    </div>

                    {!showDemo ? (
                      <form onSubmit={handleSubmitMessage} className="space-y-2">
                        <div className="relative">
                          <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            placeholder={SAMPLE_MESSAGES[placeholderIndex]}
                            className="w-full px-4 py-3 pr-12 bg-white border-2 border-brand-blue/20 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                          />
                          <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                          >
                            <Send size={14} />
                          </button>
                        </div>
                        {/* Pulsing hint - below input */}
                        <motion.div
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-xs text-brand-blue font-medium flex items-center gap-1"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-brand-coral rounded-full"></span>
                          Type a message to see AI in action
                        </motion.div>
                      </form>
                    ) : (
                      <div className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 text-sm">
                        "{userMessage}"
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowDown className={`text-brand-blue ${showDemo ? 'animate-none' : 'animate-bounce'}`} size={24} />
                  </div>

                  {/* AI Response Section */}
                  <div className={`bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl p-5 text-white shadow-lg transition-all ${showDemo ? 'ring-2 ring-green-400/50' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${showDemo ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]' : 'bg-white/50'}`}></div>
                      <span className="text-xs uppercase tracking-widest font-bold">
                        {isTyping ? 'AI is typing...' : 'Instant AI Response'}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed min-h-[6rem]">
                      {showDemo ? (
                        <>
                          {aiResponse}
                          {isTyping && <span className="animate-pulse">|</span>}
                        </>
                      ) : (
                        <span className="text-white/70 italic">Watch the AI respond to your message...</span>
                      )}
                    </p>
                  </div>

                  {/* Try Again Button */}
                  {showDemo && !isTyping && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={handleTryAgain}
                      className="w-full py-2 text-sm text-brand-blue font-medium hover:text-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>↻</span> Try another message
                    </motion.button>
                  )}

                  {/* Result Preview */}
                  <div className={`bg-gradient-to-r from-green-50 to-white border-2 border-green-200 rounded-2xl p-5 transition-all ${showDemo && !isTyping ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-sm font-bold text-gray-900">
                        {showDemo && !isTyping ? 'Lead qualified & ready for follow-up!' : 'Hot Lead Ready for Call - AED 2.8M Budget'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats - Bottom Strip */}
        <motion.div
          initial={skipAnimations ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={skipAnimations ? { duration: 0 } : { duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-20 pt-10 border-t border-gray-100 max-w-4xl mx-auto"
        >
          {/* Context headline */}
          <div className="text-center mb-10">
            <p className="text-lg text-gray-600 font-medium">
              In this workshop, you'll build a system that can:
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </motion.div>
      </div>

    </section >
  );
};