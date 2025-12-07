import React from 'react';
// import { Timeline } from './components/ui/timeline';
import SmoothScrollLayout from './components/SmoothScrollLayout';
import HorizontalScroll from './components/HorizontalScroll';
import BuyMeCoffee from './components/BuyMeCoffee';



// Removed unused WrestleManiaMatch interface

const JohnCenaTribute: React.FC = () => {
  // const [timeLeft, setTimeLeft] = useState<TimeLeft>({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0
  // });
  
  // // Removed unused windowSize state

  // const targetDate = new Date('2025-12-13T20:00:00').getTime();

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

  // // Removed window resize handler

  // const worldTitles: WorldTitle[] = [
  //   { title: "WWE Championship", reign: 1, date: "April 3, 2005", defeated: "JBL", location: "WrestleMania 21" },
  //   { title: "WWE Championship", reign: 2, date: "January 8, 2006", defeated: "Edge", location: "New Year's Revolution" },
  //   { title: "WWE Championship", reign: 3, date: "September 17, 2006", defeated: "Edge", location: "Unforgiven" },
  //   // { title: "WWE Championship", reign: 4, date: "October 7, 2007", defeated: "Randy Orton", location: "No Mercy" },
  //   { title: "World Heavyweight Championship", reign: 4, date: "November 16, 2008", defeated: "Chris Jericho", location: "Survivor Series" },
  //   { title: "WWE Championship", reign: 5, date: "April 26, 2009", defeated: "Edge", location: "WrestleMania 25" },
  //   { title: "WWE Championship", reign: 6, date: "September 13, 2009", defeated: "Randy Orton", location: "Breaking Point" },
  //   { title: "WWE Championship", reign: 7, date: "October 25, 2009", defeated: "Randy Orton", location: "Bragging Rights" },
  //   { title: "WWE Championship", reign: 8, date: "March 28, 2010", defeated: "HHH", location: "Elimination Chamber" },
  //   { title: "WWE Championship", reign: 9, date: "May 17, 2010", defeated: "Batista", location: "WrestleMania XXVI" },
  //   // { title: "WWE Championship", reign: 10, date: "July 25, 2010", defeated: "Sheamus", location: "Money in the Bank" },
  //   // { title: "WWE Championship", reign: 11, date: "September 19, 2010", defeated: "Wade Barrett", location: "Night of Champions" },
  //   { title: "WWE Championship", reign: 10, date: "May 1, 2011", defeated: "The Miz", location: "Extreme Rules" },
  //   { title: "WWE Championship", reign: 11, date: "July 25, 2011", defeated: "Rey Mysterio", location: "Raw" },
  //   { title: "World Heavyweight Championship", reign: 12, date: "September 18, 2011", defeated: "Alberto Del Rio", location: "Night of Champions" },
  //   {title: "WWE Championship", reign: 13, date: "April 7, 2013", defeated: "The Rock", location: "WrestleMania 29" },
  //   { title: "WWE Championship", reign: 14, date: "September 15, 2013", defeated: "Alberto Del Rio", location: "Hell in a Cell" },
  //   { title: "World Heavyweight Championship", reign: 15, date: "June 29, 2014", defeated: "Randy Orton", location: "Money in the Bank" },
  //   { title: "WWE Championship", reign: 16, date: "January 29, 2017", defeated: "AJ Styles", location: "Royal Rumble" },
  //   { title: "Undisputed WWE Universal Championship", reign: 17, date: "April 20, 2025", defeated: "Cody Rhodes", location: "WrestleMania 41" }
  // ];

  // // Moved WrestleMania data to timeline format

  // const renderCountdown = () => (
  //   <section className="min-h-screen flex items-center   p-8 bg-[url('/countdown_mob.jpg')]  md:bg-[url('/countdown.jpg')] bg-cover bg-center">
  //     <div className=" max-w-6xl">
  //       <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white mb-6 drop-shadow-2xl">
  //         JOHN CENA
  //       </h1>
  //       <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-200 mb-4">
  //         FINAL MATCH COUNTDOWN
  //       </h2>
  //       <p className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-12 font-semibold">
  //         December 13th, 2025 - The Last Time is Now
  //       </p>
        
  //       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
  //         {[
  //           { label: 'Days', value: timeLeft.days },
  //           { label: 'Hours', value: timeLeft.hours },
  //           { label: 'Minutes', value: timeLeft.minutes },
  //           { label: 'Seconds', value: timeLeft.seconds }
  //         ].map((item, index) => (
  //           <div key={index} className="bg-white/95 backdrop-blur text-black p-6 md:p-4 rounded-2xl shadow-2xl border-4 border-yellow-400 transform hover:scale-105 transition-transform">
  //             <div className="text-3xl md:text-5xl lg:text-6xl font-black text-red-600 text-center">{item.value}</div>
  //             <div className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 text-center">{item.label}</div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );

  // const renderAchievements = () => (
  //   <section className="min-h-screen  p-8 flex items-center bg-[url('/images/2k.jpg')] bg-cover bg-center">
  //     <div className="max-w-6xl mx-auto w-full">
  //       <h2 className="text-4xl md:text-6xl lg:text-7xl text-center text-white mb-12 drop-shadow-lg font-extrabold">
  //         CAREER ACHIEVEMENTS
  //       </h2>

  //       {/* <div className='flex sm:flex-rows flex-cols justify-between'>
  //         <div className="flex flex-col justify-between gap-2 md:w-1/4">
  //           {achievements.slice(0,6).map((achievement, index) => (
  //             <div key={index} className="bg-blue-500 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400 transition-all hover:bg-white/20">
  //               <p className="text-white text-lg md:text-xl font-medium leading-relaxed">{achievement}</p>
  //             </div>
  //           ))}
  //         </div>

  //         <div className="flex flex-col justify-between gap-2 md:w-1/4">
  //           {achievements.slice(6,12).map((achievement, index) => (
  //             <div key={index} className="bg-blue-500 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400 transition-all hover:bg-white/20">
  //               <p className="text-white text-lg md:text-xl font-medium leading-relaxed">{achievement}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div> */}


  //     </div>
  //   </section>
  // );

  // const renderWorldTitles = () => (
  //   <section className="min-h-screen flex justify-end md:p-8 bg-[url('/images/2k25.jpg')] bg-cover bg-center">
  //     <h2
  //         className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12 drop-shadow-lg inline-block px-6 py-2 rounded-md"
  //         style={{
  //           color: '#fff',
  //           WebkitTextStroke: '2px #000',
  //           textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  //         }}
  //       >
  //         17 WORLD TITLE REIGNS
  //       </h2>
  //     <div className="max-w-3xl ">
        
  //       <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-2">
  //         {worldTitles.map((title, index) => (
  //           <div
  //             key={index}
  //             className="bg-black/10 p-2 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-4 w-full"
  //           >
  //             {/* Left: Reign Number */}
  //             <div className="text-4xl md:text-5xl font-black text-white">
  //               #{title.reign}
  //             </div>

  //             {/* Middle: Date and Location */}
  //             <div className="w-48">
  //               {/* <h3 className="text-xl md:text-2xl font-black text-black mb-1">
  //                 {title.title}
  //               </h3> */}
  //               <p className="text-white font-bold text-lg mb-1">{title.date}</p>
  //               <p className="text-gray-300 font-medium">{title.location}</p>
  //             </div>

  //             {/* Right: Image of Defeated Wrestler */}
  //             {title.defeated && (
  //               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-gray-300">
  //                 <img
  //                   src={`/images/${title.defeated.toLowerCase().replace(/\s+/g, '-')}.png`}
  //                   alt={title.defeated}
  //                   className="w-full h-full object-cover"
  //                 />
  //               </div>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );

  // const wrestleManiaTimelineData = [
  //   {
  //     title: "2004-2008",
  //     content: (
  //       <div>
  //         <p className="text-white text-xs md:text-2xl font-bold mb-8"
  //          style={{
  //           color: '#fff',
  //           WebkitTextStroke: '1px #000',
  //           textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  //         }}>
  //           The rise of John Cena - From midcard to main event player
  //         </p>
  //         <div className="space-y-4">
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania XX (2004)</h4>
  //             <p className="text-green-700 font-semibold">vs. Big Show - Won (US Championship)</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania 21 (2005)</h4>
  //             <p className="text-green-700 font-semibold">vs. JBL - Won (WWE Championship)</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania 22 (2006)</h4>
  //             <p className="text-green-700 font-semibold">vs. Triple H - Won (WWE Championship)</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania 23 (2007)</h4>
  //             <p className="text-green-700 font-semibold">vs. Shawn Michaels - Won (WWE Championship)</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania XXIV (2008)</h4>
  //             <p className="text-green-700 font-semibold">vs. Randy Orton & Triple H - Won (Triple Threat)</p>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "2009-2015",
  //     content: (
  //       <div>
  //         <p className="text-white text-xs md:text-2xl font-bold mb-8"
  //          style={{
  //           color: '#fff',
  //           WebkitTextStroke: '1px #000',
  //           textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  //         }}>
  //           The peak of Cenation - Dominating the main event scene
  //         </p>
  //         <div className="space-y-4">
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania XXV (2009)</h4>
  //             <p className="text-green-700 font-semibold">vs. Edge & Big Show - Won (Triple Threat)</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania XXVI (2010)</h4>
  //             <p className="text-green-700 font-semibold">vs. Batista - Won (WWE Championship)</p>
  //           </div>
  //           <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
  //             <h4 className="font-bold text-red-800 text-lg">WrestleMania XXVII (2011)</h4>
  //             <p className="text-red-700 font-semibold">vs. The Miz - Lost</p>
  //           </div>
  //           <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
  //             <h4 className="font-bold text-red-800 text-lg">WrestleMania XXVIII (2012)</h4>
  //             <p className="text-red-700 font-semibold">vs. The Rock - Lost (Once in a Lifetime)</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania 29 (2013)</h4>
  //             <p className="text-green-700 font-semibold">vs. The Rock - Won (WWE Championship)</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania XXX (2014)</h4>
  //             <p className="text-green-700 font-semibold">vs. Bray Wyatt - Won</p>
  //           </div>
  //           <div className="bg-green-100/50 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-green-800 text-lg">WrestleMania 31 (2015)</h4>
  //             <p className="text-green-700 font-semibold">vs. Rusev - Won (US Championship)</p>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "2016-2025",
  //     content: (
  //       <div>
  //         <p className="text-white text-xs md:text-2xl font-bold mb-8"
  //          style={{
  //           color: '#fff',
  //           WebkitTextStroke: '1px #000',
  //           textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  //         }}>
  //           The Hollywood transition and part-time appearances
  //         </p>
  //         <div className="space-y-4">
  //           <div className="bg-green-100/50 0 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-lg text-green-900 ">WrestleMania 32 (2016)</h4>
  //             <p className="text-green-700 font-semibold">vs. AJ Styles - Won</p>
  //           </div>
  //           <div className="bg-green-100/50 0 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-lg text-green-900 ">WrestleMania 33 (2017)</h4>
  //             <p className="text-green-700 font-semibold">John and Nikki Bella def. Miz and Maryse</p>
  //           </div>
  //           <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
  //             <h4 className="font-bold text-red-800 text-lg">WrestleMania 34 (2018)</h4>
  //             <p className="text-red-700 font-semibold">vs. The Undertaker - Lost</p>
  //           </div>
          
  //           <div className="bg-red-100/50 p-4 rounded-lg border-l-4 border-red-500">
  //             <h4 className="font-bold text-red-800 text-lg">WrestleMania 39 (2023)</h4>
  //             <p className="text-red-700 font-semibold">vs. Austin Theory - Lost</p>
  //           </div>
  //           <div className="bg-green-100/50 0 p-4 rounded-lg border-l-4 border-green-500">
  //             <h4 className="font-bold text-lg text-green-900 ">WrestleMania 41 (2025)</h4>
  //             <p className="text-green-700 font-semibold">vs. Cody Rhodes - Won (WWE Championship)</p>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];

  // const renderWrestleMania = () => (
  //   <div className="w-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
     
  //     <Timeline data={wrestleManiaTimelineData} />
  //   </div>
  // );

  // const renderBio = () => (
  //   <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 flex items-center ">
  //     <div className="max-w-5xl mx-auto text-center">
  //       <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-yellow-400 mb-12 drop-shadow-lg">
  //         ABOUT JOHN CENA
  //       </h2>
  //       <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-yellow-400/30">
  //         <img 
  //           src="https://www.wwe.com/f/styles/gallery_img_l/public/photo/image/2013/04/RAW_1040_Photo_158.jpg" 
  //           alt="John Cena" 
  //           className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto mb-8 border-8 border-yellow-400 shadow-2xl"
  //         />
  //         <div className="text-white text-lg md:text-xl space-y-6 max-w-3xl mx-auto">
  //           <div className="grid md:grid-cols-2 gap-6 text-left">
  //             <p><strong className="text-yellow-400">Full Name:</strong> John Felix Anthony Cena Jr.</p>
  //             <p><strong className="text-yellow-400">Born:</strong> April 23, 1977</p>
  //             <p><strong className="text-yellow-400">Birthplace:</strong> West Newbury, Massachusetts</p>
  //             <p><strong className="text-yellow-400">WWE Debut:</strong> June 27, 2002</p>
  //             <p><strong className="text-yellow-400">Signature Moves:</strong> AA, Five Knuckle Shuffle, STF</p>
  //             <p><strong className="text-yellow-400">Catchphrases:</strong> "You Can't See Me", "Never Give Up"</p>
  //           </div>
  //           <p className="text-gray-200 text-center leading-relaxed mt-8">
  //             John Cena is widely regarded as one of the greatest WWE Superstars of all time. 
  //             Beyond wrestling, he's a successful actor, rapper, and philanthropist who has granted 
  //             more Make-A-Wish requests than any other celebrity. His 16-year run as WWE's top star 
  //             made him the face of the company and a global icon.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  // useEffect(() => {
  //   const handleParallax = () => {
  //     const sections = document.querySelectorAll('.parallax-section');
  //     sections.forEach((section) => {
  //       const rect = section.getBoundingClientRect();
  //       if (
  //         rect.top < window.innerHeight * 0.8 &&
  //         rect.bottom > window.innerHeight * 0.2
  //       ) {
  //         section.classList.add('in-view');
  //       } else {
  //         section.classList.remove('in-view');
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleParallax);
  //   window.addEventListener('resize', handleParallax);
  //   setTimeout(handleParallax, 100);

  //   return () => {
  //     window.removeEventListener('scroll', handleParallax);
  //     window.removeEventListener('resize', handleParallax);
  //   };
  // }, []);

  return (
    <div className="bg-black">
      {/* <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={50} recycle={true} /> */}
      
    
  

      {/* <div className="parallax-section">{renderCountdown()}</div> */}
      {/* <div className="parallax-section">{renderAchievements()}</div> 
      <div className="parallax-section">{renderWorldTitles()}</div>*/}
      {/* <div className="parallax-section">{renderWrestleMania()}</div>
      <div className="parallax-section">{renderBio()}</div> */}
      <SmoothScrollLayout/>
      <HorizontalScroll />
        <BuyMeCoffee />
      

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