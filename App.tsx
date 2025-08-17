
import React from 'react';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Favorites } from './components/Favorites';
import { Proposal } from './components/Proposal';
import { FlowerIcon } from './components/icons';

const FlowerBackground: React.FC = () => {
    const flowerColors = ["text-red-300", "text-pink-300", "text-rose-300"];
    return (
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
            {Array.from({ length: 30 }).map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}vw`,
                    animationDuration: `${Math.random() * 7 + 10}s`,
                    animationDelay: `${Math.random() * 15}s`,
                    transform: `scale(${Math.random() * 0.5 + 0.5})`,
                    opacity: Math.random() * 0.4 + 0.3,
                };
                const color = flowerColors[i % flowerColors.length];
                return (
                    <div key={i} className="flower" style={style}>
                       <FlowerIcon className={color} />
                    </div>
                );
            })}
        </div>
    );
};


const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-red-50 via-pink-50 to-rose-100 text-slate-800 flex flex-col items-center overflow-x-hidden">
      <FlowerBackground />
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />

        <Section title="For My Favorite Biologist...">
          <p className="text-center text-lg md:text-xl max-w-2xl leading-relaxed text-slate-700">
            My dearest Manu, just as ATP powers the cell, your presence powers my life. Our bond is stronger than any covalent link, and my love for you follows a positive feedback loop—the more I feel, the more it grows. You are the nucleus of my world, orchestrating everything with grace and brilliance. Keep shining, my amazing scientist.
          </p>
        </Section>

        <Section title="A Few of Your Favorite Things">
            <Favorites />
        </Section>

        <Section title="A Special Note For You">
             <p className="text-center text-lg md:text-xl max-w-2xl leading-relaxed text-slate-700">
                On your birthday, I wish you a year filled with as much joy as you bring to everyone around you. May your days be as bright as your smile and as beautiful as your heart. You deserve all the happiness in the universe, and I feel incredibly lucky to celebrate you today.
            </p>
        </Section>

        <Proposal />
      </div>
      <footer className="w-full text-center p-8 text-slate-500 z-10">
        <p>Made with ❤️ for the one and only Manu.</p>
      </footer>
    </div>
  );
};

export default App;
