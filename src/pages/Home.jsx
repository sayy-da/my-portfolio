import React, { useState, useEffect } from 'react';
import '../App.css'
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen bg-gray-400 overflow-hidden">
      {/* Subtle gradient overlay - give it z-0 so other content sits above */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-500/30 to-gray-300/30 pointer-events-none"></div>
      
      {/* Header */}
      <header className="relative z-20 p-6 flex justify-between items-start gap-4">
        {/* Left Text */}
        <div
          className={`text-white text-sm transition-all duration-1000 flex-shrink-0
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          © Code by Sayyida
        </div>

        {/* Top Right Description - fix invalid tailwind and make it positioned correctly */}
       
        <div
          className={`absolute top-6 right-6 text-white text-sm max-w-xs text-right leading-relaxed
            transition-all duration-1000 delay-200 
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          Passionate Creative Designer and Developer, dedicated to crafting
          innovative solutions and exceptional digital experiences through
          modern technologies
        </div>
      </header>

      {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] overflow-hidden text-center">

  {/* h2 – static */}
  <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
    I'm Sayyida Safoora Jahan
  </h1>

  {/* h1 – animated */}
  <h1
    className={`text-white font-bold leading-none transition-all duration-1000 delay-300 
      ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} 
      animate-slide`}
    style={{
      fontSize: 'clamp(4rem, 12vw, 12rem)',
      whiteSpace: 'nowrap',
      letterSpacing: '-0.03em',
    }}
  >
    Creative Developer & Designer
  </h1>

  <style>
    {`
      @keyframes slide {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-slide {
        animation: slide 10s linear infinite;
      }
    `}
  </style>
</div>


      {/* Navigation Bar - ensure it's above everything */}
      {/* If your Navbar accepts className prop, this will work. Otherwise add z-30 inside Navbar's root element */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Subtle cursor follower effect */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full bg-white/5 blur-3xl transition-all duration-300 ease-out z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
    </div>
  );
}

export default HomePage;
