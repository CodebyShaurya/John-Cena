import React from 'react';
import CountdownSection from './components/CountdownSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cena-navy to-black text-white overflow-hidden">
      <main>
        <CountdownSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;