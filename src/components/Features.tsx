import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="relative py-20 px-6 bg-black/50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1932"
          alt="Technology background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose SniperAI?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-colors">
            <Target className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Precision Trading</h3>
            <p className="text-gray-400">Advanced AI algorithms identify optimal trading opportunities with unmatched accuracy.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-colors">
            <Rocket className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-gray-400">Execute trades at unprecedented speeds, beating the competition to profitable positions.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-colors">
            <Users className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Community Driven</h3>
            <p className="text-gray-400">Join a thriving community of traders and benefit from collective intelligence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}