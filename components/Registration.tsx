
import React from 'react';

export const Registration: React.FC = () => {
  return (
    <section className="section-pad bg-brand-black text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #F3BA2F, transparent 65%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 65%)' }} />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Benefits */}
            <div>
              <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="section-heading text-white mb-5">
                Open Your Account <span className="gold-gradient-text">Today</span>
              </h2>
              <p className="sub-heading text-gray-400 mb-10">
                Enjoy the advantages of an award-winning platform and elevate your trades to the next level.
              </p>

              <div className="space-y-5">
                {[
                  { title: 'Start with as little as $100', desc: 'Accessible trading for everyone — beginners to professionals.' },
                  { title: 'Trade 600+ assets', desc: 'Crypto, Forex, Stocks, Indices, and Commodities all in one place.' },
                  { title: 'Regulated & secure', desc: 'Bank-grade security, 2FA, and FCA-licensed operations.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-7 h-7 shrink-0 rounded-full bg-brand-gold flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-white">{item.title}</div>
                      <div className="text-[13px] text-gray-400 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white dark:bg-[#0F1217] border border-gray-100 dark:border-brand-border/50 rounded-2xl p-7 md:p-8">
              <h3 className="text-[22px] font-bold text-brand-black dark:text-white mb-6">Create Free Account</h3>

              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-gray-50 dark:bg-brand-black/60 border border-gray-200 dark:border-brand-border rounded-xl px-4 py-3 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all text-[14px]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    className="w-full bg-gray-50 dark:bg-brand-black/60 border border-gray-200 dark:border-brand-border rounded-xl px-4 py-3 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all text-[14px]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Phone Number</label>
                  <div className="flex gap-2">
                    <div className="bg-gray-50 dark:bg-brand-black/60 border border-gray-200 dark:border-brand-border rounded-xl px-3 py-3 flex items-center gap-1.5 cursor-pointer hover:border-brand-gold/40 transition-colors shrink-0">
                      <span className="text-base">🇧🇩</span>
                      <span className="text-[12px] font-semibold text-brand-black dark:text-white">+880</span>
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="flex-grow bg-gray-50 dark:bg-brand-black/60 border border-gray-200 dark:border-brand-border rounded-xl px-4 py-3 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all text-[14px]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Min. 8 characters"
                      className="w-full bg-gray-50 dark:bg-brand-black/60 border border-gray-200 dark:border-brand-border rounded-xl px-4 py-3 pr-12 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all text-[14px]"
                    />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-gold p-1 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 py-1">
                  <input type="checkbox" id="terms" className="mt-1 w-3.5 h-3.5 rounded accent-brand-gold cursor-pointer" />
                  <label htmlFor="terms" className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed cursor-pointer">
                    I agree to the <a href="#" className="text-brand-gold hover:underline">Terms & Conditions</a> and <a href="#" className="text-brand-gold hover:underline">Privacy Policy</a>.
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full py-3.5 rounded-xl mt-1 shadow-lg shadow-brand-gold/25">
                  Create My Account — It's Free
                </button>

                <p className="text-center text-[12px] text-gray-400">
                  Already have an account? <a href="#" className="text-brand-gold hover:underline font-semibold">Sign In</a>
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
