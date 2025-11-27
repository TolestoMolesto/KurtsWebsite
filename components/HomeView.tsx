
import React from 'react';
import { Sword, Shield, List, ArrowRight, Twitch, Youtube, ExternalLink, Play, MessageCircle } from 'lucide-react';
import { STREAMER_TIER_LISTS } from '../constants';
import { NamedTierList } from '../types';

interface HomeViewProps {
  onNavigate: (view: 'gods' | 'items' | 'tierlist') => void;
}

const TwitchCard: React.FC<{ streamer: NamedTierList, url: string }> = ({ streamer, url }) => {
  const getTwitchChannel = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full hover:border-purple-500 transition-colors">
       {/* Header */}
       <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-purple-900/50 text-purple-400">
                  <Twitch size={20} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-200">{streamer.author}</h3>
                 <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <p className="text-xs text-purple-400 uppercase font-bold">Live on Twitch</p>
                 </div>
              </div>
           </div>
       </div>

       {/* Video Area */}
       <div className="aspect-video w-full bg-black relative">
          <iframe
            src={`https://player.twitch.tv/?channel=${getTwitchChannel(url)}&parent=${window.location.hostname}&muted=false`}
            height="100%"
            width="100%"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
       </div>
       
       {/* Footer */}
       <div className="p-3 bg-slate-900 border-t border-slate-800 flex justify-end">
           <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-400 hover:text-purple-400 hover:underline flex items-center gap-1"
           >
              Open in Twitch <ExternalLink size={10} />
           </a>
       </div>
    </div>
  );
};

const YouTubeCard: React.FC<{ streamer: NamedTierList, url: string }> = ({ streamer, url }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full hover:border-red-500 transition-colors">
       {/* Header */}
       <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-900/50 text-red-400">
                  <Youtube size={20} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-200">{streamer.author}</h3>
                 <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <p className="text-xs text-red-400 uppercase font-bold">Live on YouTube</p>
                 </div>
              </div>
           </div>
       </div>

       {/* Video Area (Dashboard style for YT) */}
       <div className="aspect-video w-full bg-slate-900 relative flex flex-col items-center justify-center text-center p-6 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group cursor-pointer" onClick={() => window.open(url, '_blank')}>
           <div className="absolute inset-0 bg-black/70 backdrop-blur-sm group-hover:bg-black/60 transition-colors"></div>
           <div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse-slow">
                  <Youtube size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Watch Stream</h4>
              <p className="text-slate-300 text-sm mb-6 max-w-xs">Click to open the stream directly on YouTube.</p>
              <button 
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full flex items-center gap-2 transition-transform"
              >
                <Play size={18} fill="currentColor" /> Watch Now
              </button>
           </div>
       </div>
       
       {/* Footer */}
       <div className="p-3 bg-slate-900 border-t border-slate-800 flex justify-end">
           <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-400 hover:text-red-400 hover:underline flex items-center gap-1"
           >
              Open in YouTube <ExternalLink size={10} />
           </a>
       </div>
    </div>
  );
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const liveStreamers = STREAMER_TIER_LISTS.filter(list => list.streamerInfo.isLive);
  
  // Prepare a flattened list of "cards" to render
  const streamCards: React.ReactNode[] = [];

  liveStreamers.forEach(streamer => {
    const info = streamer.streamerInfo;
    
    // Check Primary
    if (info.platform === 'twitch') {
        streamCards.push(<TwitchCard key={`${streamer.id}-twitch`} streamer={streamer} url={info.url} />);
    } else if (info.platform === 'youtube') {
        streamCards.push(<YouTubeCard key={`${streamer.id}-youtube`} streamer={streamer} url={info.url} />);
    }

    // Check Secondary
    if (info.secondaryUrl) {
        if (info.secondaryUrl.includes('twitch')) {
            streamCards.push(<TwitchCard key={`${streamer.id}-twitch-sec`} streamer={streamer} url={info.secondaryUrl} />);
        } else if (info.secondaryUrl.includes('youtube')) {
            streamCards.push(<YouTubeCard key={`${streamer.id}-youtube-sec`} streamer={streamer} url={info.secondaryUrl} />);
        }
    }
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-mythic-gold to-yellow-600 drop-shadow-sm">
          SMITE 2 FORGE
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
          Master the battleground of the gods with the ultimate companion. 
          Explore aspects, build strategies, and craft your path to victory.
        </p>
        <button 
          onClick={() => onNavigate('gods')}
          className="mt-8 px-8 py-4 bg-mythic-gold text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center gap-2 mx-auto"
        >
          Enter the Forge <ArrowRight size={20} />
        </button>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div 
          onClick={() => onNavigate('gods')}
          className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-mythic-gold cursor-pointer transition-all hover:bg-slate-800/80 hover:-translate-y-2 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sword size={120} />
          </div>
          <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mythic-gold transition-colors">
            <Sword className="text-slate-200 group-hover:text-slate-900" size={24} />
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-100 mb-2">Gods & Aspects</h3>
          <p className="text-slate-400 text-sm">Detailed stats, aspect switching, and ability breakdowns for every deity.</p>
        </div>

        <div 
          onClick={() => onNavigate('items')}
          className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-400 cursor-pointer transition-all hover:bg-slate-800/80 hover:-translate-y-2 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Shield size={120} />
          </div>
          <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-400 transition-colors">
            <Shield className="text-slate-200 group-hover:text-slate-900" size={24} />
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-100 mb-2">Item Database</h3>
          <p className="text-slate-400 text-sm">Complete catalog of Tier 1-3 items with stats and passives.</p>
        </div>

        <div 
          onClick={() => onNavigate('tierlist')}
          className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-400 cursor-pointer transition-all hover:bg-slate-800/80 hover:-translate-y-2 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <List size={120} />
          </div>
          <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-400 transition-colors">
            <List className="text-slate-200 group-hover:text-slate-900" size={24} />
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-100 mb-2">Tier List Builder</h3>
          <p className="text-slate-400 text-sm">Create and share your own meta rankings with our interactive builder.</p>
        </div>
      </div>

      {/* Live Streamers Section */}
      {streamCards.length > 0 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-100 mb-8 flex items-center gap-3">
             <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Community Live
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {streamCards}
          </div>
        </div>
      )}

      {/* Discord Community Section */}
      <div className="mt-20 mb-10">
        <a 
          href="https://discord.gg/smitegame" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-[#5865F2] rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] transition-all transform hover:-translate-y-1"
        >
          {/* Background decoration */}
          <div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
             <MessageCircle size={300} fill="currentColor" className="text-white" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Join the Forge Discord</h2>
              <p className="text-blue-100 text-lg max-w-xl">
                 Connect with fellow gods, share your builds, debate tier lists, and get the latest theorycrafting updates.
              </p>
            </div>
            
            <div className="px-8 py-4 bg-white text-[#5865F2] font-bold rounded-full shadow-lg flex items-center gap-3 group-hover:bg-blue-50 transition-colors">
               <span className="text-lg">Join Server</span>
               <ArrowRight size={20} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
