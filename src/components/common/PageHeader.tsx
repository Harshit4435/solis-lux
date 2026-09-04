import React from 'react';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  subtitle,
  title,
  description,
  badge
}) => {
  return (
    <div className="relative pt-36 pb-20 px-6 lg:px-16 border-b overflow-hidden" style={{ borderColor: 'var(--border-divider)' }}>
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {badge && (
          <Reveal direction="down" delay={0.1}>
            <span className="inline-block px-3 py-1 mb-4 text-[10px] tracking-[0.3em] uppercase font-semibold text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full">
              {badge}
            </span>
          </Reveal>
        )}

        <Reveal direction="up" delay={0.2}>
          <div className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-4 font-semibold">
            {subtitle}
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight tracking-wide mb-6 max-w-4xl" style={{ color: 'var(--text-body)' }}>
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal direction="up" delay={0.4}>
            <p className="text-sm md:text-base leading-relaxed font-light max-w-2xl text-center" style={{ color: 'var(--text-muted)' }}>
              {description}
            </p>
          </Reveal>
        )}

        <Reveal direction="up" delay={0.5}>
          <div className="w-24 h-[1px] bg-[#D4AF37]/60 mt-8" />
        </Reveal>
      </div>
    </div>
  );
};
