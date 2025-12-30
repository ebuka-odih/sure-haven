
import React from 'react';
import { PortfolioItem } from '../types';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "The Grand Feature Hall",
    category: "Sitting Room",
    imageUrl: img1
  },
  {
    id: 2,
    title: "Master Sanctuary",
    category: "Bedroom",
    imageUrl: img2
  },
  {
    id: 3,
    title: "Luxe Culinary Hub",
    category: "Modern Kitchen",
    imageUrl: img3
  },
  {
    id: 4,
    title: "Luxury Spa Retreat",
    category: "Luxury Bathroom",
    imageUrl: img4
  },
  {
    id: 5,
    title: "Glass Wardrobe System",
    category: "Walk-in Closet",
    imageUrl: img5
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-[#ffebd7] font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-2">Our Recent Havens</h2>
          </div>
          <div className="text-right glass p-4 rounded-xl border-[#ffebd7]/30">
             <p className="text-[#ffebd7] font-bold">Price Status</p>
             <p className="text-2xl font-serif text-gray-300">Affordable Luxury</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-3xl aspect-[4/5] glass border-white/5">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#ffebd7] text-sm font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-block glass px-8 py-4 rounded-full text-xl font-serif italic text-gray-400 border-[#ffebd7]/20">
                DM for custom interiors that speak your style.
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
