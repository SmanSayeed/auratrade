
import React, { useState } from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const navLinks = [
    { name: 'Markets', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Education Tools', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Platforms', href: '#' },
  ];

  return (
    <>
      <header className="sticky top-0 z-[60] h-14 md:h-16 flex items-center border-b border-black/5 dark:border-white/10 glass-card bg-white/90 dark:bg-brand-black/90 backdrop-blur-md shadow-sm dark:shadow-none transition-all">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Mobile Menu Trigger & Logo Group */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleDrawer}
              className="lg:hidden text-brand-black dark:text-white p-1 hover:text-brand-gold transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                <span className="text-brand-black font-bold text-sm">A</span>
              </div>
              <span className="text-sm md:text-lg font-black tracking-tight text-brand-black dark:text-white uppercase">
                AURATRADE
              </span>
            </div>
          </div>

          {/* Navigation - Centered on Desktop */}
          <nav className="hidden lg:flex items-center justify-center flex-grow gap-4 xl:gap-6 text-[11px] font-bold text-gray-700 dark:text-gray-300">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="flex items-center gap-1 hover:text-brand-gold transition-colors whitespace-nowrap">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions & Theme Toggle */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <button className="bg-brand-black text-white dark:bg-white dark:text-brand-black px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs font-extrabold uppercase tracking-wider hover:brightness-125 transition-all active:scale-95">
              SIGN UP
            </button>
            <button className="hidden sm:block border border-brand-black/20 dark:border-white/20 px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs font-extrabold uppercase tracking-wider hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all text-brand-black dark:text-white active:scale-95">
              SIGN IN
            </button>

            <div className="flex items-center gap-3 ml-1 md:ml-2 md:pl-4 border-l border-brand-black/10 dark:border-white/10">


              <button
                onClick={onToggleTheme}
                className="relative w-6 h-6 rounded-full border border-brand-black/20 dark:border-white/20 overflow-hidden flex transition-transform hover:scale-110 active:scale-95 shadow-sm"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <div className="w-1/2 h-full bg-brand-black"></div>
                <div className="w-1/2 h-full bg-white"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
          onClick={toggleDrawer}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 left-0 h-full w-72 max-w-[80vw] bg-white dark:bg-brand-black shadow-2xl transition-transform duration-300 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="p-6 flex items-center justify-between border-b border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-bold text-sm">A</span>
                </div>
                <span className="font-black text-brand-black dark:text-white uppercase">AURATRADE</span>
              </div>
              <button onClick={toggleDrawer} className="p-1 text-gray-500 hover:text-brand-gold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex-grow p-6 space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors"
                  onClick={toggleDrawer}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-black/5 dark:border-white/10 space-y-4">
                <button className="w-full bg-brand-black text-white dark:bg-white dark:text-brand-black py-4 rounded-xl font-extrabold hover:brightness-110 active:scale-95 uppercase tracking-wider text-xs">SIGN UP</button>
                <button className="w-full border border-brand-black/20 dark:border-white/20 dark:text-white py-4 rounded-xl font-extrabold hover:bg-brand-gold hover:text-brand-black active:scale-95 uppercase tracking-wider text-xs">SIGN IN</button>
              </div>
            </nav>

            {/* Drawer Footer */}
            <div className="p-6 bg-gray-50 dark:bg-brand-dark/30">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest text-center">Secure Trading Platform</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
