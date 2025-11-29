
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { God, Item, GodStats, RecommendedBuild, DamageType } from '../types';
import { useData } from '../contexts/DataContext';
import { Hexagon, Plus, X, Search, Heart, BicepsFlexed, BookOpen, Shield, Move, Zap, Star, Activity, Target, Skull, Layers, Droplet, RotateCcw, Info, AlertTriangle } from 'lucide-react';

const SLOT_TYPES = [
  { id: 'starter', label: 'Starter', type: 'Starter', icon: <Hexagon size={16} /> },
  { id: 'item1', label: 'Item 1', type: 'Item', icon: <div className="w-3 h-3 rounded-sm bg-slate-500" /> },
  { id: 'item2', label: 'Item 2', type: 'Item', icon: <div className="w-3 h-3 rounded-sm bg-slate-500" /> },
  { id: 'item3', label: 'Item 3', type: 'Item', icon: <div className="w-3 h-3 rounded-sm bg-slate-500" /> },
  { id: 'item4', label: 'Item 4', type: 'Item', icon: <div className="w-3 h-3 rounded-sm bg-slate-500" /> },
  { id: 'item5', label: 'Item 5', type: 'Item', icon: <div className="w-3 h-3 rounded-sm bg-slate-500" /> },
  { id: 'item6', label: 'Item 6', type: 'Item', icon: <div className="w-3 h-3 rounded-sm bg-slate-500" /> },
  { id: 'relic', label: 'Relic', type: 'Relic', icon: <div className="w-3 h-3 rounded-full border border-slate-500" /> },
];

// --- TREE VISUALIZATION HELPERS ---
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
    if (upgrades.length === 0) {
        return [item];
    }
    return upgrades.flatMap(u => findRoots(u, allItems, new Set(visited)));
};

export const BuilderView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [level, setLevel] = useState(1);
  const [build, setBuild] = useState<Record<string, Item | null>>({
    starter: null,
    item1: null, item2: null, item3: null, item4: null, item5: null, item6: null,
    relic: null
  });

  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);
  const [itemSearch, setItemSearch] = useState('');
  
  // Hover states for inspector
  const [hoveredSlotItem, setHoveredSlotItem] = useState<Item | null>(null);
  const [hoveredPickerItem, setHoveredPickerItem] = useState<Item | null>(null);

  const renderRecursiveNode = (item: Item, selectedId: string | undefined, isRoot = false) => {
    const components = getComponents(item, ITEMS);
    const isSelected = item.id === selectedId;

    return (
        <div className="flex flex-col items-center">
            {/* Connector from Parent */}
            {!isRoot && (
                <div className="h-4 w-px bg-slate-600 mb-0.5"></div>
            )}

            {/* Node Card */}
            <div 
              className={`flex flex-col items-center p-1.5 rounded-lg border relative z-10 group transition-all ${
                  isSelected 
                  ? 'bg-slate-800 border-mythic-gold shadow-[0_0_10px_rgba(251,191,36,0.2)]' 
                  : 'bg-slate-900 border-slate-700'
              }`}
            >
              <div className="w-10 h-10 bg-black rounded border border-slate-600 overflow-hidden mb-1 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  {item.tier && <div className="absolute top-0 right-0 bg-black/60 px-1 rounded-bl text-[8px] text-white">T{item.tier}</div>}
              </div>
              <span className={`text-[9px] font-bold text-center leading-tight max-w-[70px] ${isSelected ? 'text-mythic-gold' : 'text-slate-400'}`}>
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

  const ItemInspector: React.FC<{ item: Item }> = ({ item }) => {
    const roots = (item.type === 'Item' || item.type === 'Starter') ? findRoots(item, ITEMS) : [item];
    const uniqueRoots = Array.from(new Set(roots.map(r => r.id))).map(id => roots.find(r => r.id === id)!);

    return (
    <div className="animate-in fade-in duration-300 h-full flex flex-col bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-slate-700 bg-slate-800/50 flex gap-4 items-center">
            <div className="w-16 h-16 bg-slate-900 rounded-lg border border-slate-600 overflow-hidden shadow-lg shrink-0">
               <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div>
               <h2 className="text-lg font-serif font-bold text-mythic-gold leading-tight">{item.name}</h2>
               <div className="flex items-center gap-2 mt-1">
                   <span className="text-sm text-yellow-500 font-mono font-bold">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
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
            <div className="grid grid-cols-1 gap-y-2 mb-6">
                {Object.entries(item.stats).map(([label, value]) => (
                <div key={label} className="flex justify-between items-center text-xs border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-slate-100 font-semibold">{value}</span>
                </div>
                ))}
            </div>

            {item.passive && (
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 mb-6">
                   <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1 block">Passive Effect</span>
                   <p className="text-xs text-slate-300 italic leading-relaxed">{item.passive}</p>
                </div>
            )}

            {/* Professional Tree Visualization */}
            {(item.type === 'Item' || item.type === 'Starter') && (
                <div className="mt-4 pt-4 border-t border-slate-800">
                    <h3 className="text-[10px] uppercase font-bold text-slate-500 mb-4 tracking-widest text-center flex items-center justify-center gap-2">
                        <Info size={12} /> Build Path
                    </h3>
                    
                    <div className="flex flex-col gap-8 pb-4">
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

  const getBaseGodStats = (): GodStats | null => {
    if (!selectedGod) return null;
    const index = Math.max(0, Math.min(19, level - 1));
    return { ...selectedGod.statsByLevel[index] };
  };

  const parseStatValue = (val: string): number => {
    const clean = val.replace(/[^0-9.-]/g, '');
    const num = parseFloat(clean);
    return isNaN(num) ? 0 : num;
  };

  const getFullStats = () => {
    const stats = getBaseGodStats();
    if (!stats || !selectedGod) return null;

    const equippedItems = Object.values(build).filter(i => i !== null) as Item[];

    equippedItems.forEach(item => {
        Object.entries(item.stats).forEach(([key, valStr]) => {
            const k = key.toLowerCase();
            let effectiveValStr = valStr;

            if (k.includes('adaptive')) {
                const parts = valStr.split('|');
                if (parts.length === 2) {
                    if (selectedGod.damageType === DamageType.Physical) {
                        effectiveValStr = parts[0]; 
                        stats.strength += parseStatValue(parts[0]);
                        return;
                    } else {
                        effectiveValStr = parts[1];
                        stats.intelligence += parseStatValue(parts[1]);
                        return;
                    }
                }
            }

            const val = parseStatValue(effectiveValStr);

            if (k.includes('strength') || (k.includes('power') && selectedGod.damageType === DamageType.Physical)) {
                stats.strength += val;
            } else if (k.includes('intelligence') || (k.includes('power') && selectedGod.damageType === DamageType.Magical)) {
                stats.intelligence += val;
            } else if (k.includes('health') && !k.includes('regen')) {
                stats.maxHealth += val;
            } else if (k.includes('mana') && !k.includes('regen')) {
                stats.maxMana += val;
            } else if (k.includes('phys') && k.includes('prot')) {
                stats.physicalProtection += val;
            } else if (k.includes('mag') && k.includes('prot')) {
                stats.magicalProtection += val;
            } else if (k.includes('attack speed')) {
                if (valStr.includes('%')) {
                    // Smite 2 treats attack speed as additive percentage mostly in display
                    stats.attackSpeed += val;
                } else {
                    stats.attackSpeed += val; 
                }
            } else if (k.includes('cooldown')) {
                stats.cooldownRate = Math.min(40, stats.cooldownRate + val);
            } else if (k.includes('crit chance')) {
                stats.critChance += val;
            } else if (k.includes('crit damage')) {
                if (valStr.includes('%')) {
                   stats.critDamage += (val / 100);
                } else {
                   stats.critDamage += val;
                }
            } else if (k.includes('lifesteal')) {
                stats.lifesteal += val;
            } else if (k.includes('penetration')) {
                stats.penetration += val;
            } else if (k.includes('move')) {
                if (valStr.includes('%')) {
                     stats.movementSpeed = stats.movementSpeed * (1 + val/100);
                } else {
                     stats.movementSpeed += val;
                }
            } else if (k.includes('mp5')) {
                stats.manaRegen += val;
            } else if (k.includes('hp5')) {
                stats.healthRegen += val;
            }
        });
    });

    return stats;
  };

  const currentStats = getFullStats();
  const baseStats = getBaseGodStats();

  const getBonus = (key: keyof GodStats) => {
    if (!currentStats || !baseStats) return 0;
    return currentStats[key] - baseStats[key];
  };

  const handleSlotClick = (slotId: string) => {
    setActiveSlotId(slotId);
    setItemSearch('');
    setIsItemModalOpen(true);
    setHoveredPickerItem(null);
  };

  const selectItem = (item: Item) => {
    if (activeSlotId) {
      setBuild(prev => ({ ...prev, [activeSlotId]: item }));
      setIsItemModalOpen(false);
      setActiveSlotId(null);
      setHoveredSlotItem(null); // Clear hover since mouse might move
    }
  };

  const removeItem = (slotId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBuild(prev => ({ ...prev, [slotId]: null }));
    setHoveredSlotItem(null);
  };

  const loadRecommendedBuild = (rec: RecommendedBuild) => {
    if (!rec) return;
    const starter = ITEMS.find(i => i.id === rec.starterId) || null;
    const relic = ITEMS.find(i => i.id === rec.relicId) || null;
    const items = rec.itemIds.map(id => ITEMS.find(i => i.id === id) || null);
    setBuild({
      starter,
      item1: items[0], item2: items[1], item3: items[2],
      item4: items[3], item5: items[4], item6: items[5],
      relic
    });
  };

  const getFilteredItemsForSlot = () => {
    if (!activeSlotId) return [];
    const slotType = SLOT_TYPES.find(s => s.id === activeSlotId)?.type;
    return ITEMS.filter(item => {
        // God Specific Logic:
        // If item is God Specific, it must match the currently selected god's name.
        if (item.type === 'God Specific') {
            if (!selectedGod) return false;
            // @ts-ignore
            if (item.god !== selectedGod.name) return false;
            // If it matches, we treat it generally as an Item unless it's strictly enforced by slotType
            if (slotType === 'Item') return true; 
        }

        const matchesType = item.type === slotType;
        const matchesSearch = item.name.toLowerCase().includes(itemSearch.toLowerCase());
        return matchesType && matchesSearch;
    });
  };

  const StatRow: React.FC<{ 
    icon: React.ReactNode; 
    label: string; 
    value: number; 
    color?: string; 
    bonus?: number; 
    isPercent?: boolean 
  }> = ({ icon, label, value, color, bonus = 0, isPercent = false }) => {
    const base = value - bonus;
    
    const format = (num: number) => {
        const rounded = Math.round(num * 10) / 10;
        return isPercent ? `${rounded}%` : rounded;
    };

    const formatBonus = (num: number) => {
      const rounded = Math.round(num * 10) / 10;
      if (rounded === 0) return isPercent ? '0%' : '+0';
      return isPercent ? `${rounded}%` : `+${rounded}`;
  };

    return (
      <div className="grid grid-cols-[1fr_50px_50px_55px] items-center py-1.5 border-b border-slate-800 last:border-0 gap-2">
          {/* Label */}
          <div className={`flex items-center gap-2 ${color || 'text-slate-400'} overflow-hidden`}>
              <div className="shrink-0">{icon}</div>
              <span className="text-[10px] md:text-xs font-semibold uppercase truncate">{label}</span>
          </div>
          
          {/* Base */}
          <div className="text-slate-500 font-mono text-xs text-right">
              {format(base)}
          </div>

          {/* Bonus */}
          <div className={`font-mono text-xs text-right ${Math.abs(bonus) > 0.01 ? 'text-mythic-gold font-bold' : 'text-slate-700'}`}>
              {formatBonus(bonus)}
          </div>

          {/* Final */}
          <div className="text-slate-200 font-mono text-xs text-right font-bold">
              {format(value)}
          </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24 relative">
      
      <style>
      {`
        @keyframes flash-warning {
          0%, 100% { border-color: rgba(239, 68, 68, 0.6); box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); background-color: rgba(69, 10, 10, 0.4); }
          50% { border-color: rgba(234, 179, 8, 0.8); box-shadow: 0 0 25px rgba(234, 179, 8, 0.5); background-color: rgba(113, 63, 18, 0.4); }
        }
        .animate-flash-warning {
          animation: flash-warning 1.5s infinite;
        }
      `}
      </style>

      {/* Disclaimer Banner */}
      <div className="animate-flash-warning border-2 rounded-xl p-6 mb-8 flex items-center gap-6 backdrop-blur-md">
         <div className="p-3 bg-red-500/20 rounded-full border-2 border-red-500 shrink-0 shadow-lg">
             <AlertTriangle className="text-yellow-400 fill-yellow-900" size={32} />
         </div>
         <div>
             <h4 className="text-yellow-400 font-black text-xl uppercase tracking-widest mb-2 flex items-center gap-2 drop-shadow-md">
                <span className="text-red-500">⚠</span> WORK IN PROGRESS <span className="text-red-500">⚠</span>
             </h4>
             <p className="text-slate-200 font-bold text-sm leading-relaxed">
                 This Builder is <span className="text-red-400 underline">NOT DONE</span>. 
                 Advanced features like damage calculations, heal previews, and enemy comparisons are in development.
                 <span className="block mt-1 text-yellow-200 text-base font-black">MANY MORE FEATURES WILL BE ADDED!</span>
             </p>
         </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 h-full items-start">
        
        {/* Left Column: God Selector & Stats */}
        <div className="w-full xl:w-1/4 space-y-6">
           <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <h3 className="text-mythic-gold font-serif font-bold mb-4 uppercase text-sm tracking-wider">Select God</h3>
              {selectedGod ? (
                <div className="relative group">
                    <div className="flex items-center gap-4 bg-slate-900 p-3 rounded-lg border border-slate-600">
                        <img src={selectedGod.image} alt={selectedGod.name} className="w-16 h-16 object-cover rounded-md" />
                        <div>
                            <h2 className="text-xl font-bold text-slate-100">{selectedGod.name}</h2>
                            <p className="text-xs text-slate-400">{selectedGod.title}</p>
                        </div>
                        <button 
                          onClick={() => { setSelectedGod(null); setBuild({ starter: null, item1: null, item2: null, item3: null, item4: null, item5: null, item6: null, relic: null }); }}
                          className="ml-auto p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-red-400"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto custom-scrollbar p-1">
                    {GODS.map(god => (
                        <div 
                           key={god.id} 
                           onClick={() => setSelectedGod(god)}
                           className="aspect-[3/4] bg-slate-900 rounded border border-slate-700 hover:border-mythic-gold cursor-pointer overflow-hidden relative group"
                        >
                            <img src={god.image} alt={god.name} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-0 w-full bg-black/60 text-[8px] text-center py-0.5 text-white truncate">
                                {god.name}
                            </div>
                        </div>
                    ))}
                </div>
              )}
           </div>

           <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
               <div className="flex justify-between items-center mb-6">
                   <h3 className="text-mythic-gold font-serif font-bold uppercase text-sm tracking-wider">God Stats</h3>
                   <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-600">
                      <span className="text-xs text-slate-400 font-bold">LVL</span>
                      <span className="text-lg font-mono font-bold text-white w-6 text-center">{level}</span>
                      <div className="flex flex-col gap-0.5">
                         <button onClick={() => setLevel(Math.min(20, level + 1))} className="text-slate-400 hover:text-white"><div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-current"></div></button>
                         <button onClick={() => setLevel(Math.max(1, level - 1))} className="text-slate-400 hover:text-white"><div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-current"></div></button>
                      </div>
                   </div>
               </div>

               {selectedGod && currentStats ? (
                  <div className="grid grid-cols-1 gap-y-2">
                     <div className="grid grid-cols-[1fr_50px_50px_55px] gap-2 text-[9px] text-slate-500 uppercase font-bold tracking-wider mb-1 border-b border-slate-700 pb-2">
                        <span>Stat</span>
                        <span className="text-right">Base</span>
                        <span className="text-right text-mythic-gold">Bonus</span>
                        <span className="text-right text-white">Final</span>
                     </div>
                     
                     <StatRow icon={<BicepsFlexed size={14} />} label="Strength" value={currentStats.strength} bonus={getBonus('strength')} />
                     <StatRow icon={<BookOpen size={14} />} label="Intell" value={currentStats.intelligence} bonus={getBonus('intelligence')} />
                     
                     <StatRow icon={<Heart size={14} className="text-red-500"/>} label="Health" value={currentStats.maxHealth} bonus={getBonus('maxHealth')} />
                     <StatRow icon={<Droplet size={14} className="text-blue-500"/>} label="Mana" value={currentStats.maxMana} bonus={getBonus('maxMana')} />
                     
                     <StatRow icon={<Activity size={14} className="text-green-500"/>} label="HP5" value={currentStats.healthRegen} bonus={getBonus('healthRegen')} />
                     <StatRow icon={<Activity size={14} className="text-blue-300"/>} label="MP5" value={currentStats.manaRegen} bonus={getBonus('manaRegen')} />

                     <StatRow icon={<Shield size={14} />} label="Phys Prot" value={currentStats.physicalProtection} bonus={getBonus('physicalProtection')} />
                     <StatRow icon={<Shield size={14} className="text-purple-400"/>} label="Mag Prot" value={currentStats.magicalProtection} bonus={getBonus('magicalProtection')} />
                     
                     <StatRow icon={<Zap size={14} />} label="Atk Speed" value={currentStats.attackSpeed} bonus={getBonus('attackSpeed')} isPercent={true}/>
                     <StatRow icon={<Layers size={14} />} label="Pen %" value={currentStats.penetration} bonus={getBonus('penetration')} isPercent={true} />

                     <StatRow icon={<Target size={14} />} label="Crit %" value={currentStats.critChance} bonus={getBonus('critChance')} isPercent={true} />
                     <StatRow icon={<Skull size={14} />} label="Crit Dmg" value={currentStats.critDamage * 100} bonus={getBonus('critDamage') * 100} isPercent={true} />
                     
                     <StatRow icon={<Heart size={14} />} label="Lifesteal" value={currentStats.lifesteal} bonus={getBonus('lifesteal')} color="text-red-400" isPercent={true} />
                     <StatRow icon={<RotateCcw size={14} />} label="CDR" value={currentStats.cooldownRate} bonus={getBonus('cooldownRate')} color="text-yellow-500" isPercent={true} />
                     
                     <StatRow icon={<Move size={14} />} label="Movement" value={Math.round(currentStats.movementSpeed)} bonus={getBonus('movementSpeed')} />
                  </div>
               ) : (
                 <p className="text-center text-slate-500 text-sm py-4">Select a God to view stats</p>
               )}
           </div>
        </div>

        {/* Center Column: Build Slots */}
        <div className="w-full xl:w-2/4 flex flex-col">
            <h2 className="text-3xl font-serif font-bold text-slate-100 mb-6 flex items-center gap-3">
               <Shield className="text-mythic-gold" /> God Builder
            </h2>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 relative overflow-hidden mb-8">
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                   {SLOT_TYPES.map((slot) => {
                      const item = build[slot.id];
                      return (
                        <div key={slot.id} className="flex flex-col items-center gap-2">
                           <div 
                             onClick={() => handleSlotClick(slot.id)}
                             onMouseEnter={() => item && setHoveredSlotItem(item)}
                             onMouseLeave={() => setHoveredSlotItem(null)}
                             className={`relative w-16 h-16 bg-slate-800 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-center group ${
                                 activeSlotId === slot.id ? 'border-mythic-gold shadow-[0_0_15px_rgba(251,191,36,0.4)]' : 
                                 item ? 'border-slate-600 hover:border-slate-400' : 'border-slate-700 border-dashed hover:border-slate-500 hover:bg-slate-700'
                             }`}
                           >
                              {item ? (
                                <>
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                                  <button 
                                    onClick={(e) => removeItem(slot.id, e)}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                  >
                                     <X size={12} />
                                  </button>
                                </>
                              ) : (
                                <div className="text-slate-600 group-hover:text-slate-400 transition-colors">
                                   <Plus size={24} />
                                </div>
                              )}
                           </div>
                           <div className="flex items-center gap-1 text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                              {slot.icon} {slot.label}
                           </div>
                        </div>
                      );
                   })}
               </div>
            </div>

            {/* Recommended Builds Quick Select */}
            {selectedGod && selectedGod.recommendedBuilds.length > 0 && (
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <h4 className="text-mythic-gold font-serif font-bold uppercase text-xs tracking-wider mb-3 flex items-center gap-2">
                        <Star size={14} /> Quick Load Recommended
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedGod.recommendedBuilds.map((rec, i) => (
                            <div 
                              key={i}
                              onClick={() => loadRecommendedBuild(rec)}
                              className="bg-slate-900 p-3 rounded border border-slate-700 hover:border-mythic-gold cursor-pointer flex items-center justify-between group transition-colors"
                            >
                                <div>
                                    <div className="text-slate-200 font-bold text-sm group-hover:text-mythic-gold transition-colors">{rec.name}</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase">By {rec.author} • {rec.role}</div>
                                </div>
                                <RotateCcw size={14} className="text-slate-600 group-hover:text-mythic-gold" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

        {/* Right Column: Inspector (Fixed) */}
        <div className="hidden lg:block w-80 shrink-0 sticky top-24">
             <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden h-[500px]">
                 {hoveredSlotItem || hoveredPickerItem ? (
                     <ItemInspector item={hoveredSlotItem || hoveredPickerItem!} />
                 ) : (
                     <div className="h-full flex flex-col items-center justify-center text-slate-600 p-8 text-center space-y-4">
                         <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center">
                             <Info size={32} />
                         </div>
                         <p className="text-lg font-serif">Item Details</p>
                         <p className="text-sm">Hover over an equipped item or an item in the selection menu to view details here.</p>
                     </div>
                 )}
             </div>
        </div>

      </div>

      {/* Item Selection Modal */}
      {isItemModalOpen && activeSlotId && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-slate-900 w-full max-w-5xl h-[80vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden relative">
                <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800">
                    <h3 className="text-xl font-serif font-bold text-slate-100">Select {SLOT_TYPES.find(s => s.id === activeSlotId)?.label}</h3>
                    <button onClick={() => setIsItemModalOpen(false)} className="text-slate-400 hover:text-white bg-slate-700 hover:bg-red-500 p-2 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                <div className="flex flex-1 overflow-hidden">
                    {/* Left Side: Grid */}
                    <div className="flex-1 flex flex-col p-4 border-r border-slate-700 bg-slate-950/50">
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                            <input 
                                type="text" 
                                placeholder="Search items..." 
                                value={itemSearch}
                                onChange={(e) => setItemSearch(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-mythic-gold"
                                autoFocus
                            />
                        </div>
                        
                        <div className="flex-1 overflow-y-auto custom-scrollbar grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 content-start p-1">
                            {getFilteredItemsForSlot().map(item => (
                                <div 
                                key={item.id} 
                                onClick={() => selectItem(item)}
                                onMouseEnter={() => setHoveredPickerItem(item)}
                                onMouseLeave={() => setHoveredPickerItem(null)}
                                className="bg-slate-800 p-2 rounded border border-slate-700 hover:border-mythic-gold cursor-pointer flex flex-col items-center gap-2 group hover:bg-slate-800/80 transition-all"
                                >
                                    <div className="w-12 h-12 rounded bg-black overflow-hidden relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        {/* God Specific Badge */}
                                        {item.type === 'God Specific' && (
                                            <div className="absolute top-0 right-0 bg-mythic-gold/90 text-slate-900 text-[8px] font-bold px-1 rounded-bl">
                                                ★
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-[10px] text-center leading-tight text-slate-400 group-hover:text-slate-200 font-semibold line-clamp-2 h-6 flex items-center justify-center">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Inspector Preview inside Modal */}
                    <div className="w-80 hidden md:block bg-slate-900">
                        {hoveredPickerItem ? (
                            <ItemInspector item={hoveredPickerItem} />
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-600 p-8 text-center">
                                <Info size={48} className="mb-4 opacity-50" />
                                <p className="text-sm">Hover an item to preview stats</p>
                            </div>
                        )}
                    </div>
                </div>
           </div>
        </div>,
        document.body
      )}
    </div>
  );
};
