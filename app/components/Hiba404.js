"use client";

import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
 


export default function Hiba404() {
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
    <main className="flex-col flex min-h-screen items-center justify-between lg:px-24 px-10">
      <div className="grainy-background min-h-screen overflow-x-clip">
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

        {/* <div id="home" className=" min-h-screen">
          <Hero1 />
        </div> */}

    <div className="min-h-screen  flex flex-col items-center justify-center px-4">

      <h1 className="font text-4xl md:text-9xl text-center md:gradient-text text-grad">
       404
     </h1>
     <h1 className="font md:text-3xl text-lg text-center md:gradient-text text-grad mt-5">
       Hibás url
     </h1>
    </div> 
      
    </div>
    </main>

  );
}
