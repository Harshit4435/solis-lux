import React from 'react';
import { Sun, Layers, Zap, UserCheck } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const TelemetryStats: React.FC = () => {
  const pillars = [
    {
      icon: <Sun className="text-[#D4AF37]" size={22} />,
      title: 'Monocrystalline TOPCon',
      desc: 'High-efficiency N-Type black silicon for estate rooftops'
    },
    {
      icon: <Layers className="text-[#A855F7]" size={22} />,
      title: 'Architectural BIPV Glass',
      desc: 'Semi-transparent solar glass for skylights & facades'
    },
    {
      icon: <Zap className="text-[#10B981]" size={22} />,
      title: 'Bifacial Dual-Glass',
      desc: 'Double-sided power harvesting direct & reflected sunlight'
    },
    {
      icon: <UserCheck className="text-[#D4AF37]" size={22} />,
      title: 'Direct with Owner',
      desc: 'Transparent stakeholder visibility with zero middlemen'
    }
  ];

  return (
    <section 
      className="relative py-16 lg:py-20 border-t border-b overflow-hidden px-6 lg:px-16"
      style={{ 
        borderColor: 'var(--border-divider)',
        backgroundColor: 'var(--bg-section-muted)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} direction="up" delay={0.1 * (i + 1)}>
              <div className="p-6 rounded-xl border bg-white/[0.02] border-white/10 hover:border-[#D4AF37]/30 transition-all h-full flex flex-col justify-between">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm font-serif text-white font-medium mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
