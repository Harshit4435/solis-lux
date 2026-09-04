import React from 'react';
import logoMarkImg from '../../assets/branding/vittoris-logo-mark-white.png';

interface VittorisLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  subtitleText?: string;
  showAiPrefix?: boolean;
  className?: string;
  useRealImage?: boolean;
}

export const VittorisIcon: React.FC<{ className?: string; size?: number; useRealImage?: boolean }> = ({ 
  className = "w-9 h-9", 
  size,
  useRealImage = true
}) => {
  const style = size ? { width: size, height: size } : undefined;

  if (useRealImage) {
    return (
      <div 
        className={`rounded-xl bg-white flex items-center justify-center p-1.5 shadow-[0_4px_20px_rgba(139,92,246,0.25)] border border-white/30 transition-transform duration-300 group-hover:scale-105 overflow-hidden select-none shrink-0 ${className}`}
        style={style}
      >
        <img 
          src={logoMarkImg} 
          alt="Vittoris Company Logo" 
          className="w-full h-full object-contain pointer-events-none drop-shadow-sm" 
        />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="vittorisLeftPetal" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#3B0764" />
          <stop offset="60%" stopColor="#240046" />
          <stop offset="100%" stopColor="#190028" />
        </linearGradient>

        <linearGradient id="vittorisCenterPetal" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#581C87" />
        </linearGradient>

        <linearGradient id="vittorisRightPetal" x1="10%" y1="20%" x2="90%" y2="80%">
          <stop offset="0%" stopColor="#2E0854" />
          <stop offset="50%" stopColor="#4A154B" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>

        <linearGradient id="vittorisBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>
      </defs>

      <path
        d="M 50 72 C 40 70 25 58 18 42 C 12 28 20 16 33 19 C 43 22 49 42 50 68 Z"
        fill="url(#vittorisLeftPetal)"
      />
      <path
        d="M 50 72 C 60 70 75 58 82 42 C 88 28 80 16 67 19 C 57 22 51 42 50 68 Z"
        fill="url(#vittorisRightPetal)"
      />
      <path
        d="M 50 8 C 63 8 72 26 66 48 C 61 63 53 73 50 78 C 47 73 39 63 34 48 C 28 26 37 8 50 8 Z"
        fill="url(#vittorisCenterPetal)"
      />
      <path
        d="M 50 16 C 54 26 55 46 50 72 C 46 54 47 30 50 16 Z"
        fill="#C084FC"
        opacity="0.3"
      />
      <path
        d="M 44 76 C 48 81 52 81 56 76 C 54 84 46 84 44 76 Z"
        fill="url(#vittorisBase)"
      />
    </svg>
  );
};

export const VittorisLogo: React.FC<VittorisLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  subtitleText = 'Solar Estates & Clean Energy',
  showAiPrefix = true,
  className = '',
  useRealImage = true
}) => {
  const iconPixelSizes = {
    sm: 32,
    md: 42,
    lg: 52,
    xl: 64
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl'
  };

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Real Brand Logo Mark from Company Graphic */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-[#8B5CF6]/30 rounded-2xl blur-md group-hover:bg-[#8B5CF6]/50 transition-all duration-300 pointer-events-none" />
        <VittorisIcon size={iconPixelSizes[size]} useRealImage={useRealImage} />
      </div>

      {/* Official Typography */}
      <div className="flex flex-col justify-center">
        {showAiPrefix && (
          <span className="text-[9px] md:text-[10.5px] font-sans font-bold tracking-[0.28em] text-[#C084FC] uppercase leading-tight">
            AI
          </span>
        )}
        <div className={`font-serif font-bold tracking-[0.2em] text-white group-hover:text-[#C084FC] transition-colors leading-none ${textSizes[size]}`}>
          VITTORIS
        </div>
        {showSubtitle && (
          <span className="text-[7.5px] md:text-[8.5px] tracking-[0.3em] uppercase text-white/50 font-medium mt-1 leading-none">
            {subtitleText}
          </span>
        )}
      </div>
    </div>
  );
};

export default VittorisLogo;
