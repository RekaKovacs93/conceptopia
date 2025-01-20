

export default function Values() {
  
    return (
      <div className="h-screen  flex flex-col items-center justify-center">
        <h1 className="font text-4xl text-center gradient-text mb-36">
        Mire számíthatsz?
        </h1>
        <div className="flex items-center justify-center gap-40 mx-40">
          
          <div className="flex flex-col gap-24 w-2/5">
          <div className=" text-center relative bg-red w-full flex flex-col justify-center items-center">
                <svg width="500" height="100" xmlns="http://www.w3.org/2000/svg" className="pos">
                    <defs>
                    <linearGradient id="gradient" cx="0%" cy="0%" r="100%" fx="0%" fy="50%" gradientTransform="rotate(45)">
                                                    <stop offset="0%" style={{ stopColor: 'rgba(98, 94, 235, 1)', stopOpacity: 1 }} />
                                                    <stop offset="50%" style={{ stopColor: 'rgba(243, 125, 206, 1)', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: 'rgba(252, 206, 144, 1)', stopOpacity: 1 }} />
                                                    </linearGradient>
                    </defs>
                    <rect
                        x="10"
                        y="10"
                        rx="20"
                        ry="20"
                        width="480"
                        height="80"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                    />
                </svg>
                <div className="w-60 pos flex flex-col justify-center items-center">
                    <h1 className="font gradient-text mb-2 text-3xl">Kreativitás</h1>
                </div>
          </div>
          <div className=" text-center relative bg-red w-full flex flex-col justify-center items-center">
                <svg width="500" height="100" xmlns="http://www.w3.org/2000/svg" className="pos">
                    <defs>
                    <linearGradient id="gradient" cx="0%" cy="0%" r="100%" fx="0%" fy="50%" gradientTransform="rotate(45)">
                                                    <stop offset="0%" style={{ stopColor: 'rgba(98, 94, 235, 1)', stopOpacity: 1 }} />
                                                    <stop offset="50%" style={{ stopColor: 'rgba(243, 125, 206, 1)', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: 'rgba(252, 206, 144, 1)', stopOpacity: 1 }} />
                                                    </linearGradient>
                    </defs>
                    <rect
                        x="10"
                        y="10"
                        rx="20"
                        ry="20"
                        width="480"
                        height="80"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                    />
                </svg>
                <div className="w-60 pos flex flex-col justify-center items-center">
                    <h1 className="font gradient-text mb-2 text-3xl">Közösség</h1>
                </div>
            </div>
            <div className=" text-center relative bg-red w-full flex flex-col justify-center items-center">
                <svg width="500" height="100" xmlns="http://www.w3.org/2000/svg" className="pos">
                    <defs>
                    <linearGradient id="gradient" cx="0%" cy="0%" r="100%" fx="0%" fy="50%" gradientTransform="rotate(45)">
                                                    <stop offset="0%" style={{ stopColor: 'rgba(98, 94, 235, 1)', stopOpacity: 1 }} />
                                                    <stop offset="50%" style={{ stopColor: 'rgba(243, 125, 206, 1)', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: 'rgba(252, 206, 144, 1)', stopOpacity: 1 }} />
                                                    </linearGradient>
                    </defs>
                    <rect
                        x="10"
                        y="10"
                        rx="20"
                        ry="20"
                        width="480"
                        height="80"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                    />
                </svg>
                <div className="w-60 pos flex flex-col justify-center items-center">
                    <h1 className="font gradient-text mb-2 text-3xl">Kommunikáció</h1>
                </div>
            </div>
            <div className=" text-center relative bg-red w-full flex flex-col justify-center items-center">
                <svg width="500" height="100" xmlns="http://www.w3.org/2000/svg" className="pos">
                    <defs>
                    <linearGradient id="gradient" cx="0%" cy="0%" r="100%" fx="0%" fy="50%" gradientTransform="rotate(45)">
                                                    <stop offset="0%" style={{ stopColor: 'rgba(98, 94, 235, 1)', stopOpacity: 1 }} />
                                                    <stop offset="50%" style={{ stopColor: 'rgba(243, 125, 206, 1)', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: 'rgba(252, 206, 144, 1)', stopOpacity: 1 }} />
                                                    </linearGradient>
                    </defs>
                    <rect
                        x="10"
                        y="10"
                        rx="20"
                        ry="20"
                        width="480"
                        height="80"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                    />
                </svg>
                <div className="w-96 pos flex flex-col justify-center items-center">
                    <h1 className="font gradient-text mb-2 text-3xl">Kapcsolat</h1>
                </div>
            </div>
          </div>
          <div className="w-2/5">
            <h1 className=" gradient-text">Ügyelünk rá, hogy ne csupán szolgáltatóként legyünk jelen, hanem elkötelezett partnerekként, akik osztoznak víziódban. Hiszünk abban, hogy a siker kulcsa a közös gondolkodásban és az együttműködésben rejlik. Elsőként figyelmesen meghallgatjuk az igényeidet és céljaidat, majd egyedi megoldásokat kínálunk, amelyek a te vállalkozásodra szabottak. Innovatív megközelítésünkkel és kreatív stratégiáinkkal ki tudunk emelni a versenytársaid közül, legyen szó webfejlesztésről, grafikai tervezésről vagy közösségi média menedzsmentről. Csapatunk folyamatosan figyelemmel kíséri a piaci trendeket és a legújabb technológiai újításokat, így mindig naprakész megoldásokkal tudunk szolgálni. Az együttműködés során nem csak projekt alapon dolgozunk, hanem hosszú távú kapcsolatot építünk, ahol a te sikered a mi sikerünk is.</h1>
          </div>
        </div>
      </div>
    );
  }
  