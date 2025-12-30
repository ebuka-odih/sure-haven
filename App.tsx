
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-800/10 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <section id="booking" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book a Consultation</h2>
              <p className="text-gray-400 max-w-lg mx-auto">Transform your living space into a haven of refined elegance. Share your details below.</p>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
