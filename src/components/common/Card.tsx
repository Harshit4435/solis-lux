import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border transition-all duration-500 ${
        hoverEffect
          ? 'hover:border-[#D4AF37]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1'
          : ''
      } ${className}`}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-card)'
      }}
    >
      {children}
    </div>
  );
};
