import React, { useRef, useEffect, useState } from 'react';
import { Trophy, Medal, Star, Award, Zap, Crown } from 'lucide-react';

// Individual Slide Components with full background images and bottom text
const Slide1 = () => (
  <div
    className="flex-shrink-0 w-screen h-screen flex flex-col justify-end items-center relative bg-cover bg-center"
    style={{ backgroundImage: "url('/images/2k.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 w-full max-w-2xl px-4 pb-12 md:pb-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg">Career Achievements</h2>
      {/* <p className="text-base md:text-lg lg:text-xl text-blue-100 text-center max-w-xl">
        John Cena's journey to the top began with his first WWE Championship win at WrestleMania 21, marking the start of a legendary career.
      </p> */}
    </div>
  </div>
);

const Slide2 = () => (
  <div
    className="flex-shrink-0 w-screen h-screen flex flex-col justify-end items-center relative bg-cover bg-center"
    style={{ backgroundImage: "url('/images/slide-2.png')" }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 w-full max-w-2xl px-4 pb-12 md:pb-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg">Grand Slam Champion</h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-100 text-center max-w-xl">
        Cena captured his first World Heavyweight Championship in 2008, solidifying his place as a top-tier wrestler.
      </p>
    </div>
  </div>
);

const Slide3 = () => (
  <div
    className="flex-shrink-0 w-screen h-screen flex flex-col justify-end items-center relative bg-cover bg-center bg-[url('/images/rr_mob.jpg')]  md:bg-[url('/images/rr.png')] bg-cover bg-center"
    // style={{ backgroundImage: "url('/images/rr.png')" }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 w-full max-w-2xl px-4 pb-12 md:pb-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg">Royal Rumble Winner</h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-100 text-center max-w-xl">
        In 2008 and 2013, Cena won the 30-man Royal Rumble match, earning a main event spot at WrestleMania.
      </p>
    </div>
  </div>
);

const Slide4 = () => (
  <div
    className="flex-shrink-0 w-screen h-screen flex flex-col justify-end items-center relative bg-cover bg-center"
    style={{ backgroundImage: "url('/17.webp')" }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 w-full max-w-2xl px-4 pb-12 md:pb-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg">17-Time World Champion</h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-100 text-center max-w-xl">
        In 2025, Cena broke Ric Flair's legendary record of 16 world championships, cementing his legacy.
      </p>
    </div>
  </div>
);

const Slide5 = () => (
  <div
    className="flex-shrink-0 w-screen h-screen flex flex-col justify-end items-center relative bg-cover bg-center bg-[url('/images/f9.webp')]  md:bg-[url('/images/f9.webp')] bg-cover bg-center"
    // style={{ backgroundImage: "url('/images/f9.webp')" }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 w-full max-w-2xl px-4 pb-12 md:pb-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg">Hollywood Star</h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-100 text-center max-w-xl">
        Cena successfully transitioned to Hollywood, starring in blockbuster films and expanding his influence beyond wrestling.
      </p>
    </div>
  </div>
);

const Slide6 = () => (
  <div
    className="flex-shrink-0 w-screen h-screen flex flex-col justify-end items-center relative bg-cover bg-center"
    style={{ backgroundImage: "url('/images/maw.webp')" }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 w-full max-w-2xl px-4 pb-12 md:pb-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg">Make-A-Wish Record</h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-100 text-center max-w-xl">
        Cena granted over 650 wishes, holding the all-time record for most wishes granted to children through Make-A-Wish.
      </p>
    </div>
  </div>
);

const JohnCenaAchievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const scrolled = -rect.top;
        const totalScrollHeight = container.offsetHeight - viewportHeight;
        const progress = Math.min(Math.max(scrolled / totalScrollHeight, 0), 1);
        const totalWidth = 6 * 100; // 6 slides
        const maxTranslate = totalWidth - 100;
        const newTranslate = -(progress * maxTranslate);
        setTranslateX(newTranslate);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-900">
      {/* Hero Section */}
      

      {/* Horizontal Scroll Section - Extra height for scroll space */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: `${6 * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="flex h-screen transition-transform duration-100 ease-linear"
            style={{
              transform: `translateX(${translateX}vw)`,
              width: `${6 * 100}vw`
            }}
          >
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default JohnCenaAchievements;