'use client'

import { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero1() {

  useEffect(() => {
    const navtl = gsap.timeline();
    navtl.to(".conc", { opacity: 1, duration: 0.5 }, 0.5);
    navtl.to(".desc", { opacity: 1, duration: 0.5 });
  }, [])
  
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
       {/* <Image
                src="/bg.webp"
                alt="Interior Photo"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-5 z-0"
            /> */}
      <h1 className="conc opacity-0 font text-4xl md:text-9xl text-center gradient-text scale-90">
        CONCEPTOPIA
      </h1>
      <h1 className="desc opacity-0 font md:text-3xl text-lg text-center gradient-text mt-5">
        Kreativitás határok nélkül
      </h1>
     
      
    </div>
  );
}
