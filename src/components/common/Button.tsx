import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-[0.18em] uppercase transition-all duration-300 select-none cursor-pointer rounded-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2.5 gap-2',
    md: 'text-xs px-6 py-3.5 gap-2.5',
    lg: 'text-sm px-8 py-4 gap-3'
  };

  const variantStyles = {
    gold: 'bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border border-[#D4AF37]/50 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] bg-transparent hover:bg-[#D4AF37]/5 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'text-white/80 hover:text-[#D4AF37] hover:bg-white/5 bg-transparent',
    emerald: 'bg-[#10B981] hover:bg-[#059669] text-white font-semibold shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
