import React from 'react';

export default function BrandLogo({ size = 'responsive', showTagline = false, className = '' }) {
  // Sizing configurations
  if (size === 'sm') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`}>
        <LogoSvg heightClass="h-7 w-auto" />
        <Wordmark textClass="text-sm font-bold tracking-tight" showTagline={showTagline} />
      </div>
    );
  }

  if (size === 'lg') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <LogoSvg heightClass="h-14 sm:h-16 w-auto" />
        <Wordmark textClass="text-2xl sm:text-3xl font-extrabold tracking-tight" showTagline={showTagline} />
      </div>
    );
  }

  // Responsive default for Navbar and Hero
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 select-none ${className}`}>
      <LogoSvg heightClass="h-7 sm:h-8 md:h-10 w-auto" />
      <Wordmark
        textClass="text-[15px] sm:text-base md:text-xl font-bold tracking-tight"
        showTagline={showTagline}
      />
    </div>
  );
}

function LogoSvg({ heightClass = 'h-8' }) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${heightClass} shrink-0 drop-shadow-[0_0_12px_rgba(37,99,235,0.35)] transition-all duration-200`}
    >
      <defs>
        <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        <linearGradient id="silverChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>

        <linearGradient id="orangeFlare" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#60a5fa" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>

        <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Speed lines on the left */}
      <line x1="8" y1="36" x2="48" y2="36" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <line x1="16" y1="44" x2="52" y2="44" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <line x1="4" y1="52" x2="56" y2="52" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <line x1="22" y1="60" x2="50" y2="60" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Upper Stylized 'P' loop in Electric Blue */}
      <path
        d="M 44 26 L 94 26 C 114 26 124 38 116 52 C 109 64 96 68 76 68 L 62 68 L 44 26 Z"
        fill="url(#blueGlow)"
      />
      {/* Inner cutout of P */}
      <path
        d="M 68 40 L 88 40 C 97 40 101 44 98 50 C 95 56 88 56 79 56 L 68 56 Z"
        fill="#070b14"
      />

      {/* Lower Chrome 'W' structure merging into upward arrow */}
      <path
        d="M 52 68 L 74 96 L 94 72 L 122 100 L 138 48 L 108 58 L 120 70 L 96 46 L 76 74 L 64 58 L 52 68 Z"
        fill="url(#silverChrome)"
      />

      {/* Arrow head on top right */}
      <polygon
        points="136,34 148,60 128,52"
        fill="url(#silverChrome)"
      />

      {/* Orange / Gold Speed Line across center */}
      <line
        x1="30"
        y1="64"
        x2="136"
        y2="64"
        stroke="url(#orangeFlare)"
        strokeWidth="3.2"
        strokeLinecap="round"
        filter="url(#neonBlur)"
      />
      <circle cx="86" cy="64" r="3" fill="#fde047" />
    </svg>
  );
}

function Wordmark({ textClass = '', showTagline = false }) {
  return (
    <div className="flex flex-col">
      <div className={`leading-none font-bold text-white tracking-tight ${textClass} whitespace-nowrap`}>
        <span className="text-slate-400">@</span>
        <span className="text-white">Performance</span>
        <span className="text-sky-400">Web</span>
        <span className="text-blue-500">.io</span>
      </div>

      {showTagline && (
        <div className="mt-1 flex items-center gap-2 text-[10px] font-medium tracking-wider text-slate-400 uppercase">
          <span className="text-sky-400 font-semibold">Traffic</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 font-semibold">Website</span>
          <span className="text-slate-600">•</span>
          <span className="text-amber-400 font-semibold">Sales</span>
        </div>
      )}
    </div>
  );
}
