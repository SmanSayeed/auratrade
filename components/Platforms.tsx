
import React from 'react';

const PLATFORMS = [
  {
    name: 'Web Platform',
    desc: 'Full-featured trading in your browser — no download needed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'iOS App',
    desc: 'Trade anywhere with our native iPhone and iPad app.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    name: 'Android App',
    desc: 'Full trading suite optimized for Android devices.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M5 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2" />
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <path d="M17 17h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2" />
      </svg>
    )
  },
  {
    name: 'AuraTrade Pro',
    desc: 'Advanced charting, algorithmic tools, and api access.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export const Platforms: React.FC = () => {
  return (
    <section className="section-pad bg-gray-50 dark:bg-[#0D1018] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Multi-Platform</p>
          <h2 className="section-heading text-brand-black dark:text-white mb-5">
            Versatile <span className="gold-gradient-text">Trading Platforms</span>
          </h2>
          <p className="sub-heading text-gray-500 dark:text-gray-400">
            AuraTrade provides you with the most advanced and flexible platforms to trade anytime, anywhere, on any device.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {PLATFORMS.map((platform, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-2xl border border-gray-100 dark:border-brand-border/40 bg-white dark:bg-brand-dark/40 hover:border-brand-gold/40 hover:shadow-lg hover:shadow-brand-gold/5 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-black dark:bg-white/5 border border-brand-border/20 dark:border-brand-border/30 flex items-center justify-center text-brand-gold mb-5 group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold transition-all duration-300">
                {platform.icon}
              </div>
              <h4 className="text-[16px] font-semibold text-brand-black dark:text-white mb-2 group-hover:text-brand-gold transition-colors">{platform.name}</h4>
              <p className="text-[13px] text-gray-400 leading-relaxed">{platform.desc}</p>
            </div>
          ))}
        </div>

        {/* App store badges + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary px-8 py-3.5 rounded-xl shadow-md shadow-brand-gold/20">
            Explore Our Platforms
          </button>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-10 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" alt="App Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-10 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" alt="Google Play" />
          </div>
        </div>
      </div>
    </section>
  );
};
