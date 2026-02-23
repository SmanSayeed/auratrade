
import React, { useState } from 'react';

const FAQ_CATEGORIES = [
  { id: 'general', label: 'General' },
  { id: 'trading', label: 'Trading' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'security', label: 'Security' },
];

const ALL_QUESTIONS: { category: string; q: string; a: string }[] = [
  {
    category: 'general',
    q: 'What is AuraTrade?',
    a: 'AuraTrade is a professional-grade online trading platform offering access to 600+ assets including cryptocurrencies, forex, stocks, indices, and commodities — all within a single, intuitive interface.'
  },
  {
    category: 'general',
    q: 'How do I open an account with AuraTrade?',
    a: 'Simply visit our registration page, fill out your details, and start trading instantly after a quick identity verification process. The whole process takes under 5 minutes.'
  },
  {
    category: 'general',
    q: 'How can I withdraw my profits?',
    a: 'Withdrawals are processed within 24 hours. You can withdraw via bank transfer, credit cards, or supported cryptocurrencies directly from your dashboard.'
  },
  {
    category: 'trading',
    q: 'What types of assets can I trade on AuraTrade?',
    a: 'You can trade over 600+ assets including major and minor Forex pairs, Cryptocurrencies (BTC, ETH, SOL & more), Stocks, Commodities (Gold, Oil), and Global Indices.'
  },
  {
    category: 'trading',
    q: 'Does AuraTrade offer leverage trading?',
    a: 'Yes, AuraTrade offers leverage trading up to 1:500 on select instruments. Leverage amplifies both gains and losses — please use risk management tools and read our risk disclosure.'
  },
  {
    category: 'trading',
    q: 'What is the minimum deposit to start trading?',
    a: 'You can start trading with as little as $100. We offer multiple account types to suit different trading styles and experience levels.'
  },
  {
    category: 'accounts',
    q: 'What account types does AuraTrade offer?',
    a: 'We offer Standard, Pro, and VIP account tiers. Each offers progressively tighter spreads, dedicated account managers, and exclusive trading tools.'
  },
  {
    category: 'accounts',
    q: 'Can I have multiple trading accounts?',
    a: 'Yes, you can open and manage multiple trading accounts from one profile — useful for separating different trading strategies or asset classes.'
  },
  {
    category: 'security',
    q: 'Are my funds safe with AuraTrade?',
    a: 'Absolutely. We use bank-grade 256-bit SSL encryption, 2-factor authentication (2FA), and segregated client accounts. The majority of digital assets are stored in cold storage.'
  },
  {
    category: 'security',
    q: 'Can I trade from my mobile device?',
    a: 'Yes! AuraTrade offers a fully optimized mobile web app, plus dedicated iOS and Android apps with biometric login, push price alerts, and the full suite of trading tools.'
  },
];

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = ALL_QUESTIONS.filter(q => q.category === activeCategory);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIdx(0);
  };

  return (
    <section className="section-pad bg-gray-50 dark:bg-[#0D1018] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Intro + Category Tabs ── */}
          <div className="lg:sticky lg:top-24">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="section-heading text-brand-black dark:text-white mb-5">
              Got <span className="gold-gradient-text">Questions?</span>
              <br />We've Got Answers.
            </h2>
            <p className="sub-heading text-gray-500 dark:text-gray-400 mb-8">
              Find answers to the most common questions about trading, accounts, and security on AuraTrade.
            </p>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-[14px] font-medium transition-all ${activeCategory === cat.id
                      ? 'bg-brand-gold text-brand-black shadow-md shadow-brand-gold/25'
                      : 'bg-white dark:bg-brand-dark/60 border border-gray-100 dark:border-brand-border/40 text-gray-600 dark:text-gray-400 hover:border-brand-gold/40 hover:text-brand-gold'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="p-5 rounded-2xl border border-gray-100 dark:border-brand-border/40 bg-white dark:bg-brand-dark/40">
              <p className="text-[14px] font-semibold text-brand-black dark:text-white mb-1">Still have questions?</p>
              <p className="text-[13px] text-gray-400 mb-3">Our support team is available 24/7.</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-gold text-[14px] font-semibold hover:underline">
                Contact Support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Accordion ── */}
          <div>
            <div className="space-y-0">
              {filtered.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={`${activeCategory}-${idx}`}
                    className="border-b border-gray-200 dark:border-brand-border/40 first:border-t first:border-gray-200 first:dark:border-brand-border/40"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between py-5 text-left gap-6 group"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="text-[12px] font-bold text-brand-gold tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-[16px] font-600 leading-snug transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-black dark:text-white group-hover:text-brand-gold'}`}>
                          {item.q}
                        </span>
                      </div>
                      <div className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
                          ? 'border-brand-gold bg-brand-gold text-brand-black rotate-45'
                          : 'border-gray-200 dark:border-brand-border/50 text-gray-400 group-hover:border-brand-gold group-hover:text-brand-gold'
                        }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </button>

                    {/* Answer */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-56 pb-5' : 'max-h-0'}`}>
                      <p className="pl-10 pr-8 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
