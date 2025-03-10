'use client'

import { useState, useEffect } from 'react';
import gsap from 'gsap';


const kerdesek = [
    {
        kerdes: "Milyen szolgáltatásokat kínáltok?",
        kerdasz: "Mindenben igyekszünk segíteni, ami a márkád vizuális és digitális sikeréhez kell. Grafikai tervezés, közösségi média menedzsment, webfejlesztés (akár egyedi, akár WordPress alapú), és professzionális fotózás. Minden szolgáltatásunk célja, hogy támogassuk a vállalkozásod növekedését és láthatóságát, miközben maximálisan a te igényeidre szabjuk a megoldásokat."
    },
    {
        kerdes: "Hogyan működik a folyamat?",
        kerdasz: "Minden projektet egy személyre szabott konzultációkerd kezdünk. Itt alaposan átbeszéljük a céljaidat, és pontosan felmérjük, hogy mire van szükséged. Ezt követően megtervezzük a stratégiát, elkészítjük a tartalmat, lebonyolítjuk a fotózást (ha szükséges), és folyamatosan nyomon követjük a munkát, hogy biztosan a legjobb eredményeket érd el."
    },
    {
        kerdes: "Mennyi ideig tart egy projekt?",
        kerdasz: "A projekt időtartama az igényektől függ. Egy egyszerűbb feladat, mint bizonyos grafikai anyagok elkészítése, akár egy-két hét alatt is kész lehet. Ha webfejlesztésről vagy egy komplex kampányról van szó, az időtartam hosszabb is lehet. Azonban minden projekt kezdetén tájékoztatunk, hogy pontosan mire számíthatsz."
    },
    {
        kerdes: "Mennyibe kerülnek a szolgáltatások?",
        kerdasz: "A költségek mindig az adott projekt típusától és az igényelt szolgáltatásoktól függnek. A legjobb módja annak, hogy megtudd, milyen költségekre számíthatsz, ha egy ingyenes konzultáció során részletesen átbeszéljük az elképzeléseidet és céljaidat. Ezzel pontos ajánlatot adhatunk, ami tökéletesen illeszkedik a te igényeidhez."
    },
    {
        kerdes: "Milyen formátumban kapom meg a végleges anyagokat?",
        kerdasz: "A végleges anyagokat mindig a legmegfelelőbb formátumban kapod meg. Általában digitális formátumban (pl. JPEG, PNG, PDF, GIF), de fotózás esetén természetesen a nyers képeket is biztosítjuk, ha szükséged van rájuk. Minden anyag tökéletesen alkalmas online és nyomtatott felhasználásra is."
    },
    {
        kerdes: "Hogyan lehet veletek kapcsolatba lépni",
        kerdasz: "Egyszerűen felveheted velünk a kapcsolatot a weboldalon található űrlap kitöltésével vagy e-mailben. Mindig örömmel válaszolunk a kérdéseidre, és segítünk a következő lépésekben."
    },
    {
        kerdes: "Miért bízzak meg egy külső szolgáltatóban a vállalkozásom grafikai, közösségi média vagy webes igényeivel?",
        kerdasz: "Tudjuk, hogy egy külső szolgáltató megbízása sok kérdést vethet fel. Azonban a csapatunk átláthatóságot és folyamatos kommunikációt biztosít. Mi nem csak dolgozunk, hanem partnerként támogatunk, hogy olyan megoldásokat kínáljunk, amelyek tényleg segítik a vállalkozásod sikerét. A célunk, hogy a te vállalkozásod igényei szerint dolgozzunk."
    },
    {
        kerdes: "Hogyan biztosítjátok, hogy a munkátok megfeleljen az elképzeléseimnek?",
        kerdasz: "Mielőtt bármibe belekezdenénk alaposan átbeszéljük a céljaidat és elvárásaidat. A projekt során folyamatosan visszajelzési lehetőséget biztosítunk, így biztos lehetsz benne, hogy a végső anyagok pontosan úgy tükrözik a márkád üzenetét, ahogyan azt elképzelted."
    },
    {
        kerdes: "Mi történik, ha nem tetszik az elkészült anyag?",
        kerdasz: "Az elégedettség az első számú prioritásunk. Ha bárminemű változtatást szeretnél, jelezd nekünk! Legtöbb megoldásunknál egy ingyenes változtatási lehetőséget biztosítunk, hogy tökéletesen megfeleljen az anyag a kívánt elképzeléseidnek. "
    }
]

export default function Gyik() {

   
    
    useEffect(() => {

        const kerdtl = gsap.timeline();

        // kerdtl
        // .to(".kerd-1", { opacity: 1, duration: 0.1 })
        // .to(".kerd-2", { opacity: 1, duration: 0.1 })
        // .to(".kerd-3", { opacity: 1, duration: 0.1 })
        // .to(".kerd-4", { opacity: 1, duration: 0.1 })
        // .to(".kerd-5", { opacity: 1, duration: 0.1 })
        // .to(".kerd-6", { opacity: 1, duration: 0.1 })
        // .to(".kerd-7", { opacity: 1, duration: 0.1 })
        // .to(".kerd-8", { opacity: 1, duration: 0.1 })
        // .to(".kerd-9", { opacity: 1, duration: 0.1 });
        kerdtl.fromTo(".kerd-1", 
            {
              x: "100%", // Start off-screen to the right
              opacity: 0, // Make it invisible initially
            }, 
            {
              x: "0%", // End at its natural position
              opacity: 1, 
              duration: 0.5,
              ease: "power3.out",
              delay: 2,
            });
          
          // kerdent 2 sliding in from the right
          kerdtl.fromTo(".kerd-2", 
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
          
          // kerdent 3 sliding in from the right
          kerdtl.fromTo(".kerd-3", 
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
          
          // kerdent 4 sliding in from the right
          kerdtl.fromTo(".kerd-4", 
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

        kerdtl.fromTo(".kerd-5", 
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
        kerdtl.fromTo(".kerd-6", 
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
        kerdtl.fromTo(".kerd-7", 
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
        kerdtl.fromTo(".kerd-8", 
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
        kerdtl.fromTo(".kerd-9", 
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
          
      
      
    }, [])

    return (
        <div className="flex flex-col items-center justify-center py-20 bg-dark">
        <h1 className="font gradient-text text-center py-20 text-4xl mx-10">Gyakran ismételt kérdések</h1>
        <div className='flex flex-wrap '>
          

        <div className=" w-screen flex flex-col flex-wrap gap-2  md:px-40 px-10 mb-10 ">
       
          {kerdesek.map((elem, index) => (            
              <div key={index} className=" rounded-lg">

                <div className="  relative w-full flex flex-col ">
                   
                <div className={`kerd-${index + 1} flex`}>
                    <div className='h-24 w-24 px-5'>
                        <h1 className='text-4xl text-grad font'>{index + 1}</h1>
                    </div>
                    <div className='flex flex-col rounded-lg'>
                    <h1 className=" text-2xl font-light under pb-2 mb-2">{elem.kerdes}</h1>
                    <p className="text-light text-base  px-5 pt-2 mb-5">{elem.kerdasz}</p>
                    </div>
                    
                </div>
            </div>
          </div>

          ))}
        </div>
        </div>
      </div>
    );
}
