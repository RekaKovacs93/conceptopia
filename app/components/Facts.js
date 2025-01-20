

export default function Facts() {
  
    return (
      <div className=" h-full bg-dark flex flex-col items-center justify-center">

        <div className="flex justify-between items-center my-20 gap-96">
            <div className=" text-center relative bg-red w-full flex flex-col justify-center items-center">
                <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg" className="pos">
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
                        width="300"
                        height="300"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                    />
                </svg>
                <div className="w-60 pos flex flex-col justify-center items-center">
                    <h1 className="font text-grad mb-2 text-6xl">63%</h1>
                    <h1 className="font-light text-xs">of companies report</h1>
                    <h1 className="font text-grad mb-2 text-xl">improved marketing effectiveness</h1>
                    <h1 className="font-light text-xs">when partnering with a creative agency</h1>
                    <p className="text-xs italic text-grad mt-4"> (HubSpot, 2023)</p>
                </div>
            </div>
            <div className=" text-center relative bg-red w-full flex flex-col justify-center items-center">
                <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg" className="pos">
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
                        width="300"
                        height="300"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                    />
                </svg>
                <div className="w-60 pos flex flex-col justify-center items-center">
                    <h1 className="font-light text-xs">Businesses that work with creative agencies achieve</h1>
                    <h1 className="font text-grad mb-2 text-6xl">76%</h1>
                    <h1 className="font-light text-xs">stronger brand consistency across platforms</h1>
                    <p className="text-xs italic text-grad mt-4"> (Lucidpress, 2022)</p>
                </div>
            </div>
            <div className=" text-center relative bg-red w-full flex flex-col justify-center items-center">
                <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg" className="pos">
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
                        width="300"
                        height="300"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                    />
                </svg>
                <div className="w-60 pos flex flex-col justify-center items-center">
                    <h1 className="font text-grad mb-2 text-6xl">68%</h1>
                    <h1 className="font-light text-xs">of marketers agree that external perspectives improved their campaign</h1>
                    <h1 className="font text-grad mt-2"> focus and effectiveness</h1>
                    <p className="text-xs italic text-grad mt-4"> (CMO Survey, 2022)</p>
                </div>
            </div>
            
            

            
        </div>
        
      </div>
    );
  }
  