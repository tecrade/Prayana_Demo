import React, { useState } from 'react';
import { Notebook as Robot } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
     <main>
        <Hero/>
        <About />
        <Gallery/>
        <Events />
        <Speakers />
        <Schedule />
        <Contact />
      </main>
     <RegistrationForm/>
      <footer className="bg-gray-900 py-6 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Robot className="w-6 h-6" />
            <span className="font-bold text-xl">Prayana</span>
          </div>
          <p className="text-gray-400">© 2025 IEEE RAS Kerala Section. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;