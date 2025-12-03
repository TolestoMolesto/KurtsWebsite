// ============================================================
// passiveStanceUtils.tsx - Data-Driven Passive Stance Utilities
// ============================================================
// Reads stance info directly from god data - no keyword detection!

import { Ability, GodStats, PassiveStance, PassiveStanceBonus } from '../types';

// ============================================================
// TYPES
// ============================================================

export type StanceId = string;  // 'armored', 'unarmored', etc.

// ============================================================
// HELPERS: Get stance info from passive ability
// ============================================================

/**
 * Check if a passive has toggle stances (data-driven)
 */
export function hasPassiveStances(passive: Ability | undefined): boolean {
  return !!(passive?.stances && passive.stances.length > 0);
}

/**
 * Get the list of available stances from a passive
 */
export function getPassiveStances(passive: Ability | undefined): PassiveStance[] {
  return passive?.stances || [];
}

/**
 * Get the default stance ID
 */
export function getDefaultStance(passive: Ability | undefined): StanceId | null {
  if (!passive?.stances?.length) return null;
  return passive.defaultStance || passive.stances[0].id;
}

/**
 * Get a specific stance by ID
 */
export function getStanceById(passive: Ability | undefined, stanceId: StanceId): PassiveStance | null {
  if (!passive?.stances) return null;
  return passive.stances.find(s => s.id === stanceId) || null;
}

// ============================================================
// CALCULATION: Apply stance bonuses to stats
// ============================================================

/**
 * Calculate the bonus value at a given level
 */
export function calculateStanceBonus(bonus: PassiveStanceBonus, level: number): number {
  return bonus.base + (bonus.perLevel * (level - 1));
}

/**
 * Apply passive stance bonuses to god stats
 */
export function applyPassiveStanceBonuses(
  baseStats: GodStats,
  passive: Ability | undefined,
  stanceId: StanceId | null,
  level: number
): GodStats {
  if (!passive?.stances || !stanceId) {
    return baseStats;
  }

  const stance = passive.stances.find(s => s.id === stanceId);
  if (!stance) {
    return baseStats;
  }

  const stats = { ...baseStats };

  for (const bonus of stance.statBonuses) {
    const totalBonus = calculateStanceBonus(bonus, level);

    if (bonus.isPercent) {
      // Percentage bonus (e.g., movement speed %)
      const currentValue = stats[bonus.stat] as number;
      stats[bonus.stat] = currentValue * (1 + totalBonus / 100) as any;
    } else {
      // Flat bonus
      (stats[bonus.stat] as number) += totalBonus;
    }
  }

  return stats;
}

// ============================================================
// UI HELPERS
// ============================================================

/**
 * Get icon component name for a stance
 */
export function getStanceIconName(stance: PassiveStance): string {
  return stance.icon || 'zap';
}

/**
 * Get Tailwind color classes for a stance
 */
export function getStanceColors(stance: PassiveStance): { text: string; bg: string; border: string } {
  const colorMap: Record<string, { text: string; bg: string; border: string }> = {
    cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30' },
    orange: { text: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
    red: { text: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    blue: { text: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
    purple: { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30' },
    green: { text: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30' },
  };
  return colorMap[stance.color] || colorMap.cyan;
}

/**
 * Format a stat bonus for display
 */
export function formatStanceBonus(bonus: PassiveStanceBonus, level: number): string {
  const value = calculateStanceBonus(bonus, level);
  const formatted = bonus.isPercent 
    ? `+${value.toFixed(value % 1 === 0 ? 0 : 1)}%` 
    : `+${Math.round(value)}`;

  const statNames: Record<keyof GodStats, string> = {
    strength: 'Strength',
    intelligence: 'Intelligence',
    inhandPower: 'Basic Power',
    baseAttackSpeed: 'Base AS',
    attackSpeedPercent: 'Attack Speed',
    critChance: 'Crit Chance',
    critDamage: 'Crit Damage',
    flatPenetration: 'Flat Pen',
    percentPenetration: '% Pen',
    lifesteal: 'Lifesteal',
    physicalProtection: 'Phys Prot',
    magicalProtection: 'Mag Prot',
    damageMitigation: 'Mitigation',
    maxHealth: 'Max Health',
    healthRegen: 'HP Regen',
    maxMana: 'Max Mana',
    manaRegen: 'MP Regen',
    cooldownRate: 'CDR',
    movementSpeed: 'Move Speed',
    xpRequirement: 'XP Req',
  };

  return `${formatted} ${statNames[bonus.stat] || bonus.stat}`;
}