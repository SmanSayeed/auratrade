
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light dark:bg-brand-black pt-24 pb-12 border-t border-brand-black/5 dark:border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="sm:col-span-2 lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                <span className="text-brand-black font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-black dark:text-white uppercase">AURATRADE</span>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-sm">
              Welcome to AuraTrade Trading! Experience the best in trading services with competitive rates and expert support. Start trading with us today!
            </p>
            <div className="flex gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-8 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" alt="App Store" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-8 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" alt="Google Play" />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
            <h4 className="font-bold text-brand-black dark:text-white mb-8 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Forex Trading</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Crypto Assets</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Stock Indices</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Commodities</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
            <h4 className="font-bold text-brand-black dark:text-white mb-8 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Academy</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
            <h4 className="font-bold text-brand-black dark:text-white mb-8 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Legal Docs</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
            <h4 className="font-bold text-brand-black dark:text-white mb-8 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Risk Warning</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">AML Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-black/5 dark:border-brand-border text-center">
          <p className="text-[10px] text-gray-500 mb-8 font-bold uppercase tracking-widest">Secured By SSL. Copyright © AuraTrade. All rights reserved. 2026</p>
          <div className="max-w-6xl mx-auto space-y-6 text-[9px] text-gray-500 leading-relaxed text-center px-4">
            <p>Company Information: This website (www.auratrade.com) is operated by AuraTrade Ltd, a Seychelles investment firm, authorised and regulated by the Financial Services Authority of Seychelles with license number SD123. AuraTrade Ltd is located at Aura Centre, Providence Industrial Estate, Mahe Island, Seychelles.</p>
            <p>Risk Warning: Contracts for difference ('CFDs') is a complex financial product, with speculative character, the trading of which involves significant risks of loss of capital. Trading CFDs, which is a marginal product, may result in the loss of your entire balance. Remember that leverage in CFDs can work both to your advantage and disadvantage. CFD traders do not own, or have any rights to, the underlying assets. Trading involves risks. Please read our Risk Disclosure document.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};