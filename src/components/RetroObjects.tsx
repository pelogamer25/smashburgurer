import React from 'react';

export const CassetteTape = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 250" className={className} style={{ filter: 'drop-shadow(0 10px 30px rgba(250, 2, 2, 0.4))' }}>
    {/* Base */}
    <rect x="10" y="10" width="380" height="230" rx="20" fill="#0a0a0a" stroke="#FA0202" strokeWidth="2" />
    {/* Label */}
    <rect x="30" y="30" width="340" height="120" rx="10" fill="#030303" stroke="#F1F4EE" strokeWidth="1" strokeOpacity="0.3" />
    <path d="M 30 100 L 370 100" stroke="#FA0202" strokeWidth="2" />
    <path d="M 30 110 L 370 110" stroke="#F1F4EE" strokeWidth="2" strokeOpacity="0.8" />
    <path d="M 30 120 L 370 120" stroke="#5c0000" strokeWidth="2" />
    {/* Spools */}
    <circle cx="120" cy="80" r="30" fill="#0a0a0a" stroke="#F1F4EE" strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="280" cy="80" r="30" fill="#0a0a0a" stroke="#F1F4EE" strokeWidth="1" strokeOpacity="0.5" />
    {/* Spool teeth */}
    <path d="M 120 50 L 120 110 M 90 80 L 150 80 M 100 60 L 140 100 M 100 100 L 140 60" stroke="#F1F4EE" strokeWidth="2" strokeOpacity="0.8" />
    <path d="M 280 50 L 280 110 M 250 80 L 310 80 M 260 60 L 300 100 M 260 100 L 300 60" stroke="#F1F4EE" strokeWidth="2" strokeOpacity="0.8" />
    {/* Bottom trapezoid */}
    <path d="M 80 240 L 100 180 L 300 180 L 320 240 Z" fill="#030303" stroke="#FA0202" strokeWidth="1" />
    <circle cx="120" cy="210" r="10" fill="#0a0a0a" />
    <circle cx="280" cy="210" r="10" fill="#0a0a0a" />
  </svg>
);

export const RetroSun = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} style={{ filter: 'drop-shadow(0 0 40px rgba(250, 2, 2, 0.5))' }}>
    <defs>
      <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F1F4EE" />
        <stop offset="30%" stopColor="#FA0202" />
        <stop offset="100%" stopColor="#030303" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#sunGrad)" />
    {/* Cutouts */}
    <rect x="0" y="110" width="200" height="4" fill="#030303" />
    <rect x="0" y="125" width="200" height="6" fill="#030303" />
    <rect x="0" y="145" width="200" height="8" fill="#030303" />
    <rect x="0" y="170" width="200" height="12" fill="#030303" />
  </svg>
);

export const ArcadeGhost = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ filter: 'drop-shadow(0 0 20px rgba(250, 2, 2, 0.6))' }}>
    <path d="M 10 90 L 10 50 Q 10 10 50 10 Q 90 10 90 50 L 90 90 L 75 75 L 60 90 L 50 75 L 40 90 L 25 75 Z" fill="#FA0202" />
    <circle cx="35" cy="40" r="10" fill="#F1F4EE" />
    <circle cx="65" cy="40" r="10" fill="#F1F4EE" />
    <circle cx="40" cy="40" r="4" fill="#030303" />
    <circle cx="70" cy="40" r="4" fill="#030303" />
  </svg>
);
