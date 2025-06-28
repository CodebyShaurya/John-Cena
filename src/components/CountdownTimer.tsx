const CountdownTimer: React.FC = () => {
 

  return (
    <div className="countdown-container">
      <div className="text-8xl sm:text-9xl md:text-[7rem] lg:text-[9rem] font-bebas count-text text-white">
        16
      </div>
      <div className="text-lg md:text-xl mt-4 font-montserrat text-gray-300">
        NIGHTS LEFT
      </div>
    </div>
  );
}

export default CountdownTimer;