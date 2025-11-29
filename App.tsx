
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { GodsView } from './components/GodsView';
import { ItemsView } from './components/ItemsView';
import { TierListView } from './components/TierListView';
import { BuilderView } from './components/BuilderView';
import { TournamentView } from './components/TournamentView';
import { ProfileView } from './components/ProfileView';
import { SnowEffect } from './components/SnowEffect';
import { DataProvider } from './contexts/DataContext';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament' | 'profile'>('home');

  const renderView = () => {
    switch(currentView) {
      case 'home': return <HomeView onNavigate={setCurrentView} />;
      case 'gods': return <GodsView />;
      case 'items': return <ItemsView />;
      case 'tierlist': return <TierListView />;
      case 'builder': return <BuilderView />;
      case 'tournament': return <TournamentView />;
      case 'profile': return <ProfileView />;
      default: return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <DataProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-mythic-gold selection:text-slate-900 flex flex-col relative">
        {/* Background Effects */}
        <SnowEffect />
        
        <Header currentView={currentView} setCurrentView={setCurrentView} />
        
        <main className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-500 relative z-10">
          {renderView()}
        </main>

        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
