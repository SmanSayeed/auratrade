
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = Array.from({ length: 20 }, (_, i) => ({
  time: i,
  price: 60000 + Math.random() * 5000 + (i * 200),
}));

export const TradingDashboardPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading text-white mb-4">Master the Markets</h2>
          <p className="sub-heading">
            Our platform combines cutting-edge charting tools with lightning-fast execution 
            to give you a professional trading edge.
          </p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-brand-gold/5 max-w-6xl mx-auto">
          <div className="bg-brand-dark px-6 py-4 border-b border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">BTC / USDT</span>
              </div>
              <span className="text-brand-gold text-lg font-bold">$67,432.12</span>
              <span className="text-green-500 text-xs font-bold">+2.45%</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xs bg-brand-border px-2 py-1 rounded text-gray-400">1H</span>
              <span className="text-xs bg-brand-gold/10 px-2 py-1 rounded text-brand-gold font-bold">4H</span>
              <span className="text-xs bg-brand-border px-2 py-1 rounded text-gray-400">1D</span>
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F3BA2F" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F3BA2F" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2B2F36" vertical={false} />
                <XAxis hide dataKey="time" />
                <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#181A20', border: '1px solid #2B2F36', borderRadius: '8px' }}
                  itemStyle={{ color: '#F3BA2F' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#F3BA2F" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-brand-border bg-brand-dark/50">
            {[
              { label: '24h High', val: '$68,231.00' },
              { label: '24h Low', val: '$65,402.10' },
              { label: '24h Volume', val: '43.2B USDT' },
              { label: 'Open Interest', val: '$12.4B' }
            ].map((stat, i) => (
              <div key={i} className="p-4 border-r last:border-r-0 border-brand-border">
                <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">{stat.label}</p>
                <p className="text-sm font-bold text-white">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
