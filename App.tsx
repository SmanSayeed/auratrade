
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Platforms } from './components/Platforms';
import { SuccessSection } from './components/SuccessSection';
import { TradingServices } from './components/TradingServices';
import { AccountOptions } from './components/AccountOptions';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Initial sync
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 relative ${theme === 'dark' ? 'bg-brand-black text-[#EAECEF]' : 'bg-brand-light text-brand-black'}`}>
      {/* Global Background Accents */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className={`absolute top-0 left-0 w-full h-full opacity-40 ${theme === 'dark' ? 'bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.05),transparent_50%)]' : 'bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.03),transparent_50%)]'}`} />
      </div>

      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <Features />
        <Platforms />
        <SuccessSection />
        <TradingServices />
        {/* <AccountOptions /> */}
        <Reviews />
        <FAQ />
        <Blog />
        <Registration />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;
