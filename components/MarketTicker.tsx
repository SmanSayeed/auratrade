
import React, { useState, useEffect } from 'react';
import { MarketData } from '../types';

const INITIAL_DATA: MarketData[] = [
  { symbol: 'BTC/USDT', price: 67432.12, change: 2.45 },
  { symbol: 'ETH/USDT', price: 3542.89, change: -1.23 },
  { symbol: 'BNB/USDT', price: 589.41, change: 4.12 },
  { symbol: 'SOL/USDT', price: 145.67, change: 0.85 },
  { symbol: 'ADA/USDT', price: 0.4523, change: -2.31 },
  { symbol: 'XRP/USDT', price: 0.6122, change: 1.15 },
];

export const MarketTicker: React.FC = () => {
  const [markets, setMarkets] = useState<MarketData[]>(INITIAL_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarkets(prev => prev.map(m => ({
        ...m,
        price: m.price * (1 + (Math.random() - 0.5) * 0.001)
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-dark/50 border-y border-brand-border py-6 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {markets.map((market, idx) => (
            <div key={idx} className="flex flex-col min-w-[150px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-gray-300">{market.symbol}</span>
                <span className={`text-xs font-medium ${market.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {market.change >= 0 ? '+' : ''}{market.change}%
                </span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                ${market.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {markets.map((market, idx) => (
            <div key={`dup-${idx}`} className="flex flex-col min-w-[150px] hidden md:flex">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-gray-300">{market.symbol}</span>
                <span className={`text-xs font-medium ${market.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {market.change >= 0 ? '+' : ''}{market.change}%
                </span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                ${market.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
