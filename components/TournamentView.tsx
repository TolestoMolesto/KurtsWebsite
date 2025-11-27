
import React, { useState } from 'react';
import { TournamentPlayer, TournamentRole } from '../types';
import { Trophy, Plus, Trash2, Crown, Medal, Swords, ScrollText, Gem, Flame, Target, Skull, UserPlus, X, Calendar, MapPin, MonitorPlay, Timer, History, ArrowRight } from 'lucide-react';

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
  return Math.max(0, performanceScore + (isWin ? WIN_BONUS : 0));
};

// Mock Initial Data for Leaderboard
const INITIAL_PLAYERS: TournamentPlayer[] = [
    { id: '1', name: 'Weak3n', primaryRole: 'Jungle', offRoles: ['Solo', 'Mid'], mmr: 3200, kills: 45, deaths: 12, assists: 30, score: 280, matchesPlayed: 5, wins: 4 },
    { id: '2', name: 'Inbowned', primaryRole: 'Support', offRoles: ['Solo', 'Jungle'], mmr: 2900, kills: 10, deaths: 15, assists: 80, score: 245, matchesPlayed: 5, wins: 3 },
    { id: '3', name: 'Fineokay', primaryRole: 'Solo', offRoles: ['Carry', 'Mid'], mmr: 3100, kills: 30, deaths: 10, assists: 25, score: 260, matchesPlayed: 5, wins: 4 },
    { id: '4', name: 'Zapman', primaryRole: 'Carry', offRoles: ['Mid', 'Jungle'], mmr: 2800, kills: 50, deaths: 20, assists: 15, score: 230, matchesPlayed: 5, wins: 2 },
    { id: '5', name: 'Venenu', primaryRole: 'Mid', offRoles: ['Carry', 'Solo'], mmr: 2750, kills: 40, deaths: 18, assists: 20, score: 220, matchesPlayed: 5, wins: 2 },
];

// Mock Match History Data
const MOCK_MATCHES = [
  {
    id: 'm1',
    timestamp: '2 hours ago',
    matchId: 'Match #492',
    order: {
      result: 'Defeat',
      score: 18,
      players: [
        { name: 'Haddix', role: 'Solo', mmr: 3050, k: 3, d: 6, a: 4 },
        { name: 'Lasbra', role: 'Jungle', mmr: 3100, k: 5, d: 8, a: 5 },
        { name: 'Pegon', role: 'Mid', mmr: 2800, k: 6, d: 7, a: 3 },
        { name: 'Barra', role: 'Carry', mmr: 2750, k: 4, d: 6, a: 2 },
        { name: 'Jake', role: 'Support', mmr: 2850, k: 0, d: 8, a: 8 },
      ]
    },
    chaos: {
      result: 'Victory',
      score: 35,
      players: [
        { name: 'Fineokay', role: 'Solo', mmr: 3100, k: 5, d: 2, a: 12 },
        { name: 'Weak3n', role: 'Jungle', mmr: 3200, k: 12, d: 3, a: 8 },
        { name: 'Venenu', role: 'Mid', mmr: 2750, k: 8, d: 4, a: 15 },
        { name: 'Zapman', role: 'Carry', mmr: 2800, k: 7, d: 2, a: 9 },
        { name: 'Inbowned', role: 'Support', mmr: 2900, k: 1, d: 5, a: 22 },
      ]
    }
  },
  {
    id: 'm2',
    timestamp: '1 day ago',
    matchId: 'Match #488',
    order: {
      result: 'Victory',
      score: 42,
      players: [
         { name: 'SoloOrTroll', role: 'Solo', mmr: 2950, k: 8, d: 2, a: 15 },
         { name: 'Screammmmm', role: 'Jungle', mmr: 3120, k: 15, d: 4, a: 10 },
         { name: 'Sheento', role: 'Mid', mmr: 3000, k: 9, d: 3, a: 12 },
         { name: 'Netriroid', role: 'Carry', mmr: 2900, k: 8, d: 1, a: 8 },
         { name: 'Ronngyu', role: 'Support', mmr: 2950, k: 2, d: 2, a: 25 },
      ]
    },
    chaos: {
      result: 'Defeat',
      score: 15,
      players: [
         { name: 'Jarcorr', role: 'Solo', mmr: 3080, k: 2, d: 8, a: 3 },
         { name: 'Panitom', role: 'Jungle', mmr: 3150, k: 6, d: 9, a: 4 },
         { name: 'Paul', role: 'Mid', mmr: 3200, k: 5, d: 6, a: 2 },
         { name: 'CycloneSpin', role: 'Carry', mmr: 3100, k: 2, d: 8, a: 1 },
         { name: 'Aror', role: 'Support', mmr: 3050, k: 0, d: 11, a: 5 },
      ]
    }
  }
];

type MMRFilter = 'All' | 'Clay-Gold' | 'Plat-Diamond' | 'Obsidian';

export const TournamentView: React.FC = () => {
  const [players, setPlayers] = useState<TournamentPlayer[]>(INITIAL_PLAYERS);
  const [activeFilter, setActiveFilter] = useState<MMRFilter>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState<TournamentRole>('Mid');
  const [formMMR, setFormMMR] = useState(1500);
  const [formKills, setFormKills] = useState(0);
  const [formDeaths, setFormDeaths] = useState(0);
  const [formAssists, setFormAssists] = useState(0);
  const [formIsWin, setFormIsWin] = useState(false);

  // Helper to pick random off roles for new players
  const getRandomOffRoles = (mainRole: TournamentRole): TournamentRole[] => {
      const otherRoles = ROLES.filter(r => r !== mainRole);
      // Shuffle and pick 2
      const shuffled = otherRoles.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
  };

  const handleRecordMatch = () => {
      if (!formName.trim()) return;

      const score = calculateMatchScore(formRole, formKills, formDeaths, formAssists, formIsWin);

      setPlayers(prev => {
          const existingIndex = prev.findIndex(p => p.name.toLowerCase() === formName.toLowerCase());
          
          if (existingIndex >= 0) {
              // Update existing
              const updated = [...prev];
              const p = updated[existingIndex];
              p.kills += formKills;
              p.deaths += formDeaths;
              p.assists += formAssists;
              p.score += score;
              p.matchesPlayed = (p.matchesPlayed || 0) + 1;
              p.wins = (p.wins || 0) + (formIsWin ? 1 : 0);
              // Update Role/MMR to latest? Let's keep MMR static for now or update it
              p.mmr = formMMR; 
              // We do not overwrite primaryRole/offRoles for existing players in this simple form
              // p.primaryRole = formRole; 
              return updated.sort((a, b) => b.score - a.score);
          } else {
              // Create new
              const newPlayer: TournamentPlayer = {
                  id: Date.now().toString(),
                  name: formName,
                  primaryRole: formRole,
                  offRoles: getRandomOffRoles(formRole),
                  mmr: formMMR,
                  kills: formKills,
                  deaths: formDeaths,
                  assists: formAssists,
                  score: score,
                  matchesPlayed: 1,
                  wins: formIsWin ? 1 : 0
              };
              return [...prev, newPlayer].sort((a, b) => b.score - a.score);
          }
      });

      // Reset
      setIsModalOpen(false);
      setFormName('');
      setFormKills(0);
      setFormDeaths(0);
      setFormAssists(0);
      setFormIsWin(false);
  };

  const getFilteredPlayers = () => {
      return players.filter(p => {
          if (activeFilter === 'Clay-Gold') return p.mmr < 2100;
          if (activeFilter === 'Plat-Diamond') return p.mmr >= 2100 && p.mmr < 3100;
          if (activeFilter === 'Obsidian') return p.mmr >= 3100;
          return true;
      });
  };

  const getMMRTierColor = (mmr: number) => {
      if (mmr >= 3100) return 'text-purple-400 border-purple-500/50 bg-purple-900/20';
      if (mmr >= 2100) return 'text-cyan-400 border-cyan-500/50 bg-cyan-900/20';
      return 'text-yellow-600 border-yellow-600/50 bg-yellow-900/20';
  };

  const getMMRLabel = (mmr: number) => {
      if (mmr >= 3100) return 'Obsidian';
      if (mmr >= 2600) return 'Diamond';
      if (mmr >= 2100) return 'Platinum';
      if (mmr >= 1600) return 'Gold';
      if (mmr >= 1100) return 'Silver';
      if (mmr >= 600) return 'Bronze';
      return 'Clay';
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      
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
                            <li><span className="text-purple-400 font-bold">Carry/Mid/Jungle:</span> 4 pts/kill</li>
                            <li><span className="text-blue-400 font-bold">Solo:</span> 3 pts/kill</li>
                            <li><span className="text-green-400 font-bold">Support:</span> 3 pts/assist</li>
                            <li><span className="text-red-400 font-bold">Death Penalty:</span> -1 to -2 pts</li>
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
                        <h3 className="text-lg font-serif font-bold text-slate-100">Match History</h3>
                        <p className="text-xs text-slate-400">Detailed results from recent games</p>
                    </div>
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Live Updates</div>
            </div>
            
            <div className="p-0">
                 {MOCK_MATCHES.map((match, idx) => (
                    <div key={match.id} className={`border-b border-slate-800 last:border-0 ${idx % 2 === 0 ? 'bg-slate-950/30' : ''}`}>
                        {/* Match Header */}
                        <div className="px-4 py-2 bg-slate-950/50 border-b border-slate-800/50 flex justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                           <span>{match.matchId}</span>
                           <span>{match.timestamp}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                           
                           {/* ORDER SIDE */}
                           <div className="border-b md:border-b-0 md:border-r border-slate-800">
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

                           {/* CHAOS SIDE */}
                           <div>
                               <div className={`px-4 py-3 flex justify-between items-center border-b border-slate-800/50 bg-gradient-to-r from-orange-900/20 to-transparent`}>
                                   <div className="flex items-center gap-2">
                                       <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                       <span className="text-orange-400 font-black uppercase tracking-widest text-sm">CHAOS</span>
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
                 
                 <div className="p-3 text-center border-t border-slate-800 bg-slate-950/50">
                     <button className="text-xs font-bold text-slate-400 hover:text-mythic-gold transition-colors flex items-center justify-center gap-1 mx-auto">
                        Load More Matches <ArrowRight size={10} />
                     </button>
                 </div>
            </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col min-h-[500px]">
            {/* Controls */}
            <div className="p-4 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-950/50">
                <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg">
                    {(['All', 'Clay-Gold', 'Plat-Diamond', 'Obsidian'] as MMRFilter[]).map(filter => (
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
                     <button 
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-mythic-gold hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-mythic-gold/20"
                     >
                        <Swords size={18} /> Record Match
                     </button>
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
                                        <span className="text-xl font-black text-mythic-gold">{player.score}</span>
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
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
                <div className="p-4 border-b border-slate-700 bg-slate-950 flex justify-between items-center">
                    <h3 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
                        <Swords size={18} className="text-mythic-gold" /> Record Match Stats
                    </h3>
                    <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
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
                        <p className="text-[10px] text-slate-500 mt-1">If player exists, stats will be added to their total.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <label className="block text-xs font-bold uppercase text-slate-500 mb-1">MMR (If New)</label>
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
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Role Played in Match</label>
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
                        onClick={handleRecordMatch}
                        disabled={!formName}
                        className="w-full py-3 bg-gradient-to-r from-mythic-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold rounded-lg uppercase tracking-wider shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                        Submit Match Result
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
