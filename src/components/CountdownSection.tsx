import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import CenaLogo from './CenaLogo';
import Slideshow from './Slideshow';

const CountdownSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex items-center justify-center relative overflow-hidden">
      {/* Background gradient/overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cena-navy via-black to-black opacity-70"></div>

      <div className="flex w-full">
        {/* Left Slideshow */}
        <div className="w-1/3 md:w-1/4">
          <Slideshow direction="left" />
        </div>

        {/* Center Content */}
        <div className={`h-screen  w-1/3 md:w-1/2 text-center z-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Hustle Loyalty Respect Logo */}
          <div className="logo-pulse">
            <img
              src="https://raw.githubusercontent.com/CodebyShauryaIPU/John-Cena/refs/heads/main/wwe.png"
              alt="Cena Logo"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mb-1 mb-10 animate-pulse-slow"
            />
          </div>

          {/* Main Countdown */}
          <div className="spotlight relative max-w-4xl mx-auto md:p-8 md:p-16">
            <CountdownTimer />
          </div>

          {/* You Can't See Me */}
          <div className="md:mt-4 mt-16">
            <CenaLogo />
            {/* <h2 className="title-text text-xl md:text-3xl lg:text-4xl mt-4 animate-pulse-slow">
              YOU CAN'T SEE ME
            </h2> */}
          </div>

          <div className="absolute bottom-4 w-full text-center text-white text-sm">
        Developed by - <a href="https://github.com/CodebyShaurya/" target="_blank" rel="noopener noreferrer" className="underline">Shaurya</a>
      </div>
        </div>

        {/* Right Slideshow */}
        <div className="w-1/3 md:w-1/4">
          <Slideshow direction="right" />
        </div>
      </div>

      {/* Developed By Section */}
      
    </section>
  );
};

export default CountdownSection;