import React, { useState, useEffect, useMemo } from 'react';
import { TierListState, TierRank, NamedTierList, Item } from '../types';
import { RotateCcw, User, ArrowLeft, Trophy, Twitch, Youtube, Shield, Sword, Hexagon, Box, Search, Save, Trash2, Edit2, Filter, BicepsFlexed, BookOpen, Zap, Target, Crosshair, Heart, Activity, Droplet, X, Copy } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { STAT_FILTERS, filterGodEntries, filterItemEntries, getGodRoles, getGodPantheons, getGodDamageTypes, getItemCategories, getItemTypes } from '../services/filters';
import { auth, db } from '../services/firebase';
import * as FirebaseAuth from 'firebase/auth';
import { doc, setDoc, deleteDoc, getDoc, collection, addDoc } from 'firebase/firestore';

// --- CONSTANTS ---
const TIER_CONFIG: Record<TierRank, { 
  label: string; 
  description: string; 
  gradient: string; 
  glow: string; 
  textGlow: string;
  borderGlow: string;
}> = {
  [TierRank.S]: { 
    label: 'S', 
    description: 'Meta Defining', 
    gradient: 'bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-600',
    glow: 'shadow-[0_0_30px_rgba(251,191,36,0.6)]',
    textGlow: 'drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]',
    borderGlow: 'ring-2 ring-amber-400/50',
  },
  [TierRank.A]: { 
    label: 'A', 
    description: 'Strong Pick', 
    gradient: 'bg-gradient-to-br from-red-500 via-rose-600 to-red-700',
    glow: 'shadow-[0_0_25px_rgba(239,68,68,0.5)]',
    textGlow: 'drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]',
    borderGlow: 'ring-2 ring-red-500/40',
  },
  [TierRank.B]: { 
    label: 'B', 
    description: 'Solid Choice', 
    gradient: 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700',
    glow: 'shadow-[0_0_20px_rgba(139,92,246,0.4)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]',
    borderGlow: 'ring-2 ring-violet-500/30',
  },
  [TierRank.C]: { 
    label: 'C', 
    description: 'Situational', 
    gradient: 'bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-700',
    glow: 'shadow-[0_0_15px_rgba(20,184,166,0.35)]',
    textGlow: 'drop-shadow-[0_0_6px_rgba(20,184,166,0.6)]',
    borderGlow: 'ring-2 ring-teal-500/25',
  },
  [TierRank.D]: { 
    label: 'D', 
    description: 'Needs Buffs', 
    gradient: 'bg-gradient-to-br from-slate-500 via-gray-600 to-zinc-700',
    glow: 'shadow-[0_0_10px_rgba(100,116,139,0.3)]',
    textGlow: 'drop-shadow-[0_0_4px_rgba(100,116,139,0.5)]',
    borderGlow: 'ring-1 ring-slate-500/20',
  },
};

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
  const [editingListId, setEditingListId] = useState<string | null>(null);
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTierListForModal, setEditingTierListForModal] = useState<NamedTierList | null>(null);
  const [editModalTitle, setEditModalTitle] = useState('');
  const [editModalDesc, setEditModalDesc] = useState('');

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

  useEffect(() => {
      if (editingListId) return;

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
          const pool = ITEMS.map(i => i.id);
          setTiers(prev => ({ ...prev, [TierRank.S]: [], [TierRank.A]: [], [TierRank.B]: [], [TierRank.C]: [], [TierRank.D]: [], pool }));
          setListTitle(''); setListDesc('');
      }
  }, [activeTab, GODS, ITEMS]);

  // --- FILTER LOGIC ---
  const getFilteredPool = () => {
      if (activeTab === 'gods') {
          return filterGodEntries(tiers.pool, GODS, {
              search: godSearch,
              role: godRole,
              pantheon: godPantheon,
              damageType: godDamage
          });
      } else {
          return filterItemEntries(tiers.pool, ITEMS, {
              search: itemSearch,
              category: itemCategory,
              type: itemType,
              stats: itemStats
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
      Object.keys(newTiers).forEach(key => {
          // @ts-ignore
          newTiers[key] = newTiers[key].filter(id => id !== selectedEntryId);
      });
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
      setActiveTab(list.type || 'gods');
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
              platform: 'twitch',
              url: '',
              isLive: false
          }
      };

      try {
          if (editingListId && STREAMER_TIER_LISTS.find(l => l.id === editingListId)) {
              await setDoc(doc(db, 'tierlists', editingListId), listData, { merge: true });
          } else {
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
          setActiveTab(activeTab);
      } catch (err) {
          console.error(err);
      }
  };

  const openEditModal = (list: NamedTierList) => {
      setEditingTierListForModal(list);
      setEditModalTitle(list.name);
      setEditModalDesc(list.description);
      setShowEditModal(true);
  };

  const closeEditModal = () => {
      setShowEditModal(false);
      setEditingTierListForModal(null);
      setEditModalTitle('');
      setEditModalDesc('');
  };

  const saveEditedTierList = async () => {
      if (!isAdmin || !editingTierListForModal) return;
      
      try {
          await setDoc(doc(db, 'tierlists', editingTierListForModal.id), {
              name: editModalTitle,
              description: editModalDesc,
          }, { merge: true });
          
          alert('Tier List Updated!');
          closeEditModal();
      } catch (err) {
          console.error(err);
          alert('Failed to update tier list.');
      }
  };

  const deleteExistingTierList = async (listId: string) => {
      if (!isAdmin) return;
      if (!confirm('Are you sure you want to delete this tier list? This action cannot be undone.')) return;

      try {
          await deleteDoc(doc(db, 'tierlists', listId));
          alert('Tier List Deleted!');
          closeEditModal();
      } catch (err) {
          console.error(err);
          alert('Failed to delete tier list.');
      }
  };

  const resetBuilder = () => {
      setEditingListId(null);
      setListTitle('');
      setListDesc('');
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

  const duplicateTierList = async (list: NamedTierList) => {
      if (!isAdmin) return;
      
      const newListName = `${list.name} (Copy)`;
      const listData: Omit<NamedTierList, 'id'> = {
          name: newListName,
          description: list.description,
          author: currentUser?.displayName || 'Admin',
          date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          type: list.type,
          data: list.data,
          streamerInfo: list.streamerInfo
      };

      try {
          await addDoc(collection(db, 'tierlists'), listData);
          alert('Tier List Duplicated!');
      } catch (err) {
          console.error(err);
          alert('Failed to duplicate tier list.');
      }
  };

  // --- RENDERERS ---
  const renderGodEntry = (id: string, inPool = false) => {
      const [godId, aspectId] = id.split(':');
      const god = GODS.find(g => g.id === godId);
      if (!god) return null;
      
      const aspect = god.aspects.find(a => a.id === aspectId);
      const isAspect = !!aspect;
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
                  
                  {isAspect && (
                      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-900 border-l border-b border-slate-600 z-10 overflow-hidden">
                          {aspect?.image ? (
                              <img src={aspect.image} className="w-full h-full object-cover" />
                          ) : (
                              <AspectSymbolSVG className="w-full h-full text-mythic-gold p-0.5" />
                          )}
                      </div>
                  )}
                  
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

  // --- VIEWS ---
  if (activeTab === 'streamer') {
      return (
          <>
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

              {STREAMER_TIER_LISTS.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 bg-slate-900/50 border border-slate-800 rounded-xl">
                      <Trophy size={48} className="text-slate-600 mb-4" />
                      <p className="text-slate-400 font-semibold mb-2">No Tier Lists Yet</p>
                      <p className="text-slate-500 text-sm">Create a new god or item tier list to get started!</p>
                  </div>
              ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {STREAMER_TIER_LISTS.map(list => (
                          <div 
                            key={list.id} 
                            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-mythic-gold/50 rounded-xl p-5 group transition-all hover:shadow-xl hover:shadow-mythic-gold/20"
                          >
                              <div className="flex justify-between items-start mb-3">
                                  <div className="flex-1">
                                      <h3 className="font-bold text-slate-100 group-hover:text-mythic-gold transition-colors">{list.name}</h3>
                                      <p className="text-xs text-slate-500 font-bold uppercase">By {list.author}</p>
                                  </div>
                                  <div className={`px-2 py-1 rounded text-xs font-bold ${list.type === 'gods' ? 'bg-red-900/30 text-red-300' : 'bg-blue-900/30 text-blue-300'}`}>
                                      {list.type === 'gods' ? 'Gods' : 'Items'}
                                  </div>
                              </div>
                              <p className="text-slate-400 text-sm line-clamp-2 mb-4 min-h-[2.5rem]">{list.description}</p>
                              
                              <div className="flex items-center justify-between text-[10px] text-slate-600 font-mono mb-4">
                                  <span>{list.date}</span>
                                  <span>{Object.values(list.data).reduce((sum, arr) => sum + arr.length, 0)} entries</span>
                              </div>

                              <div className="flex gap-2">
                                  <button 
                                      onClick={() => loadList(list)}
                                      className="flex-1 px-3 py-2 bg-mythic-gold/10 hover:bg-mythic-gold/20 border border-mythic-gold/30 hover:border-mythic-gold text-mythic-gold rounded text-xs font-bold transition-all"
                                  >
                                      View
                                  </button>
                                  {isAdmin && (
                                      <>
                                          <button 
                                              onClick={() => duplicateTierList(list)}
                                              className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded transition-all"
                                              title="Duplicate tier list"
                                          >
                                              <Copy size={16} />
                                          </button>
                                          <button 
                                              onClick={() => openEditModal(list)}
                                              className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded transition-all"
                                              title="Edit tier list"
                                          >
                                              <Edit2 size={16} />
                                          </button>
                                          <button 
                                              onClick={() => deleteExistingTierList(list.id)}
                                              className="p-2 bg-red-900/30 hover:bg-red-900/50 text-red-300 hover:text-red-200 rounded transition-all"
                                              title="Delete tier list"
                                          >
                                              <Trash2 size={16} />
                                          </button>
                                      </>
                                  )}
                              </div>
                          </div>
                      ))}
                  </div>
              )}
          </div>

          {/* Edit Modal */}
          {showEditModal && editingTierListForModal && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full shadow-2xl">
                      <div className="flex justify-between items-center p-6 border-b border-slate-700">
                          <h3 className="text-xl font-bold text-white">Edit Tier List</h3>
                          <button onClick={closeEditModal} className="text-slate-400 hover:text-white">
                              <X size={20} />
                          </button>
                      </div>

                      <div className="p-6 space-y-4">
                          <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Title</label>
                              <input 
                                  value={editModalTitle}
                                  onChange={(e) => setEditModalTitle(e.target.value)}
                                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:border-mythic-gold outline-none"
                              />
                          </div>

                          <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Description</label>
                              <textarea 
                                  value={editModalDesc}
                                  onChange={(e) => setEditModalDesc(e.target.value)}
                                  rows={3}
                                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:border-mythic-gold outline-none resize-none"
                              />
                          </div>

                          <div className="bg-slate-800 border border-slate-700 rounded px-3 py-2">
                              <p className="text-xs text-slate-400 font-mono">
                                  <span className="text-slate-500">Type:</span> {editingTierListForModal.type === 'gods' ? 'Gods' : 'Items'}
                              </p>
                              <p className="text-xs text-slate-400 font-mono">
                                  <span className="text-slate-500">Created:</span> {editingTierListForModal.date}
                              </p>
                          </div>
                      </div>

                      <div className="flex gap-2 p-6 border-t border-slate-700">
                          <button 
                              onClick={closeEditModal}
                              className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-bold text-sm transition-all"
                          >
                              Cancel
                          </button>
                          <button 
                              onClick={() => {
                                  duplicateTierList(editingTierListForModal);
                                  closeEditModal();
                              }}
                              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-bold text-sm transition-all flex items-center gap-1"
                              title="Create a copy of this tier list"
                          >
                              <Copy size={14} /> Copy
                          </button>
                          <button 
                              onClick={saveEditedTierList}
                              className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded font-bold text-sm transition-all"
                          >
                              Save Changes
                          </button>
                          <button 
                              onClick={() => {
                                  deleteExistingTierList(editingTierListForModal.id);
                              }}
                              className="px-4 py-2 bg-red-900/50 hover:bg-red-900/70 text-red-200 rounded font-bold text-sm transition-all"
                              title="Delete this tier list"
                          >
                              <Trash2 size={16} />
                          </button>
                      </div>
                  </div>
              </div>
          )}
          </>
      );
  }

  // --- BUILDER VIEW ---
  return (
      <div className="container mx-auto px-4 py-2 min-h-screen flex flex-col pb-24">
          
          {/* Builder Header - NOT STICKY - Allow tier list to flow below */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-800 p-3 flex flex-col gap-3 shrink-0 rounded-t-xl shadow-xl shadow-slate-900/50">
              {/* Top Row: Back button, Title, Controls */}
              <div className="flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                      <button onClick={() => { setActiveTab('streamer'); resetBuilder(); }} className="text-slate-400 hover:text-white transition-colors shrink-0"><ArrowLeft size={20} /></button>
                      <input 
                          value={listTitle}
                          onChange={(e) => setListTitle(e.target.value)}
                          placeholder={activeTab === 'gods' ? "My God Tier List" : "My Item Tier List"}
                          className="bg-transparent border-b border-slate-700 text-base font-bold text-white focus:border-mythic-gold outline-none placeholder-slate-600 transition-colors min-w-0 flex-1"
                      />
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                      <div className="flex gap-1 bg-slate-800/50 rounded px-2 py-1 border border-slate-700">
                          <span className="text-xs text-slate-500 font-bold">Items:</span>
                          <span className="text-xs text-mythic-gold font-bold">{Object.values(tiers).reduce((sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0), 0) - tiers.pool.length}</span>
                      </div>
                      <button onClick={resetBuilder} className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"><RotateCcw size={16}/></button>
                      {isAdmin && (
                          <>
                            <button onClick={saveList} className="flex items-center gap-1 px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded font-bold text-xs transition-colors">
                                <Save size={14} /> Save
                            </button>
                            {editingListId && (
                                <button onClick={deleteList} className="p-1.5 bg-red-900/50 hover:bg-red-600 text-red-200 rounded transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            )}
                          </>
                      )}
                  </div>
              </div>

              {/* Bottom Row: Description only */}
              <input 
                  value={listDesc}
                  onChange={(e) => setListDesc(e.target.value)}
                  placeholder="Brief description..."
                  className="bg-transparent border-b border-slate-700 text-xs text-slate-400 focus:text-white outline-none placeholder-slate-700 transition-colors"
              />
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-0">
              
              {/* LEFT: TIERS - ENHANCED */}
              <div className="flex-1 space-y-2 bg-slate-950/50 border-x border-slate-800 p-3">
                  {(Object.keys(TIER_CONFIG) as TierRank[]).map(rank => {
                      const config = TIER_CONFIG[rank];
                      const itemCount = tiers[rank].length;
                      return (
                          <div 
                            key={rank}
                            onClick={() => selectedEntryId && moveToTier(rank)}
                            className={`
                              flex min-h-[100px] bg-slate-900/80 backdrop-blur-sm 
                              border border-slate-700/50 rounded-lg transition-all duration-300
                              ${selectedEntryId ? 'hover:ring-2 hover:ring-mythic-gold/50 cursor-pointer' : ''}
                              ${config.borderGlow}
                            `}
                          >
                              {/* TIER BADGE - Enhanced */}
                              <div className={`
                                w-20 md:w-28 flex flex-col items-center justify-center shrink-0 
                                ${config.gradient} ${config.glow}
                                relative z-20 overflow-visible
                              `}>
                                  {/* Animated shine effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_3s_infinite]" 
                                       style={{ animation: 'shimmer 3s infinite' }} />
                                  
                                  {/* Rank Letter */}
                                  <span className={`
                                    text-3xl md:text-4xl font-black text-white 
                                    ${config.textGlow} relative z-10
                                    tracking-tight
                                  `}>
                                    {config.label}
                                  </span>
                                  
                                  {/* Description & Count */}
                                  <span className="text-[8px] md:text-[9px] font-semibold text-white/90 uppercase tracking-widest mt-0.5 relative z-10 text-center px-0.5">
                                    {config.description}
                                  </span>
                                  <span className="text-[7px] font-bold text-white/70 mt-0.5 bg-black/30 px-1.5 py-0.5 rounded-full">
                                    {itemCount}
                                  </span>
                              </div>
                              
                              {/* ITEMS CONTAINER */}
                              <div className="flex-1 p-2 flex flex-wrap gap-2 content-start bg-gradient-to-r from-slate-900/50 to-transparent overflow-y-auto relative z-0">
                                  {tiers[rank].map(id => activeTab === 'gods' ? renderGodEntry(id) : renderItemEntry(id))}
                                  {tiers[rank].length === 0 && (
                                    <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs italic">
                                      {selectedEntryId ? `→ Add to ${rank}` : `Add to ${rank}`}
                                    </div>
                                  )}
                              </div>
                          </div>
                      );
                  })}
              </div>

              {/* RIGHT: POOL & FILTERS (Sticky) */}
              <div className="w-full md:w-80 shrink-0 relative">
                  <div className="md:sticky md:top-32 flex flex-col h-[calc(100vh-8rem)] border border-slate-800 bg-slate-900 rounded-b-lg md:rounded-lg overflow-hidden mt-0 shadow-2xl">
                      {/* Filters Header */}
                      <div className="p-2 border-b border-slate-800 bg-slate-950 space-y-2 shrink-0">
                          {/* Search */}
                          <div className="relative">
                              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500" size={12} />
                              <input 
                                  value={activeTab === 'gods' ? godSearch : itemSearch}
                                  onChange={(e) => activeTab === 'gods' ? setGodSearch(e.target.value) : setItemSearch(e.target.value)}
                                  placeholder={`Search...`}
                                  className="w-full bg-slate-800 border border-slate-700 rounded py-1 pl-7 text-xs text-white focus:border-mythic-gold outline-none"
                              />
                          </div>

                          {/* Dynamic Filters */}
                          {activeTab === 'gods' ? (
                              <div className="space-y-1">
                                  <select value={godRole} onChange={(e) => setGodRole(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 p-1">
                                      {['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'].map(r => <option key={r} value={r}>{r === 'Mid' ? 'Middle' : r}</option>)}
                                  </select>
                                  <div className="flex gap-1">
                                      <button onClick={() => setGodDamage(prev => prev === 'Physical' ? 'All' : 'Physical')} className={`flex-1 text-[9px] py-0.5 border rounded ${godDamage === 'Physical' ? 'bg-red-900/50 border-red-500 text-red-200' : 'border-slate-700 text-slate-400'}`}>Physical</button>
                                      <button onClick={() => setGodDamage(prev => prev === 'Magical' ? 'All' : 'Magical')} className={`flex-1 text-[9px] py-0.5 border rounded ${godDamage === 'Magical' ? 'bg-purple-900/50 border-purple-500 text-purple-200' : 'border-slate-700 text-slate-400'}`}>Magical</button>
                                  </div>
                              </div>
                          ) : (
                              <div className="space-y-1">
                                  <div className="flex gap-0.5 overflow-x-auto pb-1 custom-scrollbar">
                                      {['All', 'Offense', 'Defense', 'Utility', 'Hybrid'].map(cat => (
                                          <button key={cat} onClick={() => setItemCategory(cat)} className={`whitespace-nowrap px-1.5 py-0.5 rounded text-[8px] border ${itemCategory === cat ? 'bg-mythic-gold text-black border-mythic-gold' : 'border-slate-700 text-slate-400'}`}>{cat}</button>
                                      ))}
                                  </div>
                                  <select value={itemType} onChange={(e) => setItemType(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 p-1">
                                      {['All', 'Tier 3', 'Tier 2', 'Tier 1', 'Starter', 'Relic'].map(t => <option key={t} value={t}>{t}</option>)}
                                  </select>
                                  <div className="grid grid-cols-4 gap-0.5">
                                      {STAT_FILTERS.map(stat => (
                                          <button
                                              key={stat.id}
                                              onClick={() => setItemStats(prev => prev.includes(stat.id) ? prev.filter(s => s !== stat.id) : [...prev, stat.id])}
                                              className={`flex items-center justify-center p-0.5 rounded border text-[7px] font-bold ${itemStats.includes(stat.id) ? 'bg-slate-700 border-mythic-gold text-mythic-gold' : 'bg-slate-800 border-slate-700 text-slate-500'}`}
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
                          {selectedEntryId && <div className="sticky top-0 z-20 bg-mythic-gold/10 text-mythic-gold text-xs font-bold text-center py-1 mb-1 border border-mythic-gold/30 rounded">Click a Tier</div>}
                          
                          <div className="flex flex-wrap gap-1 content-start justify-center">
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