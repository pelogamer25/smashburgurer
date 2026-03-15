import React from 'react';

export const TopBun = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 150" className={className} style={{ filter: 'drop-shadow(0 20px 30px rgba(217, 90, 0, 0.4))' }}>
    <path d="M 20 140 Q 200 -50 380 140 Q 390 150 380 150 L 20 150 Q 10 150 20 140 Z" fill="#c47a3b" />
    <path d="M 20 140 Q 200 -50 380 140 Q 390 150 380 150 L 20 150 Q 10 150 20 140 Z" fill="url(#bunGradient)" />
    <defs>
      <linearGradient id="bunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e89c51" />
        <stop offset="100%" stopColor="#a65e24" />
      </linearGradient>
    </defs>
    {/* Sesame seeds */}
    <ellipse cx="100" cy="80" rx="4" ry="2" fill="#fdfbf7" transform="rotate(-20 100 80)" />
    <ellipse cx="150" cy="50" rx="4" ry="2" fill="#fdfbf7" transform="rotate(-10 150 50)" />
    <ellipse cx="200" cy="40" rx="4" ry="2" fill="#fdfbf7" transform="rotate(0 200 40)" />
    <ellipse cx="250" cy="50" rx="4" ry="2" fill="#fdfbf7" transform="rotate(10 250 50)" />
    <ellipse cx="300" cy="80" rx="4" ry="2" fill="#fdfbf7" transform="rotate(20 300 80)" />
    <ellipse cx="120" cy="110" rx="4" ry="2" fill="#fdfbf7" transform="rotate(-15 120 110)" />
    <ellipse cx="180" cy="90" rx="4" ry="2" fill="#fdfbf7" transform="rotate(-5 180 90)" />
    <ellipse cx="230" cy="90" rx="4" ry="2" fill="#fdfbf7" transform="rotate(5 230 90)" />
    <ellipse cx="280" cy="110" rx="4" ry="2" fill="#fdfbf7" transform="rotate(15 280 110)" />
  </svg>
);

export const Cheese = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 420 80" className={className} style={{ filter: 'drop-shadow(0 10px 20px rgba(255, 140, 0, 0.5))' }}>
    <path d="M 10 20 L 410 20 L 390 50 Q 380 70 360 60 Q 340 50 320 70 Q 300 90 280 60 Q 260 40 240 60 Q 220 80 200 60 Q 180 40 160 60 Q 140 80 120 60 Q 100 40 80 60 Q 60 80 40 50 Z" fill="#ffb703" />
    <path d="M 10 20 L 410 20 L 390 50 Q 380 70 360 60 Q 340 50 320 70 Q 300 90 280 60 Q 260 40 240 60 Q 220 80 200 60 Q 180 40 160 60 Q 140 80 120 60 Q 100 40 80 60 Q 60 80 40 50 Z" fill="url(#cheeseGradient)" opacity="0.6" />
    <defs>
      <linearGradient id="cheeseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffc300" />
        <stop offset="100%" stopColor="#fb8500" />
      </linearGradient>
    </defs>
  </svg>
);

export const Patty = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 80" className={className} style={{ filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.8))' }}>
    <rect x="10" y="10" width="380" height="60" rx="30" fill="#3a2012" />
    <rect x="10" y="10" width="380" height="60" rx="30" fill="url(#pattyGradient)" />
    {/* Texture lines */}
    <path d="M 30 30 Q 100 20 200 30 T 370 30" stroke="#2a150a" strokeWidth="3" fill="none" opacity="0.5" />
    <path d="M 40 50 Q 150 40 250 50 T 360 50" stroke="#2a150a" strokeWidth="4" fill="none" opacity="0.5" />
    <defs>
      <linearGradient id="pattyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4a2815" />
        <stop offset="50%" stopColor="#3a2012" />
        <stop offset="100%" stopColor="#251208" />
      </linearGradient>
    </defs>
  </svg>
);

export const Lettuce = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 440 100" className={className} style={{ filter: 'drop-shadow(0 15px 25px rgba(0, 50, 0, 0.4))' }}>
    <path d="M 0 50 Q 20 10 50 40 T 100 30 T 150 60 T 200 20 T 250 50 T 300 30 T 350 60 T 400 20 T 440 50 Q 420 90 390 70 T 340 80 T 290 60 T 240 90 T 190 70 T 140 90 T 90 60 T 40 80 Z" fill="#2d6a4f" />
    <path d="M 0 50 Q 20 10 50 40 T 100 30 T 150 60 T 200 20 T 250 50 T 300 30 T 350 60 T 400 20 T 440 50 Q 420 90 390 70 T 340 80 T 290 60 T 240 90 T 190 70 T 140 90 T 90 60 T 40 80 Z" fill="url(#lettuceGradient)" opacity="0.8" />
    <defs>
      <linearGradient id="lettuceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#40916c" />
        <stop offset="100%" stopColor="#1b4332" />
      </linearGradient>
    </defs>
  </svg>
);

export const Tomato = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 60" className={className} style={{ filter: 'drop-shadow(0 15px 25px rgba(139, 0, 0, 0.6))' }}>
    <ellipse cx="120" cy="30" rx="100" ry="25" fill="#d90429" />
    <ellipse cx="280" cy="30" rx="100" ry="25" fill="#ef233c" />
    <ellipse cx="200" cy="30" rx="110" ry="28" fill="#d90429" />
    <ellipse cx="200" cy="30" rx="110" ry="28" fill="url(#tomatoGradient)" opacity="0.7" />
    {/* Inner details */}
    <ellipse cx="160" cy="30" rx="20" ry="8" fill="#ef233c" />
    <ellipse cx="240" cy="30" rx="20" ry="8" fill="#ef233c" />
    <defs>
      <linearGradient id="tomatoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ef233c" />
        <stop offset="100%" stopColor="#8d0801" />
      </linearGradient>
    </defs>
  </svg>
);

export const Onions = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 380 50" className={className} style={{ filter: 'drop-shadow(0 10px 20px rgba(217, 90, 0, 0.5))' }}>
    <path d="M 40 25 Q 100 0 150 25 T 250 25 T 340 25" stroke="#ca6702" strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M 60 35 Q 120 10 180 35 T 280 35 T 320 35" stroke="#ee9b00" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M 80 15 Q 140 -10 200 15 T 300 15" stroke="#bb3e03" strokeWidth="7" strokeLinecap="round" fill="none" />
  </svg>
);

export const Pickles = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 360 40" className={className} style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 50, 0, 0.5))' }}>
    <ellipse cx="100" cy="20" rx="60" ry="15" fill="#52796f" />
    <ellipse cx="260" cy="20" rx="60" ry="15" fill="#354f52" />
    <ellipse cx="180" cy="20" rx="60" ry="15" fill="#52796f" />
    {/* Ridges */}
    <path d="M 140 10 L 140 30 M 160 8 L 160 32 M 180 6 L 180 34 M 200 8 L 200 32 M 220 10 L 220 30" stroke="#2f3e46" strokeWidth="2" fill="none" />
    <path d="M 60 10 L 60 30 M 80 8 L 80 32 M 100 6 L 100 34 M 120 8 L 120 32" stroke="#2f3e46" strokeWidth="2" fill="none" />
    <path d="M 220 10 L 220 30 M 240 8 L 240 32 M 260 6 L 260 34 M 280 8 L 280 32 M 300 10 L 300 30" stroke="#2f3e46" strokeWidth="2" fill="none" />
  </svg>
);

export const Sauce = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 380 60" className={className} style={{ filter: 'drop-shadow(0 15px 20px rgba(139, 0, 0, 0.7))' }}>
    <path d="M 20 10 Q 50 30 80 10 T 140 10 T 200 40 T 260 10 T 320 30 T 360 10 L 360 0 L 20 0 Z" fill="#9d0208" />
    <path d="M 20 10 Q 50 30 80 10 T 140 10 T 200 40 T 260 10 T 320 30 T 360 10 L 360 0 L 20 0 Z" fill="url(#sauceGradient)" opacity="0.8" />
    <defs>
      <linearGradient id="sauceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#dc2f02" />
        <stop offset="100%" stopColor="#6a040f" />
      </linearGradient>
    </defs>
  </svg>
);

export const BottomBun = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 100" className={className} style={{ filter: 'drop-shadow(0 30px 40px rgba(0, 0, 0, 0.9))' }}>
    <path d="M 20 10 L 380 10 Q 390 10 390 20 Q 380 90 200 90 Q 20 90 10 20 Q 10 10 20 10 Z" fill="#c47a3b" />
    <path d="M 20 10 L 380 10 Q 390 10 390 20 Q 380 90 200 90 Q 20 90 10 20 Q 10 10 20 10 Z" fill="url(#bottomBunGradient)" />
    <defs>
      <linearGradient id="bottomBunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e89c51" />
        <stop offset="100%" stopColor="#8b4513" />
      </linearGradient>
    </defs>
  </svg>
);
