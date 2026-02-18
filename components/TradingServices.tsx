
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
    <section className="py-24 bg-brand-light dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-brand-black dark:text-white mb-4">
            Comprehensive <span className="gold-gradient-text">Trading Services</span>
          </h2>
          <p className="sub-heading text-gray-500">AuraTrade offers a full spectrum of services to enhance your trading experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16">
          {SERVICES.map((service, idx) => (
            <div key={idx} className={`p-10 transition-all ${service.active ? 'bg-[#F9EBFF] dark:bg-brand-gold/10' : ''}`}>
              <h4 className="text-xl font-bold text-brand-black dark:text-white mb-10">{service.title}</h4>
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 flex items-center justify-center bg-brand-black dark:bg-brand-light text-white dark:text-brand-black rounded-lg shrink-0">
                   {service.icon}
                 </div>
                 <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
