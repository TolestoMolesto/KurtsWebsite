
import React, { useState, useMemo } from 'react';
import { useData } from '../contexts/DataContext';
import { God, Item, RecommendedBuild } from '../types';
import { Search, Shield, Sword, Zap, RotateCcw, Dices, Copy, Check, Plus, Hexagon, Trash2, Save, Sparkles, X, ArrowLeft, Grid } from 'lucide-react';

// --- Helper Components (Local to Builder) ---

const AspectSymbolSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 3L16 8H8L12 3Z" fill="currentColor" />
        <path d="M12 10L15 14H9L12 10Z" fill="currentColor" fillOpacity="0.5" />
        <ellipse cx="12" cy="18" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 10V18" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const AspectHexagon: React.FC<{ 
  isSelected: boolean; 
  onClick: () => void;
  name: string;
  image?: string;
}> = ({ isSelected, onClick, name, image }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col items-center gap-2 cursor-pointer group"
    >
      <div className={`relative w-14 h-14 flex items-center justify-center transition-all duration-300 ${isSelected ? 'scale-110' : 'hover:scale-105'}`}>
        {/* Hexagon Shape Background */}
        <div className={`absolute inset-0 clip-hexagon transition-all duration-300 ${
          isSelected 
            ? 'bg-gradient-to-br from-orange-500 to-yellow-600 shadow-[0_0_15px_rgba(251,191,36,0.6)]' 
            : 'bg-slate-700 border-2 border-slate-600 group-hover:border-slate-500'
        }`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        
        {/* Inner Content */}
        <div className={`absolute inset-0.5 clip-hexagon flex items-center justify-center overflow-hidden ${
          isSelected ? 'bg-orange-900/20' : 'bg-slate-800'
        }`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', top: '2px', left: '2px', right: '2px', bottom: '2px' }}>
            {image ? (
                <img 
                  src={image} 
                  alt={name} 
                  className={`w-full h-full object-cover transition-all duration-300 ${isSelected ? '' : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'}`} 
                />
            ) : (
                <div className={`relative z-10 transition-colors ${isSelected ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    <AspectSymbolSVG className={`w-6 h-6 ${isSelected ? 'animate-pulse-slow' : ''}`} />
                </div>
            )}
        </div>
        
        {isSelected && (
           <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-slate-900 shadow-lg z-20">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
           </div>
        )}
      </div>
      <span className={`text-[9px] font-bold uppercase tracking-wider text-center max-w-[70px] leading-tight transition-colors ${isSelected ? 'text-mythic-gold' : 'text-slate-500 group-hover:text-slate-400'}`}>
        {name}
      </span>
    </div>
  );
};

interface CurrentBuild {
    starter: string | null;
    items: (string | null)[]; // 6 items
    relic: string | null;
}

export const BuilderView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  
  // State
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [godSearch, setGodSearch] = useState('');
  const [activeAspectId, setActiveAspectId] = useState<string | null>(null);
  const [build, setBuild] = useState<CurrentBuild>({
      starter: null,
      items: [null, null, null, null, null, null],
      relic: null
  });

  // Picker State
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<{type: 'Starter' | 'Relic' | 'Item', index?: number} | null>(null);
  const [pickerSearch, setPickerSearch] = useState('');

  // --- Derived Stats ---
  const calculatedStats = useMemo(() => {
      const stats: Record<string, number> = {
          Strength: 0, Intelligence: 0, 'Attack Speed': 0, 'Physical Protection': 0, 'Magical Protection': 0,
          'Max Health': 0, 'Max Mana': 0, 'Cooldown Rate': 0, 'Flat Penetration': 0, 'Percent Penetration': 0,
          'Crit Chance': 0, 'Lifesteal': 0, 'Movement Speed': 0
      };

      // Base God Stats (Level 20)
      if (selectedGod) {
          const base = selectedGod.statsByLevel[19]; // Lvl 20
          stats.Strength += base.strength;
          stats.Intelligence += base.intelligence;
          stats['Attack Speed'] += base.attackSpeed; // Base is usually around 1.0 + %
          stats['Physical Protection'] += base.physicalProtection;
          stats['Magical Protection'] += base.magicalProtection;
          stats['Max Health'] += base.maxHealth;
          stats['Max Mana'] += base.maxMana;
          stats['Movement Speed'] += base.movementSpeed;
      }

      // Item Stats
      const allItemIds = [build.starter, ...build.items, build.relic].filter(Boolean) as string[];
      allItemIds.forEach(id => {
          const item = ITEMS.find(i => i.id === id);
          if (item) {
              Object.entries(item.stats).forEach(([key, valStr]) => {
                   // Basic parsing (removes % and non-numeric)
                   const val = parseFloat(valStr.replace(/[^0-9.]/g, ''));
                   if (!isNaN(val)) {
                       // Map standard keys
                       if (key.includes('Strength') || key.includes('Physical Power')) stats.Strength += val;
                       else if (key.includes('Intelligence') || key.includes('Magical Power')) stats.Intelligence += val;
                       else if (key.includes('Health') && !key.includes('Regen')) stats['Max Health'] += val;
                       else if (key.includes('Mana') && !key.includes('Regen')) stats['Max Mana'] += val;
                       else if (key.includes('Physical Protection')) stats['Physical Protection'] += val;
                       else if (key.includes('Magical Protection')) stats['Magical Protection'] += val;
                       else if (key.includes('Cooldown')) stats['Cooldown Rate'] += val;
                       else if (key.includes('Attack Speed')) stats['Attack Speed'] += val; // Additive %
                       else if (key.includes('Crit')) stats['Crit Chance'] += val;
                       else if (key.includes('Lifesteal')) stats['Lifesteal'] += val;
                       else if (key.includes('Penetration') && valStr.includes('%')) stats['Percent Penetration'] += val;
                       else if (key.includes('Penetration')) stats['Flat Penetration'] += val;
                       else if (key.includes('Move')) stats['Movement Speed'] += (stats['Movement Speed'] * (val/100)); // simplistic MS calc
                   }
              });
          }
      });

      return stats;
  }, [selectedGod, build, ITEMS]);

  // --- Actions ---

  const getRandomGod = () => GODS[Math.floor(Math.random() * GODS.length)];
  
  const generateRandomBuild = (god: God | null): CurrentBuild => {
      // Helper to pick random item from filtered list
      const pick = (pool: Item[]) => pool[Math.floor(Math.random() * pool.length)]?.id || null;

      let validStarters: Item[] = [];
      let validItems: Item[] = [];

      if (god) {
          const role = god.role === 'Guardian' || god.role === 'Warrior' ? 'Defense' : 'Offense';
          
          // T2 Starters (Checking buildsFrom to ensure it's upgraded)
          validStarters = ITEMS.filter(i => 
              i.type === 'Starter' && 
              i.buildsFrom && i.buildsFrom.length > 0 &&
              (i.category === role || i.category === 'Hybrid')
          );

          // General Item Pool filtering (Strictly Tier 3)
          validItems = ITEMS.filter(i => {
              if (i.tier !== 3) return false; 
              
              // Exclude wrong damage type
              const isPhysItem = Object.keys(i.stats).some(k => k.includes('Strength') || k.includes('Physical'));
              const isMagItem = Object.keys(i.stats).some(k => k.includes('Intelligence') || k.includes('Magical Power'));
              
              if (god.damageType === 'Physical' && isMagItem && !isPhysItem) return false;
              if (god.damageType === 'Magical' && isPhysItem && !isMagItem) return false;

              // God Specific Check
              if (i.type === 'God Specific' && i.god !== god.name) return false;

              return true;
          });
      } else {
          // No God Selected - Purely random build
          validStarters = ITEMS.filter(i => i.type === 'Starter' && i.buildsFrom && i.buildsFrom.length > 0);
          validItems = ITEMS.filter(i => i.tier === 3 && i.type !== 'God Specific');
      }
      
      const validRelics = ITEMS.filter(i => i.type === 'Relic');

      const items: string[] = [];
      // Pick 6 unique random valid items
      const pool = [...validItems];
      for (let i = 0; i < 6; i++) {
          if (pool.length === 0) break;
          const idx = Math.floor(Math.random() * pool.length);
          items.push(pool[idx].id);
          pool.splice(idx, 1); // Prevent duplicates
      }

      return {
          starter: pick(validStarters),
          items: items.length === 6 ? items : [...items, ...Array(6-items.length).fill(null)],
          relic: pick(validRelics)
      };
  };

  const handleRandomizeGod = () => {
      const god = getRandomGod();
      setSelectedGod(god);
      
      // 50% chance to pick an aspect if available
      if (god.aspects.length > 0 && Math.random() < 0.5) {
          const randomAspectIndex = Math.floor(Math.random() * god.aspects.length);
          setActiveAspectId(god.aspects[randomAspectIndex].id);
      } else {
          setActiveAspectId(null); // Reset aspect to base
      }

      // Cleanup build if it contains god-specific items for a different god
      const newItems = build.items.map(id => {
          const item = ITEMS.find(i => i.id === id);
          if (item?.type === 'God Specific' && item.god !== god.name) return null;
          return id;
      });
      setBuild(prev => ({ ...prev, items: newItems }));
  };

  const handleFullRandomize = () => {
      const god = getRandomGod();
      setSelectedGod(god);
      
      // 50% chance to pick an aspect if available
      if (god.aspects.length > 0 && Math.random() < 0.5) {
          const randomAspectIndex = Math.floor(Math.random() * god.aspects.length);
          setActiveAspectId(god.aspects[randomAspectIndex].id);
      } else {
          setActiveAspectId(null); // Reset aspect to base
      }

      const newBuild = generateRandomBuild(god);
      setBuild(newBuild);
  };

  const handleRandomizeBuild = () => {
      // Randomize items based on current god selection (or lack thereof)
      const newBuild = generateRandomBuild(selectedGod);
      setBuild(newBuild);
  };

  const loadRecommended = (rec: RecommendedBuild) => {
      setBuild({
          starter: rec.starterId || null,
          items: rec.itemIds,
          relic: rec.relicId || null
      });
  };

  const openPicker = (type: 'Starter' | 'Relic' | 'Item', index?: number) => {
      setActiveSlot({ type, index });
      setIsPickerOpen(true);
      setPickerSearch('');
  };

  const selectItem = (item: Item | null) => {
      if (!activeSlot) return;
      
      if (activeSlot.type === 'Starter') {
          setBuild(prev => ({ ...prev, starter: item ? item.id : null }));
      } else if (activeSlot.type === 'Relic') {
          setBuild(prev => ({ ...prev, relic: item ? item.id : null }));
      } else if (activeSlot.type === 'Item' && typeof activeSlot.index === 'number') {
          const newItems = [...build.items];
          newItems[activeSlot.index] = item ? item.id : null;
          setBuild(prev => ({ ...prev, items: newItems }));
      }
      setIsPickerOpen(false);
  };

  // --- UI Renderers ---

  const Slot = ({ label, itemId, type, index }: { label: string, itemId: string | null, type: any, index?: number }) => {
      const item = ITEMS.find(i => i.id === itemId);
      return (
          <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</span>
              <div 
                onClick={() => openPicker(type, index)}
                className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center cursor-pointer transition-all hover:scale-105 hover:shadow-lg overflow-hidden bg-slate-900 relative group ${
                    item ? 'border-slate-600' : 'border-slate-800 border-dashed'
                }`}
              >
                  {item ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                      <Plus className="text-slate-700 group-hover:text-slate-500" />
                  )}
                  {/* Hover Tooltip / Remove */}
                  {item && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <RotateCcw size={20} className="text-white" />
                      </div>
                  )}
              </div>
              <span className="text-[10px] font-bold text-slate-400 text-center max-w-[80px] truncate">
                  {item ? item.name : 'Empty'}
              </span>
          </div>
      );
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
       
       <div className="flex flex-col lg:flex-row gap-8">
           
           {/* LEFT: God Selection & Info */}
           <div className="w-full lg:w-1/3 space-y-6">
               
               {/* God Selector / Details Card */}
               <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl flex flex-col max-h-[800px]">
                   
                   {/* Header / Search */}
                   {!selectedGod && (
                        <div className="p-4 border-b border-slate-800 bg-slate-950 flex gap-2 items-center">
                            <Search className="text-slate-500" size={18} />
                            <input 
                                placeholder="Search God..."
                                className="w-full bg-transparent text-sm text-white focus:outline-none"
                                value={godSearch}
                                onChange={(e) => setGodSearch(e.target.value)}
                            />
                            <button 
                                onClick={handleRandomizeGod}
                                className="p-2 bg-slate-800 hover:bg-slate-700 text-mythic-gold rounded-lg border border-slate-700 transition-colors"
                                title="Randomize God"
                                >
                                <Dices size={18} />
                            </button>
                        </div>
                   )}

                   {/* If NO GOD selected -> Show Grid */}
                   {!selectedGod ? (
                       <div className="p-4 overflow-y-auto custom-scrollbar flex-1 bg-slate-900">
                           <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                               {GODS.filter(g => g.name.toLowerCase().includes(godSearch.toLowerCase()))
                                     .sort((a, b) => a.name.localeCompare(b.name))
                                     .map(god => (
                                   <div 
                                       key={god.id} 
                                       onClick={() => { setSelectedGod(god); setActiveAspectId(null); }}
                                       className="aspect-square bg-slate-950 border border-slate-800 hover:border-mythic-gold rounded-lg overflow-hidden cursor-pointer relative group transition-all"
                                   >
                                       <img src={god.image} alt={god.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80"></div>
                                       <div className="absolute bottom-1 left-1 right-1 text-center">
                                           <span className="text-[9px] font-bold text-slate-300 group-hover:text-white uppercase truncate block">{god.name}</span>
                                       </div>
                                       {god.aspects.length > 0 && (
                                            <div className="absolute top-1 right-1">
                                                <Hexagon size={10} className="text-mythic-gold fill-mythic-gold/20" />
                                            </div>
                                       )}
                                   </div>
                               ))}
                           </div>
                       </div>
                   ) : (
                       /* If GOD Selected -> Show Details */
                       <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                           <button 
                               onClick={() => setSelectedGod(null)}
                               className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-red-600/80 text-white rounded-full backdrop-blur transition-colors"
                               title="Change God"
                           >
                               <X size={16} />
                           </button>

                           <div className="relative">
                               <div className="aspect-square w-full relative overflow-hidden">
                                    <img src={selectedGod.image} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <h2 className="text-3xl font-serif font-bold text-white leading-none mb-1">{selectedGod.name}</h2>
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-mythic-gold font-bold uppercase text-xs tracking-wider">{selectedGod.role} • {selectedGod.damageType}</p>
                                            <button onClick={() => setSelectedGod(null)} className="text-xs text-slate-400 hover:text-white flex items-center gap-1 underline">
                                                Change <RotateCcw size={10}/>
                                            </button>
                                        </div>
                                    </div>
                               </div>

                               {/* ASPECT SELECTOR */}
                               {selectedGod.aspects.length > 0 && (
                                   <div className="p-4 bg-slate-950 border-t border-slate-800">
                                       <h3 className="text-[10px] uppercase font-bold text-slate-500 mb-3 flex items-center gap-2">
                                           <Hexagon size={10} /> Select Aspect
                                       </h3>
                                       <div className="flex flex-wrap gap-4 justify-center">
                                           {selectedGod.aspects.map(aspect => (
                                               <AspectHexagon 
                                                    key={aspect.id}
                                                    name={aspect.name}
                                                    image={aspect.image}
                                                    isSelected={activeAspectId === aspect.id}
                                                    onClick={() => setActiveAspectId(prev => prev === aspect.id ? null : aspect.id)}
                                               />
                                           ))}
                                       </div>
                                   </div>
                               )}
                               
                               {/* Quick Load Builds */}
                               <div className="p-4 border-t border-slate-800">
                                   <h3 className="text-[10px] uppercase font-bold text-slate-500 mb-3">Quick Load Recommended</h3>
                                   <div className="space-y-2">
                                       {selectedGod.recommendedBuilds
                                        .filter(b => {
                                            if (!b.aspectId) return true; 
                                            if (b.aspectId === 'base' && !activeAspectId) return true;
                                            return b.aspectId === activeAspectId;
                                        })
                                        .map((rec, i) => (
                                           <button 
                                              key={i}
                                              onClick={() => loadRecommended(rec)}
                                              className="w-full bg-slate-800 hover:bg-slate-700 p-2 rounded border border-slate-700 hover:border-mythic-gold transition-all text-left flex justify-between items-center group"
                                           >
                                               <div>
                                                   <div className="text-xs font-bold text-slate-200 group-hover:text-white">{rec.name}</div>
                                                   <div className="text-[10px] text-slate-500">{rec.role} • by {rec.author}</div>
                                               </div>
                                               <Plus size={14} className="text-slate-500 group-hover:text-mythic-gold" />
                                           </button>
                                       ))}
                                       {selectedGod.recommendedBuilds.length === 0 && (
                                           <div className="text-xs text-slate-600 italic">No recommended builds found.</div>
                                       )}
                                   </div>
                               </div>
                           </div>
                       </div>
                   )}
               </div>

               {/* Global Actions */}
               <div className="grid grid-cols-2 gap-3">
                   <button 
                      onClick={handleFullRandomize}
                      className="col-span-2 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                   >
                       <Sparkles size={18} /> Randomize All
                   </button>
                   <button 
                      onClick={handleRandomizeBuild}
                      className="py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 font-bold text-xs"
                   >
                       Randomize Items
                   </button>
                   <button 
                      onClick={() => setBuild({ starter: null, items: [null,null,null,null,null,null], relic: null })}
                      className="py-2 bg-slate-800 hover:bg-red-900/30 border border-slate-700 hover:border-red-800 rounded-lg text-slate-300 hover:text-red-400 font-bold text-xs"
                   >
                       Clear Build
                   </button>
               </div>

           </div>

           {/* RIGHT: Build Editor */}
           <div className="flex-1">
               <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl min-h-[600px] flex flex-col relative">
                   <h2 className="text-xl font-serif font-bold text-mythic-gold mb-8 text-center">Item Configuration</h2>
                   
                   {/* Starter & Relic Row */}
                   <div className="flex justify-center gap-16 mb-12 relative">
                       {/* Connector Line */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-slate-800 -z-0"></div>
                       
                       <Slot label="Starter (T2)" type="Starter" itemId={build.starter} />
                       <Slot label="Relic" type="Relic" itemId={build.relic} />
                   </div>

                   {/* Main Items Grid */}
                   <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12">
                       {build.items.map((id, i) => (
                           <Slot key={i} label={`Item ${i+1}`} type="Item" index={i} itemId={id} />
                       ))}
                   </div>

                   {/* Stats Summary */}
                   <div className="mt-auto bg-slate-950 rounded-xl p-6 border border-slate-800">
                       <h3 className="text-xs font-bold uppercase text-slate-500 mb-4 border-b border-slate-800 pb-2">Estimated Stats (Lvl 20)</h3>
                       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                           {Object.entries(calculatedStats).map(([key, val]) => {
                               if (val === 0) return null;
                               return (
                                   <div key={key} className="flex flex-col">
                                       <span className="text-slate-500 font-semibold">{key}</span>
                                       <span className="text-slate-200 font-mono font-bold">
                                           {key.includes('Speed') || key.includes('Chance') || key.includes('Penetration') ? `${val.toFixed(0)}%` : Math.round(val)}
                                       </span>
                                   </div>
                               );
                           })}
                       </div>
                   </div>

               </div>
           </div>
       </div>

       {/* --- ITEM PICKER MODAL --- */}
       {isPickerOpen && activeSlot && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
               <div className="bg-slate-900 w-full max-w-4xl h-[80vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
                   
                   {/* Header */}
                   <div className="p-4 border-b border-slate-700 bg-slate-950 flex justify-between items-center">
                       <h3 className="font-bold text-white text-lg flex items-center gap-2">
                           Select {activeSlot.type} 
                           {activeSlot.type === 'Starter' && <span className="text-xs text-slate-500">(Tier 2 Only)</span>}
                           {activeSlot.type === 'Item' && <span className="text-xs text-slate-500">(Tier 3 Only)</span>}
                           {selectedGod && (
                               <span className="text-xs font-normal bg-slate-800 px-2 py-1 rounded text-slate-400 border border-slate-700 ml-2">
                                   {selectedGod.role} • {selectedGod.damageType}
                               </span>
                           )}
                       </h3>
                       <button onClick={() => setIsPickerOpen(false)}><X className="text-slate-400 hover:text-white" /></button>
                   </div>

                   {/* Search & Filters */}
                   <div className="p-4 bg-slate-900 border-b border-slate-800">
                       <div className="relative">
                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                           <input 
                               autoFocus
                               placeholder={`Search ${activeSlot.type}...`}
                               className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 text-sm text-white focus:border-mythic-gold outline-none"
                               value={pickerSearch}
                               onChange={e => setPickerSearch(e.target.value)}
                           />
                       </div>
                   </div>

                   {/* Grid */}
                   <div className="flex-1 overflow-y-auto p-6 bg-slate-900 custom-scrollbar">
                        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {/* Clear Option */}
                            <div 
                                onClick={() => selectItem(null)}
                                className="aspect-square rounded-lg border-2 border-red-900/50 bg-red-900/20 hover:bg-red-900/40 hover:border-red-500 cursor-pointer flex flex-col items-center justify-center group"
                            >
                                <Trash2 className="text-red-500 mb-1" size={20} />
                                <span className="text-[9px] font-bold text-red-400 uppercase">Clear</span>
                            </div>

                            {/* Items */}
                            {ITEMS.filter(item => {
                                // 1. Slot Logic
                                let typeMatch = false;
                                if (activeSlot.type === 'Starter') {
                                    // Enforce Tier 2 Starter (must build from something)
                                    typeMatch = item.type === 'Starter' && !!item.buildsFrom && item.buildsFrom.length > 0;
                                } else if (activeSlot.type === 'Relic') {
                                    typeMatch = item.type === 'Relic';
                                } else if (activeSlot.type === 'Item') {
                                    // Enforce Tier 3 Item or God Specific
                                    typeMatch = (item.type === 'Item' && item.tier === 3) || item.type === 'God Specific';
                                }
                                
                                // 2. Damage Type Match (heuristic)
                                let damageTypeMatch = true;
                                if (selectedGod && (activeSlot.type === 'Item' || activeSlot.type === 'Starter')) {
                                    const isPhys = Object.keys(item.stats).some(k => k.includes('Strength') || k.includes('Physical'));
                                    const isMag = Object.keys(item.stats).some(k => k.includes('Intelligence') || k.includes('Magical Power'));
                                    // Allow Hybrids, filter strict mismatch
                                    if (selectedGod.damageType === 'Physical' && isMag && !isPhys) damageTypeMatch = false;
                                    if (selectedGod.damageType === 'Magical' && isPhys && !isMag) damageTypeMatch = false;
                                }

                                // 3. God Specific Match
                                const godSpecificMatch = item.type !== 'God Specific' || (selectedGod && item.god === selectedGod.name);
                                
                                // 4. Search
                                const searchMatch = item.name.toLowerCase().includes(pickerSearch.toLowerCase());

                                // 5. Exclude Duplicates (Item Slot only)
                                let isDuplicate = false;
                                if (activeSlot.type === 'Item') {
                                    isDuplicate = build.items.includes(item.id) && build.items[activeSlot.index!] !== item.id;
                                }

                                return typeMatch && damageTypeMatch && godSpecificMatch && searchMatch && !isDuplicate;
                            }).map(item => (
                                <div 
                                    key={item.id}
                                    onClick={() => selectItem(item)}
                                    className="aspect-square rounded-lg border border-slate-700 bg-slate-800 hover:border-mythic-gold cursor-pointer relative group overflow-hidden"
                                >
                                    <img src={item.image} className="w-full h-full object-cover" />
                                    <div className="absolute inset-x-0 bottom-0 bg-black/80 p-1 text-[9px] text-center text-slate-300 truncate">
                                        {item.name}
                                    </div>
                                    {/* Tier Label fix for Starters appearing as Tier 3 if hacked */}
                                    {item.tier && (
                                        <div className="absolute top-0 right-0 bg-slate-900/90 px-1 text-[8px] text-white rounded-bl">T{item.tier}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                   </div>

               </div>
           </div>
       )}

    </div>
  );
};
