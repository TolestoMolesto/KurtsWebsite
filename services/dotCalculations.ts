// dotCalculations.ts - Damage Over Time calculation utilities
// Handles parsing and calculating DoT effects from item passives

import { GodStats, DamageType } from '../types';

// ============================================================
// DOT TYPES
// ============================================================

export interface DotInfo {
  baseDamage: number; // Base damage value
  scaling: number; // Scaling percentage (e.g., 35 for 35% Strength)
  scalingStat: 'strength' | 'intelligence'; // Which stat it scales with
  duration: number; // Duration in seconds
  hitsPerSecond: number; // How many ticks per second (for displaying tick count)
  isDetected: boolean; // Whether a DoT was successfully detected
}

export interface DotResult {
  totalDamage: number; // Total damage over full duration
  perTick: number; // Damage per tick
  damagePerSecond: number; // DPS
  duration: number;
  hitsPerSecond: number;
}

// ============================================================
// DOT DETECTION & PARSING
// ============================================================

/**
 * Detect if an item has a DoT effect and parse the information
 * Handles formats like:
 * - "Damage = 35% of your Strength. Damage is dealt over 1s. Subsequent hits deal 50% bonus Damage, over 3s."
 * - "32 damage with 93 str (2 hits every 0.5s)"
 */
export function parseDotFromPassive(passive: string): DotInfo | null {
  if (!passive) return null;

  // Pattern to find "X% of your [Stat]" or "X% Strength/Intelligence"
  const scalingMatch = passive.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of\s+your\s+)?(?:Strength|strength|STR|str)/i);
  const statType = scalingMatch ? 'strength' : 'intelligence';
  const scaling = scalingMatch ? parseFloat(scalingMatch[1]) : 0;

  // Pattern to find "over Xs" for duration (get the FIRST occurrence for initial damage)
  const durationMatch = passive.match(/over\s+(\d+(?:\.\d+)?)\s*s/i);
  const duration = durationMatch ? parseFloat(durationMatch[1]) : null;

  // If no duration found or no scaling, it's not a DoT
  if (duration === null || scaling === 0) {
    return null;
  }

  // Pattern to find "Damage = X" (must have equals sign, and NOT "X% damage")
  const baseDamageMatch = passive.match(/Damage\s*=\s*(\d+(?:\.\d+)?)(?!\s*%)/i);
  const baseDamage = baseDamageMatch ? parseFloat(baseDamageMatch[1]) : 0;

  // Default: assume 2 ticks per second unless specified otherwise
  let hitsPerSecond = 2;
  
  // Check for specific tick patterns like "2 hits every 0.5s"
  const tickMatch = passive.match(/(\d+)\s+hits?\s+every\s+(\d+(?:\.\d+)?)\s*s/i);
  if (tickMatch) {
    const hits = parseFloat(tickMatch[1]);
    const interval = parseFloat(tickMatch[2]);
    hitsPerSecond = hits / interval;
  }

  return {
    baseDamage,
    scaling,
    scalingStat: statType,
    duration,
    hitsPerSecond,
    isDetected: true
  };
}

// ============================================================
// DOT DAMAGE CALCULATION
// ============================================================

/**
 * Calculate the DoT damage dealt over the full duration
 * 
 * Formula for DoT items (like Crusher):
 * 1. Calculate total damage: floor(baseDamage + scalingStat × scaling%)
 * 2. Calculate per-tick: floor(totalDamage / numberOfTicks)
 * 3. Display total: perTick × numberOfTicks
 * 
 * Example with Crusher (35% STR, 2 ticks over 1s):
 * - 193 STR: floor(0 + 193 × 0.35) = 67 → 67/2 = 33.5 → floor(33.5) = 33 per tick → 66 total
 * - 213 STR: floor(0 + 213 × 0.35) = 74 → 74/2 = 37 → floor(37) = 37 per tick → 74 total
 */
export function calculateDotDamage(
  dotInfo: DotInfo,
  godStats: GodStats,
  damageType: DamageType
): DotResult {
  if (!dotInfo.isDetected) {
    return {
      totalDamage: 0,
      perTick: 0,
      damagePerSecond: 0,
      duration: 0,
      hitsPerSecond: 0
    };
  }

  // Get the scaling stat value
  const scalingStat = dotInfo.scalingStat === 'strength' ? godStats.strength : godStats.intelligence;
  
  // Step 1: Calculate total damage from base + scaling, then floor
  const totalDamageBeforeTicks = dotInfo.baseDamage + (scalingStat * dotInfo.scaling / 100);
  const totalDamageFloored = Math.floor(totalDamageBeforeTicks);
  
  // Step 2: Calculate number of ticks
  const totalTicks = dotInfo.duration * dotInfo.hitsPerSecond;
  
  // Step 3: Calculate per-tick damage (divide total by ticks, then floor)
  const perTick = Math.floor(totalDamageFloored / totalTicks);
  
  // Step 4: Calculate displayed total (may differ from floored total due to per-tick rounding)
  const totalDamage = perTick * totalTicks;
  
  // DPS: total damage / duration
  const damagePerSecond = Math.floor(totalDamage / dotInfo.duration);

  return {
    totalDamage,
    perTick,
    damagePerSecond,
    duration: dotInfo.duration,
    hitsPerSecond: dotInfo.hitsPerSecond
  };
}

/**
 * Format DoT info for display
 */
export function formatDotDisplay(result: DotResult): string {
  if (result.totalDamage === 0) return '';

  const ticks = Math.round(result.duration * result.hitsPerSecond);
  return `${result.totalDamage} total (${result.perTick} × ${ticks} ticks, ${result.damagePerSecond} DPS)`;
}

// ============================================================
// GOD PASSIVE DOT PARSING
// ============================================================

export interface PassiveDotInfo {
  baseDamage: number;
  scaling: number;
  scalingStat: 'strength' | 'intelligence';
  duration: number;
  tickInterval: number; // seconds between ticks
  totalTicks: number;
  label: string; // e.g., "Ignite" for display purposes
}

/**
 * Parse DOT info from god passive attributes
 * Handles formats like Agni's Combustion:
 * - "Ignite Damage: 5"
 * - "Ignite Damage Scaling: 6% Intelligence"
 * - Description mentions "every 0.5s for 3s"
 */
export function parsePassiveDot(
  attributes: { label: string; value: string }[] | undefined,
  description: string
): PassiveDotInfo | null {
  if (!attributes || attributes.length === 0) return null;

  // Look for damage attributes with common DOT keywords
  const dotKeywords = ['ignite', 'burn', 'bleed', 'poison', 'dot', 'tick'];

  let baseDamage = 0;
  let scaling = 0;
  let scalingStat: 'strength' | 'intelligence' = 'intelligence';
  let label = 'DoT';

  for (const attr of attributes) {
    const labelLower = attr.label.toLowerCase();
    const valueLower = attr.value.toLowerCase();

    // Check if this is a DOT-related attribute
    const isDotAttr = dotKeywords.some(kw => labelLower.includes(kw));
    if (!isDotAttr) continue;

    // Extract the DOT name for display (e.g., "Ignite")
    for (const kw of dotKeywords) {
      if (labelLower.includes(kw)) {
        label = attr.label.split(' ')[0]; // Get first word like "Ignite"
        break;
      }
    }

    // Check if this is a base damage attribute (no "scaling" in label)
    if (!labelLower.includes('scaling') && !valueLower.includes('%')) {
      const numMatch = attr.value.match(/(\d+(?:\.\d+)?)/);
      if (numMatch) {
        baseDamage = parseFloat(numMatch[1]);
      }
    }

    // Check if this is a scaling attribute
    if (labelLower.includes('scaling') || valueLower.includes('%')) {
      const scalingMatch = attr.value.match(/(\d+(?:\.\d+)?)\s*%/);
      if (scalingMatch) {
        scaling = parseFloat(scalingMatch[1]);
      }
      // Determine stat type
      if (valueLower.includes('intelligence') || valueLower.includes('int')) {
        scalingStat = 'intelligence';
      } else if (valueLower.includes('strength') || valueLower.includes('str')) {
        scalingStat = 'strength';
      }
    }
  }

  // If we didn't find DOT damage attributes, return null
  if (baseDamage === 0 && scaling === 0) return null;

  // Parse duration and tick interval from description
  // Look for patterns like "every 0.5s for 3s" or "damage every X seconds for Y seconds"
  let tickInterval = 0.5; // default
  let duration = 3; // default

  // Pattern: "every Xs for Ys"
  const everyForMatch = description.match(/every\s+(\d+(?:\.\d+)?)\s*s(?:econds?)?\s+for\s+(\d+(?:\.\d+)?)\s*s/i);
  if (everyForMatch) {
    tickInterval = parseFloat(everyForMatch[1]);
    duration = parseFloat(everyForMatch[2]);
  } else {
    // Pattern: "for Xs" alone
    const forMatch = description.match(/for\s+(\d+(?:\.\d+)?)\s*s(?:econds?)?/i);
    if (forMatch) {
      duration = parseFloat(forMatch[1]);
    }
    // Pattern: "every Xs"
    const everyMatch = description.match(/every\s+(\d+(?:\.\d+)?)\s*s(?:econds?)?/i);
    if (everyMatch) {
      tickInterval = parseFloat(everyMatch[1]);
    }
  }

  const totalTicks = Math.round(duration / tickInterval);

  return {
    baseDamage,
    scaling,
    scalingStat,
    duration,
    tickInterval,
    totalTicks,
    label
  };
}

/**
 * Calculate passive DOT damage
 */
export function calculatePassiveDotDamage(
  dotInfo: PassiveDotInfo,
  godStats: GodStats
): { perTick: number; total: number; ticks: number } {
  const statValue = dotInfo.scalingStat === 'strength'
    ? godStats.strength
    : godStats.intelligence;

  // Per-tick damage = base + (stat * scaling%)
  const perTick = Math.floor(dotInfo.baseDamage + (statValue * dotInfo.scaling / 100));
  const total = perTick * dotInfo.totalTicks;

  return {
    perTick,
    total,
    ticks: dotInfo.totalTicks
  };
}
