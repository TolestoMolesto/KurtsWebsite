
import React, { useState } from 'react';
import { Zap, Sword, Shield, List, Hammer, User, LogIn, ChevronDown, Trophy } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament';
  setCurrentView: (view: 'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navItems = [
    { id: 'gods', label: 'Gods', icon: <Sword size={16} /> },
    { id: 'builder', label: 'Builder', icon: <Hammer size={16} /> },
    { id: 'items', label: 'Items', icon: <Shield size={16} /> },
    { id: 'tierlist', label: 'Tier List', icon: <List size={16} /> },
    { id: 'tournament', label: 'Tournament', icon: <Trophy size={16} /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left Side: Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView('home')}>
            <div className="bg-mythic-gold p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Zap size={20} className="text-slate-900" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl font-serif font-bold text-slate-100 tracking-tight leading-none">
                    SMITE 2 <span className="text-mythic-gold">FORGE</span>
                </h1>
                <span className="text-[9px] text-slate-500 font-mono uppercase tracking-widest mt-0.5">v0.8.2 Alpha</span>
            </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-1">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id as any)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    currentView === item.id 
                    ? 'bg-slate-800 text-mythic-gold shadow-inner' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                >
                {item.icon}
                {item.label}
                </button>
            ))}
            </nav>
        </div>

        {/* Right Side: Auth & Mobile Controls */}
        <div className="flex items-center gap-3">
            
            {/* Auth Section */}
            <div className="flex items-center">
                {isLoggedIn ? (
                    <div 
                        onClick={() => setIsLoggedIn(false)}
                        className="flex items-center gap-3 cursor-pointer bg-slate-800/50 hover:bg-slate-800 pr-4 pl-1.5 py-1.5 rounded-full border border-slate-700/50 hover:border-slate-600 transition-all group"
                        title="Click to Log Out"
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-mythic-gold to-yellow-600 rounded-full flex items-center justify-center text-slate-900 font-bold shadow-md border border-white/10">
                            Z
                        </div>
                        <div className="hidden sm:block text-right leading-tight">
                            <div className="text-xs text-slate-200 font-bold group-hover:text-white">ZeusMain</div>
                            <div className="text-[9px] text-mythic-gold uppercase font-bold tracking-wider">Pro Member</div>
                        </div>
                        <ChevronDown size={14} className="text-slate-500 group-hover:text-slate-300 ml-1" />
                    </div>
                ) : (
                    <button 
                        onClick={() => setIsLoggedIn(true)}
                        className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-mythic-gold hover:text-slate-900 text-slate-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all border border-slate-700 hover:border-mythic-gold shadow-sm group"
                    >
                        <div className="bg-slate-700 group-hover:bg-slate-900/20 p-1 rounded-full transition-colors">
                            <User size={14} />
                        </div>
                        <span className="hidden sm:inline">Sign In</span>
                    </button>
                )}
            </div>

            {/* Mobile Nav Icons (Visible on small screens) */}
            <div className="lg:hidden flex gap-1 pl-2 border-l border-slate-800">
                {navItems.map(item => (
                    <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id as any)}
                    className={`p-2 rounded-lg ${currentView === item.id ? 'text-mythic-gold bg-slate-800' : 'text-slate-400'}`}
                    >
                    {item.icon}
                    </button>
                ))}
            </div>

        </div>
      </div>
    </header>
  );
};
