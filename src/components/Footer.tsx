import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-cena-navy py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-bebas mb-4 text-white">ABOUT JOHN CENA</h4>
            <p className="text-gray-300 text-sm">
              John Cena is a 16-time world champion, actor, and philanthropist. 
              Since his WWE debut in 2002, Cena has been a cornerstone of WWE, 
              known for his "Never Give Up" motto and granting over 650 Make-A-Wish requests.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bebas mb-4 text-white">LEGACY</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• 16-time World Champion</li>
              <li>• 5-time United States Champion</li>
              <li>• 2-time Royal Rumble Winner (2008, 2013)</li>
              <li>• 10-time WWE Championship reign</li>
              <li>• 3-time World Heavyweight Champion</li>
              <li>• Money in the Bank winner (2012)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bebas mb-4 text-white">FAREWELL TOUR</h4>
            <p className="text-gray-300 text-sm mb-4">
              John Cena announced his retirement tour in 2023, with his final WWE appearance 
              scheduled for 2025. Stay updated on his remaining matches and appearances.
            </p>
            <div className="mt-4">
              <button className="bg-cena-red hover:bg-red-700 text-white py-2 px-4 rounded transition-colors">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>This is a fan tribute website and is not affiliated with WWE or John Cena.</p>
          <p className="mt-2">© {currentYear} John Cena Farewell Countdown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;