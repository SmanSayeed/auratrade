
import React from 'react';

export const SuccessSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-brand-light dark:bg-brand-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="section-heading text-brand-black dark:text-white mb-6">
              Committed To <span className="gold-gradient-text">Your Success</span>
            </h2>
            <p className="sub-heading mb-12 text-gray-600 dark:text-gray-400">
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

            <button className="mt-12 bg-brand-black dark:bg-brand-light text-white dark:text-brand-black px-12 py-4 rounded-md font-bold hover:bg-brand-gold transition-all">
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
