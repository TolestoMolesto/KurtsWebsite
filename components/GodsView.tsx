import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { God, Aspect, GodStats, RecommendedBuild, Item } from '../types';
import { X, Shield, Zap, Sword, Hexagon, Search, RotateCcw, Heart, Droplet, Activity, Move, Target, BicepsFlexed, BookOpen, Skull, Layers, Sparkles, Star, ChevronDown, ArrowDownUp, Filter, ThumbsUp, ThumbsDown, Edit2, Save, Plus, Trash2, Check, Lock, Youtube, AlertTriangle } from 'lucide-react';
import { db, auth } from '../services/firebase';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import * as FirebaseAuth from 'firebase/auth';
import { useData } from '../contexts/DataContext';
import { GodsGridSkeleton } from './Skeletons';
import { NoGodsFound, NoSearchResults } from './EmptyStates';
import { GodStatsPanel } from './GodStatsPanel';

// --- Components ---

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
      <div className={`relative w-16 h-16 flex items-center justify-center transition-all duration-300 ${isSelected ? 'scale-110' : 'hover:scale-105'}`}>
        {/* Hexagon Shape Background */}
        <div className={`absolute inset-0 clip-hexagon transition-all duration-300 ${
          isSelected 
            ? 'bg-gradient-to-br from-orange-500 to-yellow-600 shadow-[0_0_15px_rgba(251,191,36,0.6)]' 
            : 'bg-slate-700 border-2 border-slate-600 group-hover:border-slate-500'
        }`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        
        {/* Inner Content (Image or Symbol) */}
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
                    <AspectSymbolSVG className={`w-8 h-8 ${isSelected ? 'animate-pulse-slow' : ''}`} />
                </div>
            )}
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
      <span className={`text-[10px] font-bold uppercase tracking-wider text-center max-w-[80px] leading-tight transition-colors ${isSelected ? 'text-mythic-gold' : 'text-slate-500 group-hover:text-slate-400'}`}>
        {name}
      </span>
    </div>
  );
};

// Helper to extract YouTube ID
const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

type SortOption = 'NameAsc' | 'NameDesc';

export const GodsView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  const [selectedGodId, setSelectedGodId] = useState<string | null>(null);
  const selectedGod = useMemo(() => (GODS || []).find(g => g.id === selectedGodId) || null, [GODS, selectedGodId]);
  
  // activeAspectId: null = Base God, string = Aspect ID
  const [activeAspectId, setActiveAspectId] = useState<string | null>(null);
  
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<'All' | 'Solo' | 'Jungle' | 'Mid' | 'Carry' | 'Support'>('All');
  const [damageFilter, setDamageFilter] = useState<'All' | 'Physical' | 'Magical'>('All');
  const [pantheonFilter, setPantheonFilter] = useState<string>('All');
  const [sortMethod, setSortMethod] = useState<SortOption>('NameAsc');
  const [godLevel, setGodLevel] = useState(1);

  // --- ADMIN ---
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  
  // Editor Modals
  const [isMatchupModalOpen, setIsMatchupModalOpen] = useState(false);
  const [isBuildModalOpen, setIsBuildModalOpen] = useState(false);
  const [editingBuild, setEditingBuild] = useState<RecommendedBuild | null>(null);
  const [buildForm, setBuildForm] = useState<RecommendedBuild>({
      name: '', author: '', role: 'Solo', starterId: '', itemIds: [null, null, null, null, null, null], relicId: '', aspectId: 'base'
  });
  const [itemPickerSlot, setItemPickerSlot] = useState<{type: string, index?: number} | null>(null);
  const [pickerSearch, setPickerSearch] = useState('');
  const [activeSubAbility, setActiveSubAbility] = useState<Record<number, number>>({});
  const [firestoreGodData, setFirestoreGodData] = useState<Partial<God> | null>(null);

  // --- Effects ---
  
  useEffect(() => {
    const unsubscribeAuth = FirebaseAuth.onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
            const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
            if (userDoc.exists() && userDoc.data().isAdmin === true) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } else {
            setIsAdmin(false);
        }
    });
    return () => unsubscribeAuth();
  }, []);

    // Reset sub-ability selection when aspect changes
    useEffect(() => {
    setActiveSubAbility({});
    }, [activeAspectId]);

    useEffect(() => {
  if (!selectedGodId) {
    setFirestoreGodData(null);
    return;
  }

  // Subscribe to realtime updates for this god
  const unsubscribe = onSnapshot(
    doc(db, 'gods', selectedGodId),
    (snapshot) => {
      if (snapshot.exists()) {
        setFirestoreGodData(snapshot.data() as Partial<God>);
      } else {
        setFirestoreGodData(null);
      }
    },
    (error) => {
      console.error("Failed to subscribe to god data:", error);
      setFirestoreGodData(null);
    }
  );

  return () => unsubscribe();
}, [selectedGodId]);


  // Display God is just the selected god now, as data comes live from Firestore
  const displayGod = useMemo(() => {
  if (!selectedGod) return null;
  if (!firestoreGodData) return selectedGod;
  
  // Merge Firestore data on top of static data
  return {
    ...selectedGod,
    levelingOrder: firestoreGodData.levelingOrder ?? selectedGod.levelingOrder,
    aspectLevelingOrders: firestoreGodData.aspectLevelingOrders ?? {},
    recommendedBuilds: firestoreGodData.recommendedBuilds ?? selectedGod.recommendedBuilds ?? [],
    goodAgainst: firestoreGodData.goodAgainst ?? selectedGod.goodAgainst ?? [],
    badAgainst: firestoreGodData.badAgainst ?? selectedGod.badAgainst ?? [],
    aspectMatchups: firestoreGodData.aspectMatchups ?? {},
    videoGuideUrl: firestoreGodData.videoGuideUrl ?? selectedGod.videoGuideUrl,
  } as God;
}, [selectedGod, firestoreGodData]);

  const activeKit = useMemo(() => {
      if (!displayGod) return null;
      if (!activeAspectId) return displayGod; 
      
      const aspect = displayGod.aspects.find(a => a.id === activeAspectId);
      if (!aspect) return displayGod;

      // Check if there is an override for this aspect's leveling order stored in the god doc
      if (displayGod.aspectLevelingOrders && displayGod.aspectLevelingOrders[activeAspectId]) {
          return { ...aspect, levelingOrder: displayGod.aspectLevelingOrders[activeAspectId] };
      }

      return aspect;
  }, [displayGod, activeAspectId]);

  // Derived Matchups for Display
  const currentMatchups = useMemo(() => {
      if (!displayGod) return { goodAgainst: [], badAgainst: [] };

      // If viewing an Aspect, look for aspect-specific overrides
      if (activeAspectId) {
          if (displayGod.aspectMatchups && displayGod.aspectMatchups[activeAspectId]) {
              return displayGod.aspectMatchups[activeAspectId];
          }
          // If no specific aspect data, show empty (strict separation per request)
          return { goodAgainst: [], badAgainst: [] };
      }

      // Default Base God Matchups
      return {
          goodAgainst: displayGod.goodAgainst || [],
          badAgainst: displayGod.badAgainst || []
      };
  }, [displayGod, activeAspectId]);


  // --- Admin Actions ---

  const saveToFirestore = async (data: Partial<God>) => {
      if (!selectedGod || !isAdmin) return;
      try {
          await setDoc(doc(db, 'gods', selectedGod.id), data, { merge: true });
      } catch (err) {
          console.error("Failed to save god data", err);
          alert("Failed to save. Check console.");
      }
  };

  const updateLevelingOrder = (levelIndex: number, abilityNum: number) => {
      if (!displayGod || !isEditMode) return;
      
      // Determine if we are editing Base God or Aspect
      if (activeAspectId) {
          const currentAspectOrders = displayGod.aspectLevelingOrders || {};
          const currentOrder = [...(activeKit?.levelingOrder || displayGod.levelingOrder || [])];
          if (currentOrder.length === 0) {
              // initialize if empty
              for(let i=0; i<20; i++) currentOrder[i] = 0;
          }
          currentOrder[levelIndex] = abilityNum;
          
          saveToFirestore({
              aspectLevelingOrders: {
                  ...currentAspectOrders,
                  [activeAspectId]: currentOrder
              }
          });
      } else {
          const newOrder = [...(displayGod.levelingOrder || [])];
          if (newOrder.length === 0) {
              for(let i=0; i<20; i++) newOrder[i] = 0;
          }
          newOrder[levelIndex] = abilityNum;
          saveToFirestore({ levelingOrder: newOrder });
      }
  };

  const toggleMatchup = (type: 'good' | 'bad', targetId: string) => {
      if (!displayGod) return;

      if (activeAspectId) {
          // Edit Aspect Specific Matchups
          const currentMap = displayGod.aspectMatchups || {};
          const currentAspectData = currentMap[activeAspectId] || { goodAgainst: [], badAgainst: [] };
          const currentList = type === 'good' ? currentAspectData.goodAgainst : currentAspectData.badAgainst;

          let newList;
          if (currentList.includes(targetId)) {
              newList = currentList.filter(id => id !== targetId);
          } else {
              newList = [...currentList, targetId];
          }

          const newAspectData = { 
              ...currentAspectData, 
              [type === 'good' ? 'goodAgainst' : 'badAgainst']: newList 
          };

          saveToFirestore({
              aspectMatchups: {
                  ...currentMap,
                  [activeAspectId]: newAspectData
              }
          });

      } else {
          // Edit Base God Matchups
          const currentList = type === 'good' ? (displayGod.goodAgainst || []) : (displayGod.badAgainst || []);
          let newList;
          if (currentList.includes(targetId)) {
              newList = currentList.filter(id => id !== targetId);
          } else {
              newList = [...currentList, targetId];
          }
          
          if (type === 'good') saveToFirestore({ goodAgainst: newList });
          else saveToFirestore({ badAgainst: newList });
      }
  };

  const saveBuild = () => {
      if (!displayGod) return;
      let newBuilds = [...(displayGod.recommendedBuilds || [])];
      
      // Sanitize build
      const cleanBuild = {
          ...buildForm,
          aspectId: activeAspectId || 'base' // Force current aspect context
      };

      if (editingBuild) {
          // Replace build logic based on basic comparison since we lack IDs on sub-objects
          const idx = newBuilds.findIndex(b => b.name === editingBuild.name && b.author === editingBuild.author);
          if (idx >= 0) newBuilds[idx] = cleanBuild;
          else newBuilds.push(cleanBuild);
      } else {
          newBuilds.push(cleanBuild);
      }

      saveToFirestore({ recommendedBuilds: newBuilds });
      setIsBuildModalOpen(false);
      setEditingBuild(null);
  };

  const deleteBuild = (build: RecommendedBuild) => {
      if (!displayGod) return;
      if (!confirm("Delete this build?")) return;
      
      const newBuilds = displayGod.recommendedBuilds.filter(b => {
          // Compare properties to ensure we delete the right one even if reference changed
          // If reference matches, exclude it
          if (b === build) return false;
          // If properties match, exclude it (fallback)
          if (b.name === build.name && 
              b.author === build.author && 
              b.role === build.role && 
              b.aspectId === build.aspectId &&
              JSON.stringify(b.itemIds) === JSON.stringify(build.itemIds) &&
              b.starterId === build.starterId && 
              b.relicId === build.relicId
             ) return false;
          return true;
      });
      
      saveToFirestore({ recommendedBuilds: newBuilds });
  };

  const openGod = (god: God) => {
    setSelectedGodId(god.id);
    setActiveAspectId(null); // Reset to base
    setGodLevel(1);
    setIsEditMode(false);
    setActiveSubAbility({}); // Reset sub-ability selections
    };

  // Helper for opening a matchup entity which might be a specific aspect
  const openMatchupEntity = (id: string) => {
      const [godId, aspectId] = id.split(':');
      const god = (GODS || []).find(g => g.id === godId);
      if (god) {
          setSelectedGodId(god.id);
          setActiveAspectId(aspectId || null);
          setGodLevel(1);
          setIsEditMode(false);
      }
  };

  // Helper to resolve display info for a matchup ID (which can be 'godId' or 'godId:aspectId')
  const resolveMatchupEntity = (id: string) => {
      const [godId, aspectId] = id.split(':');
      const god = (GODS || []).find(g => g.id === godId);
      if (!god) return null;
      
      if (aspectId) {
          const aspect = god.aspects.find(a => a.id === aspectId);
          return {
              fullId: id,
              name: `${god.name} (${aspect?.name || 'Aspect'})`,
              shortName: aspect?.name || god.name,
              image: god.image, // Use Base God Image for consistency
              aspectImage: aspect?.image, // Specifically pass aspect image for overlay
              isAspect: true,
              god
          };
      }
      return {
          fullId: id,
          name: god.name,
          shortName: god.name,
          image: god.image,
          aspectImage: null,
          isAspect: false,
          god
      };
  };

  const closeGod = () => {
    setSelectedGodId(null);
    setIsEditMode(false);
  };

  const roles = ['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'];
  
  const pantheons = useMemo(() => {
      const p = Array.from(new Set((GODS || []).map(g => g.pantheon))).sort();
      return ['All', ...p];
  }, [GODS]);

  const filteredGods = useMemo(() => {
    return (GODS || []).filter(god => {
        if (!god) return false;
        const matchesSearch = god.name.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter === 'All' || god.lanes.includes(roleFilter);
        const matchesDamage = damageFilter === 'All' || god.damageType === damageFilter;
        const matchesPantheon = pantheonFilter === 'All' || god.pantheon === pantheonFilter;
        return matchesSearch && matchesRole && matchesDamage && matchesPantheon;
      }).sort((a, b) => {
          if (sortMethod === 'NameAsc') return a.name.localeCompare(b.name);
          return b.name.localeCompare(a.name);
      });
  }, [GODS, search, roleFilter, damageFilter, pantheonFilter, sortMethod]);

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      
      {/* Disclaimer */}
      <div className="bg-yellow-950/30 border border-yellow-600/30 text-yellow-200/80 p-3 rounded-lg mb-6 flex items-start sm:items-center gap-3 text-xs sm:text-sm">
            <AlertTriangle className="shrink-0 text-yellow-500" size={18} />
            <p>
                <span className="font-bold text-yellow-500 uppercase tracking-wider mr-1">Patch Disclaimer:</span> 
                God data is manually adjusted every patch and may be incorrect. Please inform us if you spot any inaccuracies!
            </p>
      </div>
      
      {/* --- Filter Sidebar & Main Grid --- */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Column: Filters Sidebar */}
        <div className="w-full lg:w-64 shrink-0 bg-slate-900 border border-slate-800 rounded-xl p-4 lg:sticky lg:top-24 h-auto lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto custom-scrollbar">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Search size={14} /> Filter Gods
            </h3>
            
            <div className="mb-4 space-y-2">
               <input 
                   type="text" 
                   placeholder="Search God Name..." 
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-3 pr-3 text-xs text-slate-200 focus:outline-none focus:border-mythic-gold"
               />
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
                   </select>
                   <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
               </div>
            </div>

            <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Role</h4>
                <div className="grid grid-cols-2 gap-2">
                    {roles.map((role) => (
                    <button
                        key={role}
                        onClick={() => setRoleFilter(role as any)}
                        className={`text-center px-2 py-1.5 rounded text-xs font-semibold transition-colors border ${
                            roleFilter === role 
                            ? 'bg-mythic-gold text-slate-900 border-mythic-gold' 
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200'
                        }`}
                    >
                        {role === 'Mid' ? 'Middle' : role}
                    </button>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Damage Type</h4>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setDamageFilter('All')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center gap-2 ${
                            damageFilter === 'All'
                            ? 'bg-slate-700 text-white' 
                            : 'bg-slate-950 text-slate-400 hover:bg-slate-800'
                        }`}
                    >
                        <Shield size={12} /> All Types
                    </button>
                    <button
                        onClick={() => setDamageFilter('Physical')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center gap-2 ${
                            damageFilter === 'Physical'
                            ? 'bg-red-900/50 text-red-200 border border-red-800' 
                            : 'bg-slate-950 text-slate-400 hover:bg-slate-800 border border-transparent'
                        }`}
                    >
                        <Sword size={12} className="text-red-500" /> Physical
                    </button>
                    <button
                        onClick={() => setDamageFilter('Magical')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center gap-2 ${
                            damageFilter === 'Magical'
                            ? 'bg-purple-900/50 text-purple-200 border border-purple-800' 
                            : 'bg-slate-950 text-slate-400 hover:bg-slate-800 border border-transparent'
                        }`}
                    >
                        <Sparkles size={12} className="text-purple-500" /> Magical
                    </button>
                </div>
            </div>

            <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Pantheon</h4>
                <div className="space-y-1">
                    {pantheons.map(pantheon => (
                        <button
                            key={pantheon}
                            onClick={() => setPantheonFilter(pantheon)}
                            className={`w-full text-left px-3 py-1 rounded text-xs font-medium transition-colors ${
                                pantheonFilter === pantheon 
                                ? 'text-mythic-gold bg-slate-800' 
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            {pantheon}
                        </button>
                    ))}
                </div>
            </div>
            
            {(search || roleFilter !== 'All' || damageFilter !== 'All' || pantheonFilter !== 'All') && (
                <button 
                    onClick={() => {setSearch(''); setRoleFilter('All'); setDamageFilter('All'); setPantheonFilter('All');}} 
                    className="mt-6 w-full py-2 text-xs font-bold text-red-400 hover:text-red-300 border border-red-900/30 rounded bg-red-950/20 hover:bg-red-950/40 flex items-center justify-center gap-2 transition-colors"
                >
                    <RotateCcw size={12} /> Reset Filters
                </button>
            )}
        </div>

        {/* Right Column: Grid */}
        <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
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
                        
                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 flex gap-1">
                             <div className="bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[9px] text-slate-300 border border-slate-600 font-bold uppercase">
                                 {god.pantheon}
                             </div>
                        </div>

                        {/* Aspect Indicator Badge */}
                        {god.aspects.length > 0 && (
                            <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur border border-mythic-gold/50 rounded p-1 flex items-center justify-center shadow-lg" title="Has Aspects">
                                <Hexagon size={14} className="text-mythic-gold fill-mythic-gold/20" />
                            </div>
                        )}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-mythic-gold font-serif text-lg font-bold uppercase tracking-wider leading-none mb-1">{god.name}</h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wide truncate">{god.title}</p>
                        
                        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-700/50">
                            <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase border flex items-center gap-1 ${
                                god.damageType === 'Magical' 
                                ? 'border-purple-500/30 text-purple-300 bg-purple-900/20' 
                                : 'border-red-500/30 text-red-300 bg-red-900/20'
                            }`}>
                                {god.damageType === 'Magical' ? <Sparkles size={8} /> : <Sword size={8} />}
                                {god.damageType}
                            </span>
                            <div className="flex gap-1">
                                {god.lanes.map(lane => (
                                    <span key={lane} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-400 border border-slate-600 font-bold">
                                        {lane.charAt(0)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            {filteredGods.length === 0 && (
                <div className="text-center py-20 text-slate-500">
                    <p>No Gods found matching your criteria.</p>
                    <button onClick={() => {setSearch(''); setRoleFilter('All'); setDamageFilter('All'); setPantheonFilter('All');}} className="mt-4 text-mythic-gold hover:underline flex items-center gap-2 mx-auto">
                        <RotateCcw size={14} /> Reset Filters
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* --- SELECTED GOD DETAIL MODAL --- */}
      {selectedGod && displayGod && activeKit && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 w-full max-w-6xl max-h-[90vh] rounded-2xl border border-mythic-gold/30 shadow-2xl flex flex-col overflow-hidden relative">
            
            {/* Top Bar Actions */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                {isAdmin && (
                    <button 
                        onClick={() => setIsEditMode(!isEditMode)}
                        className={`p-2 rounded-full border transition-all ${
                            isEditMode 
                            ? 'bg-mythic-gold text-slate-900 border-mythic-gold' 
                            : 'bg-slate-800 text-slate-400 border-slate-600 hover:text-white'
                        }`}
                        title="Toggle Admin Edit Mode"
                    >
                        {isEditMode ? <Save size={20} /> : <Edit2 size={20} />}
                    </button>
                )}
                <button 
                    onClick={closeGod}
                    className="p-2 bg-black/40 hover:bg-red-500 hover:text-white rounded-full text-white transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
              {/* Left Column: Image, Title, Stats (Slider) */}
              <div className="w-full md:w-1/3 xl:w-1/4 relative bg-slate-950 flex flex-col border-r border-slate-800">
                 
                 {/* God Image Header */}
                 <div className="relative h-64 md:h-80 shrink-0">
                   <img src={selectedGod.image} alt={selectedGod.name} className="w-full h-full object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-3xl md:text-4xl font-serif text-mythic-gold font-bold mb-1">{selectedGod.name}</h2>
                      <p className="text-slate-300 italic text-sm mb-3">{selectedGod.title}</p>
                      <div className="flex gap-2">
                          <span className="text-[10px] uppercase font-bold bg-slate-800 border border-slate-700 px-2 py-1 rounded text-slate-300">
                              {selectedGod.pantheon}
                          </span>
                          <span className="text-[10px] uppercase font-bold bg-slate-800 border border-slate-700 px-2 py-1 rounded text-slate-300">
                              {selectedGod.role}
                          </span>
                      </div>
                   </div>
                 </div>

                 {/* Level Slider & Stats Panel */}
                 <div className="p-6 flex-1 overflow-y-auto bg-slate-950 custom-scrollbar">
                    <div className="mb-6 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs uppercase font-bold text-slate-500 flex items-center gap-2"><Filter size={12}/> Level Stats</span>
                        <span className="text-mythic-gold font-mono font-bold text-lg">{godLevel}</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        value={godLevel} 
                        onChange={(e) => setGodLevel(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-mythic-gold"
                      />
                      <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
                          <span>1</span>
                          <span>10</span>
                          <span>20</span>
                      </div>
                    </div>

                    <GodStatsPanel god={selectedGod} level={godLevel} items={[]} />
                 </div>
              </div>

              {/* Right Column: Abilities & Aspects */}
              <div className="w-full md:w-2/3 xl:w-3/4 p-6 md:p-8 bg-slate-900 flex flex-col relative">
                
                {/* Aspect Selector (Hexagons) - ONLY if God has aspects */}
                {selectedGod.aspects.length > 0 && (
                    <div className="mb-8 flex flex-col items-center md:items-start animate-in fade-in">
                        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold flex items-center gap-2">
                            <Hexagon size={12} /> Toggle Aspect
                        </h3>
                        <div className="flex flex-wrap gap-6 px-2 items-center justify-center md:justify-start">
                            {/* ASPECT SELECTORS with Toggle Behavior */}
                            {selectedGod.aspects.map((aspect) => {
                                const isActive = activeAspectId === aspect.id;
                                return (
                                    <AspectHexagon 
                                        key={aspect.id}
                                        name={aspect.name}
                                        image={aspect.image}
                                        isSelected={isActive}
                                        onClick={() => setActiveAspectId(isActive ? null : aspect.id)}
                                    />
                                );
                            })}
                        </div>
                        
                        {/* Aspect Description Box (If Aspect Selected) */}
                        {activeAspectId && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-mythic-gold/10 to-transparent rounded-lg border-l-4 border-mythic-gold w-full">
                                <span className="text-mythic-gold font-bold uppercase text-xs block mb-1">Aspect Effect</span>
                                <p className="text-sm text-slate-200">
                                {/* @ts-ignore - we know it's an aspect if activeAspectId is set */}
                                {activeKit.description}
                                </p>
                        </div>
                        )}
                    </div>
                )}

                {/* Abilities List */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 animate-in fade-in custom-scrollbar">
                    
                    {/* Recommended Builds Section in God Detail */}
                    <div className="mb-8 relative group/section">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-mythic-gold font-serif font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                                <Star size={14} className="text-mythic-gold fill-mythic-gold" /> Recommended Builds
                            </h4>
                            {isEditMode && (
                                <button 
                                    onClick={() => {
                                        setEditingBuild(null);
                                        setBuildForm({
                                            name: '', author: '', role: selectedGod.role, starterId: '', itemIds: [null, null, null, null, null, null], relicId: '', aspectId: activeAspectId || 'base'
                                        });
                                        setIsBuildModalOpen(true);
                                    }}
                                    className="px-2 py-1 text-xs bg-slate-800 border border-slate-600 rounded hover:bg-slate-700 text-slate-300 flex items-center gap-1"
                                >
                                    <Plus size={12} /> Add Build
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {displayGod.recommendedBuilds && displayGod.recommendedBuilds.length > 0 ? (
                                displayGod.recommendedBuilds
                                    .filter(build => {
                                      if (!build.aspectId) return true;
                                      if (build.aspectId === 'base' && activeAspectId === null) return true;
                                      return build.aspectId === activeAspectId;
                                    })
                                    .map((rec, idx) => (
                                    <div key={idx} className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex flex-col sm:flex-row items-center gap-4 hover:border-slate-600 transition-colors relative group/card">
                                        {isEditMode && (
                                            <div className="absolute top-2 right-2 flex gap-2">
                                                <button 
                                                    onClick={() => {
                                                        setEditingBuild(rec);
                                                        setBuildForm({ ...rec });
                                                        setIsBuildModalOpen(true);
                                                    }}
                                                    className="p-1 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/40"
                                                >
                                                    <Edit2 size={12} />
                                                </button>
                                                <button 
                                                    onClick={() => deleteBuild(rec)}
                                                    className="p-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/40"
                                                >
                                                    <Trash2 size={12} />
                                                </button>
                                            </div>
                                        )}
                                        <div className="min-w-[120px]">
                                            <div className="font-bold text-slate-200 text-sm">{rec.name}</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-bold">By {rec.author}</div>
                                            {rec.aspectId && rec.aspectId !== 'base' && <span className="text-[9px] text-mythic-gold bg-mythic-900/50 px-1 rounded mt-1 inline-block border border-mythic-gold/30">Aspect Specific</span>}
                                        </div>
                                        <div className="flex gap-1 flex-wrap justify-center sm:justify-start">
                                            {/* Starter */}
                                            <div className="w-8 h-8 rounded bg-slate-700 border border-slate-600 overflow-hidden relative" title="Starter">
                                                {(ITEMS || []).find(i => i.id === rec.starterId)?.image && <img src={(ITEMS || []).find(i => i.id === rec.starterId)?.image} className="w-full h-full object-cover"/>}
                                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 rounded-tl-sm"></div>
                                            </div>
                                            {/* Items */}
                                            {rec.itemIds.map((id, i) => (
                                                <div key={i} className="w-8 h-8 rounded bg-slate-700 border border-slate-600 overflow-hidden">
                                                    {id && <img src={(ITEMS || []).find(itm => itm.id === id)?.image} className="w-full h-full object-cover"/>}
                                                </div>
                                            ))}
                                            {/* Relic */}
                                            <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 overflow-hidden relative" title="Relic">
                                                {(ITEMS || []).find(i => i.id === rec.relicId)?.image && <img src={(ITEMS || []).find(i => i.id === rec.relicId)?.image} className="w-full h-full object-cover"/>}
                                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : null}
                            
                            {/* Empty State */}
                            {(displayGod.recommendedBuilds || []).filter(build => {
                                if (!build.aspectId) return true;
                                if (build.aspectId === 'base' && activeAspectId === null) return true;
                                return build.aspectId === activeAspectId;
                            }).length === 0 && (
                                <p className="text-slate-500 text-sm italic">No specific recommended builds for this kit.</p>
                            )}
                        </div>
                    </div>

                    {/* NEW: Video Guide Section */}
                    {displayGod.videoGuideUrl && (
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-mythic-gold font-serif font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                                    <Youtube size={14} className="text-mythic-gold fill-mythic-gold" /> God Guide
                                </h4>
                            </div>
                            <div className="w-full rounded-lg overflow-hidden border border-slate-700 shadow-lg bg-black relative group">
                                <div className="aspect-video">
                                    <iframe 
                                        width="100%" 
                                        height="100%" 
                                        src={`https://www.youtube.com/embed/${getYoutubeId(displayGod.videoGuideUrl)}`} 
                                        title={`${displayGod.name} Guide`}
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Combat Intel / Matchups */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-mythic-gold font-serif font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                                <Sword size={14} className="text-mythic-gold fill-mythic-gold" /> Combat Intel
                                {activeAspectId && <span className="ml-2 text-[9px] bg-mythic-900/50 text-mythic-gold px-2 py-0.5 rounded border border-mythic-gold/30">Aspect Data</span>}
                            </h4>
                            {isEditMode && (
                                <button 
                                    onClick={() => setIsMatchupModalOpen(true)}
                                    className="px-2 py-1 text-xs bg-slate-800 border border-slate-600 rounded hover:bg-slate-700 text-slate-300 flex items-center gap-1"
                                >
                                    <Edit2 size={12} /> Edit
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {/* Good Against */}
                            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700/50">
                                <div className="flex items-center gap-2 mb-3 text-green-400 text-xs font-bold uppercase border-b border-slate-700 pb-2">
                                    <ThumbsUp size={12} /> Strong Against
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {currentMatchups.goodAgainst && currentMatchups.goodAgainst.length > 0 ? (
                                        currentMatchups.goodAgainst.map(id => {
                                            const entity = resolveMatchupEntity(id);
                                            if (!entity) return null;
                                            return (
                                                <div 
                                                    key={id} 
                                                    className="w-10 h-10 rounded border border-green-900/50 hover:border-green-500 cursor-pointer overflow-hidden relative group"
                                                    onClick={() => openMatchupEntity(id)}
                                                    title={entity.name}
                                                >
                                                    <img src={entity.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={entity.shortName} />
                                                    {entity.isAspect && (
                                                        <div className="absolute top-0 right-0 w-4 h-4 bg-slate-900 border-l border-b border-slate-700 z-10 overflow-hidden shadow-sm">
                                                            {entity.aspectImage ? (
                                                                <img src={entity.aspectImage} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <AspectSymbolSVG className="w-full h-full text-mythic-gold p-0.5" />
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })
                                    ) : <span className="text-[10px] text-slate-600 italic">No data available</span>}
                                </div>
                            </div>

                            {/* Bad Against */}
                            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700/50">
                                <div className="flex items-center gap-2 mb-3 text-red-400 text-xs font-bold uppercase border-b border-slate-700 pb-2">
                                    <ThumbsDown size={12} /> Vulnerable To
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {currentMatchups.badAgainst && currentMatchups.badAgainst.length > 0 ? (
                                        currentMatchups.badAgainst.map(id => {
                                            const entity = resolveMatchupEntity(id);
                                            if (!entity) return null;
                                            return (
                                                <div 
                                                    key={id} 
                                                    className="w-10 h-10 rounded border border-red-900/50 hover:border-red-500 cursor-pointer overflow-hidden relative group"
                                                    onClick={() => openMatchupEntity(id)}
                                                    title={entity.name}
                                                >
                                                    <img src={entity.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={entity.shortName} />
                                                    {entity.isAspect && (
                                                        <div className="absolute top-0 right-0 w-4 h-4 bg-slate-900 border-l border-b border-slate-700 z-10 overflow-hidden shadow-sm">
                                                            {entity.aspectImage ? (
                                                                <img src={entity.aspectImage} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <AspectSymbolSVG className="w-full h-full text-mythic-gold p-0.5" />
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })
                                    ) : <span className="text-[10px] text-slate-600 italic">No data available</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leveling Order Grid */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-slate-400 font-bold uppercase text-xs tracking-wider flex items-center gap-2">
                                <Layers size={14} /> Ability Leveling Order
                            </h4>
                            {isEditMode && <span className="text-[10px] text-red-400 animate-pulse font-bold">CLICK CELL TO EDIT</span>}
                        </div>
                        <div className="overflow-x-auto pb-2">
                            <div className={`min-w-[600px] bg-slate-800 rounded-lg border overflow-hidden ${isEditMode ? 'border-mythic-gold shadow-[0_0_10px_rgba(251,191,36,0.3)]' : 'border-slate-700'}`}>
                                {/* Header Row */}
                                <div className="flex bg-slate-950/50 border-b border-slate-700 text-[10px] font-mono text-slate-500">
                                    <div className="w-20 p-2 shrink-0 border-r border-slate-700 flex items-center justify-center font-bold">LVL</div>
                                    {Array.from({length: 20}, (_, i) => i + 1).map(lvl => (
                                        <div key={lvl} className={`flex-1 min-w-[24px] flex items-center justify-center py-2 border-r border-slate-700/50 last:border-0 ${[5,10,15,20].includes(lvl) ? 'text-mythic-gold font-bold bg-mythic-900/10' : ''}`}>
                                            {lvl}
                                        </div>
                                    ))}
                                </div>
                                {/* Rows 1-4 */}
                                {[1, 2, 3, 4].map(abilityNum => (
                                    <div key={abilityNum} className="flex border-b border-slate-700/50 last:border-0 hover:bg-slate-700/30 transition-colors">
                                        <div className="w-20 p-2 shrink-0 border-r border-slate-700 flex items-center gap-2">
                                            <div className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${abilityNum === 4 ? 'bg-red-900 text-red-200' : 'bg-slate-700 text-slate-200'}`}>
                                                {abilityNum}
                                            </div>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase truncate">
                                                {/* @ts-ignore */}
                                                {activeKit.abilities[abilityNum].name}
                                            </span>
                                        </div>
                                        {/* Cells */}
                                        {Array.from({length: 20}, (_, i) => i + 1).map((lvl, index) => {
                                            const order = (activeKit as any).levelingOrder || [];
                                            const isTaken = order[index] === abilityNum;
                                            
                                            return (
                                                <div 
                                                    key={lvl} 
                                                    onClick={() => updateLevelingOrder(index, abilityNum)}
                                                    className={`flex-1 min-w-[24px] border-r border-slate-700/50 last:border-0 flex items-center justify-center cursor-pointer 
                                                        ${[5,10,15,20].includes(lvl) ? 'bg-mythic-900/5' : ''}
                                                        ${isEditMode ? 'hover:bg-slate-600' : ''}
                                                    `}
                                                >
                                                    {isTaken && (
                                                        <div className={`w-3 h-3 rounded-full ${abilityNum === 4 ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' : 'bg-mythic-gold shadow-[0_0_8px_rgba(250,204,21,0.6)]'}`}></div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Passive */}
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700/50">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-600 shadow-md overflow-hidden relative">
                                {activeKit.passive.image ? (
                                    <img src={activeKit.passive.image} alt={activeKit.passive.name} className="w-full h-full object-cover" />
                                ) : (
                                    <Hexagon size={24} className="text-blue-400" />
                                )}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-serif text-blue-400 font-bold text-sm uppercase mb-1">Passive - {activeKit.passive.name}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{activeKit.passive.description}</p>
                                {activeKit.passive.attributes && activeKit.passive.attributes.length > 0 && (
                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-slate-700/50 pt-2">
                                        {activeKit.passive.attributes.map((attr, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs">
                                                <span className="text-slate-500 font-bold uppercase">{attr.label}:</span>
                                                <span className="text-slate-200 font-mono">{attr.value}</span>
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
                        const hasSubAbilities = ability.subAbilities && ability.subAbilities.length > 0;
                        const selectedSubIndex = activeSubAbility[num] ?? 0;
                        const currentSubAbility = hasSubAbilities ? ability.subAbilities[selectedSubIndex] : null;
                        
                        // Determine what to display - ALL DISPLAY VARIABLES GO HERE
                        const displayDesc = currentSubAbility ? currentSubAbility.description : ability.description;
                        const displayAttrs = currentSubAbility ? currentSubAbility.attributes : ability.attributes;
                        const displayImage = currentSubAbility?.image || ability.image; // <-- RIGHT HERE

                        return (
                        <div key={num} className="bg-slate-800 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-colors">
                            {/* Ability Header */}
                            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800 to-slate-800/50 border-b border-slate-700/50">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shrink-0 border border-slate-700 relative overflow-hidden shadow-inner">
                                    {displayImage ? (  // <-- USE IT HERE
                                        <img src={displayImage} alt={currentSubAbility?.name || ability.name} className="w-full h-full object-cover transition-all duration-300" />
                                    ) : (
                                        <>
                                            {num === 4 ? <Skull size={24} className="text-red-500" /> : <Zap size={24} className="text-mythic-gold" />}
                                        </>
                                    )}
                                    <span className="absolute bottom-0 right-1 text-[9px] font-bold text-slate-100 drop-shadow-md">{num}</span>
                                </div>
                                <div>
                                    <h4 className={`font-serif font-bold text-lg ${num === 4 ? 'text-red-400' : 'text-slate-100'}`}>
                                    {ability.name}
                                    </h4>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Ability {num}</p>
                                </div>
                            </div>

                            {/* Sub-Ability Toggle (if applicable) */}
                            {hasSubAbilities && (
                                <div className="px-4 pt-3 pb-2 border-b border-slate-700/30 bg-slate-900/50">
                                    <div className="flex gap-2 flex-wrap">
                                        {ability.subAbilities.map((sub: any, idx: number) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveSubAbility(prev => ({ ...prev, [num]: idx }))}
                                                className={`
                                                    flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all
                                                    ${selectedSubIndex === idx 
                                                        ? 'bg-mythic-gold text-slate-900 shadow-lg shadow-mythic-gold/20' 
                                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-600'
                                                    }
                                                `}
                                            >
                                                {sub.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Ability Body */}
                            <div className="p-4 space-y-4">
                                {/* Currently Viewing Indicator */}
                                {hasSubAbilities && currentSubAbility && (
                                    <div className="flex items-center gap-2 text-xs text-mythic-gold font-semibold uppercase tracking-wider">
                                        <div className="w-1.5 h-1.5 rounded-full bg-mythic-gold animate-pulse" />
                                        Viewing: {currentSubAbility.name}
                                    </div>
                                )}

                                {/* Detailed Stats Grid */}
                                {displayAttrs && displayAttrs.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 bg-slate-900/30 p-3 rounded-lg">
                                    {displayAttrs.map((attr: any, i: number) => (
                                        <div key={i} className="flex flex-col text-xs">
                                            <span className="text-slate-500 font-bold uppercase mb-0.5">{attr.label}</span>
                                            <span className={`font-mono ${attr.label.includes('Damage') ? 'text-red-400' : 'text-slate-300'}`}>{attr.value}</span>
                                        </div>
                                    ))}
                                    </div>
                                )}

                                {/* Description */}
                                <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-slate-700 pl-3 whitespace-pre-wrap">
                                    {displayDesc}
                                </p>

                                {/* Cooldown & Cost Footer (always from main ability) */}
                                <div className="flex items-center gap-6 pt-2 mt-2 border-t border-slate-700/50 text-xs font-mono text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <RotateCcw size={12} />
                                        <span>CD: <span className="text-white">{ability.cooldown}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Droplet size={12} />
                                        <span>Cost: <span className="text-white">{ability.cost}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                    
                    {/* Basic Attack (Rendered as Card now) */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-colors">
                        <div className="flex items-center gap-4 p-4 bg-slate-800 border-b border-slate-700/50">
                            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-600 shadow-md overflow-hidden">
                                {activeKit.basicAttack.image ? (
                                    <img src={activeKit.basicAttack.image} alt={activeKit.basicAttack.name} className="w-full h-full object-cover" />
                                ) : (
                                    <Sword size={24} className="text-slate-300" />
                                )}
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-lg text-slate-200">
                                {activeKit.basicAttack.name}
                                </h4>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Basic Attack</p>
                            </div>
                        </div>
                        <div className="p-4 space-y-4">
                             {activeKit.basicAttack.attributes && activeKit.basicAttack.attributes.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 bg-slate-900/30 p-3 rounded-lg">
                                {activeKit.basicAttack.attributes.map((attr, i) => (
                                    <div key={i} className="flex flex-col text-xs">
                                        <span className="text-slate-500 font-bold uppercase mb-0.5">{attr.label}</span>
                                        <span className="text-slate-200 font-mono">{attr.value}</span>
                                    </div>
                                ))}
                                </div>
                             )}
                             <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-slate-700 pl-3">
                                {activeKit.basicAttack.description}
                             </p>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* --- EDIT MODALS --- */}
      
      {/* 1. Matchup Editor */}
      {isMatchupModalOpen && displayGod && createPortal(
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-900 w-full max-w-2xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
                  <div className="p-4 border-b border-slate-700 bg-slate-800 flex justify-between items-center">
                      <h3 className="font-bold text-slate-100">
                          Edit Combat Intel 
                          {activeAspectId && <span className="ml-2 text-xs text-mythic-gold bg-mythic-900/50 px-2 py-0.5 rounded border border-mythic-gold/30">Aspect Specific</span>}
                      </h3>
                      <button onClick={() => setIsMatchupModalOpen(false)}><X size={20} className="text-slate-400 hover:text-white" /></button>
                  </div>
                  <div className="p-4 overflow-y-auto flex-1 flex flex-col gap-6 custom-scrollbar">
                      {/* Good Against Section */}
                      <div className="bg-slate-950/50 p-4 rounded-xl border border-green-900/30">
                          <h4 className="text-green-400 text-xs font-bold uppercase mb-3 flex items-center gap-2"><ThumbsUp size={14}/> Strong Against</h4>
                          <div className="flex flex-wrap gap-2 min-h-[40px]">
                              {currentMatchups.goodAgainst?.map(id => {
                                  const entity = resolveMatchupEntity(id);
                                  if (!entity) return null;
                                  return (
                                      <div key={id} className="flex items-center gap-2 bg-slate-900 border border-green-900/50 rounded px-2 py-1 pr-1 group">
                                          <div className="w-6 h-6 rounded overflow-hidden relative border border-slate-700">
                                               <img src={entity.image} className="w-full h-full object-cover" alt={entity.name} />
                                               {entity.isAspect && <div className="absolute bottom-0 right-0 w-2 h-2 bg-mythic-gold rounded-full"></div>}
                                          </div>
                                          <span className="text-xs text-slate-300 font-bold">{entity.shortName}</span>
                                          <button onClick={() => toggleMatchup('good', id)} className="p-1 text-slate-500 hover:text-red-400"><X size={12}/></button>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                      {/* Bad Against Section */}
                      <div className="bg-slate-950/50 p-4 rounded-xl border border-red-900/30">
                          <h4 className="text-red-400 text-xs font-bold uppercase mb-3 flex items-center gap-2"><ThumbsDown size={14}/> Vulnerable To</h4>
                          <div className="flex flex-wrap gap-2 min-h-[40px]">
                              {currentMatchups.badAgainst?.map(id => {
                                  const entity = resolveMatchupEntity(id);
                                  if (!entity) return null;
                                  return (
                                      <div key={id} className="flex items-center gap-2 bg-slate-900 border border-red-900/50 rounded px-2 py-1 pr-1 group">
                                          <div className="w-6 h-6 rounded overflow-hidden relative border border-slate-700">
                                               <img src={entity.image} className="w-full h-full object-cover" alt={entity.name} />
                                               {entity.isAspect && <div className="absolute bottom-0 right-0 w-2 h-2 bg-mythic-gold rounded-full"></div>}
                                          </div>
                                          <span className="text-xs text-slate-300 font-bold">{entity.shortName}</span>
                                          <button onClick={() => toggleMatchup('bad', id)} className="p-1 text-slate-500 hover:text-red-400"><X size={12}/></button>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                      {/* Add Matchup Search */}
                      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                          <h4 className="text-slate-400 text-xs font-bold uppercase mb-3 flex items-center gap-2"><Search size={14}/> Add Matchup</h4>
                          <input 
                              type="text" 
                              placeholder="Search God or Aspect to add..." 
                              className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-sm text-white focus:border-mythic-gold outline-none mb-3"
                              value={pickerSearch}
                              onChange={(e) => setPickerSearch(e.target.value)}
                          />
                          
                          <div className="max-h-48 overflow-y-auto grid grid-cols-1 gap-1 custom-scrollbar">
                              {/* Generate list of all gods and their aspects for selection */}
                              {(GODS || []).flatMap(g => {
                                  const options = [{ id: g.id, name: g.name, image: g.image, type: 'Base' }];
                                  g.aspects.forEach(a => {
                                      options.push({ id: `${g.id}:${a.id}`, name: `${g.name} (${a.name})`, image: a.image || g.image, type: 'Aspect' });
                                  });
                                  return options;
                              }).filter(opt => opt.name.toLowerCase().includes(pickerSearch.toLowerCase()) && opt.id !== selectedGodId)
                              .map(opt => (
                                  <div key={opt.id} className="flex items-center justify-between p-2 hover:bg-slate-700 rounded transition-colors group">
                                      <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded bg-slate-900 overflow-hidden relative">
                                              <img src={opt.image} className="w-full h-full object-cover" />
                                          </div>
                                          <div className="flex flex-col">
                                              <span className="text-sm font-bold text-slate-200">{opt.name}</span>
                                              <span className="text-[10px] text-slate-500">{opt.type}</span>
                                          </div>
                                      </div>
                                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                          <button 
                                              onClick={() => toggleMatchup('good', opt.id)}
                                              className={`px-2 py-1 rounded text-[10px] font-bold border ${currentMatchups.goodAgainst?.includes(opt.id) ? 'bg-green-500 text-slate-900 border-green-500' : 'text-green-400 border-green-900 hover:bg-green-900/30'}`}
                                          >
                                              Good
                                          </button>
                                          <button 
                                              onClick={() => toggleMatchup('bad', opt.id)}
                                              className={`px-2 py-1 rounded text-[10px] font-bold border ${currentMatchups.badAgainst?.includes(opt.id) ? 'bg-red-500 text-slate-900 border-red-500' : 'text-red-400 border-red-900 hover:bg-red-900/30'}`}
                                          >
                                              Bad
                                          </button>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      , document.body)}

      {/* 2. Build Editor */}
      {isBuildModalOpen && displayGod && createPortal(
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-900 w-full max-w-lg rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
                  <div className="p-4 border-b border-slate-700 bg-slate-800 flex justify-between items-center">
                      <h3 className="font-bold text-slate-100">{editingBuild ? 'Edit Build' : 'New Build'}</h3>
                      <button onClick={() => setIsBuildModalOpen(false)}><X size={20} className="text-slate-400 hover:text-white" /></button>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1 space-y-4">
                      {/* Name & Author */}
                      <div className="grid grid-cols-2 gap-4">
                          <div>
                              <label className="text-xs text-slate-500 uppercase font-bold">Build Name</label>
                              <input className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white mt-1" value={buildForm.name} onChange={e => setBuildForm({...buildForm, name: e.target.value})} placeholder="e.g. Crit Bellona" />
                          </div>
                          <div>
                              <label className="text-xs text-slate-500 uppercase font-bold">Author</label>
                              <input className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white mt-1" value={buildForm.author} onChange={e => setBuildForm({...buildForm, author: e.target.value})} placeholder="Your Name" />
                          </div>
                      </div>
                      
                      {/* Items Selection */}
                      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                          <h4 className="text-xs font-bold text-white uppercase mb-3">Equipment</h4>
                          
                          {/* Starter */}
                          <div className="mb-4">
                              <label className="text-[10px] text-slate-400 uppercase font-bold mb-2 block">Starter</label>
                              <button
                                  onClick={() => setItemPickerSlot({type: 'starter'})}
                                  className="w-full flex items-center gap-2 p-3 bg-slate-900 border border-slate-700 rounded hover:border-mythic-gold transition-colors"
                              >
                                  {buildForm.starterId ? (
                                      <>
                                          <img src={ITEMS?.find(i => i.id === buildForm.starterId)?.image} alt="starter" className="w-8 h-8 rounded" />
                                          <span className="text-xs text-white">{ITEMS?.find(i => i.id === buildForm.starterId)?.name || 'Select Starter'}</span>
                                      </>
                                  ) : (
                                      <span className="text-xs text-slate-400">Select Starter...</span>
                                  )}
                              </button>
                          </div>

                          {/* Items Grid */}
                          <div className="mb-4">
                              <label className="text-[10px] text-slate-400 uppercase font-bold mb-2 block">Items (6)</label>
                              <div className="grid grid-cols-3 gap-2">
                                  {buildForm.itemIds?.map((itemId, idx) => (
                                      <button
                                          key={idx}
                                          onClick={() => setItemPickerSlot({type: 'item', index: idx})}
                                          className="aspect-square flex items-center justify-center bg-slate-900 border border-slate-700 rounded hover:border-mythic-gold transition-colors overflow-hidden"
                                      >
                                          {itemId ? (
                                              <img src={ITEMS?.find(i => i.id === itemId)?.image} alt="item" className="w-full h-full object-cover" />
                                          ) : (
                                              <span className="text-xs text-slate-500">+</span>
                                          )}
                                      </button>
                                  ))}
                              </div>
                          </div>

                          {/* Relic */}
                          <div>
                              <label className="text-[10px] text-slate-400 uppercase font-bold mb-2 block">Relic</label>
                              <button
                                  onClick={() => setItemPickerSlot({type: 'relic'})}
                                  className="w-full flex items-center gap-2 p-3 bg-slate-900 border border-slate-700 rounded hover:border-mythic-gold transition-colors"
                              >
                                  {buildForm.relicId ? (
                                      <>
                                          <img src={ITEMS?.find(i => i.id === buildForm.relicId)?.image} alt="relic" className="w-8 h-8 rounded-full" />
                                          <span className="text-xs text-white">{ITEMS?.find(i => i.id === buildForm.relicId)?.name || 'Select Relic'}</span>
                                      </>
                                  ) : (
                                      <span className="text-xs text-slate-400">Select Relic...</span>
                                  )}
                              </button>
                          </div>
                      </div>
                  </div>
                  <div className="p-4 border-t border-slate-700 bg-slate-800 flex justify-end gap-2">
                      <button onClick={() => setIsBuildModalOpen(false)} className="px-4 py-2 text-sm text-slate-400 hover:text-white">Cancel</button>
                      <button onClick={saveBuild} className="px-4 py-2 bg-mythic-gold text-slate-900 rounded font-bold text-sm hover:bg-yellow-400">Save Build</button>
                  </div>
              </div>
          </div>
      , document.body)}

      {/* Item Picker Modal */}
      {itemPickerSlot && createPortal(
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-900 w-full max-w-2xl rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden max-h-[85vh]">
                  <div className="p-4 border-b border-slate-700 bg-slate-800 flex justify-between items-center">
                      <h3 className="font-bold text-slate-100">Select {itemPickerSlot.type === 'starter' ? 'Starter' : itemPickerSlot.type === 'relic' ? 'Relic' : 'Item'}</h3>
                      <button onClick={() => setItemPickerSlot(null)}><X size={20} className="text-slate-400 hover:text-white" /></button>
                  </div>
                  <div className="p-4 overflow-y-auto flex-1">
                      <div className="flex gap-2 mb-4">
                          <input
                              type="text"
                              placeholder={`Search ${itemPickerSlot.type === 'starter' ? 'Starters' : itemPickerSlot.type === 'relic' ? 'Relics' : 'Items'}...`}
                              className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:border-mythic-gold outline-none"
                              value={pickerSearch}
                              onChange={(e) => setPickerSearch(e.target.value)}
                          />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {ITEMS?.filter(item => {
                              const matchesSearch = item.name.toLowerCase().includes(pickerSearch.toLowerCase());
                              if (itemPickerSlot.type === 'starter') return matchesSearch && item.type === 'Starter';
                              if (itemPickerSlot.type === 'relic') return matchesSearch && item.type === 'Relic';
                              return matchesSearch && item.type === 'Item' && item.tier === 3;
                          }).map(item => (
                              <button
                                  key={item.id}
                                  onClick={() => {
                                      if (itemPickerSlot.type === 'starter') {
                                          setBuildForm({...buildForm, starterId: item.id});
                                      } else if (itemPickerSlot.type === 'relic') {
                                          setBuildForm({...buildForm, relicId: item.id});
                                      } else if (typeof itemPickerSlot.index === 'number') {
                                          const newItemIds = [...(buildForm.itemIds || [])];
                                          newItemIds[itemPickerSlot.index] = item.id;
                                          setBuildForm({...buildForm, itemIds: newItemIds});
                                      }
                                      setItemPickerSlot(null);
                                  }}
                                  className="flex flex-col gap-2 p-2 bg-slate-800 border border-slate-700 rounded hover:border-mythic-gold transition-all hover:bg-slate-700"
                              >
                                  <img src={item.image} alt={item.name} className="w-full aspect-square rounded object-cover" />
                                  <div className="text-[10px] font-bold text-white text-left line-clamp-1">{item.name}</div>
                              </button>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      , document.body)}

    </div>
  );
};