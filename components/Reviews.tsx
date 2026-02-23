
import React, { useState, useEffect, useCallback } from 'react';

const REVIEWS = [
  { name: 'Sou Al-Rashidi', role: 'Professional Trader', text: 'The best trading company I have dealt with. Their financial managers are top-level, they give competitive bonuses and investor rewards with high expertise.', country: 'Kuwait', flag: '🇰🇼', stars: 5 },
  { name: 'Bash Hab', role: 'Crypto Investor', text: 'Fast profits in a short period, highly accurate recommendations. Excellent recovery plan and the team genuinely cares about client outcomes.', country: 'Saudi Arabia', flag: '🇸🇦', stars: 5 },
  { name: 'Hussein Nidal', role: 'Forex Trader', text: 'Honestly, the team is very cooperative and they follow up closely. Their communication and explanation style is excellent — nothing smoother.', country: 'Jordan', flag: '🇯🇴', stars: 5 },
  { name: 'Ahmed Khalid', role: 'Stocks Trader', text: 'AuraTrade has completely changed my perspective on trading. The tools are incredibly intuitive and the support team is always there to guide me.', country: 'UAE', flag: '🇦🇪', stars: 5 },
  { name: 'Fatima Zahra', role: 'Portfolio Manager', text: 'I love how easy it is to manage my portfolio. The real-time insights help me make informed decisions, and the bonuses are a great addition!', country: 'Morocco', flag: '🇲🇦', stars: 5 },
  { name: 'Omar Al-Farsi', role: 'Day Trader', text: 'Professionalism at its best. The training sessions gave me the skills needed to succeed in the volatile crypto market. Highly recommend.', country: 'Oman', flag: '🇴🇲', stars: 5 },
];

const CHUNK_SIZE = 3;

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = Math.ceil(REVIEWS.length / CHUNK_SIZE);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="section-pad bg-gray-50 dark:bg-[#0D1018] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="section-heading text-brand-black dark:text-white">
              What Our <span className="gold-gradient-text">Traders Say</span>
            </h2>
            <p className="sub-heading text-gray-500 dark:text-gray-400 mt-4">
              Join thousands of satisfied traders worldwide already growing with AuraTrade.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 mr-4">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-gray-300 dark:bg-brand-border hover:bg-brand-gold/50'}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="w-11 h-11 border border-gray-200 dark:border-brand-border rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 border border-gray-200 dark:border-brand-border rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-700 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => (
              <div key={slideIdx} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {REVIEWS.slice(slideIdx * CHUNK_SIZE, slideIdx * CHUNK_SIZE + CHUNK_SIZE).map((rev, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="relative bg-white dark:bg-brand-dark/40 p-7 rounded-2xl border border-gray-100 dark:border-brand-border/40 h-full hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                      {/* Quote mark */}
                      <div className="text-brand-gold text-4xl font-serif leading-none mb-4 opacity-60">"</div>

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: rev.stars }).map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                        {rev.text}
                      </p>

                      <div className="mt-6 pt-5 border-t border-gray-100 dark:border-brand-border/30 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/15 border border-brand-gold/20 flex items-center justify-center text-lg">
                          {rev.flag}
                        </div>
                        <div>
                          <div className="text-[14px] font-bold text-brand-black dark:text-white">{rev.name}</div>
                          <div className="text-[12px] text-gray-400">{rev.role} · {rev.country}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
