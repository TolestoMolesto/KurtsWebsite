import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { TournamentPlayer, TournamentRole } from '../types';
import { 
  Trophy, Crown, Gem, History, ChevronRight, Loader2, ClipboardList, 
  CheckCircle2, Shield, AlertCircle, ExternalLink, Swords, Users, 
  Calendar, Clock, Twitch, LogIn, User, Lock, Mail, X,
  Target, Crosshair, Heart, Sparkles,
  ToggleLeft, ToggleRight, UserCheck, UserX, Zap, Gift, Medal,
  BookOpen, Timer, Star, Award, RefreshCw
} from 'lucide-react';
import { db, auth } from '../services/firebase';
import { 
  collection, onSnapshot, doc, query, orderBy, limit, setDoc, 
  getDoc, writeBatch, increment, serverTimestamp, updateDoc
} from 'firebase/firestore';
import * as FirebaseAuth from 'firebase/auth';

const ROLES: TournamentRole[] = ['Solo', 'Jungle', 'Mid', 'Carry', 'Support'];
const ROLE_ICONS: Record<TournamentRole, React.ReactNode> = {
  Solo: <Shield size={14} />,
  Jungle: <Target size={14} />,
  Mid: <Sparkles size={14} />,
  Carry: <Crosshair size={14} />,
  Support: <Heart size={14} />
};
const WIN_BONUS = 5;

// ═══════════════════════════════════════════════════════════════════════════
// REWARDS CONFIGURATION - Easy to update each month!
// ═══════════════════════════════════════════════════════════════════════════
const MONTHLY_REWARDS = {
  first: {
    title: "1st Place",
    icon: <Crown className="text-yellow-400" size={32} />,
    prizes: ["$50 Cash Prize", "Exclusive Discord Role", "Featured on Stream"],
    color: "from-yellow-500/20 to-amber-600/20",
    border: "border-yellow-500/50",
    glow: "shadow-yellow-500/20"
  },
  second: {
    title: "2nd Place", 
    icon: <Medal className="text-slate-300" size={28} />,
    prizes: ["$25 Cash Prize", "Discord Role", "Stream Shoutout"],
    color: "from-slate-400/20 to-slate-500/20",
    border: "border-slate-400/50",
    glow: "shadow-slate-400/20"
  },
  third: {
    title: "3rd Place",
    icon: <Award className="text-amber-600" size={28} />,
    prizes: ["$10 Cash Prize", "Discord Role"],
    color: "from-amber-700/20 to-orange-600/20",
    border: "border-amber-600/50",
    glow: "shadow-amber-600/20"
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// REWARDS DISPLAY COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
const RewardsSection: React.FC = () => (
  <div className="mb-12">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mythic-gold/10 border border-mythic-gold/30 text-mythic-gold text-xs font-bold uppercase tracking-widest mb-4">
        <Gift size={14} /> Monthly Prizes
      </div>
      <h2 className="text-3xl font-serif font-bold text-white">Top 3 Rewards</h2>
      <p className="text-slate-400 mt-2">Compete for glory and prizes every month</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {/* 1st Place - Larger */}
      <div className={`md:col-span-1 md:-mt-4 bg-gradient-to-br ${MONTHLY_REWARDS.first.color} border-2 ${MONTHLY_REWARDS.first.border} rounded-2xl p-6 text-center shadow-lg ${MONTHLY_REWARDS.first.glow} transform hover:scale-105 transition-transform`}>
        <div className="mb-4">{MONTHLY_REWARDS.first.icon}</div>
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">{MONTHLY_REWARDS.first.title}</h3>
        <ul className="space-y-2">
          {MONTHLY_REWARDS.first.prizes.map((prize, i) => (
            <li key={i} className="flex items-center justify-center gap-2 text-slate-200">
              <Star size={12} className="text-yellow-400" /> {prize}
            </li>
          ))}
        </ul>
      </div>
      
      {/* 2nd Place */}
      <div className={`bg-gradient-to-br ${MONTHLY_REWARDS.second.color} border ${MONTHLY_REWARDS.second.border} rounded-xl p-5 text-center hover:scale-105 transition-transform`}>
        <div className="mb-3">{MONTHLY_REWARDS.second.icon}</div>
        <h3 className="text-xl font-bold text-slate-300 mb-3">{MONTHLY_REWARDS.second.title}</h3>
        <ul className="space-y-2">
          {MONTHLY_REWARDS.second.prizes.map((prize, i) => (
            <li key={i} className="flex items-center justify-center gap-2 text-slate-300 text-sm">
              <Star size={10} className="text-slate-400" /> {prize}
            </li>
          ))}
        </ul>
      </div>
      
      {/* 3rd Place */}
      <div className={`bg-gradient-to-br ${MONTHLY_REWARDS.third.color} border ${MONTHLY_REWARDS.third.border} rounded-xl p-5 text-center hover:scale-105 transition-transform`}>
        <div className="mb-3">{MONTHLY_REWARDS.third.icon}</div>
        <h3 className="text-xl font-bold text-amber-500 mb-3">{MONTHLY_REWARDS.third.title}</h3>
        <ul className="space-y-2">
          {MONTHLY_REWARDS.third.prizes.map((prize, i) => (
            <li key={i} className="flex items-center justify-center gap-2 text-slate-300 text-sm">
              <Star size={10} className="text-amber-600" /> {prize}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// COUNTDOWN TIMER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
const CountdownTimer: React.FC<{ targetDate: Date; label: string }> = ({ targetDate, label }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 text-center">
      <div className="flex items-center justify-center gap-2 text-mythic-gold mb-3">
        <Timer size={18} />
        <span className="text-sm font-bold uppercase tracking-wider">{label}</span>
      </div>
      <div className="flex justify-center gap-3">
        {[
          { val: timeLeft.days, label: 'Days' },
          { val: timeLeft.hours, label: 'Hrs' },
          { val: timeLeft.minutes, label: 'Min' },
          { val: timeLeft.seconds, label: 'Sec' }
        ].map((t, i) => (
          <div key={i} className="bg-slate-950 rounded-lg px-3 py-2 min-w-[50px]">
            <div className="text-2xl font-bold text-white font-mono">{String(t.val).padStart(2, '0')}</div>
            <div className="text-[9px] text-slate-500 uppercase">{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// RULES COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
const RulesSection: React.FC = () => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden animate-in fade-in">
    <div className="p-4 border-b border-slate-800 bg-slate-950/50">
      <h2 className="font-serif font-bold text-xl text-white flex items-center gap-2">
        <BookOpen size={20} className="text-mythic-gold" /> Tournament Rules
      </h2>
    </div>
    <div className="p-6 space-y-6">
      <div>
        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" /> Eligibility
        </h3>
        <ul className="text-slate-400 text-sm space-y-1 ml-6 list-disc">
          <li>Must be registered on the website with valid tracker link</li>
          <li>Must check in before tournament start time</li>
          <li>Must be available for all scheduled matches</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
          <Swords size={16} className="text-blue-400" /> Match Format
        </h3>
        <ul className="text-slate-400 text-sm space-y-1 ml-6 list-disc">
          <li>5v5 Conquest matches</li>
          <li>Teams drafted based on MMR and role preferences</li>
          <li>Best of 1 for group stage, Best of 3 for finals</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
          <Trophy size={16} className="text-mythic-gold" /> Scoring
        </h3>
        <ul className="text-slate-400 text-sm space-y-1 ml-6 list-disc">
          <li><span className="text-green-400 font-bold">+{WIN_BONUS + 2} pts</span> for a win</li>
          <li><span className="text-slate-300 font-bold">+1 pt</span> for participation (loss)</li>
          <li>Points accumulate throughout the month</li>
          <li>Top 3 at month end win prizes!</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
          <AlertCircle size={16} className="text-red-400" /> Code of Conduct
        </h3>
        <ul className="text-slate-400 text-sm space-y-1 ml-6 list-disc">
          <li>No toxicity, harassment, or hate speech</li>
          <li>Respect all players and admins</li>
          <li>No smurfing or account sharing</li>
          <li>Violations may result in disqualification</li>
        </ul>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// HOW TO JOIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
const HowToJoinSection: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => (
  <div className="bg-gradient-to-br from-mythic-gold/10 to-yellow-600/5 border border-mythic-gold/30 rounded-xl p-6">
    <h3 className="font-serif font-bold text-xl text-white mb-4 flex items-center gap-2">
      <Zap className="text-mythic-gold" /> How to Join
    </h3>
    <div className="space-y-4">
      {[
        { step: 1, title: "Create Account", desc: "Sign up with your email" },
        { step: 2, title: "Register", desc: "Add your IGN, Discord, and tracker link" },
        { step: 3, title: "Check In", desc: "Check in when it opens before tournament" },
        { step: 4, title: "Get Drafted", desc: "Teams are balanced by MMR & roles" },
        { step: 5, title: "Play & Win!", desc: "Compete and climb the leaderboard" }
      ].map((item) => (
        <div key={item.step} className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-mythic-gold text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">
            {item.step}
          </div>
          <div>
            <div className="font-bold text-white text-sm">{item.title}</div>
            <div className="text-slate-400 text-xs">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
    <button 
      onClick={onRegisterClick}
      className="w-full mt-6 py-3 bg-mythic-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
    >
      Get Started →
    </button>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// PAST CHAMPIONS COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
const PastChampions: React.FC<{ champions: Array<{ month: string; name: string; wins: number }> }> = ({ champions }) => (
  <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6">
    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
      <Crown className="text-yellow-400" size={18} /> Hall of Champions
    </h3>
    {champions.length === 0 ? (
      <p className="text-slate-500 text-sm text-center py-4">First tournament coming soon!</p>
    ) : (
      <div className="space-y-3">
        {champions.map((champ, i) => (
          <div key={i} className="flex items-center justify-between bg-slate-950/50 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <Crown className="text-yellow-400" size={16} />
              <div>
                <div className="font-bold text-white text-sm">{champ.name}</div>
                <div className="text-slate-500 text-xs">{champ.month}</div>
              </div>
            </div>
            <div className="text-green-400 text-sm font-bold">{champ.wins}W</div>
          </div>
        ))}
      </div>
    )}
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// SMITE 2 RANK SYSTEM
// ═══════════════════════════════════════════════════════════════════════════
const RANKS = [
  { name: 'Amber', minSR: 0, color: 'from-amber-600 to-yellow-500', textColor: 'text-amber-400', bgColor: 'bg-amber-500/20', borderColor: 'border-amber-500/30' },
  { name: 'Bronze', minSR: 800, color: 'from-amber-700 to-amber-500', textColor: 'text-amber-600', bgColor: 'bg-amber-600/20', borderColor: 'border-amber-600/30' },
  { name: 'Silver', minSR: 1400, color: 'from-slate-400 to-slate-300', textColor: 'text-slate-300', bgColor: 'bg-slate-400/20', borderColor: 'border-slate-400/30' },
  { name: 'Gold', minSR: 2000, color: 'from-yellow-500 to-yellow-300', textColor: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/30' },
  { name: 'Platinum', minSR: 2600, color: 'from-cyan-400 to-teal-300', textColor: 'text-cyan-400', bgColor: 'bg-cyan-500/20', borderColor: 'border-cyan-500/30' },
  { name: 'Diamond', minSR: 3200, color: 'from-blue-500 to-purple-400', textColor: 'text-blue-400', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/30' },
  { name: 'Obsidian', minSR: 3800, color: 'from-purple-600 to-pink-500', textColor: 'text-purple-400', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-500/30' },
  { name: 'Master', minSR: 4400, color: 'from-orange-500 to-red-400', textColor: 'text-orange-400', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500/30' },
  { name: 'Demigod', minSR: 5000, color: 'from-pink-500 to-rose-400', textColor: 'text-pink-400', bgColor: 'bg-pink-500/20', borderColor: 'border-pink-500/30' },
  { name: 'Deity', minSR: 5500, color: 'from-fuchsia-500 via-cyan-400 to-pink-500', textColor: 'text-fuchsia-400', bgColor: 'bg-fuchsia-500/20', borderColor: 'border-fuchsia-500/30' },
];

const getRank = (sr: number) => {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (sr >= RANKS[i].minSR) return RANKS[i];
  }
  return RANKS[0];
};

const getRankTier = (sr: number): 'low' | 'mid' | 'high' => {
  if (sr < 2000) return 'low';
  if (sr < 3800) return 'mid';
  return 'high';
};

// Rank Badge Component
const RankBadge: React.FC<{ mmr: number; showSR?: boolean; size?: 'sm' | 'md' }> = ({ mmr, showSR = true, size = 'md' }) => {
  const rank = getRank(mmr);
  const sizeClasses = size === 'sm' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-1 text-xs';
  return (
    <div className={`inline-flex items-center gap-1 rounded ${rank.bgColor} border ${rank.borderColor} ${sizeClasses}`}>
      <div className={`rounded-full bg-gradient-to-br ${rank.color} ${size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'}`} />
      <span className={`font-bold ${rank.textColor}`}>{rank.name}</span>
      {showSR && <span className="text-slate-500 ml-0.5">{mmr}</span>}
    </div>
  );
};

// Player Autocomplete Component
const PlayerAutocomplete: React.FC<{
  value: string;
  onChange: (val: string) => void;
  players: TournamentPlayer[];
  placeholder?: string;
}> = ({ value, onChange, players, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(value);
  useEffect(() => { setSearch(value); }, [value]);
  const filtered = useMemo(() => !search ? players : players.filter(p => p.name.toLowerCase().includes(search.toLowerCase())), [search, players]);

  return (
    <div className="relative">
      <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setIsOpen(true); }} onFocus={() => setIsOpen(true)} onBlur={() => setTimeout(() => setIsOpen(false), 150)} placeholder={placeholder} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-slate-200 text-sm focus:border-mythic-gold focus:outline-none" />
      {isOpen && filtered.length > 0 && (
        <div className="absolute z-20 w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg shadow-xl max-h-40 overflow-y-auto">
          {filtered.slice(0, 8).map(p => (
            <button key={p.id} type="button" onMouseDown={() => { onChange(p.name); setSearch(p.name); setIsOpen(false); }} className="w-full text-left px-3 py-2 hover:bg-slate-800 text-sm text-slate-200 flex items-center justify-between">
              <span>{p.name}</span>
              <span className={`text-xs ${getRank(p.mmr || 0).textColor}`}>{getRank(p.mmr || 0).name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN TOURNAMENT VIEW COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
export const TournamentView: React.FC = () => {
  const [players, setPlayers] = useState<TournamentPlayer[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState<FirebaseAuth.User | null>(null);
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'matches' | 'my_entry' | 'rules' | 'admin'>('leaderboard');
  const [leaderboardFilter, setLeaderboardFilter] = useState<'all' | 'high' | 'mid' | 'low'>('all');
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);

  // Tournament Settings - Updated for Monthly
  const [tournamentSettings, setTournamentSettings] = useState<{ 
    checkInOpen: boolean; 
    tournamentName: string;
    nextTournamentDate: string;
    currentMonth: string;
  }>({ 
    checkInOpen: false, 
    tournamentName: 'Monthly Cup',
    nextTournamentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Default 7 days
    currentMonth: new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
  });

  // Past Champions (would come from Firestore)
  const [pastChampions, setPastChampions] = useState<Array<{ month: string; name: string; wins: number }>>([
    // Example data - replace with Firestore fetch
    // { month: 'November 2024', name: 'ProPlayer123', wins: 12 },
    // { month: 'October 2024', name: 'JungleKing', wins: 10 },
  ]);

  // Auth Modal
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authForm, setAuthForm] = useState({ email: '', password: '', displayName: '' });
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Registration Form
  const [regIgn, setRegIgn] = useState('');
  const [regDiscord, setRegDiscord] = useState('');
  const [regTracker, setRegTracker] = useState('');
  const [regRole, setRegRole] = useState<TournamentRole>('Solo');
  const [regOffRole1, setRegOffRole1] = useState<TournamentRole>('Jungle');
  const [regOffRole2, setRegOffRole2] = useState<TournamentRole>('Mid');
  const [isRegLoading, setIsRegLoading] = useState(false);
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');

  // Check-in state
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  // Match Data
  const [matchHistory, setMatchHistory] = useState<any[]>([]);
  const [matchForm, setMatchForm] = useState({
    team1Name: '', team2Name: '', winner: 'Team 1',
    team1Players: Array(5).fill(null).map(() => ({ name: '', kills: 0, deaths: 0, assists: 0 })),
    team2Players: Array(5).fill(null).map(() => ({ name: '', kills: 0, deaths: 0, assists: 0 })),
  });
  const [isSubmittingMatch, setIsSubmittingMatch] = useState(false);

  // Derived State
  const isRegistered = useMemo(() => currentUser && players.some(p => p.id === currentUser.uid), [currentUser, players]);
  const isCheckedIn = useMemo(() => {
    if (!currentUser) return false;
    const player = players.find(p => p.id === currentUser.uid);
    return player ? (player as any).checkedIn === true : false;
  }, [currentUser, players]);
  const myEntry = useMemo(() => currentUser ? players.find(p => p.id === currentUser.uid) : null, [currentUser, players]);
  const myRank = useMemo(() => myEntry ? players.findIndex(p => p.id === myEntry.id) + 1 : 0, [myEntry, players]);
  const checkedInCount = useMemo(() => players.filter(p => (p as any).checkedIn).length, [players]);
  const filteredPlayers = useMemo(() => {
    if (leaderboardFilter === 'all') return players;
    return players.filter(p => getRankTier(p.mmr || 0) === leaderboardFilter);
  }, [players, leaderboardFilter]);

  // ═══════════════════════════════════════════════════════════════════════════
  // DATA FETCHING
  // ═══════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const unsubSettings = onSnapshot(doc(db, 'tournament_settings', 'current'), (snapshot) => {
      if (snapshot.exists()) setTournamentSettings(snapshot.data() as any);
    });

    const unsubAuth = FirebaseAuth.onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setIsAdmin(data.isAdmin === true);
          setUserProfile(data);
          setRegIgn(data.displayName || user.displayName || '');
          setRegDiscord(data.discordHandle || '');
          setRegTracker(data.trackerLink || '');
        }
      } else {
        setIsAdmin(false);
        setUserProfile(null);
      }
    });

    const unsubPlayers = onSnapshot(collection(db, 'tournament_players'), (snapshot) => {
      const p = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as TournamentPlayer));
      setPlayers(p.sort((a, b) => (b.score || 0) - (a.score || 0))); // Sort by score for monthly
      setIsLoadingData(false);
    });

    const matchesQuery = query(collection(db, 'tournament_matches'), orderBy('date', 'desc'), limit(20));
    const unsubMatches = onSnapshot(matchesQuery, (snapshot) => {
      setMatchHistory(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // Fetch past champions
    const unsubChampions = onSnapshot(collection(db, 'tournament_champions'), (snapshot) => {
      const champs = snapshot.docs.map(d => d.data() as { month: string; name: string; wins: number });
      setPastChampions(champs.sort((a, b) => b.month.localeCompare(a.month)));
    });

    return () => { unsubSettings(); unsubAuth(); unsubPlayers(); unsubMatches(); unsubChampions(); };
  }, []);

  useEffect(() => {
    if (currentUser) {
      const existingPlayer = players.find(p => p.id === currentUser.uid);
      if (existingPlayer) {
        setRegIgn(existingPlayer.name);
        setRegDiscord((existingPlayer as any).discord || '');
        setRegTracker(existingPlayer.trackerLink || '');
        setRegRole(existingPlayer.primaryRole);
        setRegOffRole1(existingPlayer.offRoles?.[0] || 'Jungle');
        setRegOffRole2(existingPlayer.offRoles?.[1] || 'Mid');
      }
    }
  }, [currentUser, players]);

  // ═══════════════════════════════════════════════════════════════════════════
  // AUTH HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);
    try {
      if (authMode === 'login') {
        await FirebaseAuth.signInWithEmailAndPassword(auth, authForm.email, authForm.password);
      } else {
        const cred = await FirebaseAuth.createUserWithEmailAndPassword(auth, authForm.email, authForm.password);
        if (authForm.displayName) {
          await FirebaseAuth.updateProfile(cred.user, { displayName: authForm.displayName });
        }
        await setDoc(doc(db, 'users', cred.user.uid), {
          email: authForm.email,
          displayName: authForm.displayName,
          isAdmin: false,
          createdAt: new Date().toISOString()
        });
      }
      setIsAuthModalOpen(false);
      setAuthForm({ email: '', password: '', displayName: '' });
    } catch (err: any) {
      setAuthError(err.message || 'Authentication failed');
    } finally {
      setAuthLoading(false);
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // REGISTRATION HANDLER
  // ═══════════════════════════════════════════════════════════════════════════
  const handleRegister = async () => {
    if (!currentUser) return;
    setRegError('');
    setRegSuccess('');
    if (!regIgn.trim()) return setRegError("IGN is required.");
    if (!regDiscord.trim()) return setRegError("Discord handle is required.");
    if (!regTracker.trim()) return setRegError("Tracker link is required.");
    if (new Set([regRole, regOffRole1, regOffRole2]).size !== 3) return setRegError("Please select 3 different roles.");

    setIsRegLoading(true);
    try {
      await setDoc(doc(db, 'tournament_players', currentUser.uid), {
        name: regIgn, discord: regDiscord, trackerLink: regTracker,
        primaryRole: regRole, offRoles: [regOffRole1, regOffRole2],
        checkedIn: false,
        ...(isRegistered ? {} : { score: 0, kills: 0, deaths: 0, assists: 0, matchesPlayed: 0, wins: 0, mmr: 0 }),
        updatedAt: serverTimestamp()
      }, { merge: true });
      await setDoc(doc(db, 'users', currentUser.uid), { displayName: regIgn, discordHandle: regDiscord, trackerLink: regTracker }, { merge: true });
      setRegSuccess("You're registered! Check in when it opens.");
      setActiveTab('leaderboard');
    } catch { setRegError("Failed to register."); }
    finally { setIsRegLoading(false); }
  };

  // Check In / Check Out
  const handleCheckIn = async () => {
    if (!currentUser || !isRegistered) return;
    setIsCheckingIn(true);
    try {
      await updateDoc(doc(db, 'tournament_players', currentUser.uid), { checkedIn: !isCheckedIn });
    } catch (err) { console.error(err); }
    finally { setIsCheckingIn(false); }
  };

  // Admin Toggle Check-In
  const handleToggleCheckIn = async () => {
    await setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, checkInOpen: !tournamentSettings.checkInOpen }, { merge: true });
  };

  // Admin Reset All Check-Ins
  const handleResetCheckIns = async () => {
    if (!confirm('Reset all player check-ins? This cannot be undone.')) return;
    const batch = writeBatch(db);
    players.forEach(p => batch.update(doc(db, 'tournament_players', p.id), { checkedIn: false }));
    await batch.commit();
  };

  // Admin Update MMR
  const handleUpdateMMR = async (playerId: string, mmr: number) => {
    await updateDoc(doc(db, 'tournament_players', playerId), { mmr });
  };

  // Admin Reset Monthly Scores
  const handleResetMonthlyScores = async () => {
    if (!confirm('⚠️ DANGER: This will reset ALL player scores, wins, K/D/A for a new month. Are you absolutely sure?')) return;
    if (!confirm('This is your FINAL warning. All monthly data will be lost. Continue?')) return;
    
    const batch = writeBatch(db);
    players.forEach(p => {
      batch.update(doc(db, 'tournament_players', p.id), {
        score: 0, kills: 0, deaths: 0, assists: 0, matchesPlayed: 0, wins: 0, checkedIn: false
      });
    });
    await batch.commit();
    alert('Monthly scores have been reset.');
  };

  // Match Recording
  const handleRecordMatch = async () => {
    if (!isAdmin) return;
    setIsSubmittingMatch(true);
    try {
      const t1 = matchForm.team1Players.filter(p => p.name);
      const t2 = matchForm.team2Players.filter(p => p.name);
      const winners = matchForm.winner === 'Team 1' ? t1 : t2;
      const losers = matchForm.winner === 'Team 1' ? t2 : t1;
      const batch = writeBatch(db);

      const updatePlayer = (pData: { name: string; kills: number; deaths: number; assists: number }, won: boolean) => {
        const p = players.find(pl => pl.name.toLowerCase() === pData.name.toLowerCase());
        if (p) {
          batch.update(doc(db, 'tournament_players', p.id), {
            kills: increment(pData.kills), deaths: increment(pData.deaths), assists: increment(pData.assists),
            matchesPlayed: increment(1), ...(won ? { wins: increment(1), score: increment(WIN_BONUS + 2) } : { score: increment(1) })
          });
        }
      };

      winners.forEach(p => updatePlayer(p, true));
      losers.forEach(p => updatePlayer(p, false));

      batch.set(doc(collection(db, 'tournament_matches')), {
        date: new Date().toISOString(),
        team1: { name: matchForm.team1Name, players: t1 },
        team2: { name: matchForm.team2Name, players: t2 },
        winner: matchForm.winner, status: 'completed'
      });

      await batch.commit();
      setMatchForm({
        team1Name: '', team2Name: '', winner: 'Team 1',
        team1Players: Array(5).fill(null).map(() => ({ name: '', kills: 0, deaths: 0, assists: 0 })),
        team2Players: Array(5).fill(null).map(() => ({ name: '', kills: 0, deaths: 0, assists: 0 })),
      });
    } catch { alert("Error recording match."); }
    finally { setIsSubmittingMatch(false); }
  };

  const updateMatchPlayer = (team: 'team1Players' | 'team2Players', idx: number, field: string, value: any) => {
    setMatchForm(f => {
      const arr = [...f[team]];
      arr[idx] = { ...arr[idx], [field]: value };
      return { ...f, [team]: arr };
    })
  };

  if (isLoadingData) {
    return <div className="flex h-[70vh] items-center justify-center"><Loader2 className="animate-spin text-mythic-gold" size={48} /></div>;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // GATE 1: NOT LOGGED IN - Show Public View
  // ═══════════════════════════════════════════════════════════════════════════
  if (!currentUser) {
    const top10 = players.slice(0, 10);
    return (
      <>
        <div className="min-h-[85vh] px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mythic-gold/10 border border-mythic-gold/30 text-mythic-gold text-xs font-bold uppercase tracking-widest mb-6">
                <Twitch size={14} /> Weak3n Community Event
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                Monthly <span className="text-transparent bg-clip-text bg-gradient-to-r from-mythic-gold to-yellow-300">Cup</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-2">
                Compete in our community tournament for glory and prizes!
              </p>
              <p className="text-mythic-gold font-bold">{tournamentSettings.currentMonth}</p>
            </div>

            {/* REWARDS SECTION */}
            <RewardsSection />

            {/* Countdown Timer */}
            <div className="max-w-md mx-auto mb-12">
              <CountdownTimer 
                targetDate={new Date(tournamentSettings.nextTournamentDate)} 
                label="Next Tournament Starts In" 
              />
            </div>

            {/* Top 10 Leaderboard */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-xl overflow-hidden mb-12">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <h2 className="font-serif font-bold text-xl text-white">Current Standings</h2>
                <span className="text-xs text-slate-500">{tournamentSettings.currentMonth}</span>
              </div>
              <div className="divide-y divide-slate-800/50">
                {top10.length === 0 ? (
                  <div className="p-8 text-center text-slate-500">No players registered yet. Be the first!</div>
                ) : top10.map((player, idx) => (
                  <div key={player.id} className={`flex items-center gap-4 p-4 ${idx < 3 ? 'bg-mythic-gold/5' : ''}`}>
                    <div className="w-8 text-center font-mono">
                      {idx === 0 ? <Crown className="text-yellow-400 mx-auto" size={20} /> :
                       idx === 1 ? <Medal className="text-slate-300 mx-auto" size={18} /> :
                       idx === 2 ? <Award className="text-amber-600 mx-auto" size={18} /> :
                       <span className="text-slate-500">{idx + 1}</span>}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">{player.name}</div>
                      <RankBadge mmr={player.mmr || 0} showSR={false} size="sm" />
                    </div>
                    <div className="text-right">
                      <div className="text-mythic-gold font-bold">{player.score || 0} pts</div>
                      <div className="text-xs text-slate-500">{player.wins || 0}W / {(player.matchesPlayed || 0) - (player.wins || 0)}L</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features + How to Join */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 text-center">
                  <Users className="text-blue-400 mx-auto mb-4" size={28} />
                  <h3 className="font-bold text-white mb-2">Auto Draft</h3>
                  <p className="text-slate-500 text-sm">Balanced teams based on MMR and roles.</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 text-center">
                  <Trophy className="text-green-400 mx-auto mb-4" size={28} />
                  <h3 className="font-bold text-white mb-2">Leaderboard</h3>
                  <p className="text-slate-500 text-sm">Earn points and climb the ranks all month.</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 text-center">
                  <Calendar className="text-purple-400 mx-auto mb-4" size={28} />
                  <h3 className="font-bold text-white mb-2">Monthly Events</h3>
                  <p className="text-slate-500 text-sm">New tournament cycle every month.</p>
                </div>
              </div>
              
              <HowToJoinSection onRegisterClick={() => setIsAuthModalOpen(true)} />
            </div>

            {/* Past Champions */}
            {pastChampions.length > 0 && (
              <PastChampions champions={pastChampions} />
            )}

            {/* CTA */}
            <div className="text-center mt-12">
              <button onClick={() => setIsAuthModalOpen(true)} className="px-8 py-4 bg-mythic-gold text-slate-900 font-bold text-lg rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-mythic-gold/20">
                <LogIn className="inline mr-2" size={20} /> Join the Tournament
              </button>
            </div>
          </div>
        </div>

        {/* Auth Modal - Same as before */}
        {isAuthModalOpen && createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-slate-900 w-full max-w-sm rounded-2xl border border-slate-700 shadow-2xl relative">
              <button onClick={() => setIsAuthModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={20} /></button>
              <div className="p-8">
                <Trophy className="mx-auto text-mythic-gold mb-3" size={40} />
                <h2 className="text-2xl font-serif font-bold text-white text-center mb-6">{authMode === 'login' ? 'Welcome Back' : 'Join the Cup'}</h2>
                {authError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg mb-4">{authError}</div>}
                <form onSubmit={handleAuth} className="space-y-4">
                  {authMode === 'register' && (
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input type="text" placeholder="Display Name" value={authForm.displayName} onChange={(e) => setAuthForm(f => ({...f, displayName: e.target.value}))} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white" required />
                    </div>
                  )}
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input type="email" placeholder="Email" value={authForm.email} onChange={(e) => setAuthForm(f => ({...f, email: e.target.value}))} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white" required />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input type="password" placeholder="Password" value={authForm.password} onChange={(e) => setAuthForm(f => ({...f, password: e.target.value}))} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white" required />
                  </div>
                  <button type="submit" disabled={authLoading} className="w-full py-3 bg-mythic-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                    {authLoading ? <Loader2 className="animate-spin" size={18} /> : authMode === 'login' ? 'Sign In' : 'Create Account'}
                  </button>
                </form>
                <p className="text-center text-slate-500 text-sm mt-4">
                  {authMode === 'login' ? "Don't have an account?" : "Already registered?"}{' '}
                  <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="text-mythic-gold hover:underline">{authMode === 'login' ? 'Register' : 'Log In'}</button>
                </p>
              </div>
            </div>
          </div>, document.body
        )}
      </>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // LOGGED IN - DASHBOARD
  // ═══════════════════════════════════════════════════════════════════════════
  const navItems = [
    { id: 'leaderboard', label: 'Leaderboard', icon: <Gem size={18} /> },
    { id: 'matches', label: 'Match History', icon: <History size={18} /> },
    { id: 'rules', label: 'Rules', icon: <BookOpen size={18} /> },
    ...(!isRegistered ? [{ id: 'my_entry', label: 'Register', icon: <ClipboardList size={18} /> }] : []),
    ...(isAdmin ? [{ id: 'admin', label: 'Admin Panel', icon: <Shield size={18} /> }] : [])
  ];

  const filterTabs = [
    { id: 'all', label: 'All Players' },
    { id: 'high', label: 'Obsidian+' },
    { id: 'mid', label: 'Gold — Diamond' },
    { id: 'low', label: 'Amber — Silver' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-72 shrink-0 space-y-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
            <Trophy className="mx-auto text-mythic-gold mb-3" size={44} />
            <h2 className="font-serif font-bold text-2xl text-white">{tournamentSettings.tournamentName}</h2>
            <p className="text-mythic-gold text-sm font-bold mt-1">{tournamentSettings.currentMonth}</p>
            <div className={`mt-4 py-2 px-4 rounded-lg text-sm font-bold ${tournamentSettings.checkInOpen ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
              {tournamentSettings.checkInOpen ? `✓ Check-In OPEN (${checkedInCount})` : 'Check-In Closed'}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-around">
              <div><div className="text-2xl font-bold text-white">{players.length}</div><div className="text-[10px] text-slate-500 uppercase">Registered</div></div>
              <div><div className="text-2xl font-bold text-green-400">{checkedInCount}</div><div className="text-[10px] text-slate-500 uppercase">Checked In</div></div>
            </div>
          </div>

          {/* Rewards Preview */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-amber-600/10 border border-yellow-500/30 rounded-xl p-4">
            <h3 className="font-bold text-white text-sm mb-3 flex items-center gap-2"><Gift size={16} className="text-mythic-gold" /> Top 3 Prizes</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2"><Crown size={14} className="text-yellow-400" /> <span className="text-slate-300">1st: $50 + Discord Role</span></div>
              <div className="flex items-center gap-2"><Medal size={14} className="text-slate-400" /> <span className="text-slate-400">2nd: $25 + Discord Role</span></div>
              <div className="flex items-center gap-2"><Award size={14} className="text-amber-600" /> <span className="text-slate-400">3rd: $10 + Discord Role</span></div>
            </div>
          </div>

          {/* Check-In Banner */}
          {isRegistered && (
            <div className={`rounded-xl p-4 border ${isCheckedIn ? 'bg-green-500/10 border-green-500/30' : tournamentSettings.checkInOpen ? 'bg-amber-500/10 border-amber-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-white text-sm">Tournament Status</span>
                {isCheckedIn ? <span className="text-green-400 text-xs font-bold flex items-center gap-1"><CheckCircle2 size={14} /> CHECKED IN</span> : <span className="text-slate-400 text-xs">Not checked in</span>}
              </div>
              {tournamentSettings.checkInOpen ? (
                <button onClick={handleCheckIn} disabled={isCheckingIn} className={`w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${isCheckedIn ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30' : 'bg-green-500 text-white hover:bg-green-400'}`}>
                  {isCheckingIn ? <Loader2 size={16} className="animate-spin" /> : isCheckedIn ? <><UserX size={16} /> Cancel Check-In</> : <><UserCheck size={16} /> Check In Now</>}
                </button>
              ) : (
                <div className="text-xs text-slate-500 text-center py-2">Check-in will open before the tournament</div>
              )}
            </div>
          )}

          {/* My Status Card */}
          {myEntry && (
            <div className="bg-gradient-to-br from-mythic-gold/10 to-yellow-600/5 border border-mythic-gold/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-mythic-gold rounded-full flex items-center justify-center text-slate-900 font-bold">#{myRank}</div>
                <div><div className="font-bold text-white">{myEntry.name}</div><RankBadge mmr={myEntry.mmr || 0} showSR={false} size="sm" /></div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-900/50 rounded-lg p-2"><div className="text-lg font-bold text-mythic-gold">{myEntry.score || 0}</div><div className="text-[9px] text-slate-500 uppercase">Points</div></div>
                <div className="bg-slate-900/50 rounded-lg p-2"><div className="text-lg font-bold text-green-400">{myEntry.wins || 0}</div><div className="text-[9px] text-slate-500 uppercase">Wins</div></div>
                <div className="bg-slate-900/50 rounded-lg p-2"><div className="text-lg font-bold text-slate-400">{myEntry.mmr || 0}</div><div className="text-[9px] text-slate-500 uppercase">SR</div></div>
              </div>
            </div>
          )}

          <nav className="space-y-1">
            {navItems.map(item => (
              <button key={item.id} onClick={() => setActiveTab(item.id as any)} className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${activeTab === item.id ? 'bg-mythic-gold text-slate-900 font-bold' : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                <span className="flex items-center gap-3">{item.icon} {item.label}</span>
                {activeTab === item.id && <ChevronRight size={16} />}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* RULES TAB */}
          {activeTab === 'rules' && <RulesSection />}

          {/* LEADERBOARD TAB */}
          {activeTab === 'leaderboard' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden animate-in fade-in">
              <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-serif font-bold text-xl text-white">Player Standings</h2>
                    <p className="text-xs text-slate-500">{tournamentSettings.currentMonth} • Sorted by Points</p>
                  </div>
                  <div className="flex gap-1 bg-slate-950 p-1 rounded-lg">
                    {filterTabs.map(tab => (
                      <button key={tab.id} onClick={() => setLeaderboardFilter(tab.id as any)} className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${leaderboardFilter === tab.id ? 'bg-mythic-gold text-slate-900' : 'text-slate-400 hover:text-white'}`}>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-[10px] uppercase text-slate-600 border-b border-slate-800 bg-slate-950/30">
                    <tr>
                      <th className="px-4 py-3 w-10">#</th>
                      <th className="px-4 py-3">Player</th>
                      <th className="px-4 py-3">Rank</th>
                      <th className="px-4 py-3">Roles</th>
                      <th className="px-4 py-3 text-center">Links</th>
                      <th className="px-4 py-3 text-center">Pts</th>
                      <th className="px-4 py-3 text-center">W/L</th>
                      <th className="px-4 py-3 text-center">K/D/A</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {filteredPlayers.map((player) => {
                      const globalRank = players.findIndex(p => p.id === player.id) + 1;
                      const isMe = player.id === currentUser?.uid;
                      return (
                        <tr key={player.id} className={`hover:bg-slate-800/30 ${isMe ? 'bg-mythic-gold/5' : ''} ${globalRank <= 3 ? 'bg-mythic-gold/5' : ''}`}>
                          <td className="px-4 py-3 font-mono text-slate-500">
                            <div className="flex items-center gap-1">
                              {globalRank === 1 ? <Crown className="text-yellow-500" size={16} /> : 
                               globalRank === 2 ? <Medal className="text-slate-300" size={16} /> : 
                               globalRank === 3 ? <Award className="text-amber-600" size={16} /> : globalRank}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white">{player.name}</span>
                              {isMe && <span className="text-[9px] bg-mythic-gold/20 text-mythic-gold px-1.5 py-0.5 rounded">YOU</span>}
                            </div>
                          </td>
                          <td className="px-4 py-3"><RankBadge mmr={player.mmr || 0} showSR={true} size="sm" /></td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <span className="text-mythic-gold">{ROLE_ICONS[player.primaryRole]}</span>
                              {player.offRoles?.map((r, i) => <span key={i} className="text-slate-500">{ROLE_ICONS[r]}</span>)}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <a href={player.trackerLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-mythic-gold"><ExternalLink size={14} /></a>
                          </td>
                          <td className="px-4 py-3 text-center font-bold text-mythic-gold">{player.score || 0}</td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-green-400">{player.wins || 0}</span>
                            <span className="text-slate-600">/</span>
                            <span className="text-red-400">{(player.matchesPlayed || 0) - (player.wins || 0)}</span>
                          </td>
                          <td className="px-4 py-3 text-center text-slate-400">
                            {player.kills || 0}/{player.deaths || 0}/{player.assists || 0}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MATCHES TAB */}
          {activeTab === 'matches' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden animate-in fade-in">
              <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                <h2 className="font-serif font-bold text-xl text-white">Match History</h2>
              </div>
              <div className="divide-y divide-slate-800/50">
                {matchHistory.length === 0 ? (
                  <div className="p-8 text-center text-slate-500">No matches played yet this month.</div>
                ) : matchHistory.map((match) => (
                  <div key={match.id} className="p-4 hover:bg-slate-800/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Swords className="text-mythic-gold" size={20} />
                        <div>
                          <div className="font-bold text-white">{match.team1?.name || 'Team 1'} vs {match.team2?.name || 'Team 2'}</div>
                          <div className="text-xs text-slate-500">{new Date(match.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded text-sm font-bold ${match.winner === 'Team 1' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {match.winner} Won
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REGISTRATION TAB */}
          {activeTab === 'my_entry' && !isRegistered && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden animate-in fade-in">
              <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                <h2 className="font-serif font-bold text-xl text-white">Tournament Registration</h2>
              </div>
              <div className="p-6 space-y-4">
                {regError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm">{regError}</div>}
                {regSuccess && <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded-lg text-sm">{regSuccess}</div>}
                
                <div>
                  <label className="block text-sm text-slate-400 mb-1">In-Game Name *</label>
                  <input type="text" value={regIgn} onChange={(e) => setRegIgn(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="Your SMITE IGN" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Discord Handle *</label>
                  <input type="text" value={regDiscord} onChange={(e) => setRegDiscord(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="username#1234" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Tracker Link *</label>
                  <input type="text" value={regTracker} onChange={(e) => setRegTracker(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="https://smite.guru/profile/..." />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Primary Role *</label>
                    <select value={regRole} onChange={(e) => setRegRole(e.target.value as TournamentRole)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white">
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Off-Role 1 *</label>
                    <select value={regOffRole1} onChange={(e) => setRegOffRole1(e.target.value as TournamentRole)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white">
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Off-Role 2 *</label>
                    <select value={regOffRole2} onChange={(e) => setRegOffRole2(e.target.value as TournamentRole)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white">
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
                
                <button onClick={handleRegister} disabled={isRegLoading} className="w-full py-3 bg-mythic-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                  {isRegLoading ? <Loader2 className="animate-spin" size={18} /> : 'Register for Tournament'}
                </button>
              </div>
            </div>
          )}

          {/* ADMIN TAB - Full Admin Panel */}
          {activeTab === 'admin' && isAdmin && (
            <div className="space-y-6 animate-in fade-in">
              {/* Check-In Control */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2"><UserCheck size={20} className="text-mythic-gold" /> Check-In Control</h3>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="flex-1 flex items-center justify-between p-4 bg-slate-950 rounded-lg border border-slate-800">
                    <div><div className="font-bold text-white">Check-In Status</div><div className="text-xs text-slate-500">{checkedInCount} players checked in</div></div>
                    <button onClick={handleToggleCheckIn} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${tournamentSettings.checkInOpen ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                      {tournamentSettings.checkInOpen ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                      {tournamentSettings.checkInOpen ? 'OPEN' : 'CLOSED'}
                    </button>
                  </div>
                  <button onClick={handleResetCheckIns} className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-bold text-sm hover:bg-red-500/30 transition-all">
                    Reset All Check-Ins
                  </button>
                </div>
              </div>

              {/* Tournament Settings */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2"><Calendar size={20} className="text-mythic-gold" /> Tournament Settings</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Tournament Name</label>
                    <input 
                      type="text" 
                      value={tournamentSettings.tournamentName} 
                      onChange={(e) => setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, tournamentName: e.target.value }, { merge: true })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Current Month Label</label>
                    <input 
                      type="text" 
                      value={tournamentSettings.currentMonth} 
                      onChange={(e) => setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, currentMonth: e.target.value }, { merge: true })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                      placeholder="December 2024"
                    />
                  </div>
                </div>
              </div>

              {/* Player MMR Management */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50"><h3 className="font-bold text-white flex items-center gap-2"><Users size={20} className="text-mythic-gold" /> Player MMR ({players.length})</h3></div>
                <div className="p-4 max-h-80 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="text-xs uppercase text-slate-500 sticky top-0 bg-slate-900"><tr><th className="text-left py-2">Player</th><th className="text-center py-2">Checked In</th><th className="text-center py-2">MMR</th><th className="text-center py-2">Rank</th></tr></thead>
                    <tbody className="divide-y divide-slate-800">
                      {players.map(p => (
                        <tr key={p.id}>
                          <td className="py-2 text-white">{p.name}</td>
                          <td className="py-2 text-center">{(p as any).checkedIn ? <span className="text-green-400">✓</span> : <span className="text-slate-600">—</span>}</td>
                          <td className="py-2 text-center"><input type="number" defaultValue={p.mmr || 0} onBlur={(e) => handleUpdateMMR(p.id, parseInt(e.target.value) || 0)} className="w-24 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-mythic-gold font-mono text-sm" /></td>
                          <td className="py-2 text-center"><RankBadge mmr={p.mmr || 0} showSR={false} size="sm" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Match Recording */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50"><h3 className="font-bold text-white flex items-center gap-2"><Swords size={20} className="text-mythic-gold" /> Record Match</h3></div>
                <div className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Team 1 */}
                    <div className="space-y-3">
                      <input type="text" value={matchForm.team1Name} onChange={(e) => setMatchForm(f => ({ ...f, team1Name: e.target.value }))} placeholder="Team 1 Name" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200 font-bold" />
                      {matchForm.team1Players.map((p, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <div className="flex-1"><PlayerAutocomplete value={p.name} onChange={(v) => updateMatchPlayer('team1Players', i, 'name', v)} players={players} placeholder={`Player ${i + 1}`} /></div>
                          <input type="number" value={p.kills} onChange={(e) => updateMatchPlayer('team1Players', i, 'kills', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-center text-green-400 text-sm" placeholder="K" />
                          <input type="number" value={p.deaths} onChange={(e) => updateMatchPlayer('team1Players', i, 'deaths', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-center text-red-400 text-sm" placeholder="D" />
                          <input type="number" value={p.assists} onChange={(e) => updateMatchPlayer('team1Players', i, 'assists', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-center text-blue-400 text-sm" placeholder="A" />
                        </div>
                      ))}
                    </div>
                    {/* Team 2 */}
                    <div className="space-y-3">
                      <input type="text" value={matchForm.team2Name} onChange={(e) => setMatchForm(f => ({ ...f, team2Name: e.target.value }))} placeholder="Team 2 Name" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200 font-bold" />
                      {matchForm.team2Players.map((p, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <div className="flex-1"><PlayerAutocomplete value={p.name} onChange={(v) => updateMatchPlayer('team2Players', i, 'name', v)} players={players} placeholder={`Player ${i + 1}`} /></div>
                          <input type="number" value={p.kills} onChange={(e) => updateMatchPlayer('team2Players', i, 'kills', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-center text-green-400 text-sm" placeholder="K" />
                          <input type="number" value={p.deaths} onChange={(e) => updateMatchPlayer('team2Players', i, 'deaths', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-center text-red-400 text-sm" placeholder="D" />
                          <input type="number" value={p.assists} onChange={(e) => updateMatchPlayer('team2Players', i, 'assists', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-center text-blue-400 text-sm" placeholder="A" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <label className="text-sm text-slate-400">Winner:</label>
                    <select value={matchForm.winner} onChange={(e) => setMatchForm(f => ({ ...f, winner: e.target.value }))} className="bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200"><option>Team 1</option><option>Team 2</option></select>
                    <button onClick={handleRecordMatch} disabled={isSubmittingMatch} className="ml-auto px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg disabled:opacity-50 flex items-center gap-2">
                      {isSubmittingMatch ? <Loader2 className="animate-spin" size={18} /> : <><CheckCircle2 size={18} /> Record Match</>}
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset Monthly Scores */}
              <div className="bg-slate-900 border border-red-500/30 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2"><AlertCircle size={20} className="text-red-400" /> Danger Zone</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">Reset Monthly Scores</div>
                    <div className="text-xs text-slate-500">Reset all player scores, wins, and K/D/A for a new month. This cannot be undone.</div>
                  </div>
                  <button onClick={handleResetMonthlyScores} className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm">
                    Reset All Scores
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};