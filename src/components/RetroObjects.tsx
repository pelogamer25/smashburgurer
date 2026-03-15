import React from 'react';

export const CassetteTape = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 250" className={className} style={{ filter: 'drop-shadow(0 10px 20px rgba(255, 0, 51, 0.5))' }}>
    {/* Base */}
    <rect x="10" y="10" width="380" height="230" rx="20" fill="#1a0505" stroke="#ff0033" strokeWidth="4" />
    {/* Label */}
    <rect x="30" y="30" width="340" height="120" rx="10" fill="#050000" stroke="#990011" strokeWidth="2" />
    <path d="M 30 100 L 370 100" stroke="#ff0033" strokeWidth="4" />
    <path d="M 30 110 L 370 110" stroke="#ff4d00" strokeWidth="4" />
    <path d="M 30 120 L 370 120" stroke="#990011" strokeWidth="4" />
    {/* Spools */}
    <circle cx="120" cy="80" r="30" fill="#1a0505" stroke="#fff" strokeWidth="2" />
    <circle cx="280" cy="80" r="30" fill="#1a0505" stroke="#fff" strokeWidth="2" />
    {/* Spool teeth */}
    <path d="M 120 50 L 120 110 M 90 80 L 150 80 M 100 60 L 140 100 M 100 100 L 140 60" stroke="#fff" strokeWidth="4" />
    <path d="M 280 50 L 280 110 M 250 80 L 310 80 M 260 60 L 300 100 M 260 100 L 300 60" stroke="#fff" strokeWidth="4" />
    {/* Bottom trapezoid */}
    <path d="M 80 240 L 100 180 L 300 180 L 320 240 Z" fill="#050000" stroke="#ff0033" strokeWidth="2" />
    <circle cx="120" cy="210" r="10" fill="#1a0505" />
    <circle cx="280" cy="210" r="10" fill="#1a0505" />
  </svg>
);

export const RetroSun = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} style={{ filter: 'drop-shadow(0 0 30px rgba(255, 77, 0, 0.8))' }}>
    <defs>
      <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff4d00" />
        <stop offset="50%" stopColor="#ff0033" />
        <stop offset="100%" stopColor="#050000" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#sunGrad)" />
    {/* Cutouts */}
    <rect x="0" y="110" width="200" height="4" fill="#050000" />
    <rect x="0" y="125" width="200" height="6" fill="#050000" />
    <rect x="0" y="145" width="200" height="8" fill="#050000" />
    <rect x="0" y="170" width="200" height="12" fill="#050000" />
  </svg>
);

export const ArcadeGhost = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ filter: 'drop-shadow(0 0 15px rgba(255, 0, 51, 0.8))' }}>
    <path d="M 10 90 L 10 50 Q 10 10 50 10 Q 90 10 90 50 L 90 90 L 75 75 L 60 90 L 50 75 L 40 90 L 25 75 Z" fill="#ff0033" />
    <circle cx="35" cy="40" r="10" fill="white" />
    <circle cx="65" cy="40" r="10" fill="white" />
    <circle cx="40" cy="40" r="4" fill="#050000" />
    <circle cx="70" cy="40" r="4" fill="#050000" />
  </svg>
);
