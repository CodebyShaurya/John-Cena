import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const endDate = new Date('December 31, 2025').getTime();
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDaysLeft(days);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="countdown-container">
      <div className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bebas count-text text-white">
        22
      </div>
      <div className="text-xl md:text-2xl mt-4 font-montserrat text-gray-300">
        NIGHTS LEFT
      </div>
    </div>
  );
}

export default CountdownTimer;