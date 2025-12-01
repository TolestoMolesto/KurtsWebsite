

export enum DamageType {
  Physical = 'Physical',
  Magical = 'Magical'
}

export interface AbilityStat {
  label: string;
  value: string;
}

// Add this new interface BEFORE the Ability interface

export interface SubAbility {
  name: string;
  description: string;
  image?: string;
  attributes?: AbilityStat[];
}

// Update the existing Ability interface to include subAbilities
export interface Ability {
  name: string;
  description: string;
  cooldown: string;
  cost: string;
  image?: string;
  attributes?: AbilityStat[];
  subAbilities?: SubAbility[]; // NEW - for stance/phase abilities like Combat Dodge / Spear Strike
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
  levelingOrder?: number[]; // Array of 20 integers representing ability index (1-4) to level up
}

export interface GodStats {
  strength: number;
  intelligence: number;
  attackSpeed: number;
  lifesteal: number;
  critChance: number;
  critDamage: number; // Multiplier (e.g., 1.25 for 125%)
  penetration: number;
  physicalProtection: number;
  magicalProtection: number;
  maxHealth: number;
  healthRegen: number;
  maxMana: number;
  manaRegen: number;
  cooldownRate: number;
  movementSpeed: number;
}

export interface RecommendedBuild {
  name: string;
  author: string;
  role: string;
  starterId: string;
  itemIds: (string | null)[]; // Array of 6 item IDs
  relicId: string;
  aspectId?: string; // Optional: Link build to a specific aspect. 'base' for base kit.
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
  statsByLevel: GodStats[]; // Array of 20 GodStats objects (Index 0 = Level 1, Index 19 = Level 20)
  recommendedBuilds: RecommendedBuild[];
  levelingOrder: number[]; // Array of 20 integers (1-4)
  goodAgainst: string[]; // Array of God IDs
  badAgainst: string[]; // Array of God IDs
  aspectLevelingOrders?: Record<string, number[]>; // Overrides for aspect leveling
  aspectMatchups?: Record<string, AspectMatchupData>; // Overrides for aspect matchups
  videoGuideUrl?: string; // YouTube URL for a guide
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
  buildsFrom?: string[]; // IDs of items required to build this
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
  type?: 'gods' | 'items'; // Differentiate between list types
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
  isWinner?: boolean; // For bracket visualization
}

export interface TournamentMatch {
  id: string;
  team1: TournamentTeam;
  team2: TournamentTeam;
  winnerId?: string;
  nextMatchId?: string; // To draw lines
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