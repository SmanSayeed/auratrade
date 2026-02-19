
import React, { useState, useEffect, useCallback } from 'react';

const REVIEWS = [
  { name: 'Sou', text: 'The best trading company I have dealt with. Their financial managers are top-level, they give bonuses and investor rewards, and they offer precise training with high expertise.', country: '🇰🇼' },
  { name: 'Bash Hab', text: 'Fast profits in a short period, highly accurate recommendations. Thank you to Mr. Saleh Al-Naeem for helping me with the recovery plan in my account.', country: '🇸🇦' },
  { name: 'Hussein Nidal Abu Shawali', text: 'Honestly, the team is very cooperative and they follow with clients closely. Their explanation and communication style is excellent — nothing smoother.', country: '🇯🇴' },
  { name: 'Ahmed Khalid', text: 'AuraTrade has completely changed my perspective on trading. The tools are incredibly intuitive and the support team is always there to guide me.', country: '🇦🇪' },
  { name: 'Fatima Zahra', text: 'I love how easy it is to manage my portfolio. The real-time insights help me make informed decisions, and the bonuses are a great extra!', country: '🇲🇦' },
  { name: 'Omar Al-Farsi', text: 'Professionalism at its best. The training sessions provided me with the skills I needed to succeed in the volatile crypto market.', country: '🇴🇲' }
];

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = Math.ceil(REVIEWS.length / 3);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-12 md:py-24 bg-brand-light dark:bg-brand-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black dark:text-white mb-6">
              Reviews of AuraTrade: <br />
              <span className="gold-gradient-text">What Our Users Are Saying</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              AuraTrade is committed to providing traders with a seamless and innovative experience.
              Join thousands of satisfied traders worldwide.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-brand-black/10 dark:border-brand-border rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all group active:scale-95"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform text-xl">←</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border border-brand-black/10 dark:border-brand-border rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all group active:scale-95"
            >
              <span className="group-hover:translate-x-0.5 transition-transform text-xl">→</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-700 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {/* Slides - assuming 3 per slide on desktop, 1 on mobile */}
            {Array.from({ length: totalSlides }).map((_, slideIdx) => (
              <div key={slideIdx} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-12 px-2">
                {REVIEWS.slice(slideIdx * 3, slideIdx * 3 + 3).map((rev, idx) => (
                  <div key={idx} className="flex flex-col gap-6 group">
                    <div className="relative bg-white dark:bg-brand-dark/30 p-8 rounded-2xl border border-brand-black/5 dark:border-brand-border h-full shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="absolute -top-3 left-8 text-brand-gold text-4xl font-serif">"</div>
                      <p className="text-base text-brand-black dark:text-gray-300 leading-relaxed font-medium italic">
                        {rev.text}
                      </p>
                      <div className="mt-8 flex items-center gap-3">
                        <span className="text-2xl filter drop-shadow-sm">{rev.country}</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-xs text-brand-black dark:text-white uppercase tracking-wider">{rev.name}</span>
                          <div className="flex text-brand-gold text-[10px]">★★★★★</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-gray-300 dark:bg-brand-border hover:bg-brand-gold/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
