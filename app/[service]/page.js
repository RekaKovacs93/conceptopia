import ServiceClientComponent from './ServiceClientComponent';
import Animation from '../components/Animation';
import NavBar from '../components/NavBar'
import ContactService from "../components/ContactService";
import Footer from "../components/Footer";
import Hiba404 from '../components/Hiba404';
import Timeline from '../components/Timeline';


// Define services array
const services = [
    {   title: "Grafika",
        slogan: "Vállalkozásod vizuális sikere",
        url: "Grafika",
        desc: "A grafika az egyik legerősebb eszköz, amivel kapcsolatot teremthetsz a közönségeddel. Érzelmeket kelt, kapcsolatot teremt, és segít megmutatni, hogy ki vagy, mit képviselsz, és miért érdemes veled dolgozni. A jól megtervezett vizuális anyagok képesek felkelteni a figyelmet, bizalmat építeni és tartós hatást elérni. Ha erős a vizuális identitásod, az nemcsak vonzóvá tesz, hanem kiemel a versenytársaid közül.",
        features: [
        {
            title: "Vizuális identitás, ami kitűnik",
            desc: "Egy erős arculat nemcsak megkülönböztet a versenytársaktól, de meg is győzi a közönséget, hogy téged válasszanak. Egy letisztult, átgondolt vizuális nyelv egyértelmű üzenetet közvetít: itt egy megbízható, profi márka van a háttérben."
        },
        {
            title: "Egyedi és stratégiai branding",
            desc: "A logótól kezdve a színvilágig minden grafikai elem azt kommunikálja, hogy ki vagy és mit képviselsz. Mi nem sablonokban gondolkodunk – az arculatod minden részletét a márkád céljaira és üzenetére szabjuk."
        },
        {
            title: "Erős első benyomás",
            desc: "Az emberek másodpercek alatt eldöntik, hogy egy márka számukra szimpatikus-e. Egy jól megtervezett vizuális világ azonnal bizalmat épít, és segít abban, hogy a közönséged emlékezzen rád."
        },
        {
            title: "Platformokon átívelő megoldások",
            desc: "Legyen szó közösségi média grafikákról, weboldal dizájnról, nyomtatott anyagokról vagy csomagolástervezésről, a grafikai anyagaink minden csatornán megállják a helyüket."
        },
        {
            title: "Ügyfélélmény növelése",
            desc: "Egy harmonikus vizuális megjelenés nemcsak szebb, hanem élvezetesebb is az ügyfelek számára. Ez növeli a márkád iránti elköteleződést, és pozitív élményt nyújt a vásárlóidnak. anyagok növelik a márkád hitelességét és vonzerejét."
        },

        ],
        timeline: [
            {
                title:"Ingyenes konzultáció",
                desc:"Meghallgatjuk az elképzeléseidet, és közösen feltérképezzük, hogy mire van szüksége a márkádnak."
            },
            {
                title:"Stratégiai tervezés",
                desc:"Az arculatod nemcsak szép lesz, hanem funkcionális is – minden elem mögött egy átgondolt stratégia áll."
            },
            {
                title:"Egyedi dizájn",
                desc:"Az anyagok mindig a te márkádról szólnak – nem készítünk semmit sablonokból."
            },
            {
                title:"Finomhangolás és tesztelés",
                desc:"Minden grafikai anyagot tesztelünk, hogy tökéletesen illeszkedjen a céljaidhoz és platformjaidhoz."
            },
            {
                title:"Kész tartalmak átadása és rugalmas együttműködés",
                desc:"A fejlesztési folyamat végén alapos tesztelést végzünk, hogy minden zökkenőmentesen működjön, majd élesben is elindítjuk a weboldalt."
            },
            {
                title:"Optimalizálás",
                desc:"Az eredmények alapján finomítunk, hogy a grafikai elemeid mindig a legjobban teljesítsenek."
            },
        ],
        
        kapcsolat: 
            {
            title: "NINCS SZLOGEN",
            text: "Foglalj egy ingyenes konzultációt, és nézzük meg, hogyan tehetjük a vizuális kommunikációdat igazán ütőssé!"  
            }
        
    },
    { 
        title: "Fotózás",
        slogan:"A márkád vizuális történetének megörökítése",
        url: "Fotozas",
        desc: "A márkád vizuális történetének megörökítése segít kifejezni az értékeidet és elérni a közönségedet. A professzionális fényképezés kulcsfontosságú a márkád hitelességének és vonzerejének növelésében.",
        features: [
            {
                title: "Rugalmasság és különleges pillanatok",
                desc: "A professzionális fotók segítenek megörökíteni azokat a pillanatokat, amelyek a legjobban képviselik vállalkozásodat. Ezek a képek nem csupán esztétikusak, hanem hitelesek is, így az emberek könnyen kapcsolódhatnak hozzájuk."
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
        
        ],
        timeline: [
            {
                title:"Konzultáció és igényfelmérés",
                desc:"Személyre szabott konzultáció során feltérképezzük a fotózással kapcsolatos elképzeléseidet és céljaidat. Ez lehetőséget ad arra, hogy a legjobban megértsük, hogyan tudunk a legjobban segíteni neked."
            },
            {
                title:"Stratégiai tervezés",
                desc:"A megbeszéltek alapján kidolgozzuk a fotózási stratégiát, amely figyelembe veszi a márkád identitását és a célcsoportod igényeit. Itt figyelembe vesszük a stílust, a hangulatot és a képek üzenetét."
            },
            {
                title:"Helyszín kiválasztása",
                desc:"A megfelelő környezet kiválasztása kulcsfontosságú a hatékony fotózáshoz. Segítünk megtalálni a legjobb helyszíneket, legyen szó stúdióról vagy szabadtéri helyszínekről, hogy a képek igazán egyediek és vonzóak legyenek."
            },
            {
                title:"Fotózás lebonyolítása",
                desc:"Tapasztalt fotósunk megörökíti a legjobb pillanatokat, figyelmet fordítva a részletekre és az esztétikai szempontokra. A professzionális felszerelés garantálja a magas minőséget, amely a márkád vizuális identitását erősíti."
            },
            {
                title:"Képszerkesztés",
                desc:"A fotózás után a képek utómunkálatai következnek, ahol a legjobb eredmény érdekében finomítjuk a felvételeket. A professzionális képszerkesztés segít abban, hogy a képek valóban kitűnjenek a tömegből."
            },
            {
                title:"Eredmények átadása",
                desc:"Az elkészült, véglegesített képeket átadjuk neked, kísérőanyagokkal, amelyek segítenek a felhasználásukban. A képek készen állnak arra, hogy felhasználhasd őket a weboldaladon, a közösségi média csatornáidon, és egyéb marketing anyagaidban."
            },
        ],
        kapcsolat: 
            {
            title: "Szeretnéd, ha a márkád vizuálisan is kiemelkedne a tömegből?",
            text: "Tudd meg, hogyan segíthetünk professzionális fotóinkkal a márkád történetének elmesélésében és a közönséged megszólításában. Foglalj egy ingyenes konzultációt, és beszéljük át, hogyan készíthetünk olyan képeket, amelyek valóban tükrözik a márkád egyedi értékeit!"  
            }
        
    },
    {
        title: "Webfejlesztés",
        url: "Webfejlesztes",
        desc: "A weboldal nem csupán egy online jelenlét – ez a vállalkozásod digitális otthona, ahol a potenciális vásárlóid az első benyomást alkotják rólad. Egy professzionálisan megtervezett és felépített weboldal egyben vonzó és működőképes,, segítve a céged növekedését és elérhetőségeinek bővítését.",
        features: [
            {
                title: "Első benyomás",
                desc: "Az online térben a weboldalad az első benyomás, amit a potenciális vásárlók a márkáddal kapcsolatban szereznek. Egy modern, jól megtervezett weboldal nemcsak vonzó, hanem a vállalkozásod hitelességét is erősíti, így biztosítva, hogy a látogatók hosszabb ideig maradjanak."
            },
            {
                title: "Felhasználóbarát élmény",
                desc: "Egy jól felépített weboldal egyben szép és könnyen navigálható is. A felhasználói élmény (UX) javítása azt jelenti, hogy a látogatók könnyen megtalálják, amit keresnek, és szívesen visszatérnek."
            },
            {
                title: "Reszponzív dizájn",
                desc: "Ma már elengedhetetlen, hogy a weboldalad minden eszközön – okostelefonon, tableten, asztali gépen – is tökéletesen működjön. A reszponzív dizájn biztosítja, hogy bárhol, bármikor elérhető legyél."
            },
            {
                title: "Márkaépítés",
                desc: "A weboldalad a márkád digitális reprezentációja. Az egységes vizuális megjelenés és a márkád üzenetével összhangban lévő tartalom segít a vásárlók bizalmának megnyerésében, miközben erősíti a márkaidentitásodat."
            },
            {
                title: "Webshop és online vásárlás",
                desc: "Ha termékeket árulsz online, a weboldalad kulcsfontosságú a vásárlások lebonyolításában. Az intuitív, biztonságos és gyors vásárlási élmény növeli a konverziós arányokat és a vásárlók elégedettségét."
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
                title: "Személyre szabott megoldások",
                desc: "Az egyedi fejlesztés lehetővé teszi, hogy teljes mértékben a saját igényeidre szabhasd a weboldaladat, míg a WordPress gyors és rugalmas megoldást kínál, amely lehetővé teszi, hogy gyorsan elindulj, és bármikor bővítsd a weboldalad funkcióit."
            },
        
        ],
        timeline: [
            {
                title:"Konzultáció és igényfelmérés",
                desc:"Az első lépés a közös munka során egy személyre szabott konzultáció, ahol feltérképezzük a vállalkozásod digitális igényeit és céljait. Itt megbeszéljük, hogyan tudunk segíteni a sikeres weboldal kialakításában."
            },
            {
                title:"Stratégiai tervezés",
                desc:"Az igényeid alapján kidolgozzuk a weboldal fejlesztésének stratégiáját, figyelembe véve a versenytársakat, a célcsoportot és a piaci trendeket."
            },
            {
                title:"Design és fejlesztés",
                desc:"A tervezési fázis után csapatunk megalkotja a weboldal dizájnját és felépítését, miközben ügyelünk arra, hogy a dizájn és a funkcionalitás tökéletesen illeszkedjen a márkádhoz."
            },
            {
                title:"Reszponzív megoldás",
                desc:"Gondoskodunk arról, hogy az elkészült weblap minden eszközön tökéletesen működjön"
            },
            {
                title:"Tesztelés és indítás",
                desc:"A fejlesztési folyamat végén alapos tesztelést végzünk, hogy minden zökkenőmentesen működjön, majd élesben is elindítjuk a weboldalt."
            },
            {
                title:"Eredmények mérése és finomhangolás",
                desc:"A weboldal elindítása után folyamatosan nyomon követjük a teljesítményt, és ha szükséges, finomhangoljuk a stratégiát a legjobb eredmények érdekében."
            },
        ],
        kapcsolat: 
            {
            title: "IDE KENE SZLOGEN",
            text: "Ha készen állsz arra, hogy a vállalkozásod számára egyedi és eredményorientált weboldalt építsünk, kérj tőlünk ingyenes konzultációt, és tudd meg, hogyan segíthetünk a sikeres digitális jelenlét kialakításában!"  
            }
        
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
        
        ],
        timeline: [
            {
                title:"Konzultáció és igényfelmérés",
                desc:"Az első lépés a közös munka során egy személyre szabott konzultáció, ahol meghatározzuk a céljaidat és a márkádhoz legjobban illeszkedő tartalomformátumokat. Megbeszéljük, hogy milyen típusú tartalom segíthet leginkább elérni a kívánt hatást."
            },
            {
                title:"Stratégiai tervezés",
                desc:"Az igényeid és céljaid alapján kidolgozzuk a tartalomgyártás stratégiáját. A tartalom tervezése során figyelembe vesszük a trendeket, a célcsoportot és a legújabb közösségi média algoritmusokat."
            },
            {
                title:"Kreatív tartalomkészítés",
                desc:"Az előzetes tervek és egyeztetések alapján elkészítem a szükséges tartalmakat – legyen szó videós (Reels) vagy képes anyagról. A tartalmak a vállalkozásod arculatához és céljaihoz illeszkedve készülnek el, és mindig arra törekszem, hogy a legjobb minőséget biztosítsam."
            },
            {
                title:"Díjmentes javítás",
                desc:"Ha bármi nem felel meg teljes mértékben az elvárásaidnak, biztosítok egy alkalmat a tartalom módosítására díjmentesen, hogy teljesen elégedett legyél."
            },
            {
                title:"Kész tartalmak átadása",
                desc:"A fejlesztési folyamat végén alapos tesztelést végzünk, hogy minden zökkenőmentesen működjön, majd élesben is elindítjuk a weboldalt."
            },
            {
                title:"Eredmények mérése és finomhangolás",
                desc:"A weboldal elindítása után folyamatosan nyomon követjük a teljesítményt, és ha szükséges, finomhangoljuk a stratégiát a legjobb eredmények érdekében."
            },
        ],
        kapcsolat: 
            {
            title: "Szeretnéd, ha a tartalom, amit készítesz, valóban megszólítaná a közönséged?",
            text: "Tudd meg, hogyan segíthetünk a márkád hatékonyabb kommunikációjában – foglalj egy ingyenes konzultációt!"  
            }
        
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
        
        ],
        timeline: [
            {
                title:"EZT MEG KELL IRNI MEG",
                desc:"Az első lépés a közös munka során egy személyre szabott konzultáció, ahol feltérképezzük a vállalkozásod digitális igényeit és céljait. Itt megbeszéljük, hogyan tudunk segíteni a sikeres weboldal kialakításában."
            },
            {
                title:"Stratégiai tervezés",
                desc:"Az igényeid alapján kidolgozzuk a weboldal fejlesztésének stratégiáját, figyelembe véve a versenytársakat, a célcsoportot és a piaci trendeket."
            },
            {
                title:"Design és fejlesztés",
                desc:"A tervezési fázis után csapatunk megalkotja a weboldal dizájnját és felépítését, miközben ügyelünk arra, hogy a dizájn és a funkcionalitás tökéletesen illeszkedjen a márkádhoz."
            },
            {
                title:"Reszponzív megoldás",
                desc:"Gondoskodunk arról, hogy az elkészült weblap minden eszközön tökéletesen működjön"
            },
            {
                title:"Tesztelés és indítás",
                desc:"A fejlesztési folyamat végén alapos tesztelést végzünk, hogy minden zökkenőmentesen működjön, majd élesben is elindítjuk a weboldalt."
            },
            {
                title:"Eredmények mérése és finomhangolás",
                desc:"A weboldal elindítása után folyamatosan nyomon követjük a teljesítményt, és ha szükséges, finomhangoljuk a stratégiát a legjobb eredmények érdekében."
            },
        ],
        kapcsolat: 
            {
            title: "NINCS SZLOGEN",
            text: "Tudd meg, hogyan segíthetünk a márkád hatékonyabb kommunikációjában – foglalj egy ingyenes konzultációt!"  
            }
        
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
        
        ],
        timeline: [
            {
                title:"Konzultáció és igényfelmérés",
                desc:"Megismerjük a céljaidat, a márkád arculatát és a kívánt üzenetet. Átbeszéljük, milyen típusú mozgógrafikára van szükséged, hogy a lehető legjobban illeszkedjen a stratégiádhoz."
            },
            {
                title:"Stratégiai tervezés",
                desc:"Az igényeid alapján kidolgozzuk a koncepciót. Meghatározzuk a vizuális stílust, az animáció dinamikáját és a kulcselemeket, hogy a végeredmény hatékony és figyelemfelkeltő legyen."
            },
            {
                title:"Látványterv és storyboard",
                desc:"A projekt méretétől függően előzetes terveket készítünk, hogy már a kezdetektől lásd, hogyan fog kinézni és működni az animációd. Ez biztosítja, hogy az animáció minden részlete a márkáddal és az üzeneteddel összhangban legyen."
            },
            {
                title:"Animáció elkészítése",
                desc:"Ezen a ponton kel életre a mozgógrafika. A látványterveket mozgásba hozzuk, finomhangoljuk az átmeneteket, és szükség esetén szöveget, ikonokat vagy egyéb vizuális elemeket is beépítünk."
            },
            {
                title:"Hang és finomhangolás",
                desc:"Ha szükséges, zenei aláfestést, narrációt vagy hangeffekteket adunk az animációhoz. Az utolsó simításokat követően átnézzük és véglegesítjük a videót."
            },
            {
                title:"Eredmények átadása",
                desc:"A kész animációt a kívánt formátumban és méretben kapod meg, hogy gond nélkül felhasználhasd a weboldaladon, közösségi médiában vagy hirdetéseidben. A teljes folyamat során végig figyelünk arra, hogy az animáció ne csak látványos legyen, hanem valódi értéket is teremtsen a márkád számára."
            },
        ],
        kapcsolat: 
            {
            title: "Szeretnéd, ha a márkád üzenete ne csak elérné a közönséged, hanem igazán meg is maradna bennük?",
            text: "Tudd meg, hogyan segíthetünk dinamikus, figyelemfelkeltő mozgógrafikákkal elérni a közönséged! Foglalj egy ingyenes konzultációt, és beszéljük át, milyen animációk segíthetik a márkád növekedését!"  
            }
        
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
            <Timeline service={foundService}/>
        </div>
        <div id="contact" className="min-h-screen gradient">
            <ContactService service={foundService} />
        </div>
        <div id="footer" className="w-full bg-dark">
            <Footer />
        </div>
      </div>
    </main>
    
  );
}
