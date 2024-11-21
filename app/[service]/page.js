import ServiceClientComponent from './ServiceClientComponent';
import NavBar from '../components/NavBar'
import Contact from "../components/Contact";
import Footer from "../components/Footer";


// Define services array
const services = [
    { title: "Grafika",
        desc: "Grafika service description...",
        features: [
        {
            title: "Logótervezés",
            desc: "Egyedi logók és arculat tervezése"
        },
        {
            title: "Marketing anyagok",
            desc: "Szórólapok, brosúrák, plakátok"
        },
        {
            title: "Digitális grafika",
            desc: "Közösségi média grafikák, webdesign elemek"
        },

        ]
    },
    { 
        title: "Fotózás",
        desc: "Fotózás service description...",
        features: [
            {
                title: "Termékfotózás",
                desc: "Magas minőségű termékfotók"
            },
            {
                title: "Portréfotózás",
                desc: "Professzionális vállalati portrék"
            },
            {
                title: "Eseményfotózás",
                desc: "Rendezvények dokumentálása"
            },
        
        ]
    },
    { 
        title: "Arculattervezés",
        desc: "Arculattervezés service description...",
        features: [
            {
                title: "Termékfotózás",
                desc: "Magas minőségű termékfotók"
            },
            {
                title: "Portréfotózás",
                desc: "Professzionális vállalati portrék"
            },
            {
                title: "Eseményfotózás",
                desc: "Rendezvények dokumentálása"
            },
        
        ] 
    },
    {
        title: "Social Media", 
        desc: "Social Media service description...",
        features: [
            {
                title: "Stratégia & Tartalomkészítés",
                desc: "A személyre szabott stratégia és magas minőségű kreatív tartalmak segítségével maximalizáljuk a közösségi média jelenléted hatékonyságát."
            },
            {
                title: "Posztolás & Közösségépítés",
                desc: "Rendszeres és következetes posztolás, időzítés optimalizálása és erős és elkötelezett közösséget építése"
            },
            {
                title: "Analitika & jelentés",
                desc: "Részletes elemzések a közösségi média kampányok teljesítményéről ami alapján folyamatosan finomítjuk stratégiánkat"
            },
        
        ] 
    },
    {
        title: "Webfejlesztés",
        desc: "A modern üzleti világban  weboldalad az egyik legfontosabb eleme vállalkozásodnak. Ez nem csupán egy online bemutatkozás, hanem a digitális arculatod, amely számos előnnyel jár.",
        features: [
            {
                title: "Elérhetőség és láthatóság",
                desc: "A weboldalad segítségével 24/7 elérhetővé válhatsz az ügyfeleid számára. A potenciális vásárlók könnyen rátalálnak a vállalkozásodra, ami növeli a forgalmadat és a bevételeidet."
            },
            {
                title: "Márkaépítés és hitelesség",
                desc: "Egy professzionálisan megtervezett weboldal erősíti a márkádat és bizalmat ébreszt a potenciális ügyfelekben. Az online jelenlét nélkülözhetetlen ahhoz, hogy a vállalkozásod megbízhatónak és elérhetőnek tűnjön."
            },
            {
                title: "Ügyfélkapcsolatok és kommunikáció",
                desc: "A weboldal lehetőséget biztosít arra, hogy közvetlen kapcsolatot építs ki az ügyfeleiddel. Az online kapcsolatfelvételi űrlapok, hírlevél feliratkozások és chat funkciók mind segítenek abban, hogy a látogatók könnyen elérjenek téged."
            },
            {
                title: "Marketing és értékesítés",
                desc: "A weboldalad nem csupán egy információs platform; ez az értékesítési csatornád is. Integrálhatod a közösségi média kampányaidat, SEO technikákat, és online boltodat is, hogy maximalizáld az eladásokat."
            },
            {
                title: "Adatgyűjtés és elemzés",
                desc: "A weboldal lehetőséget biztosít a látogatói adatok gyűjtésére, amelyek segítségével jobban megértheted a közönséged igényeit. Az elemzések révén optimalizálhatod a marketingstratégiáidat, és így hatékonyabban célozhatod meg a potenciális ügyfeleket."
            },
            {
                title: "Versenyelőny",
                desc: "A megfelelő weboldal kiemel a versenytársaid közül. A kreatív dizájn és a felhasználóbarát funkciók nemcsak a látogatók számát növelik, hanem azok elköteleződését is, ami hosszú távú előnyöket biztosít a vállalkozásod számára."
            },
            {
                title: "Rugalmasság és alkalmazkodás",
                desc: "A weboldal könnyen frissíthető és bővíthető, így mindig naprakész maradhatsz. Legyen szó új termékekről, szolgáltatásokról vagy eseményekről, egy weboldal segítségével gyorsan és egyszerűen kommunikálhatsz a változásokról."
            },
            {
                title: "Személyre szabott megoldások",
                desc: "Az egyedi fejlesztés lehetővé teszi, hogy teljes mértékben a saját igényeidre szabhasd a weboldaladat, míg a WordPress gyors és rugalmas megoldást kínál, amely lehetővé teszi, hogy gyorsan elindulj, és bármikor bővítsd a weboldalad funkcióit."
            },
        
        ]  
    },
    {   
        title: "Marketing",
        desc: "Marketing service description...",
        features: [
            {
                title: "Konzultáció & Tervezés",
                desc: "Ügyféligények felmérése, tervezés"
            },
            {
                title: "Fejlesztés",
                desc: "Design, frontend és backend fejlesztés"
            },
            {
                title: "Tesztelés és átadás",
                desc: "Végső tesztelés, élesítés"
            },
        
        ] 
    },
];

// Generate static paths for the dynamic routes
export async function generateStaticParams() {
  return services.map((service, index) => ({
    service: encodeURIComponent(service.title.toLowerCase()), // Encode the title
  }));
}

// Server Component
export default function ServicePage({ params }) {
  const { service, index } = params;

  // Decode the service parameter
  const decodedService = decodeURIComponent(service);

  const foundService = services.find(
    (s) => s.title.toLowerCase() === decodedService.toLowerCase()
  );

  if (!foundService) {
    return <div>Service not found</div>;
  }

  return (
    <main className="flex flex-col items-center">
      <div className="grainy-background min-h-screen">
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

        
        <div className="min-h-screen" >
      <ServiceClientComponent service={foundService} />
      
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
