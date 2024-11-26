import React from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Roadmap } from './pages/Roadmap';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Home />
      <Roadmap />
      <Contact />
    </div>
  );
}

export default App;