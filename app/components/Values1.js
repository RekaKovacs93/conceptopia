"use client";
import { useState, useEffect } from 'react';
import gsap from 'gsap';


const values = [
  {
    name: "Partnerség",
    desc: "A velünk való együttműködés nem csupán projektalapú: tartós partnerségekre törekszünk, ahol a közös célok és sikerek számítanak. Hisszük, hogy a hosszú távú együttműködés minden résztvevő számára előnyös, és így tudunk valóban maradandót alkotni."
  },
  {
    name: "Kreativitás",
    desc: "Számunkra a személyre szabott megközelítés a siker kulcsa. Minden ügyfelünk története egyedi, és mi itt vagyunk, hogy ezeket a történeteket életre keltsük."
  },
  {
    name: "Eredetiség",
    desc: "Nyitott kommunikációnk révén biztosítjuk, hogy mindig az általad is megfelelőnek vélt irányba haladjunk, és a közönségeddel való kapcsolatépítés során olyan értékeket képviselj, amelyek valóban fontosak számodra."
  },
  {
    name: "Innováció",
    desc: "Innovatív megközelítésünkkel és kreatív stratégiáinkkal ki tudunk emelni a versenytársaid közül, legyen szó webfejlesztésről, grafikai tervezésről vagy közösségi média menedzsmentről."
  }
];

export default function Values1() {

  const valtl = gsap.timeline();

  useEffect(() => {
    const valtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-1", // Start when the first element enters
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
    
    // valent 1 sliding in from the right
    valtl.fromTo(".val-1", 
      {
        x: "100%", // Start off-screen to the right
        opacity: 0, // Make it invisible initially
      }, 
      {
        x: "0%", // End at its natural position
        opacity: 1, 
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });
    
    // valent 2 sliding in from the right
    valtl.fromTo(".val-2", 
      {
        x: "100%", // Start off-screen to the right
        opacity: 0, // Make it invisible initially
      }, 
      {
        x: "0%", // End at its natural position
        opacity: 1, 
        duration: 0.5,
        ease: "power3.out",
      });
    
    // valent 3 sliding in from the right
    valtl.fromTo(".val-3", 
      {
        x: "100%", // Start off-screen to the right
        opacity: 0, // Make it invisible initially
      }, 
      {
        x: "0%", // End at its natural position
        opacity: 1, 
        duration: 0.5,
        ease: "power3.out",
      });
    
    // valent 4 sliding in from the right
    valtl.fromTo(".val-4", 
      {
        x: "100%", // Start off-screen to the right
        opacity: 0, // Make it invisible initially
      }, 
      {
        x: "0%", // End at its natural position
        opacity: 1, 
        duration: 0.5,
        ease: "power3.out",
      });
    

  }, []);
        
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 w-full">
      
      {/* Mobile (Always Open) */}
      <div className="flex flex-col gap-4 w-full md:hidden">
        {values.map((value) => (
          <div key={value.name} className="p-6 element bg-dark text-light rounded-lg w-full">
            <h1 className="text-3xl font-light text-center">{value.name}</h1>
            <p className="mt-2 text-center">{value.desc}</p>
          </div>
        ))}
      </div>

      {/* Desktop (Stacked Rows Layout) */}
      <div className="hidden md:flex flex-col gap-4 w-full max-w-3xl">
        {values.map((value, index) => (
          <div
            key={value.name}
            className={`val-${index + 1} relative flex items-center justify-center gradient p-6 rounded-lg transition-all duration-300 cursor-pointer ${
              expanded === index ? "h-auto py-8 flex-col" : "h-16 flex items-center justify-center"
            }`}
            onClick={() => toggleExpand(index)}
          >
            {/* Name (Only visible when collapsed) */}
            {expanded !== index && (
              <h1 className="text-3xl font ">{value.name}</h1>
            )}

            {/* Expanded Content (Name + Description in Column Layout) */}
            {expanded === index && (
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font">{value.name}</h1>
                <p className="mt-4 text-lg">{value.desc}</p>
              </div>
            )}

            {/* Plus/Minus Toggle */}
            <span className="absolute top-3 right-5 transform -translate-x-1/2 text-3xl text-center aborder rounded-full w-10 h-10 cursor-hover">
              {expanded === index ? "−" : "+"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
