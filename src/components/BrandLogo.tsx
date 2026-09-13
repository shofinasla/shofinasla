import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  // Dimension mappings
  const iconDimensions = {
    sm: { w: 36, h: 28 },
    md: { w: 48, h: 36 },
    lg: { w: 72, h: 54 },
    xl: { w: 120, h: 90 }
  };

  const { w, h } = iconDimensions[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* 3D Ribbon Origami ASN Vector Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Subtle radial aura glow matching logo */}
        <div 
          className="absolute inset-0 bg-sky-500/20 rounded-full blur-xl -z-10 scale-125 pointer-events-none"
        />

        <svg
          width={w}
          height={h}
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_4px_12px_rgba(0,163,255,0.35)]"
        >
          <defs>
            {/* Primary Cyan-Blue Gradient */}
            <linearGradient id="asnCyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="45%" stopColor="#00A3FF" />
              <stop offset="100%" stopColor="#0066FF" />
            </linearGradient>

            {/* Deep Royal/Sapphire Blue */}
            <linearGradient id="asnDeepBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="60%" stopColor="#0044CC" />
              <stop offset="100%" stopColor="#0A2558" />
            </linearGradient>

            {/* Crisp Origami White Gradient */}
            <linearGradient id="asnWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Shadow Bevel */}
            <linearGradient id="asnShadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* === LETTER 'A' === */}
          {/* A Left Leg - Cyan Gradient Fold */}
          <path
            d="M 12 136 L 44 80 L 68 80 L 32 136 Z"
            fill="url(#asnCyanBlue)"
          />
          {/* A Left Apex Fold */}
          <path
            d="M 44 80 L 64 42 L 86 42 L 68 80 Z"
            fill="#0284C7"
          />
          {/* A Apex Cap & Right Leg (Crisp White Fold) */}
          <path
            d="M 64 42 L 78 18 L 102 18 L 76 68 Z"
            fill="url(#asnWhite)"
          />
          <path
            d="M 76 68 L 102 18 L 126 62 L 104 100 Z"
            fill="url(#asnWhite)"
          />
          {/* Inner shadow fold under A leg */}
          <path
            d="M 52 92 L 68 80 L 96 98 L 84 114 Z"
            fill="url(#asnDeepBlue)"
            opacity="0.8"
          />

          {/* === LETTER 'S' (Continuous 3D Ribbon) === */}
          {/* S Top Loop Outer (White) */}
          <path
            d="M 94 44 C 94 22, 122 18, 144 18 C 160 18, 172 26, 172 38 L 148 44 C 148 34, 136 32, 126 32 C 114 32, 110 38, 110 44 C 110 54, 124 58, 140 64 L 146 66 C 166 74, 176 86, 176 102 C 176 128, 146 138, 122 138 C 98 138, 86 126, 86 112 L 108 108 C 108 118, 118 122, 130 122 C 142 122, 150 116, 150 106 C 150 96, 138 90, 122 84 L 114 80 C 98 72, 94 60, 94 44 Z"
            fill="url(#asnCyanBlue)"
          />
          {/* S Upper 3D Fold highlight (White to Cyan) */}
          <path
            d="M 94 44 C 94 22, 122 18, 144 18 L 152 30 C 134 30, 116 34, 116 46 C 116 52, 122 56, 134 60 L 118 72 C 102 62, 94 54, 94 44 Z"
            fill="url(#asnWhite)"
          />
          {/* S Lower Loop Depth (Deep Sapphire) */}
          <path
            d="M 122 84 L 140 92 C 148 96, 150 102, 150 106 C 150 116, 142 122, 130 122 C 118 122, 108 118, 108 108 L 86 112 C 86 126, 98 138, 122 138 C 146 138, 176 128, 176 102 C 176 86, 166 74, 146 66 L 122 84 Z"
            fill="url(#asnDeepBlue)"
          />
          {/* S Middle Ribbon Cyan Glow */}
          <path
            d="M 116 68 L 146 66 C 156 70, 164 78, 166 88 L 142 90 C 138 82, 128 76, 116 68 Z"
            fill="#00A3FF"
          />

          {/* === LETTER 'N' === */}
          {/* N Left Pillar (Royal Blue) */}
          <path
            d="M 166 40 L 186 40 L 186 136 L 166 136 Z"
            fill="url(#asnDeepBlue)"
          />
          {/* N Diagonal Ribbon (Crisp White 3D Fold) */}
          <path
            d="M 166 40 L 194 40 L 226 124 L 202 124 Z"
            fill="url(#asnWhite)"
          />
          {/* N Diagonal Drop Shadow onto Left Leg */}
          <path
            d="M 174 52 L 186 70 L 186 40 Z"
            fill="#051433"
            opacity="0.6"
          />
          {/* N Right Pillar (Electric Cyan/Blue) */}
          <path
            d="M 206 18 L 228 18 L 228 136 L 206 136 Z"
            fill="url(#asnCyanBlue)"
          />
        </svg>
      </div>

      {/* Brand Typography (if showText is true) */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-tight text-white text-sm sm:text-base leading-tight font-sans">
              AHMAD SHOFI NASLA
            </span>
          </div>

          {/* Flanked Electric Blue Sub-heading */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1.5px] w-3 bg-[#00A3FF] rounded-full" />
            <span className="text-[10px] sm:text-[11px] font-bold font-mono tracking-wider text-[#00A3FF] uppercase whitespace-nowrap">
              WEB DEVELOPER
            </span>
            <span className="h-[1.5px] w-3 bg-[#00A3FF] rounded-full" />
          </div>

          {/* Slogan */}
          <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-0.5 hidden sm:block">
            BUILDING IDEAS INTO REAL SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
};
