
import React from 'react';

export const SuccessSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center lg:text-left leading-[1.2] text-brand-black dark:text-white mb-6">
              Committed To <span className="gold-gradient-text">Your Success</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium mb-12">
              Our customer support goes beyond just solving issues. We ensure your trading journey is smooth and successful with:
            </p>

            <div className="space-y-10">
              {[
                { title: 'Personalized support', desc: 'from our team.', icon: '⏱️' },
                { title: 'Quick responses to your', desc: 'queries.', icon: '📨' },
                { title: 'Comprehensive resource', desc: 'libraries and FAQs.', icon: '📚' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="text-3xl filter drop-shadow-md">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-black dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-brand-black dark:bg-brand-light text-white dark:text-brand-black px-8 md:px-12 py-4 md:py-5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-black/5 dark:shadow-white/5">
              Contact Support
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <img
                src="/regulation_7.jpg"
                alt="Customer Success"
                className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
            {/* Background purple arrow shape from screenshot */}
            <div className="absolute top-1/2 left-0 w-full h-1/2 bg-brand-gold/5 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
