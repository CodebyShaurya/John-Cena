import React from 'react';

const CenaLogo: React.FC = () => {
  return (
    <div className="logo-pulse">
     <img
        src="https://raw.githubusercontent.com/CodebyShauryaIPU/John-Cena/refs/heads/main/ucme.png"
        alt="Cena Logo"
        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto mb-4 animate-pulse-slow"
      />
    </div>
  );
};

export default CenaLogo;