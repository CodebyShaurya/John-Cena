import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface WorldTitle {
  title: string;
  reign: number;
  date: string;
  defeated?: string;
  location: string;
}

interface WrestleManiaMatch {
  year: number;
  event: string;
  opponent: string;
  result: string;
  stipulation?: string;
}

const JohnCenaTribute: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const targetDate = new Date('2025-12-13T20:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const worldTitles: WorldTitle[] = [
    { title: "WWE Championship", reign: 1, date: "April 3, 2005", defeated: "JBL", location: "WrestleMania 21" },
    { title: "WWE Championship", reign: 2, date: "January 8, 2006", defeated: "Edge", location: "New Year's Revolution" },
    { title: "WWE Championship", reign: 3, date: "September 17, 2006", defeated: "Edge", location: "Unforgiven" },
    // { title: "WWE Championship", reign: 4, date: "October 7, 2007", defeated: "Randy Orton", location: "No Mercy" },
    { title: "World Heavyweight Championship", reign: 4, date: "November 16, 2008", defeated: "Chris Jericho", location: "Survivor Series" },
    { title: "WWE Championship", reign: 5, date: "April 26, 2009", defeated: "Edge", location: "WrestleMania 25" },
    { title: "WWE Championship", reign: 6, date: "September 13, 2009", defeated: "Randy Orton", location: "Breaking Point" },
    { title: "WWE Championship", reign: 7, date: "October 25, 2009", defeated: "Randy Orton", location: "Bragging Rights" },
    { title: "WWE Championship", reign: 8, date: "March 28, 2010", defeated: "HHH", location: "Elimination Chamber" },
    { title: "WWE Championship", reign: 9, date: "May 17, 2010", defeated: "Batista", location: "WrestleMania XXVI" },
    // { title: "WWE Championship", reign: 10, date: "July 25, 2010", defeated: "Sheamus", location: "Money in the Bank" },
    // { title: "WWE Championship", reign: 11, date: "September 19, 2010", defeated: "Wade Barrett", location: "Night of Champions" },
    { title: "WWE Championship", reign: 10, date: "May 1, 2011", defeated: "The Miz", location: "Extreme Rules" },
    { title: "WWE Championship", reign: 11, date: "July 25, 2011", defeated: "Rey Mysterio", location: "Raw" },
    { title: "World Heavyweight Championship", reign: 12, date: "September 18, 2011", defeated: "Alberto Del Rio", location: "Night of Champions" },
    {title: "WWE Championship", reign: 13, date: "April 7, 2013", defeated: "The Rock", location: "WrestleMania 29" },
    { title: "WWE Championship", reign: 14, date: "September 15, 2013", defeated: "Alberto Del Rio", location: "Hell in a Cell" },
    { title: "World Heavyweight Championship", reign: 15, date: "June 29, 2014", defeated: "Randy Orton", location: "Money in the Bank" },
    { title: "WWE Championship", reign: 16, date: "January 29, 2017", defeated: "AJ Styles", location: "Royal Rumble" },
    { title: "Undisputed WWE Universal Championship", reign: 17, date: "April 20, 2025", defeated: "Cody Rhodes", location: "WrestleMania 41" }
  ];

  const wrestleManiaMatches: WrestleManiaMatch[] = [
    { year: 2004, event: "WrestleMania XX", opponent: "Big Show", result: "Won", stipulation: "United States Championship" },
    { year: 2005, event: "WrestleMania 21", opponent: "JBL", result: "Won", stipulation: "WWE Championship" },
    { year: 2006, event: "WrestleMania 22", opponent: "Triple H", result: "Won", stipulation: "WWE Championship" },
    { year: 2007, event: "WrestleMania 23", opponent: "Shawn Michaels", result: "Won", stipulation: "WWE Championship" },
    { year: 2008, event: "WrestleMania XXIV", opponent: "Randy Orton & Triple H", result: "Won", stipulation: "WWE Championship Triple Threat" },
    { year: 2009, event: "WrestleMania XXV", opponent: "Edge & Big Show", result: "Won", stipulation: "World Heavyweight Championship Triple Threat" },
    { year: 2010, event: "WrestleMania XXVI", opponent: "Batista", result: "Won", stipulation: "WWE Championship" },
    { year: 2011, event: "WrestleMania XXVII", opponent: "The Miz", result: "Lost" },
    { year: 2012, event: "WrestleMania XXVIII", opponent: "The Rock", result: "Lost", stipulation: "Once in a Lifetime" },
    { year: 2013, event: "WrestleMania 29", opponent: "The Rock", result: "Won", stipulation: "WWE Championship" },
    { year: 2014, event: "WrestleMania XXX", opponent: "Bray Wyatt", result: "Won" },
    { year: 2015, event: "WrestleMania 31", opponent: "Rusev", result: "Won", stipulation: "United States Championship" },
    { year: 2016, event: "WrestleMania 32", opponent: "AJ Styles", result: "Won" },
    { year: 2017, event: "WrestleMania 33", opponent: "Nikki Bella vs. Miz & Maryse", result: "Won", stipulation: "Mixed Tag Team Match" },
    { year: 2018, event: "WrestleMania 34", opponent: "The Undertaker", result: "Lost" },
    { year: 2021, event: "WrestleMania 37", opponent: "Roman Reigns & Edge", result: "Lost", stipulation: "Universal Championship Triple Threat" },
    { year: 2023, event: "WrestleMania 39", opponent: "Austin Theory", result: "Won", stipulation: "United States Championship" }
  ];

  const achievements = [
    "🏆 17-time World Champion ",
    "🥇 5-time United States Champion",
    "👥 4-time Tag Team Champion (2x World Tag Team, 2x WWE Tag Team)",
    "💼 2012 Money in the Bank winner",
    "👑 2008 & 2013 Royal Rumble winner",
    "⭐ 2012 Superstar of the Year",
    "🎖️ WWE Grand Slam Champion",
    "👑 WWE Triple Crown Champion",
    "❤️ Most Make-A-Wish visits (over 650)",
    "🎬 Hollywood actor (Fast & Furious, Peacemaker, The Suicide Squad)",
    "📅 16 years as WWE's top star (2005-2021)",
    "⏰ Longest combined WWE Championship reign of the modern era"
  ];

  const renderCountdown = () => (
    <section className="min-h-screen flex items-center   p-8 bg-[url('/countdown.jpg')] bg-cover bg-center">
      <div className=" max-w-6xl">
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white mb-6 drop-shadow-2xl">
          JOHN CENA
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-200 mb-4">
          FINAL MATCH COUNTDOWN
        </h2>
        <p className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-12 font-semibold">
          December 13th, 2025 - The Last Time is Now
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="bg-white/95 backdrop-blur text-black p-6 md:p-4 rounded-2xl shadow-2xl border-4 border-yellow-400 transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-5xl lg:text-6xl font-black text-red-600 text-center">{item.value}</div>
              <div className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 text-center">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderAchievements = () => (
    <section className="min-h-screen  p-8 flex items-center bg-[url('/images/2k.jpg')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-center text-white mb-12 drop-shadow-lg font-extrabold">
          CAREER ACHIEVEMENTS
        </h2>

        <div className='flex flex-rows justify-between'>
          <div className="flex flex-col justify-between gap-2 w-1/4">
            {achievements.slice(0,6).map((achievement, index) => (
              <div key={index} className="bg-blue-500 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400 transition-all hover:bg-white/20">
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-2 w-1/4">
            {achievements.slice(6,12).map((achievement, index) => (
              <div key={index} className="bg-blue-500 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400 transition-all hover:bg-white/20">
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );

  const renderWorldTitles = () => (
    <section className="min-h-screen flex justify-end p-8 bg-[url('/17.jpg')] bg-cover bg-center">
      <div className="max-w-6xl ">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12 drop-shadow-lg inline-block px-6 py-2 rounded-md"
          style={{
            color: '#fff',
            WebkitTextStroke: '2px #000',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}
        >
          17 WORLD TITLE REIGNS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worldTitles.map((title, index) => (
            <div
              key={index}
              className="bg-black/50 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-4"
            >
              {/* Left: Reign Number */}
              <div className="text-4xl md:text-5xl font-black text-white">
                #{title.reign}
              </div>

              {/* Middle: Date and Location */}
              <div className="flex-1">
                {/* <h3 className="text-xl md:text-2xl font-black text-black mb-1">
                  {title.title}
                </h3> */}
                <p className="text-white font-bold text-lg mb-1">{title.date}</p>
                <p className="text-gray-300 font-medium">{title.location}</p>
              </div>

              {/* Right: Image of Defeated Wrestler */}
              {title.defeated && (
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-gray-300">
                  <img
                    src={`/images/${title.defeated.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={title.defeated}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderWrestleMania = () => (
    <section className="min-h-screen  p-8 bg-[url('https://static0.thesportsterimages.com/wordpress/wp-content/uploads/2025/03/john-cena-raw-march-17-2025-cropped.jpg')] bg-no-repeat bg-contain ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center text-yellow-400 mb-12 drop-shadow-lg">
          WRESTLEMANIA MATCHES
        </h2>
        <div className="space-y-6">
          {wrestleManiaMatches.map((match, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-xl border-l-8 ${
              match.result === 'Won' 
                ? 'bg-green-800/80 border-green-400 hover:bg-green-700/80' 
                : 'bg-red-800/80 border-red-400 hover:bg-red-700/80'
            } backdrop-blur-sm transition-all hover:scale-[1.02]`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {match.event} ({match.year})
                  </h3>
                  <p className="text-gray-200 text-lg font-semibold mb-1">vs. {match.opponent}</p>
                  {match.stipulation && (
                    <p className="text-gray-300 font-medium">{match.stipulation}</p>
                  )}
                </div>
                <div className={`text-3xl md:text-4xl font-black mt-4 md:mt-0 ${
                  match.result === 'Won' ? 'text-green-300' : 'text-red-300'
                }`}>
                  {match.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderBio = () => (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 flex items-center ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-yellow-400 mb-12 drop-shadow-lg">
          ABOUT JOHN CENA
        </h2>
        <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-yellow-400/30">
          <img 
            src="https://www.wwe.com/f/styles/gallery_img_l/public/photo/image/2013/04/RAW_1040_Photo_158.jpg" 
            alt="John Cena" 
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto mb-8 border-8 border-yellow-400 shadow-2xl"
          />
          <div className="text-white text-lg md:text-xl space-y-6 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <p><strong className="text-yellow-400">Full Name:</strong> John Felix Anthony Cena Jr.</p>
              <p><strong className="text-yellow-400">Born:</strong> April 23, 1977</p>
              <p><strong className="text-yellow-400">Birthplace:</strong> West Newbury, Massachusetts</p>
              <p><strong className="text-yellow-400">WWE Debut:</strong> June 27, 2002</p>
              <p><strong className="text-yellow-400">Signature Moves:</strong> AA, Five Knuckle Shuffle, STF</p>
              <p><strong className="text-yellow-400">Catchphrases:</strong> "You Can't See Me", "Never Give Up"</p>
            </div>
            <p className="text-gray-200 text-center leading-relaxed mt-8">
              John Cena is widely regarded as one of the greatest WWE Superstars of all time. 
              Beyond wrestling, he's a successful actor, rapper, and philanthropist who has granted 
              more Make-A-Wish requests than any other celebrity. His 16-year run as WWE's top star 
              made him the face of the company and a global icon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  useEffect(() => {
    const handleParallax = () => {
      const sections = document.querySelectorAll('.parallax-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.8 &&
          rect.bottom > window.innerHeight * 0.2
        ) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleParallax);
    window.addEventListener('resize', handleParallax);
    setTimeout(handleParallax, 100);

    return () => {
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('resize', handleParallax);
    };
  }, []);

  return (
    <div className="">
      {/* <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={50} recycle={true} /> */}
      
      <style>{`
        .parallax-section {
          position: relative;
          will-change: transform, opacity;
          transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1),
            opacity 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .parallax-section {
          opacity: 1;
          transform: translateY(0);
        }
        .parallax-section:not(:first-child) {
          opacity: 0;
          transform: translateY(100px);
        }
        .parallax-section.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="parallax-section">{renderCountdown()}</div>
      <div className="parallax-section">{renderAchievements()}</div>
      <div className="parallax-section">{renderWorldTitles()}</div>
      <div className="parallax-section">{renderWrestleMania()}</div>
      <div className="parallax-section">{renderBio()}</div>

      <footer className="bg-black text-center p-8">
        <p className="text-2xl font-bold text-yellow-400 mb-2">
          "NEVER GIVE UP"
        </p>
        <p className="text-gray-400 text-lg">
          Thank you for 22 years of memories, John Cena!
        </p>
      </footer>
    </div>
  );
};

export default JohnCenaTribute;