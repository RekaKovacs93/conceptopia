'use client'

import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Values1 from "./Values1";
export default function About3() {

  const abouttl = gsap.timeline();
    
  useEffect(() => {
    gsap.from([".about-1", ".about-2", ".about-3"], {
      x: "-100%", // Start from left (off-screen)
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-1", // Trigger animation for .about-2 itself
        start: "top 80%", // Start animation when .about-2 reaches 80% from the top
        toggleActions: "play none none none", // Animation play on scroll
      }
    });
    

    // ScrollTrigger for about-3 (slides in from the right)


  }, []);
  
  return (
    <div className="min-h-screen px-20">
       <h1 className="about-1 font text-4xl text-center gradient-text py-10">
          Kiemelt értékeink
        </h1>
        <div className="flex pb-10">
          <h1 className="about-2 text-light p-5 text-xl w-3/4">
            A Conceptopia Kreatív Ügynökség azért jött létre, hogy segítsen neked átugrani ezeket az akadályokat, és lehetővé tegye, hogy kiaknázhasd vállalkozásod valódi potenciálját. A kreatív feladatok sokszorosára nőnek a növekedéssel, és ebben kulcsfontosságú, hogy egy profi csapat támogasson. A tervezéstől a kivitelezésig mindent elvégezünk, hogy erősítsük a márkád jelenlétét. Nem csak szolgáltatásokat kínálunk – teljes körű megoldásokat biztosítunk a vállalkozásod számára. Mivel számodra a leghatékonyabb megoldás a legfontosabb, az együttműködés mindig személyre szabott, és egy igazi közös munkán alapul. Az őszinte kommunikáció, a folyamatos fejlődés és a teljes mértékű szakmai és emberi hozzájárulás mind a te sikeredért van. Eközben gondoskodunk arról is, hogy mindezt költséghatékony módon valósíthasd meg, így te nyugodtan a növekedésre összpontosíthatsz. Mi minden másról gondoskodunk, hogy sikeresen építhesd a jövődet.
          </h1>
          <Values1 className="about-3"/>
        </div>

     
    </div>
  );
}
