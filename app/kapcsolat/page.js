import Contact from "../components/Contact";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar";

export default function Kapcsolat() {


  return (
    <div className="grainy-background curson-custom">
    <NavBar className="flex flex-col items-end md:flex-row md:items-center z-20 bg-dark" />

    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter className="opacity-15" id="noiseFilter" x="0" y="0" width="100%" height="100%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="1" 
            result="noise" />
          <feColorMatrix 
            type="saturate" 
            values="0" 
            result="monoNoise" />
          <feBlend 
            in="SourceGraphic" 
            in2="monoNoise" 
            mode="multiply" />
        </filter>
      </defs>
    </svg>
      <div id="contact" className="w-full h-screen gradient mt-10">
        <Contact />
      </div>
      <div id="footer" className="w-full bg-dark">
        <Footer />
      </div>
  </div>
  );
}
