
import React from 'react';

const SERVICES = [
  {
    title: 'Educational Resources',
    desc: 'Learn trading with our extensive guides, tutorials, and Aura Academy courses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Market Insights',
    desc: 'Stay ahead with real-time market updates, expert analyses, and daily signals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" />
        <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Account Management',
    desc: 'Get professional help managing your portfolio with dedicated account managers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Copy Trading',
    desc: 'Connect with top traders globally and automatically mirror their successful strategies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeLinecap="round" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Investment Protection',
    desc: 'Benefit from multi-layer fund safety, cold storage, and segregated client accounts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 12 11 14 15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: true
  },
  {
    title: 'Regulatory Compliance',
    desc: 'Trade confidently with our strict adherence to international regulatory standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" />
        <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" />
        <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" />
        <path d="M3 17a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4z" strokeLinecap="round" />
      </svg>
    )
  }
];

export const TradingServices: React.FC = () => {
  return (
    <section className="section-pad bg-brand-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #F3BA2F, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-end mb-14">
          <div className="flex-1">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="section-heading text-white">
              Comprehensive <span className="gold-gradient-text">Trading Services</span>
            </h2>
          </div>
          <p className="sub-heading text-gray-400 max-w-md flex-1">
            AuraTrade offers a full spectrum of services to enhance every aspect of your trading experience.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className={`group p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg ${service.highlight
                  ? 'bg-brand-gold/8 border-brand-gold/30 hover:bg-brand-gold/12 hover:border-brand-gold/50'
                  : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.07] hover:border-brand-gold/20'
                }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${service.highlight
                  ? 'bg-brand-gold/20 text-brand-gold'
                  : 'bg-white/5 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold'
                }`}>
                {service.icon}
              </div>
              <h4 className="other-heading text-white mb-3 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h4>
              <p className="text-[14px] text-gray-400 leading-relaxed">
                {service.desc}
              </p>
              {service.highlight && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-brand-gold text-[12px] font-semibold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  Featured Service
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
