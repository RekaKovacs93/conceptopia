"use client";
import { useState } from "react";

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
  const [expanded, setExpanded] = useState(null); // Track expanded card

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expanded state
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center p-6">
      <h1 className="font text-4xl text-center gradient-text mb-10">
        Kiemelt értékeink
      </h1>

      {/* Mobile (Always Open) */}
      <div className="flex flex-col gap-4 w-full md:hidden">
        {values.map((value) => (
          <div key={value.name} className="p-6 element bg-dark text-light rounded-lg w-full">
            <h1 className="text-3xl font-light text-center">{value.name}</h1>
            <p className="mt-2 text-center">{value.desc}</p>
          </div>
        ))}
      </div>

      {/* Desktop (Original Behavior) */}
      <div className="hidden md:flex items-center justify-center gap-4">
        {values.map((value, index) => (
          <div
            key={value.name}
            className={`relative flex items-center justify-center gradient rounded-lg ${
              expanded === index
                ? "w-96 h-96" // Expanded state with width and height
                : "w-20 h-96 cursor-pointer" // Collapsed state with width and height
            }`}
            onClick={() => toggleExpand(index)}
          >
            {/* Plus sign in the collapsed state */}
            {expanded !== index && (
              <span className="absolute top-3 left-1/2 transform -translate-x-1/2 text-3xl text-center aborder rounded-full w-10 h-10">
                +
              </span>
            )}

            {expanded === index ? (
              <>
                <h1 className="text-3xl font -rotate-90 w-20 flex-shrink-0">
                  {value.name}
                </h1>
                <div className="aborder border-l-2 h-96"></div>
                <p className="p-8">{value.desc}</p>
              </>
            ) : (
              <h1 className="-rotate-90 text-3xl font flex-shrink-0">{value.name}</h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
