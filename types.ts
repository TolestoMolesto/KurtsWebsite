export enum DamageType {
  Physical = 'Physical',
  Magical = 'Magical'
}

export interface AbilityStat {
  label: string;
  value: string;
}

export interface SubAbility {
  name: string;
  description: string;
  image?: string;
  attributes?: { label: string; value: string }[];
}

export interface PassiveStanceBonus {
  stat: keyof GodStats;
  base: number;
  perLevel: number;
  isPercent?: boolean;
}

export interface PassiveStanceAbilityEffect {
  abilityNum: 1 | 2 | 3 | 4;
  description: string;
  // Optional: actual modifications for damage calc
  bonusScaling?: string;      // e.g., "+15% Strength"
  bonusValue?: number;        // e.g., 0.2 for +0.2s stun
}

export interface PassiveStance {
  id: string;                 // 'armored', 'unarmored', 'blade', 'bow', etc.
  name: string;               // Display name
  icon: 'shield' | 'sword' | 'zap' | 'target' | 'flame' | 'snowflake';
  color: 'cyan' | 'orange' | 'red' | 'blue' | 'purple' | 'green' | 'yellow';
  statBonuses: PassiveStanceBonus[];
  abilityEffects?: PassiveStanceAbilityEffect[];
}

// Update the Ability interface to include optional stances
export interface Ability {
  name: string;
  description: string;
  cooldown: string;
  cost: string;
  image?: string;
  attributes?: { label: string; value: string }[];
  subAbilities?: SubAbility[];
  // NEW: For toggle passives
  stances?: PassiveStance[];
  defaultStance?: string;
}

export interface AbilityKit {
  passive: Ability;
  abilities: {
    1: Ability;
    2: Ability;
    3: Ability;
    4: Ability;
  };
  basicAttack: Ability;
}

export interface Aspect extends AbilityKit {
  id: string;
  name: string;
  description: string;
  image?: string;
  levelingOrder?: number[];
}

// ============================================================
// UPDATED GodStats Interface
// ============================================================
export interface GodStats {
  // === OFFENSIVE STATS ===
  strength: number;
  intelligence: number;
  inhandPower: number;              // NEW - Basic Attack Power (base damage for autos)
  
  // === ATTACK SPEED ===
  baseAttackSpeed: number;          // RENAMED - Base AS (e.g., 0.97)
  attackSpeedPercent: number;       // NEW - Total AS% at this level (e.g., 2.91 at level 3)
  
  // === CRITICAL STRIKES ===
  critChance: number;
  critDamage: number;               // Multiplier (e.g., 1.65 for 165%)
  
  // === PENETRATION (SPLIT) ===
  flatPenetration: number;          // NEW - Flat pen value
  percentPenetration: number;       // NEW - % pen value (was just "penetration")
  
  // === SUSTAIN ===
  lifesteal: number;
  
  // === DEFENSIVE STATS ===
  physicalProtection: number;
  magicalProtection: number;
  damageMitigation: number;         // NEW - Damage mitigation %
  
  // === HEALTH & MANA ===
  maxHealth: number;
  healthRegen: number;              // HP5 / Health Per Time
  maxMana: number;
  manaRegen: number;                // MP5 / Mana Per Time
  
  // === UTILITY ===
  cooldownRate: number;
  movementSpeed: number;
  
  // === PROGRESSION ===
  xpRequirement: number;            // NEW - XP to next level
}

// Default stats for initialization
export const DEFAULT_GOD_STATS: GodStats = {
  strength: 0,
  intelligence: 0,
  inhandPower: 0,
  baseAttackSpeed: 1.0,
  attackSpeedPercent: 0,
  critChance: 0,
  critDamage: 1.65,
  flatPenetration: 0,
  percentPenetration: 0,
  lifesteal: 0,
  physicalProtection: 0,
  magicalProtection: 0,
  damageMitigation: 0,
  maxHealth: 0,
  healthRegen: 0,
  maxMana: 0,
  manaRegen: 0,
  cooldownRate: 0,
  movementSpeed: 0,
  xpRequirement: 0,
};

export interface RecommendedBuild {
  name: string;
  author: string;
  role: string;
  starterId: string;
  itemIds: (string | null)[];
  relicId: string;
  aspectId?: string;
}

export interface AspectMatchupData {
  goodAgainst: string[];
  badAgainst: string[];
}

export interface God extends AbilityKit {
  id: string;
  name: string;
  title: string;
  pantheon: string;
  role: string; 
  lanes: string[]; 
  damageType: DamageType;
  image: string;
  aspects: Aspect[];
  statsByLevel: GodStats[];
  recommendedBuilds: RecommendedBuild[];
  levelingOrder: number[];
  goodAgainst: string[];
  badAgainst: string[];
  aspectLevelingOrders?: Record<string, number[]>;
  aspectMatchups?: Record<string, AspectMatchupData>;
  videoGuideUrl?: string;
}

export type ItemTier = 1 | 2 | 3;
export type ItemType = 'Item' | 'Consumable' | 'Starter' | 'Active' | 'Relic' | 'Curio' | 'Map Droppable' | 'God Specific';

export interface Item {
  id: string;
  name: string;
  cost: number;
  tier?: ItemTier; 
  type: ItemType;
  stats: Record<string, string>;
  passive?: string;
  image: string;
  category: 'Offense' | 'Defense' | 'Utility' | 'Hybrid';
  buildsFrom?: string[];
  god?: string;
  dot?: {
    baseDamage: number;
    scaling: number;        // e.g., 35 for 35% Strength
    scalingStat: 'strength' | 'intelligence';
    duration: number;       // in seconds
    hitsPerSecond: number;  // e.g., 2 for 2 ticks per second
    bonusDuration?: number; // for subsequent hits (e.g., Crusher has 3s bonus duration)
    bonusScaling?: number;  // e.g., 0.5 for 50% bonus damage = halved
  };
}

export enum TierRank {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export interface TierListState {
  [TierRank.S]: string[];
  [TierRank.A]: string[];
  [TierRank.B]: string[];
  [TierRank.C]: string[];
  [TierRank.D]: string[];
  pool: string[]; 
}

export interface NamedTierList {
  id: string;
  name: string;
  author: string;
  description: string;
  date: string;
  type?: 'gods' | 'items';
  data: TierListState;
  streamerInfo: {
    platform: 'twitch' | 'youtube';
    url: string;
    isLive: boolean;
    secondaryUrl?: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

// --- TOURNAMENT TYPES ---
export type TournamentRole = 'Solo' | 'Jungle' | 'Mid' | 'Carry' | 'Support';
export type TournamentPlayerStatus = 'active' | 'checked_in' | 'eliminated' | 'banned' | 'inactive';
export type TournamentBracketType = 'round_robin' | 'single_elimination' | 'double_elimination';
export type TournamentMatchStatus = 'pending' | 'verified' | 'disputed' | 'cancelled';
export type TournamentModeType = 'random' | 'draft';

export interface TournamentPlayerStats {
  score: number;
  wins: number;
  losses: number;
  matchesPlayed: number;
  kills: number;
  deaths: number;
  assists: number;
}

export interface TournamentPlayer {
  id: string;
  name: string;                    // Profile Name
  smiteIgn: string;                // Smite 2 In-Game Name
  discord?: string;
  trackerLink?: string;

  // Streaming - at least one required
  twitchUsername?: string;
  youtubeUsername?: string;

  // MMR
  currentMmr: number;
  peakMmr: number;
  mmr: number;                     // Legacy field for compatibility

  // Draft
  isTeamCaptain: boolean;          // If true, appears in captain selection for live drafts

  primaryRole: TournamentRole;
  offRoles: TournamentRole[];

  // Stats
  stats: TournamentPlayerStats;

  // Status
  status: TournamentPlayerStatus;
  checkedIn: boolean;

  // Tournament relationship
  tournamentId: string;

  // Audit
  createdAt: string;
  updatedAt: string;
  notes?: string;
  flags?: ('disputed' | 'pending_review' | 'banned')[];
}

export interface TournamentMatchPlayer {
  name: string;
  kills: number;
  deaths: number;
  assists: number;
  verified?: boolean;
}

export interface TournamentMatchVersion {
  timestamp: string;
  snapshot: any;
  editedBy: string;
  reason?: string;
}

export interface TournamentMatch {
  id: string;
  tournamentId: string;
  date: string;
  status: TournamentMatchStatus;
  
  team1: {
    name: string;
    players: TournamentMatchPlayer[];
  };
  team2: {
    name: string;
    players: TournamentMatchPlayer[];
  };
  
  winner: 'Team 1' | 'Team 2';
  
  // Metadata
  submittedAt: string;
  submittedBy: string;
  verifiedAt?: string;
  verifiedBy?: string;
  
  // Versioning
  versions?: TournamentMatchVersion[];
}

export interface DraftTeamMember {
  playerId: string;
  name: string;
  isCaptain: boolean;
  primaryRole: TournamentRole;
  offRoles: TournamentRole[];
  mmr: number;
}

export interface DraftSession {
  id: string;
  tournamentId: string;
  status: 'not_started' | 'captain_selection' | 'picking' | 'completed';
  captains: Array<{
    playerId: string;
    name: string;
    mmr: number;
    selections: string[]; // Player IDs
    selectedCount: number;
  }>;
  availablePlayers: string[]; // Player IDs not yet selected
  currentPickIndex: number; // Which captain's turn it is
  pickOrder: string[]; // Order of captain IDs for round-robin
  round: number; // Which round of picking (1-4 for 4 players per team)
  completedAt?: string;
  createdAt: string;
}

export interface DraftTeam {
  id: string;
  tournamentId: string;
  name: string;
  customName: string;
  members: DraftTeamMember[];
  score: number;
  wins: number;
  losses: number;
  createdAt: string;
  createdBy: string;
  notes?: string;
}

export interface Tournament {
  id: string;
  month: string;
  year: number;
  startDate: string;
  endDate: string;
  status: 'planning' | 'active' | 'completed' | 'archived';
  bracketType: TournamentBracketType;
  mode: TournamentModeType;
  prizePool?: number;
  checkInOpen: boolean;
  registrationOpen: boolean;
  registrationStartDate?: string;
  registrationEndDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  action: 'player_created' | 'player_edited' | 'player_deleted' | 'match_created' | 'match_edited' | 'match_deleted' | 'match_verified' | 'tournament_created' | 'tournament_updated';
  entityType: 'player' | 'match' | 'tournament';
  entityId: string;
  changes?: Record<string, any>;
  changedBy: string;
  timestamp: string;
  reason?: string;
}

export interface TournamentTeam {
  id: string;
  name: string;
  players: TournamentPlayer[];
  totalScore: number;
  isWinner?: boolean;
}

export interface TournamentRound {
  name: string;
  matches: TournamentMatch[];
}

export interface Tournament {
  id: string;
  name: string;
  rounds: TournamentRound[];
}

export interface ScheduledMatch {
  id: string;
  tournamentId: string;
  team1Id: string;
  team2Id: string;
  scheduledDate: string;
  scheduledTime?: string;
  week: number;
  status: 'scheduled' | 'in_progress' | 'completed' | 'postponed';
  matchId?: string; // Link to actual TournamentMatch when completed
  notes?: string;
}

export interface TournamentSchedule {
  id: string;
  tournamentId: string;
  startDate: string;
  endDate: string;
  weeks: {
    weekNumber: number;
    startDate: string;
    endDate: string;
    matches: ScheduledMatch[];
  }[];
  createdAt: string;
  updatedAt: string;
}