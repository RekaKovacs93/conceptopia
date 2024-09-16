import Link from "next/link"

let services = [
    {
        title: "Grafika",
        desc: ""
    },
    {
        title: "Fotózás",
        desc: ""
    },
    {
        title: "Arculattervezés",
        desc: ""
    },
    {
        title: "Social Media",
        desc: ""
    },
    {
        title: "Webfejlesztés",
        desc: ""
    },
    {
        title: "Marketing",
        desc: ""
    },
    
]

export default function Services (){
    return(
        <div className="h-screen w-screen flex flex-wrap gap-5 items-center justify-center py-20">
            
            {services.map((service, index) => (            
                <div key={index} className=" h-48 w-96 md:h-48 md:w-96 rounded-2xl bg-dark bg-opacity-60">

                <Link href={`/${encodeURIComponent(service.title.toLowerCase())}`} passHref>
                <div className="w-full h-full hover:scale-125 flex flex-col items-center justify-center">
                <h1 id="title" className="text-3xl font-light opacity-100 text-center">{service.title}</h1>
                </div>
          </Link>
          </div>

        ))}

        </div>
    )
}