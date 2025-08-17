
import React, { useState } from 'react';

export const Proposal: React.FC = () => {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoHover = () => {
    setNoClickCount(prev => prev + 1);
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 50 - 25;
    setNoPosition({ x: newX, y: newY });
  };

  const getNoButtonText = () => {
    if (noClickCount === 0) return "No";
    if (noClickCount < 3) return "Are you sure?";
    if (noClickCount < 5) return "Really?";
    if (noClickCount < 7) return "Think again!";
    return "It's inevitable 😉";
  };
  
  if (yesClicked) {
    return (
      <section className="w-full max-w-2xl mx-auto px-6 py-24 flex flex-col items-center text-center transition-opacity duration-1000 opacity-100">
        <div className="relative p-2 rounded-2xl" style={{ boxShadow: '0 0 30px rgba(239, 68, 68, 0.3), 0 0 60px rgba(239, 68, 68, 0.2)' }}>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-xl">
              <h2 className="font-great-vibes text-6xl text-red-500 mb-6 animate-pulse">🎉 You said Yes! 🎉</h2>
              <p className="text-lg text-slate-700 mb-4">
                This is the best decision! My heart is doing a million backflips right now. ❤️
              </p>
              <p className="text-sm text-slate-500 font-semibold">
                Disclaimer: This 'Yes' is legally and emotionally binding only upon verbal confirmation when we meet in person. Until then, consider this a high-priority, heavily-encrypted proposal pending decryption. 😉 All other scenarios are hereby declared null and void. 😄
              </p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-24 flex flex-col items-center text-center">
      <h2 className="font-great-vibes text-5xl md:text-6xl text-red-500 mb-4">One Last Question...</h2>
      <p className="text-xl md:text-2xl mb-8 text-slate-700">Will you be my partner, for a lifetime of adventures?</p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setYesClicked(true)}
          className="bg-red-500 text-white font-bold py-4 px-12 rounded-lg text-2xl shadow-lg hover:bg-red-600 hover:scale-110 transform transition-all duration-300 ease-in-out"
        >
          Yes
        </button>
        <button
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
          className="bg-slate-300 text-slate-700 font-bold py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-400 transform transition-all duration-300 ease-in-out"
        >
          {getNoButtonText()}
        </button>
      </div>
    </section>
  );
};