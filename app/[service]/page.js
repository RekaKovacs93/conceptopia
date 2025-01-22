import ServiceClientComponent from './ServiceClientComponent';
import Animation from '../components/Animation';
import NavBar from '../components/NavBar'
import Contact from "../components/Contact";
import Footer from "../components/Footer";


// Define services array
const services = [
    {   title: "Grafika",
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
        title: "Közösségi média", 
        url: "Kozossegimedia", 
        desc: "A közösségi média nem csupán egy platform, ez a vállalkozásod hangja, amely lehetőséget ad arra, hogy közvetlen kapcsolatot építs ki a közönségeddel. A hatékony közösségi média menedzsment elengedhetetlen a márkád fejlődéséhez, hiszen ez a digitális világ szíve."
,
        features: [
            {
                title: "Kapcsolatépítés és elköteleződés",
                desc: " A közösségi média lehetőséget biztosít arra, hogy közvetlen kapcsolatot létesíts a vásárlóiddal. Aktív részvétel a közösségi platformokon nemcsak növeli a márkád láthatóságát, hanem lehetőséget teremt az ügyfélkapcsolatok erősítésére is."            },
            {
                title: "Célzott elérés",
                desc: "A megfelelő stratégiával könnyedén elérheted a célpiacodat, legyen szó demográfiai adatok vagy érdeklődési körök alapján történő célzásról. Ezzel maximalizálhatod a kampányaid hatékonyságát."
            },
            {
                title: "Márkaépítés",
                desc: "A közösségi média segítségével építheted a márkád identitását és hitelességét. A konzisztens és kifejező tartalom révén a vásárlóid jobban azonosulnak a márkáddal."
            },
            {
                title: "Tartalommarketing",
                desc: "A közösségi média tökéletes platform a tartalom megosztására, legyen az blogbejegyzés, videó vagy infografika. Az értékes tartalom nemcsak figyelmet vonz, hanem közönséged is aktívan részese lesz a márkádnak."
            },
            {
                title: "Piaci trendek követése",
                desc: "A közösségi média lehetőséget biztosít a piaci trendek nyomon követésére. A látogatói visszajelzések és a közönség reakciói segítenek abban, hogy a vállalkozásod mindig naprakész maradjon."
            },
            {
                title: "Versenyelőny",
                desc: "A jól megvalósított közösségi média stratégiával kiemelkedhetsz a versenytársaid közül. A kreatív kampányok és a tartalom folyamatos frissítése hosszú távon elkötelezi a közönségedet."
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
      return <div>Service not found</div>;
    }  
  
//     return (
//       <div>
//         <h1>{foundService.title}</h1>
//         <p>{foundService.description}</p>
//       </div>
//     );
//   }

  return (
    <main className="flex flex-col items-center w-screen">
      <div className="grainy-background min-h-screen">
        <NavBar className="flex flex-col items-center z-20" />

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

        
        <div  className="bg-dark">
            <ServiceClientComponent service={foundService} />
        </div>
        <div  className="bg-dark">
            <Animation />
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
