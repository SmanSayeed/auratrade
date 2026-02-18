
import React from 'react';

export const Registration: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="bg-[#F2F3F5] dark:bg-brand-dark/30 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 flex flex-col items-center gap-12 relative overflow-hidden">

          <div className="w-full max-w-2xl flex items-center justify-center flex-col text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-black dark:text-white mb-4 tracking-tight">
              Open your account <span className="gold-gradient-text">with AuraTrade</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-10 max-w-lg">
              Enjoy the advantages of an award-winning platform and elevate your trades to the next level.
            </p>

            <form className="space-y-5 w-full max-w-md text-left">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500">Full name</label>
                <input type="text" placeholder="Full name" className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-lg px-4 py-4 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500">Email</label>
                <input type="email" placeholder="Email" className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-lg px-4 py-4 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500">Phone</label>
                <div className="flex gap-2">
                  <div className="bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-lg px-4 py-4 flex items-center gap-2 cursor-pointer">
                    <span className="text-lg">🇧🇩</span>
                    <span className="text-xs font-bold">+880</span>
                    <span className="text-[8px] opacity-40">▼</span>
                  </div>
                  <input type="tel" placeholder="Phone" className="flex-grow bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-lg px-4 py-4 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500">Password</label>
                <div className="relative">
                  <input type="password" placeholder="Password" className="w-full bg-white dark:bg-brand-black/50 border border-brand-black/10 dark:border-brand-border rounded-lg px-4 py-4 text-brand-black dark:text-white focus:outline-none focus:border-brand-gold" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">👁️</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 accent-brand-gold" id="terms" />
                <label htmlFor="terms" className="text-[10px] text-gray-500 leading-normal">
                  By creating an account, you agree to our <a href="#" className="underline">Terms & Conditions</a>, our <a href="#" className="underline">Privacy Policy</a> and to receive email marketing materials - you can opt out at any time.
                </label>
              </div>

              <button className="w-full bg-[#D1D1D1] dark:bg-brand-light/20 text-brand-black dark:text-white font-bold py-4 rounded-lg cursor-not-allowed">
                Sign me up!
              </button>

            </form>
          </div>


        </div>
      </div>
    </section>
  );
};
