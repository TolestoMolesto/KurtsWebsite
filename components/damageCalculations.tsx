import { God, GodStats, Item, Ability, DamageType } from '../types';

// ============================================================
// STAT PARSING UTILITIES
// ============================================================

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
    
    // Handle adaptive stats separately - DON'T add to regular stats
    if (lowerKey === 'adaptive') {
      // Format 1: "15|20" (STR|INT pipe-separated)
      if (value.includes('|')) {
        const parts = value.split('|').map(v => parseFloat(v.trim()) || 0);
        result.adaptive = {
          strValue: parts[0] || 0,
          intValue: parts[1] || 0
        };
      } 
      // Format 2: "+35 Str or +60 Int" (text format)
      else {
        const strMatch = value.match(/(\d+)\s*str/i);
        const intMatch = value.match(/(\d+)\s*int/i);
        if (strMatch || intMatch) {
          result.adaptive = {
            strValue: strMatch ? parseFloat(strMatch[1]) : 0,
            intValue: intMatch ? parseFloat(intMatch[1]) : 0
          };
        }
      }
      continue; // Skip adding to regular stats
    }
    
    const normalizedKey = statKeyMap[lowerKey];
    if (normalizedKey) {
      result.stats[normalizedKey] = parseStatValue(value);
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
  const base = { ...god.statsByLevel[Math.max(0, Math.min(19, level - 1))] };
  
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

  // Collect adaptive bonuses for later processing
  const adaptiveBonuses: { strValue: number; intValue: number }[] = [];

  // PHASE 1: Aggregate all NON-adaptive item stats
  for (const item of items) {
    if (!item) continue;
    const parsed = parseItemStats(item);
    
    // Add regular stats
    for (const [stat, values] of Object.entries(parsed.stats)) {
      const key = stat as keyof GodStats;
      if (bonuses[key]) {
        bonuses[key].flat += values.flat;
        bonuses[key].percent += values.percent;
      }
    }
    
    // Collect adaptive for phase 2
    if (parsed.adaptive) {
      adaptiveBonuses.push(parsed.adaptive);
    }
  }

  // Calculate current STR/INT (base + non-adaptive items) to determine adaptive
  let currentStr = base.strength + bonuses.strength.flat + (base.strength * bonuses.strength.percent / 100);
  let currentInt = base.intelligence + bonuses.intelligence.flat + (base.intelligence * bonuses.intelligence.percent / 100);

  // PHASE 2: Apply adaptive bonuses based on which stat is higher
  for (const adaptive of adaptiveBonuses) {
    if (currentStr >= currentInt) {
      // STR is higher or equal - apply STR bonus
      bonuses.strength.flat += adaptive.strValue;
      currentStr += adaptive.strValue;
    } else {
      // INT is higher - apply INT bonus
      bonuses.intelligence.flat += adaptive.intValue;
      currentInt += adaptive.intValue;
    }
  }

  // Apply all bonuses to base stats
  const total: GodStats = { ...base };
  for (const key of Object.keys(bonuses) as (keyof GodStats)[]) {
    const bonus = bonuses[key];
    if (key === 'attackSpeed') {
      total[key] = base[key] + bonus.flat + bonus.percent;
    } else if (key === 'critDamage') {
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
  attackerPenPercent: number = 0,
  attackerPenFlat: number = 0
): DamageResult {
  const baseDamage = baseDamageValues[Math.max(0, Math.min(4, abilityRank - 1))] || 0;
  
  let scalingDamage = 0;
  for (const scale of scaling) {
    const statValue = attackerStats[scale.stat] || 0;
    scalingDamage += statValue * (scale.percent / 100);
  }
  
  const rawDamage = baseDamage + scalingDamage;
  
  const baseProts = damageType === DamageType.Physical 
    ? defenderStats.physicalProtection 
    : defenderStats.magicalProtection;
  
  const afterPercentPen = baseProts * (1 - attackerPenPercent / 100);
  const effectiveProtections = Math.max(0, afterPercentPen - attackerPenFlat);
  
  const damageAfterProts = rawDamage * (100 / (100 + effectiveProtections));
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
  const rawDamage = (attackerStats.strength * strScaling / 100) + (attackerStats.intelligence * intScaling / 100);
  
  const baseProts = damageType === DamageType.Physical 
    ? defenderStats.physicalProtection 
    : defenderStats.magicalProtection;
  const effectiveProts = Math.max(0, baseProts * (1 - attackerStats.penetration / 100));
  const damage = Math.floor(rawDamage * (100 / (100 + effectiveProts)));
  
  const critMultiplier = attackerStats.critDamage || 1.65;
  const critDamage = Math.floor(damage * critMultiplier);
  
  const baseAS = 1.0;
  const attacksPerSecond = Math.min(2.5, baseAS * (1 + attackerStats.attackSpeed / 100));
  
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