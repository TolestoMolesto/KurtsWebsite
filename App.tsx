// App.tsx - Optimized with lazy loading and responsive layout
import React, { useState, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SnowEffect } from './components/SnowEffect';
import { DataProvider } from './contexts/DataContext';
import { MobileNav } from './components/MobileNav';
import { GlobalPatchBanner } from './components/DisclaimerBanner';

// Lazy load views for code splitting and better performance
const HomeView = React.lazy(() => import('./components/HomeView').then(m => ({ default: m.HomeView })));
const GodsView = React.lazy(() => import('./components/GodsView').then(m => ({ default: m.GodsView })));
const ItemsView = React.lazy(() => import('./components/ItemsView').then(m => ({ default: m.ItemsView })));
const TierListView = React.lazy(() => import('./components/TierListView').then(m => ({ default: m.TierListView })));
const BuilderView = React.lazy(() => import('./components/BuilderView').then(m => ({ default: m.BuilderView })));
const TournamentView = React.lazy(() => import('./components/TournamentView').then(m => ({ default: m.TournamentView })));
const GuidesView = React.lazy(() => import('./components/GuidesView').then(m => ({ default: m.GuidesView })));
const ProfileView = React.lazy(() => import('./components/ProfileView').then(m => ({ default: m.ProfileView })));
const EloHellView = React.lazy(() => import('./components/EloHellView').then(m => ({ default: m.EloHellView })));

type ViewType = 'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament' | 'guides' | 'profile' | 'elo_hell';

// Loading skeleton for better UX during code splitting
const ViewLoadingSkeleton = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-slate-700 border-t-mythic-gold rounded-full animate-spin" />
      <p className="text-slate-400 text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const renderView = () => {
    switch(currentView) {
      case 'home': return <HomeView onNavigate={setCurrentView} />;
      case 'gods': return <GodsView />;
      case 'items': return <ItemsView />;
      case 'tierlist': return <TierListView />;
      case 'builder': return <BuilderView />;
      case 'tournament': return <TournamentView />;
      case 'guides': return <GuidesView />;
      case 'profile': return <ProfileView />;
      case 'elo_hell': return <EloHellView />;
      default: return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <DataProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-mythic-gold selection:text-slate-900 flex flex-col relative overflow-x-hidden">
        <SnowEffect />
        
        {/* Fixed Header - z-40 to stay above content */}
        <Header currentView={currentView} setCurrentView={setCurrentView} />
        
        {/* Page wrapper with proper spacing */}
        <div className="flex-1 flex flex-col pt-16">
          {/* Global Banner - Below header, part of scroll area */}
          <GlobalPatchBanner />
          
          {/* Main Content - Growth Area */}
          <main className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-500 relative z-10 w-full overflow-x-hidden pb-8 md:pb-0">
            <Suspense fallback={<ViewLoadingSkeleton />}>
              <div className="w-full">
                {renderView()}
              </div>
            </Suspense>
          </main>

          {/* Footer - Only visible on desktop (md and up), after content */}
          <div className="hidden md:block w-full flex-shrink-0">
            <Footer />
          </div>
        </div>

        {/* Mobile Navigation - Fixed bottom nav, only visible on mobile (z-50) */}
        <MobileNav currentView={currentView} setCurrentView={setCurrentView} />
        
        {/* Spacer for mobile bottom nav - pushes content up on mobile */}
        <div className="md:hidden h-16 flex-shrink-0" />
      </div>
    </DataProvider>
  );
}

export default App;