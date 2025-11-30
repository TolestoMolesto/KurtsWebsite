
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TournamentPlayer, TournamentRole } from '../types';
import { Trophy, Plus, Trash2, Crown, Medal, Swords, ScrollText, Gem, Flame, Target, Skull, UserPlus, X, Calendar, MapPin, MonitorPlay, Timer, History, ArrowRight, Users, User, ChevronRight, Lock, Loader2, ClipboardList, CheckCircle2, AlertTriangle, Settings, Unlock, ExternalLink, MessageCircle, Save } from 'lucide-react';
import { db, auth } from '../services/firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, query, orderBy, limit, setDoc, getDoc, writeBatch, increment, serverTimestamp, deleteDoc } from 'firebase/firestore';
import * as FirebaseAuth from 'firebase/auth';

const ROLES: TournamentRole[] = ['Solo', 'Jungle', 'Mid', 'Carry', 'Support'];
const WIN_BONUS = 5;

// Points Configuration
const POINTS = {
  Solo: { kill: 3, death: -1, assist: 1 },
  Jungle: { kill: 4, death: -2, assist: 2 },
  Mid: { kill: 4, death: -2, assist: 1 },
  Carry: { kill: 4, death: -2, assist: 1 },
  Support: { kill: 5, death: -1, assist: 3 }
};

export const TournamentView: React.FC = () => {
  const [players, setPlayers] = useState<TournamentPlayer[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState<FirebaseAuth.User | null>(null);
  const [activeTab, setActiveTab] = useState<'register' | 'leaderboard' | 'matches' | 'admin'>('register');
  
  // Form States
  const [regForm, setRegForm] = useState({ 
    ign: '', 
    discord: '', 
    tracker: '', 
    role: 'Solo' as TournamentRole 
  });
  const [isRegLoading, setIsRegLoading] = useState(false);
  
  // Match Recorder State
  const [matchForm, setMatchForm] = useState({
      team1Name: '',
      team2Name: '',
      team1Score: 0,
      team2Score: 0,
      team1Players: ['', '', '', '', ''],
      team2Players: ['', '', '', '', ''],
      winner: 'Team 1'
  });
  const [isSubmittingMatch, setIsSubmittingMatch] = useState(false);
  const [matchHistory, setMatchHistory] = useState<any[]>([]);

  // -- Initial Data Fetch --
  useEffect(() => {
    const unsubAuth = FirebaseAuth.onAuthStateChanged(auth, async (user) => {
        setCurrentUser(user);
        if (user) {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            setIsAdmin(userDoc.exists() && userDoc.data().isAdmin === true);
            
            // Auto-fill registration if profile exists
            if (userDoc.exists()) {
                const data = userDoc.data();
                setRegForm(prev => ({
                    ...prev,
                    ign: data.displayName || '',
                    discord: data.discordHandle || '',
                    tracker: data.trackerLink || ''
                }));
            }
        } else {
            setIsAdmin(false);
        }
    });

    const unsubPlayers = onSnapshot(collection(db, 'tournament_players'), (snapshot) => {
        const p = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as TournamentPlayer));
        // Sort by score desc
        setPlayers(p.sort((a, b) => b.score - a.score));
    });

    const matchesQuery = query(collection(db, 'tournament_matches'), orderBy('date', 'desc'), limit(20));
    const unsubMatches = onSnapshot(matchesQuery, (snapshot) => {
        setMatchHistory(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return () => {
        unsubAuth();
        unsubPlayers();
        unsubMatches();
    };
  }, []);

  // -- Actions --

  const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!currentUser) return alert("You must be logged in.");
      setIsRegLoading(true);

      try {
          const playerRef = doc(db, 'tournament_players', currentUser.uid);
          await setDoc(playerRef, {
              name: regForm.ign,
              discord: regForm.discord,
              trackerLink: regForm.tracker,
              primaryRole: regForm.role,
              score: 0,
              kills: 0,
              deaths: 0,
              assists: 0,
              matchesPlayed: 0,
              wins: 0,
              offRoles: [],
              updatedAt: serverTimestamp()
          }, { merge: true });
          alert("Registration Successful! You are checked in.");
      } catch (err) {
          console.error(err);
          alert("Error registering.");
      } finally {
          setIsRegLoading(false);
      }
  };

  const handleRecordMatch = async () => {
      if (!isAdmin) return;
      setIsSubmittingMatch(true);

      try {
        const winningTeam = matchForm.winner === 'Team 1' ? matchForm.team1Players : matchForm.team2Players;
        const losingTeam = matchForm.winner === 'Team 1' ? matchForm.team2Players : matchForm.team1Players;

        const batch = writeBatch(db);

        // Update Winners
        for (const ign of winningTeam) {
            if (!ign) continue;
            const p = players.find(pl => pl.name.toLowerCase() === ign.toLowerCase());
            if (p) {
                const ref = doc(db, 'tournament_players', p.id);
                batch.update(ref, {
                    wins: increment(1),
                    matchesPlayed: increment(1),
                    score: increment(WIN_BONUS + 2) // Win bonus + Participation
                });
            }
        }

        // Update Losers
        for (const ign of losingTeam) {
            if (!ign) continue;
            const p = players.find(pl => pl.name.toLowerCase() === ign.toLowerCase());
            if (p) {
                const ref = doc(db, 'tournament_players', p.id);
                batch.update(ref, {
                    matchesPlayed: increment(1),
                    score: increment(1) // Participation
                });
            }
        }

        // Save Match Record
        const matchRef = doc(collection(db, 'tournament_matches'));
        batch.set(matchRef, {
            date: new Date().toISOString(),
            team1: { name: matchForm.team1Name, players: matchForm.team1Players },
            team2: { name: matchForm.team2Name, players: matchForm.team2Players },
            winner: matchForm.winner,
            status: 'completed'
        });

        await batch.commit();
        alert("Match Recorded & Scores Updated!");
        // Reset form
        setMatchForm({
            team1Name: '', team2Name: '', team1Score: 0, team2Score: 0,
            team1Players: ['','','','',''], team2Players: ['','','','',''], winner: 'Team 1'
        });

      } catch (err) {
          console.error(err);
          alert("Error recording match.");
      } finally {
          setIsSubmittingMatch(false);
      }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="w-full lg:w-64 shrink-0 space-y-2">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center mb-4">
                <Trophy className="mx-auto text-mythic-gold mb-2" size={40} />
                <h2 className="font-serif font-bold text-xl text-slate-100">Weekly Cup</h2>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Open Bracket</p>
            </div>
            
            <nav className="space-y-1">
                <button 
                    onClick={() => setActiveTab('register')}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${activeTab === 'register' ? 'bg-mythic-gold text-slate-900 font-bold' : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                >
                    <span className="flex items-center gap-3"><ClipboardList size={18}/> Check-In</span>
                    {activeTab === 'register' && <ChevronRight size={16} />}
                </button>
                <button 
                    onClick={() => setActiveTab('leaderboard')}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${activeTab === 'leaderboard' ? 'bg-mythic-gold text-slate-900 font-bold' : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                >
                    <span className="flex items-center gap-3"><Gem size={18}/> Leaderboard</span>
                    {activeTab === 'leaderboard' && <ChevronRight size={16} />}
                </button>
                <button 
                    onClick={() => setActiveTab('matches')}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${activeTab === 'matches' ? 'bg-mythic-gold text-slate-900 font-bold' : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                >
                    <span className="flex items-center gap-3"><History size={18}/> Match History</span>
                    {activeTab === 'matches' && <ChevronRight size={16} />}
                </button>
                {isAdmin && (
                    <button 
                        onClick={() => setActiveTab('admin')}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${activeTab === 'admin' ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-900/20' : 'bg-red-900/20 text-red-400 hover:bg-red-900/40'}`}
                    >
                        <span className="flex items-center gap-3"><Settings size={18}/> Admin Panel</span>
                        {activeTab === 'admin' && <Lock size={14} />}
                    </button>
                )}
            </nav>

            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 mt-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Tournament Status</h4>
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Check-Ins Open
                </div>
                <p className="text-[10px] text-slate-500 mt-2">
                    Next Draft: <span className="text-slate-300">Today, 8:00 PM EST</span>
                </p>
            </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 min-h-[600px]">
            
            {/* REGISTER TAB */}
            {activeTab === 'register' && (
                <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 bg-slate-950/50">
                            <h2 className="text-2xl font-serif font-bold text-slate-100 mb-1">Player Check-In</h2>
                            <p className="text-slate-400 text-sm">Register your details to participate in the auto-draft.</p>
                        </div>
                        <div className="p-8">
                            <form onSubmit={handleRegister} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-500">In-Game Name</label>
                                        <input 
                                            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-mythic-gold outline-none"
                                            placeholder="Smite2Player"
                                            value={regForm.ign}
                                            onChange={e => setRegForm({...regForm, ign: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-500">Discord Username</label>
                                        <input 
                                            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-mythic-gold outline-none"
                                            placeholder="username#1234"
                                            value={regForm.discord}
                                            onChange={e => setRegForm({...regForm, discord: e.target.value})}
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-500">Tracker.gg Link</label>
                                    <input 
                                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-mythic-gold outline-none"
                                        placeholder="https://tracker.gg/smite2/profile/..."
                                        value={regForm.tracker}
                                        onChange={e => setRegForm({...regForm, tracker: e.target.value})}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-500">Primary Role</label>
                                    <div className="grid grid-cols-5 gap-2">
                                        {ROLES.map(role => (
                                            <button
                                                key={role}
                                                type="button"
                                                onClick={() => setRegForm({...regForm, role})}
                                                className={`p-2 rounded border text-[10px] font-bold uppercase transition-all ${regForm.role === role ? 'bg-mythic-gold text-slate-900 border-mythic-gold' : 'bg-slate-950 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                            >
                                                {role}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isRegLoading || !currentUser}
                                    className="w-full py-4 bg-gradient-to-r from-mythic-gold to-yellow-600 text-slate-900 font-black uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                >
                                    {isRegLoading ? <Loader2 className="animate-spin mx-auto"/> : (currentUser ? "Confirm Check-In" : "Log In to Check-In")}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* LEADERBOARD TAB */}
            {activeTab === 'leaderboard' && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl animate-in fade-in">
                     <div className="p-4 border-b border-slate-800 bg-slate-950/50 flex justify-between items-center">
                        <h2 className="font-serif font-bold text-xl text-slate-100">Player Standings</h2>
                        <span className="text-xs text-slate-500">{players.length} Players Checked In</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-400">
                            <thead className="bg-slate-950 text-xs uppercase font-bold text-slate-500">
                                <tr>
                                    <th className="px-6 py-3">Rank</th>
                                    <th className="px-6 py-3">Player</th>
                                    <th className="px-6 py-3">Role</th>
                                    <th className="px-6 py-3 text-center">Score</th>
                                    <th className="px-6 py-3 text-center">W / L</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {players.map((player, idx) => (
                                    <tr key={player.id} className="hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 font-mono text-slate-500">#{idx + 1}</td>
                                        <td className="px-6 py-4 font-bold text-slate-200 flex items-center gap-2">
                                            {idx === 0 && <Crown size={14} className="text-yellow-500" />}
                                            {player.name}
                                        </td>
                                        <td className="px-6 py-4 text-xs uppercase">{player.primaryRole}</td>
                                        <td className="px-6 py-4 text-center font-bold text-mythic-gold">{player.score}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-green-400">{player.wins || 0}</span> / <span className="text-red-400">{(player.matchesPlayed || 0) - (player.wins || 0)}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            
            {/* MATCHES TAB */}
            {activeTab === 'matches' && (
                <div className="space-y-4 animate-in fade-in">
                    {matchHistory.length === 0 && <div className="text-center text-slate-500 py-10">No matches recorded yet.</div>}
                    {matchHistory.map((match) => (
                        <div key={match.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`font-bold text-lg ${match.winner === 'Team 1' ? 'text-mythic-gold' : 'text-slate-400'}`}>
                                        {match.team1.name} {match.winner === 'Team 1' && <Crown size={14} className="inline mb-1"/>}
                                    </span>
                                    <span className="text-slate-600 font-bold text-xs">VS</span>
                                    <span className={`font-bold text-lg ${match.winner === 'Team 2' ? 'text-mythic-gold' : 'text-slate-400'}`}>
                                        {match.team2.name} {match.winner === 'Team 2' && <Crown size={14} className="inline mb-1"/>}
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <div className="flex flex-col gap-1">
                                        {match.team1.players.map((p:string, i:number) => <span key={i}>{p}</span>)}
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        {match.team2.players.map((p:string, i:number) => <span key={i}>{p}</span>)}
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-slate-600 font-mono whitespace-nowrap">
                                {new Date(match.date).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ADMIN TAB */}
            {activeTab === 'admin' && isAdmin && (
                <div className="space-y-8 animate-in fade-in">
                    
                    {/* --- MANUAL MATCH RECORDING --- */}
                    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                            <h3 className="font-bold text-slate-100">Record Match Results</h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                {/* Team 1 Input */}
                                <div className="space-y-3">
                                    <input 
                                        placeholder="Team 1 Name"
                                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-blue-400 font-bold"
                                        value={matchForm.team1Name}
                                        onChange={e => setMatchForm({...matchForm, team1Name: e.target.value})}
                                    />
                                    {matchForm.team1Players.map((p, i) => (
                                        <div key={i} className="relative">
                                            <input 
                                                placeholder={`Player ${i+1}`}
                                                className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm"
                                                value={p}
                                                onChange={e => {
                                                    const newP = [...matchForm.team1Players];
                                                    newP[i] = e.target.value;
                                                    setMatchForm({...matchForm, team1Players: newP});
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Team 2 Input */}
                                <div className="space-y-3">
                                    <input 
                                        placeholder="Team 2 Name"
                                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-red-400 font-bold"
                                        value={matchForm.team2Name}
                                        onChange={e => setMatchForm({...matchForm, team2Name: e.target.value})}
                                    />
                                    {matchForm.team2Players.map((p, i) => (
                                        <div key={i} className="relative">
                                            <input 
                                                placeholder={`Player ${i+1}`}
                                                className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm"
                                                value={p}
                                                onChange={e => {
                                                    const newP = [...matchForm.team2Players];
                                                    newP[i] = e.target.value;
                                                    setMatchForm({...matchForm, team2Players: newP});
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-4">
                                    <label className="text-sm font-bold text-slate-400">Winner:</label>
                                    <select 
                                        className="bg-slate-800 border border-slate-600 rounded p-2 text-white"
                                        value={matchForm.winner}
                                        onChange={e => setMatchForm({...matchForm, winner: e.target.value})}
                                    >
                                        <option value="Team 1">Team 1 (Blue)</option>
                                        <option value="Team 2">Team 2 (Red)</option>
                                    </select>
                                </div>
                                <button 
                                    onClick={handleRecordMatch}
                                    disabled={isSubmittingMatch}
                                    className="px-8 py-3 bg-mythic-gold hover:bg-yellow-500 text-slate-900 font-bold rounded shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmittingMatch ? <Loader2 className="animate-spin"/> : <Save size={18}/>}
                                    Submit Results
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
