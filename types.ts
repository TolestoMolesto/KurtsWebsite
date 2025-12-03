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

// Update your Ability interface to include subAbilities:
export interface Ability {
  name: string;
  description: string;
  cooldown: string;
  cost: string;
  image?: string;
  attributes?: { label: string; value: string }[];
  subAbilities?: SubAbility[];  // ADD THIS LINE
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

export interface TournamentPlayer {
  id: string;
  name: string;
  trackerLink?: string;
  primaryRole: TournamentRole;
  offRoles: TournamentRole[];
  mmr: number;
  kills: number;
  deaths: number;
  assists: number;
  score: number;
  matchesPlayed?: number;
  wins?: number;
}

export interface TournamentTeam {
  id: string;
  name: string;
  players: TournamentPlayer[];
  totalScore: number;
  isWinner?: boolean;
}

export interface TournamentMatch {
  id: string;
  team1: TournamentTeam;
  team2: TournamentTeam;
  winnerId?: string;
  nextMatchId?: string;
  date: string;
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