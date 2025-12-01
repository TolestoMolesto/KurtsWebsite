// components/MobileNav.tsx - Updated with Guides tab
import React from 'react';
import { Home, Sword, Shield, List, Hammer, Trophy, BookOpen } from 'lucide-react'; // Added BookOpen

type ViewType = 'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament' | 'guides' | 'profile'; // UPDATED

interface MobileNavProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ currentView, setCurrentView }) => {
  // UPDATED: Added guides, removed tournament to keep 6 items for mobile
  // You can adjust which items appear based on priority
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'gods', label: 'Gods', icon: Sword },
    { id: 'builder', label: 'Builder', icon: Hammer },
    { id: 'items', label: 'Items', icon: Shield },
    { id: 'tierlist', label: 'Tiers', icon: List },
    { id: 'guides', label: 'Guides', icon: BookOpen }, // NEW - replaced Tournament
  ] as const;

  // Alternative: Keep all 7 items (may be tight on smaller screens)
  // const navItems = [
  //   { id: 'home', label: 'Home', icon: Home },
  //   { id: 'gods', label: 'Gods', icon: Sword },
  //   { id: 'builder', label: 'Build', icon: Hammer },
  //   { id: 'items', label: 'Items', icon: Shield },
  //   { id: 'tierlist', label: 'Tiers', icon: List },
  //   { id: 'tournament', label: 'Tourney', icon: Trophy },
  //   { id: 'guides', label: 'Guides', icon: BookOpen },
  // ] as const;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = currentView === id;
          return (
            <button
              key={id}
              onClick={() => setCurrentView(id as ViewType)}
              className={`flex flex-col items-center justify-center gap-0.5 px-3 py-2 rounded-xl transition-all ${
                isActive
                  ? 'text-mythic-gold bg-mythic-gold/10'
                  : 'text-slate-500 hover:text-slate-300 active:bg-slate-800'
              }`}
            >
              <Icon
                size={20}
                className={isActive ? 'drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]' : ''}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] font-bold uppercase tracking-wide ${isActive ? 'text-mythic-gold' : ''}`}>
                {label}
              </span>
              {isActive && (
                <div className="absolute -bottom-0 w-8 h-0.5 bg-mythic-gold rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};