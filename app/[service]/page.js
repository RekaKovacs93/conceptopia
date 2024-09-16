import ServiceClientComponent from './ServiceClientComponent';

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
                desc: "Rendezvények dokumentálása."
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
                desc: "Rendezvények dokumentálása."
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
        desc: "Webfejlesztés service description...",
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
    <div className="h-screen w-screen flex items-center justify-center">
      <ServiceClientComponent service={foundService} />
    </div>
  );
}
