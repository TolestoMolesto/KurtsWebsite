import { God, GodStats, Item, Ability, DamageType, DEFAULT_GOD_STATS } from '../types';

// ============================================================
// STAT PARSING UTILITIES
// ============================================================

const statKeyMap: Record<string, keyof GodStats> = {
  // Strength / Intelligence
  'strength': 'strength',
  'str': 'strength',
  'intelligence': 'intelligence',
  'int': 'intelligence',
  
  // Inhand Power
  'inhand power': 'inhandPower',
  'basic attack power': 'inhandPower',
  'attack power': 'inhandPower',
  
  // Attack Speed
  'base attack speed': 'baseAttackSpeed',
  'attack speed': 'attackSpeedPercent',  // Items give AS% bonus
  'atk speed': 'attackSpeedPercent',
  
  // Critical
  'crit chance': 'critChance',
  'critical chance': 'critChance',
  'crit damage': 'critDamage',
  'critical damage': 'critDamage',
  
  // Penetration (Split)
  'flat penetration': 'flatPenetration',
  'flat pen': 'flatPenetration',
  'percent penetration': 'percentPenetration',
  '% penetration': 'percentPenetration',
  'penetration': 'percentPenetration',  // Default to % pen
  'pen': 'percentPenetration',
  
  // Sustain
  'lifesteal': 'lifesteal',
  'life steal': 'lifesteal',
  
  // Defenses
  'physical protection': 'physicalProtection',
  'phys. prot': 'physicalProtection',
  'phys prot': 'physicalProtection',
  'magical protection': 'magicalProtection',
  'mag. prot': 'magicalProtection',
  'mag prot': 'magicalProtection',
  'damage mitigation': 'damageMitigation',
  'mitigation': 'damageMitigation',
  
  // Health & Mana
  'max health': 'maxHealth',
  'health': 'maxHealth',
  'health regen': 'healthRegen',
  'hp5': 'healthRegen',
  'max mana': 'maxMana',
  'mana': 'maxMana',
  'mana regen': 'manaRegen',
  'mp5': 'manaRegen',
  
  // Utility
  'cooldown': 'cooldownRate',
  'cooldown rate': 'cooldownRate',
  'cdr': 'cooldownRate',
  'movement speed': 'movementSpeed',
  'move speed': 'movementSpeed',
};

function parseStatValue(value: string): { flat: number; percent: number } {
  const cleaned = value.replace(/[+\s]/g, '');
  if (cleaned.endsWith('%')) {
    return { flat: 0, percent: parseFloat(cleaned) || 0 };
  }
  return { flat: parseFloat(cleaned) || 0, percent: 0 };
}

// Interface for parsed item stats including adaptive
interface ParsedItemStats {
  stats: Partial<Record<keyof GodStats, { flat: number; percent: number }>>;
  adaptive: { strValue: number; intValue: number } | null;
}

// Parse item stats - keeps adaptive separate for proper handling
export function parseItemStats(item: Item): ParsedItemStats {
  const result: ParsedItemStats = {
    stats: {},
    adaptive: null
  };
  
  for (const [key, value] of Object.entries(item.stats)) {
    const lowerKey = key.toLowerCase();
    
    // Handle adaptive stats separately
    if (lowerKey === 'adaptive') {
      if (value.includes('|')) {
        const parts = value.split('|').map(v => parseFloat(v.trim()) || 0);
        result.adaptive = {
          strValue: parts[0] || 0,
          intValue: parts[1] || 0
        };
      } else {
        const strMatch = value.match(/(\d+)\s*str/i);
        const intMatch = value.match(/(\d+)\s*int/i);
        if (strMatch || intMatch) {
          result.adaptive = {
            strValue: strMatch ? parseFloat(strMatch[1]) : 0,
            intValue: intMatch ? parseFloat(intMatch[1]) : 0
          };
        }
      }
      continue;
    }
    
    const normalizedKey = statKeyMap[lowerKey];
    if (normalizedKey) {
      result.stats[normalizedKey] = parseStatValue(value);
    }
  }
  return result;
}

// ============================================================
// ATTACK SPEED HELPERS
// ============================================================

/**
 * Calculate actual attack speed
 * Formula: floor(baseAS × (1 + totalAS%) × 100) / 100
 */
export function calculateActualAttackSpeed(
  baseAS: number,
  asPercent: number,
  bonusASPercent: number = 0
): number {
  const totalASPercent = asPercent + bonusASPercent;
  const rawAS = baseAS * (1 + totalASPercent / 100);
  const flooredAS = Math.floor(rawAS * 100) / 100;
  return Math.min(2.5, flooredAS); // Cap at 2.5
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
  const base = { ...god.statsByLevel[Math.max(0, Math.min(19, level - 1))] };
  
  // Initialize bonuses for all stats
  const bonuses: Record<keyof GodStats, { flat: number; percent: number }> = {} as any;
  for (const key of Object.keys(DEFAULT_GOD_STATS) as (keyof GodStats)[]) {
    bonuses[key] = { flat: 0, percent: 0 };
  }

  // Collect adaptive bonuses for later processing
  const adaptiveBonuses: { strValue: number; intValue: number }[] = [];

  // PHASE 1: Aggregate all NON-adaptive item stats
  for (const item of items) {
    if (!item) continue;
    const parsed = parseItemStats(item);
    
    for (const [stat, values] of Object.entries(parsed.stats)) {
      const key = stat as keyof GodStats;
      if (bonuses[key]) {
        bonuses[key].flat += values.flat;
        bonuses[key].percent += values.percent;
      }
    }
    
    if (parsed.adaptive) {
      adaptiveBonuses.push(parsed.adaptive);
    }
  }

  // Calculate current STR/INT to determine adaptive
  let currentStr = base.strength + bonuses.strength.flat + (base.strength * bonuses.strength.percent / 100);
  let currentInt = base.intelligence + bonuses.intelligence.flat + (base.intelligence * bonuses.intelligence.percent / 100);

  // PHASE 2: Apply adaptive bonuses
  for (const adaptive of adaptiveBonuses) {
    if (currentStr >= currentInt) {
      bonuses.strength.flat += adaptive.strValue;
      currentStr += adaptive.strValue;
    } else {
      bonuses.intelligence.flat += adaptive.intValue;
      currentInt += adaptive.intValue;
    }
  }

  // Apply all bonuses to base stats
  const total: GodStats = { ...base };
  
  for (const key of Object.keys(bonuses) as (keyof GodStats)[]) {
    const bonus = bonuses[key];
    
    // Special handling for certain stats
    if (key === 'attackSpeedPercent') {
      // AS% is additive
      total[key] = base[key] + bonus.flat + bonus.percent;
    } else if (key === 'critDamage') {
      // Crit damage bonus is added as decimal
      total[key] = base[key] + bonus.flat / 100;
    } else if (key === 'flatPenetration' || key === 'percentPenetration' || key === 'damageMitigation') {
      // These are purely additive from items
      total[key] = (base[key] || 0) + bonus.flat + bonus.percent;
    } else {
      // Standard: base + flat + (base * percent%)
      total[key] = base[key] + bonus.flat + (base[key] * bonus.percent / 100);
    }
  }

  return total;
}

// ============================================================
// PENETRATION & PROTECTION CALCULATIONS
// ============================================================

/**
 * Calculate effective protections after penetration
 * Order: % Pen applies first, then Flat Pen
 */
export function calculateEffectiveProtections(
  baseProtections: number,
  percentPen: number,
  flatPen: number
): number {
  const afterPercentPen = baseProtections * (1 - percentPen / 100);
  return Math.max(0, afterPercentPen - flatPen);
}

/**
 * Calculate damage reduction percentage from protections
 */
export function getProtectionDamageReduction(effectiveProts: number): number {
  return (effectiveProts / (100 + effectiveProts)) * 100;
}

/**
 * Calculate final damage after protections and mitigation
 */
export function calculateFinalDamage(
  rawDamage: number,
  effectiveProtections: number,
  damageMitigation: number = 0
): number {
  // Damage after protections
  const afterProts = rawDamage * (100 / (100 + effectiveProtections));
  // Mitigation is flat percentage reduction AFTER prots
  const afterMitigation = afterProts * (1 - damageMitigation / 100);
  return Math.floor(afterMitigation);
}

// ============================================================
// ABILITY PARSING
// ============================================================

export function parseAbilityValues(valueStr: string): number[] {
  if (!valueStr) return [0];
  return valueStr.split('|').map(v => parseFloat(v.trim()) || 0);
}

export interface ScalingComponent {
  percent: number;
  stat: 'strength' | 'intelligence';
}

export function parseScaling(scalingStr: string): ScalingComponent[] {
  if (!scalingStr) return [];
  const results: ScalingComponent[] = [];
  
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
  damageAfterMitigation: number;
  finalDamage: number;
  protectionReduction: number;
}

export function calculateAbilityDamage(
  baseDamageValues: number[],
  abilityRank: number,
  scaling: ScalingComponent[],
  attackerStats: GodStats,
  defenderStats: GodStats,
  damageType: DamageType
): DamageResult {
  const baseDamage = baseDamageValues[Math.max(0, Math.min(4, abilityRank - 1))] || 0;
  
  let scalingDamage = 0;
  for (const scale of scaling) {
    const statValue = attackerStats[scale.stat] || 0;
    scalingDamage += statValue * (scale.percent / 100);
  }
  
  const rawDamage = baseDamage + scalingDamage;
  
  // Get defender's base protections
  const baseProts = damageType === DamageType.Physical 
    ? defenderStats.physicalProtection 
    : defenderStats.magicalProtection;
  
  // Apply penetration (% first, then flat)
  const effectiveProtections = calculateEffectiveProtections(
    baseProts,
    attackerStats.percentPenetration,
    attackerStats.flatPenetration
  );
  
  const damageAfterProts = rawDamage * (100 / (100 + effectiveProtections));
  const protectionReduction = getProtectionDamageReduction(effectiveProtections);
  
  // Apply mitigation
  const damageAfterMitigation = damageAfterProts * (1 - (defenderStats.damageMitigation || 0) / 100);
  
  return {
    baseDamage,
    scalingDamage: Math.round(scalingDamage * 10) / 10,
    rawDamage: Math.round(rawDamage * 10) / 10,
    effectiveProtections: Math.round(effectiveProtections),
    damageAfterProts: Math.round(damageAfterProts * 10) / 10,
    damageAfterMitigation: Math.round(damageAfterMitigation * 10) / 10,
    finalDamage: Math.floor(damageAfterMitigation),
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
  // Calculate raw damage from inhand power + scaling
  const rawDamage = (attackerStats.inhandPower || 0) +
    (attackerStats.strength * strScaling / 100) + 
    (attackerStats.intelligence * intScaling / 100);
  
  // Get defender's protections
  const baseProts = damageType === DamageType.Physical 
    ? defenderStats.physicalProtection 
    : defenderStats.magicalProtection;
  
  // Apply penetration
  const effectiveProts = calculateEffectiveProtections(
    baseProts,
    attackerStats.percentPenetration,
    attackerStats.flatPenetration
  );
  
  // Damage after protections
  const afterProts = rawDamage * (100 / (100 + effectiveProts));
  
  // Apply mitigation
  const damage = Math.floor(afterProts * (1 - (defenderStats.damageMitigation || 0) / 100));
  
  // Crit calculation
  const critMultiplier = attackerStats.critDamage || 1.65;
  const critDamage = Math.floor(damage * critMultiplier);
  
  // Attack speed calculation
  const attacksPerSecond = calculateActualAttackSpeed(
    attackerStats.baseAttackSpeed,
    attackerStats.attackSpeedPercent
  );
  
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
    
    if (label === 'damage' || label.includes('damage') && !label.includes('scaling')) {
      result.baseDamageValues = parseAbilityValues(attr.value);
      result.hasDamage = true;
      result.isUtility = false;
    }
    
    if (label.includes('scaling')) {
      result.scaling = parseScaling(attr.value);
    }
    
    if (label.includes('execute')) {
      result.isExecute = true;
      const match = attr.value.match(/(\d+)/);
      if (match) result.executeThreshold = parseFloat(match[1]);
    }
    
    if (label === 'heal' || label.includes('heal')) {
      result.healValues = parseAbilityValues(attr.value);
      result.isHeal = true;
    }
  }
  
  return result;
}