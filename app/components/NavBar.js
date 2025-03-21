'use client'

import gsap from 'gsap';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NavBar() {

  useEffect(() => {
    const navtl = gsap.timeline();
    gsap.from(".logo",{
      x: 50,   // Start 200px left
      
      duration: 1,
      ease: "power3.out",
      stagger: 0.2, // Delays each item slightly
    });
    // // gsap.from(".navbar", {
    // //   x: -50,   // Start 200px left
      
    // //   duration: 1,
    // //   ease: "power3.out",
    // //   stagger: 0.2, // Delays each item slightly
    // });
    navtl.to(".logo", { opacity: 1, duration: 0.5 });
    navtl.to(".nav-1", { opacity: 1, duration: 0.5 });
    navtl.to(".nav-2", { opacity: 1, duration: 0.5 });
    navtl.to(".nav-3", { opacity: 1, duration: 0.5 });
    navtl.to(".nav-4", { opacity: 1, duration: 0.5 });
    navtl.to(".nav-5", { opacity: 1, duration: 0.5 });
  }, [])
  


  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // const isMobileView = window.innerWidth < 768; // Set your mobile breakpoint width here
      // if (isMobileView) {
        setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 150);
        setPrevScrollPos(currentScrollPos);
      // }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [prevScrollPos]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={` bg-dark fixed top-0 w-full z-10 overflow-hidden transition-opacity duration-500 fade-in ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>
      <div className="flex items-start justify-between px-10 md:px-8 py-3 md:py-6 font gradient-text">
      {/* <div > */}
      <Link href="/" className="logo opacity-0 font-bold text-xl">
          <Image
            src="/Logo.svg"
                alt='kep'
                width={50}
                height={20}
                priority={true}
                className=' scale-110 md:scale-100'
                quality={80}
          />
        </Link>
  

        <div className="nav hidden md:flex flex-grow items-start justify-end space-x-4">
          <Link href="/#about" className="nav-1 block md:inline-block mt-4 md:mt-0 text-sm opacity-0">
            RÓLUNK
          </Link>
          <div href="/#szolgaltatasok" className="nav-2 group block md:inline-block mt-4 md:mt-0 overflow-visible w-52 text-sm opacity-0">
            <Link href="/#szolgaltatasok">SZOLGÁLTATÁSOK &#9660;</Link>
            <div className="hidden group-hover:flex flex-col place-items-end mt-2 rounded-lg">
              {/* <div className="py-1"> */}
                <a href="./grafika" className=" py-1 text-xs">GRAFIKA</a>
                <a href="./fotozas" className=" py-1 text-xs">FOTÓZÁS</a>
                <a href="./kozossegimediamenedzsment" className=" py-1 text-xs text-right">KÖZÖSSÉGI MÉDIA MENEDZSMENT</a> 
                <a href="./tartalomgyartas" className=" py-1 text-xs">TARTALOMGYÁRTÁS</a>
                <a href="./mozgografika" className=" py-1 text-xs">MOZGÓGRAFIKA</a>
                <a href="./webfejlesztes" className=" py-1 text-xs">WEBFEJLESZTÉS</a>
              {/* </div> */}
            </div>
          </div>
          {/* </div> */}
          {/* <Link href="./BLOG" className="block md:inline-block mt-4 md:mt-0">
            BLOG
          </Link> */}
          <Link href="./kapcsolat" className="nav-3 block md:inline-block mt-4 md:mt-0 text-sm opacity-0">
            KAPCSOLAT
          </Link>
          <Link href="./gyik" className="nav-4 block md:inline-block mt-4 md:mt-0 text-sm opacity-0">
            GYIK
          </Link>
          <Link href="./snake" className="nav-5 block md:inline-block mt-4 md:mt-0 text-sm opacity-0">
            ?
          </Link>
        {/* </div> */}
        </div>

        
          {/* Mobile */}
        <div className="md:hidden relative">
          <input type="checkbox" id="toggle" className="hidden" />

          <label htmlFor="toggle" className=" z-10 grad">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer grad"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              onClick={toggleMenu}
            >
              <path className='grad' strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>

          <div className={` menu fixed top-0 right-0 w-full h-full z-20 px-5 py-10 pt-40 bg-dark transform transition-transform ease-in-out duration-1600 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>

            <button onClick={closeMenu} className="fixed top-0 right-1 px-5 py-5 text-xl text-grad">X</button>
            <Link href="/#about" onClick={closeMenu} className=" text-left block pb-2 py-5 px-5 border-b text-grad text-xl">
              RÓLUNK
            </Link>
            {/* <Link href="/#szolgaltatasok" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              ELADÓKNAK
            </Link> */}
            <Link href="/#szolgaltatasok" onClick={closeMenu} className="text-left block pb-2 py-5 px-5 border-b text-grad text-xl">
              SZOLGÁLTATÁSOK
            </Link>
            <Link href="./grafika" onClick={closeMenu} className="text-left block pb-2 py-3 px-5 pl-10 border-b text-sm text-grad">
              GRAFIKA
            </Link>
            <Link href="./fotozas" onClick={closeMenu} className="text-left block pb-2 py-3 px-5 pl-10 border-b text-sm text-grad">
              FOTÓZÁS
            </Link>
            <Link href="./tartalomgyartas" onClick={closeMenu} className="text-left block pb-2 py-3 px-5 pl-10 border-b text-sm text-grad">
              TARTALOMKÉSZÍTÉS
            </Link>
            <Link href="./kozossegimediamenedzsment" onClick={closeMenu} className="text-left block pb-2 py-3 px-5 pl-10 border-b text-sm text-grad">
              KÖZÖSSÉGI MÉDIA MENEDZSMENT
            </Link>
            <Link href="./mozgografika" onClick={closeMenu} className="text-left block pb-2 py-3 px-5 pl-10 border-b text-sm text-grad">
              MOZGÓGRAFIKA
            </Link>
            <Link href="./webfejlesztes" onClick={closeMenu} className="text-left block pb-2 py-3 px-5 pl-10 border-b text-sm text-grad">
              WEBFEJLESZTÉS
            </Link>
            {/* <Link href="./blog" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              BLOG
            </Link> */}
            <Link href="./kapcsolat" onClick={closeMenu} className="text-left block pb-2 py-5 px-5 border-b text-grad text-xl">
              KAPCSOLAT
            </Link>
            <Link href="./gyik" onClick={closeMenu} className="text-left block pb-2 py-5 px-5 border-b text-grad text-xl">
              GYIK
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}