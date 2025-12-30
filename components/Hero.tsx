
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Living Room" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0a] via-transparent to-[#0a0c0a]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl glass-dark p-8 md:p-16 rounded-[2rem] border-white/10">
        <div className="mb-6 flex justify-center">
            <svg className="w-20 h-20 text-[#ffebd7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          SURE HAVEN <br />
          <span className="text-[#ffebd7]">INTERIOR DESIGN</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 italic mb-8 max-w-2xl mx-auto">
          "Spaces Unfolding in Refined Elegance... We create spaces that show your style with ease."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#portfolio" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all uppercase tracking-widest">
            View Gallery
          </a>
          <a href="https://wa.me/2349037847206" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-[#ffebd7]/40 glass hover:bg-white/10 rounded-full font-bold transition-all uppercase tracking-widest">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
