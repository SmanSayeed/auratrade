
import React from 'react';

const FOOTER_LINKS = {
  Services: ['Forex Trading', 'Crypto Assets', 'Stock Indices', 'Commodities', 'Copy Trading'],
  Support: ['Help Center', 'Submit Ticket', 'FAQ', 'Aura Academy', 'Economic Calendar'],
  Company: ['About Us', 'Regulation', 'Careers', 'Newsroom', 'Contact Us'],
  Legal: ['Terms of Use', 'Privacy Policy', 'Risk Warning', 'AML Policy', 'Cookie Policy'],
};

const SOCIAL_LINKS = [
  {
    label: 'Twitter / X',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    label: 'Telegram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    )
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brand-black border-t border-gray-100 dark:border-brand-border/40 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-12">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow-md">
                <span className="text-brand-black font-black text-base">A</span>
              </div>
              <span className="text-xl font-black tracking-tight text-brand-black dark:text-white uppercase">AuraTrade</span>
            </div>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-xs">
              Professional trading platform offering 600+ assets with institutional-grade tools, deep liquidity, and 24/7 support.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 mb-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-gray-200 dark:border-brand-border/50 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* App badges */}
            <div className="flex gap-3 flex-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-8 opacity-75 hover:opacity-100 transition-opacity cursor-pointer" alt="App Store" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-8 opacity-75 hover:opacity-100 transition-opacity cursor-pointer" alt="Google Play" />
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="col-span-1 lg:col-span-2">
              <h4 className="text-[12px] font-bold text-brand-black dark:text-white mb-4 uppercase tracking-widest">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors leading-snug">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 dark:border-brand-border/30 pt-8">
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest text-center mb-5">
            Secured By SSL · Copyright © AuraTrade 2026 · All Rights Reserved
          </p>
          <div className="max-w-5xl mx-auto space-y-3 text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed text-center">
            <p><strong>Company:</strong> This website is operated by AuraTrade Ltd, authorised and regulated by the Financial Services Authority of Seychelles (License No. SD123). Aura Centre, Providence Industrial Estate, Mahe Island, Seychelles.</p>
            <p><strong>Risk Warning:</strong> CFDs are complex instruments with a high risk of losing money rapidly due to leverage. Between 74–89% of retail investor accounts lose money when trading CFDs. Please read our <a href="#" className="underline hover:text-brand-gold">Risk Disclosure</a> before trading.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};