// components/ItemsView.tsx - REDESIGNED
import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Item } from '../types';
import { useData } from '../contexts/DataContext';
import { 
  Search, Shield, Sword, Zap, ChevronDown, X, Lock, BicepsFlexed, 
  BookOpen, Heart, Activity, Droplet, Target, Skull, RotateCcw, 
  Crosshair, ArrowDownUp, Info, AlertTriangle, Sparkles, Crown,
  Flame, Snowflake, Wind, Star, Gem, Package
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS & CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

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

const parseStatValue = (val: string): number => {
    if (!val) return 0;
    const clean = val.replace(/[^0-9.-]/g, '');
    return parseFloat(clean) || 0;
};

const getStatScore = (item: Item): number => {
    return Object.values(item.stats).reduce((sum, val) => sum + parseStatValue(val), 0);
};

// Visual config for item types
const ITEM_TYPE_CONFIG: Record<string, { gradient: string; glow: string; border: string; icon: React.ReactNode; badge: string }> = {
  'Starter': { 
    gradient: 'from-purple-900/40 via-slate-900 to-purple-950/30', 
    glow: 'group-hover:shadow-purple-500/20',
    border: 'border-purple-500/40 group-hover:border-purple-400',
    icon: <Sparkles size={12} />,
    badge: 'bg-gradient-to-r from-purple-600 to-purple-400 text-white'
  },
  'Consumable': { 
    gradient: 'from-orange-900/40 via-slate-900 to-amber-950/30', 
    glow: 'group-hover:shadow-orange-500/20',
    border: 'border-orange-500/40 group-hover:border-orange-400',
    icon: <Flame size={12} />,
    badge: 'bg-gradient-to-r from-orange-600 to-amber-500 text-white'
  },
  'Relic': { 
    gradient: 'from-cyan-900/40 via-slate-900 to-teal-950/30', 
    glow: 'group-hover:shadow-cyan-500/25',
    border: 'border-cyan-500/40 group-hover:border-cyan-400',
    icon: <Gem size={12} />,
    badge: 'bg-gradient-to-r from-cyan-500 to-teal-400 text-white'
  },
  'Curio': { 
    gradient: 'from-pink-900/40 via-slate-900 to-rose-950/30', 
    glow: 'group-hover:shadow-pink-500/25',
    border: 'border-pink-500/40 group-hover:border-pink-400',
    icon: <Star size={12} />,
    badge: 'bg-gradient-to-r from-pink-500 to-rose-400 text-white'
  },
  'Map Droppable': { 
    gradient: 'from-emerald-900/40 via-slate-900 to-green-950/30', 
    glow: 'group-hover:shadow-emerald-500/25',
    border: 'border-emerald-500/40 group-hover:border-emerald-400',
    icon: <Package size={12} />,
    badge: 'bg-gradient-to-r from-emerald-500 to-green-400 text-white'
  },
  'God Specific': { 
    gradient: 'from-yellow-900/40 via-slate-900 to-amber-950/30', 
    glow: 'group-hover:shadow-yellow-500/25',
    border: 'border-yellow-400/40 group-hover:border-yellow-300',
    icon: <Crown size={12} />,
    badge: 'bg-gradient-to-r from-yellow-500 to-amber-400 text-slate-900'
  },
};

const CATEGORY_CONFIG: Record<string, { gradient: string; glow: string; border: string; icon: React.ReactNode; badge: string }> = {
  'Offense': { 
    gradient: 'from-red-900/30 via-slate-900 to-rose-950/20', 
    glow: 'group-hover:shadow-red-500/20',
    border: 'border-red-500/30 group-hover:border-red-400',
    icon: <Sword size={12} />,
    badge: 'bg-gradient-to-r from-red-600 to-rose-500 text-white'
  },
  'Defense': { 
    gradient: 'from-blue-900/30 via-slate-900 to-indigo-950/20', 
    glow: 'group-hover:shadow-blue-500/20',
    border: 'border-blue-500/30 group-hover:border-blue-400',
    icon: <Shield size={12} />,
    badge: 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white'
  },
  'Hybrid': { 
    gradient: 'from-purple-900/30 via-slate-900 to-violet-950/20', 
    glow: 'group-hover:shadow-purple-500/20',
    border: 'border-purple-500/30 group-hover:border-purple-400',
    icon: <Zap size={12} />,
    badge: 'bg-gradient-to-r from-purple-600 to-violet-500 text-white'
  },
  'Utility': { 
    gradient: 'from-green-900/30 via-slate-900 to-emerald-950/20', 
    glow: 'group-hover:shadow-green-500/20',
    border: 'border-green-500/30 group-hover:border-green-400',
    icon: <Target size={12} />,
    badge: 'bg-gradient-to-r from-green-600 to-emerald-500 text-white'
  },
};

const TIER_CONFIG: Record<number, { ring: string; badge: string; label: string }> = {
  1: { ring: 'ring-slate-500/50', badge: 'bg-slate-700 text-slate-300', label: 'I' },
  2: { ring: 'ring-blue-500/50', badge: 'bg-blue-900 text-blue-300', label: 'II' },
  3: { ring: 'ring-mythic-gold/60', badge: 'bg-gradient-to-r from-yellow-600 to-amber-500 text-white', label: 'III' },
};

const STAT_FILTERS = [
    { id: 'strength', label: 'STR', keys: ['strength', 'str'], icon: <BicepsFlexed size={14} /> },
    { id: 'intelligence', label: 'INT', keys: ['intelligence', 'int'], icon: <BookOpen size={14} /> },
    { id: 'health', label: 'HP', keys: ['health', 'hp', 'max health'], icon: <Heart size={14} /> },
    { id: 'attackspeed', label: 'AS', keys: ['attack speed', 'as'], icon: <Activity size={14} /> },
    { id: 'lifesteal', label: 'LS', keys: ['lifesteal', 'ls'], icon: <Droplet size={14} /> },
    { id: 'crit', label: 'Crit', keys: ['crit', 'critical'], icon: <Crosshair size={14} /> },
    { id: 'penetration', label: 'Pen', keys: ['pen', 'penetration'], icon: <Target size={14} /> },
    { id: 'protections', label: 'Prot', keys: ['prot', 'protection', 'armor'], icon: <Shield size={14} /> },
];

const TYPE_FILTERS = ['All', 'Tier 1', 'Tier 2', 'Tier 3', 'Starter', 'Relic', 'Curio', 'Consumable', 'Map Droppable', 'God Specific'];
const CAT_FILTERS = ['All', 'Offense', 'Defense', 'Hybrid', 'Utility'];
const SORT_OPTIONS = [
    { id: 'NameAsc', label: 'Name A-Z' },
    { id: 'NameDesc', label: 'Name Z-A' },
    { id: 'CostAsc', label: 'Cost: Low → High' },
    { id: 'CostDesc', label: 'Cost: High → Low' },
    { id: 'StatHigh', label: 'Stats: High' },
    { id: 'StatLow', label: 'Stats: Low' },
];

// ═══════════════════════════════════════════════════════════════════════════
// ITEM CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

const ItemCard: React.FC<{
  item: Item;
  isSelected: boolean;
  onSelect: () => void;
  onHover: () => void;
  onLeave: () => void;
}> = ({ item, isSelected, onSelect, onHover, onLeave }) => {
  
  // Determine visual style based on item type or category
  const config = item.type !== 'Item' 
    ? ITEM_TYPE_CONFIG[item.type] 
    : CATEGORY_CONFIG[item.category] || CATEGORY_CONFIG['Utility'];
  
  const tierConfig = item.tier ? TIER_CONFIG[item.tier] : null;
  
  // Get top 2 stats for preview
  const topStats = Object.entries(item.stats).slice(0, 2);
  
  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onSelect}
      className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 ${
        isSelected 
          ? 'ring-2 ring-mythic-gold shadow-[0_0_30px_rgba(251,191,36,0.3)] scale-[1.02]' 
          : `hover:shadow-xl ${config.glow}`
      }`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-80`} />
      
      {/* Animated border glow on hover */}
      <div className={`absolute inset-0 rounded-xl border ${config.border} transition-all duration-300`} />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-4 flex flex-col items-center text-center z-10">
        
        {/* Item Image Container */}
        <div className={`relative w-18 h-18 sm:w-20 sm:h-20 mb-3`}>
          {/* Outer glow ring */}
          <div className={`absolute inset-0 rounded-xl ${tierConfig ? tierConfig.ring : 'ring-slate-600/30'} ring-2 transition-all duration-300 group-hover:ring-4`} />
          
          {/* Image wrapper */}
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950 border border-slate-700/50 shadow-lg group-hover:shadow-2xl transition-shadow">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
            />
            
            {/* Tier badge */}
            {tierConfig && (
              <div className={`absolute top-0 right-0 px-1.5 py-0.5 text-[10px] font-black rounded-bl-lg ${tierConfig.badge} shadow-lg`}>
                T{tierConfig.label}
              </div>
            )}
            
            {/* Selected overlay */}
            {isSelected && (
              <div className="absolute inset-0 bg-mythic-gold/20 flex items-center justify-center backdrop-blur-[1px]">
                <Lock size={22} className="text-mythic-gold drop-shadow-lg animate-pulse" />
              </div>
            )}
          </div>
        </div>
        
        {/* Item Name */}
        <h4 className={`font-serif font-bold text-sm leading-tight transition-colors line-clamp-2 ${
          isSelected ? 'text-mythic-gold' : 'text-slate-100 group-hover:text-white'
        }`}>
          {item.name}
        </h4>
        
        {/* Cost & Type badges */}
        <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
          {/* Cost badge */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/80 text-yellow-400 text-xs font-mono border border-yellow-500/20 shadow-inner">
            <span className="text-yellow-500">⦿</span>
            {item.cost > 0 ? item.cost : 'Free'}
          </span>
          
          {/* Type/Category badge */}
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase shadow-lg ${config.badge}`}>
            {config.icon}
            {item.type === 'Item' ? item.category : (item.type === 'God Specific' ? 'Divine' : item.type)}
          </span>
        </div>
        
        {/* Stat preview (show on hover) */}
        {topStats.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 justify-center opacity-60 group-hover:opacity-100 transition-opacity">
            {topStats.map(([key, val]) => (
              <span key={key} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-950/60 text-slate-300 border border-slate-700/50">
                {key.replace('Max ', '').replace('.', '')}: <span className="text-green-400 font-mono">{val}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ITEM INSPECTOR PANEL
// ═══════════════════════════════════════════════════════════════════════════

const ItemInspector: React.FC<{ item: Item }> = ({ item }) => {
    const { items: ITEMS } = useData();
    const components = getComponents(item, (ITEMS || []));
    const upgrades = getUpgrades(item, (ITEMS || []));
    const roots = findRoots(item, (ITEMS || []));
    
    const config = item.type !== 'Item' 
      ? ITEM_TYPE_CONFIG[item.type] 
      : CATEGORY_CONFIG[item.category] || CATEGORY_CONFIG['Utility'];
    
    const tierConfig = item.tier ? TIER_CONFIG[item.tier] : null;

    return (
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {/* Header with image */}
            <div className={`relative p-6 bg-gradient-to-br ${config.gradient}`}>
                <div className="flex items-start gap-4">
                    <div className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${config.border.replace('group-hover:', '')} shadow-xl flex-shrink-0`}>
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-serif font-bold text-xl text-white leading-tight">{item.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${config.badge}`}>
                                {config.icon}
                                {item.type === 'Item' ? item.category : item.type}
                            </span>
                            {tierConfig && (
                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${tierConfig.badge}`}>
                                    Tier {tierConfig.label}
                                </span>
                            )}
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/80 text-yellow-400 font-mono text-lg border border-yellow-500/30">
                            <span className="text-yellow-500">⦿</span>
                            {item.cost > 0 ? `${item.cost}g` : 'Free'}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {/* Stats */}
                {Object.keys(item.stats).length > 0 && (
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                            <Zap size={10} /> Stats
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(item.stats).map(([key, val]) => (
                                <div key={key} className="flex justify-between text-xs bg-slate-900/50 rounded px-2 py-1.5">
                                    <span className="text-slate-400">{key}</span>
                                    <span className="text-green-400 font-mono font-bold">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Passive */}
                {item.passive && (
                    <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-lg p-3 border border-amber-500/20">
                        <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                            <Sparkles size={10} /> Passive
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{item.passive}</p>
                    </div>
                )}

                {/* Build Path */}
                {(components.length > 0 || upgrades.length > 0) && (
                    <div className="space-y-3">
                        {/* Components */}
                        {components.length > 0 && (
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Builds From</h4>
                                <div className="flex flex-wrap gap-2">
                                    {components.map(c => (
                                        <div key={c.id} className="flex items-center gap-2 bg-slate-800/70 rounded-lg px-2 py-1.5 border border-slate-700/50">
                                            <img src={c.image} alt={c.name} className="w-8 h-8 rounded" />
                                            <div>
                                                <div className="text-xs text-slate-200 font-medium">{c.name}</div>
                                                <div className="text-[10px] text-yellow-500 font-mono">{c.cost}g</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Upgrades */}
                        {upgrades.length > 0 && (
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Builds Into</h4>
                                <div className="flex flex-wrap gap-2">
                                    {upgrades.map(u => (
                                        <div key={u.id} className="flex items-center gap-2 bg-slate-800/70 rounded-lg px-2 py-1.5 border border-mythic-gold/20">
                                            <img src={u.image} alt={u.name} className="w-8 h-8 rounded" />
                                            <div>
                                                <div className="text-xs text-slate-200 font-medium">{u.name}</div>
                                                <div className="text-[10px] text-yellow-500 font-mono">{u.cost}g</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN ITEMS VIEW
// ═══════════════════════════════════════════════════════════════════════════

export const ItemsView: React.FC = () => {
    const { items: ITEMS, isLoading, error } = useData();
    
    const [search, setSearch] = useState('');
    const [activeType, setActiveType] = useState('All');
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeStats, setActiveStats] = useState<string[]>([]);
    const [sortMethod, setSortMethod] = useState('NameAsc');
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    
    const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const activeItem = selectedItem || hoveredItem;

    const toggleStat = (id: string) => {
        setActiveStats(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };

    const filteredItems = useMemo(() => {
        return (ITEMS || []).filter(item => {
            let matchesType = true;
            if (activeType !== 'All') {
                if (activeType === 'Tier 1') matchesType = item.tier === 1;
                else if (activeType === 'Tier 2') matchesType = item.tier === 2;
                else if (activeType === 'Tier 3') matchesType = item.tier === 3;
                else matchesType = item.type === activeType;
            }
            let matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            let matchesStats = activeStats.length === 0 || activeStats.every(statId => {
                const filter = STAT_FILTERS.find(f => f.id === statId);
                if (!filter) return false;
                return Object.keys(item.stats).some(itemKey => 
                    filter.keys.some(filterKey => itemKey.toLowerCase().includes(filterKey.toLowerCase()))
                );
            });
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
    }, [ITEMS, activeType, activeCategory, activeStats, sortMethod, search]);

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                <AlertTriangle size={48} className="text-red-500 mx-auto mb-4" />
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-[1800px] mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="font-serif text-4xl font-bold bg-gradient-to-r from-mythic-gold via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                    Item Arsenal
                </h1>
                <p className="text-slate-500 mt-2">Discover and explore all items in SMITE 2</p>
            </div>

            <div className="flex flex-col xl:flex-row gap-6">
                {/* Left Sidebar - Filters */}
                <div className="w-full xl:w-64 space-y-4 shrink-0">
                    {/* Search */}
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-mythic-gold focus:ring-1 focus:ring-mythic-gold/30 transition-all"
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                            className="w-full flex items-center justify-between bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-sm text-slate-300 hover:border-slate-600 transition-all"
                        >
                            <span className="flex items-center gap-2">
                                <ArrowDownUp size={14} className="text-mythic-gold" />
                                {SORT_OPTIONS.find(s => s.id === sortMethod)?.label}
                            </span>
                            <ChevronDown size={14} className={`transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showSortDropdown && (
                            <div className="absolute z-20 w-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden">
                                {SORT_OPTIONS.map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={() => { setSortMethod(opt.id); setShowSortDropdown(false); }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                            sortMethod === opt.id 
                                                ? 'bg-mythic-gold/20 text-mythic-gold' 
                                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                        }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Type Filter */}
                    <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-3">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Item Type</h4>
                        <div className="flex flex-wrap gap-1">
                            {TYPE_FILTERS.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setActiveType(type)}
                                    className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                                        activeType === type
                                            ? 'bg-mythic-gold text-slate-900'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-3">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Category</h4>
                        <div className="flex flex-wrap gap-1">
                            {CAT_FILTERS.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                                        activeCategory === cat
                                            ? 'bg-mythic-gold text-slate-900'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stats Filter */}
                    <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-3">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Has Stats</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {STAT_FILTERS.map(stat => (
                                <button
                                    key={stat.id}
                                    onClick={() => toggleStat(stat.id)}
                                    className={`flex flex-col items-center justify-center p-2 rounded-lg text-[10px] font-bold transition-all ${
                                        activeStats.includes(stat.id)
                                            ? 'bg-mythic-gold/20 border border-mythic-gold text-mythic-gold shadow-[0_0_10px_rgba(251,191,36,0.2)]'
                                            : 'bg-slate-800 border border-slate-700 text-slate-500 hover:border-slate-600 hover:text-slate-300'
                                    }`}
                                >
                                    <div className="mb-1">{stat.icon}</div>
                                    {stat.label}
                                </button>
                            ))}
                        </div>
                        {activeStats.length > 0 && (
                            <button
                                onClick={() => setActiveStats([])}
                                className="w-full mt-3 text-[10px] text-red-400 hover:text-red-300 flex items-center justify-center gap-1"
                            >
                                <X size={12} /> Clear Stat Filters
                            </button>
                        )}
                    </div>

                    {/* Results count */}
                    <div className="text-center text-xs text-slate-500">
                        Showing <span className="text-mythic-gold font-bold">{filteredItems.length}</span> items
                    </div>
                </div>

                {/* Main Grid */}
                <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                        {filteredItems.map(item => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                isSelected={selectedItem?.id === item.id}
                                onSelect={() => setSelectedItem(prev => prev?.id === item.id ? null : item)}
                                onHover={() => setHoveredItem(item)}
                                onLeave={() => setHoveredItem(null)}
                            />
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center mx-auto mb-4">
                                <Search size={32} className="text-slate-600" />
                            </div>
                            <p className="text-slate-500 mb-4">No items found matching your criteria.</p>
                            <button
                                onClick={() => { setActiveType('All'); setActiveCategory('All'); setActiveStats([]); setSearch(''); }}
                                className="text-mythic-gold hover:text-yellow-400 flex items-center gap-2 mx-auto transition-colors"
                            >
                                <RotateCcw size={14} /> Reset All Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Inspector Panel (Desktop) */}
                <div className="hidden xl:block w-80 shrink-0">
                    <div className="sticky top-24 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden min-h-[500px] h-[calc(100vh-8rem)]">
                        {selectedItem && (
                            <div className="absolute top-3 right-3 z-50 flex gap-2">
                                <div className="px-2 py-1 bg-mythic-gold/20 text-mythic-gold text-[10px] font-bold uppercase rounded-full border border-mythic-gold/30 flex items-center gap-1">
                                    <Lock size={10} /> Locked
                                </div>
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="bg-slate-800 hover:bg-red-500/80 text-slate-400 hover:text-white p-1 rounded-full border border-slate-600 transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        )}

                        {activeItem ? (
                            <ItemInspector item={activeItem} />
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-600 p-8 text-center space-y-4">
                                <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center animate-pulse">
                                    <Info size={32} />
                                </div>
                                <p className="text-lg font-serif">Select an Item</p>
                                <p className="text-sm text-slate-500">Click an item to lock details, or hover to preview stats and build paths.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Modal */}
            {selectedItem && createPortal(
                <div className="xl:hidden fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-slate-900 w-full max-w-lg max-h-[90vh] sm:rounded-2xl rounded-t-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-20 bg-black/40 p-2 rounded-full"
                        >
                            <X size={20} />
                        </button>
                        <ItemInspector item={selectedItem} />
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};