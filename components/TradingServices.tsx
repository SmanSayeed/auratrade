
import React from 'react';

const SERVICES = [
  { title: 'Educational Resources', icon: '💰', desc: 'Learn trading with our extensive guides and tutorials.' },
  { title: 'Market Insights', icon: '📈', desc: 'Stay ahead with real-time updates and expert analyses.' },
  { title: 'Account Management', icon: '👤', desc: 'Get professional help managing your portfolio.' },
  { title: 'Social Trading', icon: '🧭', desc: 'Connect with other traders and copy successful trades.' },
  { title: 'Investment Protection', icon: '🛡️', desc: 'Benefit from insurance and fund safety measures.', active: true },
  { title: 'Regulatory Compliance', icon: '⚖️', desc: 'Trust in our adherence to strict regulatory standards.' }
];

export const TradingServices: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center leading-[1.2] text-white mb-4">
            Comprehensive <span className="gold-gradient-text">Trading Services</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto text-center font-medium">AuraTrade offers a full spectrum of services to enhance your trading experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-brand-gold/20 group ${service.active ? 'bg-brand-gold/5 border-brand-gold/20' : 'bg-transparent'}`}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-gold/10 text-brand-gold rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h4>
                <p className="text-[14px] text-gray-400 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
