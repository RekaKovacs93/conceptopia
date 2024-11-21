import Link from "next/link"

let services = [
    {
        title: "Grafika",
        desc: "A vizuális identitás kulcsfontosságú a márkád megkülönböztetésében. Kreatív grafikusaink segítenek létrehozni a márkádhoz illeszkedő egyedi logókat, hirdetéseket, közösségi média posztokat és egyéb vizuális anyagokat, amelyek hatékonyan kommunikálják a vállalkozásod üzenetét."
    },
    {
        title: "Fotózás",
        desc: "A professzionális fotók elengedhetetlenek a vizuális kommunikációban. Szolgáltatásaink közé tartozik az üzleti portrék, termékfotók és eseményfotók készítése, amelyek segítenek kiemelni a vállalkozásod egyediségét és vonzerejét."
    },
    // {
    //     title: "Arculattervezés",
    //     desc: ""
    // },
    {
        title: "Social Media",
        desc: "A közösségi média platformok a modern marketing szíve. Stratégiai megközelítésünkkel, rendszeres és vonzó tartalomkészítéssel, valamint aktív ügyfélkapcsolat-kezeléssel biztosítjuk, hogy a márkád folyamatosan jelen legyen és elérje a célközönségedet."
    },
    {
        title: "Webfejlesztés",
        desc: "Az online jelenlét alapja egy jól megtervezett és felhasználóbarát weboldal. Szolgáltatásaink között szerepel a testreszabott weboldalak készítése, a WordPress és WooCommerce platformokra épített megoldások, valamint a reszponzív dizájn, amely biztosítja, hogy weboldalad minden eszközön tökéletesen működjön."
    },
    // {
    //     title: "Marketing",
    //     desc: ""
    // },
    
]

export default function Services (){
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="font text-4xl text-center text-dark mb-10 pt-40">
                Megoldásaink
            </h1>
            <h1 className="text-xl text-center text-dark mx-60 mb-20">Megoldások, nem csak szolgáltatások. Mi a Conceptopia Kreatív Ügynökségnél nem csupán a megszokott szolgáltatásokat kínálunk, hanem komplex megoldásokat, amelyek a vállalkozásod egyedi igényeihez igazodnak. Az általunk kínált megoldások nemcsak az eseti feladatok elvégzésére fókuszálnak, hanem arra is, hogy hosszú távú értéket teremtsenek a márkád számára. Legyen szó weboldal fejlesztésről, közösségi média stratégiáról vagy grafikai tervezésről, célunk, hogy egy átfogó, integrált megközelítést alkalmazzunk, amely segít kiemelkedni a versenytársak közül. Ezzel nemcsak időt és energiát takarítasz meg, hanem biztos lehetsz abban is, hogy minden részlet harmonikusan illeszkedik a vállalkozásod összképébe.</h1>
            <div className=" w-screen flex flex-wrap gap-5 items-center justify-center px-40">
                {services.map((service, index) => (            
                    <div key={service.title} className="h-48 w-96 md:w-96 rounded-2xl">

                <Link href={`/${encodeURIComponent(service.title.toLowerCase())}`} passHref>
                {/* <div className="w-full h-full hover:scale-125 flex flex-col items-center justify-center">
                <h1 id="title" className="text-3xl font-light opacity-100 text-center">{service.title}</h1>
                </div> */}
                <div id="card" className=" w-full h-full flex flex-col items-center justify-center bg-dark rounded-2xl">
                <h1 id="title" className="absolute text-3xl font-light opacity-100 text-center">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 className="text-center text-2xl font-light">{service.title}</h1>
                  <p className="font-light text-sm text-center px-5 pt-2 textfont">{service.desc}</p>
                </div>
                </div>
                </Link>
          </div>

        ))}
        </div>
        <button className="buttonlg rounded-lg my-10 p-2">Ingyenes konzultáció</button>
        </div>
    )
}