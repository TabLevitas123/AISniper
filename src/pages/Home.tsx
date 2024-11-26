import React from 'react';
import { ArrowRight, Bot, Brain, Cpu, LineChart, Lock, Rocket, Shield, Target, Zap } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-black"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="flex justify-center mb-8">
            <Bot className="w-24 h-24 text-blue-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Trade Smarter with AI
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            SniperAI combines advanced artificial intelligence with real-time market data to execute profitable trades with unprecedented accuracy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors group">
              <span>Launch App</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Advanced Trading Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform provides cutting-edge tools for successful trading
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Powered Analysis",
                description: "Advanced machine learning algorithms analyze market patterns and predict profitable trading opportunities."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast Execution",
                description: "Execute trades at unprecedented speeds, beating the competition to profitable positions."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Risk Management",
                description: "Sophisticated risk management systems protect your capital and optimize returns."
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Real-time Analytics",
                description: "Monitor your portfolio performance with detailed real-time analytics and insights."
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Bank-Grade Security",
                description: "Your funds and data are protected by military-grade encryption and security protocols."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Smart Order Routing",
                description: "Automatically route orders to the most profitable exchanges and trading pairs."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$2.5B+", label: "Trading Volume" },
              { value: "99.9%", label: "Uptime" },
              { value: "0.1s", label: "Execution Time" },
              { value: "50K+", label: "Active Users" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get started with SniperAI in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "1. Connect Your Wallet",
                description: "Link your wallet securely to access the platform's features."
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "2. Configure AI Parameters",
                description: "Set your trading preferences and risk management parameters."
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "3. Start Trading",
                description: "Let our AI execute profitable trades automatically."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm text-center">
                  <div className="text-blue-500 mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}