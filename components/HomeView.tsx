import React from 'react';
import { Sword, Shield, List, ArrowRight, Twitch, Youtube, ExternalLink, Play, MessageCircle, Rocket, Star, Heart, Snowflake } from 'lucide-react';
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
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full hover:border-purple-500 transition-all duration-300 hover:shadow-purple-500/20 group">
       {/* Header */}
       <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-900 group-hover:to-purple-900/20 transition-colors">
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-purple-900/30 text-purple-400 ring-1 ring-purple-500/30">
                  <Twitch size={18} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-200 leading-tight">{streamer.author}</h3>
                 <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <p className="text-[10px] text-purple-400 uppercase font-bold tracking-wider">Live Now</p>
                 </div>
              </div>
           </div>
       </div>

       {/* Video Area */}
       <div className="aspect-video w-full bg-black relative group-hover:brightness-110 transition-all">
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
              className="text-xs font-bold text-slate-400 hover:text-purple-400 hover:underline flex items-center gap-1 transition-colors"
           >
              Open in Twitch <ExternalLink size={10} />
           </a>
       </div>
    </div>
  );
};

const YouTubeCard: React.FC<{ streamer: NamedTierList, url: string }> = ({ streamer, url }) => {
  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full hover:border-red-500 transition-all duration-300 hover:shadow-red-500/20 group">
       {/* Header */}
       <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-900 group-hover:to-red-900/20 transition-colors">
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-900/30 text-red-400 ring-1 ring-red-500/30">
                  <Youtube size={18} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-200 leading-tight">{streamer.author}</h3>
                 <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <p className="text-[10px] text-red-400 uppercase font-bold tracking-wider">Live Now</p>
                 </div>
              </div>
           </div>
       </div>

       {/* Video Area */}
       <div className="aspect-video w-full bg-slate-900 relative flex flex-col items-center justify-center text-center p-6 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group cursor-pointer" onClick={() => window.open(url, '_blank')}>
           <div className="absolute inset-0 bg-black/70 backdrop-blur-sm group-hover:bg-black/60 transition-colors"></div>
           <div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse-slow ring-4 ring-red-900/50">
                  <Youtube size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 drop-shadow-md">Watch Stream</h4>
              <button 
                className="px-6 py-2 bg-white text-red-600 font-bold rounded-full flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Play size={14} fill="currentColor" /> Watch Now
              </button>
           </div>
       </div>
       
       {/* Footer */}
       <div className="p-3 bg-slate-900 border-t border-slate-800 flex justify-end">
           <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-400 hover:text-red-400 hover:underline flex items-center gap-1 transition-colors"
           >
              Open in YouTube <ExternalLink size={10} />
           </a>
       </div>
    </div>
  );
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const liveStreamers = STREAMER_TIER_LISTS.filter(list => list.streamerInfo.isLive);
  
  const streamCards: React.ReactNode[] = [];
  liveStreamers.forEach(streamer => {
    const info = streamer.streamerInfo;
    if (info.platform === 'twitch') {
        streamCards.push(<TwitchCard key={`${streamer.id}-twitch`} streamer={streamer} url={info.url} />);
    } else if (info.platform === 'youtube') {
        streamCards.push(<YouTubeCard key={`${streamer.id}-youtube`} streamer={streamer} url={info.url} />);
    }
    if (info.secondaryUrl) {
        if (info.secondaryUrl.includes('twitch')) {
            streamCards.push(<TwitchCard key={`${streamer.id}-twitch-sec`} streamer={streamer} url={info.secondaryUrl} />);
        } else if (info.secondaryUrl.includes('youtube')) {
            streamCards.push(<YouTubeCard key={`${streamer.id}-youtube-sec`} streamer={streamer} url={info.secondaryUrl} />);
        }
    }
  });

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      
      {/* Hero Section */}
      <div className="text-center mb-20 space-y-6 relative mt-4">
        
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-mythic-gold/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

        <h1 className="text-6xl md:text-8xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] uppercase tracking-tighter transform hover:scale-[1.01] transition-transform duration-500 cursor-default">
          SMITE SOURCE 2
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          The definitive companion app. <br className="md:hidden"/>
          <span className="text-mythic-gold font-medium ml-1 inline-block animate-pulse">Open Beta Live Now!!!</span>
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-8">
            <button 
            onClick={() => onNavigate('gods')}
            className="px-10 py-4 bg-gradient-to-r from-mythic-gold to-yellow-500 text-slate-950 font-black rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.3)] flex items-center gap-2 uppercase tracking-widest text-sm"
            >
            <Sword size={18} strokeWidth={3} /> View Builds
            </button>
        </div>
      </div>

      {/* Navigation Cards - Enhanced Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div 
          onClick={() => onNavigate('gods')}
          className="group bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-mythic-gold cursor-pointer transition-all hover:bg-slate-800 hover:-translate-y-2 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-mythic-gold/0 to-mythic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
            <Sword size={140} />
          </div>
          
          <div className="relative z-10">
            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mythic-gold group-hover:text-slate-900 transition-all duration-300 border border-slate-700 group-hover:border-mythic-gold shadow-lg">
                <Sword className="text-slate-300 group-hover:text-slate-900 transition-colors" size={26} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-100 mb-3 group-hover:text-mythic-gold transition-colors">Gods & Builds</h3>
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 group-hover:border-mythic-gold/50 transition-colors">
                Professional builds, ability breakdowns, and aspect stats for every God in the roster.
            </p>
          </div>
        </div>

        <div 
          onClick={() => onNavigate('items')}
          className="group bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-blue-400 cursor-pointer transition-all hover:bg-slate-800 hover:-translate-y-2 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
            <Shield size={140} />
          </div>
          
          <div className="relative z-10">
            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 border border-slate-700 group-hover:border-blue-400 shadow-lg">
                <Shield className="text-slate-300 group-hover:text-white transition-colors" size={26} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">Item Database</h3>
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 group-hover:border-blue-400/50 transition-colors">
                Comprehensive stats for every Item, Relic, and Active. Plan your next power spike.
            </p>
          </div>
        </div>

        <div 
          onClick={() => onNavigate('tierlist')}
          className="group bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-green-400 cursor-pointer transition-all hover:bg-slate-800 hover:-translate-y-2 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
            <List size={140} />
          </div>
          
          <div className="relative z-10">
            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-slate-900 transition-all duration-300 border border-slate-700 group-hover:border-green-400 shadow-lg">
                <List className="text-slate-300 group-hover:text-slate-900 transition-colors" size={26} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-100 mb-3 group-hover:text-green-400 transition-colors">Tier Lists</h3>
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 group-hover:border-green-400/50 transition-colors">
                Up-to-date rankings from the best players in the SPL. Know who dominates the meta.
            </p>
          </div>
        </div>
      </div>

      {/* Live Streamers Section */}
      {streamCards.length > 0 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mb-16">
          <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-serif font-bold text-slate-100">Community Live</h2>
              <div className="h-px bg-slate-800 flex-1"></div>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {streamCards}
          </div>
        </div>
      )}

      {/* SPONSOR SECTION: Star Trek Fleet Command */}
      <div className="max-w-5xl mx-auto mb-20 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative overflow-hidden rounded-2xl border border-blue-500/50 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen group-hover:scale-105 transition-transform duration-[20s] ease-linear"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-900/30"></div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                        <Star size={12} className="fill-blue-300 text-blue-300 animate-[spin_3s_linear_infinite]" /> 
                        <span className="animate-pulse">Incoming Transmission</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                        Conquer the Galaxy in <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                           Star Trek Fleet Command
                        </span>
                    </h2>
                    <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                        Weak3n needs <span className="text-white font-bold">YOU</span> in his fleet! Download for free, warp to the sector, and help us dominate.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                        <div className="bg-slate-950/60 backdrop-blur-md border border-blue-500/30 p-3 rounded-xl flex flex-col min-w-[120px] shadow-lg">
                            <span className="text-[10px] uppercase text-blue-400 font-bold tracking-wider mb-1">Target Server</span>
                            <span className="text-xl font-mono font-bold text-white tracking-widest">038</span>
                        </div>
                        <div className="bg-slate-950/60 backdrop-blur-md border border-mythic-gold/30 p-3 rounded-xl flex flex-col min-w-[120px] shadow-lg">
                            <span className="text-[10px] uppercase text-mythic-gold font-bold tracking-wider mb-1">Alliance ID</span>
                            <span className="text-lg font-mono font-bold text-white">My 4head is big</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 shrink-0 relative">
                    <a 
                        href="https://strms.net/startrek_weak3n?utm_source=panel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 group/btn px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] transition-all transform hover:-translate-y-1 flex items-center gap-3 text-lg border border-blue-400/50"
                    >
                        <Rocket className="group-hover/btn:animate-pulse" size={20} />
                        <span>Download & Play</span>
                    </a>
                    
                    <div className="relative z-10 flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2 text-[10px] text-blue-200 font-medium bg-blue-900/40 px-3 py-1.5 rounded-full border border-blue-500/30 backdrop-blur-sm">
                            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
                            <span>Directly supports the stream!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Discord Community Section */}
      <div className="mt-20 mb-10">
        <a 
          href="https://discord.gg/weak3n" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-[#5865F2] rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(88,101,242,0.4)] transition-all transform hover:-translate-y-1"
        >
          <div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
             <MessageCircle size={300} fill="currentColor" className="text-white" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Join Weak3n's Discord</h2>
              <p className="text-blue-100 text-lg max-w-xl">
                 Connect with the community, submit your builds, and get feedback from high-level players.
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