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
    <main className="flex flex-col items-center w-screen">
      <div className="flex flex-col justify-center items-center mt-40">
        <div className="">
          <h1 className="gradient-text font text-9xl">{service.title}</h1>
          <p className="mt-4 mb-20 font-light text-center">{service.desc}</p>
        </div>
        <div className="w-screen flex flex-wrap gap-20 items-center justify-center p-10 bg-dark mx-40">
          {service.features.map((feature, index) => (
            <div key={index} className="relative h-[320px] w-[500px] flex items-center justify-center">
              {/* SVG Rectangle */}
              <svg width="500" height="320" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                <defs>
                  <linearGradient
                    id="gradient"
                    cx="0%"
                    cy="0%"
                    r="100%"
                    fx="0%"
                    fy="50%"
                    gradientTransform="rotate(45)"
                  >
                    <stop offset="0%" style={{ stopColor: "rgba(98, 94, 235, 1)", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "rgba(243, 125, 206, 1)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgba(252, 206, 144, 1)", stopOpacity: 1 }} />
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

              {/* Centered Text */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl gradient-text">{feature.title}</h1>
                <div className="w-40 h-0.5 bg-dark my-4" />
                <p className="text-light text-sm font-light">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
