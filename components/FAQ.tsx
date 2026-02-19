
import React, { useState } from 'react';

const QUESTIONS = [
  { q: "How Do I Open An Account With AuraTrade?", a: "Simply visit our registration page, fill out your details, and start trading instantly after a quick verification process." },
  { q: "What types of assets can I trade on AuraTrade?", a: "You can trade over 600+ assets including major and minor Forex pairs, Cryptocurrencies, Stocks, Commodities, and Indices." },
  { q: "Are my funds safe with AuraTrade?", a: "Yes, we use bank-grade encryption, 2FA, and store the majority of digital assets in secure cold storage to ensure maximum safety." },
  { q: "Can I trade from my mobile device?", a: "Absolutely! AuraTrade offers a fully responsive mobile web app and dedicated iOS/Android apps for trading on the go." },
  { q: "What support can I expect as a beginner trader?", a: "Beginners have access to our Aura Academy, dedicated account managers, and 24/7 live chat support to guide them." },
  { q: "How can I withdraw my profits?", a: "Withdrawals are processed within 24 hours. You can withdraw via bank transfer, credit cards, or supported cryptocurrencies." }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="section-heading text-brand-black dark:text-white mb-4">Frequently Asked <span className="gold-gradient-text">Questions</span></h2>
        <p className="sub-heading text-gray-500 mb-16">Hey there! Got questions? We've got answers. Check out our FAQ page for all the deets.</p>

        <div className="max-w-3xl mx-auto space-y-0">
          {QUESTIONS.map((item, idx) => (
            <div key={idx} className="border-b border-brand-black/5 dark:border-brand-border/40 group">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between py-8 px-2 text-left transition-all duration-300 hover:pl-4"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm font-medium text-brand-gold">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-lg md:text-xl font-bold text-brand-black dark:text-white group-hover:text-brand-gold transition-colors">{item.q}</span>
                </div>
                <div className={`w-8 h-8 rounded-full border border-brand-black/10 dark:border-brand-border/40 flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'rotate-45' : ''}`}>
                  <span className="text-xl font-light text-brand-black dark:text-white leading-none">+</span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-96 pb-10' : 'max-h-0'}`}
              >
                <p className="pl-16 pr-8 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
