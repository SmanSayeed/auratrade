
import React from 'react';

const FEATURE_LIST = [
  { title: 'Advanced Analytics:', desc: 'Utilize cutting-edge tools to analyze trends and market dynamics.', icon: '📈' },
  { title: 'Risk Management:', desc: 'Implement robust risk management tools to safeguard your investments.', icon: '🛡️' },
  { title: 'User-Friendly Interface:', desc: 'Navigate our platform effortlessly, suitable for traders of all levels.', icon: '💻' },
  { title: 'Customization:', desc: 'Tailor your trading environment with customizable charts and dashboards.', icon: '⚙️' }
];

export const Features: React.FC = () => {
  return (
    <section className="py-12 md:py-24 relative bg-brand-light dark:bg-brand-black transition-colors duration-300">
      {/* Premium Gradient Background - Theme aware */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.03),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.03),transparent_40%)] -z-10" />

      <div className="container mx-auto px-4">
        {/* Card without overflow-hidden to allow coins to peek out */}
        <div className="bg-white/70 dark:bg-brand-dark/40 backdrop-blur-md border border-brand-gold/10 dark:border-brand-border rounded-[3rem] p-12 md:p-20 relative">

          {/* Decorative Coins - coin2.webp in 3 places with hover effects */}
          <div className="absolute -top-6 -left-6 w-24 md:w-32 opacity-90 animate-float pointer-events-none group/coin transition-all duration-500 hover:scale-110 hover:rotate-12">
            <img src="/coin2.webp" alt="Coin" className="w-full h-auto drop-shadow-2xl" />
          </div>

          <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-20 md:w-28 opacity-80 animate-float pointer-events-none transition-all duration-500 hover:scale-125 hover:-rotate-12" style={{ animationDelay: '1s' }}>
            <img src="/coin2.webp" alt="Coin" className="w-full h-auto drop-shadow-xl" />
          </div>



          <div className="text-center relative z-10 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black dark:text-white mb-6 tracking-tight">
              Built For <span className="gold-gradient-text">Trader Success!</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-20 text-sm md:text-base font-medium max-w-2xl mx-auto">
              Discover the features that set Seekapa apart in the world of online trading and elevate your professional experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {FEATURE_LIST.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-brand-black dark:bg-brand-light rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-gold dark:group-hover:bg-brand-gold">
                    <span className="filter drop-shadow-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-black dark:text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
