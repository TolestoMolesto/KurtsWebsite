
import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { GodsView } from './components/GodsView';
import { ItemsView } from './components/ItemsView';
import { TierListView } from './components/TierListView';
import { BuilderView } from './components/BuilderView';
import { TournamentView } from './components/TournamentView';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament'>('home');

  const renderView = () => {
    switch(currentView) {
      case 'home': return <HomeView onNavigate={setCurrentView} />;
      case 'gods': return <GodsView />;
      case 'items': return <ItemsView />;
      case 'tierlist': return <TierListView />;
      case 'builder': return <BuilderView />;
      case 'tournament': return <TournamentView />;
      default: return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-mythic-gold selection:text-slate-900 flex flex-col">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
