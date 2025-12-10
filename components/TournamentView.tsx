import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { TournamentPlayer, TournamentRole, DraftTeam, DraftSession } from '../types';
import {
  Trophy, Crown, Gem, History, ChevronRight, Loader2, ClipboardList,
  CheckCircle2, Shield, AlertCircle, ExternalLink, Swords, Users,
  Calendar, Clock, Twitch, Youtube, LogIn, User, Lock, Mail, X,
  Target, Crosshair, Heart, Sparkles, MessageSquare,
  ToggleLeft, ToggleRight, UserCheck, UserX, Zap, Gift, Medal,
  BookOpen, Timer, Star, Award, RefreshCw, Trash2
} from 'lucide-react';
import { db, auth } from '../services/firebase';
import { 
  collection, onSnapshot, doc, query, orderBy, limit, setDoc, 
  getDoc, writeBatch, increment, serverTimestamp, updateDoc, deleteDoc
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

// Role-Based Scoring Multipliers
const ROLE_MULTIPLIERS: Record<TournamentRole, { kill: number; death: number; assist: number }> = {
  Carry: { kill: 3, death: 1.5, assist: 0.75 },
  Jungle: { kill: 3, death: 1.5, assist: 0.5 },
  Mid: { kill: 3, death: 1.5, assist: 0.75 },
  Solo: { kill: 2, death: 1, assist: 1.25 },
  Support: { kill: 1, death: 1, assist: 1.75 }
};
const BASE_WIN_POINTS = 3;

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
          <Trophy size={16} className="text-mythic-gold" /> Scoring (Role-Based)
        </h3>
        <ul className="text-slate-400 text-sm space-y-2 ml-6">
          <li><span className="text-yellow-400 font-bold">Carry:</span> K: 3x | D: -1.5x | A: 0.75x | Win: +3</li>
          <li><span className="text-green-400 font-bold">Jungle:</span> K: 3x | D: -1.5x | A: 0.5x | Win: +3</li>
          <li><span className="text-purple-400 font-bold">Mid:</span> K: 3x | D: -1.5x | A: 0.75x | Win: +3</li>
          <li><span className="text-red-400 font-bold">Solo:</span> K: 2x | D: -1x | A: 1.25x | Win: +3</li>
          <li><span className="text-blue-400 font-bold">Support:</span> K: 1x | D: -1x | A: 1.75x | Win: +3</li>
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
        { step: 2, title: "Register", desc: "Add your profile, IGN, streaming info & MMR" },
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

// Rank Badge Component with Image
const RankBadge: React.FC<{ mmr: number; showSR?: boolean; size?: 'sm' | 'md' }> = ({ mmr, showSR = true, size = 'md' }) => {
  const rank = getRank(mmr);
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs';
  
  // Determine bracket placement for intermediate ranks
  const getBracketInfo = () => {
    const prevRankIdx = RANKS.findIndex(r => r.name === rank.name) - 1;
    const prevRankSR = prevRankIdx >= 0 ? RANKS[prevRankIdx].minSR : 0;
    const nextRankIdx = RANKS.findIndex(r => r.name === rank.name) + 1;
    const nextRankSR = nextRankIdx < RANKS.length ? RANKS[nextRankIdx].minSR : 5900;
    
    const currentInBracket = mmr - rank.minSR;
    const bracketSize = nextRankSR - rank.minSR;
    const percentageInRank = Math.round((currentInBracket / bracketSize) * 100);
    
    return { percentageInRank, currentInBracket, bracketSize };
  };

  const bracketInfo = getBracketInfo();
  
  return (
    <div className={`inline-flex items-center gap-2 rounded ${rank.bgColor} border ${rank.borderColor} ${sizeClasses}`}>
      {/* Rank Icon/Circle */}
      <div className={`rounded-full bg-gradient-to-br ${rank.color} flex-shrink-0 ${size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'} flex items-center justify-center`}>
        <span className={`font-bold ${rank.textColor} ${size === 'sm' ? 'text-[8px]' : 'text-[10px]'}`}>
          {rank.name.substring(0, 1)}
        </span>
      </div>
      <div>
        <span className={`font-bold ${rank.textColor}`}>{rank.name}</span>
        {showSR && <span className="text-slate-500 ml-1">{mmr} SR</span>}
      </div>
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
  const [activeTab, setActiveTab] = useState<'status' | 'leaderboard' | 'matches' | 'my_entry' | 'draft' | 'rules' | 'teams' | 'admin'>('status');
  const [leaderboardFilter, setLeaderboardFilter] = useState<'all' | 'high' | 'mid' | 'low'>('all');
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);

  // Tournament Settings - Updated for Monthly and Registration
  const [tournamentSettings, setTournamentSettings] = useState<{ 
    checkInOpen: boolean;
    registrationOpen: boolean;
    tournamentName: string;
    nextTournamentDate: string;
    registrationStartDate: string;
    registrationEndDate: string;
    currentMonth: string;
    mode: 'random' | 'draft';
  }>({ 
    checkInOpen: false,
    registrationOpen: true,
    tournamentName: 'Monthly Cup',
    nextTournamentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Default 7 days
    registrationStartDate: new Date().toISOString(), // Default now
    registrationEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Default 7 days
    currentMonth: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
    mode: 'random'
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
  const [regSmiteIgn, setRegSmiteIgn] = useState('');
  const [regDiscord, setRegDiscord] = useState('');
  const [regTracker, setRegTracker] = useState('');
  const [regTwitch, setRegTwitch] = useState('');
  const [regYoutube, setRegYoutube] = useState('');
  const [regCurrentMmr, setRegCurrentMmr] = useState('');
  const [regPeakMmr, setRegPeakMmr] = useState('');
  const [regIsTeamCaptain, setRegIsTeamCaptain] = useState(false);
  const [regRole, setRegRole] = useState<TournamentRole>('Solo');
  const [regOffRole1, setRegOffRole1] = useState<TournamentRole>('Jungle');
  const [regOffRole2, setRegOffRole2] = useState<TournamentRole>('Mid');
  const [isRegLoading, setIsRegLoading] = useState(false);
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');

  // Check-in state
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  // Draft Tournament State
  const [draftTeams, setDraftTeams] = useState<any[]>([]);
  const [isCreatingDraftTeam, setIsCreatingDraftTeam] = useState(false);
  const [draftTeamForm, setDraftTeamForm] = useState({
    name: '',
    captainName: '',
    captainId: '',
    member2Name: '',
    member2Id: '',
    member3Name: '',
    member3Id: '',
    member4Name: '',
    member4Id: '',
    member5Name: '',
    member5Id: '',
  });

  // Draft Session State
  const [draftSession, setDraftSession] = useState<any>(null);
  const [isDraftOpen, setIsDraftOpen] = useState(false);
  const [currentCaptainIndex, setCurrentCaptainIndex] = useState(0);
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>([]);
  const [isCaptain, setIsCaptain] = useState(false);

  // Captain Selection State
  const [selectedCaptains, setSelectedCaptains] = useState<string[]>([]);
  const [showCaptainSelector, setShowCaptainSelector] = useState(false);

  // Match Edit State
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);
  const [editMatchForm, setEditMatchForm] = useState<any>(null);

  // Team Management State
  const [swapPlayerModal, setSwapPlayerModal] = useState<{ teamId: string; playerId: string; playerName: string } | null>(null);

  // Bracket & Matchup State
  const [bracketRounds, setBracketRounds] = useState<any[]>([]);
  const [randomMatchups, setRandomMatchups] = useState<{ order: any[]; chaos: any[] }[]>([]);
  const [swapBracketModal, setSwapBracketModal] = useState<{ roundIdx: number; matchIdx: number; teamSlot: 'team1' | 'team2' } | null>(null);
  const [swapRandomPlayerModal, setSwapRandomPlayerModal] = useState<{ matchIdx: number; team: 'order' | 'chaos'; playerIdx: number; playerName: string } | null>(null);

  // Player MMR Management State
  const [playerSearchQuery, setPlayerSearchQuery] = useState('');
  const [playerMMRPage, setPlayerMMRPage] = useState(0);
  const PLAYERS_PER_PAGE = 10;

  // Match Data
  const [matchHistory, setMatchHistory] = useState<any[]>([]);
  const [matchForm, setMatchForm] = useState({
    team1Name: 'Order', team2Name: 'Chaos', winner: 'Order',
    team1Players: Array(5).fill(null).map(() => ({ name: '', role: 'Support' as TournamentRole, kills: 0, deaths: 0, assists: 0 })),
    team2Players: Array(5).fill(null).map(() => ({ name: '', role: 'Support' as TournamentRole, kills: 0, deaths: 0, assists: 0 })),
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
      if (snapshot.exists()) {
        const data = snapshot.data() as any;
        // Merge with defaults to ensure all fields exist
        setTournamentSettings({
          checkInOpen: data.checkInOpen ?? false,
          registrationOpen: data.registrationOpen ?? true,
          tournamentName: data.tournamentName ?? 'Monthly Cup',
          nextTournamentDate: data.nextTournamentDate ?? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          registrationStartDate: data.registrationStartDate ?? new Date().toISOString(),
          registrationEndDate: data.registrationEndDate ?? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          currentMonth: data.currentMonth ?? new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
          mode: data.mode ?? 'random'
        });
      }
    });

    const unsubAuth = FirebaseAuth.onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setIsAdmin(data.isAdmin === true);
          setUserProfile(data);
          setRegSmiteIgn(data.smiteIgn || '');
          setRegDiscord(data.discordHandle || '');
          setRegTracker(data.trackerLink || '');
          setRegTwitch(data.twitchUsername || '');
          setRegYoutube(data.youtubeUsername || '');
        }
      } else {
        setIsAdmin(false);
        setUserProfile(null);
      }
    });

    const unsubPlayers = onSnapshot(collection(db, 'tournament_players'), (snapshot) => {
      const p = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as TournamentPlayer));
      setPlayers(p.sort((a, b) => (b.stats?.score || 0) - (a.stats?.score || 0))); // Sort by score for monthly
      setIsLoadingData(false);
    });

    const matchesQuery = query(collection(db, 'tournament_matches'), orderBy('date', 'desc'), limit(20));
    const unsubMatches = onSnapshot(matchesQuery, (snapshot) => {
      setMatchHistory(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // Fetch draft teams
    const unsubDraftTeams = onSnapshot(collection(db, 'draft_teams'), (snapshot) => {
      const teams = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setDraftTeams(teams.sort((a, b) => (b.score || 0) - (a.score || 0)));
    });

    // Fetch draft session (active picking phase)
    const unsubDraftSession = onSnapshot(doc(db, 'draft_session', 'current'), (snapshot) => {
      if (snapshot.exists()) {
        const session = snapshot.data() as DraftSession;
        setDraftSession(session);
        setIsDraftOpen(session.status === 'picking');
        // Check if current user is a captain
        if (currentUser && session.captains) {
          const captainIndex = session.captains.findIndex(c => c.playerId === currentUser.uid);
          setIsCaptain(captainIndex !== -1);
          setCurrentCaptainIndex(captainIndex);
        }
      } else {
        setDraftSession(null);
        setIsDraftOpen(false);
        setIsCaptain(false);
      }
    });

    // Fetch past champions
    const unsubChampions = onSnapshot(collection(db, 'tournament_champions'), (snapshot) => {
      const champs = snapshot.docs.map(d => d.data() as { month: string; name: string; wins: number });
      setPastChampions(champs.sort((a, b) => b.month.localeCompare(a.month)));
    });

    return () => { unsubSettings(); unsubAuth(); unsubPlayers(); unsubMatches(); unsubDraftTeams(); unsubDraftSession(); unsubChampions(); };
  }, []);

  useEffect(() => {
    if (currentUser) {
      const existingPlayer = players.find(p => p.id === currentUser.uid) as any;
      if (existingPlayer) {
        setRegSmiteIgn(existingPlayer.smiteIgn || '');
        setRegDiscord(existingPlayer.discord || '');
        setRegTracker(existingPlayer.trackerLink || '');
        setRegTwitch(existingPlayer.twitchUsername || '');
        setRegYoutube(existingPlayer.youtubeUsername || '');
        setRegCurrentMmr(existingPlayer.currentMmr?.toString() || existingPlayer.mmr?.toString() || '');
        setRegPeakMmr(existingPlayer.peakMmr?.toString() || '');
        setRegIsTeamCaptain(existingPlayer.isTeamCaptain || false);
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

    // Get profile name from user account (cannot be changed by player)
    const profileName = currentUser.displayName || authForm.displayName || '';
    if (!profileName.trim()) return setRegError("Profile Name is required. Please set a display name in your account.");

    if (!tournamentSettings.registrationOpen) return setRegError("Registration is currently closed.");
    if (!regSmiteIgn.trim()) return setRegError("Smite 2 IGN is required.");
    if (!regTwitch.trim() && !regYoutube.trim()) return setRegError("Either Twitch or YouTube username is required.");
    if (!regCurrentMmr.trim()) return setRegError("Current MMR is required.");
    if (!regPeakMmr.trim()) return setRegError("Peak MMR is required.");
    if (new Set([regRole, regOffRole1, regOffRole2]).size !== 3) return setRegError("Please select 3 different roles.");

    const currentMmrNum = parseInt(regCurrentMmr, 10);
    const peakMmrNum = parseInt(regPeakMmr, 10);
    if (isNaN(currentMmrNum) || currentMmrNum < 0) return setRegError("Current MMR must be a valid number.");
    if (isNaN(peakMmrNum) || peakMmrNum < 0) return setRegError("Peak MMR must be a valid number.");

    setIsRegLoading(true);
    try {
      await setDoc(doc(db, 'tournament_players', currentUser.uid), {
        name: profileName.trim(), // From user account - not editable
        smiteIgn: regSmiteIgn.trim(),
        discord: regDiscord.trim() || null,
        trackerLink: regTracker.trim() || null,
        twitchUsername: regTwitch.trim() || null,
        youtubeUsername: regYoutube.trim() || null,
        currentMmr: currentMmrNum,
        peakMmr: peakMmrNum,
        mmr: currentMmrNum, // Legacy field for compatibility
        isTeamCaptain: regIsTeamCaptain,
        primaryRole: regRole,
        offRoles: [regOffRole1, regOffRole2],
        checkedIn: false,
        ...(isRegistered ? {} : {
          stats: { score: 0, kills: 0, deaths: 0, assists: 0, matchesPlayed: 0, wins: 0, losses: 0 }
        }),
        updatedAt: serverTimestamp()
      }, { merge: true });
      await setDoc(doc(db, 'users', currentUser.uid), {
        smiteIgn: regSmiteIgn.trim(),
        discordHandle: regDiscord.trim() || null,
        trackerLink: regTracker.trim() || null,
        twitchUsername: regTwitch.trim() || null,
        youtubeUsername: regYoutube.trim() || null
      }, { merge: true });
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

  // Admin Toggle Registration
  const handleToggleRegistration = async () => {
    await setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, registrationOpen: !tournamentSettings.registrationOpen }, { merge: true });
  };

  // Admin Update Registration Start Date
  const handleUpdateRegistrationStart = async (dateStr: string) => {
    await setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, registrationStartDate: new Date(dateStr).toISOString() }, { merge: true });
  };

  // Admin Update Registration End Date
  const handleUpdateRegistrationEnd = async (dateStr: string) => {
    await setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, registrationEndDate: new Date(dateStr).toISOString() }, { merge: true });
  };

  // Admin Update Tournament Name
  const handleUpdateTournamentName = async (name: string) => {
    await setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, tournamentName: name }, { merge: true });
  };

  // Admin Update Tournament Mode
  const handleUpdateTournamentMode = async (mode: 'random' | 'draft') => {
    setTournamentSettings({ ...tournamentSettings, mode });
    await setDoc(doc(db, 'tournament_settings', 'current'), { mode }, { merge: true });
  };

  // Admin Update Current Month
  const handleUpdateCurrentMonth = async (month: string) => {
    await setDoc(doc(db, 'tournament_settings', 'current'), { ...tournamentSettings, currentMonth: month }, { merge: true });
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

  // Admin Update Player Field (generic)
  const handleUpdatePlayerField = async (playerId: string, field: string, value: any) => {
    await updateDoc(doc(db, 'tournament_players', playerId), { [field]: value });
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
      const winners = matchForm.winner === 'Order' ? t1 : t2;
      const losers = matchForm.winner === 'Order' ? t2 : t1;
      const batch = writeBatch(db);

      const updatePlayer = (pData: { name: string; role: TournamentRole; kills: number; deaths: number; assists: number }, won: boolean) => {
        const p = players.find(pl => pl.name.toLowerCase() === pData.name.toLowerCase());
        if (p) {
          const role = pData.role;
          const multipliers = ROLE_MULTIPLIERS[role];
          
          const killScore = Math.round(pData.kills * multipliers.kill * 10) / 10;
          const deathScore = Math.round(pData.deaths * multipliers.death * 10) / 10;
          const assistScore = Math.round(pData.assists * multipliers.assist * 10) / 10;
          const kdaScore = killScore - deathScore + assistScore;
          const winScore = won ? BASE_WIN_POINTS : 0;
          const totalScore = kdaScore + winScore;
          
          batch.update(doc(db, 'tournament_players', p.id), {
            kills: increment(pData.kills), 
            deaths: increment(pData.deaths), 
            assists: increment(pData.assists),
            matchesPlayed: increment(1), 
            ...(won ? { wins: increment(1) } : {}),
            score: increment(totalScore)
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
        team1Name: 'Order', team2Name: 'Chaos', winner: 'Order',
        team1Players: Array(5).fill(null).map(() => ({ name: '', role: 'Support' as TournamentRole, kills: 0, deaths: 0, assists: 0 })),
        team2Players: Array(5).fill(null).map(() => ({ name: '', role: 'Support' as TournamentRole, kills: 0, deaths: 0, assists: 0 })),
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

  // Draft Team Creation
  const handleCreateDraftTeam = async () => {
    if (!isAdmin || !draftTeamForm.name || !draftTeamForm.captainId) {
      alert('Please fill in all required fields');
      return;
    }

    setIsCreatingDraftTeam(true);
    try {
      const memberIds = [
        draftTeamForm.captainId,
        ...[draftTeamForm.member2Id, draftTeamForm.member3Id, draftTeamForm.member4Id, draftTeamForm.member5Id].filter(id => id)
      ];

      if (memberIds.length < 5) {
        alert('Draft team must have exactly 5 members');
        return;
      }

      const teamMembers = memberIds.map(id => {
        const player = players.find(p => p.id === id);
        return {
          playerId: id,
          name: player?.name || '',
          isCaptain: id === draftTeamForm.captainId,
          primaryRole: player?.primaryRole || 'Solo',
          offRoles: player?.offRoles || [],
          mmr: player?.mmr || 0
        };
      });

      const teamId = `draft-team-${Date.now()}`;
      await setDoc(doc(db, 'draft_teams', teamId), {
        id: teamId,
        tournamentId: 'current',
        name: draftTeamForm.name,
        customName: draftTeamForm.name,
        members: teamMembers,
        score: 0,
        wins: 0,
        losses: 0,
        createdAt: new Date().toISOString(),
        createdBy: currentUser?.uid || 'admin'
      });

      setDraftTeamForm({
        name: '',
        captainName: '',
        captainId: '',
        member2Name: '',
        member2Id: '',
        member3Name: '',
        member3Id: '',
        member4Name: '',
        member4Id: '',
        member5Name: '',
        member5Id: '',
      });

      alert('Draft team created successfully!');
    } catch (error) {
      console.error('Error creating draft team:', error);
      alert('Error creating draft team');
    } finally {
      setIsCreatingDraftTeam(false);
    }
  };

  // Team Player Swap Handler
  const handleSwapPlayer = async (teamId: string, oldPlayerId: string, newPlayerId: string) => {
    if (!isAdmin) return;

    const team = draftTeams.find(t => t.id === teamId);
    if (!team) return;

    const newPlayer = players.find(p => p.id === newPlayerId);
    if (!newPlayer) return;

    // Check if new player is already on another team
    const existingTeam = draftTeams.find(t =>
      t.id !== teamId && t.members?.some((m: any) => m.playerId === newPlayerId)
    );

    if (existingTeam) {
      if (!confirm(`${newPlayer.name} is already on team "${existingTeam.name}". Do you want to swap players between teams?`)) {
        return;
      }

      // Find the old player to swap to the other team
      const oldPlayer = players.find(p => p.id === oldPlayerId);
      if (!oldPlayer) return;

      // Update the other team - replace newPlayer with oldPlayer
      const otherTeamMembers = existingTeam.members.map((m: any) =>
        m.playerId === newPlayerId ? {
          playerId: oldPlayerId,
          name: oldPlayer.name,
          isCaptain: m.isCaptain,
          primaryRole: oldPlayer.primaryRole,
          offRoles: oldPlayer.offRoles || [],
          mmr: (oldPlayer as any).currentMmr || oldPlayer.mmr || 0
        } : m
      );
      await updateDoc(doc(db, 'draft_teams', existingTeam.id), { members: otherTeamMembers });
    }

    // Update this team - replace oldPlayer with newPlayer
    const oldMember = team.members.find((m: any) => m.playerId === oldPlayerId);
    const updatedMembers = team.members.map((m: any) =>
      m.playerId === oldPlayerId ? {
        playerId: newPlayerId,
        name: newPlayer.name,
        isCaptain: oldMember?.isCaptain || false,
        primaryRole: newPlayer.primaryRole,
        offRoles: newPlayer.offRoles || [],
        mmr: (newPlayer as any).currentMmr || newPlayer.mmr || 0
      } : m
    );

    await updateDoc(doc(db, 'draft_teams', teamId), { members: updatedMembers });
    setSwapPlayerModal(null);
  };

  // Delete Team Handler
  const handleDeleteTeam = async (teamId: string) => {
    if (!isAdmin) return;
    if (!confirm('Are you sure you want to delete this team? This cannot be undone.')) return;

    await deleteDoc(doc(db, 'draft_teams', teamId));
  };

  // Generate Draft Bracket (Single Elimination)
  const generateBracket = () => {
    if (draftTeams.length < 2) return [];

    // Seed teams by score/wins
    const seededTeams = [...draftTeams].sort((a, b) => (b.score || 0) - (a.score || 0));

    // Calculate rounds needed
    const teamCount = seededTeams.length;
    const rounds: any[] = [];

    // First round - pair teams
    const firstRoundMatches: any[] = [];
    for (let i = 0; i < Math.floor(teamCount / 2); i++) {
      firstRoundMatches.push({
        id: `r1-m${i}`,
        team1: seededTeams[i] || null,
        team2: seededTeams[teamCount - 1 - i] || null,
        winner: null,
        status: 'pending'
      });
    }
    // Handle bye if odd number of teams
    if (teamCount % 2 === 1) {
      firstRoundMatches.push({
        id: `r1-bye`,
        team1: seededTeams[Math.floor(teamCount / 2)],
        team2: null, // Bye
        winner: seededTeams[Math.floor(teamCount / 2)], // Auto-advance
        status: 'bye'
      });
    }
    rounds.push({ name: teamCount <= 4 ? 'Semi Finals' : 'Round 1', matches: firstRoundMatches });

    // Generate subsequent rounds
    let prevMatchCount = firstRoundMatches.length;
    let roundNum = 2;
    while (prevMatchCount > 1) {
      const nextRoundMatches: any[] = [];
      const matchesNeeded = Math.ceil(prevMatchCount / 2);
      for (let i = 0; i < matchesNeeded; i++) {
        nextRoundMatches.push({
          id: `r${roundNum}-m${i}`,
          team1: null, // TBD from previous round
          team2: null,
          winner: null,
          status: 'pending'
        });
      }
      const roundName = matchesNeeded === 1 ? 'Finals' : matchesNeeded === 2 ? 'Semi Finals' : `Round ${roundNum}`;
      rounds.push({ name: roundName, matches: nextRoundMatches });
      prevMatchCount = matchesNeeded;
      roundNum++;
    }

    return rounds;
  };

  // Generate Random Matchups (Order vs Chaos)
  const generateRandomMatchups = () => {
    const checkedIn = players.filter(p => (p as any).checkedIn);
    if (checkedIn.length < 10) return []; // Need at least 10 for one match

    // Shuffle players
    const shuffled = [...checkedIn].sort(() => Math.random() - 0.5);

    // Create matchups (10 players per match)
    const matchups: { order: any[]; chaos: any[] }[] = [];
    const matchCount = Math.floor(shuffled.length / 10);

    for (let i = 0; i < matchCount; i++) {
      const matchPlayers = shuffled.slice(i * 10, (i + 1) * 10);
      // Sort by MMR for balanced teams
      matchPlayers.sort((a, b) => ((b as any).currentMmr || b.mmr || 0) - ((a as any).currentMmr || a.mmr || 0));

      // Snake draft style for balance (1,4,5,8,9 vs 2,3,6,7,10)
      const order = [matchPlayers[0], matchPlayers[3], matchPlayers[4], matchPlayers[7], matchPlayers[8]].filter(Boolean);
      const chaos = [matchPlayers[1], matchPlayers[2], matchPlayers[5], matchPlayers[6], matchPlayers[9]].filter(Boolean);

      matchups.push({ order, chaos });
    }

    return matchups;
  };

  // Swap team in bracket
  const handleSwapBracketTeam = (roundIdx: number, matchIdx: number, teamSlot: 'team1' | 'team2', newTeam: any) => {
    setBracketRounds(prev => {
      const updated = [...prev];
      if (updated[roundIdx]?.matches[matchIdx]) {
        updated[roundIdx].matches[matchIdx][teamSlot] = newTeam;
      }
      return updated;
    });
    setSwapBracketModal(null);
  };

  // Swap player in random matchup
  const handleSwapRandomPlayer = (matchIdx: number, team: 'order' | 'chaos', playerIdx: number, newPlayer: any) => {
    setRandomMatchups(prev => {
      const updated = [...prev];
      if (updated[matchIdx]) {
        updated[matchIdx][team][playerIdx] = newPlayer;
      }
      return updated;
    });
    setSwapRandomPlayerModal(null);
  };

  // Initialize bracket/matchups when teams or mode changes
  React.useEffect(() => {
    if (tournamentSettings.mode === 'draft' && draftTeams.length >= 2) {
      setBracketRounds(generateBracket());
    } else if (tournamentSettings.mode === 'random') {
      setRandomMatchups(generateRandomMatchups());
    }
  }, [tournamentSettings.mode, draftTeams.length, players]);

  // Draft System Handlers
  const handleStartDraft = async () => {
    if (!isAdmin) return;
    setShowCaptainSelector(true);
  };

  const handleConfirmCaptains = async () => {
    if (!isAdmin || selectedCaptains.length < 1) {
      alert('Select at least 1 captain');
      return;
    }

    try {
      const checkedInPlayers = players.filter(p => (p as any).checkedIn);
      const selectedCaptainPlayers = checkedInPlayers.filter(p => selectedCaptains.includes(p.id));
      const availablePlayers = checkedInPlayers.filter(p => !selectedCaptains.includes(p.id));

      // Create pick order (shuffle captains for round-robin)
      const pickOrder = [...selectedCaptains].sort(() => Math.random() - 0.5);

      const session: DraftSession = {
        id: `draft-${Date.now()}`,
        tournamentId: 'current',
        status: 'picking',
        captains: selectedCaptainPlayers.map(captain => ({
          playerId: captain.id,
          name: captain.name,
          mmr: captain.mmr || 0,
          selections: [],
          selectedCount: 0
        })),
        availablePlayers: availablePlayers.map(p => p.id),
        currentPickIndex: 0,
        pickOrder: pickOrder,
        round: 1,
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'draft_session', 'current'), session);
      setShowCaptainSelector(false);
      setSelectedCaptains([]);
      alert(`Draft started with ${selectedCaptains.length} captains!`);
    } catch (error) {
      console.error('Error confirming captains:', error);
      alert('Error confirming captains');
    }
  };

  const handleSelectPlayer = async (playerId: string) => {
    if (!draftSession || !isCaptain || !currentUser) {
      alert('Only active captains can select players');
      return;
    }

    // Check if it's this captain's turn
    const currentPickCaptainId = draftSession.pickOrder[draftSession.currentPickIndex % draftSession.pickOrder.length];
    if (currentUser.uid !== currentPickCaptainId) {
      alert('It is not your turn yet');
      return;
    }

    const captain = draftSession.captains.find(c => c.playerId === currentUser.uid);
    if (!captain || captain.selectedCount >= 4) {
      alert('You have already selected 4 players');
      return;
    }

    if (!draftSession.availablePlayers.includes(playerId)) {
      alert('Player is not available');
      return;
    }

    try {
      // Update captain's selections
      const updatedCaptains = draftSession.captains.map(c =>
        c.playerId === currentUser.uid
          ? { ...c, selections: [...c.selections, playerId], selectedCount: c.selectedCount + 1 }
          : c
      );

      const updatedAvailable = draftSession.availablePlayers.filter(id => id !== playerId);

      // Move to next captain's turn
      let nextPickIndex = draftSession.currentPickIndex + 1;
      let nextRound = draftSession.round;

      // Check if we've completed a full round
      if (nextPickIndex % draftSession.pickOrder.length === 0) {
        nextRound += 1;
      }

      // Check if draft is complete (all captains have 4 players)
      const allFull = updatedCaptains.every(c => c.selectedCount >= 4);

      await updateDoc(doc(db, 'draft_session', 'current'), {
        captains: updatedCaptains,
        availablePlayers: updatedAvailable,
        currentPickIndex: allFull ? nextPickIndex : nextPickIndex,
        round: nextRound,
        ...(allFull && { status: 'completed' })
      });
    } catch (error) {
      console.error('Error selecting player:', error);
      alert('Error selecting player');
    }
  };

  const handleCompleteDraft = async () => {
    if (!isAdmin || !draftSession) return;

    try {
      // Create draft teams from selections
      const batch = writeBatch(db);

      draftSession.captains.forEach((captain, idx) => {
        const selectedPlayers = captain.selections.map(playerId => {
          const player = players.find(p => p.id === playerId);
          return {
            playerId,
            name: player?.name || '',
            isCaptain: idx === 0,
            primaryRole: player?.primaryRole || 'Solo',
            offRoles: player?.offRoles || [],
            mmr: player?.mmr || 0
          };
        });

        const teamId = `draft-team-${Date.now()}-${idx}`;
        batch.set(doc(db, 'draft_teams', teamId), {
          id: teamId,
          tournamentId: 'current',
          name: `Team ${captain.name}`,
          customName: `Team ${captain.name}`,
          members: selectedPlayers,
          score: 0,
          wins: 0,
          losses: 0,
          createdAt: new Date().toISOString(),
          createdBy: 'admin'
        });
      });

      // Mark draft session as completed
      batch.update(doc(db, 'draft_session', 'current'), {
        status: 'completed',
        completedAt: new Date().toISOString()
      });

      await batch.commit();
      alert('Draft completed! Teams have been created.');
    } catch (error) {
      console.error('Error completing draft:', error);
      alert('Error completing draft');
    }
  };

  const handleCancelDraft = async () => {
    if (!isAdmin) return;
    try {
      await deleteDoc(doc(db, 'draft_session', 'current'));
      alert('Draft cancelled');
    } catch (error) {
      console.error('Error cancelling draft:', error);
      alert('Error cancelling draft');
    }
  };

  // Match Edit Handlers
  const handleEditMatch = (match: any) => {
    setEditingMatchId(match.id);
    setEditMatchForm({ ...match });
  };

  const handleSaveMatchEdit = async () => {
    if (!editingMatchId || !editMatchForm || !isAdmin) return;

    try {
      await updateDoc(doc(db, 'tournament_matches', editingMatchId), {
        winner: editMatchForm.winner,
        team1: editMatchForm.team1,
        team2: editMatchForm.team2
      });
      setEditingMatchId(null);
      setEditMatchForm(null);
      alert('Match updated successfully');
    } catch (error) {
      console.error('Error updating match:', error);
      alert('Error updating match');
    }
  };

  const handleDeleteMatch = async (matchId: string) => {
    if (!isAdmin) return;
    
    if (!confirm('Delete this match? This will undo all score changes from this match.')) {
      return;
    }

    try {
      // Get the match data first to undo scores
      const matchDoc = await getDoc(doc(db, 'tournament_matches', matchId));
      if (!matchDoc.exists()) {
        alert('Match not found');
        return;
      }

      const match = matchDoc.data();
      const batch = writeBatch(db);

      // Undo player scores from this match
      const undoPlayer = (playerName: string, stats: any, won: boolean) => {
        const p = players.find(pl => pl.name.toLowerCase() === playerName.toLowerCase());
        if (p) {
          const role = stats.role || 'Support';
          const multipliers = ROLE_MULTIPLIERS[role as TournamentRole];
          
          const killScore = Math.round(stats.kills * multipliers.kill * 10) / 10;
          const deathScore = Math.round(stats.deaths * multipliers.death * 10) / 10;
          const assistScore = Math.round(stats.assists * multipliers.assist * 10) / 10;
          const kdaScore = killScore - deathScore + assistScore;
          const winScore = won ? BASE_WIN_POINTS : 0;
          const totalScore = kdaScore + winScore;
          
          batch.update(doc(db, 'tournament_players', p.id), {
            kills: increment(-stats.kills), 
            deaths: increment(-stats.deaths), 
            assists: increment(-stats.assists),
            matchesPlayed: increment(-1), 
            ...(won ? { wins: increment(-1) } : {}),
            score: increment(-totalScore)
          });
        }
      };

      const winners = match.winner === 'Order' || match.winner === 'Team 1' ? match.team1?.players : match.team2?.players;
      const losers = match.winner === 'Order' || match.winner === 'Team 1' ? match.team2?.players : match.team1?.players;

      winners?.forEach((p: any) => undoPlayer(p.name, p, true));
      losers?.forEach((p: any) => undoPlayer(p.name, p, false));

      // Delete the match
      batch.delete(doc(db, 'tournament_matches', matchId));

      await batch.commit();
      alert('Match deleted and scores have been recalculated');
    } catch (error) {
      console.error('Error deleting match:', error);
      alert('Error deleting match');
    }
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
                      <div className="text-mythic-gold font-bold">{player.stats?.score || 0} pts</div>
                      <div className="text-xs text-slate-500">{player.stats?.wins || 0}W / {(player.stats?.matchesPlayed || 0) - (player.stats?.wins || 0)}L</div>
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
    { id: 'status', label: 'Tournament Status', icon: <Trophy size={18} /> },
    { id: 'teams', label: 'Teams & Schedule', icon: <Calendar size={18} /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Gem size={18} /> },
    { id: 'matches', label: 'Match History', icon: <History size={18} /> },
    ...(isDraftOpen && isCaptain ? [{ id: 'draft', label: 'Draft Now!', icon: <Swords size={18} /> }] : []),
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
            <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{players.length}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Registered</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-400">{checkedInCount}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Checked In</div>
                </div>
              </div>
              <button onClick={() => setActiveTab('status')} className="w-full py-2 bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/30 rounded-lg font-bold text-xs hover:bg-mythic-gold/30 transition-colors">
                View Tournament Status
              </button>
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

          {/* Check-In Banner - Quick Access */}
          {isRegistered && (
            <div className={`rounded-xl p-4 border ${isCheckedIn ? 'bg-green-500/10 border-green-500/30' : tournamentSettings.checkInOpen ? 'bg-amber-500/10 border-amber-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-white text-sm">Quick Check-In</span>
                {isCheckedIn ? <span className="text-green-400 text-xs font-bold flex items-center gap-1"><CheckCircle2 size={14} /> CHECKED IN</span> : <span className="text-slate-400 text-xs">Not checked in</span>}
              </div>
              {tournamentSettings.checkInOpen ? (
                <button onClick={handleCheckIn} disabled={isCheckingIn} className={`w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${isCheckedIn ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30' : 'bg-green-500 text-white hover:bg-green-400'}`}>
                  {isCheckingIn ? <Loader2 size={16} className="animate-spin" /> : isCheckedIn ? <><UserX size={16} /> Cancel Check-In</> : <><UserCheck size={16} /> Check In Now</>}
                </button>
              ) : (
                <button onClick={() => setActiveTab('status')} className="w-full text-xs text-slate-500 text-center py-2 hover:text-slate-400 transition-colors">View status →</button>
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
                <div className="bg-slate-900/50 rounded-lg p-2"><div className="text-lg font-bold text-mythic-gold">{myEntry.stats?.score || 0}</div><div className="text-[9px] text-slate-500 uppercase">Points</div></div>
                <div className="bg-slate-900/50 rounded-lg p-2"><div className="text-lg font-bold text-green-400">{myEntry.stats?.wins || 0}</div><div className="text-[9px] text-slate-500 uppercase">Wins</div></div>
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
          {/* TOURNAMENT STATUS TAB */}
          {activeTab === 'status' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Check-In Status Card */}
              <div className={`rounded-xl p-6 border ${isCheckedIn ? 'bg-green-500/10 border-green-500/30' : tournamentSettings.checkInOpen ? 'bg-amber-500/10 border-amber-500/30' : 'bg-slate-900 border-slate-700'}`}>
                <h3 className="font-serif font-bold text-2xl text-white mb-4">Tournament Status</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Check-In Status */}
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800">
                    <div className="text-slate-400 text-sm mb-2">Check-In Status</div>
                    <div className={`text-lg font-bold flex items-center gap-2 ${isCheckedIn ? 'text-green-400' : 'text-amber-400'}`}>
                      {isCheckedIn ? (
                        <>
                          <CheckCircle2 size={24} />
                          Checked In
                        </>
                      ) : (
                        <>
                          <AlertCircle size={24} />
                          Not Checked In
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Total Registered */}
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800">
                    <div className="text-slate-400 text-sm mb-2">Total Registered</div>
                    <div className="text-lg font-bold text-mythic-gold flex items-center gap-2">
                      <Users size={24} />
                      {players.length}
                    </div>
                  </div>
                  
                  {/* Checked In Count */}
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800">
                    <div className="text-slate-400 text-sm mb-2">Checked In</div>
                    <div className="text-lg font-bold text-green-400 flex items-center gap-2">
                      <UserCheck size={24} />
                      {checkedInCount}
                    </div>
                  </div>
                </div>
              </div>

              {/* Check-In Button */}
              {isRegistered && (
                <div className={`rounded-xl p-6 border ${isCheckedIn ? 'bg-green-500/10 border-green-500/30' : tournamentSettings.checkInOpen ? 'bg-amber-500/10 border-amber-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white mb-1">Your Check-In Status</h4>
                      <p className="text-slate-400 text-sm">
                        {tournamentSettings.checkInOpen 
                          ? 'Check-in is now open!' 
                          : 'Check-in will open before the tournament if you have registered'}
                      </p>
                    </div>
                    {tournamentSettings.checkInOpen && (
                      <button onClick={handleCheckIn} disabled={isCheckingIn} className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all whitespace-nowrap ${isCheckedIn ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30' : 'bg-green-500 text-white hover:bg-green-400'}`}>
                        {isCheckingIn ? <Loader2 size={18} className="animate-spin" /> : isCheckedIn ? <><UserX size={18} /> Cancel Check-In</> : <><UserCheck size={18} /> Check In Now</>}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Registered Players Section */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <Users size={20} className="text-mythic-gold" />
                    Registered Players ({players.length})
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-[10px] uppercase text-slate-600 border-b border-slate-800 bg-slate-950/30 sticky top-0">
                      <tr>
                        <th className="px-4 py-3">Player</th>
                        <th className="px-4 py-3">IGN</th>
                        <th className="px-4 py-3">MMR</th>
                        <th className="px-4 py-3">Roles</th>
                        <th className="px-4 py-3">Socials</th>
                        <th className="px-4 py-3 text-center">Status</th>
                        <th className="px-4 py-3 text-center">Links</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      {players.map((player) => {
                        const p = player as any;
                        return (
                          <tr key={player.id} className="hover:bg-slate-800/30">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white">{player.name}</span>
                                {p.isTeamCaptain && <Crown size={14} className="text-mythic-gold" title="Team Captain" />}
                                {player.id === currentUser?.uid && <span className="text-[9px] bg-mythic-gold/20 text-mythic-gold px-1.5 py-0.5 rounded">YOU</span>}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-slate-300">{p.smiteIgn || player.name}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex flex-col gap-0.5">
                                <RankBadge mmr={p.currentMmr || player.mmr || 0} showSR={true} size="sm" />
                                {p.peakMmr && p.peakMmr !== p.currentMmr && (
                                  <span className="text-[10px] text-slate-500">Peak: {p.peakMmr}</span>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <span className="text-mythic-gold font-semibold">{player.primaryRole}</span>
                                {player.offRoles && player.offRoles.length > 0 && (
                                  <div className="flex gap-1">
                                    {player.offRoles.map((role: string, idx: number) => (
                                      <span key={idx} className="text-slate-400 text-xs bg-slate-800/50 px-1.5 py-0.5 rounded">{role}</span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex flex-col gap-1 text-xs">
                                {p.twitchUsername && (
                                  <div className="flex items-center gap-1.5 text-purple-400">
                                    <Twitch size={12} />
                                    <span>{p.twitchUsername}</span>
                                  </div>
                                )}
                                {p.youtubeUsername && (
                                  <div className="flex items-center gap-1.5 text-red-500">
                                    <Youtube size={12} />
                                    <span>{p.youtubeUsername}</span>
                                  </div>
                                )}
                                {p.discord && (
                                  <div className="flex items-center gap-1.5 text-indigo-400">
                                    <MessageSquare size={12} />
                                    <span>{p.discord}</span>
                                  </div>
                                )}
                                {!p.twitchUsername && !p.youtubeUsername && !p.discord && <span className="text-slate-600">—</span>}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-center">
                              {p.checkedIn ? (
                                <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold border border-green-500/30">
                                  <CheckCircle2 size={12} /> Checked In
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 bg-slate-700/50 text-slate-400 px-2 py-1 rounded text-xs border border-slate-600">
                                  <AlertCircle size={12} /> Not Checked In
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-center">
                              <div className="flex items-center justify-center gap-2">
                                {player.trackerLink && (
                                  <a href={player.trackerLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-mythic-gold transition-colors" title="Tracker">
                                    <ExternalLink size={14} />
                                  </a>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Checked-In Players Section */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <UserCheck size={20} className="text-green-400" />
                    Checked-In Players ({checkedInCount} / {players.length})
                  </h3>
                </div>
                {checkedInCount === 0 ? (
                  <div className="p-8 text-center text-slate-500">No players have checked in yet.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-[10px] uppercase text-slate-600 border-b border-slate-800 bg-slate-950/30 sticky top-0">
                        <tr>
                          <th className="px-4 py-3">Player</th>
                          <th className="px-4 py-3">IGN</th>
                          <th className="px-4 py-3">MMR</th>
                          <th className="px-4 py-3">Roles</th>
                          <th className="px-4 py-3">Socials</th>
                          <th className="px-4 py-3 text-center">Links</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/50">
                        {players
                          .filter(p => (p as any).checkedIn)
                          .map((player) => {
                            const p = player as any;
                            return (
                              <tr key={player.id} className="hover:bg-slate-800/30">
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-white">{player.name}</span>
                                    {p.isTeamCaptain && <Crown size={14} className="text-mythic-gold" title="Team Captain" />}
                                    {player.id === currentUser?.uid && <span className="text-[9px] bg-mythic-gold/20 text-mythic-gold px-1.5 py-0.5 rounded">YOU</span>}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <span className="text-slate-300">{p.smiteIgn || player.name}</span>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex flex-col gap-0.5">
                                    <RankBadge mmr={p.currentMmr || player.mmr || 0} showSR={true} size="sm" />
                                    {p.peakMmr && p.peakMmr !== p.currentMmr && (
                                      <span className="text-[10px] text-slate-500">Peak: {p.peakMmr}</span>
                                    )}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <span className="text-mythic-gold font-semibold">{player.primaryRole}</span>
                                    {player.offRoles && player.offRoles.length > 0 && (
                                      <div className="flex gap-1">
                                        {player.offRoles.map((role: string, idx: number) => (
                                          <span key={idx} className="text-slate-400 text-xs bg-slate-800/50 px-1.5 py-0.5 rounded">{role}</span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex flex-col gap-1 text-xs">
                                    {p.twitchUsername && (
                                      <div className="flex items-center gap-1.5 text-purple-400">
                                        <Twitch size={12} />
                                        <span>{p.twitchUsername}</span>
                                      </div>
                                    )}
                                    {p.youtubeUsername && (
                                      <div className="flex items-center gap-1.5 text-red-500">
                                        <Youtube size={12} />
                                        <span>{p.youtubeUsername}</span>
                                      </div>
                                    )}
                                    {p.discord && (
                                      <div className="flex items-center gap-1.5 text-indigo-400">
                                        <MessageSquare size={12} />
                                        <span>{p.discord}</span>
                                      </div>
                                    )}
                                    {!p.twitchUsername && !p.youtubeUsername && !p.discord && <span className="text-slate-600">—</span>}
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                  {p.trackerLink ? (
                                    <a href={p.trackerLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-xs">Tracker</a>
                                  ) : (
                                    <span className="text-slate-600">—</span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* DRAFT TAB */}
          {activeTab === 'draft' && isDraftOpen && isCaptain && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden animate-in fade-in">
              <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                <h2 className="font-serif font-bold text-xl text-white flex items-center gap-2"><Swords size={20} /> Live Draft - Select Your Team</h2>
                <p className="text-xs text-slate-500 mt-1">You are a team captain! Select 4 players to complete your roster.</p>
              </div>
              <div className="p-6 space-y-6">
                {/* Your Captain Info */}
                <div className="bg-slate-950 border border-mythic-gold/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Your Team Captain</div>
                      <div className="text-mythic-gold">{draftSession?.captains.find(c => c.playerId === currentUser?.uid)?.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 mb-1">Players Selected</div>
                      <div className="text-3xl font-bold text-mythic-gold">{draftSession?.captains.find(c => c.playerId === currentUser?.uid)?.selectedCount || 0}/4</div>
                    </div>
                  </div>
                </div>

                {/* Turn Status */}
                {draftSession && (
                  <div className={`p-4 rounded-lg border-2 text-center ${
                    draftSession.pickOrder[draftSession.currentPickIndex % draftSession.pickOrder.length] === currentUser?.uid
                      ? 'bg-yellow-500/20 border-yellow-500'
                      : 'bg-slate-950 border-slate-700'
                  }`}>
                    <div className="text-xs text-slate-500 mb-1">Round {draftSession.round}/4</div>
                    <div className="font-bold text-white">
                      {draftSession.pickOrder[draftSession.currentPickIndex % draftSession.pickOrder.length] === currentUser?.uid
                        ? '🎯 IT\'S YOUR TURN! Pick a player now!'
                        : `Waiting for ${draftSession.captains.find(c => c.playerId === draftSession.pickOrder[draftSession.currentPickIndex % draftSession.pickOrder.length])?.name} to pick...`
                      }
                    </div>
                  </div>
                )}

                {/* Available Players */}
                {draftSession?.pickOrder[draftSession?.currentPickIndex % draftSession?.pickOrder?.length] === currentUser?.uid && (
                  <div>
                    <h3 className="font-bold text-white mb-4">Select Your Next Player</h3>
                    <div className="grid md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {players.filter(p => 
                        draftSession?.availablePlayers?.includes(p.id) && 
                        p.id !== currentUser?.uid
                      ).map(player => (
                        <button
                          key={player.id}
                          onClick={() => handleSelectPlayer(player.id)}
                          className="p-4 bg-slate-950 border-2 border-slate-700 hover:border-mythic-gold hover:bg-slate-800 rounded-lg text-left transition-all"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="font-bold text-white">{player.name}</div>
                            <span className="text-xs bg-mythic-gold/20 text-mythic-gold px-2 py-1 rounded">{player.primaryRole}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Off: {player.offRoles?.slice(0, 2).join(', ') || 'N/A'}</span>
                            <span className="font-mono">{player.mmr} MMR</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Selected Players */}
                {draftSession?.captains.find(c => c.playerId === currentUser?.uid)?.selections?.length > 0 && (
                  <div>
                    <h3 className="font-bold text-white mb-3">Your Selected Team</h3>
                    <div className="space-y-2">
                      {draftSession?.captains.find(c => c.playerId === currentUser?.uid)?.selections.map((playerId, idx) => {
                        const player = players.find(p => p.id === playerId);
                        return (
                          <div key={playerId} className="p-3 bg-green-500/20 border border-green-500/30 rounded flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-white">{idx + 1}. {player?.name}</div>
                              <div className="text-xs text-slate-400">{player?.primaryRole}</div>
                            </div>
                            <span className="text-xs text-green-400 font-bold">✓</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {(draftSession?.captains[currentCaptainIndex]?.selectedCount || 0) >= 4 && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
                    <div className="font-bold text-green-400">✓ Team Selection Complete!</div>
                    <div className="text-sm text-slate-300 mt-1">Waiting for other captains to finish selecting...</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* RULES TAB */}
          {activeTab === 'rules' && <RulesSection />}

          {/* TEAMS & SCHEDULE TAB */}
          {activeTab === 'teams' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="font-serif font-bold text-xl text-white flex items-center gap-2">
                  <Calendar size={24} className="text-mythic-gold" />
                  Teams & {tournamentSettings.mode === 'draft' ? 'Bracket' : 'Matchups'}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className={`px-2 py-1 rounded ${tournamentSettings.mode === 'draft' ? 'bg-mythic-gold/20 text-mythic-gold' : 'bg-cyan-500/20 text-cyan-400'}`}>
                    {tournamentSettings.mode === 'draft' ? 'Draft Mode' : 'Random Mode'}
                  </span>
                </div>
              </div>

              {/* Teams Section */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <Users size={20} className="text-mythic-gold" />
                    Teams ({draftTeams.length})
                  </h3>
                </div>

                {draftTeams.length === 0 ? (
                  <div className="p-8 text-center text-slate-500">
                    <Users size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No teams have been created yet.</p>
                    <p className="text-xs mt-2">Teams will appear here once the draft is complete or admins create them.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4 p-4">
                    {draftTeams.map((team) => {
                      const avgMmr = team.members
                        ? Math.round(team.members.reduce((sum: number, m: any) => sum + (m.mmr || 0), 0) / team.members.length)
                        : 0;
                      return (
                        <div key={team.id} className="bg-slate-950 border border-slate-700 rounded-lg overflow-hidden hover:border-mythic-gold/30 transition-colors">
                          {/* Team Header */}
                          <div className="p-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-bold text-white text-lg">{team.customName || team.name}</h4>
                                <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                                  <span>Avg MMR: <span className="text-mythic-gold font-mono">{avgMmr}</span></span>
                                  <span>•</span>
                                  <span className="text-green-400">{team.wins || 0}W</span>
                                  <span className="text-red-400">{team.losses || 0}L</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-mythic-gold">{team.score || 0}</div>
                                <div className="text-[10px] text-slate-500 uppercase">Points</div>
                              </div>
                            </div>
                          </div>

                          {/* Team Members */}
                          <div className="divide-y divide-slate-800/50">
                            {team.members?.map((member: any, idx: number) => {
                              return (
                                <div key={member.playerId || idx} className="p-3 flex items-center justify-between hover:bg-slate-900/50 group">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${member.isCaptain ? 'bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/50' : 'bg-slate-800 text-slate-400'}`}>
                                      {member.isCaptain ? <Crown size={14} /> : idx + 1}
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-medium text-white">{member.name}</span>
                                        {member.isCaptain && <span className="text-[9px] bg-mythic-gold/20 text-mythic-gold px-1.5 py-0.5 rounded">CAPTAIN</span>}
                                      </div>
                                      <div className="text-xs text-slate-500">
                                        <span className="text-mythic-gold">{member.primaryRole}</span>
                                        {member.offRoles?.length > 0 && (
                                          <span className="text-slate-600 ml-1">• {member.offRoles.join(', ')}</span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <RankBadge mmr={member.mmr || 0} showSR={false} size="sm" />
                                    {isAdmin && (
                                      <button
                                        onClick={() => setSwapPlayerModal({ teamId: team.id, playerId: member.playerId, playerName: member.name })}
                                        className="opacity-0 group-hover:opacity-100 px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-all"
                                      >
                                        Swap
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Admin Actions */}
                          {isAdmin && (
                            <div className="p-3 border-t border-slate-800 bg-slate-950/50 flex justify-end">
                              <button
                                onClick={() => handleDeleteTeam(team.id)}
                                className="px-3 py-1.5 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded transition-colors flex items-center gap-1"
                              >
                                <Trash2 size={12} /> Delete Team
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bracket / Matchups Section - Based on Tournament Mode */}
              {tournamentSettings.mode === 'draft' ? (
                // DRAFT MODE - Show Bracket
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <Swords size={20} className="text-mythic-gold" />
                        Tournament Bracket
                      </h3>
                      {isAdmin && bracketRounds.length > 0 && (
                        <button
                          onClick={() => setBracketRounds(generateBracket())}
                          className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded flex items-center gap-1"
                        >
                          <RefreshCw size={12} /> Regenerate
                        </button>
                      )}
                    </div>
                  </div>

                  {bracketRounds.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                      <Swords size={48} className="mx-auto mb-4 opacity-30" />
                      <p>Bracket will be generated once teams are created.</p>
                      <p className="text-xs mt-2">At least 2 teams are required.</p>
                    </div>
                  ) : (
                    <div className="p-4 overflow-x-auto">
                      <div className="flex gap-8 min-w-max">
                        {bracketRounds.map((round, roundIdx) => (
                          <div key={roundIdx} className="flex flex-col gap-4 min-w-[280px]">
                            {/* Round Header */}
                            <div className="text-center">
                              <h4 className={`font-bold ${round.name === 'Finals' ? 'text-mythic-gold text-lg' : 'text-slate-400 text-sm'}`}>
                                {round.name}
                              </h4>
                            </div>

                            {/* Matches in this round */}
                            <div className="flex flex-col justify-around flex-1 gap-4">
                              {round.matches.map((match: any, matchIdx: number) => (
                                <div
                                  key={match.id}
                                  className={`bg-slate-950 border rounded-lg overflow-hidden ${
                                    match.status === 'bye' ? 'border-slate-700 opacity-60' :
                                    round.name === 'Finals' ? 'border-mythic-gold/50' : 'border-slate-700'
                                  }`}
                                >
                                  {/* Team 1 */}
                                  <div
                                    className={`p-3 flex items-center justify-between border-b border-slate-800 group ${
                                      match.winner?.id === match.team1?.id ? 'bg-green-500/10' : 'hover:bg-slate-900/50'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 flex-1">
                                      <div className="w-6 h-6 bg-slate-800 rounded text-xs flex items-center justify-center text-slate-500 font-mono">
                                        {roundIdx === 0 ? matchIdx * 2 + 1 : '?'}
                                      </div>
                                      <span className={`font-medium ${match.team1 ? 'text-white' : 'text-slate-600'}`}>
                                        {match.team1?.customName || match.team1?.name || 'TBD'}
                                      </span>
                                      {match.winner?.id === match.team1?.id && (
                                        <Trophy size={14} className="text-mythic-gold" />
                                      )}
                                    </div>
                                    {isAdmin && roundIdx === 0 && match.team1 && (
                                      <button
                                        onClick={() => setSwapBracketModal({ roundIdx, matchIdx, teamSlot: 'team1' })}
                                        className="opacity-0 group-hover:opacity-100 px-2 py-0.5 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-400 rounded transition-all"
                                      >
                                        Swap
                                      </button>
                                    )}
                                  </div>

                                  {/* Team 2 */}
                                  <div
                                    className={`p-3 flex items-center justify-between group ${
                                      match.winner?.id === match.team2?.id ? 'bg-green-500/10' :
                                      match.status === 'bye' ? '' : 'hover:bg-slate-900/50'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 flex-1">
                                      <div className="w-6 h-6 bg-slate-800 rounded text-xs flex items-center justify-center text-slate-500 font-mono">
                                        {roundIdx === 0 ? matchIdx * 2 + 2 : '?'}
                                      </div>
                                      <span className={`font-medium ${match.team2 ? 'text-white' : 'text-slate-600'}`}>
                                        {match.status === 'bye' ? '— BYE —' : (match.team2?.customName || match.team2?.name || 'TBD')}
                                      </span>
                                      {match.winner?.id === match.team2?.id && (
                                        <Trophy size={14} className="text-mythic-gold" />
                                      )}
                                    </div>
                                    {isAdmin && roundIdx === 0 && match.team2 && match.status !== 'bye' && (
                                      <button
                                        onClick={() => setSwapBracketModal({ roundIdx, matchIdx, teamSlot: 'team2' })}
                                        className="opacity-0 group-hover:opacity-100 px-2 py-0.5 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-400 rounded transition-all"
                                      >
                                        Swap
                                      </button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // RANDOM MODE - Show Random Matchups (Order vs Chaos)
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <Zap size={20} className="text-cyan-400" />
                        Random Matchups
                      </h3>
                      <div className="flex items-center gap-2">
                        {isAdmin && (
                          <button
                            onClick={() => setRandomMatchups(generateRandomMatchups())}
                            className="px-3 py-1.5 text-xs bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 rounded flex items-center gap-1"
                          >
                            <RefreshCw size={12} /> Randomize Teams
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {randomMatchups.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                      <Users size={48} className="mx-auto mb-4 opacity-30" />
                      <p>Not enough checked-in players for matchups.</p>
                      <p className="text-xs mt-2">Need at least 10 checked-in players to generate a match.</p>
                      <p className="text-xs text-slate-600 mt-1">Currently checked in: {players.filter(p => (p as any).checkedIn).length} players</p>
                    </div>
                  ) : (
                    <div className="p-4 space-y-6">
                      {randomMatchups.map((match, matchIdx) => {
                        const orderAvgMmr = Math.round(match.order.reduce((sum, p) => sum + ((p as any).currentMmr || p.mmr || 0), 0) / match.order.length);
                        const chaosAvgMmr = Math.round(match.chaos.reduce((sum, p) => sum + ((p as any).currentMmr || p.mmr || 0), 0) / match.chaos.length);
                        return (
                          <div key={matchIdx} className="bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
                            {/* Match Header */}
                            <div className="p-3 border-b border-slate-800 bg-gradient-to-r from-blue-500/10 via-slate-900 to-red-500/10">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-white">Match {matchIdx + 1}</span>
                                <span className="text-xs text-slate-500">10 Players</span>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                              {/* Order Team */}
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-bold text-blue-400 flex items-center gap-2">
                                    <Shield size={16} /> Order
                                  </h4>
                                  <span className="text-xs text-slate-500">Avg: <span className="text-blue-400 font-mono">{orderAvgMmr}</span></span>
                                </div>
                                <div className="space-y-2">
                                  {match.order.map((player, playerIdx) => (
                                    <div key={player.id} className="flex items-center justify-between p-2 bg-slate-900/50 rounded group hover:bg-slate-900">
                                      <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded text-xs flex items-center justify-center font-mono">
                                          {playerIdx + 1}
                                        </span>
                                        <span className="text-white text-sm">{player.name}</span>
                                        <span className="text-mythic-gold text-xs">{player.primaryRole}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <RankBadge mmr={(player as any).currentMmr || player.mmr || 0} showSR={false} size="sm" />
                                        {isAdmin && (
                                          <button
                                            onClick={() => setSwapRandomPlayerModal({ matchIdx, team: 'order', playerIdx, playerName: player.name })}
                                            className="opacity-0 group-hover:opacity-100 px-2 py-0.5 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-400 rounded transition-all"
                                          >
                                            Swap
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Chaos Team */}
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-bold text-red-400 flex items-center gap-2">
                                    <Zap size={16} /> Chaos
                                  </h4>
                                  <span className="text-xs text-slate-500">Avg: <span className="text-red-400 font-mono">{chaosAvgMmr}</span></span>
                                </div>
                                <div className="space-y-2">
                                  {match.chaos.map((player, playerIdx) => (
                                    <div key={player.id} className="flex items-center justify-between p-2 bg-slate-900/50 rounded group hover:bg-slate-900">
                                      <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 bg-red-500/20 text-red-400 rounded text-xs flex items-center justify-center font-mono">
                                          {playerIdx + 1}
                                        </span>
                                        <span className="text-white text-sm">{player.name}</span>
                                        <span className="text-mythic-gold text-xs">{player.primaryRole}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <RankBadge mmr={(player as any).currentMmr || player.mmr || 0} showSR={false} size="sm" />
                                        {isAdmin && (
                                          <button
                                            onClick={() => setSwapRandomPlayerModal({ matchIdx, team: 'chaos', playerIdx, playerName: player.name })}
                                            className="opacity-0 group-hover:opacity-100 px-2 py-0.5 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-400 rounded transition-all"
                                          >
                                            Swap
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Swap Player Modal */}
          {swapPlayerModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-white">Swap Player: {swapPlayerModal.playerName}</h3>
                  <button onClick={() => setSwapPlayerModal(null)} className="text-slate-400 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4 max-h-96 overflow-y-auto">
                  <p className="text-sm text-slate-400 mb-4">Select a player to swap with {swapPlayerModal.playerName}:</p>
                  <div className="space-y-2">
                    {players
                      .filter(p => p.id !== swapPlayerModal.playerId)
                      .map(p => {
                        const isOnTeam = draftTeams.some(t => t.members?.some((m: any) => m.playerId === p.id));
                        return (
                          <button
                            key={p.id}
                            onClick={() => handleSwapPlayer(swapPlayerModal.teamId, swapPlayerModal.playerId, p.id)}
                            className={`w-full p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                              isOnTeam
                                ? 'bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20'
                                : 'bg-slate-950 border-slate-700 hover:border-slate-600'
                            }`}
                          >
                            <div>
                              <div className="font-medium text-white">{p.name}</div>
                              <div className="text-xs text-slate-500">
                                <span className="text-mythic-gold">{p.primaryRole}</span>
                                {isOnTeam && <span className="ml-2 text-amber-400">(On another team)</span>}
                              </div>
                            </div>
                            <RankBadge mmr={(p as any).currentMmr || p.mmr || 0} showSR={false} size="sm" />
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Swap Bracket Team Modal */}
          {swapBracketModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-white">Swap Team in Bracket</h3>
                  <button onClick={() => setSwapBracketModal(null)} className="text-slate-400 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4 max-h-96 overflow-y-auto">
                  <p className="text-sm text-slate-400 mb-4">Select a team to swap into this bracket position:</p>
                  <div className="space-y-2">
                    {draftTeams.map(team => {
                      const currentMatch = bracketRounds[swapBracketModal.roundIdx]?.matches[swapBracketModal.matchIdx];
                      const isCurrentTeam = currentMatch?.[swapBracketModal.teamSlot]?.id === team.id;
                      return (
                        <button
                          key={team.id}
                          onClick={() => handleSwapBracketTeam(swapBracketModal.roundIdx, swapBracketModal.matchIdx, swapBracketModal.teamSlot, team)}
                          disabled={isCurrentTeam}
                          className={`w-full p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                            isCurrentTeam
                              ? 'bg-slate-800 border-slate-600 opacity-50 cursor-not-allowed'
                              : 'bg-slate-950 border-slate-700 hover:border-mythic-gold/50'
                          }`}
                        >
                          <div>
                            <div className="font-medium text-white">{team.customName || team.name}</div>
                            <div className="text-xs text-slate-500">
                              <span className="text-green-400">{team.wins || 0}W</span> - <span className="text-red-400">{team.losses || 0}L</span>
                              {isCurrentTeam && <span className="ml-2 text-mythic-gold">(Current)</span>}
                            </div>
                          </div>
                          <div className="text-mythic-gold font-bold">{team.score || 0} pts</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Swap Random Player Modal */}
          {swapRandomPlayerModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-white">
                    Swap Player: <span className={swapRandomPlayerModal.team === 'order' ? 'text-blue-400' : 'text-red-400'}>{swapRandomPlayerModal.playerName}</span>
                  </h3>
                  <button onClick={() => setSwapRandomPlayerModal(null)} className="text-slate-400 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4 max-h-96 overflow-y-auto">
                  <p className="text-sm text-slate-400 mb-4">Select a checked-in player to swap:</p>
                  <div className="space-y-2">
                    {players
                      .filter(p => (p as any).checkedIn)
                      .map(p => {
                        // Check if player is already in this match
                        const currentMatch = randomMatchups[swapRandomPlayerModal.matchIdx];
                        const isInOrder = currentMatch?.order.some((op: any) => op.id === p.id);
                        const isInChaos = currentMatch?.chaos.some((cp: any) => cp.id === p.id);
                        const isCurrentPlayer = (swapRandomPlayerModal.team === 'order' ? isInOrder : isInChaos) &&
                          currentMatch?.[swapRandomPlayerModal.team][swapRandomPlayerModal.playerIdx]?.id === p.id;

                        return (
                          <button
                            key={p.id}
                            onClick={() => handleSwapRandomPlayer(swapRandomPlayerModal.matchIdx, swapRandomPlayerModal.team, swapRandomPlayerModal.playerIdx, p)}
                            disabled={isCurrentPlayer}
                            className={`w-full p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                              isCurrentPlayer
                                ? 'bg-slate-800 border-slate-600 opacity-50 cursor-not-allowed'
                                : isInOrder || isInChaos
                                ? 'bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20'
                                : 'bg-slate-950 border-slate-700 hover:border-slate-600'
                            }`}
                          >
                            <div>
                              <div className="font-medium text-white">{p.name}</div>
                              <div className="text-xs text-slate-500">
                                <span className="text-mythic-gold">{p.primaryRole}</span>
                                {isCurrentPlayer && <span className="ml-2 text-mythic-gold">(Current)</span>}
                                {!isCurrentPlayer && isInOrder && <span className="ml-2 text-blue-400">(In Order)</span>}
                                {!isCurrentPlayer && isInChaos && <span className="ml-2 text-red-400">(In Chaos)</span>}
                              </div>
                            </div>
                            <RankBadge mmr={(p as any).currentMmr || p.mmr || 0} showSR={false} size="sm" />
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LEADERBOARD TAB */}
          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              {tournamentSettings.mode === 'random' ? (
                // RANDOM MODE - Player Leaderboard
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
                          <th className="px-4 py-3">Discord</th>
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
                                <div className="flex items-center gap-2">
                                  <span className="text-mythic-gold font-semibold">{player.primaryRole}</span>
                                  {player.offRoles?.map((r, i) => <span key={i} className="text-slate-500 text-xs">{r}</span>)}
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <span className="text-slate-300">{(player as any).discord || '—'}</span>
                              </td>
                          <td className="px-4 py-3 text-center">
                            <a href={player.trackerLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-mythic-gold transition-colors"><ExternalLink size={14} /></a>
                          </td>
                          <td className="px-4 py-3 text-center font-bold text-mythic-gold">{player.stats?.score || 0}</td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-green-400">{player.stats?.wins || 0}</span>
                            <span className="text-slate-600">/</span>
                            <span className="text-red-400">{(player.stats?.matchesPlayed || 0) - (player.stats?.wins || 0)}</span>
                          </td>
                          <td className="px-4 py-3 text-center text-slate-400">
                            {player.stats?.kills || 0}/{player.stats?.deaths || 0}/{player.stats?.assists || 0}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
                </div>
              ) : (
                // DRAFT MODE - Team Leaderboard
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden animate-in fade-in">
                  <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                    <div>
                      <h2 className="font-serif font-bold text-xl text-white">Team Standings</h2>
                      <p className="text-xs text-slate-500">{tournamentSettings.currentMonth} • Draft Mode</p>
                    </div>
                  </div>
                  {draftTeams.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">No teams created yet. Admins can create teams in the Admin Panel.</div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="text-[10px] uppercase text-slate-600 border-b border-slate-800 bg-slate-950/30">
                          <tr>
                            <th className="px-4 py-3 w-10">#</th>
                            <th className="px-4 py-3">Team Name</th>
                            <th className="px-4 py-3">Captain</th>
                            <th className="px-4 py-3">Members</th>
                            <th className="px-4 py-3 text-center">Pts</th>
                            <th className="px-4 py-3 text-center">W/L</th>
                            <th className="px-4 py-3 text-center">Avg MMR</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                          {[...draftTeams].sort((a, b) => (b.score || 0) - (a.score || 0)).map((team, idx) => {
                            const captain = team.members?.find((m: any) => m.isCaptain);
                            const avgMmr = team.members ? Math.round(team.members.reduce((sum: number, m: any) => sum + (m.mmr || 0), 0) / team.members.length) : 0;
                            return (
                              <tr key={team.id} className={`hover:bg-slate-800/30 ${idx < 3 ? 'bg-mythic-gold/5' : ''}`}>
                                <td className="px-4 py-3 font-mono text-slate-500">
                                  <div className="flex items-center gap-1">
                                    {idx === 0 ? <Crown className="text-yellow-500" size={16} /> : 
                                     idx === 1 ? <Medal className="text-slate-300" size={16} /> : 
                                     idx === 2 ? <Award className="text-amber-600" size={16} /> : (idx + 1)}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <span className="font-bold text-white">{team.customName || team.name}</span>
                                </td>
                                <td className="px-4 py-3 text-slate-300">{captain?.name || '—'}</td>
                                <td className="px-4 py-3">
                                  <div className="text-xs text-slate-400">{team.members?.length || 0} members</div>
                                </td>
                                <td className="px-4 py-3 text-center font-bold text-mythic-gold">{team.score || 0}</td>
                                <td className="px-4 py-3 text-center">
                                  <span className="text-green-400">{team.wins || 0}</span>
                                  <span className="text-slate-600">/</span>
                                  <span className="text-red-400">{team.losses || 0}</span>
                                </td>
                                <td className="px-4 py-3 text-center text-slate-400">{avgMmr}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
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
                  <div key={match.id} className="p-6 hover:bg-slate-800/30 space-y-4">
                    {/* Match Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Swords className="text-mythic-gold" size={20} />
                        <div>
                          <div className="font-bold text-white">{match.team1?.name || 'Order'} vs {match.team2?.name || 'Chaos'}</div>
                          <div className="text-xs text-slate-500">{new Date(match.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 ${match.winner === 'Order' || match.winner === 'Team 1' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                          <Trophy size={16} /> {match.winner} Won
                        </div>
                        {isAdmin && (
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleEditMatch(match)}
                              className="p-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded hover:bg-blue-500/30 transition-colors"
                              title="Edit match"
                            >
                              ✎
                            </button>
                            <button 
                              onClick={() => handleDeleteMatch(match.id)}
                              className="p-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded hover:bg-red-500/30 transition-colors"
                              title="Delete match"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Teams and Players */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Team 1 / Order */}
                      <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                          {match.winner === 'Order' || match.winner === 'Team 1' ? (
                            <>
                              <CheckCircle2 size={16} className="text-green-400" />
                              {match.team1?.name || 'Order'} (Winner)
                            </>
                          ) : (
                            <>
                              <span className="text-slate-500">—</span>
                              {match.team1?.name || 'Order'}
                            </>
                          )}
                        </h4>
                        <div className="space-y-2">
                          {match.team1?.players && match.team1.players.length > 0 ? (
                            match.team1.players.map((player: any, idx: number) => (
                              <div key={idx} className="flex items-center justify-between text-xs bg-slate-900/50 p-2 rounded gap-2">
                                <div className="flex-1">
                                  <div className="text-white font-medium">{player.name || 'Unknown'}</div>
                                  {player.role && <div className="text-slate-400 text-[10px]">{player.role}</div>}
                                </div>
                                <span className="text-slate-300 whitespace-nowrap">{player.kills || 0}/<span className="text-red-400">{player.deaths || 0}</span>/{player.assists || 0}</span>
                              </div>
                            ))
                          ) : (
                            <div className="text-xs text-slate-500 py-2">No player data</div>
                          )}
                        </div>
                      </div>

                      {/* Team 2 / Chaos */}
                      <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                          {match.winner === 'Chaos' || match.winner === 'Team 2' ? (
                            <>
                              <CheckCircle2 size={16} className="text-green-400" />
                              {match.team2?.name || 'Chaos'} (Winner)
                            </>
                          ) : (
                            <>
                              <span className="text-slate-500">—</span>
                              {match.team2?.name || 'Chaos'}
                            </>
                          )}
                        </h4>
                        <div className="space-y-2">
                          {match.team2?.players && match.team2.players.length > 0 ? (
                            match.team2.players.map((player: any, idx: number) => (
                              <div key={idx} className="flex items-center justify-between text-xs bg-slate-900/50 p-2 rounded gap-2">
                                <div className="flex-1">
                                  <div className="text-white font-medium">{player.name || 'Unknown'}</div>
                                  {player.role && <div className="text-slate-400 text-[10px]">{player.role}</div>}
                                </div>
                                <span className="text-slate-300 whitespace-nowrap">{player.kills || 0}/<span className="text-red-400">{player.deaths || 0}</span>/{player.assists || 0}</span>
                              </div>
                            ))
                          ) : (
                            <div className="text-xs text-slate-500 py-2">No player data</div>
                          )}
                        </div>
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
                {!tournamentSettings.registrationOpen && <div className="bg-orange-500/10 border border-orange-500/30 text-orange-400 p-3 rounded-lg text-sm">Registration is currently closed. It will open on {new Date(tournamentSettings.registrationStartDate).toLocaleDateString()}</div>}
                {regError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm">{regError}</div>}
                {regSuccess && <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded-lg text-sm">{regSuccess}</div>}

                {/* Profile & IGN */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Profile Name <span className="text-slate-600">(from account)</span></label>
                    <input
                      type="text"
                      value={currentUser?.displayName || authForm.displayName || 'Your Account Name'}
                      disabled
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg py-2 px-4 text-slate-400 cursor-not-allowed"
                    />
                    <p className="text-xs text-slate-600 mt-1">This is your account display name and cannot be changed here</p>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Smite 2 IGN *</label>
                    <input type="text" value={regSmiteIgn} onChange={(e) => setRegSmiteIgn(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="Your in-game name" />
                  </div>
                </div>

                {/* Streaming - Twitch/YouTube */}
                <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                  <label className="block text-sm text-slate-400 mb-2">Streaming Platform * <span className="text-slate-500">(at least one required)</span></label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Twitch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
                      <input type="text" value={regTwitch} onChange={(e) => setRegTwitch(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-white" placeholder="Twitch username" />
                    </div>
                    <div className="relative">
                      <Youtube size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500" />
                      <input type="text" value={regYoutube} onChange={(e) => setRegYoutube(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-white" placeholder="YouTube username" />
                    </div>
                  </div>
                </div>

                {/* MMR Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Current MMR *</label>
                    <input type="number" value={regCurrentMmr} onChange={(e) => setRegCurrentMmr(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="e.g., 1500" min="0" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Peak MMR *</label>
                    <input type="number" value={regPeakMmr} onChange={(e) => setRegPeakMmr(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="e.g., 1800" min="0" />
                  </div>
                </div>

                {/* Optional Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Discord Handle</label>
                    <input type="text" value={regDiscord} onChange={(e) => setRegDiscord(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="username#1234" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Tracker Link</label>
                    <input type="text" value={regTracker} onChange={(e) => setRegTracker(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white" placeholder="https://smite.guru/profile/..." />
                  </div>
                </div>

                {/* Team Captain Toggle */}
                <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm text-white font-medium">Team Captain</label>
                      <p className="text-xs text-slate-500 mt-1">Enable if you want to be available as a captain during live drafts</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRegIsTeamCaptain(!regIsTeamCaptain)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${regIsTeamCaptain ? 'bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
                    >
                      {regIsTeamCaptain ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                      {regIsTeamCaptain ? 'YES' : 'NO'}
                    </button>
                  </div>
                </div>

                {/* Roles */}
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

                <button onClick={handleRegister} disabled={isRegLoading || !tournamentSettings.registrationOpen} className="w-full py-3 bg-mythic-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isRegLoading ? <Loader2 className="animate-spin" size={18} /> : tournamentSettings.registrationOpen ? 'Register for Tournament' : 'Registration Closed'}
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

              {/* Registration Period Control */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2"><ClipboardList size={20} className="text-mythic-gold" /> Registration Control</h3>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="flex-1 flex items-center justify-between p-4 bg-slate-950 rounded-lg border border-slate-800">
                    <div>
                      <div className="font-bold text-white">Registration Status</div>
                      <div className="text-xs text-slate-500">
                        {tournamentSettings.registrationStartDate ? new Date(tournamentSettings.registrationStartDate).toLocaleDateString() : 'N/A'} - {tournamentSettings.registrationEndDate ? new Date(tournamentSettings.registrationEndDate).toLocaleDateString() : 'N/A'}
                      </div>
                    </div>
                    <button onClick={handleToggleRegistration} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${tournamentSettings.registrationOpen ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                      {tournamentSettings.registrationOpen ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                      {tournamentSettings.registrationOpen ? 'OPEN' : 'CLOSED'}
                    </button>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Registration Opens</label>
                    <input 
                      type="datetime-local" 
                      value={tournamentSettings.registrationStartDate ? new Date(tournamentSettings.registrationStartDate).toISOString().slice(0, 16) : ''}
                      onChange={(e) => handleUpdateRegistrationStart(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Registration Closes</label>
                    <input 
                      type="datetime-local" 
                      value={tournamentSettings.registrationEndDate ? new Date(tournamentSettings.registrationEndDate).toISOString().slice(0, 16) : ''}
                      onChange={(e) => handleUpdateRegistrationEnd(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                    />
                  </div>
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
                      onChange={(e) => handleUpdateTournamentName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Current Month Label</label>
                    <input 
                      type="text" 
                      value={tournamentSettings.currentMonth} 
                      onChange={(e) => handleUpdateCurrentMonth(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                      placeholder="December 2024"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Tournament Mode</label>
                    <select 
                      value={tournamentSettings.mode} 
                      onChange={(e) => handleUpdateTournamentMode(e.target.value as 'random' | 'draft')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                    >
                      <option value="random">Random Teams (Matches)</option>
                      <option value="draft">Draft Mode (Teams)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Player MMR Management */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50"><h3 className="font-bold text-white flex items-center gap-2"><Users size={20} className="text-mythic-gold" /> Player MMR ({players.length})</h3></div>
                <div className="p-4 space-y-4">
                  {/* Search Bar */}
                  <input 
                    type="text" 
                    placeholder="Search players..." 
                    value={playerSearchQuery}
                    onChange={(e) => {
                      setPlayerSearchQuery(e.target.value);
                      setPlayerMMRPage(0);
                    }}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200 placeholder-slate-500"
                  />
                  
                  {/* Table */}
                  <div className="max-h-[500px] overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="text-xs uppercase text-slate-500 sticky top-0 bg-slate-900">
                        <tr>
                          <th className="text-left py-2 px-2">Player</th>
                          <th className="text-left py-2 px-2">IGN</th>
                          <th className="text-center py-2 px-2">Checked In</th>
                          <th className="text-center py-2 px-2">Current MMR</th>
                          <th className="text-center py-2 px-2">Peak MMR</th>
                          <th className="text-center py-2 px-2">Rank</th>
                          <th className="text-left py-2 px-2">Socials</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {players
                          .filter(p => p.name.toLowerCase().includes(playerSearchQuery.toLowerCase()))
                          .slice(playerMMRPage * PLAYERS_PER_PAGE, (playerMMRPage + 1) * PLAYERS_PER_PAGE)
                          .map(p => (
                          <tr key={p.id} className="hover:bg-slate-800/30">
                            <td className="py-3 px-2">
                              <div className="flex items-center gap-2">
                                <span className="text-white font-medium">{p.name}</span>
                                {(p as any).isTeamCaptain && <Crown size={14} className="text-mythic-gold" title="Team Captain" />}
                              </div>
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="text"
                                defaultValue={(p as any).smiteIgn || ''}
                                onBlur={(e) => handleUpdatePlayerField(p.id, 'smiteIgn', e.target.value)}
                                placeholder="IGN"
                                className="w-28 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-slate-300 text-xs"
                              />
                            </td>
                            <td className="py-3 px-2 text-center">
                              {(p as any).checkedIn ? <span className="text-green-400">✓</span> : <span className="text-slate-600">—</span>}
                            </td>
                            <td className="py-3 px-2 text-center">
                              <input
                                type="number"
                                defaultValue={(p as any).currentMmr || p.mmr || 0}
                                onBlur={(e) => {
                                  const val = parseInt(e.target.value) || 0;
                                  handleUpdatePlayerField(p.id, 'currentMmr', val);
                                  handleUpdateMMR(p.id, val); // Also update legacy mmr field
                                }}
                                className="w-20 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-mythic-gold font-mono text-sm"
                              />
                            </td>
                            <td className="py-3 px-2 text-center">
                              <input
                                type="number"
                                defaultValue={(p as any).peakMmr || 0}
                                onBlur={(e) => handleUpdatePlayerField(p.id, 'peakMmr', parseInt(e.target.value) || 0)}
                                className="w-20 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-cyan-400 font-mono text-sm"
                              />
                            </td>
                            <td className="py-3 px-2 text-center">
                              <RankBadge mmr={(p as any).currentMmr || p.mmr || 0} showSR={false} size="sm" />
                            </td>
                            <td className="py-3 px-2">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                  <Twitch size={12} className="text-purple-400 flex-shrink-0" />
                                  <input
                                    type="text"
                                    defaultValue={(p as any).twitchUsername || ''}
                                    onBlur={(e) => handleUpdatePlayerField(p.id, 'twitchUsername', e.target.value)}
                                    placeholder="Twitch"
                                    className="w-24 bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-purple-400 text-xs"
                                  />
                                </div>
                                <div className="flex items-center gap-1">
                                  <Youtube size={12} className="text-red-500 flex-shrink-0" />
                                  <input
                                    type="text"
                                    defaultValue={(p as any).youtubeUsername || ''}
                                    onBlur={(e) => handleUpdatePlayerField(p.id, 'youtubeUsername', e.target.value)}
                                    placeholder="YouTube"
                                    className="w-24 bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-red-500 text-xs"
                                  />
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageSquare size={12} className="text-indigo-400 flex-shrink-0" />
                                  <input
                                    type="text"
                                    defaultValue={(p as any).discord || ''}
                                    onBlur={(e) => handleUpdatePlayerField(p.id, 'discord', e.target.value)}
                                    placeholder="Discord"
                                    className="w-24 bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-indigo-400 text-xs"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {Math.ceil(players.filter(p => p.name.toLowerCase().includes(playerSearchQuery.toLowerCase())).length / PLAYERS_PER_PAGE) > 1 && (
                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <span className="text-xs text-slate-400">
                        Page {playerMMRPage + 1} of {Math.ceil(players.filter(p => p.name.toLowerCase().includes(playerSearchQuery.toLowerCase())).length / PLAYERS_PER_PAGE)}
                      </span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setPlayerMMRPage(p => Math.max(0, p - 1))}
                          disabled={playerMMRPage === 0}
                          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 rounded text-xs font-mono"
                        >
                          ← Prev
                        </button>
                        <button 
                          onClick={() => setPlayerMMRPage(p => p + 1)}
                          disabled={playerMMRPage >= Math.ceil(players.filter(p => p.name.toLowerCase().includes(playerSearchQuery.toLowerCase())).length / PLAYERS_PER_PAGE) - 1}
                          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 rounded text-xs font-mono"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Match Recording */}
              <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50"><h3 className="font-bold text-white flex items-center gap-2"><Swords size={20} className="text-mythic-gold" /> Record Match</h3></div>
                <div className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Order */}
                    <div className="space-y-3">
                      <input type="text" value={matchForm.team1Name} onChange={(e) => setMatchForm(f => ({ ...f, team1Name: e.target.value }))} placeholder="Order" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200 font-bold" disabled />
                      {matchForm.team1Players.map((p, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex gap-2 items-center">
                            <div className="flex-1"><PlayerAutocomplete value={p.name} onChange={(v) => updateMatchPlayer('team1Players', i, 'name', v)} players={players} placeholder={`Player ${i + 1}`} /></div>
                            <select value={p.role} onChange={(e) => updateMatchPlayer('team1Players', i, 'role', e.target.value as TournamentRole)} className="w-20 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-slate-200 text-xs">
                              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                          </div>
                          <div className="flex gap-1 ml-auto">
                            <input type="number" value={p.kills} onChange={(e) => updateMatchPlayer('team1Players', i, 'kills', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-green-400 text-xs" placeholder="K" />
                            <input type="number" value={p.deaths} onChange={(e) => updateMatchPlayer('team1Players', i, 'deaths', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-red-400 text-xs" placeholder="D" />
                            <input type="number" value={p.assists} onChange={(e) => updateMatchPlayer('team1Players', i, 'assists', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-blue-400 text-xs" placeholder="A" />
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Chaos */}
                    <div className="space-y-3">
                      <input type="text" value={matchForm.team2Name} onChange={(e) => setMatchForm(f => ({ ...f, team2Name: e.target.value }))} placeholder="Chaos" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200 font-bold" disabled />
                      {matchForm.team2Players.map((p, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex gap-2 items-center">
                            <div className="flex-1"><PlayerAutocomplete value={p.name} onChange={(v) => updateMatchPlayer('team2Players', i, 'name', v)} players={players} placeholder={`Player ${i + 1}`} /></div>
                            <select value={p.role} onChange={(e) => updateMatchPlayer('team2Players', i, 'role', e.target.value as TournamentRole)} className="w-20 bg-slate-950 border border-slate-700 rounded px-2 py-2 text-slate-200 text-xs">
                              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                          </div>
                          <div className="flex gap-1 ml-auto">
                            <input type="number" value={p.kills} onChange={(e) => updateMatchPlayer('team2Players', i, 'kills', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-green-400 text-xs" placeholder="K" />
                            <input type="number" value={p.deaths} onChange={(e) => updateMatchPlayer('team2Players', i, 'deaths', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-red-400 text-xs" placeholder="D" />
                            <input type="number" value={p.assists} onChange={(e) => updateMatchPlayer('team2Players', i, 'assists', +e.target.value)} className="w-12 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-blue-400 text-xs" placeholder="A" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <label className="text-sm text-slate-400">Winner:</label>
                    <select value={matchForm.winner} onChange={(e) => setMatchForm(f => ({ ...f, winner: e.target.value }))} className="bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200"><option>Order</option><option>Chaos</option></select>
                    <button onClick={handleRecordMatch} disabled={isSubmittingMatch} className="ml-auto px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg disabled:opacity-50 flex items-center gap-2">
                      {isSubmittingMatch ? <Loader2 className="animate-spin" size={18} /> : <><CheckCircle2 size={18} /> Record Match</>}
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Draft System (Only for Draft Mode) */}
              {tournamentSettings.mode === 'draft' && (
                <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                    <h3 className="font-bold text-white flex items-center gap-2"><Swords size={20} className="text-mythic-gold" /> Live Draft System</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {!isDraftOpen && !showCaptainSelector ? (
                      // Admin Controls - Start Draft
                      <div className="space-y-4">
                        <p className="text-slate-400 text-sm">Start a live draft where you select captains and they pick their teammates in turns.</p>
                        {isAdmin && (
                          <div className="flex gap-3">
                            <button 
                              onClick={handleStartDraft}
                              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg flex items-center gap-2 transition-all"
                            >
                              <Zap size={18} /> Start Draft
                            </button>
                          </div>
                        )}
                      </div>
                    ) : showCaptainSelector ? (
                      // Captain Selection Dialog
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-white mb-3">Select Team Captains</h4>
                          <p className="text-xs text-slate-500 mb-4">Choose which checked-in players will be team captains. Each captain will pick 4 teammates in turn.</p>
                          <div className="grid md:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                            {players.filter(p => (p as any).checkedIn).map(player => (
                              <button
                                key={player.id}
                                onClick={() => {
                                  if (selectedCaptains.includes(player.id)) {
                                    setSelectedCaptains(selectedCaptains.filter(id => id !== player.id));
                                  } else {
                                    setSelectedCaptains([...selectedCaptains, player.id]);
                                  }
                                }}
                                className={`p-3 rounded-lg border-2 transition-all text-left ${
                                  selectedCaptains.includes(player.id)
                                    ? 'bg-mythic-gold/20 border-mythic-gold'
                                    : 'bg-slate-950 border-slate-700 hover:border-slate-600'
                                }`}
                              >
                                <div className="font-bold text-white flex items-center justify-between">
                                  {player.name}
                                  {selectedCaptains.includes(player.id) && <span className="text-mythic-gold">✓</span>}
                                </div>
                                <div className="text-xs text-slate-400 mt-1">{player.primaryRole} • {player.mmr} MMR</div>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 justify-end pt-4 border-t border-slate-700">
                          <button 
                            onClick={() => {
                              setShowCaptainSelector(false);
                              setSelectedCaptains([]);
                            }}
                            className="px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold rounded-lg transition-all"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={handleConfirmCaptains}
                            disabled={selectedCaptains.length < 1}
                            className="px-6 py-2 bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/50 hover:bg-mythic-gold/30 font-bold rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <CheckCircle2 size={18} /> Start with {selectedCaptains.length} Captains
                          </button>
                        </div>
                      </div>
                    ) : (
                      // Live Draft In Progress
                      <div className="space-y-6">
                        {/* Captains List with Turn Order */}
                        <div>
                          <h4 className="font-bold text-white mb-3 flex items-center gap-2"><Users size={16} /> Team Captains - Turn Order</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {draftSession?.captains?.map((captain) => {
                              const isCurrentPicking = draftSession?.pickOrder[draftSession?.currentPickIndex % draftSession?.pickOrder?.length] === captain.playerId;
                              const isCaptainUser = currentUser?.uid === captain.playerId;
                              return (
                                <div 
                                  key={captain.playerId} 
                                  className={`p-3 rounded-lg border-2 transition-all ${
                                    isCurrentPicking 
                                      ? 'bg-yellow-500/20 border-yellow-500 ring-2 ring-yellow-500/50' 
                                      : isCaptainUser
                                      ? 'bg-mythic-gold/20 border-mythic-gold/50'
                                      : 'bg-slate-950 border-slate-700'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="font-bold text-white flex items-center gap-2">
                                        {captain.name}
                                        {isCurrentPicking && <span className="text-xs bg-yellow-500 text-slate-900 px-2 py-0.5 rounded font-bold">PICKING NOW</span>}
                                      </div>
                                      <div className="text-xs text-slate-500">{captain.selectedCount}/4 players selected</div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-xs font-mono text-slate-400">{captain.mmr} MMR</div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Current Picker Status */}
                        {draftSession && (
                          <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
                            <div className="text-center">
                              <div className="text-xs text-slate-500 mb-1">Round {draftSession.round}/4</div>
                              <div className="text-sm font-bold text-white">
                                {draftSession.pickOrder && draftSession.pickOrder[draftSession.currentPickIndex % draftSession.pickOrder.length] === currentUser?.uid
                                  ? '🎯 It\'s YOUR turn to pick!'
                                  : `Waiting for ${draftSession.captains.find(c => c.playerId === draftSession.pickOrder[draftSession.currentPickIndex % draftSession.pickOrder.length])?.name || 'a captain'} to pick...`
                                }
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Available Players for Selection */}
                        {isCaptain && draftSession?.pickOrder[draftSession?.currentPickIndex % draftSession?.pickOrder?.length] === currentUser?.uid && (
                          <div>
                            <h4 className="font-bold text-white mb-3">Your Turn - Select a Player</h4>
                            <div className="grid md:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                              {players.filter(p => 
                                draftSession?.availablePlayers?.includes(p.id) && 
                                p.id !== currentUser?.uid
                              ).map(player => (
                                <button
                                  key={player.id}
                                  onClick={() => handleSelectPlayer(player.id)}
                                  className="p-3 bg-slate-950 border border-slate-700 hover:border-mythic-gold/50 rounded-lg text-left transition-all hover:bg-slate-800"
                                >
                                  <div className="font-bold text-white text-sm">{player.name}</div>
                                  <div className="text-xs text-slate-500 flex items-center gap-1">
                                    <span className="text-mythic-gold">{player.primaryRole}</span>
                                    <span className="text-slate-600">|</span>
                                    <span className="text-slate-400">{player.mmr} MMR</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Your Selected Players */}
                        {isCaptain && (
                          <div>
                            <h4 className="font-bold text-white mb-3">Your Selected Players ({draftSession?.captains.find(c => c.playerId === currentUser?.uid)?.selectedCount || 0}/4)</h4>
                            {draftSession?.captains.find(c => c.playerId === currentUser?.uid)?.selections?.length > 0 ? (
                              <div className="space-y-2">
                                {draftSession?.captains.find(c => c.playerId === currentUser?.uid)?.selections.map((playerId, idx) => {
                                  const player = players.find(p => p.id === playerId);
                                  return (
                                    <div key={playerId} className="p-2 bg-green-500/20 border border-green-500/30 rounded flex items-center justify-between">
                                      <span className="text-white font-semibold">{idx + 1}. {player?.name}</span>
                                      <span className="text-xs text-green-400">{player?.primaryRole}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="text-slate-500 text-sm">No players selected yet</div>
                            )}
                          </div>
                        )}

                        {/* Admin Controls */}
                        {isAdmin && (
                          <div className="flex gap-3 justify-end pt-4 border-t border-slate-700">
                            <button 
                              onClick={handleCancelDraft}
                              className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 font-bold rounded-lg transition-all"
                            >
                              Cancel Draft
                            </button>
                            {draftSession?.status === 'completed' && (
                              <button 
                                onClick={handleCompleteDraft}
                                className="px-6 py-2 bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/50 hover:bg-mythic-gold/30 font-bold rounded-lg flex items-center gap-2 transition-all"
                              >
                                <CheckCircle2 size={18} /> Create Teams
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Draft Team Creation (Only for Draft Mode) */}
              {tournamentSettings.mode === 'draft' && (
                <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-800 bg-slate-950/50"><h3 className="font-bold text-white flex items-center gap-2"><Users size={20} className="text-mythic-gold" /> Create Draft Team</h3></div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Team Name</label>
                      <input 
                        type="text" 
                        value={draftTeamForm.name}
                        onChange={(e) => setDraftTeamForm({ ...draftTeamForm, name: e.target.value })}
                        placeholder="e.g., Phoenix Rising"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Team Captain</label>
                        <PlayerAutocomplete 
                          value={draftTeamForm.captainName}
                          onChange={(name) => {
                            const player = players.find(p => p.name === name);
                            setDraftTeamForm({ ...draftTeamForm, captainName: name, captainId: player?.id || '' });
                          }}
                          players={players}
                          placeholder="Select captain"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Member 2</label>
                        <PlayerAutocomplete 
                          value={draftTeamForm.member2Name}
                          onChange={(name) => {
                            const player = players.find(p => p.name === name);
                            setDraftTeamForm({ ...draftTeamForm, member2Name: name, member2Id: player?.id || '' });
                          }}
                          players={players}
                          placeholder="Select member"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Member 3</label>
                        <PlayerAutocomplete 
                          value={draftTeamForm.member3Name}
                          onChange={(name) => {
                            const player = players.find(p => p.name === name);
                            setDraftTeamForm({ ...draftTeamForm, member3Name: name, member3Id: player?.id || '' });
                          }}
                          players={players}
                          placeholder="Select member"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Member 4</label>
                        <PlayerAutocomplete 
                          value={draftTeamForm.member4Name}
                          onChange={(name) => {
                            const player = players.find(p => p.name === name);
                            setDraftTeamForm({ ...draftTeamForm, member4Name: name, member4Id: player?.id || '' });
                          }}
                          players={players}
                          placeholder="Select member"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Member 5</label>
                        <PlayerAutocomplete 
                          value={draftTeamForm.member5Name}
                          onChange={(name) => {
                            const player = players.find(p => p.name === name);
                            setDraftTeamForm({ ...draftTeamForm, member5Name: name, member5Id: player?.id || '' });
                          }}
                          players={players}
                          placeholder="Select member"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={handleCreateDraftTeam}
                        disabled={isCreatingDraftTeam}
                        className="px-6 py-2 bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/50 hover:bg-mythic-gold/30 font-bold rounded-lg disabled:opacity-50 flex items-center gap-2 transition-all"
                      >
                        {isCreatingDraftTeam ? <Loader2 className="animate-spin" size={18} /> : <><CheckCircle2 size={18} /> Create Team</>}
                      </button>
                    </div>
                  </div>
                </div>
              )}

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

      {/* Edit Match Modal */}
      {editingMatchId && editMatchForm && isAdmin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <h3 className="font-bold text-white text-lg mb-4">Edit Match</h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Winner</label>
                  <select 
                    value={editMatchForm.winner}
                    onChange={(e) => setEditMatchForm({ ...editMatchForm, winner: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                  >
                    <option value="Order">Order</option>
                    <option value="Chaos">Chaos</option>
                  </select>
                </div>
              </div>

              {/* Team 1 Stats */}
              <div className="border-t border-slate-700 pt-4">
                <h4 className="font-bold text-white mb-3">{editMatchForm.team1?.name || 'Order'}</h4>
                <div className="space-y-2">
                  {editMatchForm.team1?.players?.map((player: any, idx: number) => (
                    <div key={idx} className="grid grid-cols-4 gap-2 items-center p-2 bg-slate-950 rounded-lg">
                      <div className="text-white text-sm font-semibold">{player.name}</div>
                      <input 
                        type="number" 
                        value={player.kills}
                        onChange={(e) => {
                          const updated = { ...editMatchForm };
                          updated.team1.players[idx].kills = parseInt(e.target.value) || 0;
                          setEditMatchForm(updated);
                        }}
                        placeholder="K"
                        className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-sm text-center"
                      />
                      <input 
                        type="number" 
                        value={player.deaths}
                        onChange={(e) => {
                          const updated = { ...editMatchForm };
                          updated.team1.players[idx].deaths = parseInt(e.target.value) || 0;
                          setEditMatchForm(updated);
                        }}
                        placeholder="D"
                        className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-sm text-center"
                      />
                      <input 
                        type="number" 
                        value={player.assists}
                        onChange={(e) => {
                          const updated = { ...editMatchForm };
                          updated.team1.players[idx].assists = parseInt(e.target.value) || 0;
                          setEditMatchForm(updated);
                        }}
                        placeholder="A"
                        className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-sm text-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Team 2 Stats */}
              <div className="border-t border-slate-700 pt-4">
                <h4 className="font-bold text-white mb-3">{editMatchForm.team2?.name || 'Chaos'}</h4>
                <div className="space-y-2">
                  {editMatchForm.team2?.players?.map((player: any, idx: number) => (
                    <div key={idx} className="grid grid-cols-4 gap-2 items-center p-2 bg-slate-950 rounded-lg">
                      <div className="text-white text-sm font-semibold">{player.name}</div>
                      <input 
                        type="number" 
                        value={player.kills}
                        onChange={(e) => {
                          const updated = { ...editMatchForm };
                          updated.team2.players[idx].kills = parseInt(e.target.value) || 0;
                          setEditMatchForm(updated);
                        }}
                        placeholder="K"
                        className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-sm text-center"
                      />
                      <input 
                        type="number" 
                        value={player.deaths}
                        onChange={(e) => {
                          const updated = { ...editMatchForm };
                          updated.team2.players[idx].deaths = parseInt(e.target.value) || 0;
                          setEditMatchForm(updated);
                        }}
                        placeholder="D"
                        className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-sm text-center"
                      />
                      <input 
                        type="number" 
                        value={player.assists}
                        onChange={(e) => {
                          const updated = { ...editMatchForm };
                          updated.team2.players[idx].assists = parseInt(e.target.value) || 0;
                          setEditMatchForm(updated);
                        }}
                        placeholder="A"
                        className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-sm text-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-6 pt-4 border-t border-slate-700">
              <button 
                onClick={() => {
                  setEditingMatchId(null);
                  setEditMatchForm(null);
                }}
                className="px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveMatchEdit}
                className="px-6 py-2 bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/50 hover:bg-mythic-gold/30 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                <CheckCircle2 size={18} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};