
import React from 'react';

const ACCOUNTS = [
  { name: 'Starter', min: '$500', leverage: '1:200', spread: '1.6 pip', bonus: '30%', color: '#9747FF' },
  { name: 'Basic', min: '$5000', leverage: '1:300', spread: '1.4 pip', bonus: '40%', discount: '50% DISCOUNT', color: '#F3BA2F' },
  { name: 'Standard', min: '$10000', leverage: '1:400', spread: '1 pip', bonus: '50%', featured: true, color: '#F3BA2F' },
  { name: 'Advanced', min: '$50000', leverage: '1:500', spread: '0.8 pip', bonus: '60%', color: '#00D1FF' },
  { name: 'Pro', min: '$250,000', leverage: '1:600', spread: '0.6 pip', bonus: '70%', color: '#1E2329' }
];

export const AccountOptions: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center leading-[1.2] text-brand-black dark:text-white mb-4">
            Account Options <span className="gold-gradient-text">To Suit Every Trader</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto text-center font-medium">Choose an account that fits your trading style and growth ambitions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20 md:gap-4 lg:gap-0 items-start pt-14">
          {ACCOUNTS.map((acc, idx) => (
            <div key={idx} className={`relative flex flex-col border-2 ${acc.featured ? 'z-10 shadow-2xl scale-105 border-brand-black dark:border-brand-gold' : 'border-brand-black/10 dark:border-brand-border'} bg-white dark:bg-brand-dark transition-all hover:translate-y-[-10px]`}>

              {/* Circle Header */}
              <div className="h-28 flex items-center justify-center relative -top-14">
                <div className="w-28 h-28 rounded-full border-8 border-white dark:border-brand-black bg-brand-black dark:bg-brand-dark flex flex-col items-center justify-center shadow-xl" style={{ borderColor: acc.color }}>
                  <span className="text-sm font-bold text-white uppercase tracking-tighter">{acc.name}</span>
                </div>
              </div>

              <div className="px-6 pb-10 -mt-10 text-center flex flex-col items-center">
                {acc.discount && <span className="text-[10px] font-bold text-brand-gold mb-4">{acc.discount}</span>}
                {acc.featured && <span className="text-[10px] font-bold text-brand-gold mb-4">MOST POPULAR</span>}

                <div className="space-y-4 w-full text-[11px] font-bold text-brand-black dark:text-gray-300 mb-10">
                  <div className="pb-2 border-b border-brand-black/5 dark:border-brand-border">Minimum Account Size: {acc.min}</div>
                  <div className="pb-2 border-b border-brand-black/5 dark:border-brand-border">Leverage: {acc.leverage}</div>
                  <div className="pb-2 border-b border-brand-black/5 dark:border-brand-border">Spread Starts from {acc.spread}</div>
                  <div className="pb-2 border-b border-brand-black/5 dark:border-brand-border">Bonus Up to {acc.bonus}</div>
                  <div className="pb-2 border-b border-brand-black/5 dark:border-brand-border">Dedicated Account Manager</div>
                  <div className="flex items-center gap-2 justify-center text-green-500"><span>✔</span> Market Analysis & Insights</div>
                </div>

                <button className="w-full bg-brand-black dark:bg-brand-light text-white dark:text-brand-black px-6 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all hover:bg-brand-gold active:scale-95">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
