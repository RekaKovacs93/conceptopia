"use client"; // Ensure this is a Client Component

import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer"

export default function ServiceClientComponent({ service }) {
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
    <main className="flex flex-col items-center h-full">
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
    <div className="flex flex-col justify-center items-center mt-40 ">
      <h1 className="gradient-text font text-9xl">{service.title}</h1>
      <p className="mt-4 mb-20 text-xl font-light">{service.desc}</p>
      <div className=" w-screen h-full flex flex-wrap gap-5 items-center justify-center pb-10">
      {service.features.map((feature, index) => (
                
            <div key={index} className=" h-48 w-96 md:h-48 md:w-96 rounded-2xl gradient">
                <div className="w-full h-full flex flex-col items-center justify-evenly">
                <div className="h-16 flex items-center">
                  <h1 id="title" className=" text-3xl font text-center">{feature.title}</h1>
                </div>
                <div className="w-48 h-0.5 bg-dark" />
                <div>
                  <h1 id="title" className="mb-5  opacity-100 text-center">{feature.desc}</h1>
                </div>
                </div>
          </div>
          
        ))}
    </div>
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
