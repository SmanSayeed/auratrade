
import React from 'react';

export const Registration: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="bg-[#F2F3F5] dark:bg-brand-dark/30 rounded-[2rem] md:rounded-[3rem] p-4 py-10 md:p-12 lg:p-20 flex flex-col items-center gap-8 relative overflow-hidden">

          <div className="w-full max-w-2xl flex items-center justify-center flex-col text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center leading-[1.2] text-brand-black dark:text-white mb-4">
              Open your account <span className="gold-gradient-text">with AuraTrade</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium max-w-lg mb-8">
              Enjoy the advantages of an award-winning platform and elevate your trades to the next level.
            </p>

            <form className="space-y-3.5 w-full max-w-md text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full name</label>
                <input type="text" placeholder="Full name" className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-4 py-3 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email address</label>
                <input type="email" placeholder="Email" className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-4 py-3 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone number</label>
                <div className="flex flex-1 gap-2 min-w-0">
                  <div className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-3 md:px-4 py-3 flex items-center gap-1.5 cursor-pointer hover:border-brand-gold transition-colors shrink-0">
                    <span className="text-base md:text-lg">🇧🇩</span>
                    <span className="text-[10px] md:text-xs font-bold">+880</span>
                    <span className="text-[8px] opacity-40">▼</span>
                  </div>
                  <input type="tel" placeholder="Phone" className="flex-grow min-w-0 bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-4 py-3 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Secure Password</label>
                <div className="relative">
                  <input type="password" placeholder="Password" className="w-full bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-4 py-3 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer p-2 hover:text-brand-gold transition-colors">👁️</span>
                </div>
              </div>

              <div className="flex items-start gap-3 py-1">
                <input type="checkbox" className="mt-1 w-3.5 h-3.5 rounded accent-brand-gold cursor-pointer" id="terms" />
                <label htmlFor="terms" className="text-[10px] text-gray-500 leading-normal cursor-pointer select-none">
                  By creating an account, you agree to our <a href="#" className="underline hover:text-brand-gold transition-colors">Terms & Conditions</a>, our <a href="#" className="underline hover:text-brand-gold transition-colors">Privacy Policy</a>.
                </label>
              </div>

              <button className="w-full bg-brand-gold text-brand-black px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-brand-gold/20 hover:scale-105 active:scale-95">
                Create My Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
