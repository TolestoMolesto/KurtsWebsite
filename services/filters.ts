/**
 * Centralized filter utilities for Gods, Items, and other data
 * Ensures consistent filtering across Builder, TierList, and other components
 */

import { God, Item, DamageType } from '../types';
import { BicepsFlexed, BookOpen, Zap, Target, Crosshair, Heart, RotateCcw, Activity, Droplet, Shield } from 'lucide-react';
import React from 'react';

// ============================================================
// STAT FILTER CONFIGURATION
// ============================================================
export const STAT_FILTERS = [
  { id: 'Strength', label: 'STR', icon: React.createElement(BicepsFlexed, { size: 12 }), keys: ['Strength', 'Physical Power'] },
  { id: 'Intelligence', label: 'INT', icon: React.createElement(BookOpen, { size: 12 }), keys: ['Intelligence', 'Magical Power'] },
  { id: 'Attack Speed', label: 'AS', icon: React.createElement(Zap, { size: 12 }), keys: ['Attack Speed'] },
  { id: 'Crit', label: 'Crit', icon: React.createElement(Target, { size: 12 }), keys: ['Crit'] },
  { id: 'Pen', label: 'Pen', icon: React.createElement(Crosshair, { size: 12 }), keys: ['Penetration'] },
  { id: 'Lifesteal', label: 'LS', icon: React.createElement(Heart, { size: 12, className: 'text-red-400' }), keys: ['Lifesteal'] },
  { id: 'Cooldown', label: 'CDR', icon: React.createElement(RotateCcw, { size: 12 }), keys: ['Cooldown'] },
  { id: 'Max Health', label: 'HP', icon: React.createElement(Heart, { size: 12, className: 'text-green-500' }), keys: ['Max Health'] },
  { id: 'Max Mana', label: 'Mana', icon: React.createElement(Droplet, { size: 12, className: 'text-blue-500' }), keys: ['Max Mana'] },
  { id: 'HP5', label: 'HP5', icon: React.createElement(Activity, { size: 12, className: 'text-green-400' }), keys: ['HP5', 'Health Regen'] },
  { id: 'MP5', label: 'MP5', icon: React.createElement(Activity, { size: 12, className: 'text-blue-400' }), keys: ['MP5', 'Mana Regen'] },
  { id: 'Physical Protection', label: 'Phys', icon: React.createElement(Shield, { size: 12 }), keys: ['Phys'] },
  { id: 'Magical Protection', label: 'Mag', icon: React.createElement(Shield, { size: 12, className: 'text-purple-400' }), keys: ['Mag'] },
];

// ============================================================
// GOD FILTER UTILITIES
// ============================================================

/**
 * Get all unique roles from gods
 */
export const getGodRoles = (gods: God[]): string[] => {
  const roles = new Set<string>();
  gods.forEach(god => {
    god.lanes.forEach(lane => roles.add(lane));
  });
  return ['All', ...Array.from(roles).sort()];
};

/**
 * Get all unique pantheons from gods
 */
export const getGodPantheons = (gods: God[]): string[] => {
  const pantheons = new Set(gods.map(g => g.pantheon));
  return ['All', ...Array.from(pantheons).sort()];
};

/**
 * Get all damage types from gods
 */
export const getGodDamageTypes = (gods: God[]): string[] => {
  const types = new Set(gods.map(g => g.damageType));
  return ['All', ...Array.from(types).sort()];
};

/**
 * Filter gods based on multiple criteria
 */
export const filterGods = (
  gods: God[],
  options: {
    search?: string;
    role?: string;
    pantheon?: string;
    damageType?: string;
  }
): God[] => {
  return gods.filter(god => {
    // Search filter
    if (options.search && !god.name.toLowerCase().includes(options.search.toLowerCase())) {
      return false;
    }

    // Role filter (check lanes)
    if (options.role && options.role !== 'All' && !god.lanes.includes(options.role)) {
      return false;
    }

    // Pantheon filter
    if (options.pantheon && options.pantheon !== 'All' && god.pantheon !== options.pantheon) {
      return false;
    }

    // Damage type filter
    if (options.damageType && options.damageType !== 'All' && god.damageType !== options.damageType) {
      return false;
    }

    return true;
  });
};

// ============================================================
// ITEM FILTER UTILITIES
// ============================================================

/**
 * Get all unique categories from items
 */
export const getItemCategories = (items: Item[]): string[] => {
  const categories = new Set(items.map(i => i.category).filter(Boolean));
  return ['All', ...Array.from(categories).sort()];
};

/**
 * Get all unique types from items
 */
export const getItemTypes = (items: Item[]): string[] => {
  const types = new Set<string>();
  items.forEach(item => {
    if (item.type) types.add(item.type);
    if (item.tier) types.add(`Tier ${item.tier}`);
  });
  return ['All', ...Array.from(types).sort()];
};

/**
 * Filter items based on multiple criteria
 */
export const filterItems = (
  items: Item[],
  options: {
    search?: string;
    category?: string;
    type?: string;
    stats?: string[];
  }
): Item[] => {
  return items.filter(item => {
    // Search filter
    if (options.search && !item.name.toLowerCase().includes(options.search.toLowerCase())) {
      return false;
    }

    // Category filter
    if (options.category && options.category !== 'All' && item.category !== options.category) {
      return false;
    }

    // Type filter (handles both item.type and tier)
    if (options.type && options.type !== 'All') {
      if (options.type.startsWith('Tier')) {
        const tierNum = parseInt(options.type.split(' ')[1]);
        if (item.tier !== tierNum) return false;
      } else {
        if (item.type !== options.type) return false;
      }
    }

    // Stats filter (requires ALL selected stats to be present)
    if (options.stats && options.stats.length > 0) {
      const hasAllStats = options.stats.every(statId => {
        const statFilter = STAT_FILTERS.find(f => f.id === statId);
        if (!statFilter) return false;

        return Object.keys(item.stats || {}).some(itemKey =>
          statFilter.keys.some(filterKey => itemKey.toLowerCase().includes(filterKey.toLowerCase()))
        );
      });

      if (!hasAllStats) return false;
    }

    return true;
  });
};

// ============================================================
// COMBINED FILTERING (FOR TIER LIST POOLS)
// ============================================================

/**
 * Filter god entries (including aspects) for tier list
 */
export const filterGodEntries = (
  entries: string[],
  gods: God[],
  options: {
    search?: string;
    role?: string;
    pantheon?: string;
    damageType?: string;
  }
): string[] => {
  const filteredGods = filterGods(gods, options);
  const allowedGodIds = new Set(filteredGods.map(g => g.id));

  return entries
    .filter(entry => {
      const [godId] = entry.split(':');
      return allowedGodIds.has(godId);
    })
    .sort((a, b) => a.localeCompare(b));
};

/**
 * Filter item entries for tier list
 */
export const filterItemEntries = (
  entries: string[],
  items: Item[],
  options: {
    search?: string;
    category?: string;
    type?: string;
    stats?: string[];
  }
): string[] => {
  const filteredItems = filterItems(items, options);
  const allowedItemIds = new Set(filteredItems.map(i => i.id));

  return entries
    .filter(id => allowedItemIds.has(id))
    .sort((a, b) => {
      const itemA = items.find(i => i.id === a);
      const itemB = items.find(i => i.id === b);
      return (itemA?.name || '').localeCompare(itemB?.name || '');
    });
};
