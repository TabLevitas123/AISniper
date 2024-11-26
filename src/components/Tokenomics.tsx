import React from 'react';

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&q=80&w=2832"
          alt="Blockchain background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-16">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Token Distribution</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span>50% Presale</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span>30% Liquidity</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                <span>20% Development</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Token Details</h3>
            <ul className="space-y-4 text-left">
              <li>Total Supply: 1,000,000,000 $SNIPE</li>
              <li>Initial Market Cap: $500,000</li>
              <li>Liquidity Locked: 1 Year</li>
              <li>Tax: 5% Buy / 5% Sell</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}