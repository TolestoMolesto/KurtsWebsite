
import React, { useState } from 'react';
import { GODS, STREAMER_TIER_LISTS } from '../constants';
import { TierListState, TierRank, NamedTierList } from '../types';
import { RotateCcw, User, ArrowLeft, Trophy, PenTool, Twitch, Youtube, ExternalLink } from 'lucide-react';

export const TierListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'streamer' | 'custom'>('streamer');
  
  // Initialize Custom List with ALL God-Aspect combinations
  const [customTiers, setCustomTiers] = useState<TierListState>({
    [TierRank.S]: [],
    [TierRank.A]: [],
    [TierRank.B]: [],
    [TierRank.C]: [],
    [TierRank.D]: [],
    pool: GODS.flatMap(god => {
        // Base God
        const entries = [`${god.id}:base`];
        // Aspects
        god.aspects.forEach(aspect => {
            entries.push(`${god.id}:${aspect.id}`);
        });
        return entries;
    })
  });
  
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

  // Streamer List State
  const [selectedStreamerList, setSelectedStreamerList] = useState<NamedTierList | null>(null);

  // Helper to parse ID: "godId:aspectId" -> object
  const getEntry = (id: string) => {
    const [godId, aspectId] = id.split(':');
    const god = GODS.find(g => g.id === godId);
    
    if (!god) return { god: null, aspectName: null };

    if (aspectId === 'base') {
        return { god, aspectName: 'Base God' };
    }
    
    const aspect = god.aspects.find(a => a.id === aspectId);
    return { god, aspectName: aspect?.name || 'Unknown' };
  };

  // --- Logic for Custom List ---
  const handleEntryClick = (id: string) => {
    if (activeTab !== 'custom') return;
    if (selectedEntryId === id) {
      setSelectedEntryId(null);
    } else {
      setSelectedEntryId(id);
    }
  };

  const moveToTier = (targetTier: TierRank | 'pool') => {
    if (activeTab !== 'custom' || !selectedEntryId) return;

    const newTiers = { ...customTiers };

    // Remove from current location
    Object.keys(newTiers).forEach(key => {
      // @ts-ignore
      newTiers[key] = newTiers[key].filter(id => id !== selectedEntryId);
    });

    // Add to new location
    // @ts-ignore
    newTiers[targetTier].push(selectedEntryId);

    setCustomTiers(newTiers);
    setSelectedEntryId(null);
  };

  const resetCustom = () => {
    setCustomTiers({
        [TierRank.S]: [],
        [TierRank.A]: [],
        [TierRank.B]: [],
        [TierRank.C]: [],
        [TierRank.D]: [],
        pool: GODS.flatMap(god => {
            const entries = [`${god.id}:base`];
            god.aspects.forEach(aspect => {
                entries.push(`${god.id}:${aspect.id}`);
            });
            return entries;
        })
    });
    setSelectedEntryId(null);
  }

  const tierColors: Record<TierRank, string> = {
    [TierRank.S]: 'bg-red-600 border-red-500',
    [TierRank.A]: 'bg-orange-500 border-orange-400',
    [TierRank.B]: 'bg-yellow-500 border-yellow-400',
    [TierRank.C]: 'bg-green-500 border-green-400',
    [TierRank.D]: 'bg-blue-500 border-blue-400',
  };

  // --- Render Helpers ---

  const renderEntry = (id: string, isEditable: boolean) => {
    const { god, aspectName } = getEntry(id);
    if (!god) return null;

    const isSelected = isEditable && selectedEntryId === id;

    return (
        <div 
            key={id} 
            onClick={(e) => { 
                if (isEditable) {
                    e.stopPropagation(); 
                    handleEntryClick(id);
                }
            }}
            className={`group relative w-20 h-24 rounded-md overflow-hidden bg-slate-950 border-2 transition-transform shadow-lg ${
                isEditable ? 'cursor-pointer hover:scale-105' : ''
            } ${
                isSelected ? 'border-mythic-gold scale-110 z-10 shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'border-slate-700'
            }`}
        >
            <img src={god.image} alt={god.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            {/* Aspect Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-1 text-center bg-slate-900/90 border-t border-slate-700">
                 <div className="text-[8px] uppercase font-bold text-slate-400 truncate leading-none mb-0.5">{god.name}</div>
                 <div className={`text-[9px] font-bold truncate leading-none ${aspectName === 'Base God' ? 'text-slate-300' : 'text-mythic-gold'}`}>
                    {aspectName}
                 </div>
            </div>
            
            {/* Selection Check */}
            {isSelected && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full border border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            )}
        </div>
    );
  }

  const renderTierList = (data: TierListState, isEditable: boolean) => (
    <div className="space-y-3 mb-8">
        {(Object.keys(tierColors) as TierRank[]).map((rank) => (
          <div 
            key={rank} 
            onClick={() => isEditable && selectedEntryId && moveToTier(rank)}
            className={`flex min-h-[120px] bg-slate-900 rounded-lg overflow-hidden border border-slate-700 transition-colors ${
                isEditable && selectedEntryId ? 'cursor-pointer hover:bg-slate-800/80 ring-2 ring-transparent hover:ring-mythic-gold' : ''
            }`}
          >
            <div className={`w-24 md:w-32 flex items-center justify-center shrink-0 ${tierColors[rank]}`}>
              <span className="text-2xl md:text-4xl font-black text-white drop-shadow-md">{rank}</span>
            </div>
            <div className="flex-1 p-3 flex flex-wrap gap-3 content-start">
              {data[rank].map(id => renderEntry(id, isEditable))}
            </div>
          </div>
        ))}
      </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-serif text-slate-100 font-bold">Meta Tier Lists</h2>
        
        {/* Tab Switcher */}
        <div className="flex bg-slate-800 p-1 rounded-lg">
           <button 
             onClick={() => setActiveTab('streamer')}
             className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                activeTab === 'streamer' ? 'bg-mythic-gold text-slate-900 shadow' : 'text-slate-400 hover:text-slate-200'
             }`}
           >
             <Trophy size={16} /> Streamer Lists
           </button>
           <button 
             onClick={() => setActiveTab('custom')}
             className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                activeTab === 'custom' ? 'bg-mythic-gold text-slate-900 shadow' : 'text-slate-400 hover:text-slate-200'
             }`}
           >
             <PenTool size={16} /> Create Custom
           </button>
        </div>
      </div>

      {/* --- STREAMER LISTS VIEW --- */}
      {activeTab === 'streamer' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {!selectedStreamerList ? (
                /* List of Streamer Lists */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {STREAMER_TIER_LISTS.map((list) => (
                      <div 
                        key={list.id}
                        onClick={() => setSelectedStreamerList(list)}
                        className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-mythic-gold cursor-pointer transition-all hover:bg-slate-800/80 hover:-translate-y-1 relative overflow-hidden"
                      >
                         <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600 group-hover:border-mythic-gold transition-colors">
                                   <User size={20} className="text-slate-400 group-hover:text-mythic-gold" />
                                </div>
                                <div>
                                   <h3 className="font-bold text-lg text-slate-200 group-hover:text-mythic-gold transition-colors">{list.name}</h3>
                                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">By {list.author}</p>
                                </div>
                            </div>
                         </div>

                         <p className="text-slate-400 text-sm mb-6 line-clamp-2 min-h-[40px]">{list.description}</p>
                         
                         <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                            {/* Platform Icon */}
                            <div className="flex items-center gap-2">
                                {list.streamerInfo?.platform === 'twitch' ? (
                                    <Twitch size={16} className="text-purple-400" />
                                ) : (
                                    <Youtube size={16} className="text-red-400" />
                                )}
                                <span className="text-xs text-slate-500 capitalize">{list.streamerInfo?.platform}</span>
                            </div>
                            
                            <span className="text-xs font-bold text-mythic-accent flex items-center gap-1 group-hover:underline">
                                View List <ArrowLeft className="rotate-180" size={12} />
                            </span>
                         </div>
                      </div>
                   ))}
                </div>
            ) : (
                /* Detail View of a Streamer List */
                <div>
                    <button 
                      onClick={() => setSelectedStreamerList(null)}
                      className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={18} /> Back to Lists
                    </button>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
                       <div className="flex-1">
                           <div className="flex items-center gap-4 mb-2">
                              <h3 className="text-3xl font-serif font-bold text-mythic-gold">{selectedStreamerList.name}</h3>
                           </div>
                           <p className="text-slate-300 text-sm italic mb-2">Authored by <span className="font-bold text-slate-100">{selectedStreamerList.author}</span> on {selectedStreamerList.date}</p>
                           <p className="text-slate-400 mb-4">{selectedStreamerList.description}</p>
                           
                           <div className="flex gap-3">
                              <a 
                                href={selectedStreamerList.streamerInfo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 rounded border border-slate-700 text-sm text-mythic-accent hover:text-white hover:border-mythic-gold transition-all"
                              >
                                  {selectedStreamerList.streamerInfo.platform === 'twitch' ? <Twitch size={14}/> : <Youtube size={14} />}
                                  {selectedStreamerList.streamerInfo.platform === 'twitch' ? 'Twitch Channel' : 'YouTube Channel'} <ExternalLink size={12} />
                              </a>
                              {selectedStreamerList.streamerInfo.secondaryUrl && (
                                <a 
                                  href={selectedStreamerList.streamerInfo.secondaryUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 rounded border border-slate-700 text-sm text-red-400 hover:text-white hover:border-red-500 transition-all"
                                >
                                    {selectedStreamerList.streamerInfo.platform === 'twitch' ? <Youtube size={14} /> : <Twitch size={14}/>}
                                    {selectedStreamerList.streamerInfo.platform === 'twitch' ? 'YouTube Channel' : 'Twitch Channel'} <ExternalLink size={12} />
                                </a>
                              )}
                           </div>
                       </div>
                    </div>

                    {renderTierList(selectedStreamerList.data, false)}
                    
                    <div className="mt-8 p-4 bg-slate-900 border border-slate-800 rounded-lg text-center text-slate-500 text-sm">
                        This is a saved tier list by a verified streamer. You cannot modify it.
                    </div>
                </div>
            )}
        </div>
      )}

      {/* --- CUSTOM BUILDER VIEW --- */}
      {activeTab === 'custom' && (
         <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-slate-400">
                    Select a God from the pool, then click a Tier row to place them.
                </p>
                <button onClick={resetCustom} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-slate-300 transition-colors border border-slate-700">
                    <RotateCcw size={16} /> Reset
                </button>
            </div>

            {renderTierList(customTiers, true)}

            {/* Custom Pool */}
            <div 
                className={`bg-slate-800 p-4 rounded-xl border border-slate-700 min-h-[120px] transition-colors ${
                    selectedEntryId ? 'cursor-pointer hover:border-mythic-gold hover:bg-slate-800/80' : ''
                }`}
                onClick={() => selectedEntryId && moveToTier('pool')}
            >
                <h3 className="text-xs uppercase text-slate-500 mb-3 font-bold tracking-wider">Unranked Aspects</h3>
                <div className="flex flex-wrap gap-3">
                    {customTiers.pool.map(id => renderEntry(id, true))}
                    {customTiers.pool.length === 0 && <span className="text-slate-600 text-sm italic">All aspects ranked!</span>}
                </div>
            </div>
         </div>
      )}

    </div>
  );
};
