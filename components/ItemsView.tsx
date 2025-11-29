
import React, { useState } from 'react';
import { ITEMS } from '../constants';
import { Item } from '../types';
import { Search, Shield, Sword, Zap, ChevronDown, X, Lock, BicepsFlexed, BookOpen, Heart, Activity, Droplet, Target, Skull, RotateCcw, Crosshair, ArrowDownUp, Info } from 'lucide-react';

// Helper to get component items (buildsFrom)
const getComponents = (item: Item) => {
    if (!item.buildsFrom) return [];
    // Map each ID in buildsFrom to the item object to preserve duplicates
    return item.buildsFrom.map(id => ITEMS.find(i => i.id === id)).filter(Boolean) as Item[];
};

// Helper to find upgrade items (items that build FROM this item)
const getUpgrades = (item: Item) => {
    return ITEMS.filter(i => i.buildsFrom?.includes(item.id));
};

// Recursively find the "Root" items (Final Upgrades) for a given item
const findRoots = (item: Item, visited = new Set<string>()): Item[] => {
    if (visited.has(item.id)) return [];
    visited.add(item.id);

    const upgrades = getUpgrades(item);
    if (upgrades.length === 0) {
        return [item];
    }
    return upgrades.flatMap(u => findRoots(u, new Set(visited)));
};

const parseStatValue = (val: string): number => {
    if (!val) return 0;
    const clean = val.replace(/[^0-9.-]/g, '');
    const num = parseFloat(clean);
    return isNaN(num) ? 0 : num;
};

// --- Professional Tree Connector ---
const TreeConnector = ({ childCount }: { childCount: number }) => {
    if (childCount === 0) return null;
    return (
        <div className="w-full h-4 relative">
            <svg className="w-full h-full absolute top-0 left-0 overflow-visible" preserveAspectRatio="none">
                {/* Vertical line from parent */}
                <line x1="50%" y1="0" x2="50%" y2="50%" stroke="#475569" strokeWidth="1.5" />
                
                {/* Horizontal bar covering children */}
                {childCount > 1 && (
                    <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#475569" strokeWidth="1.5" />
                )}
                
                {/* Vertical lines to children are handled by the children themselves visually or we assume strictly centered alignment */}
            </svg>
        </div>
    );
};

const STAT_FILTERS = [
    { id: 'Strength', label: 'Strength', icon: <BicepsFlexed size={14} />, keys: ['Strength', 'Physical Power'] },
    { id: 'Intelligence', label: 'Intelligence', icon: <BookOpen size={14} />, keys: ['Intelligence', 'Magical Power'] },
    { id: 'Attack Speed', label: 'Atk Speed', icon: <Zap size={14} />, keys: ['Attack Speed'] },
    { id: 'Crit', label: 'Crit', icon: <Target size={14} />, keys: ['Crit'] },
    { id: 'Pen', label: 'Pen', icon: <Crosshair size={14} />, keys: ['Penetration'] },
    { id: 'Lifesteal', label: 'Lifesteal', icon: <Heart size={14} className="text-red-400" />, keys: ['Lifesteal'] },
    { id: 'Cooldown', label: 'CDR', icon: <RotateCcw size={14} />, keys: ['Cooldown'] },
    { id: 'Max Health', label: 'Health', icon: <Heart size={14} className="text-green-500" />, keys: ['Max Health'] },
    { id: 'Max Mana', label: 'Mana', icon: <Droplet size={14} className="text-blue-500" />, keys: ['Max Mana'] },
    { id: 'HP5', label: 'HP5', icon: <Activity size={14} className="text-green-400" />, keys: ['HP5', 'Health Regen'] },
    { id: 'MP5', label: 'MP5', icon: <Activity size={14} className="text-blue-400" />, keys: ['MP5', 'Mana Regen'] },
    { id: 'Physical Protection', label: 'Phys Prot', icon: <Shield size={14} />, keys: ['Phys'] },
    { id: 'Magical Protection', label: 'Mag Prot', icon: <Shield size={14} className="text-purple-400" />, keys: ['Mag'] },
];

type SortOption = 'NameAsc' | 'NameDesc' | 'CostAsc' | 'CostDesc' | 'StatHigh' | 'StatLow';

export const ItemsView: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('All');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStats, setActiveStats] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [sortMethod, setSortMethod] = useState<SortOption>('NameAsc');
  
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);

  const activeItem = selectedItem || hoveredItem;

  const toggleStat = (stat: string) => {
      setActiveStats(prev => 
          prev.includes(stat) ? prev.filter(s => s !== stat) : [...prev, stat]
      );
  };

  const getStatScore = (item: Item) => {
      let score = 0;
      activeStats.forEach(statId => {
          const filter = STAT_FILTERS.find(f => f.id === statId);
          if (filter) {
              Object.entries(item.stats).forEach(([key, val]) => {
                  if (filter.keys.some(k => key.toLowerCase().includes(k.toLowerCase()))) {
                      score += parseStatValue(val);
                  }
              });
          }
      });
      return score;
  };

  const filteredItems = ITEMS.filter(item => {
    // 1. Filter by Type
    let matchesType = true;
    if (activeType !== 'All') {
        if (activeType === 'Tier 1') matchesType = item.tier === 1;
        else if (activeType === 'Tier 2') matchesType = item.tier === 2;
        else if (activeType === 'Tier 3') matchesType = item.tier === 3;
        else matchesType = item.type === activeType;
    }

    // 2. Filter by Category
    let matchesCategory = true;
    if (activeCategory !== 'All') {
        matchesCategory = item.category === activeCategory;
    }

    // 3. Filter by Stats
    let matchesStats = true;
    if (activeStats.length > 0) {
        matchesStats = activeStats.every(statId => {
            const filter = STAT_FILTERS.find(f => f.id === statId);
            if (!filter) return false;
            return Object.keys(item.stats).some(itemKey => 
                filter.keys.some(filterKey => itemKey.toLowerCase().includes(filterKey.toLowerCase()))
            );
        });
    }

    // 4. Search
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchesType && matchesCategory && matchesStats && matchesSearch;
  }).sort((a, b) => {
      switch (sortMethod) {
          case 'NameAsc': return a.name.localeCompare(b.name);
          case 'NameDesc': return b.name.localeCompare(a.name);
          case 'CostAsc': return a.cost - b.cost;
          case 'CostDesc': return b.cost - a.cost;
          case 'StatHigh': return getStatScore(b) - getStatScore(a);
          case 'StatLow': return getStatScore(a) - getStatScore(b);
          default: return 0;
      }
  });

  const renderRecursiveNode = (item: Item, selectedId: string | undefined, isRoot = false) => {
      const components = getComponents(item);
      const isSelected = item.id === selectedId;

      return (
          <div className="flex flex-col items-center">
              {/* Connector from Parent (Visual only, implemented via padding/pseudo elements in strict CSS trees, but here handled by layout) */}
              {!isRoot && (
                  <div className="h-4 w-px bg-slate-600 mb-0.5"></div>
              )}

              {/* Node Card */}
              <div 
                onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all border relative z-10 group ${
                    isSelected 
                    ? 'bg-slate-800 border-mythic-gold shadow-[0_0_15px_rgba(251,191,36,0.3)] scale-105 ring-1 ring-mythic-gold' 
                    : 'bg-slate-900 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
                <div className="w-10 h-10 bg-black rounded border border-slate-600 overflow-hidden mb-1 relative shadow-md">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    {item.tier && <div className="absolute top-0 right-0 bg-black/60 px-1 rounded-bl text-[8px] text-white">T{item.tier}</div>}
                </div>
                <span className={`text-[9px] font-bold text-center leading-tight max-w-[80px] ${isSelected ? 'text-mythic-gold' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {item.name}
                </span>
                <span className="text-[8px] text-slate-500 font-mono mt-0.5">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
              </div>

              {/* Connector to Children */}
              {components.length > 0 && (
                  <>
                    <div className="h-4 w-px bg-slate-600"></div>
                    {components.length > 1 && (
                        <div className="w-full h-px bg-slate-600" style={{ width: `calc(100% - ${100/components.length}%)` }}></div>
                    )}
                    <div className="flex gap-4 items-start pt-0.5">
                        {components.map((c, i) => (
                            <div key={`${c.id}-${i}`} className="flex flex-col items-center">
                                {renderRecursiveNode(c, selectedId)}
                            </div>
                        ))}
                    </div>
                  </>
              )}
          </div>
      );
  };

  const ItemInspector = ({ item }: { item: Item }) => {
    // Find all "roots" (final upgrades) for this item to build the tree top-down
    const roots = (item.type === 'Item' || item.type === 'Starter') ? findRoots(item) : [item];
    
    // De-duplicate roots (in case of complex upgrade paths, though unlikely in Smite)
    const uniqueRoots = Array.from(new Set(roots.map(r => r.id))).map(id => roots.find(r => r.id === id)!);

    return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col">
        <div className="p-5 border-b border-slate-700 bg-slate-800/50 flex gap-4 items-center rounded-t-xl">
            <div className="w-20 h-20 bg-slate-900 rounded-lg border border-slate-600 overflow-hidden shadow-lg shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div>
            <h2 className="text-xl font-serif font-bold text-mythic-gold leading-tight">{item.name}</h2>
            <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-lg text-yellow-500 font-mono font-bold">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
                <span className="text-[10px] uppercase bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">
                    {item.type === 'Item' ? `Tier ${item.tier}` : item.type}
                </span>
                {item.type === 'God Specific' && (
                    <span className="text-[10px] uppercase bg-mythic-900/50 px-2 py-0.5 rounded text-mythic-gold border border-mythic-gold/30">
                        {/* @ts-ignore */}
                        {item.god} Only
                    </span>
                )}
            </div>
            </div>
        </div>

        <div className="p-5 overflow-y-auto custom-scrollbar flex-1">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-y-2 mb-6">
                {Object.entries(item.stats).map(([label, value]) => (
                <div key={label} className="flex justify-between items-center text-sm border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-slate-100 font-semibold">{value}</span>
                </div>
                ))}
            </div>

            {/* Passive */}
            {item.passive && (
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 mb-6">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">Passive Effect</span>
                <p className="text-sm text-slate-300 italic leading-relaxed">{item.passive}</p>
                </div>
            )}

            {/* Professional Top-Down Tree Visualization */}
            {(item.type === 'Item' || item.type === 'Starter') && (
                <div className="mt-6 pt-6 border-t border-slate-800">
                    <h3 className="text-xs uppercase font-bold text-slate-500 mb-6 tracking-widest text-center flex items-center justify-center gap-2">
                        <Info size={12} /> Build Path
                    </h3>
                    
                    <div className="flex flex-col gap-8 pb-8">
                        {uniqueRoots.map((root) => (
                            <div key={root.id} className="flex justify-center overflow-x-auto">
                                {renderRecursiveNode(root, item.id, true)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Column: Filters (Desktop Sticky) */}
        <div className="w-full lg:w-64 shrink-0 bg-slate-900 border border-slate-800 rounded-xl p-4 lg:sticky lg:top-24 h-auto lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto custom-scrollbar">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Search size={14} /> Filter Shop
            </h3>
            
            <div className="mb-4 space-y-2">
               <input 
                   type="text" 
                   placeholder="Search items..." 
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-3 pr-3 text-xs text-slate-200 focus:outline-none focus:border-mythic-gold"
               />
               
               {/* Sort Control */}
               <div className="relative">
                   <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                       <ArrowDownUp size={12} />
                   </div>
                   <select 
                       value={sortMethod} 
                       onChange={(e) => setSortMethod(e.target.value as SortOption)}
                       className="w-full bg-slate-950 border border-slate-700 rounded-lg py-1.5 pl-8 pr-2 text-xs text-slate-300 focus:outline-none focus:border-mythic-gold appearance-none cursor-pointer"
                   >
                       <option value="NameAsc">Name (A-Z)</option>
                       <option value="NameDesc">Name (Z-A)</option>
                       <option value="CostAsc">Price (Low-High)</option>
                       <option value="CostDesc">Price (High-Low)</option>
                       {activeStats.length > 0 && (
                           <>
                               <option disabled>──────────</option>
                               <option value="StatHigh">Stat Value (High-Low)</option>
                               <option value="StatLow">Stat Value (Low-High)</option>
                           </>
                       )}
                   </select>
                   <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
               </div>
            </div>

            {/* Category */}
            <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Category</h4>
                <div className="space-y-1">
                    {['All', 'Offense', 'Defense', 'Hybrid'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center justify-between ${
                                activeCategory === cat ? 'bg-mythic-gold text-slate-900' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                            }`}
                        >
                            {cat}
                            {activeCategory === cat && <Shield size={12} className={cat === 'Offense' ? 'hidden' : ''} />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Item Type */}
            <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Item Type</h4>
                <div className="space-y-1">
                    {['All', 'Starter', 'Tier 1', 'Tier 2', 'Tier 3', 'Relic', 'Curio', 'Map Droppable', 'Consumable', 'God Specific'].map(type => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                                activeType === type ? 'bg-slate-700 text-white border-l-2 border-mythic-gold' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Filter */}
            <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Has Stats</h4>
                <div className="grid grid-cols-2 gap-2">
                    {STAT_FILTERS.map(stat => (
                        <button
                            key={stat.id}
                            onClick={() => toggleStat(stat.id)}
                            className={`flex flex-col items-center justify-center p-2 rounded border text-[10px] font-bold transition-all ${
                                activeStats.includes(stat.id) 
                                ? 'bg-slate-800 border-mythic-gold text-mythic-gold shadow-[0_0_10px_rgba(251,191,36,0.1)]' 
                                : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300'
                            }`}
                            title={stat.label}
                        >
                            <div className="mb-1">{stat.icon}</div>
                            {stat.label}
                        </button>
                    ))}
                </div>
                {activeStats.length > 0 && (
                    <button 
                        onClick={() => setActiveStats([])}
                        className="w-full mt-4 text-[10px] text-red-400 hover:text-red-300 flex items-center justify-center gap-1"
                    >
                        <X size={12} /> Clear Stat Filters
                    </button>
                )}
            </div>
        </div>

        {/* Middle Column: Grid */}
        <div className="flex-1 w-full min-h-[500px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredItems.map(item => (
                <div 
                    key={item.id} 
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => setSelectedItem(prev => prev?.id === item.id ? null : item)}
                    className={`bg-slate-800 p-4 rounded-xl border transition-all cursor-pointer relative ${
                        (selectedItem?.id === item.id) 
                        ? 'border-mythic-gold bg-slate-800/80 shadow-[0_0_15px_rgba(251,191,36,0.1)] ring-1 ring-mythic-gold'
                        : 'border-slate-700 hover:border-slate-500 hover:bg-slate-800/80'
                    }`}
                >
                    <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-lg overflow-hidden border border-slate-600 mb-3 shadow-lg transition-all">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        {item.tier && (
                            <div className="absolute top-0 right-0 bg-slate-900/90 px-1.5 py-0.5 rounded-bl text-[9px] font-bold text-slate-300 border-l border-b border-slate-700">
                                T{item.tier}
                            </div>
                        )}
                        {/* Lock Icon if Selected */}
                        {selectedItem?.id === item.id && (
                            <div className="absolute inset-0 bg-mythic-gold/10 flex items-center justify-center">
                                <Lock size={20} className="text-mythic-gold drop-shadow-md" />
                            </div>
                        )}
                    </div>
                    
                    <h4 className={`font-serif font-bold text-sm transition-colors ${selectedItem?.id === item.id ? 'text-mythic-gold' : 'text-slate-200'}`}>
                        {item.name}
                    </h4>
                    
                    <div className="flex items-center gap-2 mt-2 justify-center flex-wrap">
                        <span className="text-xs bg-slate-950 px-2 py-0.5 rounded text-yellow-500 font-mono">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded border uppercase ${
                            item.type === 'Starter' ? 'border-purple-500 text-purple-400' :
                            item.type === 'Consumable' ? 'border-orange-500 text-orange-400' :
                            item.type === 'Relic' ? 'border-cyan-500 text-cyan-400' :
                            item.type === 'Curio' ? 'border-pink-500 text-pink-400' :
                            item.type === 'Map Droppable' ? 'border-emerald-500 text-emerald-400' :
                            item.type === 'God Specific' ? 'border-yellow-200 text-yellow-100' :
                            item.category === 'Offense' ? 'border-red-900 text-red-400' :
                            item.category === 'Defense' ? 'border-blue-900 text-blue-400' :
                            item.category === 'Hybrid' ? 'border-purple-900 text-purple-400' :
                            'border-green-900 text-green-400'
                        }`}>
                            {item.type === 'Item' ? item.category : (item.type === 'God Specific' ? 'God Only' : item.type)}
                        </span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {filteredItems.length === 0 && (
                <div className="text-center py-20 text-slate-500">
                    <p>No items found matching your criteria.</p>
                    <button 
                        onClick={() => { setActiveType('All'); setActiveCategory('All'); setActiveStats([]); setSearch(''); }}
                        className="mt-4 text-mythic-gold hover:underline flex items-center gap-2 mx-auto"
                    >
                        <RotateCcw size={14} /> Reset All Filters
                    </button>
                </div>
            )}
        </div>

        {/* Right Column: Inspector Panel (Desktop Only) */}
        <div className="hidden xl:block w-80 sticky top-24 shrink-0">
             <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden min-h-[500px] h-[calc(100vh-8rem)] relative">
                 {/* Selection Lock Controls */}
                 {selectedItem && (
                    <div className="absolute top-3 right-3 z-50 flex gap-2">
                        <div className="px-2 py-1 bg-mythic-gold/20 text-mythic-gold text-[10px] font-bold uppercase rounded border border-mythic-gold/30 flex items-center gap-1">
                             <Lock size={10} /> Locked
                        </div>
                        <button 
                            onClick={() => setSelectedItem(null)}
                            className="bg-slate-800 hover:bg-red-500/80 text-slate-400 hover:text-white p-1 rounded-full border border-slate-600 transition-colors shadow-lg"
                            title="Clear Selection (Enable Hover)"
                        >
                            <X size={14} />
                        </button>
                    </div>
                 )}

                 {activeItem ? (
                     <ItemInspector item={activeItem} />
                 ) : (
                     <div className="h-full flex flex-col items-center justify-center text-slate-600 p-8 text-center space-y-4">
                         <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center">
                             <Info size={32} />
                         </div>
                         <p className="text-lg font-serif">Select an Item</p>
                         <p className="text-sm">Click an item to lock details, or hover to preview stats and build paths.</p>
                     </div>
                 )}
             </div>
        </div>
      </div>

      {/* Modal for Mobile (or if selected on Mobile) */}
      {selectedItem && (
        <div className="xl:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-slate-900 w-full max-w-lg max-h-[90vh] sm:rounded-2xl rounded-t-2xl border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden">
              <button 
                 onClick={() => setSelectedItem(null)}
                 className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-20 bg-black/20 p-1 rounded-full"
              >
                 <X size={24} />
              </button>
              
              <ItemInspector item={selectedItem} />
           </div>
        </div>
      )}
    </div>
  );
};
