
import React from 'react';

const POSTS = [
  { category: 'Crypto Market News', title: 'Crypto Market Sentiment Hits Extreme Pessimism, Potentially Signaling Bitcoin Bottom', img: '/btc_14.jpg', color: 'bg-green-100 text-green-700' },
  { category: 'Forex Technical Analysis', title: 'GBP/USD Faces Resistance Near 1.3700 Amid US Dollar\'s Mixed Performance', img: '/gbp_usd_3.jpg', color: 'bg-yellow-100 text-yellow-700' },
  { category: 'Crypto Market News', title: 'Thailand Approves Digital Assets as Underlying Assets in Derivatives Market', img: '/market_update_107.jpg', color: 'bg-green-100 text-green-700' }
];

export const Blog: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] text-brand-black dark:text-white mb-4">Insights And <span className="gold-gradient-text">Updates</span></h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">We love connecting with our clients to hear about their experiences and how we can improve.</p>
          </div>
          <button className="border border-brand-black/10 dark:border-white/10 px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold active:scale-95 mx-auto md:mx-0">View our blog</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <div key={idx} className="group bg-[#F2F3F5] dark:bg-brand-dark p-6 rounded-[2rem] hover:shadow-xl transition-all">
              <div className="rounded-[1.5rem] overflow-hidden mb-6 h-52 relative">
                <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute top-4 right-4 text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest ${post.color}`}>
                  {post.category}
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-wider">February 17, 2026</p>
              <h4 className="text-lg font-bold text-brand-black dark:text-white leading-tight group-hover:text-brand-gold transition-colors">{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
