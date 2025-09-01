import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

interface Photo {
  url: string;
  color: string;
  bgClass: string;
}

interface TimeLeft {
  days: number;
}


interface PhotoDisplayProps {
  position: 'left' | 'right';
}

const JohnCenaCountdown: React.FC = () => {
  
  const [timeLeft] = useState<TimeLeft>({
    days: 8
  });

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Sample John Cena photos with associated colors
  const johnCenaPhotos: Photo[] = [
    {
      url: 'https://static.independent.co.uk/2025/03/18/8/44/Screenshot-2025-03-18-at-08-04-13.png',
      color: 'red',
      bgClass: 'from-red-900 to-red-800'
    },
    {
      url: 'https://www.usanetwork.com/sites/usablog/files/2022/05/wwe-john-cena.jpg',
      color: 'green',
      bgClass: 'from-green-900 to-green-800'
    },
    {
      url: 'https://www.cultaholic.com/_next/image?url=%2Fmedia%2FJohn%20Cena%20Raw%20Netflix%20Debut.jpg&w=3840&q=75',
      color: 'blue',
      bgClass: 'from-blue-900 to-blue-800'
    },
    {
      url: 'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4535x3023+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F51%2F42%2F00925bff4873b9d348cdbe4eff09%2Fgettyimages-2206240021.jpg',
      color: 'black',
      bgClass: 'from-gray-900 to-black'
    },
    {
      url: 'https://www.wwe.com/f/styles/gallery_img_l/public/photo/image/2013/04/RAW_1040_Photo_158.jpg',
      color: 'white',
      bgClass: 'from-gray-100 to-gray-300'
    }
  ];

  // John Cena logo placeholder (replace with actual logo)
  // const johnCenaLogo = 'https://via.placeholder.com/200x100/333333/FFFFFF?text=JOHN+CENA';

  const currentPhoto = johnCenaPhotos[currentPhotoIndex];
  const isWhiteTheme = currentPhoto.color === 'white';

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = targetDate - now;

  //     if (distance > 0) {
  //       setTimeLeft({
  //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  //         seconds: Math.floor((distance % (1000 * 60)) / 1000)
  //       });
  //     } else {
  //       setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [targetDate]);

  useEffect(() => {
    const photoTimer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => 
        (prevIndex + 1) % johnCenaPhotos.length
      );
    }, 1000);

    return () => clearInterval(photoTimer);
  }, [johnCenaPhotos.length]);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const PhotoDisplay: React.FC<PhotoDisplayProps> = () => (
    <div className="hidden lg:block w-80 h-full">
      <div className="h-full flex items-center justify-center">
        <div className="relative">
          <div className={`absolute inset-0 ${isWhiteTheme ? 'bg-gray-200' : 'bg-black'} opacity-20 rounded-2xl blur-2xl transform translate-x-2 translate-y-2 transition-all duration-1000`}></div>
          <img
            src={currentPhoto.url}
            alt={`John Cena ${currentPhotoIndex + 1}`}
            className="relative w-72 h-96 object-cover rounded-2xl shadow-2xl transition-all duration-1000 border-4 border-white/10"
          />
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${isWhiteTheme ? 'from-black/20 to-transparent' : 'from-white/10 to-transparent'} transition-all duration-1000`}></div>
        </div>
      </div>
    </div>
  );

  const MobilePhotoDisplay: React.FC = () => (
    <div className="lg:hidden w-full mb-8">
      <div className="max-w-sm mx-auto relative">
        <div className={`absolute inset-0 ${isWhiteTheme ? 'bg-gray-200' : 'bg-black'} opacity-20 rounded-2xl blur-xl transform translate-x-1 translate-y-1 transition-all duration-1000`}></div>
        <img
          src={currentPhoto.url}
          alt={`John Cena ${currentPhotoIndex + 1}`}
          className="relative w-full h-64 object-cover rounded-2xl shadow-xl transition-all duration-1000 border-4 border-white/10"
        />
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${isWhiteTheme ? 'from-black/20 to-transparent' : 'from-white/10 to-transparent'} transition-all duration-1000`}></div>
      </div>
    </div>
  );

  // Helper to get color classes based on theme
  const getThemeColor = (color: string) => {
    switch (color) {
      case 'red':
        return {
          border: 'border-red-500',
          shadow: 'shadow-red-400/60',
          ring: 'ring-red-400/40',
          label: 'text-red-600'
        };
      case 'green':
        return {
          border: 'border-green-500',
          shadow: 'shadow-green-400/60',
          ring: 'ring-green-400/40',
          label: 'text-green-600'
        };
      case 'blue':
        return {
          border: 'border-blue-500',
          shadow: 'shadow-blue-400/60',
          ring: 'ring-blue-400/40',
          label: 'text-blue-600'
        };
      case 'black':
        return {
          border: 'border-gray-300',
          shadow: 'shadow-gray-300/60',
          ring: 'ring-gray-300/40',
          label: 'text-gray-300'
        };
      case 'white':
        return {
          border: 'border-yellow-400',
          shadow: 'shadow-yellow-400/60',
          ring: 'ring-yellow-400/40',
          label: 'text-yellow-600'
        };
      default:
        return {
          border: 'border-yellow-400',
          shadow: 'shadow-yellow-400/60',
          ring: 'ring-yellow-400/40',
          label: 'text-yellow-300'
        };
    }
  };

  const themeColor = getThemeColor(currentPhoto.color);

  return (
    <div className={`h-screen w-full bg-gradient-to-br ${currentPhoto.bgClass} flex flex-col justify-center p-4 transition-all duration-1000 overflow-auto`}>
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
      {/* <Analytics /> */}

        {/* Subtitle */}
        <div className="text-center mb-8">
          <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-1000 ${isWhiteTheme ? 'text-black' : 'text-white'}`}>
            JOHN CENA'S FAREWELL TOUR
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl font-medium transition-colors duration-1000 ${isWhiteTheme ? 'text-gray-700' : 'text-gray-300'}`}>
            The Last Time is Now
          </p>
          <p className={`mt-2 text-sm md:text-lg lg:text-xl transition-colors duration-1000 ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>
            Don't miss The GOAT's final performances
          </p>
        </div>

        {/* Main Row: Photos + Counter */}
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 mb-8">
          {/* Mobile: Timer above Photo */}
          <div className="w-full flex flex-col items-center lg:hidden mb-4">
            {/* Timer */}
            <div
              className={`
                flex flex-col items-center justify-center
                rounded-2xl
                p-8
                shadow-2xl
                border-4
                transition-all duration-300
                text-5xl font-extrabold
                cursor-pointer
                transform
                mb-6
                ${isWhiteTheme
                  ? `bg-white text-black ${themeColor.border} hover:${themeColor.shadow} hover:scale-105`
                  : `bg-black text-white ${themeColor.border} hover:${themeColor.shadow} hover:scale-105`
                }
                hover:${themeColor.ring}
                group
              `}
              title="Countdown to the Farewell Tour"
            >
              <span className="mb-2 tracking-widest drop-shadow-lg group-hover:animate-pulse">
                {timeLeft.days}
              </span>
              <span className={`
                text-base font-semibold uppercase tracking-wider
                ${themeColor.label}
                transition-colors duration-300
                group-hover:underline
              `}>
                Days Left
              </span>
            </div>
            {/* Photo */}
            <MobilePhotoDisplay />
          </div>

          {/* Desktop Row: Photos + Counter */}
          <div className="hidden lg:flex flex-row items-center justify-center gap-12 w-full">
            {/* Left Photo */}
            <PhotoDisplay position="left" />

            {/* Counter */}
            <div
              className={`
                flex flex-col items-center justify-center
                rounded-2xl
                p-10 md:p-16
                shadow-2xl
                border-4
                transition-all duration-300
                text-6xl md:text-8xl lg:text-9xl font-extrabold
                cursor-pointer
                transform
                ${isWhiteTheme
                  ? `bg-white text-black ${themeColor.border} hover:${themeColor.shadow} hover:scale-110`
                  : `bg-black text-white ${themeColor.border} hover:${themeColor.shadow} hover:scale-110`
                }
                hover:${themeColor.ring}
                group
              `}
              title="Countdown to the Farewell Tour"
            >
              <span className="mb-2 tracking-widest drop-shadow-lg group-hover:animate-pulse">
                {timeLeft.days}
              </span>
              <span className={`
                text-base md:text-2xl lg:text-3xl font-semibold uppercase tracking-wider
                ${themeColor.label}
                transition-colors duration-300
                group-hover:underline
              `}>
                Days Left
              </span>
            </div>

            {/* Right Photo */}
            <PhotoDisplay position="right" />
          </div>
        </div>

        

          {/* Top Logo */}
        {/* <div className="mb-8 h-full flex justify-center">
          <img
            src="https://raw.githubusercontent.com/CodebyShauryaIPU/John-Cena/refs/heads/main/ucme.png"
            alt="John Cena Logo"
            className="h-32 md:h-36 lg:h-40 object-contain opacity-90 transition-all duration-1000"
          />
        </div> */}

        {/* Mobile Photo Display (optional, if you want to show on mobile) */}
        {/* <MobilePhotoDisplay /> */}
        {/* <div className={`  w-full text-white text-center text-xl`}>
            Developed by - <a href="https://github.com/CodebyShaurya/" target="_blank" rel="noopener noreferrer" >Shaurya</a>
          </div> */}
      </div>

      <>
        {/* Confetti */}
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={250} recycle={false} />

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div
              className="bg-white rounded-2xl shadow-2xl p-4 pt-12 max-w-md w-full text-center relative overflow-y-auto max-h-[90vh] sm:max-h-[80vh]"
              style={{ boxSizing: 'border-box' }}
            >
              <button
                className="fixed sm:absolute top-4 right-6 sm:top-2 sm:right-4 text-3xl sm:text-2xl text-gray-500 hover:text-red-500 z-10 bg-white/80 rounded-full px-2 py-0.5"
                onClick={() => setShowModal(false)}
                aria-label="Close"
                style={{ lineHeight: 1 }}
              >
                &times;
              </button>
              <img
                src="https://static.independent.co.uk/2025/03/18/8/44/Screenshot-2025-03-18-at-08-04-13.png"
                alt="John Cena"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400 object-cover"
              />
              {/* <h2 className="text-2xl font-bold mb-2 text-yellow-600">Latest News!</h2>
              <p className="mb-4 text-gray-800">
                <span className="font-semibold"></span>!
              </p> */}
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Predicted Farewell Nights:</h3>
              <ul className="mb-2 text-left">
                {predictedNights.map((night, idx) => (
                  <li key={idx} className="mb-1">
                    <span className="font-bold text-yellow-700">{night.date}:</span> <span className="text-gray-800">{night.event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default JohnCenaCountdown;

const predictedNights = [
  // { date: "2025-08-03", event: "SUMMERSLAM (EAST RUTHERFORD, NJ)" },
  // { date: "2025-08-08", event: "SMACKDOWN (MONTREAL, QC)" },
  // { date: "2025-08-31", event: "CLASH IN PARIS (PARIS, FRANCE)" },
  { date: "2025-09-05", event: "SMACKDOWN (CHICAGO, IL)" },
  { date: "2025-09-15", event: "RAW (SPRINGFIELD, MA)" },
  { date: "2025-10-11", event: "CROWN JEWEL: PERTH (PERTH, AUSTRALIA)" },
  { date: "2025-11-29", event: "SURVIVOR SERIES (San Diego)" },
  { date: "Mid December", event: "Unknown" },
];
