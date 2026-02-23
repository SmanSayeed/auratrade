
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Advanced Analytics',
    desc: 'Cutting-edge tools to analyze trends and market dynamics with real-time precision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Risk Management',
    desc: 'Robust tools to safeguard your investments with stop-loss orders and position sizing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Intuitive Interface',
    desc: 'Navigate our platform effortlessly — designed for beginners and professionals alike.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" />
        <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Full Customization',
    desc: 'Tailor your trading environment with customizable charts, dashboards, and alerts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" strokeLinecap="round" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" />
      </svg>
    )
  }
];

export const Features: React.FC = () => {
  return (
    <section className="section-pad bg-white dark:bg-brand-black transition-colors duration-300 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(243,186,47,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end mb-14">
          <div className="flex-1">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Why AuraTrade</p>
            <h2 className="section-heading text-brand-black dark:text-white">
              Our Key <span className="gold-gradient-text">Features</span>
            </h2>
          </div>
          <p className="sub-heading text-gray-500 dark:text-gray-400 max-w-md flex-1">
            Discover why thousands of traders choose AuraTrade for their investment journey every day.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_LIST.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-2xl border border-gray-100 dark:border-brand-border/40 bg-gray-50/60 dark:bg-brand-dark/40 hover:border-brand-gold/40 hover:bg-white dark:hover:bg-brand-dark/70 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-black dark:bg-white/5 border border-brand-border/20 dark:border-brand-border/40 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="other-heading text-brand-black dark:text-white mb-3 group-hover:text-brand-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
