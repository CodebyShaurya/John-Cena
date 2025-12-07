import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import { Timeline } from './ui/timeline';
interface WorldTitle {
  title: string;
  reign: number;
  date: string;
  defeated?: string;
  location: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export default function SmoothScrollLayout(): JSX.Element {
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

  
  const wrestleManiaTimelineData = [
    {
      title: "2004-2008",
      content: (
        <div>
          <p className="text-white text-xs md:text-2xl font-bold mb-8"
           style={{
            color: '#fff',
            WebkitTextStroke: '1px #000',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            The rise of John Cena - From midcard to main event player
          </p>
          <div className="space-y-4">
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania XX (2004)</h4>
              <p className="text-green-700 font-semibold">vs. Big Show - Won (US Championship)</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania 21 (2005)</h4>
              <p className="text-green-700 font-semibold">vs. JBL - Won (WWE Championship)</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania 22 (2006)</h4>
              <p className="text-green-700 font-semibold">vs. Triple H - Won (WWE Championship)</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania 23 (2007)</h4>
              <p className="text-green-700 font-semibold">vs. Shawn Michaels - Won (WWE Championship)</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania XXIV (2008)</h4>
              <p className="text-green-700 font-semibold">vs. Randy Orton & Triple H - Won (Triple Threat)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2009-2015",
      content: (
        <div>
          <p className="text-white text-xs md:text-2xl font-bold mb-8"
           style={{
            color: '#fff',
            WebkitTextStroke: '1px #000',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            The peak of Cenation - Dominating the main event scene
          </p>
          <div className="space-y-4">
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania XXV (2009)</h4>
              <p className="text-green-700 font-semibold">vs. Edge & Big Show - Won (Triple Threat)</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania XXVI (2010)</h4>
              <p className="text-green-700 font-semibold">vs. Batista - Won (WWE Championship)</p>
            </div>
            <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 text-lg">WrestleMania XXVII (2011)</h4>
              <p className="text-red-700 font-semibold">vs. The Miz - Lost</p>
            </div>
            <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 text-lg">WrestleMania XXVIII (2012)</h4>
              <p className="text-red-700 font-semibold">vs. The Rock - Lost (Once in a Lifetime)</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania 29 (2013)</h4>
              <p className="text-green-700 font-semibold">vs. The Rock - Won (WWE Championship)</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania XXX (2014)</h4>
              <p className="text-green-700 font-semibold">vs. Bray Wyatt - Won</p>
            </div>
            <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 text-lg">WrestleMania 31 (2015)</h4>
              <p className="text-green-700 font-semibold">vs. Rusev - Won (US Championship)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2016-2025",
      content: (
        <div>
          <p className="text-white text-xs md:text-2xl font-bold mb-8"
           style={{
            color: '#fff',
            WebkitTextStroke: '1px #000',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            The Hollywood transition and part-time appearances
          </p>
          <div className="space-y-4">
            <div className="bg-green-100/50 0 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg text-green-900 ">WrestleMania 32 (2016)</h4>
              <p className="text-green-700 font-semibold">vs. AJ Styles - Won</p>
            </div>
            <div className="bg-green-100/50 0 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg text-green-900 ">WrestleMania 33 (2017)</h4>
              <p className="text-green-700 font-semibold">John and Nikki Bella def. Miz and Maryse</p>
            </div>
            <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 text-lg">WrestleMania 34 (2018)</h4>
              <p className="text-red-700 font-semibold">vs. The Undertaker - Lost</p>
            </div>
          
            <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 text-lg">WrestleMania 39 (2023)</h4>
              <p className="text-red-700 font-semibold">vs. Austin Theory - Lost</p>
            </div>
            <div className="bg-green-100/50 0 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg text-green-900 ">WrestleMania 41 (2025)</h4>
              <p className="text-green-700 font-semibold">vs. Cody Rhodes - Won (WWE Championship)</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
      
      // Removed unused windowSize state
    
      const targetDate = new Date('2025-12-14T06:30:00').getTime();
    
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
  return (
    <ReactLenis root>
      <main className='bg-black'>
        <div className='wrapper'>
          <section className="h-screen w-full flex items-center   p-8 bg-[url('/countdown_mob.jpg')]  md:bg-[url('/countdown.jpg')] bg-cover bg-center  sticky top-0">
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

          <section
            className="min-h-screen flex justify-end md:p-8 relative bg-[url('/images/2k25_mob.jpg')]  md:bg-[url('/images/2k25.jpg')] bg-cover bg-center"
            // style={{
            //   backgroundImage: "url('/images/2k25.jpg')",
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
            //   backgroundRepeat: 'no-repeat',
            // }}
          >
            {/* <div className="absolute inset-0 bg-black/40 pointer-events-none" /> */}
            <div className="relative z-10 flex flex-col items-end w-full">
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
              <div className="max-w-3xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-2">
                  {worldTitles.map((title, index) => (
                    <div
                      key={index}
                      className="bg-black/10 p-2 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-4 w-full"
                    >
                      {/* Left: Reign Number */}
                      <div className="text-4xl md:text-5xl font-black text-white">
                        #{title.reign}
                      </div>
                      {/* Middle: Date and Location */}
                      <div className="w-48">
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
            </div>
          </section>

          <section className=' sticky top-0'>
            <Timeline  data={wrestleManiaTimelineData} />
          </section>
        </div>

        {/* <section className='text-white w-full bg-slate-950'>
          <div className='grid grid-cols-2'>
            <div className='sticky top-0 h-screen flex items-center justify-center'>
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                Thanks To Scroll.
                <br /> Now Scroll Up Again☝️🏿
              </h1>
            </div>
            <div className='grid gap-2'>
              <figure className='grid place-content-center -skew-x-12'>
                <img
                  src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
              <figure className='grid place-content-center skew-x-12'>
                <img
                  src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
              <figure className='grid place-content-center -skew-x-12'>
                <img
                  src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
              <figure className='grid place-content-center skew-x-12'>
                <img
                  src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
            </div>
          </div>
        </section> */}

       
      </main>
    </ReactLenis>
  );
}