
import React from 'react';

const POSTS = [
  {
    category: 'Crypto Market News',
    title: 'Crypto Market Sentiment Hits Extreme Pessimism, Potentially Signaling Bitcoin Bottom',
    img: '/btc_14.jpg',
    date: 'February 17, 2026',
    readTime: '4 min read',
    badge: 'bg-brand-gold/10 text-brand-gold',
  },
  {
    category: 'Forex Analysis',
    title: 'GBP/USD Faces Resistance Near 1.3700 Amid US Dollar\'s Mixed Performance',
    img: '/gbp_usd_3.jpg',
    date: 'February 15, 2026',
    readTime: '3 min read',
    badge: 'bg-blue-100 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400',
  },
  {
    category: 'Crypto Market News',
    title: 'Thailand Approves Digital Assets as Underlying Assets in Derivatives Market',
    img: '/market_update_107.jpg',
    date: 'February 13, 2026',
    readTime: '5 min read',
    badge: 'bg-brand-gold/10 text-brand-gold',
  }
];

export const Blog: React.FC = () => {
  return (
    <section className="section-pad bg-white dark:bg-brand-black transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Market Insights</p>
            <h2 className="section-heading text-brand-black dark:text-white">
              Insights & <span className="gold-gradient-text">Updates</span>
            </h2>
            <p className="sub-heading text-gray-500 dark:text-gray-400 mt-4">
              Stay informed with the latest market news, analysis, and trading guides.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-outline px-6 py-2.5 rounded-xl border border-gray-200 dark:border-brand-border text-brand-black dark:text-white hover:border-brand-gold hover:text-brand-gold transition-all whitespace-nowrap shrink-0"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {POSTS.map((post, idx) => (
            <a
              key={idx}
              href="#"
              className="group flex flex-col bg-gray-50 dark:bg-brand-dark/40 rounded-2xl overflow-hidden border border-gray-100 dark:border-brand-border/40 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider backdrop-blur-sm ${post.badge}`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider">{post.date}</span>
                  <span className="text-gray-200 dark:text-brand-border">·</span>
                  <span className="text-[11px] text-gray-400">{post.readTime}</span>
                </div>
                <h4 className="text-[16px] font-semibold text-brand-black dark:text-white leading-snug group-hover:text-brand-gold transition-colors flex-grow">
                  {post.title}
                </h4>
                <div className="mt-5 flex items-center gap-1 text-brand-gold text-[13px] font-semibold">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
