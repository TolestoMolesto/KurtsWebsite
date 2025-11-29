
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TournamentPlayer, TournamentRole } from '../types';
import { Trophy, Plus, Trash2, Crown, Medal, Swords, ScrollText, Gem, Flame, Target, Skull, UserPlus, X, Calendar, MapPin, MonitorPlay, Timer, History, ArrowRight, Users, User, ChevronRight, Lock, Loader2 } from 'lucide-react';
import { db, auth } from '../services/firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, query, orderBy, limit, setDoc, getDoc, QuerySnapshot, DocumentData, writeBatch, increment } from 'firebase/firestore';
import * as FirebaseAuth from 'firebase/auth';

const ROLES: TournamentRole[] = ['Solo', 'Jungle', 'Mid', 'Carry', 'Support'];
const WIN_BONUS = 5;

// Points Configuration
const POINTS = {
  Solo: { kill: 3, death: -1, assist: 1 },
  Jungle: { kill: 4, death: -2, assist: 2 },
  Mid: { kill: 4, death: -2, assist: 1 },
  Carry: { kill: 4, death: -2, assist: 1 },
  Support: { kill: 2, death: -1, assist: 3 },
};

const calculateMatchScore = (role: TournamentRole, k: number, d: number, a: number, isWin: boolean) => {
  const config = POINTS[role];
  const performanceScore = (k * config.kill) + (d * config.death) + (a * config.assist);
  // Removed Math.max(0, ...) to allow negative scores
  return performanceScore + (isWin ? WIN_BONUS : 0);
};

// Interface for Match History stored in Firestore
interface MatchHistoryItem {
  id?: string;
  timestamp: string;
  matchId: string;
  order: {
    result: string;
    score: number;
    players: Array<{ name: string; role: string; mmr: number; k: number; d: number; a: number }>;
  };
  chaos: {
    result: string;
    score: number;
    players: Array<{ name: string; role: string; mmr: number; k: number; d: number; a: number }>;
  };
}

type MMRFilter = 'All' | 'Clay-Gold' | 'Plat-Diamond' | 'Obsidian +';

// --- Form Types ---
type TeamData = Record<TournamentRole, { name: string; mmr: number; k: number; d: number; a: number }>;

const getEmptyTeamData = (): TeamData => {
    return ROLES.reduce((acc, role) => ({
        ...acc,
        [role]: { name: '', mmr: 1500, k: 0, d: 0, a: 0 }
    }), {} as TeamData);
};

export const TournamentView: React.FC = () => {
  const [players, setPlayers] = useState<TournamentPlayer[]>([]);
  const [matches, setMatches] = useState<MatchHistoryItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<MMRFilter>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // --- Form State ---
  const [matchMode, setMatchMode] = useState<'full' | 'single'>('full');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Single Player Form State
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState<TournamentRole>('Mid');
  const [formMMR, setFormMMR] = useState(1500);
  const [formKills, setFormKills] = useState(0);
  const [formDeaths, setFormDeaths] = useState(0);
  const [formAssists, setFormAssists] = useState(0);
  const [formIsWin, setFormIsWin] = useState(false);

  // Full Match Form State
  const [orderTeam, setOrderTeam] = useState<TeamData>(getEmptyTeamData());
  const [chaosTeam, setChaosTeam] = useState<TeamData>(getEmptyTeamData());
  const [winner, setWinner] = useState<'Order' | 'Chaos'>('Order');

  useEffect(() => {
    // Listen for Auth and User Role
    const unsubAuth = FirebaseAuth.onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser);
        if (currentUser) {
            try {
                // Fetch User Profile to check for Admin Role
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                if (userDoc.exists() && userDoc.data().isAdmin === true) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch (e) {
                console.error("Error fetching user profile for role check:", e);
                setIsAdmin(false);
            }
        } else {
            setIsAdmin(false);
        }
        setAuthLoading(false);
    });

    // Listen for Players - Removed orderBy('score') since we calculate it client-side
    const qPlayers = query(collection(db, 'tournament_players'));
    const unsubPlayers = onSnapshot(qPlayers, (snapshot: QuerySnapshot<DocumentData>) => {
      const playersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TournamentPlayer));
      setPlayers(playersData);
    });

    // Listen for Matches
    const qMatches = query(collection(db, 'tournament_matches'), orderBy('timestamp', 'desc'), limit(10));
    const unsubMatches = onSnapshot(qMatches, (snapshot: QuerySnapshot<DocumentData>) => {
        const matchesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MatchHistoryItem));
        setMatches(matchesData);
    });

    return () => {
        unsubAuth();
        unsubPlayers();
        unsubMatches();
    };
  }, []);

  const resetForms = () => {
      setFormName('');
      setFormKills(0);
      setFormDeaths(0);
      setFormAssists(0);
      setFormIsWin(false);
      setOrderTeam(getEmptyTeamData());
      setChaosTeam(getEmptyTeamData());
  };

  const calculateTotalScore = (p: TournamentPlayer) => {
      // Use the player's primary role for multipliers, defaulting to Mid if unset
      const role = p.primaryRole || 'Mid';
      const config = POINTS[role] || POINTS['Mid'];
      
      const kScore = (p.kills || 0) * config.kill;
      const dScore = (p.deaths || 0) * config.death;
      const aScore = (p.assists || 0) * config.assist;
      const wScore = (p.wins || 0) * WIN_BONUS;
      
      return kScore + dScore + aScore + wScore;
  };

  const handleRecordSingle = async () => {
      if (!formName.trim() || isSubmitting) return;
      setIsSubmitting(true);

      const score = calculateMatchScore(formRole, formKills, formDeaths, formAssists, formIsWin);
      const playerId = formName.toLowerCase().replace(/\s+/g, '-');

      try {
        const playerRef = doc(db, 'tournament_players', playerId);
        
        await setDoc(playerRef, {
            id: playerId,
            name: formName,
            mmr: formMMR,
            // primaryRole update handled by merge, but typically we might want to be careful overwriting it
            // For now, we update it to the latest played role to ensure they have a role for scoring
            primaryRole: formRole, 
            kills: increment(formKills),
            deaths: increment(formDeaths),
            assists: increment(formAssists),
            // score: increment(score), // REMOVED: No longer storing aggregate score
            matchesPlayed: increment(1),
            wins: increment(formIsWin ? 1 : 0)
        }, { merge: true });

        // Match Log - We still log the match-specific score for history
        const matchLog = {
            timestamp: new Date().toISOString(),
            matchId: `Partial #${Date.now().toString().slice(-4)}`,
            order: {
                result: formIsWin ? 'Victory' : 'Defeat',
                score: score,
                players: [{ name: formName, role: formRole, mmr: formMMR, k: formKills, d: formDeaths, a: formAssists }]
            },
            chaos: { result: '---', score: 0, players: [] }
        };
        await addDoc(collection(db, 'tournament_matches'), matchLog);

        setIsModalOpen(false);
        resetForms();
      } catch (error) {
          console.error("Error recording single match:", error);
          alert("Failed to save match.");
      } finally {
          setIsSubmitting(false);
      }
  };

  const handleRecordFullMatch = async () => {
      setIsSubmitting(true);
      const batch = writeBatch(db);

      try {
        const orderPlayersList: any[] = [];
        const chaosPlayersList: any[] = [];
        let orderTotalScore = 0;
        let chaosTotalScore = 0;

        // Process Order Team
        for (const role of ROLES) {
            const p = orderTeam[role];
            if (!p.name.trim()) continue; // Skip empty slots

            const isWin = winner === 'Order';
            const score = calculateMatchScore(role, p.k, p.d, p.a, isWin);
            orderTotalScore += score;
            const playerId = p.name.toLowerCase().replace(/\s+/g, '-');
            const playerRef = doc(db, 'tournament_players', playerId);

            // Update Player Stats
            batch.set(playerRef, {
                id: playerId,
                name: p.name,
                mmr: p.mmr,
                primaryRole: role, // Defaulting to current role
                kills: increment(p.k),
                deaths: increment(p.d),
                assists: increment(p.a),
                // score: increment(score), // REMOVED: No longer storing aggregate score
                matchesPlayed: increment(1),
                wins: increment(isWin ? 1 : 0)
            }, { merge: true });

            orderPlayersList.push({ name: p.name, role, mmr: p.mmr, k: p.k, d: p.d, a: p.a });
        }

        // Process Chaos Team
        for (const role of ROLES) {
            const p = chaosTeam[role];
            if (!p.name.trim()) continue; 

            const isWin = winner === 'Chaos';
            const score = calculateMatchScore(role, p.k, p.d, p.a, isWin);
            chaosTotalScore += score;
            const playerId = p.name.toLowerCase().replace(/\s+/g, '-');
            const playerRef = doc(db, 'tournament_players', playerId);

            batch.set(playerRef, {
                id: playerId,
                name: p.name,
                mmr: p.mmr,
                primaryRole: role, 
                kills: increment(p.k),
                deaths: increment(p.d),
                assists: increment(p.a),
                // score: increment(score), // REMOVED: No longer storing aggregate score
                matchesPlayed: increment(1),
                wins: increment(isWin ? 1 : 0)
            }, { merge: true });

            chaosPlayersList.push({ name: p.name, role, mmr: p.mmr, k: p.k, d: p.d, a: p.a });
        }

        // Create Match Record
        const matchRef = doc(collection(db, 'tournament_matches'));
        batch.set(matchRef, {
            timestamp: new Date().toISOString(),
            matchId: `Match #${Date.now().toString().slice(-4)}`,
            order: {
                result: winner === 'Order' ? 'Victory' : 'Defeat',
                score: orderTotalScore,
                players: orderPlayersList
            },
            chaos: {
                result: winner === 'Chaos' ? 'Victory' : 'Defeat',
                score: chaosTotalScore,
                players: chaosPlayersList
            }
        });

        await batch.commit();
        setIsModalOpen(false);
        resetForms();

      } catch (error) {
          console.error("Error recording full match:", error);
          alert("Failed to record match. See console for details.");
      } finally {
          setIsSubmitting(false);
      }
  };

  const getFilteredPlayers = () => {
      const filtered = players.filter(p => {
          if (activeFilter === 'Clay-Gold') return p.mmr < 2100;
          if (activeFilter === 'Plat-Diamond') return p.mmr >= 2100 && p.mmr < 3100;
          if (activeFilter === 'Obsidian +') return p.mmr >= 3100;
          return true;
      });

      // Sort by dynamically calculated score
      return filtered.sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a));
  };

  const getMMRTierColor = (mmr: number) => {
      if (mmr >= 3100) return 'text-purple-400 border-purple-500/50 bg-purple-900/20';
      if (mmr >= 2100) return 'text-cyan-400 border-cyan-500/50 bg-cyan-900/20';
      return 'text-yellow-600 border-yellow-600/50 bg-yellow-900/20';
  };

  const getMMRLabel = (mmr: number) => {
      if (mmr >= 5500) return 'Deity';
      if (mmr >= 5000) return 'Demigod';
      if (mmr >= 4400) return 'Master';
      if (mmr >= 3800) return 'Obsidian';
      if (mmr >= 3200) return 'Diamond';
      if (mmr >= 2600) return 'Platinum';
      if (mmr >= 2000) return 'Gold';
      if (mmr >= 1400) return 'Silver';
      if (mmr >= 800) return 'Bronze';
      return 'Amber';
  };

  const formatDate = (isoString: string) => {
      try {
          return new Date(isoString).toLocaleDateString();
      } catch (e) {
          return isoString;
      }
  };

  const RoleIcon = ({ role, size = 'md', className = '' }: { role: TournamentRole | string, size?: 'sm' | 'md', className?: string }) => (
    <div title={role} className={`rounded flex items-center justify-center font-bold text-white shadow-sm shrink-0 ${
        role === 'Support' ? 'bg-green-600' : 
        role === 'Carry' ? 'bg-yellow-600' :
        role === 'Mid' ? 'bg-purple-600' :
        role === 'Jungle' ? 'bg-orange-600' : 'bg-blue-600'
    } ${size === 'sm' ? 'w-4 h-4 text-[8px]' : 'w-5 h-5 text-[10px]'} ${className}`}>
        {role.charAt(0)}
    </div>
  );

  if (authLoading) {
      return (
          <div className="flex items-center justify-center min-h-[60vh]">
              <Loader2 className="animate-spin text-mythic-gold" size={48} />
          </div>
      );
  }

  if (!user) {
      return (
          <div className="container mx-auto px-4 py-20 flex justify-center">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-950/50 pointer-events-none"></div>
                   <div className="relative z-10 flex flex-col items-center">
                       <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-lg border border-slate-700">
                           <Lock size={40} className="text-mythic-gold" />
                       </div>
                       <h2 className="text-3xl font-serif font-bold text-slate-100 mb-3">Tournament Access Locked</h2>
                       <p className="text-slate-400 mb-8 leading-relaxed">
                           The Forge Championship Series data is classified. <br/> 
                           Only registered champions may view the bracket and standings.
                       </p>
                       <div className="bg-slate-950/50 px-6 py-4 rounded-xl border border-slate-800 flex items-center gap-3 text-sm text-slate-300">
                           <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                           Please Sign In using the button in the top right.
                       </div>
                   </div>
              </div>
          </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-7xl">
      
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="text-center md:text-left">
           <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 flex items-center justify-center md:justify-start gap-3">
              <Trophy className="text-mythic-gold" size={32} /> 
              Forge Championship Series
           </h1>
           <p className="text-slate-400 mt-2">Open bracket. No preset teams. Prove your worth in the queue.</p>
        </div>

        {/* Rules & Rewards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Rules */}
            <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <ScrollText size={120} />
                </div>
                <h3 className="text-xl font-bold text-mythic-gold mb-4 flex items-center gap-2">
                    <ScrollText size={20} /> Tournament Rules
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
                    <div>
                        <strong className="text-slate-100 block mb-1">Scoring System</strong>
                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                            <li><span className="text-yellow-500 font-bold">Win Bonus:</span> +{WIN_BONUS} Points</li>
                            <li><span className="text-purple-400 font-bold">Carry/Mid/Jungle:</span> 3 pts/kill, -2 pts/death, 1 pts/assist </li>
                            <li><span className="text-blue-400 font-bold">Solo:</span> 2 pts/kill, -2 pts/death, 2 pts/assist </li>
                            <li><span className="text-green-400 font-bold">Support:</span> 1 pts/kill, -2 pts/death, 3 pts/assist </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="text-slate-100 block mb-1">Format</strong>
                        <p className="mb-2">
                            Games are played in 5v5 Custom Queues. Teams are randomized or captain-picked. 
                            Individual performance is tracked across all games played.
                        </p>
                        <strong className="text-slate-100 block mb-1">Schedule</strong>
                        <p>Every Saturday & Sunday at 6 PM EST.</p>
                    </div>
                </div>
            </div>

            {/* Rewards */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-mythic-gold/30 rounded-xl p-6 relative overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-mythic-gold/5 group-hover:bg-mythic-gold/10 transition-colors"></div>
                <div className="absolute -bottom-4 -right-4 text-mythic-gold opacity-10">
                    <Gem size={100} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                    <Crown size={20} className="text-mythic-gold" /> Rewards
                </h3>

                <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-mythic-gold/20">
                        <div className="text-2xl font-bold text-white">1st</div>
                        <div className="flex-1">
                            <div className="text-mythic-gold font-bold">8,000 Gems</div>
                            <div className="text-[10px] text-slate-400 uppercase">Per Player</div>
                        </div>
                        <Gem size={20} className="text-blue-400" />
                    </div>
                    <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-700">
                        <div className="text-xl font-bold text-slate-300">2nd</div>
                        <div className="flex-1">
                            <div className="text-slate-200 font-bold">4,000 Gems</div>
                            <div className="text-[10px] text-slate-400 uppercase">Per Player</div>
                        </div>
                        <Gem size={18} className="text-blue-400/70" />
                    </div>
                    <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-700">
                        <div className="text-lg font-bold text-yellow-700">3rd</div>
                        <div className="flex-1">
                            <div className="text-slate-300 font-bold">2,500 Gems</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- MATCH HISTORY SECTION --- */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-mythic-gold/10 rounded-lg flex items-center justify-center border border-mythic-gold/30">
                        <History className="text-mythic-gold" size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-serif font-bold text-slate-100">Recent Matches</h3>
                        <p className="text-xs text-slate-400">Live data from Firestore</p>
                    </div>
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Live Updates</div>
            </div>
            
            <div className="p-0">
                 {matches.map((match, idx) => (
                    <div key={match.id || idx} className={`border-b border-slate-800 last:border-0 ${idx % 2 === 0 ? 'bg-slate-950/30' : ''}`}>
                        {/* Match Header */}
                        <div className="px-4 py-2 bg-slate-950/50 border-b border-slate-800/50 flex justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                           <span className="flex items-center gap-2"><Swords size={12} /> {match.matchId}</span>
                           <span>{formatDate(match.timestamp)}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                           {/* Order Team */}
                           <div className="border-r border-slate-800">
                               <div className={`px-4 py-3 flex justify-between items-center border-b border-slate-800/50 bg-gradient-to-r from-blue-900/20 to-transparent`}>
                                   <div className="flex items-center gap-2">
                                       <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                       <span className="text-blue-400 font-black uppercase tracking-widest text-sm">ORDER</span>
                                   </div>
                                   <div className={`font-bold text-sm uppercase ${match.order.result === 'Victory' ? 'text-green-400' : 'text-red-400'}`}>
                                       {match.order.result}
                                   </div>
                               </div>
                               <div>
                                   {match.order.players.map((p, i) => (
                                       <div key={i} className="flex items-center px-4 py-2 hover:bg-white/5 transition-colors border-b border-slate-800/30 last:border-0">
                                           <div className="w-8 shrink-0 flex justify-center">
                                               <RoleIcon role={p.role} size="sm" />
                                           </div>
                                           <div className="flex-1 px-3">
                                               <div className="text-sm font-bold text-slate-200">{p.name}</div>
                                               <div className="text-[10px] text-slate-500 font-mono">{p.mmr} MMR</div>
                                           </div>
                                           <div className="text-right font-mono text-xs">
                                               <span className="text-slate-300 font-bold">{p.k}/{p.d}/{p.a}</span>
                                           </div>
                                       </div>
                                   ))}
                               </div>
                           </div>

                           {/* Chaos Team */}
                           <div>
                               <div className={`px-4 py-3 flex justify-between items-center border-b border-slate-800/50 bg-gradient-to-r from-red-900/20 to-transparent`}>
                                   <div className="flex items-center gap-2">
                                       <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                       <span className="text-red-400 font-black uppercase tracking-widest text-sm">CHAOS</span>
                                   </div>
                                   <div className={`font-bold text-sm uppercase ${match.chaos.result === 'Victory' ? 'text-green-400' : 'text-red-400'}`}>
                                       {match.chaos.result}
                                   </div>
                               </div>
                               <div>
                                   {match.chaos.players.map((p, i) => (
                                       <div key={i} className="flex items-center px-4 py-2 hover:bg-white/5 transition-colors border-b border-slate-800/30 last:border-0">
                                           <div className="w-8 shrink-0 flex justify-center">
                                               <RoleIcon role={p.role} size="sm" />
                                           </div>
                                           <div className="flex-1 px-3">
                                               <div className="text-sm font-bold text-slate-200">{p.name}</div>
                                               <div className="text-[10px] text-slate-500 font-mono">{p.mmr} MMR</div>
                                           </div>
                                           <div className="text-right font-mono text-xs">
                                               <span className="text-slate-300 font-bold">{p.k}/{p.d}/{p.a}</span>
                                           </div>
                                       </div>
                                   ))}
                               </div>
                           </div>
                        </div>
                    </div>
                 ))}
                 
                 {matches.length === 0 && (
                     <div className="p-8 text-center text-slate-500 italic">
                         No matches recorded yet.
                     </div>
                 )}
            </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col min-h-[500px]">
            {/* Controls */}
            <div className="p-4 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-950/50">
                <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg">
                    {(['All', 'Clay-Gold', 'Plat-Diamond', 'Obsidian +'] as MMRFilter[]).map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                                activeFilter === filter 
                                ? 'bg-mythic-gold text-slate-900 shadow' 
                                : 'text-slate-400 hover:text-white hover:bg-slate-700'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                     <div className="text-right hidden md:block">
                        <p className="text-xs text-slate-400 font-bold uppercase">Current Season</p>
                        <p className="text-sm font-bold text-white">Season 1</p>
                     </div>
                     
                     {/* RECORD MATCH BUTTON - ONLY VISIBLE TO ADMINS */}
                     {isAdmin && (
                         <button 
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 font-bold rounded-lg transition-all shadow-lg bg-mythic-gold hover:bg-yellow-400 text-slate-900 hover:shadow-mythic-gold/20"
                         >
                            <Swords size={18} /> Record Match
                         </button>
                     )}
                </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-800 bg-slate-900">
                            <th className="p-4 font-bold">Rank</th>
                            <th className="p-4 font-bold">Player</th>
                            <th className="p-4 font-bold">Roles</th>
                            <th className="p-4 font-bold text-center">Matches</th>
                            <th className="p-4 font-bold text-center">Win Rate</th>
                            <th className="p-4 font-bold text-center">K / D / A</th>
                            <th className="p-4 font-bold text-right">Total Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getFilteredPlayers().map((player, index) => {
                            const rank = index + 1;
                            const winRate = player.matchesPlayed ? Math.round(((player.wins || 0) / player.matchesPlayed) * 100) : 0;
                            // Calculate Score on the fly
                            const calculatedScore = calculateTotalScore(player);
                            
                            return (
                                <tr key={player.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group">
                                    <td className="p-4">
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                                            rank === 1 ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' :
                                            rank === 2 ? 'bg-slate-400 text-black' :
                                            rank === 3 ? 'bg-orange-700 text-white' :
                                            'bg-slate-800 text-slate-500'
                                        }`}>
                                            {rank}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-200 group-hover:text-white text-base">{player.name}</span>
                                            <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded border inline-block w-fit mt-1 ${getMMRTierColor(player.mmr)}`}>
                                                {getMMRLabel(player.mmr)} • {player.mmr} MMR
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col items-center">
                                                <RoleIcon role={player.primaryRole} />
                                                <span className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">Main</span>
                                            </div>
                                            {player.offRoles && player.offRoles.length > 0 && (
                                                <div className="flex gap-1 ml-2 pl-2 border-l border-slate-700">
                                                    {player.offRoles.map((role, i) => (
                                                        <div key={i} className="flex flex-col items-center opacity-70">
                                                            <RoleIcon role={role} size="sm" />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center font-mono text-slate-300">
                                        {player.matchesPlayed || 0}
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex flex-col items-center">
                                            <span className={`font-bold ${winRate >= 50 ? 'text-green-400' : 'text-slate-400'}`}>{winRate}%</span>
                                            <span className="text-[10px] text-slate-600">{player.wins}W - {(player.matchesPlayed || 0) - (player.wins || 0)}L</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="font-mono text-sm text-slate-300 bg-slate-950/30 py-1 px-3 rounded-full inline-block border border-slate-800">
                                            <span className="text-green-400 font-bold">{player.kills}</span>
                                            <span className="text-slate-600 mx-1">/</span>
                                            <span className="text-red-400 font-bold">{player.deaths}</span>
                                            <span className="text-slate-600 mx-1">/</span>
                                            <span className="text-yellow-400 font-bold">{player.assists}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <span className={`text-xl font-black ${calculatedScore < 0 ? 'text-red-500' : 'text-mythic-gold'}`}>{calculatedScore}</span>
                                    </td>
                                </tr>
                            );
                        })}
                        {getFilteredPlayers().length === 0 && (
                            <tr>
                                <td colSpan={7} className="p-10 text-center text-slate-500 italic">
                                    No players found in this tier. Record a match to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </div>

      {/* Record Match Modal */}
      {isModalOpen && isAdmin && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`bg-slate-900 w-full ${matchMode === 'full' ? 'max-w-6xl h-[90vh]' : 'max-w-md'} rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative flex flex-col`}>
                
                {/* Modal Header */}
                <div className="p-4 border-b border-slate-700 bg-slate-950 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
                            <Swords size={18} className="text-mythic-gold" /> Record Match
                        </h3>
                        {/* Mode Toggle */}
                        <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                            <button 
                                onClick={() => setMatchMode('full')} 
                                className={`px-3 py-1 rounded text-xs font-bold uppercase transition-all ${matchMode === 'full' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                5v5 Match
                            </button>
                            <button 
                                onClick={() => setMatchMode('single')} 
                                className={`px-3 py-1 rounded text-xs font-bold uppercase transition-all ${matchMode === 'single' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                Single Entry
                            </button>
                        </div>
                    </div>
                    <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto p-6">
                    
                    {/* --- FULL 5v5 MATCH FORM --- */}
                    {matchMode === 'full' && (
                        <div className="flex flex-col h-full gap-6">
                            
                            {/* Winner Toggle */}
                            <div className="flex justify-center mb-2">
                                <div className="flex items-center bg-slate-950 border border-slate-700 rounded-full p-1 gap-4">
                                    <button 
                                        onClick={() => setWinner('Order')}
                                        className={`px-8 py-2 rounded-full font-black uppercase text-sm transition-all flex items-center gap-2 ${winner === 'Order' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-500 hover:text-blue-400'}`}
                                    >
                                        <div className="w-3 h-3 rounded-full bg-blue-400"></div> ORDER VICTORY
                                    </button>
                                    <button 
                                        onClick={() => setWinner('Chaos')}
                                        className={`px-8 py-2 rounded-full font-black uppercase text-sm transition-all flex items-center gap-2 ${winner === 'Chaos' ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' : 'text-slate-500 hover:text-red-400'}`}
                                    >
                                        CHAOS VICTORY <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    </button>
                                </div>
                            </div>

                            {/* Teams Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Order Team */}
                                <div className="bg-slate-950/50 rounded-xl border border-blue-900/30 overflow-hidden">
                                    <div className="bg-blue-900/20 p-3 border-b border-blue-900/30 flex justify-between items-center">
                                        <span className="font-bold text-blue-400 flex items-center gap-2"><Users size={16} /> ORDER TEAM</span>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${winner === 'Order' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {winner === 'Order' ? 'WINNER' : 'DEFEAT'}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        {/* Table Header */}
                                        <div className="grid grid-cols-[30px_1fr_45px_45px_45px_50px] gap-2 mb-2 px-1 text-[10px] font-bold uppercase text-slate-500">
                                            <div className="text-center">Role</div>
                                            <div>Name</div>
                                            <div className="text-center text-green-500" title="Kills">K</div>
                                            <div className="text-center text-red-500" title="Deaths">D</div>
                                            <div className="text-center text-yellow-500" title="Assists">A</div>
                                            <div className="text-center text-purple-400">MMR</div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            {ROLES.map(role => (
                                                <div key={role} className="grid grid-cols-[30px_1fr_45px_45px_45px_50px] gap-2 items-center bg-slate-900 p-2 rounded border border-slate-800">
                                                    <div className="flex justify-center"><RoleIcon role={role} /></div>
                                                    <input 
                                                        className="bg-transparent border-b border-slate-700 text-sm text-white focus:border-blue-500 outline-none px-1 w-full" 
                                                        placeholder="Name..."
                                                        value={orderTeam[role].name}
                                                        onChange={(e) => setOrderTeam(prev => ({...prev, [role]: { ...prev[role], name: e.target.value }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-white w-full" 
                                                        value={orderTeam[role].k} onChange={(e) => setOrderTeam(prev => ({...prev, [role]: { ...prev[role], k: parseInt(e.target.value)||0 }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-white w-full"
                                                        value={orderTeam[role].d} onChange={(e) => setOrderTeam(prev => ({...prev, [role]: { ...prev[role], d: parseInt(e.target.value)||0 }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-white w-full"
                                                        value={orderTeam[role].a} onChange={(e) => setOrderTeam(prev => ({...prev, [role]: { ...prev[role], a: parseInt(e.target.value)||0 }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-yellow-500 w-full"
                                                        value={orderTeam[role].mmr} onChange={(e) => setOrderTeam(prev => ({...prev, [role]: { ...prev[role], mmr: parseInt(e.target.value)||1500 }}))}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Chaos Team */}
                                <div className="bg-slate-950/50 rounded-xl border border-red-900/30 overflow-hidden">
                                    <div className="bg-red-900/20 p-3 border-b border-red-900/30 flex justify-between items-center">
                                        <span className="font-bold text-red-400 flex items-center gap-2"><Users size={16} /> CHAOS TEAM</span>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${winner === 'Chaos' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {winner === 'Chaos' ? 'WINNER' : 'DEFEAT'}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        {/* Table Header */}
                                        <div className="grid grid-cols-[30px_1fr_45px_45px_45px_50px] gap-2 mb-2 px-1 text-[10px] font-bold uppercase text-slate-500">
                                            <div className="text-center">Role</div>
                                            <div>Name</div>
                                            <div className="text-center text-green-500" title="Kills">K</div>
                                            <div className="text-center text-red-500" title="Deaths">D</div>
                                            <div className="text-center text-yellow-500" title="Assists">A</div>
                                            <div className="text-center text-purple-400">MMR</div>
                                        </div>

                                        <div className="space-y-2">
                                            {ROLES.map(role => (
                                                <div key={role} className="grid grid-cols-[30px_1fr_45px_45px_45px_50px] gap-2 items-center bg-slate-900 p-2 rounded border border-slate-800">
                                                    <div className="flex justify-center"><RoleIcon role={role} /></div>
                                                    <input 
                                                        className="bg-transparent border-b border-slate-700 text-sm text-white focus:border-red-500 outline-none px-1 w-full" 
                                                        placeholder="Name..."
                                                        value={chaosTeam[role].name}
                                                        onChange={(e) => setChaosTeam(prev => ({...prev, [role]: { ...prev[role], name: e.target.value }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-white w-full"
                                                        value={chaosTeam[role].k} onChange={(e) => setChaosTeam(prev => ({...prev, [role]: { ...prev[role], k: parseInt(e.target.value)||0 }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-white w-full"
                                                        value={chaosTeam[role].d} onChange={(e) => setChaosTeam(prev => ({...prev, [role]: { ...prev[role], d: parseInt(e.target.value)||0 }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-white w-full"
                                                        value={chaosTeam[role].a} onChange={(e) => setChaosTeam(prev => ({...prev, [role]: { ...prev[role], a: parseInt(e.target.value)||0 }}))}
                                                    />
                                                    <input 
                                                        type="number" className="bg-slate-950 border border-slate-700 rounded text-center text-xs text-yellow-500 w-full"
                                                        value={chaosTeam[role].mmr} onChange={(e) => setChaosTeam(prev => ({...prev, [role]: { ...prev[role], mmr: parseInt(e.target.value)||1500 }}))}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-auto">
                                <button 
                                    onClick={handleRecordFullMatch}
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-mythic-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold rounded-xl uppercase tracking-wider shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? 'Recording Match...' : 'Submit Full Match Record'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* --- SINGLE ENTRY FORM (Legacy/Backup) --- */}
                    {matchMode === 'single' && (
                        <div className="space-y-4 max-w-sm mx-auto">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Player Name</label>
                                <input 
                                    type="text" 
                                    value={formName}
                                    onChange={(e) => setFormName(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white focus:border-mythic-gold outline-none"
                                    placeholder="Enter In-Game Name"
                                    autoFocus
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">MMR</label>
                                    <input 
                                        type="number" 
                                        value={formMMR}
                                        onChange={(e) => setFormMMR(parseInt(e.target.value) || 0)}
                                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white focus:border-mythic-gold outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Result</label>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => setFormIsWin(true)}
                                            className={`flex-1 py-2 rounded font-bold text-sm border transition-colors ${formIsWin ? 'bg-green-600 border-green-500 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'}`}
                                        >
                                            WIN
                                        </button>
                                        <button 
                                            onClick={() => setFormIsWin(false)}
                                            className={`flex-1 py-2 rounded font-bold text-sm border transition-colors ${!formIsWin ? 'bg-red-600 border-red-500 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'}`}
                                        >
                                            LOSS
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Role Played</label>
                                <div className="flex gap-1">
                                    {ROLES.map(role => (
                                        <button
                                            key={role}
                                            onClick={() => setFormRole(role)}
                                            className={`flex-1 py-1.5 rounded text-[10px] font-bold uppercase transition-all ${
                                                formRole === role 
                                                ? 'bg-mythic-gold text-slate-900 shadow' 
                                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                        >
                                            {role}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800">
                                <div className="text-center">
                                    <label className="block text-[10px] font-bold uppercase text-green-500 mb-1">Kills</label>
                                    <input 
                                        type="number" 
                                        value={formKills}
                                        onChange={(e) => setFormKills(parseInt(e.target.value) || 0)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-center text-white focus:border-green-500 outline-none"
                                    />
                                </div>
                                <div className="text-center">
                                    <label className="block text-[10px] font-bold uppercase text-red-500 mb-1">Deaths</label>
                                    <input 
                                        type="number" 
                                        value={formDeaths}
                                        onChange={(e) => setFormDeaths(parseInt(e.target.value) || 0)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-center text-white focus:border-red-500 outline-none"
                                    />
                                </div>
                                <div className="text-center">
                                    <label className="block text-[10px] font-bold uppercase text-yellow-500 mb-1">Assists</label>
                                    <input 
                                        type="number" 
                                        value={formAssists}
                                        onChange={(e) => setFormAssists(parseInt(e.target.value) || 0)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-center text-white focus:border-yellow-500 outline-none"
                                    />
                                </div>
                            </div>

                            <button 
                                onClick={handleRecordSingle}
                                disabled={!formName || isSubmitting}
                                className="w-full py-3 bg-gradient-to-r from-mythic-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold rounded-lg uppercase tracking-wider shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Single Result'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
      )}
    </div>
  );
};
