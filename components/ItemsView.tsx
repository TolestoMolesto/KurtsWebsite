import React, { useState } from 'react';
import { ITEMS } from '../constants';
import { Item } from '../types';
import { Search, Shield, Sword, Zap, Briefcase, Coffee, ChevronUp, ChevronDown, X, Diamond, Info, Layers, Sparkles, HandHelping, Map, Lock } from 'lucide-react';

// Helper to find items that build FROM a specific item ID
const getUpgrades = (itemId: string) => {
    return ITEMS.filter(item => item.buildsFrom?.includes(itemId));
};

// Helper to get component items (buildsFrom)
const getComponents = (item: Item) => {
    if (!item.buildsFrom) return [];
    return ITEMS.filter(i => item.buildsFrom?.includes(i.id));
};

// SVG Tree Generator
const TreeConnectorSVG = ({ count, inverted = false }: { count: number, inverted?: boolean }) => {
    if (count <= 1) return <div className="w-px h-6 bg-slate-600 mx-auto my-0.5"></div>;

    return (
        <div className={`w-full h-6 relative my-0.5 ${inverted ? 'rotate-180' : ''}`}>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-3 bg-slate-600"></div>
            <div className="absolute top-3 left-[20%] right-[20%] h-px bg-slate-600"></div>
            <div className="absolute top-3 left-[20%] w-px h-3 bg-slate-600"></div>
            <div className="absolute top-3 right-[20%] w-px h-3 bg-slate-600"></div>
            {count > 2 && <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-slate-600"></div>}
        </div>
    );
};

export const ItemsView: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Offense' | 'Defense' | 'Utility' | 'Support' | 'Starter' | 'Consumable' | 'Relic' | 'Curio' | 'Map Droppable' | 'Tier 1' | 'Tier 2' | 'Tier 3'>('All');
  const [search, setSearch] = useState('');
  
  // State for interaction
  const [selectedItem, setSelectedItem] = useState<Item | null>(null); // For click (mobile modal or desktop lock)
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null); // For desktop hover

  // Determine what to show in the inspector
  // Priority: Selected > Hovered. This allows "locking" the inspector to scroll and read.
  const activeItem = selectedItem || hoveredItem;

  const filteredItems = ITEMS.filter(item => {
    let matchesType = true;
    
    if (filter === 'Starter') {
        matchesType = item.type === 'Starter';
    } else if (filter === 'Consumable') {
        matchesType = item.type === 'Consumable';
    } else if (filter === 'Relic') {
        matchesType = item.type === 'Relic';
    } else if (filter === 'Curio') {
        matchesType = item.type === 'Curio';
    } else if (filter === 'Map Droppable') {
        matchesType = item.type === 'Map Droppable';
    } else if (filter === 'Tier 1') {
        matchesType = item.tier === 1;
    } else if (filter === 'Tier 2') {
        matchesType = item.tier === 2;
    } else if (filter === 'Tier 3') {
        matchesType = item.tier === 3;
    } else if (filter !== 'All') {
        matchesType = item.category === filter && item.type === 'Item';
    } else {
        matchesType = true;
    }

    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  const renderHierarchyNode = (item: Item, isCenter: boolean = false) => {
      const components = getComponents(item);
      const hasComponents = components.length > 0;

      return (
          <div key={item.id} className="flex flex-col items-center">
              <div 
                // On the tree, clicking navigates to that item (locks selection)
                onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex flex-col items-center p-1.5 rounded-lg cursor-pointer transition-all border relative z-10 group ${
                    isCenter 
                    ? 'bg-slate-800 border-mythic-gold shadow-[0_0_10px_rgba(251,191,36,0.2)]' 
                    : 'bg-slate-900 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
                <div className="w-10 h-10 bg-black rounded border border-slate-600 overflow-hidden mb-1 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className={`text-[9px] font-bold text-center leading-tight max-w-[70px] ${isCenter ? 'text-mythic-gold' : 'text-slate-400'}`}>
                    {item.name}
                </span>
                <span className="text-[8px] text-slate-500 font-mono mt-0.5">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
              </div>
              
              {!isCenter && hasComponents && (
                  <div className="mt-1 flex flex-col items-center">
                       <div className="w-px h-3 bg-slate-700 mb-0.5"></div>
                       {components.length > 1 && <div className="w-full h-px bg-slate-700 mb-0.5 relative" style={{ width: `${(components.length - 1) * 36}px` }}></div>}
                       
                       <div className="flex gap-2">
                           {components.map(comp => (
                               <div key={comp.id} className="flex flex-col items-center relative">
                                   {components.length > 1 && <div className="h-1.5 w-px bg-slate-700 mb-0.5"></div>}
                                   {renderHierarchyNode(comp, false)}
                               </div>
                           ))}
                       </div>
                  </div>
              )}
          </div>
      );
  };

  const ItemInspector = ({ item }: { item: Item }) => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col">
        <div className="p-5 border-b border-slate-700 bg-slate-800/50 flex gap-4 items-center rounded-t-xl">
            <div className="w-20 h-20 bg-slate-900 rounded-lg border border-slate-600 overflow-hidden shadow-lg shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div>
            <h2 className="text-xl font-serif font-bold text-mythic-gold leading-tight">{item.name}</h2>
            <div className="flex items-center gap-2 mt-2">
                <span className="text-lg text-yellow-500 font-mono font-bold">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
                <span className="text-[10px] uppercase bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">
                    {item.type === 'Item' ? `Tier ${item.tier}` : item.type}
                </span>
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

            {/* Tree Visualization */}
            {item.type === 'Item' && (
                <div className="mt-4 pt-4 border-t border-slate-800">
                    <h3 className="text-xs uppercase font-bold text-slate-500 mb-4 tracking-widest text-center">Build Path</h3>
                    
                    <div className="flex flex-col items-center w-full overflow-x-auto pb-2">
                        {/* Upgrades Into */}
                        {getUpgrades(item.id).length > 0 && (
                            <>
                            <div className="flex gap-6 mb-0">
                                {getUpgrades(item.id).map(u => renderHierarchyNode(u))}
                            </div>
                            <TreeConnectorSVG count={getUpgrades(item.id).length} inverted={true} />
                            </>
                        )}

                        {/* Current Item */}
                        {renderHierarchyNode(item, true)}

                        {/* Builds From */}
                        {getComponents(item).length > 0 && (
                            <>
                            <TreeConnectorSVG count={getComponents(item).length} />
                            <div className="flex gap-6 items-start">
                                {getComponents(item).map(c => renderHierarchyNode(c, false))}
                            </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex gap-8 items-start">
        
        {/* Left Column: Controls & Grid */}
        <div className="flex-1 w-full">
            {/* Controls */}
            <div className="flex flex-col xl:flex-row gap-4 mb-6 justify-between items-start xl:items-center bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div className="flex flex-wrap gap-2">
                {['All', 'Starter', 'Relic', 'Curio', 'Map Droppable', 'Tier 1', 'Tier 2', 'Tier 3', 'Offense', 'Defense', 'Utility', 'Support', 'Consumable'].map(cat => (
                    <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border ${
                        filter === cat 
                        ? 'bg-mythic-gold text-slate-900 border-mythic-gold' 
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
                    }`}
                    >
                    {cat === 'Starter' && <Briefcase size={14} />}
                    {cat === 'Consumable' && <Coffee size={14} />}
                    {cat === 'Relic' && <Diamond size={14} />}
                    {cat === 'Curio' && <Sparkles size={14} />}
                    {cat === 'Map Droppable' && <Map size={14} />}
                    {cat === 'Offense' && <Sword size={14} />}
                    {cat === 'Defense' && <Shield size={14} />}
                    {cat === 'Utility' && <Zap size={14} />}
                    {cat === 'Support' && <HandHelping size={14} />}
                    {(cat === 'Tier 1' || cat === 'Tier 2' || cat === 'Tier 3') && <Layers size={14} />}
                    {cat}
                    </button>
                ))}
                </div>
                <div className="relative w-full xl:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input 
                        type="text" 
                        placeholder="Search items..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-mythic-gold"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
                    
                    <div className="flex items-center gap-2 mt-2 justify-center">
                        <span className="text-xs bg-slate-950 px-2 py-0.5 rounded text-yellow-500 font-mono">{item.cost > 0 ? `${item.cost}g` : 'Free'}</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded border uppercase ${
                            item.type === 'Starter' ? 'border-purple-500 text-purple-400' :
                            item.type === 'Consumable' ? 'border-orange-500 text-orange-400' :
                            item.type === 'Relic' ? 'border-cyan-500 text-cyan-400' :
                            item.type === 'Curio' ? 'border-pink-500 text-pink-400' :
                            item.type === 'Map Droppable' ? 'border-emerald-500 text-emerald-400' :
                            item.category === 'Offense' ? 'border-red-900 text-red-400' :
                            item.category === 'Defense' ? 'border-blue-900 text-blue-400' :
                            item.category === 'Support' ? 'border-indigo-900 text-indigo-400' :
                            'border-green-900 text-green-400'
                        }`}>
                            {item.type === 'Item' ? item.category : item.type}
                        </span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* Right Column: Inspector Panel (Desktop Only) */}
        <div className="hidden lg:block w-80 xl:w-96 sticky top-24 shrink-0">
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
        <div className="lg:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
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