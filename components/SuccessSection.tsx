
import React from 'react';

const SUPPORT_POINTS = [
  {
    title: 'Personalized support',
    desc: '24/7 access to dedicated account managers who understand your trading goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Quick response time',
    desc: 'Average response time under 2 minutes via live chat — we\'re always here.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Resource library & FAQs',
    desc: 'Comprehensive guides, video tutorials, and an extensive knowledge base.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export const SuccessSection: React.FC = () => {
  return (
    <section className="section-pad bg-white dark:bg-brand-black overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left: Text content ── */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Customer First</p>
            <h2 className="section-heading text-brand-black dark:text-white mb-5">
              Committed To <span className="gold-gradient-text">Your Success</span>
            </h2>
            <p className="sub-heading text-gray-500 dark:text-gray-400 mb-10">
              Our support goes beyond solving issues — we ensure every step of your trading journey is seamless and rewarding.
            </p>

            <div className="space-y-6 mb-10">
              {SUPPORT_POINTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-brand-black dark:text-white mb-1">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary px-8 py-3.5 rounded-xl shadow-md shadow-brand-gold/25">
              Contact Support
            </button>
          </div>

          {/* ── Right: Image ── */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-brand-gold/10 blur-[80px] rounded-full -z-10 scale-75" />
              <img
                src="/regulation_7.jpg"
                alt="Customer Success at AuraTrade"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl shadow-black/20 dark:shadow-black/60 object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -left-4 md:left-4 bg-white dark:bg-brand-dark border border-gray-100 dark:border-brand-border rounded-2xl p-4 shadow-xl shadow-black/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-400/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-brand-black dark:text-white">98.7% Satisfaction</div>
                    <div className="text-[11px] text-gray-400">from 2.1M+ traders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
