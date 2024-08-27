"use client"


import { useState, useEffect } from 'react';

export default function Home() {
  const [backgroundStyle, setBackgroundStyle] = useState({
    background: 'linear-gradient(45deg, #ff7e5f, #feb47b)', // Initial gradient
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate the percentage position of the mouse on the page
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;

      // Calculate new gradient angles and colors based on mouse position
      const newGradient = `linear-gradient(${xPercent + 45}deg, rgba(98,94,235,1), rgba(243,125,206,1) ${yPercent}%)`;

      // Update the background style
      setBackgroundStyle({
        background: newGradient,
      });
    };

    // Attach the mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ ...backgroundStyle, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: '#fff', fontSize: '3rem' }}>Move your cursor!</h1>
    </div>
  );
}


// export default function Home() {
//   return (
//     <main class="mouse-cursor-gradient-tracking">

//     </main>
//   );
// }
