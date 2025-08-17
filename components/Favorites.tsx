import React from 'react';
import { CoffeeIcon, DosaIcon, CarIcon, AdventureIcon } from './icons';

export const Favorites: React.FC = () => {
    const items = [
        {
            icon: <CoffeeIcon />,
            title: "Our Coffee Breaks",
            description: "Nothing beats a hot cup of coffee, especially when I'm sharing it with you. Here's to turning all our busy days into cozy moments, just us."
        },
        {
            icon: <DosaIcon />,
            title: "Delicious Dosa Dates",
            description: "This is more than just food; it's our comfort ritual. Every crispy bite is a taste of happiness, made perfect because I'm sharing it with you."
        },
        {
            icon: <CarIcon />,
            title: "Our Long Drives",
            description: "The world feels right with you next to me, the music up, and an open road ahead. You'll always be my favorite co-pilot for this beautiful journey of life."
        },
        {
            icon: <AdventureIcon />,
            title: "Our Future Adventures",
            description: "These canvases are blank, just waiting for us. If you say yes, we'll fill every single one with a lifetime of colorful memories, laughter, and love."
        }
    ];

    return (
        <div className="w-full space-y-20 md:space-y-28">
            {items.map((item, index) => (
                <div 
                    key={item.title}
                    className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                    <div className="w-2/3 sm:w-1/2 md:w-1/3 flex justify-center items-center text-red-400 drop-shadow-lg">
                        {item.icon}
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h3 className="font-great-vibes text-4xl md:text-5xl mb-4 text-red-500">{item.title}</h3>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};