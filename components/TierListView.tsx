
import React, { useState, useEffect, useMemo } from 'react';
import { TierListState, TierRank, NamedTierList, Item } from '../types';
import { RotateCcw, User, ArrowLeft, Trophy, Twitch, Youtube, Shield, Sword, Hexagon, Box, Search, Save, Trash2, Edit2, Filter, BicepsFlexed, BookOpen, Zap, Target, Crosshair, Heart, Activity, Droplet } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { auth, db } from '../services/firebase';
import * as FirebaseAuth from 'firebase/auth';
import { doc, setDoc, deleteDoc, getDoc, collection, addDoc } from 'firebase/firestore';

// --- CONSTANTS ---
const STAT_FILTERS = [
    { id: 'Strength', label: 'Strength', icon: <BicepsFlexed size={12} />, keys: ['Strength', 'Physical Power'] },
    { id: 'Intelligence', label: 'Int', icon: <BookOpen size={12} />, keys: ['Intelligence', 'Magical Power'] },
    { id: 'Attack Speed', label: 'AS', icon: <Zap size={12} />, keys: ['Attack Speed'] },
    { id: 'Crit', label: 'Crit', icon: <Target size={12} />, keys: ['Crit'] },
    { id: 'Pen', label: 'Pen', icon: <Crosshair size={12} />, keys: ['Penetration'] },
    { id: 'Lifesteal', label: 'LS', icon: <Heart size={12} className="text-red-400" />, keys: ['Lifesteal'] },
    { id: 'Cooldown', label: 'CDR', icon: <RotateCcw size={12} />, keys: ['Cooldown'] },
    { id: 'Max Health', label: 'HP', icon: <Heart size={12} className="text-green-500" />, keys: ['Max Health'] },
    { id: 'Max Mana', label: 'MP', icon: <Droplet size={12} className="text-blue-500" />, keys: ['Max Mana'] },
    { id: 'HP5', label: 'HP5', icon: <Activity size={12} className="text-green-400" />, keys: ['HP5', 'Health Regen'] },
    { id: 'MP5', label: 'MP5', icon: <Activity size={12} className="text-blue-400" />, keys: ['MP5', 'Mana Regen'] },
    { id: 'Physical Protection', label: 'Phys', icon: <Shield size={12} />, keys: ['Phys'] },
    { id: 'Magical Protection', label: 'Mag', icon: <Shield size={12} className="text-purple-400" />, keys: ['Mag'] },
];

const AspectSymbolSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 3L16 8H8L12 3Z" fill="currentColor" />
        <path d="M12 10L15 14H9L12 10Z" fill="currentColor" fillOpacity="0.5" />
        <ellipse cx="12" cy="18" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 10V18" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const TierListView: React.FC = () => {
  const { gods: GODS, items: ITEMS, tierLists: STREAMER_TIER_LISTS } = useData();
  const [activeTab, setActiveTab] = useState<'streamer' | 'gods' | 'items'>('streamer');
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState<FirebaseAuth.User | null>(null);

  // --- EDITOR STATE ---
  const [listTitle, setListTitle] = useState('');
  const [listDesc, setListDesc] = useState('');
  const [editingListId, setEditingListId] = useState<string | null>(null); // If set, we are updating an existing list
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

  // --- GOD FILTER STATE ---
  const [godSearch, setGodSearch] = useState('');
  const [godRole, setGodRole] = useState('All');
  const [godDamage, setGodDamage] = useState('All');
  const [godPantheon, setGodPantheon] = useState('All');

  // --- ITEM FILTER STATE ---
  const [itemSearch, setItemSearch] = useState('');
  const [itemCategory, setItemCategory] = useState('All');
  const [itemType, setItemType] = useState('All');
  const [itemStats, setItemStats] = useState<string[]>([]);

  // --- TIER DATA ---
  const [tiers, setTiers] = useState<TierListState>({
    [TierRank.S]: [],
    [TierRank.A]: [],
    [TierRank.B]: [],
    [TierRank.C]: [],
    [TierRank.D]: [],
    pool: [] 
  });

  // --- EFFECTS ---
  useEffect(() => {
    const unsub = FirebaseAuth.onAuthStateChanged(auth, async (user) => {
        setCurrentUser(user);
        if (user) {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            setIsAdmin(userDoc.exists() && userDoc.data().isAdmin === true);
        } else {
            setIsAdmin(false);
        }
    });
    return () => unsub();
  }, []);

  // Initialize Pool when Tab Changes
  useEffect(() => {
      if (editingListId) return; // Don't reset if we loaded a list

      if (activeTab === 'gods') {
          const pool = GODS.flatMap(god => {
            const entries = [`${god.id}:base`];
            god.aspects.forEach(aspect => {
                entries.push(`${god.id}:${aspect.id}`);
            });
            return entries;
          });
          setTiers(prev => ({ ...prev, [TierRank.S]: [], [TierRank.A]: [], [TierRank.B]: [], [TierRank.C]: [], [TierRank.D]: [], pool }));
          setListTitle(''); setListDesc('');
      } else if (activeTab === 'items') {
          // Filter out God Specific items by default for general tier lists? Or allow them? 
          // Prompt said "god specific items... dont appear in builder unless that god is selected" - this usually applies to BuilderView. 
          // For TierList, let's include them but they might clutter. Let's include everything for now.
          const pool = ITEMS.map(i => i.id);
          setTiers(prev => ({ ...prev, [TierRank.S]: [], [TierRank.A]: [], [TierRank.B]: [], [TierRank.C]: [], [TierRank.D]: [], pool }));
          setListTitle(''); setListDesc('');
      }
  }, [activeTab, GODS, ITEMS]);

  // --- FILTER LOGIC ---

  const getFilteredPool = () => {
      if (activeTab === 'gods') {
          return tiers.pool.filter(entry => {
              const [godId, aspectId] = entry.split(':');
              const god = GODS.find(g => g.id === godId);
              if (!god) return false;

              const matchesSearch = god.name.toLowerCase().includes(godSearch.toLowerCase());
              const matchesRole = godRole === 'All' || god.lanes.includes(godRole);
              const matchesDamage = godDamage === 'All' || god.damageType === godDamage;
              const matchesPantheon = godPantheon === 'All' || god.pantheon === godPantheon;

              return matchesSearch && matchesRole && matchesDamage && matchesPantheon;
          }).sort((a,b) => a.localeCompare(b)); // Simple string sort for stability
      } else {
          // Items
          return tiers.pool.filter(id => {
              const item = ITEMS.find(i => i.id === id);
              if (!item) return false;

              // 1. Search
              const matchesSearch = item.name.toLowerCase().includes(itemSearch.toLowerCase());
              // 2. Category
              const matchesCategory = itemCategory === 'All' || item.category === itemCategory;
              // 3. Type
              let matchesType = true;
              if (itemType !== 'All') {
                  if (itemType.startsWith('Tier')) {
                      const t = parseInt(itemType.split(' ')[1]);
                      matchesType = item.tier === t;
                  } else {
                      matchesType = item.type === itemType;
                  }
              }
              // 4. Stats
              let matchesStats = true;
              if (itemStats.length > 0) {
                  matchesStats = itemStats.every(statId => {
                      const filter = STAT_FILTERS.find(f => f.id === statId);
                      if (!filter) return false;
                      return Object.keys(item.stats).some(itemKey => 
                          filter.keys.some(filterKey => itemKey.toLowerCase().includes(filterKey.toLowerCase()))
                      );
                  });
              }

              return matchesSearch && matchesCategory && matchesType && matchesStats;
          }).sort((a,b) => {
              const iA = ITEMS.find(i => i.id === a);
              const iB = ITEMS.find(i => i.id === b);
              return (iA?.name || '').localeCompare(iB?.name || '');
          });
      }
  };

  // --- ACTIONS ---

  const handleEntryClick = (id: string) => {
      setSelectedEntryId(prev => prev === id ? null : id);
  };

  const moveToTier = (rank: TierRank | 'pool') => {
      if (!selectedEntryId) return;

      const newTiers = { ...tiers };
      
      // Remove from current location
      Object.keys(newTiers).forEach(key => {
          // @ts-ignore
          newTiers[key] = newTiers[key].filter(id => id !== selectedEntryId);
      });

      // Add to new location
      // @ts-ignore
      newTiers[rank].push(selectedEntryId);
      
      setTiers(newTiers);
      setSelectedEntryId(null);
  };

  const loadList = (list: NamedTierList) => {
      setListTitle(list.name);
      setListDesc(list.description);
      setTiers(list.data);
      setEditingListId(list.id);
      setActiveTab(list.type || 'gods'); // Default to gods if type missing
  };

  const saveList = async () => {
      if (!isAdmin || !listTitle) return;

      const listData: Omit<NamedTierList, 'id'> = {
          name: listTitle,
          description: listDesc,
          author: currentUser?.displayName || 'Admin',
          date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          type: activeTab === 'gods' ? 'gods' : 'items',
          data: tiers,
          streamerInfo: {
              platform: 'twitch', // Default placeholder
              url: '',
              isLive: false
          }
      };

      try {
          if (editingListId && STREAMER_TIER_LISTS.find(l => l.id === editingListId)) {
              // Update existing
              await setDoc(doc(db, 'tierlists', editingListId), listData, { merge: true });
          } else {
              // Create new
              await addDoc(collection(db, 'tierlists'), listData);
          }
          alert('Tier List Saved!');
          setEditingListId(null);
          setListTitle('');
          setListDesc('');
      } catch (err) {
          console.error(err);
          alert('Failed to save.');
      }
  };

  const deleteList = async () => {
      if (!isAdmin || !editingListId) return;
      if (!confirm('Are you sure you want to delete this tier list?')) return;

      try {
          await deleteDoc(doc(db, 'tierlists', editingListId));
          setEditingListId(null);
          setListTitle('');
          setListDesc('');
          // Reset pool
          setActiveTab(activeTab); // Trigger effect
      } catch (err) {
          console.error(err);
      }
  };

  const resetBuilder = () => {
      setEditingListId(null);
      setListTitle('');
      setListDesc('');
      // Trigger reset via tab toggle trick or explicit logic
      if (activeTab === 'gods') {
        const pool = GODS.flatMap(god => {
            const entries = [`${god.id}:base`];
            god.aspects.forEach(aspect => {
                entries.push(`${god.id}:${aspect.id}`);
            });
            return entries;
          });
          setTiers({ [TierRank.S]: [], [TierRank.A]: [], [TierRank.B]: [], [TierRank.C]: [], [TierRank.D]: [], pool });
      } else {
          const pool = ITEMS.map(i => i.id);
          setTiers({ [TierRank.S]: [], [TierRank.A]: [], [TierRank.B]: [], [TierRank.C]: [], [TierRank.D]: [], pool });
      }
  };

  // --- RENDERERS ---

  const renderGodEntry = (id: string, inPool = false) => {
      const [godId, aspectId] = id.split(':');
      const god = GODS.find(g => g.id === godId);
      if (!god) return null;
      
      const aspect = god.aspects.find(a => a.id === aspectId);
      const isAspect = !!aspect;
      // ALWAYS use the Base God image for consistency
      const displayImage = god.image;
      
      const isSelected = selectedEntryId === id;

      return (
          <div 
            key={id}
            onClick={() => handleEntryClick(id)}
            className={`relative group cursor-pointer transition-all ${inPool ? 'w-14 h-14' : 'w-16 h-20'} 
                ${isSelected ? 'ring-2 ring-mythic-gold scale-110 z-10' : 'hover:scale-105'}
            `}
            title={isAspect ? `${god.name} (${aspect?.name})` : god.name}
          >
              <div className="w-full h-full rounded overflow-hidden border border-slate-700 bg-slate-900 relative">
                  <img src={displayImage} className="w-full h-full object-cover" />
                  
                  {/* Aspect Overlay: Top Right */}
                  {isAspect && (
                      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-900 border-l border-b border-slate-600 z-10 overflow-hidden">
                          {aspect?.image ? (
                              <img src={aspect.image} className="w-full h-full object-cover" />
                          ) : (
                              <AspectSymbolSVG className="w-full h-full text-mythic-gold p-0.5" />
                          )}
                      </div>
                  )}
                  
                  {/* Label: Always use God Name */}
                  <div className="absolute bottom-0 w-full bg-black/70 text-[8px] text-center text-white truncate px-0.5">
                      {god.name}
                  </div>
              </div>
              {isSelected && <div className="absolute inset-0 bg-mythic-gold/20 border-2 border-mythic-gold rounded pointer-events-none"></div>}
          </div>
      );
  };

  const renderItemEntry = (id: string, inPool = false) => {
      const item = ITEMS.find(i => i.id === id);
      if (!item) return null;
      const isSelected = selectedEntryId === id;

      return (
          <div 
            key={id}
            onClick={() => handleEntryClick(id)}
            className={`relative group cursor-pointer transition-all ${inPool ? 'w-12 h-12' : 'w-14 h-14'} 
                ${isSelected ? 'ring-2 ring-mythic-gold scale-110 z-10' : 'hover:scale-105'}
            `}
            title={item.name}
          >
              <div className="w-full h-full rounded overflow-hidden border border-slate-700 bg-black">
                  <img src={item.image} className="w-full h-full object-cover" />
                  {item.tier && <div className="absolute top-0 right-0 bg-black/80 text-[7px] text-white px-1 rounded-bl">T{item.tier}</div>}
              </div>
              {isSelected && <div className="absolute inset-0 bg-mythic-gold/20 border-2 border-mythic-gold rounded pointer-events-none"></div>}
          </div>
      );
  };

  const tierColors: Record<TierRank, string> = {
    [TierRank.S]: 'bg-red-600 border-red-500',
    [TierRank.A]: 'bg-orange-500 border-orange-400',
    [TierRank.B]: 'bg-yellow-500 border-yellow-400',
    [TierRank.C]: 'bg-green-500 border-green-400',
    [TierRank.D]: 'bg-blue-500 border-blue-400',
  };

  // --- VIEWS ---

  if (activeTab === 'streamer') {
      return (
          <div className="container mx-auto px-4 py-8 pb-24">
              <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-serif text-slate-100 font-bold">Community Tier Lists</h2>
                  <div className="flex gap-2">
                      <button onClick={() => setActiveTab('gods')} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm font-bold flex items-center gap-2">
                          <Sword size={16}/> Create God List
                      </button>
                      <button onClick={() => setActiveTab('items')} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm font-bold flex items-center gap-2">
                          <Shield size={16}/> Create Item List
                      </button>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {STREAMER_TIER_LISTS.map(list => (
                      <div 
                        key={list.id} 
                        onClick={() => loadList(list)}
                        className="bg-slate-800 border border-slate-700 hover:border-mythic-gold rounded-xl p-5 cursor-pointer group transition-all"
                      >
                          <div className="flex justify-between items-start mb-3">
                              <div>
                                  <h3 className="font-bold text-slate-100 group-hover:text-mythic-gold">{list.name}</h3>
                                  <p className="text-xs text-slate-500 font-bold uppercase">By {list.author}</p>
                              </div>
                          </div>
                          <p className="text-slate-400 text-sm line-clamp-2 mb-4">{list.description}</p>
                          <div className="text-[10px] text-slate-600 font-mono text-right">{list.date}</div>
                      </div>
                  ))}
              </div>
          </div>
      );
  }

  // --- BUILDER VIEW ---
  return (
      <div className="container mx-auto px-4 py-4 min-h-screen flex flex-col pb-24">
          
          {/* Builder Header */}
          <div className="bg-slate-900 border border-slate-800 p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shrink-0 rounded-t-xl sticky top-20 z-30 shadow-xl">
              <div className="flex items-center gap-4 w-full md:w-auto">
                  <button onClick={() => { setActiveTab('streamer'); resetBuilder(); }} className="text-slate-400 hover:text-white"><ArrowLeft size={20} /></button>
                  <div className="flex flex-col gap-1 w-full md:w-96">
                      <input 
                          value={listTitle}
                          onChange={(e) => setListTitle(e.target.value)}
                          placeholder={activeTab === 'gods' ? "My God Tier List" : "My Item Tier List"}
                          className="bg-transparent border-b border-slate-700 text-lg font-bold text-white focus:border-mythic-gold outline-none placeholder-slate-600"
                      />
                      <input 
                          value={listDesc}
                          onChange={(e) => setListDesc(e.target.value)}
                          placeholder="Brief description..."
                          className="bg-transparent text-xs text-slate-400 focus:text-white outline-none placeholder-slate-700"
                      />
                  </div>
              </div>
              
              <div className="flex gap-2">
                  <button onClick={resetBuilder} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded"><RotateCcw size={18}/></button>
                  {isAdmin && (
                      <>
                        <button onClick={saveList} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded font-bold text-xs">
                            <Save size={14} /> Save
                        </button>
                        {editingListId && (
                            <button onClick={deleteList} className="p-2 bg-red-900/50 hover:bg-red-600 text-red-200 rounded">
                                <Trash2 size={18} />
                            </button>
                        )}
                      </>
                  )}
              </div>
          </div>

          <div className="flex-1 flex flex-col md:flex-row">
              
              {/* LEFT: TIERS (Scrolls with page) */}
              <div className="flex-1 space-y-2 bg-slate-950/50 border-x border-slate-800 p-4">
                  {(Object.keys(tierColors) as TierRank[]).map(rank => (
                      <div 
                        key={rank}
                        onClick={() => selectedEntryId && moveToTier(rank)}
                        className={`flex min-h-[120px] bg-slate-900 border border-slate-700 rounded-lg overflow-hidden transition-colors ${selectedEntryId ? 'hover:ring-2 hover:ring-mythic-gold/50 cursor-pointer' : ''}`}
                      >
                          <div className={`w-16 md:w-24 flex items-center justify-center shrink-0 ${tierColors[rank]}`}>
                              <span className="text-2xl md:text-4xl font-black text-white drop-shadow-md">{rank}</span>
                          </div>
                          <div className="flex-1 p-2 flex flex-wrap gap-2 content-start">
                              {tiers[rank].map(id => activeTab === 'gods' ? renderGodEntry(id) : renderItemEntry(id))}
                          </div>
                      </div>
                  ))}
              </div>

              {/* RIGHT: POOL & FILTERS (Sticky) */}
              <div className="w-full md:w-96 shrink-0 relative">
                  <div className="md:sticky md:top-36 flex flex-col h-[calc(100vh-10rem)] border border-slate-800 bg-slate-900 rounded-b-xl md:rounded-xl overflow-hidden mt-4 md:mt-0 shadow-2xl">
                      {/* Filters Header */}
                      <div className="p-3 border-b border-slate-800 bg-slate-950 space-y-3 shrink-0">
                          {/* Search */}
                          <div className="relative">
                              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                              <input 
                                  value={activeTab === 'gods' ? godSearch : itemSearch}
                                  onChange={(e) => activeTab === 'gods' ? setGodSearch(e.target.value) : setItemSearch(e.target.value)}
                                  placeholder={`Search ${activeTab}...`}
                                  className="w-full bg-slate-800 border border-slate-700 rounded py-1.5 pl-8 text-xs text-white focus:border-mythic-gold outline-none"
                              />
                          </div>

                          {/* Dynamic Filters */}
                          {activeTab === 'gods' ? (
                              <div className="space-y-2">
                                  <select value={godRole} onChange={(e) => setGodRole(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 p-1">
                                      {['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'].map(r => <option key={r} value={r}>{r === 'Mid' ? 'Middle' : r}</option>)}
                                  </select>
                                  <div className="flex gap-2">
                                      <button onClick={() => setGodDamage(prev => prev === 'Physical' ? 'All' : 'Physical')} className={`flex-1 text-[10px] py-1 border rounded ${godDamage === 'Physical' ? 'bg-red-900/50 border-red-500 text-red-200' : 'border-slate-700 text-slate-400'}`}>Physical</button>
                                      <button onClick={() => setGodDamage(prev => prev === 'Magical' ? 'All' : 'Magical')} className={`flex-1 text-[10px] py-1 border rounded ${godDamage === 'Magical' ? 'bg-purple-900/50 border-purple-500 text-purple-200' : 'border-slate-700 text-slate-400'}`}>Magical</button>
                                  </div>
                              </div>
                          ) : (
                              <div className="space-y-2">
                                  <div className="flex gap-1 overflow-x-auto pb-1 custom-scrollbar">
                                      {['All', 'Offense', 'Defense', 'Utility', 'Hybrid'].map(cat => (
                                          <button key={cat} onClick={() => setItemCategory(cat)} className={`whitespace-nowrap px-2 py-1 rounded text-[10px] border ${itemCategory === cat ? 'bg-mythic-gold text-black border-mythic-gold' : 'border-slate-700 text-slate-400'}`}>{cat}</button>
                                      ))}
                                  </div>
                                  <select value={itemType} onChange={(e) => setItemType(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 p-1">
                                      {['All', 'Tier 3', 'Tier 2', 'Tier 1', 'Starter', 'Relic'].map(t => <option key={t} value={t}>{t}</option>)}
                                  </select>
                                  {/* Stat Filters Expandable */}
                                  <div className="grid grid-cols-4 gap-1">
                                      {STAT_FILTERS.map(stat => (
                                          <button
                                              key={stat.id}
                                              onClick={() => setItemStats(prev => prev.includes(stat.id) ? prev.filter(s => s !== stat.id) : [...prev, stat.id])}
                                              className={`flex items-center justify-center p-1 rounded border text-[8px] font-bold ${itemStats.includes(stat.id) ? 'bg-slate-700 border-mythic-gold text-mythic-gold' : 'bg-slate-800 border-slate-700 text-slate-500'}`}
                                              title={stat.label}
                                          >
                                              {stat.icon}
                                          </button>
                                      ))}
                                  </div>
                              </div>
                          )}
                      </div>

                      {/* Pool Grid */}
                      <div className={`flex-1 overflow-y-auto p-2 bg-slate-900 custom-scrollbar ${selectedEntryId ? 'bg-slate-800/50' : ''}`} onClick={() => selectedEntryId && moveToTier('pool')}>
                          {selectedEntryId && <div className="sticky top-0 z-20 bg-mythic-gold/10 text-mythic-gold text-xs font-bold text-center py-1 mb-2 border border-mythic-gold/30 rounded">Click a Tier on the left to place</div>}
                          
                          <div className="flex flex-wrap gap-2 content-start justify-center">
                              {getFilteredPool().map(id => activeTab === 'gods' ? renderGodEntry(id, true) : renderItemEntry(id, true))}
                              {getFilteredPool().length === 0 && <span className="text-slate-600 text-xs italic mt-4">No results found.</span>}
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
};
