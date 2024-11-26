import React from 'react';
import { Bot, Target } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Bot className="w-8 h-8 text-blue-500" />
        <Target className="w-4 h-4 text-purple-500 absolute -bottom-1 -right-1" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        SniperAI
      </span>
    </div>
  );
}