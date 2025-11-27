
import React, { useState, useEffect } from 'react';
import { GODS, ITEMS } from '../constants';
import { God, Aspect, GodStats } from '../types';
import { X, Shield, Zap, Sword, Hexagon, Search, RotateCcw, Heart, Droplet, Activity, Move, Target, BicepsFlexed, BookOpen, Skull, Layers, Flame, Sparkles, Star, Table } from 'lucide-react';

const AspectHexagon: React.FC<{ 
  isSelected: boolean; 
  onClick: () => void;
  name: string;
}> = ({ isSelected, onClick, name }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col items-center gap-2 cursor-pointer group"
    >
      <div className={`relative w-16 h-16 flex items-center justify-center transition-all duration-300 ${isSelected ? 'scale-110' : 'hover:scale-105 opacity-60 hover:opacity-100'}`}>
        {/* Hexagon Shape Background */}
        <div className={`absolute inset-0 clip-hexagon transition-all duration-300 ${
          isSelected 
            ? 'bg-gradient-to-br from-orange-500 to-yellow-600 shadow-[0_0_15px_rgba(251,191,36,0.6)]' 
            : 'bg-slate-700 border-2 border-slate-600'
        }`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        
        {/* Inner Border for styling */}
        <div className={`absolute inset-0.5 clip-hexagon ${
          isSelected ? 'bg-orange-900/20' : 'bg-slate-800'
        }`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', top: '2px', left: '2px', right: '2px', bottom: '2px' }}></div>

        {/* Symbol */}
        <div className={`relative z-10 transition-colors ${isSelected ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : 'text-slate-500'}`}>
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isSelected ? 'animate-pulse-slow' : ''}>
              <path d="M12 3L16 8H8L12 3Z" fill="currentColor" />
              <path d="M12 10L15 14H9L12 10Z" fill="currentColor" fillOpacity="0.5" />
              <ellipse cx="12" cy="18" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
              <path d="M12 10V18" stroke="currentColor" strokeWidth="2" />
           </svg>
        </div>
        
        {/* Selection Checkmark / Glow */}
        {isSelected && (
           <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-0.5 border-2 border-slate-900 shadow-lg z-20">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
           </div>
        )}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-wider text-center max-w-[80px] leading-tight ${isSelected ? 'text-mythic-gold' : 'text-slate-500'}`}>
        {name}
      </span>
    </div>
  );
};

const StatRow: React.FC<{ icon: React.ReactNode; label: string; value: string | number; }> = ({ icon, label, value }) => (
  <div className="flex justify-between items-center py-1.5 border-b border-slate-800 last:border-0">
    <div className="flex items-center gap-2 text-slate-400">
      <div className="text-mythic-gold">{icon}</div>
      <span className="text-xs font-semibold uppercase">{label}</span>
    </div>
    <div className="flex flex-col items-end">
        <span className="text-slate-200 font-mono text-sm">
            {typeof value === 'number' ? Math.round(value * 10) / 10 : value}
            {label === 'Attack Speed' && typeof value === 'number' ? '%' : ''}
        </span>
    </div>
  </div>
);

export const GodsView: React.FC = () => {
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  
  // activeAspectId: null = Base God, string = Aspect ID
  const [activeAspectId, setActiveAspectId] = useState<string | null>(null);
  
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<'All' | 'Solo' | 'Jungle' | 'Mid' | 'Carry' | 'Support'>('All');
  const [damageFilter, setDamageFilter] = useState<'All' | 'Physical' | 'Magical'>('All');
  const [godLevel, setGodLevel] = useState(1);

  const openGod = (god: God) => {
    setSelectedGod(god);
    setActiveAspectId(null); // Reset to base
    setGodLevel(1);
  };

  const closeGod = () => {
    setSelectedGod(null);
  };

  const roles = ['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'];

  const filteredGods = GODS.filter(god => {
    const matchesSearch = god.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'All' || god.lanes.includes(roleFilter);
    const matchesDamage = damageFilter === 'All' || god.damageType === damageFilter;
    return matchesSearch && matchesRole && matchesDamage;
  });

  const getCurrentStats = (god: God, level: number): GodStats => {
    // Look up stat from the array (level 1 is index 0)
    const index = Math.max(0, Math.min(19, level - 1));
    return god.statsByLevel[index];
  };

  // Helper to get active kit (Base or Aspect)
  const getActiveKit = () => {
      if (!selectedGod) return null;
      if (!activeAspectId) return selectedGod; // Return base God (which has abilities)
      return selectedGod.aspects.find(a => a.id === activeAspectId) || selectedGod;
  };

  const activeKit = getActiveKit();

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Search and Filters */}
      <div className="mb-8 flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800">
        
        <div className="relative w-full xl:w-64">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
           <input 
             type="text" 
             placeholder="Search God Name..." 
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-mythic-gold"
           />
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 w-full xl:w-auto">
          {/* Role Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setRoleFilter(role as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border ${
                    roleFilter === role 
                    ? 'bg-mythic-gold text-slate-900 border-mythic-gold' 
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          
          <div className="w-px h-auto bg-slate-700 hidden md:block"></div>

          {/* Damage Type Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
             <button
               onClick={() => setDamageFilter('All')}
               className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border ${
                  damageFilter === 'All'
                  ? 'bg-slate-200 text-slate-900 border-slate-200' 
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
               }`}
             >
               All Dmg
             </button>
             <button
               onClick={() => setDamageFilter('Physical')}
               className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border ${
                  damageFilter === 'Physical'
                  ? 'bg-red-500 text-white border-red-500' 
                  : 'bg-slate-800 text-red-400 border-slate-700 hover:border-red-900'
               }`}
             >
               <Sword size={12} /> Phys
             </button>
             <button
               onClick={() => setDamageFilter('Magical')}
               className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border ${
                  damageFilter === 'Magical'
                  ? 'bg-purple-500 text-white border-purple-500' 
                  : 'bg-slate-800 text-purple-400 border-slate-700 hover:border-purple-900'
               }`}
             >
               <Sparkles size={12} /> Mag
             </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredGods.map((god) => (
          <div 
            key={god.id}
            onClick={() => openGod(god)}
            className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-700 hover:border-mythic-gold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transform hover:-translate-y-1"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src={god.image} 
                alt={god.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
              
              {/* Aspect Indicator Badge */}
              {god.aspects.length > 0 && (
                 <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur border border-mythic-gold/50 rounded p-1 flex items-center justify-center shadow-lg" title="Has Aspects">
                    <Hexagon size={14} className="text-mythic-gold fill-mythic-gold/20" />
                 </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-mythic-gold font-serif text-lg font-bold uppercase tracking-wider">{god.name}</h3>
              <p className="text-slate-400 text-xs">{god.title}</p>
              <div className="flex flex-wrap items-center gap-1 mt-2">
                 <span className={`text-[10px] px-2 py-0.5 rounded border ${god.damageType === 'Magical' ? 'border-purple-500 text-purple-400' : 'border-red-500 text-red-400'}`}>
                   {god.damageType}
                 </span>
                 {god.lanes.map(lane => (
                   <span key={lane} className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300 border border-slate-600">
                     {lane}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGods.length === 0 && (
         <div className="text-center py-20 text-slate-500">
            <p>No Gods found matching your criteria.</p>
            <button onClick={() => {setSearch(''); setRoleFilter('All'); setDamageFilter('All');}} className="mt-4 text-mythic-gold hover:underline flex items-center gap-2 mx-auto">
               <RotateCcw size={14} /> Reset Filters
            </button>
         </div>
      )}

      {selectedGod && activeKit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 w-full max-w-6xl max-h-[90vh] rounded-2xl border border-mythic-gold/30 shadow-2xl flex flex-col overflow-hidden relative">
            
            {/* Close Button */}
            <button 
              onClick={closeGod}
              className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-mythic-gold hover:text-black rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
              {/* Left Column: Image, Title, Stats (Slider) */}
              <div className="w-full md:w-1/3 xl:w-1/4 relative bg-slate-950 flex flex-col border-r border-slate-800">
                 
                 {/* God Image Header */}
                 <div className="relative h-64 md:h-80 shrink-0">
                   <img src={selectedGod.image} alt={selectedGod.name} className="w-full h-full object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                   <div className="absolute bottom-4 left-6">
                      <h2 className="text-3xl md:text-4xl font-serif text-mythic-gold font-bold mb-1">{selectedGod.name}</h2>
                      <p className="text-slate-300 italic text-sm">{selectedGod.title}</p>
                   </div>
                 </div>

                 {/* Level Slider & Stats Panel */}
                 <div className="p-6 flex-1 overflow-y-auto bg-slate-950">
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs uppercase font-bold text-slate-500">God Level</span>
                        <span className="text-mythic-gold font-mono font-bold text-lg">{godLevel}</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        value={godLevel} 
                        onChange={(e) => setGodLevel(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-mythic-gold"
                      />
                    </div>

                    <div className="space-y-1">
                      {(() => {
                        const stats = getCurrentStats(selectedGod, godLevel);
                        return (
                          <>
                            <StatRow icon={<BicepsFlexed size={14}/>} label="Strength" value={stats.strength} />
                            <StatRow icon={<BookOpen size={14}/>} label="Intelligence" value={stats.intelligence} />
                            <StatRow icon={<Zap size={14}/>} label="Attack Speed" value={stats.attackSpeed} />
                            <StatRow icon={<Heart size={14}/>} label="Lifesteal" value={`${stats.lifesteal}%`} />
                            <StatRow icon={<Target size={14}/>} label="Crit Chance" value={`${stats.critChance}%`} />
                            <StatRow icon={<Skull size={14}/>} label="Crit Damage" value={`${(stats.critDamage * 100).toFixed(0)}%`} />
                            <StatRow icon={<Layers size={14}/>} label="Penetration" value={`${stats.penetration}%`} />
                            <div className="h-4"></div>
                            <StatRow icon={<Shield size={14}/>} label="Phys Protection" value={stats.physicalProtection} />
                            <StatRow icon={<Shield size={14} className="text-purple-400"/>} label="Mag Protection" value={stats.magicalProtection} />
                            <div className="h-4"></div>
                            <StatRow icon={<Heart size={14} className="text-red-500"/>} label="Max Health" value={stats.maxHealth} />
                            <StatRow icon={<Activity size={14} className="text-green-500"/>} label="Health Regen" value={stats.healthRegen} />
                            <StatRow icon={<Droplet size={14} className="text-blue-500"/>} label="Max Mana" value={stats.maxMana} />
                            <StatRow icon={<Activity size={14} className="text-blue-300"/>} label="Mana Regen" value={stats.manaRegen} />
                            <div className="h-4"></div>
                            <StatRow icon={<Move size={14}/>} label="Movement Speed" value={stats.movementSpeed} />
                            <StatRow icon={<RotateCcw size={14}/>} label="Cooldown Rate" value={`${stats.cooldownRate}%`} />
                          </>
                        );
                      })()}
                    </div>
                 </div>
              </div>

              {/* Right Column: Abilities & Aspects */}
              <div className="w-full md:w-2/3 xl:w-3/4 p-6 md:p-8 bg-slate-900 flex flex-col relative">
                
                {/* Aspect Selector (Hexagons) */}
                <div className="mb-8 flex flex-col items-center md:items-start animate-in fade-in">
                    <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold">Select Kit</h3>
                    <div className="flex gap-8 px-4 items-center">
                        {/* BASE GOD SELECTOR */}
                        <AspectHexagon 
                            name="Base God"
                            isSelected={activeAspectId === null}
                            onClick={() => setActiveAspectId(null)}
                        />

                        {/* ASPECT SELECTORS */}
                        {selectedGod.aspects.map((aspect) => (
                            <AspectHexagon 
                                key={aspect.id}
                                name={aspect.name}
                                isSelected={activeAspectId === aspect.id}
                                onClick={() => setActiveAspectId(aspect.id)}
                            />
                        ))}
                    </div>
                    
                    {/* Aspect Description Box (If Aspect Selected) */}
                    {activeAspectId && (
                       <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-800 w-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-mythic-gold"></div>
                            <p className="text-sm text-slate-300 pl-2">
                            <span className="text-mythic-gold font-bold uppercase text-xs block mb-1">Aspect Effect</span>
                            {/* @ts-ignore - we know it's an aspect if activeAspectId is set */}
                            {activeKit.description}
                            </p>
                       </div>
                    )}
                </div>

                {/* Abilities List */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 animate-in fade-in">
                    {/* Recommended Builds Section in God Detail */}
                    {selectedGod.recommendedBuilds.length > 0 && (
                        <div className="mb-8">
                            <h4 className="text-mythic-gold font-serif font-bold uppercase text-sm tracking-wider mb-3 flex items-center gap-2">
                                <Star size={14} className="text-mythic-gold fill-mythic-gold" /> Recommended Builds
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                {selectedGod.recommendedBuilds
                                    .filter(build => {
                                      if (!build.aspectId) return true;
                                      if (build.aspectId === 'base' && activeAspectId === null) return true;
                                      return build.aspectId === activeAspectId;
                                    })
                                    .map((rec, idx) => (
                                    <div key={idx} className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex flex-col sm:flex-row items-center gap-4">
                                        <div className="min-w-[120px]">
                                            <div className="font-bold text-slate-200 text-sm">{rec.name}</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-bold">By {rec.author}</div>
                                            {rec.aspectId && rec.aspectId !== 'base' && <span className="text-[9px] text-mythic-gold bg-mythic-900/50 px-1 rounded mt-1 inline-block border border-mythic-gold/30">Aspect Specific</span>}
                                        </div>
                                        <div className="flex gap-1 flex-wrap justify-center sm:justify-start">
                                            {/* Starter */}
                                            <div className="w-8 h-8 rounded bg-slate-700 border border-slate-600 overflow-hidden relative" title="Starter">
                                                {ITEMS.find(i => i.id === rec.starterId)?.image && <img src={ITEMS.find(i => i.id === rec.starterId)?.image} className="w-full h-full object-cover"/>}
                                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 rounded-tl-sm"></div>
                                            </div>
                                            {/* Items */}
                                            {rec.itemIds.map((id, i) => (
                                                <div key={i} className="w-8 h-8 rounded bg-slate-700 border border-slate-600 overflow-hidden">
                                                    {id && <img src={ITEMS.find(itm => itm.id === id)?.image} className="w-full h-full object-cover"/>}
                                                </div>
                                            ))}
                                            {/* Relic */}
                                            <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 overflow-hidden relative" title="Relic">
                                                {ITEMS.find(i => i.id === rec.relicId)?.image && <img src={ITEMS.find(i => i.id === rec.relicId)?.image} className="w-full h-full object-cover"/>}
                                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {selectedGod.recommendedBuilds.filter(build => {
                                    if (!build.aspectId) return true;
                                    if (build.aspectId === 'base' && activeAspectId === null) return true;
                                    return build.aspectId === activeAspectId;
                                }).length === 0 && (
                                    <p className="text-slate-500 text-sm italic">No specific recommended builds for this kit.</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Passive */}
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700/50">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-600">
                            <Hexagon size={24} className="text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-serif text-blue-400 font-bold text-sm uppercase mb-1">Passive - {activeKit.passive.name}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{activeKit.passive.description}</p>
                                {activeKit.passive.attributes && activeKit.passive.attributes.length > 0 && (
                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-slate-700/50 pt-2">
                                        {activeKit.passive.attributes.map((attr, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs">
                                                <span className="text-yellow-500 font-bold">{attr.label}:</span>
                                                <span className="text-slate-200">{attr.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Skills 1-4 */}
                    {[1, 2, 3, 4].map((num) => {
                        // @ts-ignore
                        const ability = activeKit.abilities[num];
                        return (
                        <div key={num} className="bg-slate-800 p-0 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-colors">
                            {/* Ability Header */}
                            <div className="flex items-center gap-4 p-4 bg-slate-800 border-b border-slate-700/50">
                                <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-600 relative overflow-hidden group">
                                    <span className="absolute bottom-0 right-1 text-[10px] font-bold text-slate-400">{num}</span>
                                    {num === 4 ? <Skull size={28} className="text-red-500" /> : <Zap size={28} className="text-mythic-gold" />}
                                </div>
                                <div>
                                    <h4 className={`font-serif font-bold text-lg ${num === 4 ? 'text-red-400' : 'text-slate-100'}`}>
                                    {ability.name}
                                    </h4>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Ability</p>
                                </div>
                            </div>
                            
                            {/* Ability Body */}
                            <div className="p-4 space-y-4">
                                {/* Detailed Stats Grid */}
                                {ability.attributes && ability.attributes.length > 0 && (
                                    <div className="space-y-2">
                                    {ability.attributes.map((attr: any, i: number) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm">
                                            <span className={`${
                                                attr.label.includes('Damage') ? 'text-blue-400' : 
                                                attr.label.includes('Scaling') ? 'text-blue-400' :
                                                'text-yellow-500'
                                            } font-bold min-w-[120px]`}>
                                                {attr.label}:
                                            </span>
                                            <span className="text-slate-200">{attr.value}</span>
                                        </div>
                                    ))}
                                    </div>
                                )}

                                {/* Description */}
                                <p className="text-slate-300 text-sm leading-relaxed italic border-l-2 border-slate-700 pl-3">
                                    {ability.description}
                                </p>

                                {/* Cooldown & Cost Footer */}
                                <div className="flex flex-wrap gap-6 pt-2 mt-2 border-t border-slate-700/50">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-yellow-500 font-bold">Cooldown</span>
                                        <span className="text-slate-200 font-mono text-sm">{ability.cooldown}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-yellow-500 font-bold">Cost</span>
                                        <span className="text-slate-200 font-mono text-sm">{ability.cost}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                    
                    {/* Basic Attack (Rendered as Card now) */}
                    <div className="bg-slate-800 p-0 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-colors">
                        <div className="flex items-center gap-4 p-4 bg-slate-800 border-b border-slate-700/50">
                            <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-600 relative overflow-hidden">
                                <Sword size={28} className="text-slate-300" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-lg text-slate-200">
                                {activeKit.basicAttack.name}
                                </h4>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Basic Attack</p>
                            </div>
                        </div>
                        <div className="p-4 space-y-4">
                             {activeKit.basicAttack.attributes && activeKit.basicAttack.attributes.length > 0 && (
                                <div className="space-y-2">
                                {activeKit.basicAttack.attributes.map((attr, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm">
                                        <span className="text-blue-400 font-bold min-w-[120px]">{attr.label}:</span>
                                        <span className="text-slate-200">{attr.value}</span>
                                    </div>
                                ))}
                                </div>
                             )}
                             <p className="text-slate-300 text-sm leading-relaxed italic border-l-2 border-slate-700 pl-3">
                                {activeKit.basicAttack.description}
                             </p>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
