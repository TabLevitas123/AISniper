import React from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#statistics" className="text-gray-300 hover:text-white transition-colors">Statistics</a>
            <a href="/roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
              Launch App
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#statistics" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Statistics</a>
            <a href="/roadmap" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Roadmap</a>
            <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
              Launch App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}