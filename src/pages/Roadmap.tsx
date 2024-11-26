import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1 - Foundation",
      status: "completed",
      items: [
        "Platform architecture development",
        "Core AI algorithm implementation",
        "Security audit and penetration testing",
        "Initial beta testing with select users"
      ]
    },
    {
      phase: "Phase 2 - Enhancement",
      status: "current",
      items: [
        "Advanced trading features implementation",
        "Mobile app development",
        "Partnership integrations",
        "Community growth initiatives"
      ]
    },
    {
      phase: "Phase 3 - Expansion",
      status: "upcoming",
      items: [
        "Multi-chain support",
        "Advanced portfolio management",
        "Institutional-grade features",
        "Global marketing campaign"
      ]
    },
    {
      phase: "Phase 4 - Innovation",
      status: "upcoming",
      items: [
        "AI model optimization",
        "Cross-chain arbitrage",
        "Decentralized governance",
        "Advanced risk management tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Development Roadmap</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our vision for the future of SniperAI and upcoming features
          </p>
        </div>

        <div className="space-y-12">
          {roadmapItems.map((phase, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : phase.status === "current" ? (
                    <Circle className="w-6 h-6 text-blue-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-500" />
                  )}
                  <h2 className="text-2xl font-bold">{phase.phase}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <p className="text-gray-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-7 top-full h-12 w-0.5 bg-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}