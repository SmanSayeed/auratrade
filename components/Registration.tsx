
import React from 'react';

export const Registration: React.FC = () => {
  return (
    <section className="py-6 md:py-12 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="bg-[#F2F3F5] dark:bg-brand-dark/30 rounded-[2rem] md:rounded-[3rem] p-6 py-12 md:p-12 lg:p-20 flex flex-col items-center gap-10 relative overflow-hidden">

          <div className="w-full max-w-2xl flex items-center justify-center flex-col text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-black dark:text-white mb-4 tracking-tight">
              Open your account <span className="gold-gradient-text">with AuraTrade</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-[13px] md:text-base mb-8 max-w-lg">
              Enjoy the advantages of an award-winning platform and elevate your trades to the next level.
            </p>

            <form className="space-y-4 w-full max-w-md text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full name</label>
                <input type="text" placeholder="Full name" className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-5 py-3.5 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email address</label>
                <input type="email" placeholder="Email" className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-5 py-3.5 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone number</label>
                <div className="flex gap-2">
                  <div className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-4 py-3.5 flex items-center gap-2 cursor-pointer hover:border-brand-gold transition-colors">
                    <span className="text-lg">🇧🇩</span>
                    <span className="text-xs font-bold">+880</span>
                    <span className="text-[8px] opacity-40">▼</span>
                  </div>
                  <input type="tel" placeholder="Phone" className="flex-grow bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-5 py-3.5 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Secure Password</label>
                <div className="relative">
                  <input type="password" placeholder="Password" className="w-full bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-xl px-5 py-3.5 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer p-2 hover:text-brand-gold transition-colors">👁️</span>
                </div>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded accent-brand-gold cursor-pointer" id="terms" />
                <label htmlFor="terms" className="text-[10px] text-gray-500 leading-normal cursor-pointer select-none">
                  By creating an account, you agree to our <a href="#" className="underline hover:text-brand-gold transition-colors">Terms & Conditions</a>, our <a href="#" className="underline hover:text-brand-gold transition-colors">Privacy Policy</a>.
                </label>
              </div>

              <button className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-xl shadow-lg shadow-brand-gold/10 hover:brightness-110 active:scale-[0.98] transition-all">
                Create My Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
