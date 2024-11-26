import React from 'react';
import { Bot, Wallet } from 'lucide-react';

interface HeaderProps {
  isWalletConnected: boolean;
  onConnectWallet: () => void;
}

export function Header({ isWalletConnected, onConnectWallet }: HeaderProps) {
  return (
    <header className="fixed w-full bg-black/50 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">SniperAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
          <a href="#tokenomics" className="hover:text-blue-500 transition-colors">Tokenomics</a>
          <a href="#roadmap" className="hover:text-blue-500 transition-colors">Roadmap</a>
          <button
            onClick={onConnectWallet}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full flex items-center space-x-2 transition-colors"
          >
            <Wallet className="w-4 h-4" />
            <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}