import React from 'react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { Reveal } from '../common/Reveal';

export const TelemetryStats: React.FC = () => {
  return (
    <section 
      className="relative py-20 lg:py-24 border-t border-b overflow-hidden px-6 lg:px-16"
      style={{ 
        borderColor: 'var(--border-divider)',
        backgroundColor: 'var(--bg-section-muted)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Reveal direction="up" delay={0.1}>
            <AnimatedCounter
              value={480}
              suffix="+"
              label="Megawatts Commissioned"
            />
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <AnimatedCounter
              value={12500}
              suffix="+"
              label="Clean Powered Estates"
            />
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <AnimatedCounter
              value={420}
              suffix="k+"
              label="Tons CO₂ Eliminated"
            />
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <AnimatedCounter
              value={99.8}
              decimals={1}
              suffix="%"
              label="Grid Uptime & Efficiency"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
