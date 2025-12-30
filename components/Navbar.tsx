
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-emerald-600 flex items-center justify-center rounded-lg">
            <span className="font-bold text-xl text-emerald-500">SH</span>
          </div>
          <span className="text-xl font-bold tracking-widest hidden sm:block">SURE HAVEN</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-gray-400">
          <a href="#hero" className="hover:text-emerald-500 transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-emerald-500 transition-colors">Portfolio</a>
          <a href="#booking" className="hover:text-emerald-500 transition-colors">Booking</a>
          <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
        </div>

        <a 
          href="#booking" 
          className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-600 transition-all text-sm uppercase"
        >
          Work With Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
