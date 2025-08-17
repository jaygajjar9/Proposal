
import React from 'react';
import { FlowerIcon } from './icons';

export const Hero: React.FC = () => {
  return (
    <header className="w-full h-screen flex flex-col justify-center items-center text-center p-4 relative">
      <div className="absolute inset-0 flex justify-center items-center heart-beating">
        <svg
          width="300"
          height="300"
          viewBox="0 0 24 24"
          className="w-64 h-64 md:w-96 md:h-96 text-red-500"
          style={{ filter: "drop-shadow(0 0 5px rgba(239, 68, 68, 0.7)) drop-shadow(0 0 15px rgba(239, 68, 68, 0.5))" }}
        >
          <path
            className="heart-path"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="rgba(239, 68, 68, 0.1)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="relative z-10 animate-fade-in-slow">
        <h1 className="font-great-vibes text-7xl md:text-9xl text-slate-800" style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
          Happy Birthday
        </h1>
        <div className="relative mt-4 inline-block">
            <div className="absolute -top-10 -left-12 opacity-80" style={{ animation: `float 4s ease-in-out infinite 0.2s` }}>
                <FlowerIcon className="w-16 h-16 text-pink-300 -rotate-45" />
            </div>
            <div className="absolute -bottom-8 -right-12 opacity-90" style={{ animation: `float 4s ease-in-out infinite 0.5s` }}>
                <FlowerIcon className="w-20 h-20 text-red-300 rotate-30" />
            </div>
            <div className="absolute top-10 -right-24 opacity-70" style={{ animation: `float 5s ease-in-out infinite` }}>
                <FlowerIcon className="w-12 h-12 text-rose-300 rotate-12" />
            </div>
            <p className="text-6xl md:text-8xl font-bold tracking-widest uppercase text-red-600" style={{ textShadow: "1px 1px 5px rgba(239,68,68,0.3)" }}>
            Manu
            </p>
        </div>
      </div>
    </header>
  );
};