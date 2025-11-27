
import React, { useState } from 'react';
import { GODS, STREAMER_TIER_LISTS, ITEMS } from '../constants';
import { TierListState, TierRank, NamedTierList } from '../types';
import { RotateCcw, User, ArrowLeft, Trophy, Twitch, Youtube, Shield, Sword, Hexagon, Box } from 'lucide-react';

export const TierListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'streamer' | 'gods' | 'items'>('streamer');
  
  // --- GOD BUILDER STATE ---
  const [customGodTiers, setCustomGodTiers] = useState<TierListState>({
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
  const [godRoleFilter, setGodRoleFilter] = useState<string>('All');

  // --- ITEM BUILDER STATE ---
  const [customItemTiers, setCustomItemTiers] = useState<TierListState>({
    [TierRank.S]: [],
    [TierRank.A]: [],
    [TierRank.B]: [],
    [TierRank.C]: [],
    [TierRank.D]: [],
    pool: ITEMS.map(i => i.id)
  });
  const [itemFilter, setItemFilter] = useState<string>('All');
  
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

  // Streamer List State
  const [selectedStreamerList, setSelectedStreamerList] = useState<NamedTierList | null>(null);

  // --- HELPERS ---

  const handleTabChange = (tab: 'streamer' | 'gods' | 'items') => {
      setActiveTab(tab);
      setSelectedEntryId(null);
      setSelectedStreamerList(null);
  };

  const getGodEntry = (id: string) => {
    const [godId, aspectId] = id.split(':');
    const god = GODS.find(g => g.id === godId);
    
    if (!god) return { god: null, aspectName: null };

    if (aspectId === 'base') {
        return { god, aspectName: 'Base God' };
    }
    
    const aspect = god.aspects.find(a => a.id === aspectId);
    return { god, aspectName: aspect?.name || 'Unknown' };
  };

  const getItemEntry = (id: string) => {
      return ITEMS.find(i => i.id === id);
  };

  const handleEntryClick = (id: string) => {
    if (selectedEntryId === id) {
      setSelectedEntryId(null);
    } else {
      setSelectedEntryId(id);
    }
  };

  const moveToTier = (targetTier: TierRank | 'pool') => {
    if (!selectedEntryId) return;

    if (activeTab === 'gods') {
        const newTiers = { ...customGodTiers };
        Object.keys(newTiers).forEach(key => {
            // @ts-ignore
            newTiers[key] = newTiers[key].filter(id => id !== selectedEntryId);
        });
        // @ts-ignore
        newTiers[targetTier].push(selectedEntryId);
        setCustomGodTiers(newTiers);
    } else if (activeTab === 'items') {
        const newTiers = { ...customItemTiers };
        Object.keys(newTiers).forEach(key => {
            // @ts-ignore
            newTiers[key] = newTiers[key].filter(id => id !== selectedEntryId);
        });
        // @ts-ignore
        newTiers[targetTier].push(selectedEntryId);
        setCustomItemTiers(newTiers);
    }

    setSelectedEntryId(null);
  };

  const resetGods = () => {
    setCustomGodTiers({
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
  };

  const resetItems = () => {
    setCustomItemTiers({
        [TierRank.S]: [],
        [TierRank.A]: [],
        [TierRank.B]: [],
        [TierRank.C]: [],
        [TierRank.D]: [],
        pool: ITEMS.map(i => i.id)
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

  // --- RENDERERS ---

  const renderGodEntry = (id: string, isEditable: boolean) => {
    const { god, aspectName } = getGodEntry(id);
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
            className={`group relative w-20 h-24 rounded-md overflow-hidden bg-slate-950 border-2 transition-transform shadow-lg shrink-0 ${
                isEditable ? 'cursor-pointer hover:scale-105' : ''
            } ${
                isSelected ? 'border-mythic-gold scale-110 z-10 shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'border-slate-700'
            }`}
        >
            <img src={god.image} alt={god.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-1 text-center bg-slate-900/90 border-t border-slate-700">
                 <div className="text-[8px] uppercase font-bold text-slate-400 truncate leading-none mb-0.5">{god.name}</div>
                 <div className={`text-[9px] font-bold truncate leading-none ${aspectName === 'Base God' ? 'text-slate-300' : 'text-mythic-gold'}`}>
                    {aspectName}
                 </div>
            </div>
            
            {isSelected && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full border border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            )}
        </div>
    );
  };

  const renderItemEntry = (id: string, isEditable: boolean) => {
      const item = getItemEntry(id);
      if (!item) return null;

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
            className={`group relative w-20 h-24 rounded-md overflow-hidden bg-slate-900 border-2 transition-transform shadow-lg shrink-0 flex flex-col items-center justify-center p-2 ${
                isEditable ? 'cursor-pointer hover:scale-105' : ''
            } ${
                isSelected ? 'border-mythic-gold scale-110 z-10 shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'border-slate-700'
            }`}
        >
            <div className="w-14 h-14 rounded bg-black overflow-hidden border border-slate-600 mb-1 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {item.tier && (
                    <div className="absolute top-0 right-0 bg-black/80 text-[7px] text-white px-1 border-l border-b border-slate-600 rounded-bl">T{item.tier}</div>
                )}
            </div>
            <div className="text-[8px] font-bold text-slate-300 text-center leading-tight line-clamp-2 w-full">{item.name}</div>
            
            {isSelected && (
                <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
            )}
        </div>
      );
  };

  const renderTierRow = (rank: TierRank, data: string[], isEditable: boolean, type: 'gods' | 'items') => (
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
          {data.map(id => type === 'gods' ? renderGodEntry(id, isEditable) : renderItemEntry(id, isEditable))}
        </div>
      </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-4">
        <div>
            <h2 className="text-3xl font-serif text-slate-100 font-bold mb-2">Meta Tier Lists</h2>
            <p className="text-slate-400 text-sm">Consult streamer rankings or forge your own meta.</p>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex bg-slate-800 p-1 rounded-lg self-center xl:self-auto">
           <button 
             onClick={() => handleTabChange('streamer')}
             className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                activeTab === 'streamer' ? 'bg-mythic-gold text-slate-900 shadow' : 'text-slate-400 hover:text-slate-200'
             }`}
           >
             <Trophy size={16} /> Streamer Lists
           </button>
           <button 
             onClick={() => handleTabChange('gods')}
             className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                activeTab === 'gods' ? 'bg-mythic-gold text-slate-900 shadow' : 'text-slate-400 hover:text-slate-200'
             }`}
           >
             <Sword size={16} /> God Tier List
           </button>
           <button 
             onClick={() => handleTabChange('items')}
             className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                activeTab === 'items' ? 'bg-mythic-gold text-slate-900 shadow' : 'text-slate-400 hover:text-slate-200'
             }`}
           >
             <Shield size={16} /> Item Tier List
           </button>
        </div>
      </div>

      {/* --- STREAMER LISTS VIEW --- */}
      {activeTab === 'streamer' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {!selectedStreamerList ? (
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
                       </div>
                    </div>

                    <div className="space-y-3 mb-8">
                        {(Object.keys(tierColors) as TierRank[]).map((rank) => renderTierRow(rank, selectedStreamerList.data[rank], false, 'gods'))}
                    </div>
                </div>
            )}
        </div>
      )}

      {/* --- GOD TIER LIST BUILDER --- */}
      {activeTab === 'gods' && (
         <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                    {['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'].map(role => (
                        <button
                            key={role}
                            onClick={() => setGodRoleFilter(role)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border whitespace-nowrap ${
                                godRoleFilter === role 
                                ? 'bg-mythic-gold text-slate-900 border-mythic-gold' 
                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                            }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                    <p className="text-xs text-slate-500 hidden md:block">
                        Click a God to select, then click a Tier to place.
                    </p>
                    <button onClick={resetGods} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold text-slate-300 transition-colors border border-slate-700">
                        <RotateCcw size={14} /> Reset
                    </button>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                {(Object.keys(tierColors) as TierRank[]).map((rank) => renderTierRow(rank, customGodTiers[rank], true, 'gods'))}
            </div>

            <div 
                className={`bg-slate-800 p-4 rounded-xl border border-slate-700 min-h-[140px] transition-colors ${
                    selectedEntryId ? 'cursor-pointer hover:border-mythic-gold hover:bg-slate-800/80' : ''
                }`}
                onClick={() => selectedEntryId && moveToTier('pool')}
            >
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xs uppercase text-slate-500 font-bold tracking-wider flex items-center gap-2">
                        <Hexagon size={14} /> God Pool
                    </h3>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">{customGodTiers.pool.length} Remaining</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {customGodTiers.pool
                        .filter(id => {
                            if (godRoleFilter === 'All') return true;
                            const { god } = getGodEntry(id);
                            return god?.lanes.includes(godRoleFilter);
                        })
                        .map(id => renderGodEntry(id, true))}
                    {customGodTiers.pool.length === 0 && <span className="text-slate-600 text-sm italic">All gods ranked!</span>}
                </div>
            </div>
         </div>
      )}

      {/* --- ITEM TIER LIST BUILDER --- */}
      {activeTab === 'items' && (
         <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto custom-scrollbar">
                    {['All', 'Tier 3', 'Tier 2', 'Tier 1', 'Starter', 'Relic'].map(filter => (
                        <button
                            key={filter}
                            onClick={() => setItemFilter(filter)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border whitespace-nowrap ${
                                itemFilter === filter 
                                ? 'bg-mythic-gold text-slate-900 border-mythic-gold' 
                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                    <p className="text-xs text-slate-500 hidden md:block">
                        Select Item -> Place in Tier
                    </p>
                    <button onClick={resetItems} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold text-slate-300 transition-colors border border-slate-700">
                        <RotateCcw size={14} /> Reset
                    </button>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                {(Object.keys(tierColors) as TierRank[]).map((rank) => renderTierRow(rank, customItemTiers[rank], true, 'items'))}
            </div>

            <div 
                className={`bg-slate-800 p-4 rounded-xl border border-slate-700 min-h-[140px] transition-colors ${
                    selectedEntryId ? 'cursor-pointer hover:border-mythic-gold hover:bg-slate-800/80' : ''
                }`}
                onClick={() => selectedEntryId && moveToTier('pool')}
            >
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xs uppercase text-slate-500 font-bold tracking-wider flex items-center gap-2">
                        <Box size={14} /> Item Pool
                    </h3>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">{customItemTiers.pool.length} Remaining</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {customItemTiers.pool
                        .filter(id => {
                            if (itemFilter === 'All') return true;
                            const item = getItemEntry(id);
                            if (!item) return false;
                            
                            if (itemFilter.startsWith('Tier')) {
                                const tier = parseInt(itemFilter.split(' ')[1]);
                                return item.tier === tier;
                            }
                            if (itemFilter === 'Starter') return item.type === 'Starter';
                            if (itemFilter === 'Relic') return item.type === 'Relic';
                            
                            return true;
                        })
                        .map(id => renderItemEntry(id, true))}
                     {customItemTiers.pool.length === 0 && <span className="text-slate-600 text-sm italic">All items ranked!</span>}
                </div>
            </div>
         </div>
      )}

    </div>
  );
};
