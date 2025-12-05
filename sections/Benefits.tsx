import React, { useEffect, useRef } from 'react';
import { Section } from '../components/ui/Section';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Get 15+ hours back every week",
  "Stop wasting money on leads that go nowhere",
  "Reply to people instantly, even when you're asleep",
  "Know who's serious before you ever call them",
  "Keep that personal touch, without burning out",
  "Finally feel like you're ahead, not behind"
];

export const Benefits: React.FC = () => {
  const { t } = useTranslation();

  const benefitKeys = [
    'benefits.benefit1',
    'benefits.benefit2',
    'benefits.benefit3',
    'benefits.benefit4',
    'benefits.benefit5',
    'benefits.benefit6'
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const benefitsListRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const benefitsList = benefitsListRef.current;
    const cardContainer = cardContainerRef.current;
    const decor = decorRef.current;

    if (!section || !background || !content || !heading || !benefitsList || !cardContainer || !decor) return;

    const ctx = gsap.context(() => {
      // Main timeline for the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        }
      });

      // Background wipe reveal with clip-path
      tl.fromTo(background,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          opacity: 0
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        }
      );

      // Decorative elements parallax float in
      tl.fromTo(decor.children,
        { y: 100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 0.08, scale: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      // Content fade-in timeline (starts after background is partially revealed)
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 10%",
          scrub: 0.5,
        }
      });

      // Heading slides in from left with rotation
      contentTl.fromTo(heading,
        { x: -100, opacity: 0, rotateY: 15 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1, ease: "power3.out" }
      );

      // Benefits list items stagger in
      contentTl.fromTo(benefitsList.children,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      // Card container scales up and floats in
      contentTl.fromTo(cardContainer,
        { scale: 0.85, opacity: 0, y: 60 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );

      // Parallax effect on decorative blurs while scrolling through section
      gsap.to(decor.children[0], {
        y: -50,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(decor.children[1], {
        y: 30,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="benefits" className="relative overflow-hidden bg-white">
      <div ref={sectionRef} className="relative">
        {/* Animated blue background that wipes in */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-blue-700"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        />

        {/* Decorative elements with parallax */}
        <div ref={decorRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] opacity-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-0" />
        </div>

        <div ref={contentRef} className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            <div className="flex-1 space-y-10">
              <div ref={headingRef} style={{ opacity: 0 }}>
                <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                  {t('benefits.title')}
                </h2>
                <p className="text-lg text-blue-100 font-normal max-w-md leading-relaxed">
                  {t('benefits.subtitle')}
                </p>
              </div>

              <div ref={benefitsListRef} className="space-y-5">
                {benefitKeys.map((key, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-default"
                    style={{ opacity: 0 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-lg text-white font-normal group-hover:font-medium transition-all">
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={cardContainerRef}
              className="flex-1 w-full relative"
              style={{ opacity: 0 }}
            >
              {/* Abstract Visual Representation of "Flow" */}
              <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 md:p-12 flex flex-col justify-center shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-coral/20 blur-[60px] rounded-full" />

                <div className="relative z-10 space-y-6 sm:space-y-8">
                  {/* Card 1 */}
                  <div className="bg-white/90 backdrop-blur-md border border-white/40 p-4 sm:p-6 rounded-2xl w-full sm:w-3/4 transform transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex items-center gap-3 mb-3 opacity-60">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold">{t('hero.newLeadDetected')}</div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="rotate-90 text-white/60 animate-pulse" />
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gradient-to-br from-white via-white to-blue-50 backdrop-blur-md border border-white/60 p-4 sm:p-6 rounded-2xl w-full sm:w-3/4 ml-auto shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-blue font-semibold">{t('hero.aiAgentReply')}</div>
                    </div>
                    <div className="text-sm text-gray-700 font-normal italic leading-relaxed">
                      {t('hero.staticDemoMessage')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};