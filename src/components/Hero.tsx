import React from 'react';
import Countdown from 'react-countdown';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const presaleDate = new Date('2024-12-31');

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
          alt="Abstract background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=1293"
          alt="AI visualization"
          className="absolute -right-48 top-20 w-96 h-96 object-cover rounded-full blur-sm opacity-20 animate-float"
        />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1744"
          alt="Digital network"
          className="absolute -left-48 bottom-20 w-96 h-96 object-cover rounded-full blur-sm opacity-20 animate-float-delayed"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          The Future of AI Trading
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          SniperAI combines artificial intelligence with blockchain technology to revolutionize cryptocurrency trading.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full flex items-center space-x-2 transition-colors w-full md:w-auto justify-center group">
            <span>Join Presale</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Presale Starts In</p>
            <Countdown
              date={presaleDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex space-x-4 text-xl font-mono">
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-blue-500">{days}</span>
                    <span className="text-sm text-gray-500">d</span>
                  </div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-blue-500">{hours}</span>
                    <span className="text-sm text-gray-500">h</span>
                  </div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-blue-500">{minutes}</span>
                    <span className="text-sm text-gray-500">m</span>
                  </div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-blue-500">{seconds}</span>
                    <span className="text-sm text-gray-500">s</span>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}