
import React, { useState, useEffect } from 'react';

const TICKERS = [
  { pair: 'BTC/USDT', price: '67,432.10', change: '+2.41%', up: true },
  { pair: 'ETH/USDT', price: '3,512.80', change: '+1.87%', up: true },
  { pair: 'BNB/USDT', price: '598.20', change: '-0.52%', up: false },
  { pair: 'SOL/USDT', price: '178.95', change: '+4.12%', up: true },
  { pair: 'XRP/USDT', price: '0.6240', change: '-1.03%', up: false },
];

const STATS = [
  { label: 'Daily Volume', value: '$4.2B+' },
  { label: 'Active Users', value: '2.1M+' },
  { label: 'Assets', value: '600+' },
  { label: 'Countries', value: '180+' },
];

const CANDLES = [
  { h: 60, l: 30, o: 35, c: 55 },
  { h: 65, l: 40, o: 55, c: 45 },
  { h: 70, l: 42, o: 45, c: 68 },
  { h: 68, l: 55, o: 68, c: 58 },
  { h: 75, l: 52, o: 58, c: 72 },
  { h: 80, l: 60, o: 72, c: 65 },
  { h: 78, l: 58, o: 65, c: 76 },
  { h: 85, l: 65, o: 76, c: 82 },
  { h: 88, l: 70, o: 82, c: 75 },
  { h: 92, l: 72, o: 75, c: 90 },
  { h: 95, l: 80, o: 90, c: 86 },
  { h: 100, l: 82, o: 86, c: 96 },
];

const CHART_BARS = [38, 55, 42, 70, 60, 80, 65, 90, 72, 95, 78, 100, 85, 92, 76, 88, 95, 82, 97, 100];

const TRUST_BADGES = ['FCA Licensed', 'ISO 27001', 'SSL Secured', '2FA Protected', 'GDPR Compliant'];

export const Hero: React.FC = () => {
  const [activeTicker, setActiveTicker] = useState(0);
  const [animIn, setAnimIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimIn(false);
      setTimeout(() => {
        setActiveTicker(prev => (prev + 1) % TICKERS.length);
        setAnimIn(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const ticker = TICKERS[activeTicker];

  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-white dark:bg-brand-black transition-colors duration-300">

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,47,54,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(43,47,54,0.25) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 100% 80% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 80% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(243,186,47,0.10) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)' }} />

      <div className="relative container mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[calc(100vh-64px)]">

        {/* ══ LEFT — Copy ══ */}
        <div className="flex-1 max-w-2xl z-10 text-left">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-brand-gold/30 bg-brand-gold/5 dark:bg-brand-gold/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
            <span className="text-xs text-brand-gold font-semibold tracking-widest uppercase">Live Markets Open</span>
          </div>

          {/* Rotating ticker pill */}
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-xl mb-8 border border-gray-100 dark:border-brand-border/50 bg-white dark:bg-brand-dark/90 shadow-sm transition-all duration-300"
            style={{ opacity: animIn ? 1 : 0, transition: 'opacity 0.3s' }}
          >
            <span className="text-sm font-semibold text-brand-black dark:text-white">{ticker.pair}</span>
            <span className="text-sm font-bold text-brand-black dark:text-white font-mono">${ticker.price}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${ticker.up ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-400/10' : 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-400/10'}`}>
              {ticker.change}
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title text-brand-black dark:text-white mb-6">
            Trade Smarter.
            <br />
            <span className="gold-gradient-text">Win Bigger.</span>
          </h1>

          <p className="sub-heading text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            AuraTrade gives you institutional-grade tools, real-time data, and deep liquidity — all in one professional platform built for serious traders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              className="btn-primary px-8 py-3.5 rounded-xl shadow-lg shadow-brand-gold/25"
            >
              Start Trading Now
            </button>
            <button className="btn-outline px-8 py-3.5 rounded-xl font-medium text-brand-black dark:text-white border border-gray-200 dark:border-brand-border hover:border-brand-gold/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
              View Live Markets →
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="px-4 py-3 rounded-2xl border border-gray-100 dark:border-brand-border/40 bg-gray-50/80 dark:bg-brand-dark/60">
                <div className="text-brand-gold font-black text-xl mb-0.5">{s.value}</div>
                <div className="text-gray-400 dark:text-gray-500 text-xs leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ RIGHT — Trading Dashboard Card ══ */}
        <div className="flex-1 flex justify-center lg:justify-end z-10 w-full">
          <div className="relative w-full max-w-[480px] rounded-2xl border border-gray-100 dark:border-brand-border/50 overflow-hidden bg-white dark:bg-[#0F1217] shadow-2xl dark:shadow-none"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.1)' }}>

            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-brand-border/40 bg-gray-50/80 dark:bg-brand-dark/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono tracking-wide">AuraTrade Pro — BTC/USDT</span>
              <div className="flex gap-1">
                {['1H', '4H', '1D'].map((t) => (
                  <span key={t} className={`text-[10px] px-2 py-0.5 rounded cursor-pointer transition-colors ${t === '4H' ? 'text-brand-gold border border-brand-gold/40 bg-brand-gold/10' : 'text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-brand-border/40 hover:text-brand-black dark:hover:text-white'}`}>{t}</span>
                ))}
              </div>
            </div>

            {/* Price + change */}
            <div className="px-5 pt-4 pb-2 flex items-end justify-between">
              <div>
                <div className="text-2xl font-black text-brand-black dark:text-white">$67,432.10</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">▲ +2.41%</span>
                  <span className="text-gray-400 text-xs">24h change</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">High</div>
                <div className="text-sm text-green-600 dark:text-green-400 font-semibold">$68,120.00</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1.5">Low</div>
                <div className="text-sm text-red-500 dark:text-red-400 font-semibold">$66,890.00</div>
              </div>
            </div>

            {/* Candlestick chart */}
            <div className="px-5 py-3">
              <div className="relative w-full h-36 flex items-end justify-between gap-0.5">
                {[0, 33, 66, 100].map(pct => (
                  <div key={pct} className="absolute w-full border-t border-gray-100 dark:border-brand-border/20" style={{ bottom: `${pct}%` }} />
                ))}
                {CANDLES.map((c, i) => {
                  const isGreen = c.c >= c.o;
                  const bodyTop = Math.max(c.o, c.c);
                  const bodyBot = Math.min(c.o, c.c);
                  const bodyH = Math.max(bodyTop - bodyBot, 3);
                  return (
                    <div key={i} className="relative flex-1 flex flex-col items-center" style={{ height: '100%' }}>
                      <div className="absolute w-px" style={{ background: isGreen ? '#26a69a' : '#ef5350', height: `${c.h - bodyTop}%`, bottom: `${bodyTop}%`, left: '50%', transform: 'translateX(-50%)' }} />
                      <div className="absolute rounded-sm" style={{ background: isGreen ? '#26a69a' : '#ef5350', height: `${bodyH}%`, bottom: `${bodyBot}%`, left: '10%', right: '10%', opacity: 0.9 }} />
                      <div className="absolute w-px" style={{ background: isGreen ? '#26a69a' : '#ef5350', height: `${bodyBot - c.l}%`, bottom: `${c.l}%`, left: '50%', transform: 'translateX(-50%)' }} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Volume bars */}
            <div className="px-5 pb-4">
              <div className="w-full h-8 flex items-end gap-0.5">
                {CHART_BARS.map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height: `${h * 0.32}px`, background: i % 3 === 0 ? 'rgba(243,186,47,0.55)' : 'rgba(38,166,154,0.35)' }} />
                ))}
              </div>
              <div className="text-[10px] text-gray-400 mt-1.5 uppercase tracking-wider">Volume (24H)</div>
            </div>

            {/* Order book mini */}
            <div className="mx-5 mb-5 rounded-xl overflow-hidden border border-gray-100 dark:border-brand-border/40">
              <div className="grid grid-cols-2 divide-x divide-gray-100 dark:divide-brand-border/40">
                <div className="p-3 bg-green-50/50 dark:bg-green-400/5">
                  <div className="text-[10px] text-green-600 dark:text-green-400 font-bold mb-2 uppercase tracking-wider">Bids</div>
                  {[['67,380', '1.24'], ['67,350', '0.87'], ['67,310', '2.11']].map(([p, q]) => (
                    <div key={p} className="flex justify-between text-[11px] py-0.5">
                      <span className="text-green-600 dark:text-green-400 font-mono">{p}</span>
                      <span className="text-gray-400">{q}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-red-50/50 dark:bg-red-400/5">
                  <div className="text-[10px] text-red-500 dark:text-red-400 font-bold mb-2 uppercase tracking-wider">Asks</div>
                  {[['67,450', '0.95'], ['67,490', '1.56'], ['67,520', '0.72']].map(([p, q]) => (
                    <div key={p} className="flex justify-between text-[11px] py-0.5">
                      <span className="text-red-500 dark:text-red-400 font-mono">{p}</span>
                      <span className="text-gray-400">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buy / Sell */}
            <div className="px-5 pb-5 grid grid-cols-2 gap-3">
              <button className="py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{ background: 'linear-gradient(135deg, #26a69a 0%, #1a7a72 100%)' }}>
                Buy BTC
              </button>
              <button className="py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{ background: 'linear-gradient(135deg, #ef5350 0%, #b71c1c 100%)' }}>
                Sell BTC
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ── Trust strip ── */}
      <div className="relative border-t border-gray-100 dark:border-brand-border/30 bg-gray-50/80 dark:bg-brand-dark/60 py-4 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-400 dark:text-gray-600 uppercase tracking-widest font-semibold whitespace-nowrap">Regulated & Trusted</p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {TRUST_BADGES.map(t => (
              <span key={t} className="text-[12px] text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
