/**
 * Data validation utilities
 * Ensures data integrity across gods, items, and other game data
 */

import { God, Item } from '../types';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// ============================================================
// GOD VALIDATION
// ============================================================

/**
 * Validate a single god object
 */
export const validateGod = (god: God, godIndex: number = 0): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!god.id) errors.push(`God ${godIndex}: Missing 'id'`);
  if (!god.name) errors.push(`God ${godIndex}: Missing 'name'`);
  if (!god.pantheon) errors.push(`God ${godIndex}: Missing 'pantheon'`);
  if (!god.role) errors.push(`God ${godIndex}: Missing 'role'`);
  if (!god.damageType) errors.push(`God ${godIndex}: Missing 'damageType'`);

  // Stats validation
  if (!god.statsByLevel || god.statsByLevel.length !== 20) {
    errors.push(`God ${god.id}: Must have exactly 20 level stat entries (has ${god.statsByLevel?.length || 0})`);
  }

  // Lanes validation
  if (!god.lanes || god.lanes.length === 0) {
    warnings.push(`God ${god.id}: Has no lanes defined`);
  }

  // Image validation
  if (!god.image) {
    warnings.push(`God ${god.id}: Missing image URL`);
  }

  // Abilities validation
  if (god.abilities) {
    if (!god.abilities[1]) errors.push(`God ${god.id}: Missing ability 1`);
    if (!god.abilities[2]) errors.push(`God ${god.id}: Missing ability 2`);
    if (!god.abilities[3]) errors.push(`God ${god.id}: Missing ability 3`);
    if (!god.abilities[4]) errors.push(`God ${god.id}: Missing ultimate (ability 4)`);
  }

  // Passive validation
  if (!god.passive) {
    warnings.push(`God ${god.id}: Missing passive ability`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validate all gods
 */
export const validateAllGods = (gods: God[]): ValidationResult => {
  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const godIds = new Set<string>();

  gods.forEach((god, index) => {
    const result = validateGod(god, index);
    allErrors.push(...result.errors);
    allWarnings.push(...result.warnings);

    // Check for duplicate IDs
    if (godIds.has(god.id)) {
      allErrors.push(`Duplicate god ID: '${god.id}'`);
    }
    godIds.add(god.id);
  });

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
};

// ============================================================
// ITEM VALIDATION
// ============================================================

/**
 * Validate a single item object
 */
export const validateItem = (item: Item, itemIndex: number = 0): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!item.id) errors.push(`Item ${itemIndex}: Missing 'id'`);
  if (!item.name) errors.push(`Item ${itemIndex}: Missing 'name'`);
  if (!item.type) warnings.push(`Item ${item.id}: Missing 'type'`);
  if (!item.category) warnings.push(`Item ${item.id}: Missing 'category'`);

  // Cost validation
  if (item.cost === undefined || item.cost === null) {
    warnings.push(`Item ${item.id}: Missing or undefined 'cost'`);
  }

  // Image validation
  if (!item.image) {
    warnings.push(`Item ${item.id}: Missing image URL`);
  }

  // BuildsFrom validation
  if (item.buildsFrom && Array.isArray(item.buildsFrom)) {
    if (item.buildsFrom.length > 0 && !item.cost) {
      warnings.push(`Item ${item.id}: Has components but no cost defined`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validate all items
 */
export const validateAllItems = (items: Item[]): ValidationResult => {
  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const itemIds = new Set<string>();

  items.forEach((item, index) => {
    const result = validateItem(item, index);
    allErrors.push(...result.errors);
    allWarnings.push(...result.warnings);

    // Check for duplicate IDs
    if (itemIds.has(item.id)) {
      allErrors.push(`Duplicate item ID: '${item.id}'`);
    }
    itemIds.add(item.id);
  });

  // Validate build chains
  const itemMap = new Map(items.map(i => [i.id, i]));
  items.forEach(item => {
    if (item.buildsFrom) {
      item.buildsFrom.forEach(componentId => {
        if (!itemMap.has(componentId)) {
          allErrors.push(`Item ${item.id}: References non-existent component '${componentId}'`);
        }
      });
    }
  });

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
};

// ============================================================
// REPORTING & LOGGING
// ============================================================

/**
 * Log validation results with formatting
 */
export const logValidationResults = (result: ValidationResult, label: string = 'Validation'): void => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`${label} Results`);
  console.log(`${'='.repeat(50)}`);

  if (result.isValid && result.warnings.length === 0) {
    console.log('✅ All validations passed!');
  } else {
    if (result.errors.length > 0) {
      console.error(`❌ Errors (${result.errors.length}):`);
      result.errors.forEach(err => console.error(`  - ${err}`));
    }

    if (result.warnings.length > 0) {
      console.warn(`⚠️ Warnings (${result.warnings.length}):`);
      result.warnings.forEach(warn => console.warn(`  - ${warn}`));
    }
  }

  console.log(`${'='.repeat(50)}\n`);
};

/**
 * Validate entire dataset
 */
export const validateDataset = (gods: God[], items: Item[]): ValidationResult => {
  const godsResult = validateAllGods(gods);
  const itemsResult = validateAllItems(items);

  return {
    isValid: godsResult.isValid && itemsResult.isValid,
    errors: [...godsResult.errors, ...itemsResult.errors],
    warnings: [...godsResult.warnings, ...itemsResult.warnings]
  };
};
