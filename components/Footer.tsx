
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 px-4 bg-[#050705]">
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 border-2 border-[#ffebd7] flex items-center justify-center rounded-lg">
                <span className="font-bold text-xl text-[#ffebd7]">SH</span>
              </div>
              <span className="text-2xl font-bold tracking-widest">SURE HAVEN</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Crafting premium interiors that balance aesthetics, functionality, and comfort. Your dream haven, realized.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wider uppercase text-[#ffebd7]">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center border-[#ffebd7]/30">
                    <svg className="w-5 h-5 text-[#ffebd7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span>+234 903 784 7206</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 glass rounded-full flex items-center justify-center border-[#ffebd7]/30">
                    <svg className="w-5 h-5 text-[#ffebd7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span>Okpanam Rd, Asaba Delta State</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wider uppercase text-[#ffebd7]">Follow Our Journey</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/surehavenltd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-[#ffddb2] hover:text-black transition-all border-white/5">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://wa.me/2349037847206" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-[#ffddb2] hover:text-black transition-all border-white/5">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.133 1.415 4.75 1.416 5.454.001 9.891-4.438 9.893-9.895-.001-2.646-1.03-5.132-2.903-7.005-1.871-1.873-4.359-2.903-7.007-2.904-5.451 0-9.887 4.437-9.89 9.894-.001 2.019.531 3.991 1.54 5.733l-.155-.246-1.012 3.7.354-.093 3.824-1.004-.396.21zm10.534-4.939c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} SURE HAVEN INTERIOR DESIGN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
