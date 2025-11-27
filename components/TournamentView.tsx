
import React, { useState } from 'react';
import { TournamentTeam, TournamentPlayer, TournamentRole, TournamentMatch } from '../types';
import { MOCK_TOURNAMENT } from '../constants';
import { Trophy, Plus, Trash2, Save, Swords, Skull, HandHelping, Crown, Eye, User, BarChart2, Calendar, Medal } from 'lucide-react';

const ROLES: TournamentRole[] = ['Solo', 'Jungle', 'Mid', 'Carry', 'Support'];

// Points Configuration
const POINTS = {
  Solo: { kill: 3, death: -1, assist: 1 },
  Jungle: { kill: 4, death: -2, assist: 2 },
  Mid: { kill: 4, death: -2, assist: 1 },
  Carry: { kill: 4, death: -2, assist: 1 },
  Support: { kill: 2, death: -1, assist: 3 },
};

const calculatePlayerScore = (role: TournamentRole, k: number, d: number, a: number) => {
  const config = POINTS[role];
  return (k * config.kill) + (d * config.death) + (a * config.assist);
};

// MMR Tiers Helpers
const getMMRTierStyle = (mmr: number) => {
    if (mmr >= 2500) {
        return {
            label: 'Obsidian',
            classes: 'text-purple-300 border-purple-500 bg-purple-900/30 shadow-[0_0_10px_rgba(168,85,247,0.3)]',
            icon: <Crown size={10} className="text-purple-300" />
        };
    } else if (mmr >= 1500) {
        return {
            label: 'Diamond',
            classes: 'text-cyan-300 border-cyan-500 bg-cyan-900/30',
            icon: <Medal size={10} className="text-cyan-300" />
        };
    } else {
        return {
            label: 'Gold',
            classes: 'text-yellow-600 border-yellow-600 bg-yellow-900/30',
            icon: <Medal size={10} className="text-yellow-600" />
        };
    }
};

export const TournamentView: React.FC = () => {
  // --- STATE FOR BRACKET ---
  const [selectedMatch, setSelectedMatch] = useState<TournamentMatch | null>(null);

  // --- STATE FOR CUSTOM TRACKER ---
  const [trackedPlayers, setTrackedPlayers] = useState<TournamentPlayer[]>([]);
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);
  
  // New Player Form State
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerRole, setNewPlayerRole] = useState<TournamentRole>('Mid');
  const [newPlayerK, setNewPlayerK] = useState(0);
  const [newPlayerD, setNewPlayerD] = useState(0);
  const [newPlayerA, setNewPlayerA] = useState(0);

  const addTrackedPlayer = () => {
      if (!newPlayerName.trim()) return;
      
      const score = calculatePlayerScore(newPlayerRole, newPlayerK, newPlayerD, newPlayerA);
      const player: TournamentPlayer = {
          id: Date.now().toString(),
          name: newPlayerName,
          role: newPlayerRole,
          mmr: 0, // MMR not needed for tracker, only bracket
          kills: newPlayerK,
          deaths: newPlayerD,
          assists: newPlayerA,
          score: score
      };

      setTrackedPlayers(prev => [...prev, player].sort((a, b) => b.score - a.score));
      
      // Reset Form
      setNewPlayerName('');
      setNewPlayerK(0);
      setNewPlayerD(0);
      setNewPlayerA(0);
      setIsAddingPlayer(false);
  };

  const removeTrackedPlayer = (id: string) => {
      setTrackedPlayers(prev => prev.filter(p => p.id !== id));
  };

  // --- RENDER HELPERS ---

  const RoleIcon = ({ role }: { role: TournamentRole }) => (
      <div title={role} className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0 ${
          role === 'Support' ? 'bg-green-600' : 
          role === 'Carry' ? 'bg-yellow-600' :
          role === 'Mid' ? 'bg-purple-600' :
          role === 'Jungle' ? 'bg-orange-600' : 'bg-blue-600'
      }`}>
          {role.charAt(0)}
      </div>
  );

  const PlayerRow = ({ player }: { player: TournamentPlayer }) => {
    const mmrStyle = getMMRTierStyle(player.mmr);

    return (
        <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded border border-slate-700 hover:border-slate-500 transition-colors">
            <RoleIcon role={player.role} />
            <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-200 text-sm truncate">{player.name || 'Unknown'}</div>
                <div className="flex items-center gap-2 mt-0.5">
                    <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${mmrStyle.classes}`}>
                        {mmrStyle.icon}
                        <span>{player.mmr} {mmrStyle.label}</span>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <div className="text-xs font-mono text-slate-300">
                    <span className="text-green-400 font-bold">{player.kills}</span>/
                    <span className="text-red-400 font-bold">{player.deaths}</span>/
                    <span className="text-yellow-400 font-bold">{player.assists}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-bold uppercase">K/D/A</div>
            </div>
        </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-80px)] overflow-hidden">
      
      {/* HEADER */}
      <div className="mb-6 flex justify-between items-end">
         <div>
            <h2 className="text-3xl font-serif font-bold text-slate-100 flex items-center gap-3">
              <Trophy className="text-mythic-gold" size={32} /> 
              {MOCK_TOURNAMENT.name}
            </h2>
            <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                <Calendar size={14} /> Season 1 Championship • Jan 2025
            </p>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-full pb-20">
         
         {/* --- LEFT: BRACKET VISUALIZATION --- */}
         <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar bg-slate-900/50 rounded-2xl border border-slate-800 p-8 relative">
             <div className="flex gap-16 min-w-max">
                 {MOCK_TOURNAMENT.rounds.map((round, rIdx) => (
                     <div key={rIdx} className="flex flex-col gap-8 w-80">
                         <h3 className="text-center font-bold text-slate-400 uppercase tracking-widest text-sm mb-4 border-b border-slate-700 pb-2">
                            {round.name}
                         </h3>
                         
                         <div className="flex flex-col justify-around h-full gap-8">
                            {round.matches.map((match) => (
                                <div 
                                    key={match.id}
                                    onClick={() => setSelectedMatch(match)}
                                    className="relative bg-slate-800 rounded-lg border border-slate-700 hover:border-mythic-gold cursor-pointer transition-all hover:bg-slate-800/80 group shadow-lg"
                                >
                                    {/* Connector Lines */}
                                    {rIdx < MOCK_TOURNAMENT.rounds.length - 1 && (
                                        <div className="absolute top-1/2 -right-8 w-8 h-px bg-slate-700 group-hover:bg-mythic-gold/50"></div>
                                    )}
                                    {rIdx > 0 && (
                                        <div className="absolute top-1/2 -left-8 w-8 h-px bg-slate-700 group-hover:bg-mythic-gold/50"></div>
                                    )}

                                    <div className="p-3">
                                        <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold mb-2">
                                            <span>MATCH {match.id.toUpperCase()}</span>
                                            <span>{match.date}</span>
                                        </div>

                                        {/* Team 1 */}
                                        <div className={`flex justify-between items-center p-2 rounded mb-1 ${match.winnerId === match.team1.id ? 'bg-mythic-gold/10 border border-mythic-gold/30' : 'bg-slate-900/50'}`}>
                                            <div className="flex items-center gap-2">
                                                {match.winnerId === match.team1.id && <Crown size={12} className="text-mythic-gold" />}
                                                <span className={`font-bold text-sm ${match.winnerId === match.team1.id ? 'text-mythic-gold' : 'text-slate-300'}`}>
                                                    {match.team1.name}
                                                </span>
                                            </div>
                                            <span className="font-mono font-bold text-slate-400">{match.team1.totalScore > 0 ? match.team1.totalScore : '-'}</span>
                                        </div>

                                        {/* Team 2 */}
                                        <div className={`flex justify-between items-center p-2 rounded ${match.winnerId === match.team2.id ? 'bg-mythic-gold/10 border border-mythic-gold/30' : 'bg-slate-900/50'}`}>
                                            <div className="flex items-center gap-2">
                                                {match.winnerId === match.team2.id && <Crown size={12} className="text-mythic-gold" />}
                                                <span className={`font-bold text-sm ${match.winnerId === match.team2.id ? 'text-mythic-gold' : 'text-slate-300'}`}>
                                                    {match.team2.name}
                                                </span>
                                            </div>
                                            <span className="font-mono font-bold text-slate-400">{match.team2.totalScore > 0 ? match.team2.totalScore : '-'}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-[9px] px-2 py-0.5 rounded-full text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        View Stats & MMR
                                    </div>
                                </div>
                            ))}
                         </div>
                     </div>
                 ))}
             </div>
         </div>

         {/* --- RIGHT: POINT TRACKER SIDEBAR --- */}
         <div className="w-full lg:w-80 flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shrink-0">
             <div className="p-4 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
                 <h3 className="font-serif font-bold text-slate-200 flex items-center gap-2">
                    <BarChart2 className="text-mythic-gold" size={18} /> Player Tracker
                 </h3>
                 <button 
                    onClick={() => setIsAddingPlayer(true)}
                    className="p-1.5 bg-mythic-gold rounded text-slate-900 hover:bg-yellow-400 transition-colors shadow-lg"
                    title="Add Player"
                 >
                    <Plus size={16} />
                 </button>
             </div>

             <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {isAddingPlayer ? (
                    <div className="bg-slate-800 rounded-lg p-3 animate-in fade-in border border-slate-700">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold text-sm text-mythic-gold">Track New Player</h4>
                            <button onClick={() => setIsAddingPlayer(false)} className="text-slate-500 hover:text-red-400"><Trash2 size={16}/></button>
                        </div>
                        
                        {/* Name Input */}
                        <input 
                            type="text" 
                            placeholder="Player Name" 
                            value={newPlayerName}
                            onChange={(e) => setNewPlayerName(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white mb-3 focus:border-mythic-gold outline-none"
                            autoFocus
                        />
                        
                        {/* Role Select */}
                        <div className="flex justify-between mb-3 gap-1">
                            {ROLES.map(role => (
                                <button
                                    key={role}
                                    onClick={() => setNewPlayerRole(role)}
                                    className={`flex-1 py-1 rounded text-[10px] font-bold uppercase transition-all ${
                                        newPlayerRole === role 
                                        ? 'bg-slate-200 text-slate-900 shadow' 
                                        : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                    }`}
                                >
                                    {role.substring(0,1)}
                                </button>
                            ))}
                        </div>

                        {/* KDA Inputs */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="flex flex-col">
                                <span className="text-[9px] text-green-500 font-bold uppercase mb-1">Kills</span>
                                <input type="number" value={newPlayerK} onChange={(e) => setNewPlayerK(parseInt(e.target.value)||0)} className="bg-slate-900 border border-slate-700 rounded p-1 text-center text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] text-red-500 font-bold uppercase mb-1">Deaths</span>
                                <input type="number" value={newPlayerD} onChange={(e) => setNewPlayerD(parseInt(e.target.value)||0)} className="bg-slate-900 border border-slate-700 rounded p-1 text-center text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] text-yellow-500 font-bold uppercase mb-1">Assists</span>
                                <input type="number" value={newPlayerA} onChange={(e) => setNewPlayerA(parseInt(e.target.value)||0)} className="bg-slate-900 border border-slate-700 rounded p-1 text-center text-white" />
                            </div>
                        </div>

                        <button onClick={addTrackedPlayer} disabled={!newPlayerName} className="w-full py-2 bg-mythic-gold hover:bg-yellow-400 text-slate-900 rounded text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50">Add to List</button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {trackedPlayers.length === 0 && (
                            <div className="text-center text-slate-500 py-10 flex flex-col items-center gap-2">
                                <User size={32} className="opacity-20" />
                                <p className="text-xs italic max-w-[150px]">Add players to track their fantasy points based on KDA & Role.</p>
                            </div>
                        )}
                        {trackedPlayers.map((player) => (
                            <div key={player.id} className="bg-slate-800 rounded-lg border border-slate-700 p-2 hover:border-slate-500 transition-all flex items-center gap-3 group">
                                <RoleIcon role={player.role} />
                                <div className="flex-1 min-w-0">
                                    <div className="font-bold text-slate-200 text-sm truncate">{player.name}</div>
                                    <div className="text-[10px] text-slate-400 font-mono">
                                        <span className="text-green-400">{player.kills}</span>/
                                        <span className="text-red-400">{player.deaths}</span>/
                                        <span className="text-yellow-400">{player.assists}</span>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <span className="text-lg font-bold text-mythic-gold leading-none">{player.score}</span>
                                    <span className="text-[8px] font-bold text-slate-500 uppercase">PTS</span>
                                </div>
                                <button 
                                    onClick={() => removeTrackedPlayer(player.id)}
                                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-900/50 text-slate-500 hover:text-red-400 rounded transition-all"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
             </div>
         </div>
      </div>

      {/* --- MATCH DETAIL MODAL --- */}
      {selectedMatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative flex flex-col">
                {/* Modal Header */}
                <div className="p-4 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
                    <div className="text-center w-full">
                        <h3 className="text-lg font-serif font-bold text-mythic-gold uppercase tracking-widest">Match Details</h3>
                        <p className="text-xs text-slate-500">{selectedMatch.date} • {selectedMatch.id.toUpperCase()}</p>
                    </div>
                    <button onClick={() => setSelectedMatch(null)} className="absolute right-4 top-4 text-slate-500 hover:text-white"><Trash2 size={24} className="rotate-45" /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Team 1 Roster */}
                        <div className={`rounded-xl border p-4 ${selectedMatch.winnerId === selectedMatch.team1.id ? 'border-mythic-gold bg-mythic-gold/5' : 'border-slate-700 bg-slate-800'}`}>
                            <div className="flex justify-between items-center mb-4 border-b border-slate-700/50 pb-2">
                                <h4 className="text-xl font-bold text-white">{selectedMatch.team1.name}</h4>
                                {selectedMatch.winnerId === selectedMatch.team1.id && <Crown className="text-mythic-gold" />}
                            </div>
                            <div className="space-y-2">
                                {selectedMatch.team1.players.length > 0 ? selectedMatch.team1.players.map((p, i) => (
                                    <PlayerRow key={i} player={p} />
                                )) : <div className="text-slate-500 italic text-sm text-center py-4">TBD</div>}
                            </div>
                            <div className="mt-4 text-center">
                                <span className="text-2xl font-black text-slate-200">{selectedMatch.team1.totalScore}</span>
                                <span className="text-xs uppercase font-bold text-slate-500 ml-2">Total Score</span>
                            </div>
                        </div>

                        {/* Team 2 Roster */}
                        <div className={`rounded-xl border p-4 ${selectedMatch.winnerId === selectedMatch.team2.id ? 'border-mythic-gold bg-mythic-gold/5' : 'border-slate-700 bg-slate-800'}`}>
                            <div className="flex justify-between items-center mb-4 border-b border-slate-700/50 pb-2">
                                <h4 className="text-xl font-bold text-white">{selectedMatch.team2.name}</h4>
                                {selectedMatch.winnerId === selectedMatch.team2.id && <Crown className="text-mythic-gold" />}
                            </div>
                            <div className="space-y-2">
                                {selectedMatch.team2.players.length > 0 ? selectedMatch.team2.players.map((p, i) => (
                                    <PlayerRow key={i} player={p} />
                                )) : <div className="text-slate-500 italic text-sm text-center py-4">TBD</div>}
                            </div>
                            <div className="mt-4 text-center">
                                <span className="text-2xl font-black text-slate-200">{selectedMatch.team2.totalScore}</span>
                                <span className="text-xs uppercase font-bold text-slate-500 ml-2">Total Score</span>
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
