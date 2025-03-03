'use client'

import Link from "next/link"
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

let services = [
    {
        title: "Grafika",
        url: "Grafika",
        desc: "A vizuális identitás kulcsfontosságú a márkád megkülönböztetésében. Kreatív grafikusaink segítenek létrehozni a márkádhoz illeszkedő egyedi logókat, hirdetéseket, közösségi média posztokat és egyéb vizuális anyagokat, amelyek hatékonyan kommunikálják a vállalkozásod üzenetét."
    },
    {
        title: "Fotózás",
        url: "Fotozas",
        desc: "A professzionális fotók elengedhetetlenek a vizuális kommunikációban. Szolgáltatásaink közé tartozik az üzleti portrék, termékfotók és eseményfotók készítése, amelyek segítenek kiemelni a vállalkozásod egyediségét és vonzerejét."
    },
    {
        title: "Közösségi média menedzsment",
        url: "Kozossegimediamenedzsment",
        desc: "A közösségi média platformok a modern marketing szíve. Stratégiai megközelítésünkkel, rendszeres és vonzó tartalomkészítéssel, valamint aktív ügyfélkapcsolat-kezeléssel biztosítjuk, hogy a márkád folyamatosan jelen legyen és elérje a célközönségedet."
    },
    {
        title: "Tartalomgyártás",
        url: "Tartalomgyartas",
        desc: "A közösségi média platformok a modern marketing szíve. Stratégiai megközelítésünkkel, rendszeres és dinamikus tartalomkészítéssel, valamint aktív ügyfélkapcsolat-kezeléssel biztosítjuk, hogy a márkád folyamatosan szem előtt legyen és elérje a célközönségedet."

    },
    {
        title: "Webfejlesztés",
        url: "Webfejlesztes",
        desc: "Az online jelenlét alapja egy jól megtervezett és felhasználóbarát weboldal. Szolgáltatásaink között szerepel a testreszabott weboldalak készítése, a WordPress és WooCommerce platformokra épített megoldások, valamint a reszponzív dizájn, amely biztosítja, hogy weboldalad minden eszközön tökéletesen működjön."
    },
    {
        title: "Mozgó grafika",
        url: "Mozgografika",
        desc: "Professzionális mozgó grafikákkal segítünk kiemelkedni a digitális zajból. Legyen szó logó animációról, vagy közösségi média tartalmakról, az egyedi és kreatív megoldásokban gondolkodunk. Célunk, hogy a mozgó grafika hatékonyan közvetítse az üzenetedet, miközben a néző figyelmét is magával ragadja, ezáltal erősítve a márkád online jelenlétét."
    }
    
]

export default function Services (){


    useEffect(() => {
        const servtl = gsap.timeline({
            scrollTrigger: {
              trigger: ".serv-h", // Start when the first servent enters
              start: "top 50%",
              toggleActions: "play none none none",
            },
          });
      
          servtl
            .to(".serv-1", { opacity: 1, duration: 0.5 })
            .to(".serv-2", { opacity: 1, duration: 0.5 })
            .to(".serv-3", { opacity: 1, duration: 0.5 })
            .to(".serv-4", { opacity: 1, duration: 0.5 })
            .to(".serv-5", { opacity: 1, duration: 0.5 })
            .to(".serv-6", { opacity: 1, duration: 0.5 }); 
            ;
            
        }, []);

    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="serv-h font text-4xl text-center text-dark mb-10 md:pt-20 pt-20">
                Megoldásaink
            </h1>
            <h1 className="text-xl text-center text-dark md:mx-20 mx-10 mb-20">Mi nem csak szolgáltatásokat kínálunk – teljes körű megoldásokat biztosítunk a vállalkozásod számára. Tudjuk, hogy minden vállalkozás egyedi, ezért minden ajánlatunkat személyre szabjuk, hogy a legjobban illeszkedjen a te igényeidhez. Legyen szó weboldal fejlesztésről, közösségi média menedzsmentről vagy grafikai tervezésről, minden megoldásunk arra összpontosít, hogy miközben elvégezzük a feladatot, valódi értéket adjunk hozzá márkádhoz. A te sikered a mi sikerünk, és mindent azért teszünk, hogy a legjobb eredményeket érjük el együtt.
            </h1>
            <div className=" w-screen flex flex-wrap gap-5 items-center justify-center md:px-40 px-10 mb-20">
                {services.map((service, index) => (            
                    <div key={index} className="md:h-48 w-96 md:w-96 rounded-2xl ">

                <Link href={`/${encodeURIComponent(service.url.toLowerCase())}`} passHref>
                {/* <div className="w-full h-full hover:scale-125 flex flex-col items-center justify-center">
                <h1 id="title" className="text-3xl font-light opacity-100 text-center">{service.title}</h1>
                </div> */}
                <div id="card" className={`serv-${index + 1} opacity-0 w-full h-full flex flex-col items-center justify-center bg-dark rounded-2xl py-10 md:py-0`}>
                <h1 id="title" className="absolute text-3xl font-light md:opacity-100 opacity-0 text-center w-96">{service.title}</h1>
                <div id="desc" className="md:opacity-0 opacity-100">
                  <h1 className="text-center text-2xl font-light">{service.title}</h1>
                  <p className="text-light text-sm text-center px-5 pt-2 ">{service.desc}</p>
                </div>
                </div>
                </Link>
          </div>

        ))}
        </div>
        {/* <button className="buttonlg rounded-lg my-10 p-2">Ingyenes konzultáció</button> */}
        </div>
    )
}