import React, { useState, useEffect } from 'react';
import { Share2, Check, Link as LinkIcon, Search, Plus, X, ChevronLeft, Shuffle, Sword, Shield, Dices, Sparkles } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { God, Item } from '../types';

interface CurrentBuild {
  starter: string | null;
  items: (string | null)[];
  relic: string | null;
}

interface ItemPickerSlot {
  type: 'Starter' | 'Item' | 'Relic';
  index?: number;
}

// Internal Share Button Component
const ShareBuildButton: React.FC<{
  godId: string | null;
  aspectId: string | null;
  build: CurrentBuild;
}> = ({ godId, aspectId, build }) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const isShareable = godId && (build.starter || build.relic || build.items.some(i => i));

  const generateUrl = () => {
    const params = new URLSearchParams();
    if (godId) params.set('g', godId);
    if (aspectId) params.set('a', aspectId);
    if (build.starter) params.set('s', build.starter);
    if (build.relic) params.set('r', build.relic);
    
    const itemStr = build.items.map(i => i || '_').join(',');
    if (itemStr !== '_,_,_,_,_,_') params.set('i', itemStr);
    
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  };

  const handleShare = async () => {
    const url = generateUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isShareable) return null;

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
          copied
            ? 'bg-green-500/20 text-green-400 border border-green-500/40'
            : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-mythic-gold/50'
        }`}
      >
        {copied ? (
          <>
            <Check size={16} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Share2 size={16} />
            <span className="hidden sm:inline">Share Build</span>
          </>
        )}
      </button>
      
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center gap-1.5">
            <LinkIcon size={12} />
            Link copied to clipboard!
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-700 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export const BuilderView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [activeAspectId, setActiveAspectId] = useState<string | null>(null);
  const [build, setBuild] = useState<CurrentBuild>({
    starter: null,
    items: [null, null, null, null, null, null],
    relic: null
  });

  // God picker state
  const [godSearch, setGodSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Item picker state
  const [itemPickerSlot, setItemPickerSlot] = useState<ItemPickerSlot | null>(null);
  const [itemSearch, setItemSearch] = useState('');

  // Load build from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const godId = params.get('g');
    
    if (godId && GODS.length > 0) {
      const god = GODS.find(g => g.id === godId);
      if (god) {
        setSelectedGod(god);
        
        const aspectId = params.get('a');
        if (aspectId) setActiveAspectId(aspectId);
        
        const starter = params.get('s');
        const relic = params.get('r');
        const itemStr = params.get('i') || '_,_,_,_,_,_';
        const items = itemStr.split(',').map(i => i === '_' ? null : i);
        
        setBuild({
          starter: starter || null,
          items: items.slice(0, 6) as (string | null)[],
          relic: relic || null
        });
        
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [GODS]);

  const getItem = (id: string | null): Item | undefined => {
    if (!id) return undefined;
    return ITEMS.find(i => i.id === id);
  };

  // Get upgraded starters (starters that have buildsFrom - meaning they're T2 starters)
  const getUpgradedStarters = (): Item[] => {
    return ITEMS.filter(i => i.type === 'Starter' && i.buildsFrom && i.buildsFrom.length > 0);
  };

  // Get T3 items (excluding God Specific)
  const getT3Items = (): Item[] => {
    return ITEMS.filter(i => i.type === 'Item' && i.tier === 3);
  };

  // Get all relics
  const getRelics = (): Item[] => {
    return ITEMS.filter(i => i.type === 'Relic');
  };

  // Random helper
  const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  // Randomize just the god (50% chance to pick aspect)
  const randomizeGod = () => {
    if (GODS.length === 0) return;
    
    const randomGod = pickRandom(GODS);
    setSelectedGod(randomGod);
    
    // 50% chance to pick an aspect if the god has aspects
    if (randomGod.aspects.length > 0 && Math.random() < 0.5) {
      const randomAspect = pickRandom(randomGod.aspects);
      setActiveAspectId(randomAspect.id);
    } else {
      setActiveAspectId(null);
    }
  };

  // Randomize just items (doesn't require god selection)
  const randomizeItems = () => {
    const upgradedStarters = getUpgradedStarters();
    const t3Items = getT3Items();
    const relics = getRelics();

    if (upgradedStarters.length === 0 || t3Items.length === 0) return;

    // Pick random starter
    const randomStarter = pickRandom(upgradedStarters);

    // Pick 6 unique random T3 items
    const shuffledT3 = [...t3Items].sort(() => Math.random() - 0.5);
    const randomItems = shuffledT3.slice(0, 6).map(i => i.id);

    // Pick random relic
    const randomRelic = relics.length > 0 ? pickRandom(relics) : null;

    setBuild({
      starter: randomStarter.id,
      items: randomItems as (string | null)[],
      relic: randomRelic?.id || null
    });
  };

  // Randomize both god and items
  const randomizeAll = () => {
    randomizeGod();
    randomizeItems();
  };

  const handleReset = () => {
    setBuild({ starter: null, items: [null, null, null, null, null, null], relic: null });
    setSelectedGod(null);
    setActiveAspectId(null);
    setItemPickerSlot(null);
  };

  const handleSelectItem = (item: Item) => {
    if (!itemPickerSlot) return;

    if (itemPickerSlot.type === 'Starter') {
      setBuild({ ...build, starter: item.id });
    } else if (itemPickerSlot.type === 'Relic') {
      setBuild({ ...build, relic: item.id });
    } else if (itemPickerSlot.type === 'Item' && itemPickerSlot.index !== undefined) {
      const newItems = [...build.items];
      newItems[itemPickerSlot.index] = item.id;
      setBuild({ ...build, items: newItems });
    }
    setItemPickerSlot(null);
    setItemSearch('');
  };

  const handleClearSlot = () => {
    if (!itemPickerSlot) return;

    if (itemPickerSlot.type === 'Starter') {
      setBuild({ ...build, starter: null });
    } else if (itemPickerSlot.type === 'Relic') {
      setBuild({ ...build, relic: null });
    } else if (itemPickerSlot.type === 'Item' && itemPickerSlot.index !== undefined) {
      const newItems = [...build.items];
      newItems[itemPickerSlot.index] = null;
      setBuild({ ...build, items: newItems });
    }
    setItemPickerSlot(null);
  };

  // Filter items for picker - allows ANY item except God Specific (unless that god is selected)
  const filteredItems = ITEMS.filter(item => {
    if (!itemPickerSlot) return false;

    // Type matching
    let typeMatch = false;
    if (itemPickerSlot.type === 'Starter') {
      typeMatch = item.type === 'Starter';
    } else if (itemPickerSlot.type === 'Relic') {
      typeMatch = item.type === 'Relic';
    } else if (itemPickerSlot.type === 'Item') {
      // Allow regular Items and God Specific items
      typeMatch = item.type === 'Item' || item.type === 'God Specific';
    }
    
    const searchMatch = item.name.toLowerCase().includes(itemSearch.toLowerCase());
    
    // God Specific items only show for their god
    const godMatch = item.type !== 'God Specific' || (selectedGod && item.god === selectedGod.name);
    
    return typeMatch && searchMatch && godMatch;
  });

  const filteredGods = GODS
    .filter(god => {
      const matchesSearch = god.name.toLowerCase().includes(godSearch.toLowerCase());
      const matchesRole = roleFilter === 'All' || god.lanes.includes(roleFilter);
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      {/* Builder Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 flex flex-wrap gap-4 items-center justify-between rounded-xl mb-6">
        <div className="flex items-center gap-4">
          {selectedGod ? (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => { setSelectedGod(null); setActiveAspectId(null); }}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ChevronLeft size={20} className="text-slate-400" />
              </button>
              <img 
                src={selectedGod.image} 
                alt={selectedGod.name} 
                className="w-10 h-10 rounded-lg border border-slate-700 object-cover"
              />
              <div>
                <h2 className="font-bold text-white">{selectedGod.name}</h2>
                <p className="text-xs text-slate-500">
                  {activeAspectId ? selectedGod.aspects.find(a => a.id === activeAspectId)?.name : 'Base Kit'}
                </p>
              </div>
            </div>
          ) : (
            <h2 className="font-bold text-white">Select a God to Start</h2>
          )}
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <ShareBuildButton 
            godId={selectedGod?.id || null}
            aspectId={activeAspectId}
            build={build}
          />
          
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg border border-slate-700 text-sm font-bold"
          >
            Reset
          </button>
        </div>
      </div>

      {/* FUN RANDOMIZER SECTION */}
      <div className="mb-6 relative overflow-hidden">
        <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-orange-900/40 border border-purple-500/30 rounded-xl p-4 sm:p-5">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Text */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="hidden sm:flex w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
                <Dices size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                  <span className="sm:hidden"><Dices size={18} className="text-purple-400" /></span>
                  Feeling Lucky?
                  <span className="text-2xl">🎲</span>
                </h3>
                <p className="text-sm text-purple-200/70">Try a random build and embrace the chaos!</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 sm:ml-auto">
              <button
                onClick={randomizeAll}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95"
              >
                <Shuffle size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                <span>Randomize All</span>
              </button>
              <button
                onClick={randomizeGod}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-600 hover:border-purple-500/50 transition-all hover:scale-105 active:scale-95"
                title="Random God"
              >
                <Sword size={16} />
                <span className="hidden sm:inline">God</span>
              </button>
              <button
                onClick={randomizeItems}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-600 hover:border-pink-500/50 transition-all hover:scale-105 active:scale-95"
                title="Random Items"
              >
                <Shield size={16} />
                <span className="hidden sm:inline">Items</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      {!selectedGod ? (
        /* GOD SELECTION GRID */
        <div className="space-y-6">
          {/* Search & Filter */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search gods..."
                value={godSearch}
                onChange={(e) => setGodSearch(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder:text-slate-500 focus:border-mythic-gold focus:outline-none"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'].map(role => (
                <button
                  key={role}
                  onClick={() => setRoleFilter(role)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    roleFilter === role
                      ? 'bg-mythic-gold text-slate-900'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Random Items Preview (when no god selected but items are randomized) */}
          {(build.starter || build.items.some(i => i)) && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Randomized Build Preview</h4>
              <div className="flex gap-3 flex-wrap items-center">
                {build.starter && (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-purple-400 font-bold">Starter</span>
                    <img src={getItem(build.starter)?.image} className="w-12 h-12 rounded border border-slate-600" />
                  </div>
                )}
                {build.items.map((itemId, idx) => itemId && (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-slate-500 font-bold">Slot {idx + 1}</span>
                    <img src={getItem(itemId)?.image} className="w-12 h-12 rounded border border-slate-600" />
                  </div>
                ))}
                {build.relic && (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-cyan-400 font-bold">Relic</span>
                    <img src={getItem(build.relic)?.image} className="w-12 h-12 rounded-full border border-slate-600" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Gods Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
            {filteredGods.map(god => (
              <div
                key={god.id}
                onClick={() => {
                  setSelectedGod(god);
                  setActiveAspectId(null);
                  // Don't reset build if items were randomized
                  if (!build.starter && !build.items.some(i => i)) {
                    setBuild({ starter: null, items: [null, null, null, null, null, null], relic: null });
                  }
                }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-slate-700 hover:border-mythic-gold transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-mythic-gold/20">
                  <img
                    src={god.image}
                    alt={god.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-center text-xs font-bold text-slate-400 group-hover:text-mythic-gold mt-1.5 truncate">
                  {god.name}
                </p>
              </div>
            ))}
          </div>

          {filteredGods.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <p>No gods found matching your filters.</p>
            </div>
          )}
        </div>
      ) : (
        /* BUILD INTERFACE */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: God Info & Aspects */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-center mb-6">
              <img 
                src={selectedGod.image} 
                alt={selectedGod.name}
                className="w-24 h-24 rounded-xl mx-auto border-2 border-slate-700 object-cover mb-3"
              />
              <h3 className="text-xl font-bold text-white">{selectedGod.name}</h3>
              <p className="text-sm text-slate-500">{selectedGod.title}</p>
              <div className="flex gap-2 justify-center mt-2 flex-wrap">
                {selectedGod.lanes.map(lane => (
                  <span key={lane} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                    {lane}
                  </span>
                ))}
              </div>
            </div>

            {/* Aspects */}
            {selectedGod.aspects.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Select Aspect</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveAspectId(null)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      !activeAspectId 
                        ? 'border-mythic-gold bg-mythic-gold/10 text-white' 
                        : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    <span className="font-bold">Base Kit</span>
                  </button>
                  {selectedGod.aspects.map(aspect => (
                    <button
                      key={aspect.id}
                      onClick={() => setActiveAspectId(aspect.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-all ${
                        activeAspectId === aspect.id 
                          ? 'border-mythic-gold bg-mythic-gold/10 text-white' 
                          : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <span className="font-bold">{aspect.name}</span>
                      <p className="text-xs mt-1 opacity-70 line-clamp-2">{aspect.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center: Build Slots */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-4">Your Build</h4>
            
            {/* Starter & Relic Row */}
            <div className="flex justify-center gap-6 mb-6">
              {/* Starter */}
              <div 
                onClick={() => setItemPickerSlot({ type: 'Starter' })}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <span className="text-[10px] font-bold text-purple-400 uppercase">Starter</span>
                <div className={`w-16 h-16 bg-slate-800 rounded-lg border-2 overflow-hidden transition-all group-hover:border-purple-400 ${
                  itemPickerSlot?.type === 'Starter' ? 'border-mythic-gold' : 'border-slate-600'
                }`}>
                  {build.starter ? (
                    <img src={getItem(build.starter)?.image} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-600">
                      <Plus size={20} />
                    </div>
                  )}
                </div>
              </div>

              {/* Relic */}
              <div 
                onClick={() => setItemPickerSlot({ type: 'Relic' })}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <span className="text-[10px] font-bold text-cyan-400 uppercase">Relic</span>
                <div className={`w-16 h-16 bg-slate-800 rounded-full border-2 overflow-hidden transition-all group-hover:border-cyan-400 ${
                  itemPickerSlot?.type === 'Relic' ? 'border-mythic-gold' : 'border-slate-600'
                }`}>
                  {build.relic ? (
                    <img src={getItem(build.relic)?.image} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-600">
                      <Plus size={20} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Items Grid */}
            <div className="grid grid-cols-3 gap-3">
              {build.items.map((itemId, index) => (
                <div 
                  key={index}
                  onClick={() => setItemPickerSlot({ type: 'Item', index })}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Slot {index + 1}</span>
                  <div className={`w-16 h-16 bg-slate-800 rounded-lg border-2 overflow-hidden transition-all group-hover:border-mythic-gold/50 ${
                    itemPickerSlot?.type === 'Item' && itemPickerSlot?.index === index ? 'border-mythic-gold' : 'border-slate-600'
                  }`}>
                    {itemId ? (
                      <img src={getItem(itemId)?.image} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-600">
                        <Plus size={20} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Total Cost */}
            <div className="mt-6 pt-4 border-t border-slate-700 text-center">
              <span className="text-slate-500 text-sm">Total Cost: </span>
              <span className="text-yellow-400 font-bold">
                {[build.starter, ...build.items, build.relic]
                  .filter(Boolean)
                  .reduce((sum, id) => sum + (getItem(id)?.cost || 0), 0)}g
              </span>
            </div>
          </div>

          {/* Right: Item Picker */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {itemPickerSlot ? (
              <div className="flex flex-col h-full">
                {/* Picker Header */}
                <div className="p-4 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">
                      Select {itemPickerSlot.type}
                      {itemPickerSlot.type === 'Item' && itemPickerSlot.index !== undefined && ` ${itemPickerSlot.index + 1}`}
                    </h4>
                    <button 
                      onClick={() => { setItemPickerSlot(null); setItemSearch(''); }}
                      className="p-1 hover:bg-slate-800 rounded"
                    >
                      <X size={18} className="text-slate-400" />
                    </button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input
                      autoFocus
                      placeholder={`Search ${itemPickerSlot.type.toLowerCase()}s...`}
                      value={itemSearch}
                      onChange={(e) => setItemSearch(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-mythic-gold focus:outline-none"
                    />
                  </div>
                </div>

                {/* Items Grid */}
                <div className="flex-1 overflow-y-auto p-3 custom-scrollbar max-h-[400px]">
                  <div className="grid grid-cols-4 gap-2">
                    {/* Clear Button */}
                    <div 
                      onClick={handleClearSlot}
                      className="aspect-square bg-red-900/20 border border-red-500/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-900/40 transition-colors"
                    >
                      <span className="text-[10px] text-red-400 font-bold">CLEAR</span>
                    </div>

                    {filteredItems.map(item => (
                      <div 
                        key={item.id}
                        onClick={() => handleSelectItem(item)}
                        className={`aspect-square bg-slate-800 border rounded-lg overflow-hidden cursor-pointer hover:border-mythic-gold transition-all hover:scale-105 group relative ${
                          item.type === 'God Specific' ? 'border-yellow-500/50' : 'border-slate-700'
                        }`}
                        title={`${item.name} - ${item.cost}g${item.type === 'God Specific' ? ` (${item.god} Only)` : ''}`}
                      >
                        <img src={item.image} className="w-full h-full object-cover" />
                        {/* Tier badge */}
                        {item.tier && (
                          <div className="absolute top-0 right-0 bg-black/70 px-1 text-[8px] font-bold text-white rounded-bl">
                            T{item.tier}
                          </div>
                        )}
                        {/* God Specific indicator */}
                        {item.type === 'God Specific' && (
                          <div className="absolute top-0 left-0 bg-yellow-500/80 px-1 text-[6px] font-bold text-black rounded-br">
                            GOD
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-center">
                          <span className="text-[8px] text-white font-bold bg-black/80 w-full text-center py-0.5 opacity-0 group-hover:opacity-100 transition-opacity truncate px-1">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredItems.length === 0 && (
                    <div className="text-center py-8 text-slate-500 text-sm">
                      No items found
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-slate-500 text-sm p-4 text-center">
                <div>
                  <p className="mb-2">Click a slot on the left to select items</p>
                  <p className="text-xs text-slate-600">Your build will be auto-saved in the URL</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};