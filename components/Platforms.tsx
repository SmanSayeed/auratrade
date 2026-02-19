
import React from 'react';

export const Platforms: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading text-brand-black dark:text-white mb-4">
          Versatile <span className="gold-gradient-text">Trading Platforms!</span>
        </h2>
        <p className="sub-heading mb-16 max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
          Choose from our range of platforms, including mobile and web-based options, to trade anytime, anywhere. Experience flexibility and power at your fingertips.
        </p>

        <div className="max-w-4xl mx-auto relative mb-12">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-gold/10 border border-brand-black/5 dark:border-brand-border bg-black aspect-video relative">
            <video
              src="/seekapavideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent pointer-events-none" />
          </div>
        </div>

        <button className="bg-brand-black dark:bg-brand-light text-white dark:text-brand-black px-12 py-3 rounded-md font-bold text-sm hover:bg-brand-gold transition-all">
          Explore Our Platforms
        </button>
      </div>
    </section>
  );
};
