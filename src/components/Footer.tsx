import React from 'react';
import { Bot, Twitter, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <Bot className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">SniperAI</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Send className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; 2024 SniperAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}