"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function ServiceClientComponent({ service }) {
  useEffect(() => {
    const navtl = gsap.timeline();
    navtl.to(".title", { opacity: 1, duration: 0.5 }, 0.5);
    navtl.to(".descr", { opacity: 1, duration: 0.5 })
    navtl.to(".descrl", { opacity: 1, duration: 0.5 });

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
    <main className="flex flex-col items-center bg-dark ">
      <div className="flex flex-col justify-center items-center mt-60 bg-dark min-h-screen">
          <h1 className="title gradient-text text-center font text-4xl md:text-9xl mb-5 scale-90 opacity-0">{service.title}</h1>
          <h1 className="descr font md:text-2xl text-lg text-center gradient-text mb-5 opacity-0">{service.slogan}</h1>
          <p className="descrl md:mx-40 mx-10 font-light text-center pb-60 opacity-0">{service.desc}</p>
        {/* <div className="flex flex-wrap gap-20 items-center justify-center px-20 gradient py-20">
          {service.features.map((feature, index) => (
            <div key={index} className="relative w-96 h-72 flex items-center justify-center bg-dark rounded-lg p-10">
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl gradient-text">{feature.title}</h1>
                
                <div className="w-96 h-0.5 gradient my-4" />
                <p className="text-light text-sm font-light p-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>  */}
        <div className="gradient text-3xl text-center font py-20">
        <h1>Miért fontos a professzionális {service.title} a vállalkozásod számára?</h1>
        <div className=" w-screen flex flex-wrap gap-5 items-center justify-center md:px-40 px-10 mb-20 pt-20 ">
       
                {service.features.map((feature, index) => (            
                    <div key={index} className="md:h-48 w-96 rounded-2xl">

                {/* <Link href={`/${encodeURIComponent(service.url.toLowerCase())}`} passHref> */}
                {/* <div className="w-full h-full hover:scale-125 flex flex-col items-center justify-center">
                <h1 id="title" className="text-3xl font-light opacity-100 text-center">{service.title}</h1>
                </div> */}
                <div id="card" className=" w-full h-full flex flex-col items-center justify-center bg-dark rounded-2xl py-10 md:py-0">
                <h1 id="title" className="absolute text-3xl px-5 font-light md:opacity-100 opacity-0 text-center w-96">{feature.title}</h1>
                <div id="desc" className="md:opacity-0 opacity-100">
                  <h1 className="text-center text-2xl font-light">{feature.title}</h1>
                  <p className="text-light text-sm text-center px-5 pt-2">{feature.desc}</p>
                </div>
                </div>
                {/* </Link> */}
          </div>

        ))}
        </div>
        </div>

        
      </div>
    </main>
  );
}

