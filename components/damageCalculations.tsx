import { God, GodStats, Item, Ability, DamageType } from '../types';

// ============================================================
// STAT PARSING UTILITIES
// ============================================================

// Normalize stat keys to a consistent format
const statKeyMap: Record<string, keyof GodStats> = {
  'strength': 'strength',
  'str': 'strength',
  'intelligence': 'intelligence',
  'int': 'intelligence',
  'attack speed': 'attackSpeed',
  'atk speed': 'attackSpeed',
  'lifesteal': 'lifesteal',
  'life steal': 'lifesteal',
  'crit chance': 'critChance',
  'critical chance': 'critChance',
  'crit damage': 'critDamage',
  'critical damage': 'critDamage',
  'penetration': 'penetration',
  'pen': 'penetration',
  'physical protection': 'physicalProtection',
  'phys. prot': 'physicalProtection',
  'phys prot': 'physicalProtection',
  'magical protection': 'magicalProtection',
  'mag. prot': 'magicalProtection',
  'mag prot': 'magicalProtection',
  'max health': 'maxHealth',
  'health': 'maxHealth',
  'health regen': 'healthRegen',
  'hp5': 'healthRegen',
  'max mana': 'maxMana',
  'mana': 'maxMana',
  'mana regen': 'manaRegen',
  'mp5': 'manaRegen',
  'cooldown': 'cooldownRate',
  'cooldown rate': 'cooldownRate',
  'cdr': 'cooldownRate',
  'movement speed': 'movementSpeed',
  'move speed': 'movementSpeed',
};

// Parse a stat value string like "50", "+50", "25%"
function parseStatValue(value: string): { flat: number; percent: number } {
  const cleaned = value.replace(/[+\s]/g, '');
  if (cleaned.endsWith('%')) {
    return { flat: 0, percent: parseFloat(cleaned) || 0 };
  }
  return { flat: parseFloat(cleaned) || 0, percent: 0 };
}

// Parse item stats into usable format
export function parseItemStats(item: Item): Partial<Record<keyof GodStats, { flat: number; percent: number }>> {
  const result: Partial<Record<keyof GodStats, { flat: number; percent: number }>> = {};
  
  for (const [key, value] of Object.entries(item.stats)) {
    const normalizedKey = statKeyMap[key.toLowerCase()];
    if (normalizedKey) {
      result[normalizedKey] = parseStatValue(value);
    }
    // Handle adaptive stats
    if (key.toLowerCase() === 'adaptive') {
      // Parse "+35 Str or +60 Int" - we'll use strength for physical, int for magical
      const strMatch = value.match(/(\d+)\s*str/i);
      const intMatch = value.match(/(\d+)\s*int/i);
      if (strMatch) result.strength = { flat: parseFloat(strMatch[1]), percent: 0 };
      if (intMatch) result.intelligence = { flat: parseFloat(intMatch[1]), percent: 0 };
    }
  }
  return result;
}

// ============================================================
// STAT AGGREGATION
// ============================================================

export function calculateTotalStats(
  god: God,
  level: number,
  items: (Item | null)[],
  damageType: DamageType
): GodStats {
  // Start with base stats at level
  const base = { ...god.statsByLevel[Math.max(0, Math.min(19, level - 1))] };
  
  // Track flat and percent bonuses separately
  const bonuses: Record<keyof GodStats, { flat: number; percent: number }> = {
    strength: { flat: 0, percent: 0 },
    intelligence: { flat: 0, percent: 0 },
    attackSpeed: { flat: 0, percent: 0 },
    lifesteal: { flat: 0, percent: 0 },
    critChance: { flat: 0, percent: 0 },
    critDamage: { flat: 0, percent: 0 },
    penetration: { flat: 0, percent: 0 },
    physicalProtection: { flat: 0, percent: 0 },
    magicalProtection: { flat: 0, percent: 0 },
    maxHealth: { flat: 0, percent: 0 },
    healthRegen: { flat: 0, percent: 0 },
    maxMana: { flat: 0, percent: 0 },
    manaRegen: { flat: 0, percent: 0 },
    cooldownRate: { flat: 0, percent: 0 },
    movementSpeed: { flat: 0, percent: 0 },
  };

  // Aggregate item stats
  for (const item of items) {
    if (!item) continue;
    const parsed = parseItemStats(item);
    for (const [stat, values] of Object.entries(parsed)) {
      const key = stat as keyof GodStats;
      if (bonuses[key]) {
        bonuses[key].flat += values.flat;
        bonuses[key].percent += values.percent;
      }
    }
  }

  // Apply bonuses to base stats
  const total: GodStats = { ...base };
  for (const key of Object.keys(bonuses) as (keyof GodStats)[]) {
    const bonus = bonuses[key];
    // For most stats: base + flat + (base * percent / 100)
    // For attack speed: it's additive percentage
    if (key === 'attackSpeed') {
      total[key] = base[key] + bonus.flat + bonus.percent;
    } else if (key === 'critDamage') {
      // Crit damage is a multiplier, add flat bonus to it
      total[key] = base[key] + bonus.flat / 100;
    } else {
      total[key] = base[key] + bonus.flat + (base[key] * bonus.percent / 100);
    }
  }

  return total;
}

// ============================================================
// ABILITY PARSING
// ============================================================

// Parse "180 | 270 | 360 | 450 | 540" into [180, 270, 360, 450, 540]
export function parseAbilityValues(valueStr: string): number[] {
  if (!valueStr) return [0];
  return valueStr.split('|').map(v => parseFloat(v.trim()) || 0);
}

// Parse scaling strings like "100% Strength", "80% Strength + 60% Intelligence"
export interface ScalingComponent {
  percent: number;
  stat: 'strength' | 'intelligence';
}

export function parseScaling(scalingStr: string): ScalingComponent[] {
  if (!scalingStr) return [];
  const results: ScalingComponent[] = [];
  
  // Match patterns like "100% Strength", "45% Str"
  const strMatch = scalingStr.match(/(\d+(?:\.\d+)?)\s*%?\s*(?:strength|str)/gi);
  const intMatch = scalingStr.match(/(\d+(?:\.\d+)?)\s*%?\s*(?:intelligence|int)/gi);
  
  if (strMatch) {
    for (const match of strMatch) {
      const num = parseFloat(match.match(/\d+(?:\.\d+)?/)?.[0] || '0');
      results.push({ percent: num, stat: 'strength' });
    }
  }
  if (intMatch) {
    for (const match of intMatch) {
      const num = parseFloat(match.match(/\d+(?:\.\d+)?/)?.[0] || '0');
      results.push({ percent: num, stat: 'intelligence' });
    }
  }
  
  return results;
}

// Get ability rank based on leveling order
export function getAbilityRank(levelingOrder: number[], currentLevel: number, abilityNum: number): number {
  if (!levelingOrder || levelingOrder.length === 0) return 1;
  const pointsInAbility = levelingOrder.slice(0, currentLevel).filter(n => n === abilityNum).length;
  return Math.max(1, Math.min(5, pointsInAbility));
}

// ============================================================
// DAMAGE CALCULATION
// ============================================================

export interface DamageResult {
  baseDamage: number;
  scalingDamage: number;
  rawDamage: number;
  effectiveProtections: number;
  damageAfterProts: number;
  finalDamage: number;
  protectionReduction: number; // percentage
}

export function calculateAbilityDamage(
  baseDamageValues: number[],
  abilityRank: number,
  scaling: ScalingComponent[],
  attackerStats: GodStats,
  defenderStats: GodStats,
  damageType: DamageType,
  attackerPenPercent: number = 0,
  attackerPenFlat: number = 0
): DamageResult {
  // Get base damage at rank (rank 1 = index 0)
  const baseDamage = baseDamageValues[Math.max(0, Math.min(4, abilityRank - 1))] || 0;
  
  // Calculate scaling damage
  let scalingDamage = 0;
  for (const scale of scaling) {
    const statValue = attackerStats[scale.stat] || 0;
    scalingDamage += statValue * (scale.percent / 100);
  }
  
  const rawDamage = baseDamage + scalingDamage;
  
  // Get defender's relevant protection
  const baseProts = damageType === DamageType.Physical 
    ? defenderStats.physicalProtection 
    : defenderStats.magicalProtection;
  
  // Apply penetration: % pen first, then flat
  const afterPercentPen = baseProts * (1 - attackerPenPercent / 100);
  const effectiveProtections = Math.max(0, afterPercentPen - attackerPenFlat);
  
  // Damage reduction formula: damage * (100 / (100 + protections))
  const damageAfterProts = rawDamage * (100 / (100 + effectiveProtections));
  
  // Calculate protection reduction percentage
  const protectionReduction = (effectiveProtections / (100 + effectiveProtections)) * 100;
  
  return {
    baseDamage,
    scalingDamage: Math.round(scalingDamage * 10) / 10,
    rawDamage: Math.round(rawDamage * 10) / 10,
    effectiveProtections: Math.round(effectiveProtections),
    damageAfterProts: Math.round(damageAfterProts * 10) / 10,
    finalDamage: Math.floor(damageAfterProts),
    protectionReduction: Math.round(protectionReduction * 10) / 10,
  };
}

// ============================================================
// BASIC ATTACK CALCULATION
// ============================================================

export interface BasicAttackResult {
  damage: number;
  critDamage: number;
  attacksPerSecond: number;
  dps: number;
  critWeightedDps: number;
}

export function calculateBasicAttack(
  attackerStats: GodStats,
  defenderStats: GodStats,
  damageType: DamageType,
  strScaling: number = 100,
  intScaling: number = 20
): BasicAttackResult {
  // Basic attack damage = (Strength * strScaling%) + (Intelligence * intScaling%)
  const rawDamage = (attackerStats.strength * strScaling / 100) + (attackerStats.intelligence * intScaling / 100);
  
  // Apply protections
  const baseProts = damageType === DamageType.Physical 
    ? defenderStats.physicalProtection 
    : defenderStats.magicalProtection;
  const effectiveProts = Math.max(0, baseProts * (1 - attackerStats.penetration / 100));
  const damage = Math.floor(rawDamage * (100 / (100 + effectiveProts)));
  
  // Crit damage
  const critMultiplier = attackerStats.critDamage || 1.65;
  const critDamage = Math.floor(damage * critMultiplier);
  
  // Attack speed (base is stored as percentage bonus, e.g., 10 = 10%)
  // Assuming base attack speed around 1.0, this calculates actual attacks/sec
  const baseAS = 1.0;
  const attacksPerSecond = Math.min(2.5, baseAS * (1 + attackerStats.attackSpeed / 100));
  
  // DPS calculations
  const dps = Math.round(damage * attacksPerSecond);
  const critChance = Math.min(100, attackerStats.critChance) / 100;
  const avgDamage = damage * (1 - critChance) + critDamage * critChance;
  const critWeightedDps = Math.round(avgDamage * attacksPerSecond);
  
  return {
    damage,
    critDamage,
    attacksPerSecond: Math.round(attacksPerSecond * 100) / 100,
    dps,
    critWeightedDps,
  };
}

// ============================================================
// HELPER: Extract damage info from ability
// ============================================================

export interface AbilityDamageInfo {
  hasDamage: boolean;
  baseDamageValues: number[];
  scaling: ScalingComponent[];
  isExecute: boolean;
  executeThreshold: number;
  isHeal: boolean;
  healValues: number[];
  isUtility: boolean;
}

export function extractAbilityDamageInfo(ability: Ability): AbilityDamageInfo {
  const result: AbilityDamageInfo = {
    hasDamage: false,
    baseDamageValues: [],
    scaling: [],
    isExecute: false,
    executeThreshold: 0,
    isHeal: false,
    healValues: [],
    isUtility: true,
  };
  
  if (!ability.attributes) return result;
  
  for (const attr of ability.attributes) {
    const label = attr.label.toLowerCase();
    
    // Check for damage
    if (label === 'damage' || label.includes('damage') && !label.includes('scaling')) {
      result.baseDamageValues = parseAbilityValues(attr.value);
      result.hasDamage = true;
      result.isUtility = false;
    }
    
    // Check for scaling
    if (label.includes('scaling')) {
      result.scaling = parseScaling(attr.value);
    }
    
    // Check for execute
    if (label.includes('execute')) {
      result.isExecute = true;
      const match = attr.value.match(/(\d+)/);
      if (match) result.executeThreshold = parseFloat(match[1]);
    }
    
    // Check for heal
    if (label === 'heal' || label.includes('heal')) {
      result.healValues = parseAbilityValues(attr.value);
      result.isHeal = true;
    }
  }
  
  return result;
}