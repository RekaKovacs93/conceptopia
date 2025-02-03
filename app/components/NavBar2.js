
'use client'

// import '@fortawesome/fontawesome-free/css/all.min.css';

// import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar2() {

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

  // Outside your existing component
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark'); // Toggle a dark-mode class on the body
}


  return (
    <nav className={`fixed top-0 w-full z-10 transition-opacity duration-500 fade-in ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>
      <div className="flex bg-light dark:bg-dark items-center justify-between px-10 lg:px-8 py-3 lg:py-6">
      {/* <div > */}
        <Link href="/" className="font text-3xl">
          <h1>INSURADVICE</h1>
        </Link>

        <div className="hidden lg:flex flex-grow items-center justify-end space-x-8 text-lg">
          <Link id="hover-underline" href="/#rolam" onClick={closeMenu} className="block lg:inline-block mt-4 lg:mt-0">
            RÓLAM
          </Link>
          <span id="biztositas-link" className="block lg:inline-block mt-4 lg:mt-0 relative">
            BIZTOSÍTÁSOK
            <i className="fas fa-chevron-down ml-1 text-accentLight dark:text-accent"></i>
            <div className="dropdown-menu bg-light dark:bg-dark">
              <Link  href="/#nyugdij" className="block text-right text-sm m-3" ><p id="hover-underline-sm">NYUGDÍJBIZTOSÍTÁS</p></Link>
              <Link id="hover-underline-sm" href="/#elet" className="block text-right text-sm m-3">ÉLETBIZTOSÍTÁS</Link>
              <Link id="hover-underline-sm" href="/#gyermek" className="block text-right text-sm m-3">GYERMEKMEGTAKARÍTÁS</Link>
            </div>
          </span>
          <Link id="hover-underline" href="/#befektetes" onClick={closeMenu} className="block lg:inline-block mt-4 lg:mt-0">
            BEFEKTETÉS
          </Link>
          <Link id="hover-underline" href="/#kapcsolat" onClick={closeMenu} className="block lg:inline-block mt-4 lg:mt-0">
            KAPCSOLAT
          </Link>
          <input
            type="checkbox"
            id="darkModeToggle"
            className="hidden"
            onChange={toggleDarkMode}
        />
        <label
            htmlFor="darkModeToggle"
            className="cursor-pointer border dark:border-accent border-accentLight relative w-11 h-6 flex items-center bg-dark dark:bg-light shadow-lg justify-between rounded-full p-1"
        >
        <div className="w-5 h-5 p-2 shadow-lg rounded-full bg-light dark:bg-dark duration-300 relative z-0">
          <i className="fas fa-moon absolute text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  duration-300 z-10"></i>
          <i className="fas fa-sun absolute text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 z-10"></i>
        </div>
        </label>
          
        {/* </div> */}
        </div>

        
          {/* Mobile */}
        <div className="md:hidden relative">
          <input type="checkbox" id="toggle" className="hidden" />

          <label htmlFor="toggle" className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>

          <div className={`menu flex flex-col fixed top-0 bg-light dark:bg-dark right-0 w-full h-full z-20 px-5 py-10 transform transition-transform ease-in-out duration-1600 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>

            <button onClick={closeMenu} className="fixed top-0 right-1 px-5 py-5 text-xs">X  Bezárás</button>
            <Link href="/#rolam" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              RÓLAM
            </Link>
            <Link href="/#nyugdij" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              BIZTOSÍTÁS
            </Link>
            <Link href="/#nyugdij" onClick={closeMenu} className="block pb-2 py-3 px-2 pl-5 border-b text-sm">
              NYUGDÍJBIZTOSÍTÁS
            </Link>
            <Link href="/#elet" onClick={closeMenu} className="block pb-2 py-3 px-2 pl-5 border-b text-sm">
              ÉLETBIZTOSÍTÁS
            </Link>
            <Link href="/#gyermek" onClick={closeMenu} className="block pb-2 py-3 px-2 pl-5 border-b text-sm">
              GYERMEKMEGTAKARÍTÁS
            </Link>
            <Link href="/#befektetes" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              BEFEKTETÉS
            </Link>
            <Link href="/#kapcsolat" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b ">
              KAPCSOLAT
            </Link>
            <div className="right-10 top-96 absolute">
            <input
            type="checkbox"
            id="darkModeToggleMobile"
            className="hidden"
            onChange={toggleDarkMode}
          />
          
          <label
            htmlFor="darkModeToggleMobile"
            className="cursor-pointer border dark:border-accent border-accentLight relative w-11 h-6 flex items-center bg-dark dark:bg-light shadow-lg justify-between rounded-full p-1"
          >
            <div className="w-5 h-5 p-2 shadow-lg rounded-full bg-light dark:bg-dark   duration-300 relative z-0">
    <i className="fas fa-moon absolute text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  duration-300 z-10"></i>
    <i className="fas fa-sun absolute text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 z-10"></i>
  </div>
          </label>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
