// damageCalculations.tsx - Complete damage calculation utilities for Smite Source 2
// Handles: Stats aggregation, Basic attacks, Ability damage, Penetration, SubAbilities

import { God, GodStats, Item, Ability, DamageType, DEFAULT_GOD_STATS } from '../types';
export const BASE_MOVEMENT_SPEED_MULTIPLIER = 1.178; // 17.8% base buff in Smite 2

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
  'attack speed': 'attackSpeedPercent',
  'atk speed': 'attackSpeedPercent',
  
  // Critical
  'crit chance': 'critChance',
  'critical chance': 'critChance',
  'critical strike chance': 'critChance',
  'crit damage': 'critDamage',
  'critical damage': 'critDamage',
  'critical strike damage': 'critDamage',
  
  // Penetration (Split)
  'flat penetration': 'flatPenetration',
  'flat pen': 'flatPenetration',
  'percent penetration': 'percentPenetration',
  '% penetration': 'percentPenetration',
  'penetration': 'percentPenetration',
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
  'cooldown reduction': 'cooldownRate',
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
    if (lowerKey === 'adaptive' || lowerKey.includes('adaptive')) {
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
export function calculateAttackSpeed(
  baseAS: number,
  asPercent: number,
  bonusASPercent: number = 0
): number {
  const totalASPercent = asPercent + bonusASPercent;
  const rawAS = baseAS * (1 + totalASPercent / 100);
  const flooredAS = Math.floor(rawAS * 100) / 100;
  return Math.min(2.5, flooredAS); // Cap at 2.5
}

export function getAttackSpeedPercentAtLevel(asPercent: number, level: number): number {
  return asPercent;
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
  // Note: Base STR/INT is often 0, so items are the primary source
  let currentStr = base.strength + bonuses.strength.flat + (base.strength * bonuses.strength.percent / 100);
  let currentInt = base.intelligence + bonuses.intelligence.flat + (base.intelligence * bonuses.intelligence.percent / 100);

  // PHASE 2: Apply adaptive bonuses based on which stat is higher
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
      // Crit damage bonus is added as decimal (e.g., +35% becomes +0.35)
      total[key] = base[key] + bonus.flat / 100 + bonus.percent / 100;
    } else if (key === 'flatPenetration' || key === 'percentPenetration' || key === 'damageMitigation') {
      // These are purely additive from items
      total[key] = (base[key] || 0) + bonus.flat + bonus.percent;
    } else if (key === 'critChance' || key === 'lifesteal' || key === 'cooldownRate') {
      // These are additive percentages
      total[key] = (base[key] || 0) + bonus.flat + bonus.percent;
    } else {
      // Standard: base + flat + (base * percent%)
      // For STR/INT where base is 0, this just adds the flat bonus
      total[key] = base[key] + bonus.flat + (base[key] * bonus.percent / 100);
    }
  }
  
  // Apply caps
  total.critChance = Math.min(100, total.critChance); // 100% crit cap
  total.movementSpeed = total.movementSpeed * BASE_MOVEMENT_SPEED_MULTIPLIER;
  
  return total;
}

// ============================================================
// PENETRATION CALCULATIONS
// ============================================================

export function calculateEffectiveProtections(
  baseProts: number,
  percentPen: number,
  flatPen: number
): number {
  const afterPercent = baseProts * (1 - percentPen / 100);
  return Math.max(0, afterPercent - flatPen);
}

export function getProtectionDamageReduction(prots: number): number {
  return (prots / (prots + 100)) * 100;
}

// ============================================================
// ABILITY VALUE PARSING
// ============================================================

/**
 * Parse rank-based values like "100 | 155 | 210 | 265 | 320"
 */
export function parseAbilityValues(valueString: string): number[] {
  if (!valueString) return [0];
  
  // Handle "X | Y | Z" format
  if (valueString.includes('|')) {
    const values = valueString.split('|').map(v => {
      const num = parseFloat(v.trim());
      return isNaN(num) ? 0 : num;
    });
    return values.length > 0 ? values : [0];
  }
  
  // Single value
  const num = parseFloat(valueString);
  return [isNaN(num) ? 0 : num];
}

/**
 * Parse cooldown values like "14 | 13.5 | 13 | 12.5 | 12s"
 */
export function parseCooldownValues(cooldownString: string): number[] {
  if (!cooldownString || cooldownString === '-') return [0];
  
  // Remove 's' suffix and parse
  const cleaned = cooldownString.replace(/s/gi, '');
  return parseAbilityValues(cleaned);
}

/**
 * Parse mana cost values like "60 | 65 | 70 | 75 | 80"
 */
export function parseCostValues(costString: string): number[] {
  if (!costString || costString === '-') return [0];
  return parseAbilityValues(costString);
}

// ============================================================
// SCALING PARSING - ENHANCED FOR ALL FORMATS
// ============================================================

export interface ScalingComponent {
  percent: number;
  stat: 'strength' | 'intelligence';
  condition?: string; // e.g., "If Foregoing Armor"
}

/**
 * Parse various scaling formats:
 * - "80% Strength"
 * - "100% Strength + 20% Intelligence"
 * - "45% Strength or 60% Strength If Foregoing Armor"
 */
export function parseScaling(scalingStr: string): ScalingComponent[] {
  if (!scalingStr) return [];
  
  const results: ScalingComponent[] = [];
  
  // Handle "or" conditions (take the first one as default)
  // e.g., "45% Strength or 60% Strength If Foregoing Armor"
  const orParts = scalingStr.split(/\s+or\s+/i);
  const primaryScaling = orParts[0];
  
  // Match patterns like "80% Strength", "100% STR", etc.
  const strMatches = primaryScaling.matchAll(/(\d+(?:\.\d+)?)\s*%?\s*(?:strength|str)/gi);
  const intMatches = primaryScaling.matchAll(/(\d+(?:\.\d+)?)\s*%?\s*(?:intelligence|int)/gi);
  
  for (const match of strMatches) {
    const num = parseFloat(match[1]);
    if (!isNaN(num)) {
      results.push({ percent: num, stat: 'strength' });
    }
  }
  
  for (const match of intMatches) {
    const num = parseFloat(match[1]);
    if (!isNaN(num)) {
      results.push({ percent: num, stat: 'intelligence' });
    }
  }
  
  return results;
}

/**
 * Parse conditional scaling (for display purposes)
 * Returns all scaling variants including conditional ones
 */
export interface ConditionalScaling {
  base: ScalingComponent[];
  conditional?: {
    scaling: ScalingComponent[];
    condition: string;
  };
}

export function parseConditionalScaling(scalingStr: string): ConditionalScaling {
  if (!scalingStr) return { base: [] };
  
  const result: ConditionalScaling = { base: [] };
  
  // Check for "or" conditions
  const orMatch = scalingStr.match(/(.+?)\s+or\s+(.+)/i);
  
  if (orMatch) {
    // Parse base scaling
    result.base = parseScaling(orMatch[1]);
    
    // Parse conditional scaling
    const conditionalPart = orMatch[2];
    const conditionMatch = conditionalPart.match(/(.+?)\s+if\s+(.+)/i);
    
    if (conditionMatch) {
      result.conditional = {
        scaling: parseScaling(conditionMatch[1]),
        condition: conditionMatch[2].trim()
      };
    } else {
      result.conditional = {
        scaling: parseScaling(conditionalPart),
        condition: 'Alternative'
      };
    }
  } else {
    result.base = parseScaling(scalingStr);
  }
  
  return result;
}

/**
 * Get ability rank based on leveling order
 */
export function getAbilityRank(
  levelingOrder: number[], 
  currentLevel: number, 
  abilityNum: number
): number {
  if (!levelingOrder || levelingOrder.length === 0) {
    // Default leveling order if none provided
    // Typically: 1, 2, 3, 1, 4, 1, 2, 1, 4, 2, 1, 2, 4, 3, 3, 3, 4, 3, 4, 4
    const defaultOrder = [1, 2, 3, 1, 4, 1, 2, 1, 4, 2, 1, 2, 4, 3, 3, 3, 4, 3, 4, 4];
    const pointsInAbility = defaultOrder.slice(0, currentLevel).filter(n => n === abilityNum).length;
    return Math.max(1, Math.min(5, pointsInAbility));
  }
  
  const pointsInAbility = levelingOrder.slice(0, currentLevel).filter(n => n === abilityNum).length;
  return Math.max(1, Math.min(5, pointsInAbility));
}

// ============================================================
// ABILITY DAMAGE INFO EXTRACTION - ENHANCED
// ============================================================

export interface AbilityDamageInfo {
  hasDamage: boolean;
  baseDamageValues: number[];
  scaling: ScalingComponent[];
  conditionalScaling?: ConditionalScaling;
  isExecute: boolean;
  executeThreshold: number;
  isHeal: boolean;
  healValues: number[];
  isUtility: boolean;
  cooldownValues: number[];
  costValues: number[];
}

/**
 * Extract damage info from an ability's attributes
 */
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
    cooldownValues: parseCooldownValues(ability.cooldown),
    costValues: parseCostValues(ability.cost),
  };
  
  if (!ability.attributes) return result;
  
  for (const attr of ability.attributes) {
    const label = attr.label.toLowerCase();
    
    // Check for damage (but not "Damage Scaling")
    if (label === 'damage' || (label.includes('damage') && !label.includes('scaling'))) {
      result.baseDamageValues = parseAbilityValues(attr.value);
      result.hasDamage = true;
      result.isUtility = false;
    }
    
    // Check for scaling
    if (label.includes('scaling') || label === 'damage scaling') {
      result.scaling = parseScaling(attr.value);
      result.conditionalScaling = parseConditionalScaling(attr.value);
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

/**
 * Extract damage info from a sub-ability (like Spear Strike within Combat Dodge)
 */
export function extractSubAbilityDamageInfo(subAbility: {
  name: string;
  description: string;
  attributes?: { label: string; value: string }[];
}): AbilityDamageInfo {
  const result: AbilityDamageInfo = {
    hasDamage: false,
    baseDamageValues: [],
    scaling: [],
    isExecute: false,
    executeThreshold: 0,
    isHeal: false,
    healValues: [],
    isUtility: true,
    cooldownValues: [],
    costValues: [],
  };
  
  if (!subAbility.attributes) return result;
  
  for (const attr of subAbility.attributes) {
    const label = attr.label.toLowerCase();
    
    if (label === 'damage' || (label.includes('damage') && !label.includes('scaling'))) {
      result.baseDamageValues = parseAbilityValues(attr.value);
      result.hasDamage = true;
      result.isUtility = false;
    }
    
    if (label.includes('scaling') || label === 'damage scaling') {
      result.scaling = parseScaling(attr.value);
      result.conditionalScaling = parseConditionalScaling(attr.value);
    }
    
    if (label === 'heal' || label.includes('heal')) {
      result.healValues = parseAbilityValues(attr.value);
      result.isHeal = true;
    }
  }
  
  return result;
}

// ============================================================
// ABILITY DAMAGE CALCULATION
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
  damageType: DamageType,
  percentPen?: number,
  flatPen?: number
): DamageResult {
  // Get base damage at current rank (0-indexed, so rank 1 = index 0)
  const rankIndex = Math.max(0, Math.min(4, abilityRank - 1));
  const baseDamage = baseDamageValues[rankIndex] || baseDamageValues[0] || 0;
  
  // Calculate scaling damage
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
  
  // Use penetration from params if provided, otherwise from stats
  const finalPercentPen = percentPen ?? attackerStats.percentPenetration ?? 0;
  const finalFlatPen = flatPen ?? attackerStats.flatPenetration ?? 0;
  
  // Apply penetration
  const effectiveProtections = calculateEffectiveProtections(
    baseProts,
    finalPercentPen,
    finalFlatPen
  );
  
  // Damage after protections: damage × (100 / (100 + prots))
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
  rawDamage: number;
  damage: number;
  critDamage: number;
  attacksPerSecond: number;
  dps: number;
  critWeightedDps: number;
}

/**
 * Calculate basic attack damage
 * Note: In Smite 2, basic attack damage comes from inhandPower + scaling from STR/INT
 * The scaling values are typically in the basic attack's attributes
 */
export function calculateBasicAttack(
  attackerStats: GodStats,
  defenderStats: GodStats,
  damageType: DamageType,
  strScaling: number = 100,  // Default 100% STR scaling
  intScaling: number = 20    // Default 20% INT scaling
): BasicAttackResult {
  // Calculate raw damage from inhand power + scaling
  // inhandPower is the base damage that scales with level
  // Then we add STR and INT scaling
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
    attackerStats.percentPenetration || 0,
    attackerStats.flatPenetration || 0
  );
  
  // Damage after protections
  const afterProts = rawDamage * (100 / (100 + effectiveProts));
  
  // Apply mitigation
  const damage = Math.floor(afterProts * (1 - (defenderStats.damageMitigation || 0) / 100));
  
  // Crit calculation
  const critMultiplier = attackerStats.critDamage || 1.65;
  const critDamage = Math.floor(damage * critMultiplier);
  
  // Attack speed calculation
  const attacksPerSecond = calculateAttackSpeed(
    attackerStats.baseAttackSpeed,
    attackerStats.attackSpeedPercent
  );
  
  // DPS calculations
  const dps = Math.round(damage * attacksPerSecond);
  const critChance = Math.min(100, attackerStats.critChance || 0) / 100;
  const avgDamage = damage * (1 - critChance) + critDamage * critChance;
  const critWeightedDps = Math.round(avgDamage * attacksPerSecond);
  
  return {
    rawDamage: Math.round(rawDamage * 10) / 10,
    damage,
    critDamage,
    attacksPerSecond: Math.round(attacksPerSecond * 100) / 100,
    dps,
    critWeightedDps,
  };
}

/**
 * Parse basic attack scaling from attributes
 * e.g., "100% Strength + 20% Intelligence"
 */
export function parseBasicAttackScaling(basicAttack: Ability): { strScaling: number; intScaling: number } {
  const result = { strScaling: 100, intScaling: 20 }; // Defaults
  
  if (!basicAttack.attributes) return result;
  
  const scalingAttr = basicAttack.attributes.find(
    a => a.label.toLowerCase().includes('scaling') || a.label.toLowerCase().includes('damage scaling')
  );
  
  if (scalingAttr) {
    const strMatch = scalingAttr.value.match(/(\d+(?:\.\d+)?)\s*%?\s*(?:strength|str)/i);
    const intMatch = scalingAttr.value.match(/(\d+(?:\.\d+)?)\s*%?\s*(?:intelligence|int)/i);
    
    if (strMatch) result.strScaling = parseFloat(strMatch[1]);
    if (intMatch) result.intScaling = parseFloat(intMatch[1]);
  }
  
  return result;
}

// ============================================================
// HELPER: Get value at specific rank
// ============================================================

export function getValueAtRank(values: number[], rank: number): number {
  const rankIndex = Math.max(0, Math.min(values.length - 1, rank - 1));
  return values[rankIndex] || values[0] || 0;
}

// ============================================================
// HELPER: Format damage for display
// ============================================================

export function formatDamage(value: number): string {
  return Math.floor(value).toLocaleString();
}

export function formatScaling(scaling: ScalingComponent[]): string {
  if (scaling.length === 0) return 'No scaling';
  
  return scaling.map(s => {
    const statName = s.stat === 'strength' ? 'STR' : 'INT';
    return `${s.percent}% ${statName}`;
  }).join(' + ');
}

// ============================================================
// EXPORTS
// ============================================================

export {
  statKeyMap,
  parseStatValue,
};