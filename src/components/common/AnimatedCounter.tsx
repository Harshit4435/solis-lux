import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeOut = progress * (2 - progress);
            const currentNumber = easeOut * value;

            if (progress < 1) {
              setDisplayValue(Number(currentNumber.toFixed(decimals)));
              requestAnimationFrame(updateCount);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <div ref={counterRef} className="text-center group">
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-500">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <p 
        className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-400"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </p>
    </div>
  );
};
