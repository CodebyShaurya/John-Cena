import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cena-navy bg-opacity-95 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bebas tracking-wider text-white">
            <span className="text-cena-red">JOHN CENA</span> FAREWELL
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#countdown" className="font-montserrat text-sm uppercase tracking-wide hover:text-cena-red transition-colors">Countdown</a>
          <a href="#gallery" className="font-montserrat text-sm uppercase tracking-wide hover:text-cena-red transition-colors">Career Highlights</a>
          <a href="#about" className="font-montserrat text-sm uppercase tracking-wide hover:text-cena-red transition-colors">About</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cena-navy bg-opacity-95 absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#countdown" 
              className="font-montserrat text-lg py-2 border-b border-gray-800 hover:text-cena-red transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Countdown
            </a>
            <a 
              href="#gallery" 
              className="font-montserrat text-lg py-2 border-b border-gray-800 hover:text-cena-red transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Career Highlights
            </a>
            <a 
              href="#about" 
              className="font-montserrat text-lg py-2 hover:text-cena-red transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;