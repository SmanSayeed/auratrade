
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
    <section className="py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="section-heading text-brand-black dark:text-white mb-4">Frequently Asked <span className="gold-gradient-text">Questions</span></h2>
        <p className="sub-heading text-gray-500 mb-16">Hey there! Got questions? We've got answers. Check out our FAQ page for all the deets.</p>
        
        <div className="space-y-4">
          {QUESTIONS.map((item, idx) => (
            <div key={idx} className={`rounded-xl overflow-hidden transition-all ${openIdx === idx ? 'bg-[#E5F9E7] dark:bg-brand-gold/10' : 'bg-[#F2F3F5] dark:bg-brand-dark'}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-bold opacity-60">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-lg font-bold text-brand-black dark:text-white">{item.q}</span>
                </div>
                <span className="text-2xl font-bold">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-16 pb-8 pt-0 text-left text-sm text-gray-600 dark:text-gray-400">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
