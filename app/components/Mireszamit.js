import Image from "next/image";

export default function Mireszamit({service}) {
    return (
        <div>
        <h1 className="font bg-dark gradient-text text-center py-20 text-4xl mx-10">Mire számíthatsz a közös munka során?</h1>
        <div className='flex flex-wrap '>
          

        <div className=" w-screen flex flex-col flex-wrap gap-2  md:px-40 px-10 mb-10 ">
       
          {service.munka.map((munka, index) => (            
              <div key={index} className=" rounded-lg">

                <div className="  relative w-full flex flex-col ">
                    {/* <svg width="1000" height="40" xmlns="http://www.w3.org/2000/svg" className="pos scale">
                        <defs>
                        <linearGradient id="gradient" cx="0%" cy="0%" r="100%" fx="0%" fy="50%" gradientTransform="rotate(45)">
                                                    <stop offset="0%" style={{ stopColor: 'rgba(98, 94, 235, 1)', stopOpacity: 1 }} />
                                                    <stop offset="50%" style={{ stopColor: 'rgba(243, 125, 206, 1)', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: 'rgba(252, 206, 144, 1)', stopOpacity: 1 }} />
                        </linearGradient>
                        </defs>
                        <rect
                            x="100"
                            y="40"
                            rx="20"
                            ry="20"
                            width="300"
                            height="300"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="5"
                        />
                    </svg> */}
                <div className="  flex flex-col    rounded-lg">
                <h1 className=" text-2xl font-light under pb-2 mb-2">{munka.title}</h1>
                <p className="text-light text-base  px-5 pt-2 mb-5">{munka.desc}</p>
                </div>
            </div>
          {/* <div id="card" className=" w-full h-full flex flex-col gap-y-5 items-center justify-center bg-dark rounded-2xl py-10 md:py-0">
            <h1 className="text-center font-light">{munka.title}</h1>
            <p className="text-light text-sm text-center px-5 pt-2">{munka.desc}</p>
          </div> */}
          {/* </Link> */}
          </div>

          ))}
        </div>
        </div>
      </div>
    );
}
