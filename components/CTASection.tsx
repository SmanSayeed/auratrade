
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-3xl border-brand-gold/20 shadow-2xl shadow-brand-gold/10">
          <h2 className="section-heading text-white mb-6">Start Trading in Minutes</h2>
          <p className="sub-heading mb-10 mx-auto max-w-2xl">
            Join the most trusted cryptocurrency exchange in the world. 
            Create your account, secure it with 2FA, and begin your trading journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gold-gradient text-brand-black px-12 py-4 rounded-md btn-text shadow-xl shadow-brand-gold/20 hover:scale-[1.05] transition-all">
              Sign Up Now
            </button>
            <button className="border border-brand-border text-white hover:bg-brand-border px-12 py-4 rounded-md btn-text transition-all">
              View Markets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
