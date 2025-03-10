'use client'

import { useState, useEffect } from 'react';
import { gsap } from "gsap";



export default function Hero1() {

  useEffect(() => {

    
    const tl = gsap.timeline();

    // Set the initial state of the .conc element (hidden and scaled down)
    gsap.set(".conc", { opacity: 0, scale: 0.9 });

    // Animate each span (letter) with staggered effect (text appearing)
    tl.to(".conc", { opacity: 1, duration: 0.5 }); // First make the whole text appear
    tl.fromTo(
      ".conc span", 
      { opacity: 0, y: 50 }, // Start with opacity 0 and y=50 (from below)
      {
        opacity: 1, 
        y: 0, 
        stagger: 0.1, // Stagger effect for each letter
        duration: 1.5,
        ease: "elastic",
      }
    );
    // navtl.to(".conc", { opacity: 1, duration: 0.5 }, 0.5);
    tl.to(".desc", { opacity: 1, duration: 1 }, 4);
    
  }, [])
  
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
      
      <h1 className="conc opacity-0 font text-4xl md:text-9xl text-center gradient-text scale-90">
      <span>C</span><span>O</span><span>N</span><span>C</span><span>E</span><span>P</span><span>T</span><span>O</span><span>P</span><span>I</span><span>A</span>

      </h1>
      <h1 className="desc opacity-0 font md:text-3xl text-lg text-center gradient-text mt-5">
        Kreativitás határok nélkül
      </h1>
     
      
    </div>
  );
}
