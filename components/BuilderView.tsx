import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Share2, Check, Link as LinkIcon, Search, Plus, X, ChevronLeft, Shuffle, Sword, Shield, Dices, Sparkles, Info, Filter, BicepsFlexed, BookOpen, Zap, Target, Crosshair, Heart, Activity, Droplet, RotateCcw } from 'lucide-react';
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

// Stat filters config
const STAT_FILTERS = [
  { id: 'Strength', label: 'STR', icon: <BicepsFlexed size={12} />, keys: ['Strength', 'Physical Power'] },
  { id: 'Intelligence', label: 'INT', icon: <BookOpen size={12} />, keys: ['Intelligence', 'Magical Power'] },
  { id: 'Attack Speed', label: 'AS', icon: <Zap size={12} />, keys: ['Attack Speed'] },
  { id: 'Crit', label: 'Crit', icon: <Target size={12} />, keys: ['Crit'] },
  { id: 'Pen', label: 'Pen', icon: <Crosshair size={12} />, keys: ['Penetration'] },
  { id: 'Lifesteal', label: 'LS', icon: <Heart size={12} className="text-red-400" />, keys: ['Lifesteal'] },
  { id: 'Cooldown', label: 'CDR', icon: <RotateCcw size={12} />, keys: ['Cooldown'] },
  { id: 'Max Health', label: 'HP', icon: <Heart size={12} className="text-green-500" />, keys: ['Max Health'] },
  { id: 'Max Mana', label: 'Mana', icon: <Droplet size={12} className="text-blue-500" />, keys: ['Max Mana'] },
  { id: 'Physical Protection', label: 'Phys', icon: <Shield size={12} />, keys: ['Phys'] },
  { id: 'Magical Protection', label: 'Mag', icon: <Shield size={12} className="text-purple-400" />, keys: ['Mag'] },
];

// Helper functions for build paths
const getComponents = (item: Item, allItems: Item[]) => {
  if (!item.buildsFrom) return [];
  return item.buildsFrom.map(id => allItems.find(i => i.id === id)).filter(Boolean) as Item[];
};

const getUpgrades = (item: Item, allItems: Item[]) => {
  return allItems.filter(i => i.buildsFrom?.includes(item.id));
};

const findRoots = (item: Item, allItems: Item[], visited = new Set<string>()): Item[] => {
  if (visited.has(item.id)) return [];
  visited.add(item.id);
  const upgrades = getUpgrades(item, allItems);
  if (upgrades.length === 0) return [item];
  return upgrades.flatMap(u => findRoots(u, allItems, new Set(visited)));
};

// Item Inspector Component
const BuilderItemInspector: React.FC<{ 
  item: Item; 
  allItems: Item[]; 
  onClose: () => void; 
  onSelect?: () => void;
  onRemove?: () => void;
  onChange?: () => void;
  mode: 'preview' | 'view';
}> = ({ item, allItems, onClose, onSelect, onRemove, onChange, mode }) => {
  const roots = (item.type === 'Item' || item.type === 'Starter') ? findRoots(item, allItems) : [item];
  const uniqueRoots = Array.from(new Set(roots.map(r => r.id))).map(id => roots.find(r => r.id === id)!);

  const renderNode = (node: Item, targetId: string, isRoot = false): React.ReactNode => {
    const components = getComponents(node, allItems);
    const isTarget = node.id === targetId;
    return (
      <div key={node.id} className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded border overflow-hidden ${isTarget ? 'border-mythic-gold ring-2 ring-mythic-gold/50' : 'border-slate-600'}`}>
          <img src={node.image} alt={node.name} className="w-full h-full object-cover" />
        </div>
        <span className="text-[8px] text-slate-500 mt-0.5 max-w-[50px] truncate text-center">{node.name}</span>
        {components.length > 0 && (
          <>
            <div className="h-2 w-px bg-slate-600"></div>
            <div className="flex gap-2">
              {components.map(c => renderNode(c, targetId))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full max-h-[80vh]">
      {/* Header */}
      <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex gap-3 items-center shrink-0">
        <div className="w-14 h-14 bg-slate-900 rounded-lg border border-slate-600 overflow-hidden shadow-lg shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-serif font-bold text-mythic-gold leading-tight truncate">{item.name}</h2>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-base text-yellow-500 font-mono font-bold">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
            <span className="text-[10px] uppercase bg-slate-700 px-2 py-0.5 rounded text-slate-300">
              {item.tier ? `Tier ${item.tier}` : item.type}
            </span>
            {item.type === 'God Specific' && (
              <span className="text-[10px] uppercase bg-mythic-900/50 px-2 py-0.5 rounded text-mythic-gold border border-mythic-gold/30">
                {(item as any).god} Only
              </span>
            )}
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white shrink-0">
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto flex-1 custom-scrollbar">
        {/* Stats */}
        {Object.keys(item.stats).length > 0 && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4">
            {Object.entries(item.stats).map(([label, value]) => (
              <div key={label} className="flex justify-between items-center text-xs border-b border-slate-800 pb-1">
                <span className="text-slate-400 truncate">{label}</span>
                <span className="text-slate-100 font-semibold ml-2">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Passive */}
        {item.passive && (
          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 mb-4">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1 block">Passive</span>
            <p className="text-xs text-slate-300 italic leading-relaxed">{item.passive}</p>
          </div>
        )}

        {/* Build Path */}
        {(item.type === 'Item' || item.type === 'Starter') && uniqueRoots.length > 0 && (
          <div className="pt-3 border-t border-slate-800">
            <h3 className="text-[10px] uppercase font-bold text-slate-500 mb-3 tracking-wider flex items-center gap-1">
              <Info size={10} /> Build Path
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {uniqueRoots.map(root => (
                <div key={root.id} className="flex justify-center">
                  {renderNode(root, item.id, true)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-3 border-t border-slate-700 shrink-0 flex gap-2">
        {mode === 'preview' && onSelect && (
          <button onClick={onSelect} className="flex-1 py-2 bg-mythic-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
            Select Item
          </button>
        )}
        {mode === 'view' && (
          <>
            {onChange && (
              <button onClick={onChange} className="flex-1 py-2 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors">
                Change Item
              </button>
            )}
            {onRemove && (
              <button onClick={onRemove} className="py-2 px-4 bg-red-900/50 text-red-400 font-bold rounded-lg hover:bg-red-900 transition-colors border border-red-500/30">
                Remove
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Share Button Component
const ShareBuildButton: React.FC<{ godId: string | null; aspectId: string | null; build: CurrentBuild }> = ({ godId, aspectId, build }) => {
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
    try {
      await navigator.clipboard.writeText(generateUrl());
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => { setCopied(false); setShowTooltip(false); }, 2000);
    } catch (err) { console.error('Failed to copy:', err); }
  };

  if (!isShareable) return null;

  return (
    <div className="relative">
      <button onClick={handleShare} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${copied ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-mythic-gold/50'}`}>
        {copied ? <><Check size={16} /><span>Copied!</span></> : <><Share2 size={16} /><span className="hidden sm:inline">Share Build</span></>}
      </button>
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap">
          <div className="flex items-center gap-1.5"><LinkIcon size={12} />Link copied!</div>
        </div>
      )}
    </div>
  );
};

export const BuilderView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [activeAspectId, setActiveAspectId] = useState<string | null>(null);
  const [build, setBuild] = useState<CurrentBuild>({ starter: null, items: [null, null, null, null, null, null], relic: null });

  const [godSearch, setGodSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [itemPickerSlot, setItemPickerSlot] = useState<ItemPickerSlot | null>(null);
  
  // Item picker filters
  const [itemSearch, setItemSearch] = useState('');
  const [itemCategory, setItemCategory] = useState('All');
  const [itemTier, setItemTier] = useState('All');
  const [activeStats, setActiveStats] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Item viewing states
  const [previewItem, setPreviewItem] = useState<Item | null>(null); // For picker preview
  const [viewingBuildItem, setViewingBuildItem] = useState<{ item: Item; slot: ItemPickerSlot } | null>(null); // For viewing items in build

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
        setBuild({ starter: starter || null, items: items.slice(0, 6) as (string | null)[], relic: relic || null });
      }
    }
  }, [GODS]);

  const getItem = (id: string | null) => id ? ITEMS.find(i => i.id === id) : null;
  const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  const randomizeGod = () => {
    if (GODS.length === 0) return;
    const god = pickRandom(GODS);
    setSelectedGod(god);
    // 50% chance to pick an aspect if the god has aspects
    if (god.aspects.length > 0 && Math.random() < 0.5) {
      setActiveAspectId(pickRandom(god.aspects).id);
    } else {
      setActiveAspectId(null);
    }
  };

  const randomizeItems = () => {
    const starters = ITEMS.filter(i => i.type === 'Starter' && i.buildsFrom && i.buildsFrom.length > 0);
    const t3Items = ITEMS.filter(i => i.type === 'Item' && i.tier === 3);
    const relics = ITEMS.filter(i => i.type === 'Relic');
    
    if (starters.length === 0 || t3Items.length === 0) return;
    
    const shuffledT3 = [...t3Items].sort(() => Math.random() - 0.5);
    const randomItems = shuffledT3.slice(0, 6).map(i => i.id);
    
    setBuild({
      starter: pickRandom(starters).id,
      items: randomItems as (string | null)[],
      relic: relics.length > 0 ? pickRandom(relics).id : null
    });
  };

  const randomizeAll = () => {
    randomizeGod();
    setTimeout(() => randomizeItems(), 50);
  };

  const handleReset = () => {
    setBuild({ starter: null, items: [null, null, null, null, null, null], relic: null });
    setSelectedGod(null);
    setActiveAspectId(null);
    setItemPickerSlot(null);
    resetFilters();
  };

  const resetFilters = () => {
    setItemSearch('');
    setItemCategory('All');
    setItemTier('All');
    setActiveStats([]);
  };

  const handleSelectItem = (item: Item) => {
    if (!itemPickerSlot) return;
    if (itemPickerSlot.type === 'Starter') setBuild({ ...build, starter: item.id });
    else if (itemPickerSlot.type === 'Relic') setBuild({ ...build, relic: item.id });
    else if (itemPickerSlot.type === 'Item' && itemPickerSlot.index !== undefined) {
      const newItems = [...build.items];
      newItems[itemPickerSlot.index] = item.id;
      setBuild({ ...build, items: newItems });
    }
    setItemPickerSlot(null);
    setPreviewItem(null);
    resetFilters();
  };

  const handleClearSlot = (slot?: ItemPickerSlot) => {
    const targetSlot = slot || itemPickerSlot;
    if (!targetSlot) return;
    if (targetSlot.type === 'Starter') setBuild({ ...build, starter: null });
    else if (targetSlot.type === 'Relic') setBuild({ ...build, relic: null });
    else if (targetSlot.type === 'Item' && targetSlot.index !== undefined) {
      const newItems = [...build.items];
      newItems[targetSlot.index] = null;
      setBuild({ ...build, items: newItems });
    }
    setItemPickerSlot(null);
    setViewingBuildItem(null);
  };

  // Handle clicking on a build slot
  const handleSlotClick = (slot: ItemPickerSlot, currentItemId: string | null) => {
    if (currentItemId) {
      // Slot has an item - show details
      const item = getItem(currentItemId);
      if (item) setViewingBuildItem({ item, slot });
    } else {
      // Empty slot - open picker
      setItemPickerSlot(slot);
    }
  };

  const toggleStat = (statId: string) => {
    setActiveStats(prev => prev.includes(statId) ? prev.filter(s => s !== statId) : [...prev, statId]);
  };

  // Filter items for picker
  const filteredItems = ITEMS.filter(item => {
    if (!itemPickerSlot) return false;

    // Type matching
    let typeMatch = false;
    if (itemPickerSlot.type === 'Starter') typeMatch = item.type === 'Starter';
    else if (itemPickerSlot.type === 'Relic') typeMatch = item.type === 'Relic';
    else if (itemPickerSlot.type === 'Item') typeMatch = item.type === 'Item' || item.type === 'God Specific';

    // Search
    const searchMatch = item.name.toLowerCase().includes(itemSearch.toLowerCase());

    // God specific check
    const godMatch = item.type !== 'God Specific' || (selectedGod && (item as any).god === selectedGod.name);

    // Category filter (only for regular items)
    const categoryMatch = itemCategory === 'All' || item.category === itemCategory;

    // Tier filter (only for regular items)
    let tierMatch = true;
    if (itemTier !== 'All' && itemPickerSlot.type === 'Item') {
      const tierNum = parseInt(itemTier.replace('Tier ', ''));
      tierMatch = item.tier === tierNum;
    }

    // Stat filters
    let statsMatch = true;
    if (activeStats.length > 0) {
      statsMatch = activeStats.every(statId => {
        const filter = STAT_FILTERS.find(f => f.id === statId);
        if (!filter) return false;
        return Object.keys(item.stats).some(itemKey =>
          filter.keys.some(filterKey => itemKey.toLowerCase().includes(filterKey.toLowerCase()))
        );
      });
    }

    return typeMatch && searchMatch && godMatch && categoryMatch && tierMatch && statsMatch;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const filteredGods = GODS
    .filter(god => god.name.toLowerCase().includes(godSearch.toLowerCase()) && (roleFilter === 'All' || god.lanes.includes(roleFilter)))
    .sort((a, b) => a.name.localeCompare(b.name));

  const hasActiveFilters = itemCategory !== 'All' || itemTier !== 'All' || activeStats.length > 0;

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      {/* Builder Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 flex flex-wrap gap-4 items-center justify-between rounded-xl mb-6">
        <div className="flex items-center gap-4">
          {selectedGod ? (
            <div className="flex items-center gap-3">
              <button onClick={() => { setSelectedGod(null); setActiveAspectId(null); }} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <ChevronLeft size={20} className="text-slate-400" />
              </button>
              <img src={selectedGod.image} alt={selectedGod.name} className="w-10 h-10 rounded-lg border border-slate-700 object-cover" />
              <div>
                <h2 className="font-bold text-white">{selectedGod.name}</h2>
                <p className="text-xs text-slate-500">{activeAspectId ? selectedGod.aspects.find(a => a.id === activeAspectId)?.name || 'Base Kit' : 'Base Kit'}</p>
              </div>
            </div>
          ) : (
            <h2 className="font-bold text-white text-lg">Build Creator</h2>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <ShareBuildButton godId={selectedGod?.id || null} aspectId={activeAspectId} build={build} />
          <button onClick={handleReset} className="px-3 py-2 bg-red-900/30 hover:bg-red-900/50 rounded-lg text-red-400 text-sm border border-red-500/30">Reset</button>
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
              <button onClick={randomizeAll} className="group flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95">
                <Shuffle size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                <span>Randomize All</span>
              </button>
              <button onClick={randomizeGod} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-600 hover:border-purple-500/50 transition-all hover:scale-105 active:scale-95" title="Random God">
                <Sword size={16} />
                <span className="hidden sm:inline">God</span>
              </button>
              <button onClick={randomizeItems} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-600 hover:border-pink-500/50 transition-all hover:scale-105 active:scale-95" title="Random Items">
                <Shield size={16} />
                <span className="hidden sm:inline">Items</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* God Picker */}
      {!selectedGod ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          {/* Randomized Build Preview (when no god selected but items are randomized) */}
          {(build.starter || build.items.some(i => i)) && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Randomized Build Preview</h4>
              <div className="flex gap-3 flex-wrap items-center">
                {build.starter && (
                  <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => { const item = getItem(build.starter); if (item) setViewingBuildItem({ item, slot: { type: 'Starter' } }); }}>
                    <span className="text-[9px] text-purple-400 font-bold">Starter</span>
                    <img src={getItem(build.starter)?.image} className="w-12 h-12 rounded border border-slate-600 hover:border-purple-400 transition-colors" />
                  </div>
                )}
                {build.items.map((itemId, idx) => itemId && (
                  <div key={idx} className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => { const item = getItem(itemId); if (item) setViewingBuildItem({ item, slot: { type: 'Item', index: idx } }); }}>
                    <span className="text-[9px] text-slate-500 font-bold">Slot {idx + 1}</span>
                    <img src={getItem(itemId)?.image} className="w-12 h-12 rounded border border-slate-600 hover:border-mythic-gold transition-colors" />
                  </div>
                ))}
                {build.relic && (
                  <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => { const item = getItem(build.relic); if (item) setViewingBuildItem({ item, slot: { type: 'Relic' } }); }}>
                    <span className="text-[9px] text-cyan-400 font-bold">Relic</span>
                    <img src={getItem(build.relic)?.image} className="w-12 h-12 rounded-full border border-slate-600 hover:border-cyan-400 transition-colors" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-600 mt-3">Select a god to complete your build • Click items to view details</p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input placeholder="Search gods..." value={godSearch} onChange={e => setGodSearch(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-slate-500 focus:border-mythic-gold focus:outline-none" />
            </div>
            <div className="flex gap-1 flex-wrap">
              {['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'].map(role => (
                <button key={role} onClick={() => setRoleFilter(role)} className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${roleFilter === role ? 'bg-mythic-gold text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{role}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {filteredGods.map(god => (
              <div key={god.id} onClick={() => { setSelectedGod(god); if (god.aspects.length > 0) setActiveAspectId(god.aspects[0].id); }} className="group cursor-pointer">
                <div className="aspect-square bg-slate-800 rounded-lg border border-slate-700 overflow-hidden transition-all group-hover:border-mythic-gold group-hover:scale-105">
                  <img src={god.image} alt={god.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] text-center mt-1 text-slate-400 group-hover:text-mythic-gold truncate">{god.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Aspect Selector */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Select Aspect</h4>
            <button onClick={() => setActiveAspectId(null)} className={`w-full text-left p-3 rounded-lg border mb-2 transition-colors ${!activeAspectId ? 'border-mythic-gold bg-mythic-gold/10 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}>
              <span className="font-bold">Base Kit</span>
              <p className="text-xs mt-1 opacity-70">Original abilities</p>
            </button>
            {selectedGod.aspects.map(aspect => (
              <button key={aspect.id} onClick={() => setActiveAspectId(aspect.id)} className={`w-full text-left p-3 rounded-lg border mb-2 transition-colors ${activeAspectId === aspect.id ? 'border-mythic-gold bg-mythic-gold/10 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}>
                <span className="font-bold">{aspect.name}</span>
                <p className="text-xs mt-1 opacity-70 line-clamp-2">{aspect.description}</p>
              </button>
            ))}
          </div>

          {/* Build Slots */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase">Your Build</h4>
              <p className="text-[10px] text-slate-600">Tap item to view details</p>
            </div>
            
            <div className="flex justify-center gap-6 mb-6">
              {/* Starter */}
              <div onClick={() => handleSlotClick({ type: 'Starter' }, build.starter)} className="flex flex-col items-center gap-2 cursor-pointer group">
                <span className="text-[10px] font-bold text-purple-400 uppercase">Starter</span>
                <div className={`w-16 h-16 bg-slate-800 rounded-lg border-2 overflow-hidden transition-all group-hover:border-purple-400 ${build.starter ? 'border-purple-500/50' : 'border-slate-600'}`}>
                  {build.starter ? <img src={getItem(build.starter)?.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-slate-600"><Plus size={20} /></div>}
                </div>
              </div>
              {/* Relic */}
              <div onClick={() => handleSlotClick({ type: 'Relic' }, build.relic)} className="flex flex-col items-center gap-2 cursor-pointer group">
                <span className="text-[10px] font-bold text-cyan-400 uppercase">Relic</span>
                <div className={`w-16 h-16 bg-slate-800 rounded-full border-2 overflow-hidden transition-all group-hover:border-cyan-400 ${build.relic ? 'border-cyan-500/50' : 'border-slate-600'}`}>
                  {build.relic ? <img src={getItem(build.relic)?.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-slate-600"><Plus size={20} /></div>}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {build.items.map((itemId, index) => (
                <div key={index} onClick={() => handleSlotClick({ type: 'Item', index }, itemId)} className="flex flex-col items-center gap-2 cursor-pointer group">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Slot {index + 1}</span>
                  <div className={`w-16 h-16 bg-slate-800 rounded-lg border-2 overflow-hidden transition-all group-hover:border-mythic-gold/50 ${itemId ? 'border-slate-500' : 'border-slate-600'}`}>
                    {itemId ? <img src={getItem(itemId)?.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-slate-600"><Plus size={20} /></div>}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-700 text-center">
              <span className="text-slate-500 text-sm">Total Cost: </span>
              <span className="text-yellow-400 font-bold">{[build.starter, ...build.items, build.relic].filter(Boolean).reduce((sum, id) => sum + (getItem(id)?.cost || 0), 0)}g</span>
            </div>
          </div>

          {/* Item Picker */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {itemPickerSlot ? (
              <div className="flex flex-col h-full">
                {/* Picker Header */}
                <div className="p-4 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Select {itemPickerSlot.type}{itemPickerSlot.type === 'Item' && itemPickerSlot.index !== undefined && ` ${itemPickerSlot.index + 1}`}</h4>
                    <button onClick={() => { setItemPickerSlot(null); resetFilters(); }} className="p-1 hover:bg-slate-800 rounded"><X size={18} className="text-slate-400" /></button>
                  </div>
                  
                  {/* Search */}
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input autoFocus placeholder={`Search ${itemPickerSlot.type.toLowerCase()}s...`} value={itemSearch} onChange={e => setItemSearch(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-mythic-gold focus:outline-none" />
                  </div>

                  {/* Filter Toggle */}
                  <button onClick={() => setShowFilters(!showFilters)} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${showFilters || hasActiveFilters ? 'bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                    <span className="flex items-center gap-2"><Filter size={14} />Filters {hasActiveFilters && `(${(itemCategory !== 'All' ? 1 : 0) + (itemTier !== 'All' ? 1 : 0) + activeStats.length})`}</span>
                    <span>{showFilters ? '▲' : '▼'}</span>
                  </button>

                  {/* Filters Panel */}
                  {showFilters && (
                    <div className="mt-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 space-y-3">
                      {/* Category Filter (only for Items) */}
                      {itemPickerSlot.type === 'Item' && (
                        <div>
                          <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">Category</label>
                          <div className="flex gap-1 flex-wrap">
                            {['All', 'Offense', 'Defense', 'Utility', 'Hybrid'].map(cat => (
                              <button key={cat} onClick={() => setItemCategory(cat)} className={`px-2 py-1 rounded text-[10px] font-bold ${itemCategory === cat ? 'bg-mythic-gold text-slate-900' : 'bg-slate-700 text-slate-400'}`}>{cat}</button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tier Filter (only for Items) */}
                      {itemPickerSlot.type === 'Item' && (
                        <div>
                          <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">Tier</label>
                          <div className="flex gap-1">
                            {['All', 'Tier 3', 'Tier 2', 'Tier 1'].map(tier => (
                              <button key={tier} onClick={() => setItemTier(tier)} className={`px-2 py-1 rounded text-[10px] font-bold ${itemTier === tier ? 'bg-mythic-gold text-slate-900' : 'bg-slate-700 text-slate-400'}`}>{tier}</button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Stat Filters */}
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">Stats</label>
                        <div className="grid grid-cols-4 gap-1">
                          {STAT_FILTERS.map(stat => (
                            <button key={stat.id} onClick={() => toggleStat(stat.id)} className={`flex items-center justify-center gap-1 p-1.5 rounded text-[9px] font-bold ${activeStats.includes(stat.id) ? 'bg-mythic-gold text-slate-900' : 'bg-slate-700 text-slate-400'}`} title={stat.id}>
                              {stat.icon}
                              <span className="hidden sm:inline">{stat.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Clear Filters */}
                      {hasActiveFilters && (
                        <button onClick={resetFilters} className="w-full text-[10px] text-red-400 hover:text-red-300 py-1">Clear All Filters</button>
                      )}
                    </div>
                  )}
                </div>

                {/* Items Grid */}
                <div className="flex-1 overflow-y-auto p-3 custom-scrollbar max-h-[400px]">
                  <div className="grid grid-cols-4 gap-2">
                    <div onClick={() => handleClearSlot()} className="aspect-square bg-red-900/20 border border-red-500/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-900/40 transition-colors">
                      <span className="text-[10px] text-red-400 font-bold">CLEAR</span>
                    </div>

                    {filteredItems.map(item => (
                      <div key={item.id} className={`aspect-square bg-slate-800 border rounded-lg overflow-hidden cursor-pointer hover:border-mythic-gold transition-all group relative ${item.type === 'God Specific' ? 'border-yellow-500/50' : 'border-slate-700'}`}>
                        <div onClick={() => handleSelectItem(item)} className="w-full h-full">
                          <img src={item.image} className="w-full h-full object-cover" />
                          {item.tier && <div className="absolute top-0 right-0 bg-black/70 px-1 text-[8px] font-bold text-white rounded-bl">T{item.tier}</div>}
                          {item.type === 'God Specific' && <div className="absolute top-0 left-0 bg-yellow-500/80 px-1 text-[6px] font-bold text-black rounded-br">GOD</div>}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-center">
                            <span className="text-[8px] text-white font-bold bg-black/80 w-full text-center py-0.5 opacity-0 group-hover:opacity-100 transition-opacity truncate px-1">{item.name}</span>
                          </div>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); setPreviewItem(item); }} className="absolute top-0.5 left-0.5 w-5 h-5 bg-blue-600/90 hover:bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10" title="View details">
                          <Info size={12} className="text-white" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {filteredItems.length === 0 && (
                    <div className="text-center py-8 text-slate-500 text-sm">
                      <p>No items found</p>
                      {hasActiveFilters && <button onClick={resetFilters} className="text-mythic-gold text-xs mt-2">Clear filters</button>}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-slate-500 text-sm p-4 text-center">
                <div>
                  <p className="mb-2">Click an empty slot to add items</p>
                  <p className="text-xs text-slate-600">Click filled slots to view item details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Item Preview Modal (from picker) */}
      {previewItem && createPortal(
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setPreviewItem(null)}>
          <div className="bg-slate-900 w-full max-w-md max-h-[85vh] sm:rounded-2xl rounded-t-2xl border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden" onClick={e => e.stopPropagation()}>
            <BuilderItemInspector item={previewItem} allItems={ITEMS} onClose={() => setPreviewItem(null)} onSelect={itemPickerSlot ? () => handleSelectItem(previewItem) : undefined} mode="preview" />
          </div>
        </div>,
        document.body
      )}

      {/* Build Item View Modal (from build slots) */}
      {viewingBuildItem && createPortal(
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setViewingBuildItem(null)}>
          <div className="bg-slate-900 w-full max-w-md max-h-[85vh] sm:rounded-2xl rounded-t-2xl border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden" onClick={e => e.stopPropagation()}>
            <BuilderItemInspector
              item={viewingBuildItem.item}
              allItems={ITEMS}
              onClose={() => setViewingBuildItem(null)}
              onChange={() => { setItemPickerSlot(viewingBuildItem.slot); setViewingBuildItem(null); }}
              onRemove={() => handleClearSlot(viewingBuildItem.slot)}
              mode="view"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};