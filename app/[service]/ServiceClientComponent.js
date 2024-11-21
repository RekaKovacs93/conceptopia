"use client";

import { useEffect } from "react";

export default function ServiceClientComponent({ service }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth) * 1000;
      const yPercent = (e.clientY / window.innerHeight) * 800;

      const offsetX = 100;
      const offsetY = 300;

      document.documentElement.style.setProperty("--gradient-x", `${xPercent + offsetX}px`);
      document.documentElement.style.setProperty("--gradient-y", `${yPercent + offsetY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="flex flex-col items-center">
      {/* Background layer */}
      

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center mt-40">
          <h1 className="gradient-text font text-9xl">{service.title}</h1>
          <p className="mt-4 mb-20 text-xl font-light mx-40 text-center">{service.desc}</p>

          <div className="w-screen flex flex-wrap gap-20 items-center justify-center p-10 bg-dark mx-40">
            {service.features.map((feature, index) => (
              <div key={index} className="h-60 w-96 rounded-2xl z-20">
                {/* <div className="w-full h-full flex flex-col items-center justify-evenly">
                  <div className="h-16 flex items-center">
                    <h1 id="title" className="text-2xl gradient-text text-center">{feature.title}</h1>
                  </div>
                  <div className="w-48 h-0.5 bg-dark" />
                  <div>
                    <h1 id="title" className="mb-5 opacity-100 text-light text-center">{feature.desc}</h1>
                  </div>
                </div> */}

{/* <div className=" text-center relative w-full flex flex-col justify-center items-center"> */}
<svg width="500" height="320" xmlns="http://www.w3.org/2000/svg" className="pos">
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
        width="400"
        height="300"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="5"
    />
</svg>
<div className="h-16 flex items-center">
                    <h1 id="title" className="text-2xl gradient-text text-center">{feature.title}</h1>
                  </div>
                  <div className="w-48 h-0.5 bg-dark" />
                  <div>
                    <h1 id="title" className="mb-5 opacity-100 text-light text-center">{feature.desc}</h1>
                  </div>
</div>
              // </div>
            ))}
          </div>
        </div>

        {/* Contact and Footer */}
        
    </main>
  );
}

