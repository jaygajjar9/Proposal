import React from 'react';

export const FlowerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${className}`}>
        <path d="M12.942 3.143c.434-.055.872-.086 1.313-.086C17.333 3.057 20 5.724 20 8.8c0 2.12-1.163 3.962-2.895 4.973.023.153.034.308.034.464 0 3.076-2.667 5.743-5.743 5.743-1.87 0-3.53-.92-4.527-2.327-1.354 1.302-3.273 2.11-5.412 2.11-1.31 0-2.525-.337-3.588-.914-2.22-1.205-3.5-3.46-3.5-5.992 0-3.92 3.18-7.1 7.1-7.1.33 0 .656.017.975.05C3.33 5.38 4.26 3.058 6.57 3.058c.433 0 .85.06 1.242.17C8.75 2.13 10.74 1.2 13.043 1.2c.493 0 .972.033 1.43.095L12.942 3.14z"/>
    </svg>
);

export const CoffeeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={`w-32 h-32 ${className}`}>
      {/* Steam */}
      <g fill="currentColor" opacity="0.4">
          <path className="steam-1" d="M32 16c-1.2 0-2.8 2.3-2.8 4.5s1.6 4.5 2.8 4.5 2.8-2.3 2.8-4.5-1.6-4.5-2.8-4.5z" />
          <path className="steam-2" d="M40 12c-1.2 0-2.8 2.3-2.8 4.5s1.6 4.5 2.8 4.5 2.8-2.3 2.8-4.5-1.6-4.5-2.8-4.5z" />
          <path className="steam-3" d="M24 14c-1.2 0-2.8 2.3-2.8 4.5s1.6 4.5 2.8 4.5 2.8-2.3 2.8-4.5-1.6-4.5-2.8-4.5z" />
      </g>
      {/* Mug */}
      <path d="M48 28h-4v-4a12 12 0 10-24 0v4h-4a4 4 0 00-4 4v16a4 4 0 004 4h28a4 4 0 004-4V32a4 4 0 00-4-4zM24 24a8 8 0 0116 0v4H24v-4z" fill="currentColor" opacity="0.8"/>
      <path d="M52 32v12a4 4 0 01-4 4h-4V32a4 4 0 00-4-4h-4v-4a8 8 0 018-8v4a4 4 0 014 4z" fill="currentColor"/>
    </svg>
);

export const DosaIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={`w-40 h-40 ${className}`}>
       {/* Steam */}
      <g fill="currentColor" opacity="0.3">
          <path className="steam-1" d="M45 28c-1.2 0-2.8 2.3-2.8 4.5s1.6 4.5 2.8 4.5 2.8-2.3 2.8-4.5-1.6-4.5-2.8-4.5z" />
          <path className="steam-2" d="M53 24c-1.2 0-2.8 2.3-2.8 4.5s1.6 4.5 2.8 4.5 2.8-2.3 2.8-4.5-1.6-4.5-2.8-4.5z" />
          <path className="steam-3" d="M37 26c-1.2 0-2.8 2.3-2.8 4.5s1.6 4.5 2.8 4.5 2.8-2.3 2.8-4.5-1.6-4.5-2.8-4.5z" />
      </g>
      {/* Plate */}
      <circle cx="50" cy="60" r="40" fill="#f0f3f5"/>
      <circle cx="50" cy="55" r="40" fill="#e2e8f0"/>
      <circle cx="50" cy="55" r="40" fill="currentColor" opacity="0.1"/>

      {/* Dosa with gradient for 3D effect */}
      <defs>
        <linearGradient id="dosaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#f7d08a'}} />
          <stop offset="50%" style={{stopColor: '#e5b35f'}} />
          <stop offset="100%" style={{stopColor: '#d49a3a'}} />
        </linearGradient>
      </defs>
      <path 
        d="M25,60 C40,40 60,40 75,60 L70,70 C60,55 40,55 30,70 Z" 
        fill="url(#dosaGradient)" 
        transform="rotate(-15 50 50)"
        stroke="#c58a2e"
        strokeWidth="1.5"
        style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))' }}
      />
    </svg>
);

export const CarIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className={`w-48 h-auto ${className}`}>
        {/* Body */}
        <path d="M18.8,75.4 L18.8,58.5 C18.8,56.1 20.8,54.1 23.2,54.1 L49.1,54.1 L64.8,38.9 L135.2,38.9 L150.9,54.1 L176.8,54.1 C179.2,54.1 181.2,56.1 181.2,58.5 L181.2,75.4 L18.8,75.4 Z" fill="currentColor"/>
        {/* Windows */}
        <path d="M54.5,54.1 L67.8,41.6 L132.2,41.6 L145.5,54.1 L54.5,54.1 Z" stroke="#fff9f9" fill="rgba(255, 249, 249, 0.5)" strokeWidth="2"/>
        {/* Wheels - Grouped for animation */}
        <g style={{ animation: 'spin 2s linear infinite', transformOrigin: '45px 75.4px' }}>
            <circle cx="45" cy="75.4" r="14" fill="#2d3748" stroke="currentColor" strokeWidth="1" />
            <circle cx="45" cy="75.4" r="6" fill="#a0aec0" />
        </g>
        <g style={{ animation: 'spin 2s linear infinite', transformOrigin: '155px 75.4px' }}>
            <circle cx="155" cy="75.4" r="14" fill="#2d3748" stroke="currentColor" strokeWidth="1" />
            <circle cx="155" cy="75.4" r="6" fill="#a0aec0" />
        </g>
    </svg>
);

export const AdventureIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={`w-36 h-36 ${className}`}>
    <g className="canvas-float-2" style={{ transformOrigin: '50px 10px' }}>
      <rect x="25" y="10" width="50" height="65" rx="3" fill="#fff9f9" stroke="currentColor" strokeWidth="1.5" opacity="0.7" transform="rotate(-8 50 42.5)" />
      <path d="M25 10 h50" stroke="currentColor" strokeWidth="3" opacity="0.7" transform="rotate(-8 50 42.5)" />
    </g>
    <g className="canvas-float-3" style={{ transformOrigin: '50px 20px' }}>
      <rect x="35" y="20" width="50" height="65" rx="3" fill="#fff9f9" stroke="currentColor" strokeWidth="1.5" opacity="0.8" transform="rotate(10 60 52.5)" />
      <path d="M35 20 h50" stroke="currentColor" strokeWidth="3" opacity="0.8" transform="rotate(10 60 52.5)" />
    </g>
    <g className="canvas-float-1" style={{ transformOrigin: '40px 15px' }}>
      <rect x="15" y="15" width="50" height="65" rx="3" fill="#fff9f9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 15 h50" stroke="currentColor" strokeWidth="3" />
    </g>
  </svg>
);