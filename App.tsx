import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StickyNav } from './components/StickyNav';
import { Hero } from './sections/Hero';
import { PainPoints } from './sections/PainPoints';
import { Benefits } from './sections/Benefits';
import { Details } from './sections/Details';
import { About } from './sections/About';
import { Philosophy } from './sections/Philosophy';
import { WaitlistForm } from './sections/WaitlistForm';
import { Footer } from './sections/Footer';
import { Privacy } from './sections/Privacy';
import { Terms } from './sections/Terms';

function HomePage() {
  useEffect(() => {
    // Handle hash navigation after page load
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="bg-background text-primary selection:bg-brand-blue/20 selection:text-primary overflow-x-hidden font-body relative">
      {/* Global noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      <Navbar />
      <StickyNav />
      <main>
        <Hero />
        <PainPoints />
        <Benefits />
        <Details />
        <About />
        <Philosophy />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;