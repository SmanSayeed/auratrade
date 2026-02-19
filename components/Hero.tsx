
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-6 md:pt-12 md:pb-12 bg-brand-light dark:bg-brand-black">
      {/* Background Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30 dark:opacity-50 overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-brand-gold/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-12 relative">
          <div className="animate-float">
            <img
              src="/Frame-397201.webp"
              alt="Trading Devices"
              className="w-full max-w-2xl drop-shadow-2xl"
            />
          </div>
        </div>

        <h1 className="hero-title mb-6 text-brand-black dark:text-white leading-tight">
          AuraTrade is Your Gateway <br className="hidden md:block" />
          To <span className="gold-gradient-text">Advanced Trading!</span>
        </h1>

        <p className="sub-heading mb-10 mx-auto max-w-4xl text-gray-600 dark:text-gray-400">
          AuraTrade empowers traders with state-of-the-art technology and deep market insight to help you succeed in the fast-paced world of trading. Dive into a seamless trading experience tailored to meet your investment goals.
        </p>

        <button className="bg-brand-gold text-brand-black px-12 py-5 rounded-lg btn-text font-bold hover:brightness-110 transition-all mb-16 shadow-xl shadow-brand-gold/20 scale-105">
          Start Trading Now
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-brand-black/10 dark:border-brand-border/30 pt-16">
          <div className="flex flex-col items-center">
            <span className="text-green-400 text-2xl mb-4">✦</span>
            <h4 className="font-bold mb-2 text-brand-black dark:text-white uppercase tracking-wider text-sm">Live Support</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">Rely on Our Dedicated Team Ready to Assist You When You Need It.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-400 text-2xl mb-4">✦</span>
            <h4 className="font-bold mb-2 text-brand-black dark:text-white uppercase tracking-wider text-sm">Cutting-Edge Technology</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">Leverage Innovative Tools and Advanced Technology for Smarter Trading Decisions.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-brand-gold text-2xl mb-4">✦</span>
            <h4 className="font-bold mb-2 text-brand-black dark:text-white uppercase tracking-wider text-sm">600+ Tradable Assets</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">Explore A Diverse Range Of Assets Across Global Markets.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
