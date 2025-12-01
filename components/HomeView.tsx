import React from 'react';
import { useData } from '../contexts/DataContext';
import { StreamerCardSkeleton } from './Skeletons';
import { NoLiveStreamers } from './EmptyStates';
import { Twitch } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: any) => void;
}

const LiveStreamersSection: React.FC<{ 
  streamCards: React.ReactNode[]; 
  isLoading: boolean;
}> = ({ streamCards, isLoading }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-serif font-bold text-slate-100">Community Live</h2>
        <div className="h-px bg-slate-800 flex-1"></div>
        {streamCards.length > 0 && (
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StreamerCardSkeleton />
          <StreamerCardSkeleton />
        </div>
      ) : streamCards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {streamCards}
        </div>
      ) : (
        <div className="bg-slate-900/40 rounded-xl border border-slate-800 p-8">
          <NoLiveStreamers />
        </div>
      )}
    </div>
  );
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const { tierLists: STREAMER_TIER_LISTS, isLoading } = useData();
  
  const liveStreamers = STREAMER_TIER_LISTS.filter(list => list.streamerInfo.isLive);
  
  const streamCards = liveStreamers.map((list) => (
    <div key={list.id} className="bg-slate-800 rounded-xl border border-slate-700 p-4 cursor-pointer hover:border-mythic-gold transition-colors group">
        <h3 className="font-bold text-white group-hover:text-mythic-gold">{list.name}</h3>
        <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
            <Twitch size={14} className="text-[#9146FF]" /> {list.author} is Live
        </div>
    </div>
  ));

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-100 mb-6 tracking-tight">
          FORGE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-mythic-gold to-yellow-200">LEGEND</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          The most advanced Smite 2 build editor, tier list maker, and tournament companion.
        </p>
        <div className="flex justify-center gap-4">
            <button onClick={() => onNavigate('gods')} className="px-8 py-3 bg-mythic-gold text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition-transform hover:scale-105">
                Browse Gods
            </button>
            <button onClick={() => onNavigate('builder')} className="px-8 py-3 bg-slate-800 text-slate-200 font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all">
                Create Build
            </button>
        </div>
      </div>

      <LiveStreamersSection 
        streamCards={streamCards} 
        isLoading={isLoading} 
      />
    </div>
  );
};