
import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  {
    name: 'Markets',
    columns: [
      {
        title: 'Trade',
        items: [
          { icon: '₿', label: 'Cryptocurrencies', desc: 'Bitcoin, ETH & more' },
          { icon: '💱', label: 'Forex', desc: 'Major & minor pairs' },
          { icon: '📊', label: 'Stock Indices', desc: 'Global index CFDs' },
          { icon: '🛢️', label: 'Commodities', desc: 'Gold, Oil & more' },
        ]
      },
      {
        title: 'Market Tools',
        items: [
          { icon: '📈', label: 'Market Overview', desc: 'Live prices & charts' },
          { icon: '⏰', label: 'Economic Calendar', desc: 'Key market events' },
          { icon: '🔔', label: 'Price Alerts', desc: 'Set custom alerts' },
        ]
      }
    ]
  },
  {
    name: 'Platforms',
    columns: [
      {
        title: 'Trading Platforms',
        items: [
          { icon: '🖥️', label: 'Web Platform', desc: 'Trade in your browser' },
          { icon: '📱', label: 'Mobile App', desc: 'iOS & Android' },
          { icon: '⚡', label: 'AuraTrade Pro', desc: 'Advanced charting tools' },
        ]
      },
      {
        title: 'Tools',
        items: [
          { icon: '🤖', label: 'Copy Trading', desc: 'Follow top traders' },
          { icon: '📉', label: 'Risk Calculator', desc: 'Manage your exposure' },
        ]
      }
    ]
  },
  {
    name: 'Education',
    columns: [
      {
        title: 'Learn',
        items: [
          { icon: '🎓', label: 'Aura Academy', desc: 'Free trading courses' },
          { icon: '📹', label: 'Video Tutorials', desc: 'Step-by-step guides' },
          { icon: '📰', label: 'Market News', desc: 'Daily analysis & insights' },
        ]
      },
      {
        title: 'Resources',
        items: [
          { icon: '📖', label: 'Trading Glossary', desc: 'Key terms explained' },
          { icon: '🧮', label: 'Trading Calculators', desc: 'Pip & margin tools' },
          { icon: '🏆', label: 'Webinars', desc: 'Live expert sessions' },
        ]
      }
    ]
  },
  {
    name: 'Partners',
    columns: [
      {
        title: 'Partnership Programs',
        items: [
          { icon: '🤝', label: 'Affiliate Program', desc: 'Earn referral commissions' },
          { icon: '🏢', label: 'IB Program', desc: 'Introduce new clients' },
          { icon: '💼', label: 'White Label', desc: 'Launch your own platform' },
        ]
      }
    ]
  },
  {
    name: 'Company',
    columns: [
      {
        title: 'About AuraTrade',
        items: [
          { icon: 'ℹ️', label: 'About Us', desc: 'Our story & mission' },
          { icon: '🛡️', label: 'Regulation', desc: 'Compliance & licensing' },
          { icon: '📞', label: 'Contact Us', desc: 'Talk to our team' },
          { icon: '🗞️', label: 'Newsroom', desc: 'Press & media' },
        ]
      }
    ]
  },
];

const MegaMenuDropdown: React.FC<{ item: typeof NAV_ITEMS[0] }> = ({ item }) => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 mega-menu">
    <div className="bg-white dark:bg-[#181A20] border border-gray-100 dark:border-brand-border/60 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/60 p-6 min-w-[480px] flex gap-8">
      {item.columns.map((col) => (
        <div key={col.title} className="flex-1 min-w-[180px]">
          <p className="text-[11px] font-700 uppercase tracking-widest text-brand-gold mb-3">{col.title}</p>
          <div className="space-y-1">
            {col.items.map((navItem) => (
              <a
                key={navItem.label}
                href="#"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
              >
                <span className="text-xl mt-0.5 shrink-0">{navItem.icon}</span>
                <div>
                  <div className="text-[14px] font-600 text-brand-black dark:text-white group-hover:text-brand-gold transition-colors leading-snug">{navItem.label}</div>
                  <div className="text-[12px] text-gray-400 dark:text-gray-500 leading-snug mt-0.5">{navItem.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setOpenMobileMenu(null);
  };

  const toggleMobileMenu = (name: string) => {
    setOpenMobileMenu(openMobileMenu === name ? null : name);
  };

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsDrawerOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[60] h-16 flex items-center border-b border-black/5 dark:border-white/[0.07] bg-white/95 dark:bg-brand-black/95 backdrop-blur-md transition-all">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full">

          {/* Left: Mobile hamburger + Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleDrawer}
              className="lg:hidden text-brand-black dark:text-white p-1.5 hover:text-brand-gold transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center shadow-md">
                <span className="text-brand-black font-black text-sm">A</span>
              </div>
              <span className="text-base font-black tracking-tight text-brand-black dark:text-white uppercase hidden sm:block">
                AuraTrade
              </span>
            </a>
          </div>

          {/* Center: Desktop Mega Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-grow gap-0">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative mega-menu-trigger">
                <a
                  href="#"
                  className="flex items-center gap-1 px-4 py-1.5 rounded-lg text-[14px] font-500 text-gray-600 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold hover:bg-gray-50 dark:hover:bg-white/5 transition-all whitespace-nowrap"
                >
                  {item.name}
                  <svg className="w-3.5 h-3.5 opacity-50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <MegaMenuDropdown item={item} />
              </div>
            ))}
          </nav>

          {/* Right: Auth buttons + Theme toggle */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <a
              href="#"
              className="hidden sm:flex items-center btn-text px-4 md:px-5 py-2 rounded-lg text-brand-black dark:text-white border border-gray-200 dark:border-brand-border hover:border-brand-gold/50 hover:text-brand-gold transition-all"
            >
              Sign In
            </a>
            <a
              href="#"
              className="btn-primary px-4 md:px-6 py-2 rounded-lg shadow-md shadow-brand-gold/20"
            >
              Start Trading
            </a>

            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              className="relative w-8 h-8 rounded-full border border-gray-200 dark:border-brand-border/60 overflow-hidden flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm hover:border-brand-gold/50"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
          onClick={toggleDrawer}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white dark:bg-[#181A20] shadow-2xl transition-transform duration-300 flex flex-col ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100 dark:border-brand-border/40">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-brand-gold rounded-full flex items-center justify-center">
                <span className="text-brand-black font-black text-xs">A</span>
              </div>
              <span className="font-black text-brand-black dark:text-white uppercase text-sm">AURATRADE</span>
            </div>
            <button onClick={toggleDrawer} className="p-1.5 text-gray-400 hover:text-brand-gold transition-colors rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Nav */}
          <nav className="flex-grow overflow-y-auto py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="border-b border-gray-50 dark:border-brand-border/20 last:border-0">
                <button
                  onClick={() => toggleMobileMenu(item.name)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left text-[15px] font-600 text-brand-black dark:text-white hover:text-brand-gold transition-colors"
                >
                  {item.name}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 text-gray-400 ${openMobileMenu === item.name ? 'rotate-180 text-brand-gold' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion sub-items */}
                <div className={`overflow-hidden transition-all duration-300 ${openMobileMenu === item.name ? 'max-h-[600px]' : 'max-h-0'}`}>
                  <div className="px-5 pb-3 space-y-0">
                    {item.columns.map((col) => (
                      <div key={col.title} className="mb-3">
                        <p className="text-[10px] font-700 uppercase tracking-widest text-brand-gold mb-1.5 mt-2">{col.title}</p>
                        {col.items.map((navItem) => (
                          <a
                            key={navItem.label}
                            href="#"
                            onClick={toggleDrawer}
                            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                          >
                            <span className="text-base">{navItem.icon}</span>
                            <span className="text-[13px] font-500 text-gray-700 dark:text-gray-300 hover:text-brand-gold">{navItem.label}</span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Drawer Footer CTAs */}
          <div className="p-5 border-t border-gray-100 dark:border-brand-border/40 space-y-3">
            <button className="btn-primary w-full py-3 rounded-xl">Start Trading</button>
            <button className="btn-outline w-full py-3 rounded-xl border border-gray-200 dark:border-brand-border text-brand-black dark:text-white hover:border-brand-gold/50 transition-colors text-[16px] font-500">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};
