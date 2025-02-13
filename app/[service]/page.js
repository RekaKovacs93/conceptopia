import ServiceClientComponent from './ServiceClientComponent';
import Animation from '../components/Animation';
import NavBar from '../components/NavBar'
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hiba404 from '../components/Hiba404';
import Timeline from '../components/Timeline';


// Define services array
const services = [
    {   title: "Grafika",
        slogan: "Vállalkozásod vizuális sikere",
        url: "Grafika",
        desc: "A grafikai tervezés nem csupán esztétika – ez a vállalkozásod vizuális identitása, amely segít a közönséged figyelmének felkeltésében és a márkád üzenetének hatékony kommunikálásában.",
        features: [
        {
            title: "Vizuális identitás",
            desc: "Erős és következetes vizuális megjelenés kialakítása, amely megkülönböztet a versenytársaktól."
        },
        {
            title: "Kreatív kommunikáció",
            desc: "A megfelelő grafikai elemek segítségével hatékonyabban közvetítheted a márkád üzenetét és értékeit."
        },
        {
            title: "Ügyfélélmény fokozása",
            desc: "A jól megtervezett grafikai anyagok hozzájárulnak a pozitív vásárlói élményhez, erősítve a márkához való kötődést."
        },
        {
            title: "Rugalmasság és sokszínűség",
            desc: "Dizájn megoldásaink különböző platformokhoz és kampányokhoz igazíthatók, hogy mindig a legjobbat nyújthassuk"
        },
        {
            title: "Professzionális megjelenés",
            desc: "A minőségi anyagok növelik a márkád hitelességét és vonzerejét."
        },

        ]
    },
    { 
        title: "Fotózás",
        slogan:"A márkád vizuális történetének megörökítése",
        url: "Fotozas",
        desc: "A fotózás nem csupán képek készítése; ez a márkád vizuális történetének megörökítése, amely segít kifejezni az értékeidet és elérni a közönségedet. A professzionális fényképezés kulcsfontosságú a márkád hitelességének és vonzerejének növelésében.",
        features: [
            {
                title: "Első benyomás",
                desc: "Az emberek először a képeket látják. A professzionális fotók segítenek abban, hogy pozitív első benyomást keltsenek, ami elengedhetetlen a potenciális vásárlók figyelmének felkeltéséhez."
            },
            {
                title: "Márkaidentitás",
                desc: "A jól megtervezett vizuális anyagok hozzájárulnak a márkád azonosíthatóságához. Az egyedi és vonzó képek segítenek abban, hogy a vásárlóid könnyen megjegyezzék a márkádat."
            },
            {
                title: "Termékkiemelés",
                desc: "A kiváló minőségű képek lehetővé teszik, hogy termékeid valóban a középpontba kerüljenek. A részletek kiemelése és a termékek vonzó bemutatása növeli a vásárlási kedvet."
            },
            {
                title: "Történetmesélés",
                desc: "A fotózás egy hatékony módja a történetmesélésnek. Az érzékletes képek révén a vásárlóid jobban azonosulnak a márkáddal és annak üzenetével."
            },
            {
                title: "Közösségi média",
                desc: "Időről időre professzionális fényképek elengedhetetlenek a közösségi média sikeréhez. Nem szükséges, hogy minden tartalom profi fotós által készített kép legyen, azonban erősen ajánlott, hogy időnként megjelenjenek a feed-en. A vonzó tartalom segít elérni és elkötelezni a közönségedet, és növeli a márkád láthatóságát."
            },
            {
                title: "Webshop konverzió",
                desc: "A minőségi fotók nemcsak vonzóbbá teszik a termékeidet, hanem növelik a vásárlási konverziókat is. A vásárlók nagyobb valószínűséggel vásárolnak olyan termékekből, amelyeket részletes, profi fotók kísérnek. Az online vásárlás során a képek segítenek a termékek valósághű bemutatásában, csökkentve ezzel a vásárlási kockázat érzését."
            },
        
        ]
    },
    { 
        title: "Mozgógrafika",
        slogan:"A figyelem megragadásának művészete",
        url: "Mozgografika",
        desc: "A közösségi média és az online marketing világában a statikus tartalmak már nem mindig elegendőek ahhoz, hogy igazán kitűnj. Professzionális mozgó grafikákkal segítünk kiemelkedni a digitális zajból. Legyen szó logó animációról vagy közösségi média tartalmakról, az egyedi és kreatív megoldásokban gondolkodunk. Célunk, hogy a mozgó grafika hatékonyan közvetítse az üzenetedet, miközben a néző figyelmét is magával ragadja, ezáltal erősítve a márkád online jelenlétét.",
        features: [
            {
                title: "Azonnal leköti a figyelmet",
                desc: "Az emberek gyorsan görgetnek, de egy mozgó elem megállítja őket. A mozgógrafika vizuálisan izgalmas és könnyen emészthető, így nagyobb eséllyel éred el a célközönségedet."
            },
            {
                title: "Egyszerű bemutatás",
                desc: "Egy jól megtervezett animáció pillanatok alatt képes bemutatni egy termék működését, egy szolgáltatás előnyeit vagy egy márka történetét."
            },
            {
                title: "Erősíti a márkaidentitást",
                desc: "A megfelelő színek, formák és mozgásvilág révén a márkád felismerhetőbbé válik."
            },
            {
                title: "Növeli az elköteleződést",
                desc: "A videók és animációk nagyobb elérést és interakciót generálnak, mint a statikus képek, így segítenek növelni a közönséged aktivitását."
            }
        
        ]
    },
    { 
        title: "Tartalomgyártás",
        slogan:"Segítünk, hogy a márkád szóhoz jusson",
        url: "Tartalomgyartas",
        desc: "A közösségi média egy olyan dinamikusan változó világ, ahol a figyelemért való verseny egyre erősebbé válik. A sikerhez nem csupán az kell, hogy a vállalkozásod jelen legyen, hanem hogy folyamatosan értékes, figyelemfelkeltő és releváns tartalommal találkozzanak a követőid. Itt jövünk mi!",
        features: [
            {
                title: "Erős márkaépítés",
                desc: "A közösségi média az egyik legfontosabb eszköze annak, hogy a márkád valódi kapcsolatot alakítson ki a közönségeddel. Az általad megosztott tartalmaknak nemcsak vonzónak kell lenniük, hanem meg kell mutatniuk a márkád egyediségét és értékeit is."
            },
            {
                title: "Történetmesélés",
                desc: "A közösségi média nemcsak egy képről vagy videóról szól – egy jól megírt történet felkelti az érdeklődést és érzelmeket vált ki. Mi segítünk abban, hogy a márkád története szórakoztató, releváns és megnyerő módon jusson el a közönségedhez."
            },
            {
                title: "Láthatóság és elérés",
                desc: "A megfelelő időben és formában megosztott tartalom segít abban, hogy több emberhez juss el, és hogy az ő figyelmük hosszú távon megmaradjon."
            },
            {
                title: "Kapcsolatépítés",
                desc: "A kreatív tartalom tartalom nemcsak arról szól, hogy elmondod, mit csinálsz, hanem arról is, hogy interakcióba lépsz a közönségeddel, reagálsz a kérdéseikre, és építed a bizalmat."
            }
        
        ]
    },
    {
        title: "Közösségi média menedzsment", 
        url: "Kozossegimediamenedzsment",
        slogan:"Több időd marad arra, ami igazán fontos", 
        desc: "A közösségi média ma már a vállalkozások életében kulcsszerepet játszik, de a kezelése rengeteg időt és energiát emészt fel. Nem lenne jobb, ha mindez a kezedben maradna, mégis megszabadulnál a napi teendők terhétől?"
,
        features: [
            {
                title: "Idő",
                desc: "Több időd marad az ügyfeleidre, miközben a közösségi oldalad naprakész és hatékony marad."            
            },
            {
                title: "Nyugalom",
                desc: "Nem kell azon aggódnod, mikor és mit posztolj – mi mindent kézben tartunk."
            },
            {
                title: "Kapcsolat",
                desc: "A kommentek, üzenetek és visszajelzések gyors és professzionális kezelése segít ügyfeleid bizalmát erősíteni"
            },
            {
                title: "Átgondolt stratégia",
                desc: "Nem csak posztolunk. Minden lépésünknek célja van: növeljük a láthatóságot és elérjük a potenciális ügyfeleidet."
            },
            {
                title: "Ügyféltámogatás",
                desc: "Foglalkozunk a kommentekkel, üzenetekkel, hogy az ügyfeleid érezzék, mindig ott vagy számukra."
            },
            {
                title: "Adatok, amelyek számítanak",
                desc: "Rendszeresen megosztjuk veled az eredményeket, hogy lásd, hogyan segítik a céljaidat a közösségi oldalaid."
            }
        
        ] 
    },
    {
        title: "Webfejlesztés",
        url: "Webfejlesztes",
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
    }
    
];

export async function generateStaticParams() {
    return services.map((service) => ({
      service: encodeURIComponent(service.url.toLowerCase()), // Encode the title
    }));
  }
  
  // Server Component
  export default function ServicePage({ params }) {
    const { service } = params;
  
    // Decode the service parameter
    const decodedService = decodeURIComponent(service);
  
    // Ensure correct handling of special characters
    const foundService = services.find(
      (s) => encodeURIComponent(s.url.toLowerCase()) === decodedService.toLowerCase()
    );
  
    if (!foundService) {
      return <div className="min-h-screen  flex flex-col items-center justify-center px-4">

     <Hiba404/>
    
     
   </div>;
    }  
  
//     return (
//       <div>
//         <h1>{foundService.title}</h1>
//         <p>{foundService.description}</p>
//       </div>
//     );
//   }

  return (
    <main className="flex flex-col items-center w-screen min-h-screen">
      <div className="grainy-background  overflow-x-clip">
        <NavBar className="flex flex-col items-center z-20 " />

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

        
        <div  className=" gradient">
            <ServiceClientComponent service={foundService} />
        </div>
        {/* <div  className="bg-dark">
            <Animation />
        </div> */}
        <div>
            <Timeline/>
        </div>
        <div id="contact" className="h-screen gradient">
            <Contact />
        </div>
        <div id="footer" className="w-full bg-dark">
            <Footer />
        </div>
      </div>
    </main>
    
  );
}
