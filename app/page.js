"use client";

import { useState, useEffect } from 'react';
import Hero1 from './components/Hero1'
import About from './components/About'
import NavBar from './components/NavBar'
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate the percentage position of the mouse on the page
      const xPercent = (e.clientX / window.innerWidth) * 1000;
      const yPercent = (e.clientY / window.innerHeight) * 800;

      // Define the offset you want (in pixels)
      const offsetX = 100; // Change this value to adjust the horizontal offset
      const offsetY = 300; // Change this value to adjust the vertical offset

      // Dynamically update CSS variables for the background gradient
      document.documentElement.style.setProperty('--gradient-x', `${xPercent + offsetX}px`);
      document.documentElement.style.setProperty('--gradient-y', `${yPercent + offsetY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="flex flex-col items-center">
      <div className="grainy-background">
        <NavBar className="flex flex-col items-end md:flex-row md:items-center z-20" />

        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter className="opacity-15" id="noiseFilter" x="0" y="0" width="100%" height="100%">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.8" 
                numOctaves="1" 
                result="noise" />
              <feColorMatrix 
                type="saturate" 
                values="0" 
                result="monoNoise" />
              <feBlend 
                in="SourceGraphic" 
                in2="monoNoise" 
                mode="multiply" />
            </filter>
          </defs>
        </svg>

        <div id="home" className="w-full h-screen">
          <Hero1 />
        </div>
        <div id="about" className="w-full h-screen gradient ">
          <About />
        </div>
        <div className="w-full h-screen bg-dark">
          <Values />
        </div>
        <div id="szolgaltatasok" className="w-full h-screen gradient">
          <Services />
        </div>
        <div id="contact" className="w-full h-screen gradient">
          <Contact />
        </div>
        <div id="footer" className="w-full bg-dark">
          <Footer />
        </div>
      </div>
    </main>
  );
}
