
// BuilderView.tsx - Enhanced True God Builder
// Features: Ability Panel, Basic Attack Calculator, Item Passives, Real-time Stats

import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
  Share2, Check, Link as LinkIcon, Search, Plus, X, ChevronLeft, Shuffle, Sword, Shield, Dices, Sparkles, Info, Filter, 
  BicepsFlexed, BookOpen, Zap, Target, Crosshair, Heart, Activity, Droplet, RotateCcw, Footprints, Skull, Layers, ShieldOff,
  ChevronUp, ChevronDown, BarChart3, Hexagon, Swords, TrendingUp, Eye, EyeOff, Flame, Sparkle
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { God, Item, GodStats, Ability, DamageType, DEFAULT_GOD_STATS } from '../types';
import { STAT_FILTERS } from '../services/filters';
import { parseDotFromPassive, calculateDotDamage, formatDotDisplay, parsePassiveDot, calculatePassiveDotDamage } from '../services/dotCalculations';

import {
  calculateTotalStats,
  calculateAttackSpeed,
  getAttackSpeedPercentAtLevel,
  calculateBasicAttack,
  calculateAbilityDamage,
  extractAbilityDamageInfo,
  extractSubAbilityDamageInfo,
  getAbilityRank,
  parseScaling,
  ScalingComponent,
  SecondaryDamage
} from './damageCalculations';

import { 
  hasPassiveStances, 
  getDefaultStance, 
  applyPassiveStanceBonuses,
  StanceId 
} from './passiveStanceUtils';
import { PassiveStanceToggle } from './PassiveStanceToggle';
import { BuilderStatsPanel } from './BuilderStatsPanel';

// ============================================================
// INTERFACES
// ============================================================

interface CurrentBuild {
  starter: string | null;
  items: (string | null)[];
  relic: string | null;
}

interface ItemPickerSlot {
  type: 'Starter' | 'Item' | 'Relic';
  index?: number;
}

// Helper functions for build paths
const getComponents = (item: Item, allItems: Item[]) => {
  if (!item.buildsFrom) return [];
  return item.buildsFrom.map(id => allItems.find(i => i.id === id)).filter(Boolean) as Item[];
};

const getUpgrades = (item: Item, allItems: Item[]) => {
  return allItems.filter(i => i.buildsFrom?.includes(item.id));
};

const findRoots = (item: Item, allItems: Item[], visited = new Set<string>()): Item[] => {
  if (visited.has(item.id)) return [];
  visited.add(item.id);
  const upgrades = getUpgrades(item, allItems);
  if (upgrades.length === 0) return [item];
  return upgrades.flatMap(u => findRoots(u, allItems, new Set(visited)));
};

// ============================================================
// COOLDOWN REDUCTION HELPER
// ============================================================
/**
 * Calculate cooldown with CDR applied using Smite's CDR formula
 * Formula: Reduced CD = Base CD / (1 + CDR% / 100)
 * This provides smooth scaling with no hard cap, allowing CDR to exceed 100%
 * 
 * Examples with 14s base cooldown:
 * - 20% CDR → 11.7s
 * - 40% CDR → 10s
 * - 65% CDR → 8.5s
 * - 85% CDR → 7.6s
 * - 105% CDR → 6.8s
 */
const calculateReducedCooldown = (baseCD: string, cdrPercent: number): number => {
  if (!baseCD || baseCD === '-') return 0;
  
  // Parse cooldown: "10s", "10", "10.5s", etc.
  const cdMatch = baseCD.match(/(\d+(?:\.\d+)?)/);
  if (!cdMatch) return 0;
  
  const baseCooldown = parseFloat(cdMatch[1]);
  if (isNaN(baseCooldown)) return 0;
  
  // Smite CDR formula: CD_reduced = Base_CD / (1 + CDR% / 100)
  // Allows CDR to exceed 100% without negative values
  const cdrMultiplier = 1 + Math.max(0, cdrPercent) / 100;
  const reducedCooldown = baseCooldown / cdrMultiplier;
  
  return Math.round(reducedCooldown * 10) / 10; // Round to 1 decimal place
};

// ============================================================
// ABILITY CARD COMPONENT
// ============================================================
interface AbilityCardProps {
  ability: Ability;
  abilityNum: number | 'passive' | 'basic';
  rank: number;
  godStats: GodStats;
  godDamageType: DamageType;
  level: number;
  isExpanded: boolean;
  onToggle: () => void;
  passiveStance?: string | null;  // NEW
  onPassiveStanceChange?: (stance: StanceId) => void;
  // Ability-specific toggles
  ability2Active?: boolean;
  onAbility2Toggle?: (v: boolean) => void;
  ability2Shield?: { physical: number; magical: number; pct: number } | null;
}

const AbilityCard: React.FC<AbilityCardProps> = ({
  ability,
  abilityNum,
  rank,
  godStats,
  godDamageType,
  level,
  isExpanded,
  onToggle,
  passiveStance,
  onPassiveStanceChange,
  ability2Active,
  onAbility2Toggle,
  ability2Shield,
}) => {
  const isPassive = abilityNum === 'passive';
  const isBasic = abilityNum === 'basic';
  const isUlt = abilityNum === 4;
  
  // Extract damage info from ability
  const damageInfo = useMemo(() => {
    // For Ability 3, extract damage from Spear Strike subAbility
    if (abilityNum === 3 && ability.subAbilities && ability.subAbilities[1]) {
      return extractSubAbilityDamageInfo(ability.subAbilities[1]);
    }
    return extractAbilityDamageInfo(ability);
  }, [ability, abilityNum]);
  
  // Calculate damage if applicable
  const damageResult = useMemo(() => {
    if (isBasic) {
      const dummyDefender: GodStats = {
        ...godStats,
        physicalProtection: 0,
        magicalProtection: 0,
        maxHealth: 10000,
        damageMitigation: 0
      };
      return calculateBasicAttack(godStats, dummyDefender, godDamageType);
    }
    
    if (damageInfo.hasDamage && damageInfo.baseDamageValues.length > 0) {
      const dummyDefender: GodStats = {
        ...godStats,
        physicalProtection: 0,
        magicalProtection: 0,
        maxHealth: 10000,
        damageMitigation: 0
      };
      
      // 1. Determine Base Scaling (Handle OR conditions)
      // Defaults to the first part found (e.g. "45% Strength")
      let currentScaling = damageInfo.scaling;
      
      // If there is a conditional scaling (e.g. "OR 60% Strength If Foregoing Armor")
      // And we have a passive stance selected, check if we should swap.
      if (damageInfo.conditionalScaling?.conditional && passiveStance) {
         const { scaling: altScaling, condition } = damageInfo.conditionalScaling.conditional;
         const stance = passiveStance.toLowerCase();
         const condLower = condition.toLowerCase();
         
         let matches = false;
         
         // Unarmored Logic
         if (stance === 'unarmored') {
            matches = condLower.includes('foregoing') || condLower.includes('forego') || condLower.includes('unarmored') || condLower.includes('no armor');
         } 
         // Armored Logic
         else if (stance === 'armored') {
            matches = (condLower.includes('armored') || condLower.includes('wearing armor')) && !condLower.includes('unarmored');
         }

         if (matches) {
            currentScaling = altScaling;
         }
      }
      
      // 2. Add Bonus Scaling from separate Attributes (Additive)
      // e.g. "Bonus Damage Scaling (Unarmored): 15% Strength"
      let bonusScaling: ScalingComponent[] = [];
      
      if (passiveStance && ability.attributes) {
        const stanceKey = passiveStance.toLowerCase();

        // More robust detection for bonus scaling attributes.
        // Some abilities use labels like "Bonus Damage (Unarmored)" or
        // "Bonus Damage Scaling (Unarmored)" — not always containing the
        // literal word "scaling". Match any attribute that references the
        // stance and looks like a scaling line (contains % or strength/str),
        // or explicitly contains "bonus" and the stance.
        const bonusScalingAttr = ability.attributes.find(a => {
          const lab = a.label.toLowerCase();
          const val = (a.value || '').toLowerCase();

          const mentionsStance = lab.includes(stanceKey) || val.includes(stanceKey);
          const looksLikeScaling = lab.includes('scal') || val.includes('%') || val.includes('strength') || val.includes('str');
          const isBonusLabel = lab.includes('bonus') || lab.includes('additional') || lab.includes('increased') || lab.includes('extra');

          return mentionsStance && (isBonusLabel || looksLikeScaling);
        }) || null;

        // Fallback: if a generic "bonus" attribute exists with strength in the value,
        // but it doesn't explicitly include the stance, prefer it only if no better match.
        if (!bonusScalingAttr) {
          const fallback = ability.attributes.find(a => {
            const lab = a.label.toLowerCase();
            const val = (a.value || '').toLowerCase();
            return (lab.includes('bonus') || lab.includes('bonus damage')) && (val.includes('strength') || val.includes('str'));
          });
          if (fallback) {
            bonusScaling = parseScaling(fallback.value);
          }
        } else {
          bonusScaling = parseScaling(bonusScalingAttr.value);
        }
      }
      
      // Combine for calculation
      const finalScaling = [...currentScaling, ...bonusScaling];
      // Debug: log Shield of Achilles parsing so we can inspect values
      if (ability.name && ability.name.toLowerCase().includes('shield of achilles')) {
        // eslint-disable-next-line no-console
        console.debug('[Ability Debug] Shield of Achilles', {
          rank,
          damageInfo,
          currentScaling,
          bonusScaling,
          finalScaling,
          strength: godStats.strength,
        });
      }

      return calculateAbilityDamage(
        damageInfo.baseDamageValues,
        rank,
        finalScaling,
        godStats,
        dummyDefender,
        godDamageType,
        godStats.percentPenetration || 0,
        godStats.flatPenetration || 0
      );
    }
    return null;
  }, [isBasic, damageInfo, rank, godStats, godDamageType, passiveStance, ability.attributes]);

  // Calculate passive DOT damage (e.g., Agni's Combustion)
  const passiveDotResult = useMemo(() => {
    if (!isPassive) return null;
    const dotInfo = parsePassiveDot(ability.attributes, ability.description || '');
    if (!dotInfo) return null;
    return {
      ...calculatePassiveDotDamage(dotInfo, godStats),
      label: dotInfo.label,
      duration: dotInfo.duration,
      tickInterval: dotInfo.tickInterval
    };
  }, [isPassive, ability.attributes, ability.description, godStats]);

  const getIcon = () => {
    if (isPassive) return <Hexagon size={14} className="text-blue-400" />;
    if (isBasic) return <Swords size={14} className="text-slate-300" />;
    if (isUlt) return <Skull size={14} className="text-red-400" />;
    return <Zap size={14} className="text-mythic-gold" />;
  };

  const getLabel = () => {
    if (isPassive) return 'Passive';
    if (isBasic) return 'Basic Attack';
    return `Ability ${abilityNum}`;
  };

  const getBorderColor = () => {
    if (isPassive) return 'border-blue-500/30 hover:border-blue-500/60';
    if (isBasic) return 'border-slate-600 hover:border-slate-500';
    if (isUlt) return 'border-red-500/30 hover:border-red-500/60';
    return 'border-mythic-gold/30 hover:border-mythic-gold/60';
  };

  return (
    <div className={`bg-slate-800/50 rounded-lg border ${getBorderColor()} transition-all overflow-hidden`}>
      {/* For passive abilities, show the stance toggle and bonuses in the same card (always visible) */}
      {isPassive && ability && onPassiveStanceChange && (
        <div className="p-3">
          <PassiveStanceToggle
            passive={ability}
            currentStance={passiveStance || 'armored'}
            onStanceChange={(s) => onPassiveStanceChange(s)}
            level={level}
          />
        </div>
      )}
      {/* Header - Always visible */}
      <button 
        onClick={onToggle}
        className="w-full p-3 flex items-start gap-3 text-left hover:bg-slate-800/80 transition-colors"
      >
        {/* Ability Icon */}
        <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden shrink-0">
          {ability.image ? (
            <img src={ability.image} alt={ability.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {getIcon()}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">{getLabel()}</span>
            {!isPassive && !isBasic && (
              <span className="text-[10px] font-mono text-mythic-gold bg-mythic-gold/10 px-1.5 rounded">
                Rank {rank}
              </span>
            )}
          </div>
          <h4 className="font-bold text-white text-sm truncate">{ability.name}</h4>
          
          {/* Quick Damage Display */}
          {isBasic && damageResult && 'damage' in damageResult && (
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-green-400 font-mono">{damageResult.damage} dmg</span>
              <span className="text-xs text-yellow-400 font-mono">{damageResult.critDamage} crit</span>
              <span className="text-xs text-slate-400 font-mono">{damageResult.attacksPerSecond}/s</span>
            </div>
          )}
          {!isBasic && damageResult && 'finalDamage' in damageResult && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-green-400 font-mono">{damageResult.finalDamage} dmg</span>
              <span className="text-[10px] text-slate-500">
                ({damageResult.baseDamage} + {Math.round(damageResult.scalingDamage)} scaling)
              </span>
            </div>
          )}
          {isPassive && passiveDotResult && (
            <div className="flex items-center gap-2 mt-1">
              <Flame size={12} className="text-orange-400" />
              <span className="text-xs text-orange-400 font-mono">{passiveDotResult.total} total</span>
              <span className="text-[10px] text-slate-500">
                ({passiveDotResult.perTick} × {passiveDotResult.ticks} ticks)
              </span>
            </div>
          )}
          {isPassive && !passiveDotResult && (
            <p className="text-[10px] text-slate-400 line-clamp-1 mt-1">{ability.description?.split('\n')[0]}</p>
          )}
        </div>

        {/* Ability 2 toggle (visible on Ability 2 / Radiant Glory) */}
        {abilityNum === 2 && onAbility2Toggle && (
          <div className="shrink-0 flex items-center gap-2">
            {/* Shield display - prominent position */}
            {ability2Shield && ability2Shield.physical > 0 && (
              <div className="flex items-center gap-1.5 bg-cyan-900/30 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
                <Shield size={14} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm font-mono">{Math.round(ability2Shield.physical)}</span>
              </div>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); onAbility2Toggle(!ability2Active); }}
              className={`text-xs font-bold px-2 py-1 rounded ${ability2Active ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              {ability2Active ? 'Active' : 'Inactive'}
            </button>
            <div className="shrink-0 text-slate-500">
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
        )}
        {!onAbility2Toggle && (
          <div className="shrink-0 text-slate-500">
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-3 pb-3 border-t border-slate-700/50">
          {/* (toggle moved above into card header area) */}

          {/* Description */}
          <div className="mt-3">
            <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
              {ability.description}
            </p>
          </div>

          {/* Sub-Abilities for Ability 3 */}
          {abilityNum === 3 && ability.subAbilities && ability.subAbilities.length > 0 && (
            <div className="mt-3 space-y-3">
              <h5 className="text-[10px] font-bold text-mythic-gold uppercase">Phases</h5>
              {ability.subAbilities.map((subAbility, idx) => (
                <div key={idx} className="bg-slate-800/70 rounded-lg p-2.5 border border-slate-700/50">
                  {/* Sub-Ability Header */}
                  <div className="flex items-start gap-2 mb-2">
                    {subAbility.image ? (
                      <img src={subAbility.image} alt={subAbility.name} className="w-8 h-8 rounded-md object-cover shrink-0" />
                    ) : (
                      <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center shrink-0">
                        <Zap size={12} className="text-slate-500" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs text-white">{subAbility.name}</div>
                      <p className="text-[9px] text-slate-400 leading-relaxed mt-1">{subAbility.description}</p>
                    </div>
                  </div>

                  {/* Sub-Ability Damage Calculation (for Spear Strike) */}
                  {idx === 1 && damageResult && 'finalDamage' in damageResult && (
                    <div className="mt-2 bg-slate-900/50 rounded p-1.5 border border-slate-700/30">
                      <div className="text-[10px] text-slate-400 mb-1">Spear Strike Damage</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-green-400 font-mono">{damageResult.finalDamage}</span>
                        <span className="text-[9px] text-slate-500">
                          ({damageResult.baseDamage} + {Math.round(damageResult.scalingDamage)} scaling)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Sub-Ability Attributes */}
                  {subAbility.attributes && subAbility.attributes.length > 0 && (
                    <div className="mt-2 grid grid-cols-1 gap-1">
                      {subAbility.attributes.map((attr, attrIdx) => (
                        <div key={attrIdx} className="flex justify-between text-[9px]">
                          <span className="text-slate-500">{attr.label}:</span>
                          <span className="text-slate-200 font-mono">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Debug panel for Shield of Achilles */}
          {isExpanded && ability.name?.toLowerCase().includes('shield of achilles') && (
            (() => {
              // Derive debug values similarly to the calculation path
              const stanceKey = passiveStance ? passiveStance.toLowerCase() : null;
              let currentScaling = damageInfo.scaling || [];

              if (damageInfo.conditionalScaling?.conditional && stanceKey) {
                const { scaling: altScaling, condition } = damageInfo.conditionalScaling.conditional;
                const condLower = (condition || '').toLowerCase();
                let matches = false;
                if (stanceKey === 'unarmored') {
                  matches = condLower.includes('foregoing') || condLower.includes('forego') || condLower.includes('unarmored') || condLower.includes('no armor');
                } else if (stanceKey === 'armored') {
                  matches = (condLower.includes('armored') || condLower.includes('wearing armor')) && !condLower.includes('unarmored');
                }
                if (matches) currentScaling = altScaling;
              }

              // find bonus scaling attribute (robust matching)
              let bonusScalingLocal: ScalingComponent[] = [];
              if (passiveStance && ability.attributes) {
                const bonusAttr = ability.attributes.find(a => {
                  const lab = a.label.toLowerCase();
                  const val = (a.value || '').toLowerCase();
                  const mentionsStance = lab.includes(stanceKey || '') || val.includes(stanceKey || '');
                  const looksLikeScaling = lab.includes('scal') || val.includes('%') || val.includes('strength') || val.includes('str');
                  const isBonusLabel = lab.includes('bonus') || lab.includes('additional') || lab.includes('increased') || lab.includes('extra');
                  return mentionsStance && (isBonusLabel || looksLikeScaling);
                }) || null;

                if (bonusAttr) bonusScalingLocal = parseScaling(bonusAttr.value);
              }

              const finalScalingLocal = [...currentScaling, ...bonusScalingLocal];
              const str = godStats.strength || 0;
              const scalingDamageVal = finalScalingLocal.reduce((sum, s) => sum + (str * (s.percent / 100)), 0);
              const baseIdx = Math.max(0, Math.min(4, rank - 1));
              const baseVal = damageInfo.baseDamageValues?.[baseIdx] ?? damageInfo.baseDamageValues?.[0] ?? 0;
              const raw = baseVal + scalingDamageVal;
              const final = Math.floor(raw);

              return (
                <div className="mt-3 bg-red-900/10 border border-red-700/30 rounded-lg p-3">
                  <h5 className="text-[10px] font-bold text-red-300 uppercase mb-2">Debug — Shield of Achilles</h5>
                  <div className="text-[12px] grid grid-cols-2 gap-2">
                    <div className="text-slate-400">Base Damage</div><div className="font-mono">{baseVal}</div>
                    <div className="text-slate-400">STR</div><div className="font-mono">{str}</div>
                    <div className="text-slate-400">Current Scaling</div>
                      <div className="font-mono">{currentScaling.map(s => `${s.percent}% ${s.stat === 'strength' ? 'STR' : 'INT'}`).join(' + ') || '—'}</div>
                    <div className="text-slate-400">Bonus Scaling</div>
                      <div className="font-mono">{bonusScalingLocal.map(s => `${s.percent}% ${s.stat === 'strength' ? 'STR' : 'INT'}`).join(' + ') || '—'}</div>
                    <div className="text-slate-400">Final Scaling</div>
                      <div className="font-mono">{finalScalingLocal.map(s => `${s.percent}% ${s.stat === 'strength' ? 'STR' : 'INT'}`).join(' + ') || '—'}</div>
                    <div className="text-slate-400">Scaling Damage</div><div className="font-mono">{Math.round(scalingDamageVal*10)/10}</div>
                    <div className="text-slate-400">Raw Total</div><div className="font-mono">{Math.round(raw*10)/10}</div>
                    <div className="text-slate-400">Final (floored)</div><div className="font-mono">{final}</div>
                  </div>
                </div>
              );
            })()
          )}

          {/* Cost & Cooldown */}
          {!isPassive && (
            <div className="flex gap-4 mt-3">
              {ability.cost && ability.cost !== '-' && (
                <div className="flex items-center gap-1.5">
                  <Droplet size={12} className="text-blue-400" />
                  <span className="text-[10px] text-slate-400">Cost:</span>
                  <span className="text-xs font-mono text-blue-300">{ability.cost}</span>
                </div>
              )}
              {ability.cooldown && ability.cooldown !== '-' && (
                <div className="flex items-center gap-1.5">
                  <RotateCcw size={12} className="text-slate-400" />
                  <span className="text-[10px] text-slate-400">CD:</span>
                  {godStats.cooldownRate > 0 ? (
                    <>
                      <span className="text-xs font-mono text-slate-500 line-through">{ability.cooldown}</span>
                      <span className="text-xs font-mono text-green-400">{calculateReducedCooldown(ability.cooldown, godStats.cooldownRate)}s</span>
                      <span className="text-[8px] text-slate-500">({godStats.cooldownRate.toFixed(1)}% CDR)</span>
                    </>
                  ) : (
                    <span className="text-xs font-mono text-slate-300">{ability.cooldown}</span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Attributes */}
          {ability.attributes && ability.attributes.length > 0 && (
            <div className="mt-3 bg-slate-900/50 rounded-lg p-2">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {ability.attributes.map((attr, idx) => (
                  <div key={idx} className="flex justify-between text-[10px]">
                    <span className="text-slate-500">{attr.label}:</span>
                    <span className="text-slate-200 font-mono">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Damage Variants for Abilities */}
          {!isBasic && !isPassive && damageResult && 'finalDamage' in damageResult && (
            <div className="mt-3 bg-slate-900/50 rounded-lg p-3">
              <h5 className="text-[10px] font-bold text-mythic-gold uppercase mb-2">Damage Breakdown</h5>
              <div className="space-y-3">
                {/* Primary Damage - show as DoT if applicable */}
                {damageInfo.isDot && damageInfo.dotTicks ? (
                  <div className="bg-slate-800/50 rounded p-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Flame size={12} className="text-orange-400" />
                      <span className="text-[9px] text-slate-400">Tick Damage ({damageInfo.dotTicks} ticks over {damageInfo.dotDuration}s)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-[9px] text-slate-500">Per Tick</div>
                        <div className="text-sm font-bold text-orange-400">{damageResult.finalDamage}</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-500">Total</div>
                        <div className="text-sm font-bold text-green-400">{damageResult.finalDamage * damageInfo.dotTicks}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-800/50 rounded p-2">
                      <div className="text-[9px] text-slate-500 mb-1">Main Hit</div>
                      <div className="text-sm font-bold text-green-400">{damageResult.finalDamage}</div>
                    </div>
                    {ability.description?.toLowerCase().includes('80%') && (
                      <div className="bg-slate-800/50 rounded p-2">
                        <div className="text-[9px] text-slate-500 mb-1">Radial (80%)</div>
                        <div className="text-sm font-bold text-yellow-400">{Math.round(damageResult.finalDamage * 0.8)}</div>
                      </div>
                    )}
                    {ability.description?.toLowerCase().includes('115%') && (
                      <div className="bg-slate-800/50 rounded p-2">
                        <div className="text-[9px] text-slate-500 mb-1">Non-God (115%)</div>
                        <div className="text-sm font-bold text-orange-400">{Math.round(damageResult.finalDamage * 1.15)}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Secondary Damages (Explode, etc.) */}
                {damageInfo.secondaryDamages && damageInfo.secondaryDamages.length > 0 && (
                  <div className="border-t border-slate-700/50 pt-2">
                    {damageInfo.secondaryDamages.map((secondary: SecondaryDamage, idx: number) => {
                      const baseIdx = Math.max(0, Math.min(4, rank - 1));
                      const baseDmg = secondary.baseDamageValues[baseIdx] || secondary.baseDamageValues[0] || 0;
                      const scalingDmg = secondary.scaling.reduce((sum, s) => {
                        const statVal = s.stat === 'strength' ? godStats.strength : godStats.intelligence;
                        return sum + (statVal * s.percent / 100);
                      }, 0);
                      const totalDmg = Math.floor(baseDmg + scalingDmg);

                      return (
                        <div key={idx} className="bg-slate-800/50 rounded p-2">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Zap size={12} className="text-yellow-400" />
                            <span className="text-[9px] text-slate-400">{secondary.label} Damage</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-yellow-400">{totalDmg}</span>
                            <span className="text-[9px] text-slate-500">
                              ({baseDmg} + {Math.round(scalingDmg)} scaling)
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Detailed Damage Breakdown for Basic Attack */}
          {isBasic && damageResult && 'dps' in damageResult && (
            <div className="mt-3 bg-slate-900/50 rounded-lg p-3">
              <h5 className="text-[10px] font-bold text-mythic-gold uppercase mb-2">Damage Breakdown</h5>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[10px] text-slate-500 mb-1">Normal Hit</div>
                  <div className="text-lg font-bold text-white">{damageResult.damage}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 mb-1">Critical Hit</div>
                  <div className="text-lg font-bold text-yellow-400">{damageResult.critDamage}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 mb-1">Attack Speed</div>
                  <div className="text-lg font-bold text-cyan-400">{damageResult.attacksPerSecond}/s</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 mb-1 flex items-center gap-1">
                    <TrendingUp size={10} className="text-green-400" /> Weighted DPS
                  </div>
                  <div className="text-lg font-bold text-green-400">{damageResult.critWeightedDps}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================
// ABILITIES PANEL COMPONENT
// ============================================================
interface AbilitiesPanelProps {
  god: God;
  aspectId: string | null;
  level: number;
  stats: GodStats;
  passiveStance?: StanceId | null;
  onPassiveStanceChange?: (stance: StanceId) => void;
  ability2Active?: boolean;
  onAbility2Toggle?: (v: boolean) => void;
  ability2Shield?: { physical: number; magical: number; pct: number } | null;
}

const AbilitiesPanel: React.FC<AbilitiesPanelProps> = ({ 
  god, 
  aspectId, 
  level, 
  stats,
  passiveStance,
  onPassiveStanceChange,
  ability2Active,
  onAbility2Toggle
  , ability2Shield
}) => {
  const [expandedAbility, setExpandedAbility] = useState<string | null>(null);
  
  // Get the active ability kit (base or aspect)
  const activeKit = useMemo(() => {
    if (aspectId) {
      const aspect = god.aspects.find(a => a.id === aspectId);
      if (aspect) return aspect;
    }
    return god;
  }, [god, aspectId]);

  // Get leveling order for ability ranks
  const levelingOrder = useMemo(() => {
    if (aspectId && god.aspectLevelingOrders?.[aspectId]) {
      return god.aspectLevelingOrders[aspectId];
    }
    return god.levelingOrder || [1, 2, 3, 1, 4, 1, 2, 1, 4, 2, 1, 2, 4, 3, 3, 3, 4, 3, 4, 4];
  }, [god, aspectId]);

  const toggleAbility = (key: string) => {
    setExpandedAbility(prev => prev === key ? null : key);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Flame size={14} className="text-mythic-gold" />
          Abilities
        </h3>
        <span className="text-[10px] text-slate-500">
          {aspectId ? god.aspects.find(a => a.id === aspectId)?.name || 'Aspect' : 'Base Kit'}
        </span>
      </div>

      {/* Passive stance toggle is now rendered inside the Passive Ability card */}

      {/* Passive */}
      <AbilityCard
        ability={activeKit.passive}
        abilityNum="passive"
        rank={1}
        godStats={stats}
        godDamageType={god.damageType}
        level={level}
        isExpanded={expandedAbility === 'passive'}
        onToggle={() => toggleAbility('passive')}
        passiveStance={passiveStance}
        onPassiveStanceChange={onPassiveStanceChange}
      />

      {/* Abilities 1-4 */}
      {[1, 2, 3, 4].map(num => {
        const ability = activeKit.abilities[num as 1 | 2 | 3 | 4];
        const rank = getAbilityRank(levelingOrder, level, num);
        return (
          <AbilityCard
            key={num}
            ability={ability}
            abilityNum={num}
            rank={rank}
            godStats={stats}
            godDamageType={god.damageType}
            level={level}
            isExpanded={expandedAbility === `ability-${num}`}
            onToggle={() => toggleAbility(`ability-${num}`)}
            passiveStance={passiveStance}
            ability2Active={ability2Active}
            onAbility2Toggle={onAbility2Toggle}
            ability2Shield={ability2Shield}
          />
        );
      })}

      {/* Basic Attack */}
      <AbilityCard
        ability={activeKit.basicAttack}
        abilityNum="basic"
        rank={1}
        godStats={stats}
        godDamageType={god.damageType}
        level={level}
        isExpanded={expandedAbility === 'basic'}
        onToggle={() => toggleAbility('basic')}
      />
    </div>
  );
};

// ============================================================
// ITEM PASSIVE CARD COMPONENT (memoized for performance)
// ============================================================
interface ItemPassiveCardProps {
  item: Item;
  isActive: boolean;
  godStats: GodStats;
  godDamageType: DamageType;
  onToggle?: () => void;
}

const ItemPassiveCard = React.memo(({ item, isActive, godStats, godDamageType, onToggle }: ItemPassiveCardProps) => {
  // Determine if this item passive should have a toggle
  // DoT items like The Crusher are always active when abilities hit, so no toggle needed
  const hasToggle = !item.dot && onToggle;

  // Calculate DoT damage directly if item has dot property
  const dotResults = useMemo(() => {
    if (!item.dot) return null;
    
    const str = godStats.strength;
    const intel = godStats.intelligence;
    const scalingStat = item.dot.scalingStat === 'strength' ? str : intel;
    
    // Initial DoT calculation
    const initialTotal = item.dot.baseDamage + (scalingStat * item.dot.scaling / 100);
    const initialFloored = Math.floor(initialTotal);
    const initialTicks = item.dot.duration * item.dot.hitsPerSecond;
    const initialPerTick = Math.floor(initialFloored / initialTicks);
    const initialDisplay = initialPerTick * initialTicks;
    
    // Bonus DoT calculation (if bonusScaling exists)
    let bonusDisplay = null;
    let bonusPerTick = 0;
    let bonusTicks = 0;
    let bonusDuration = item.dot.duration;

    if (item.dot.bonusScaling) {
      const bonusScaling = item.dot.scaling * item.dot.bonusScaling;
      const bonusTotal = item.dot.baseDamage + (scalingStat * bonusScaling / 100);
      const bonusFloored = Math.floor(bonusTotal);
      bonusDuration = item.dot.bonusDuration || item.dot.duration;
      bonusTicks = bonusDuration * item.dot.hitsPerSecond;
      bonusPerTick = Math.floor(bonusFloored / bonusTicks);
      bonusDisplay = bonusPerTick * bonusTicks;
    }

    return {
      initial: {
        total: initialDisplay,
        perTick: initialPerTick,
        ticks: initialTicks,
        dps: Math.floor(initialDisplay / item.dot.duration)
      },
      bonus: bonusDisplay !== null ? {
        total: bonusDisplay,
        perTick: bonusPerTick,
        ticks: bonusTicks,
        dps: Math.floor(bonusDisplay / bonusDuration)
      } : null
    };
  }, [item.dot, godStats.strength, godStats.intelligence]);
  
  return (
    <div 
      className={`bg-slate-800/50 rounded-lg border transition-colors p-3 ${
        isActive ? 'border-green-500/50 hover:border-green-500' : 'border-slate-700/50 hover:border-slate-600'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Item Icon */}
        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1">
          <h4 className="font-bold text-xs text-white mb-1">{item.name}</h4>
          <p className="text-[10px] text-slate-300 leading-relaxed">
            {item.passive}
          </p>
          
          {/* DoT Damage Display */}
          {dotResults && dotResults.initial && (
            <div className="mt-2 space-y-1.5">
              {/* Initial DoT */}
              <div className="bg-slate-900/50 rounded px-2 py-1.5 border border-red-500/20">
                <div className="text-[9px] text-slate-400 mb-1">Initial Hit DoT</div>
                <div className="text-xs font-bold text-red-400 font-mono">
                  {dotResults.initial.total} total
                  <span className="text-slate-500 font-normal ml-1">({dotResults.initial.perTick} × {Math.round(dotResults.initial.ticks)} ticks)</span>
                </div>
              </div>
              
              {/* Bonus DoT (for items like Crusher with subsequent hits dealing reduced damage) */}
              {dotResults.bonus && (
                <div className="bg-slate-900/50 rounded px-2 py-1.5 border border-orange-500/20">
                  <div className="text-[9px] text-slate-400 mb-1">Subsequent Hit DoT (Refreshed)</div>
                  <div className="text-xs font-bold text-orange-400 font-mono">
                    {dotResults.bonus.total} total
                    <span className="text-slate-500 font-normal ml-1">({dotResults.bonus.perTick} × {Math.round(dotResults.bonus.ticks)} ticks)</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {hasToggle && (
          <button
            onClick={onToggle}
            className={`text-xs font-bold px-2 py-1 rounded shrink-0 transition-colors ${
              isActive
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {isActive ? 'On' : 'Off'}
          </button>
        )}
      </div>
    </div>
  );
});

ItemPassiveCard.displayName = 'ItemPassiveCard';

// ============================================================
// ITEM PASSIVES PANEL COMPONENT
// ============================================================
interface ItemPassivesPanelProps {
  items: (Item | null)[];
  godStats: GodStats;
  godDamageType: DamageType;
  activePassives?: Set<string>;
  onPassiveToggle?: (itemId: string) => void;
}

const ItemPassivesPanel: React.FC<ItemPassivesPanelProps> = ({ items, godStats, godDamageType, activePassives = new Set(), onPassiveToggle }) => {
  const itemsWithPassives = items.filter((item): item is Item => item !== null && !!item.passive);
  
  if (itemsWithPassives.length === 0) {
    return (
      <div className="bg-slate-900/50 rounded-lg p-4 text-center">
        <Sparkle size={24} className="mx-auto text-slate-600 mb-2" />
        <p className="text-xs text-slate-500">No item passives equipped</p>
        <p className="text-[10px] text-slate-600 mt-1">Add items with passives to see their effects</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
        <Sparkle size={14} className="text-purple-400" />
        Item Passives ({itemsWithPassives.length})
      </h3>
      
      {itemsWithPassives.map((item) => (
        <ItemPassiveCard
          key={item.id}
          item={item}
          isActive={activePassives.has(item.id)}
          godStats={godStats}
          godDamageType={godDamageType}
          onToggle={onPassiveToggle ? () => onPassiveToggle(item.id) : undefined}
        />
      ))}
    </div>
  );
};

// ============================================================
// MAIN BUILDER VIEW
// ============================================================

export const BuilderView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  
  // State
  const [selectedGodId, setSelectedGodId] = useState<string | null>(null);
  const [aspectId, setAspectId] = useState<string | null>(null);
  const [level, setLevel] = useState(20);
  const [passiveStance, setPassiveStance] = useState<StanceId | null>(null);
  const [ability2Active, setAbility2Active] = useState<boolean>(false);
  const [activeItemPassives, setActiveItemPassives] = useState<Set<string>>(new Set());
  
  const [build, setBuild] = useState<CurrentBuild>({
    starter: null,
    items: [null, null, null, null, null, null],
    relic: null
  });

  // Pickers state
  const [isGodPickerOpen, setIsGodPickerOpen] = useState(false);
  const [isItemPickerOpen, setIsItemPickerOpen] = useState(false);
  const [pickerSlot, setPickerSlot] = useState<ItemPickerSlot | null>(null);
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerFilter, setPickerFilter] = useState<'All' | 'Physical' | 'Magical'>('All');
  const [activeStatFilters, setActiveStatFilters] = useState<string[]>([]);



  // Derived
  const selectedGod = useMemo(() => GODS.find(g => g.id === selectedGodId) || null, [GODS, selectedGodId]);
  
  // Initialize passive stance when god changes
  useEffect(() => {
    if (selectedGod) {
      // Check if god has stances
      if (hasPassiveStances(selectedGod.passive)) {
        setPassiveStance(getDefaultStance(selectedGod.passive));
      } else {
        setPassiveStance(null);
      }
    }
  }, [selectedGod]);



  // 1. Base + Items Stats (For Display in Panel - Keeps stats clean)
  const displayStats = useMemo(() => {
    if (!selectedGod) return DEFAULT_GOD_STATS;
    
    // Get equipped items
    const allItems = [
      build.starter ? ITEMS.find(i => i.id === build.starter) || null : null,
      ...build.items.map(id => id ? ITEMS.find(i => i.id === id) || null : null),
      build.relic ? ITEMS.find(i => i.id === build.relic) || null : null
    ].filter(Boolean);

    // Calculate base god stats + item bonuses only
    return calculateTotalStats(selectedGod, level, allItems, selectedGod.damageType);
  }, [selectedGod, level, build, ITEMS]);

  // 1.b Compute Ability 2 shield amounts based on passive stance
  const ability2Shield = useMemo(() => {
    if (!selectedGod) return null;
    const activeKit = aspectId ? selectedGod.aspects.find(a => a.id === aspectId) || selectedGod : selectedGod;

    const abilityTwo = activeKit.abilities[2];
    if (!abilityTwo || !abilityTwo.attributes) return null;

    // Only show shield when ARMORED
    if (passiveStance !== 'armored') return null;

    // Find the Physical Shield attribute (Armored only)
    const shieldAttr = abilityTwo.attributes.find(a => 
      a.label.toLowerCase().includes('shield') && a.label.toLowerCase().includes('armored')
    );
    if (!shieldAttr || !shieldAttr.value) return null;

    // Parse "50 + 10 Per Level" format
    const match = shieldAttr.value.match(/(\d+)\s*\+\s*(\d+)\s*Per Level/i);
    if (!match) return null;
    
    const baseShield = parseFloat(match[1]) || 0;
    const perLevelShield = parseFloat(match[2]) || 0;
    const totalShield = baseShield + (perLevelShield * (level - 1));

    return {
      physical: totalShield,
      magical: 0,
      pct: 100 // 100% of the calculated shield
    };
  }, [selectedGod, aspectId, passiveStance, level]);

  // Check if ability 2 has toggleable buff attributes (like Radiant Glory's % Strength/Protections)
  const hasAbility2Toggle = useMemo(() => {
    if (!selectedGod) return false;
    const activeKit = aspectId ? selectedGod.aspects.find(a => a.id === aspectId) || selectedGod : selectedGod;
    const abilityTwo = activeKit.abilities[2];
    if (!abilityTwo || !abilityTwo.attributes) return false;

    // Check for percentage-based buff attributes that indicate a toggleable ability
    const hasStrengthBuff = abilityTwo.attributes.some(a =>
      a.label.toLowerCase() === 'strength' && a.value.includes('%')
    );
    const hasProtectionBuff = abilityTwo.attributes.some(a =>
      a.label.toLowerCase().includes('protect') && a.value.includes('%')
    );
    const hasShieldAttr = abilityTwo.attributes.some(a =>
      a.label.toLowerCase().includes('shield')
    );

    return hasStrengthBuff || hasProtectionBuff || hasShieldAttr;
  }, [selectedGod, aspectId]);

  // Parse item passives for stat bonuses
  const parseItemPassiveStats = (passive: string) => {
    const stats: Record<string, any> = {};
    
    // Parse patterns like "+25 Strength", "+25% Strength", "+5% Attack Speed", etc.
    const patterns = [
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\%\s*Strength/gi, stat: 'strength', isPercentOfStat: true },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\s*Strength(?!\%)/gi, stat: 'strength', isPercentOfStat: false },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\%\s*Intelligence/gi, stat: 'intelligence', isPercentOfStat: true },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\s*Intelligence(?!\%)/gi, stat: 'intelligence', isPercentOfStat: false },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\%\s*Attack Speed/gi, stat: 'attackSpeedPercent', isPercentOfStat: true },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\s*Physical Power/gi, stat: 'inhandPower', isPercentOfStat: false },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\s*Magical Power/gi, stat: 'inhandPower', isPercentOfStat: false },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\s*(?:Physical )?Protection/gi, stat: 'physicalProtection', isPercentOfStat: false },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\s*(?:Magical )?Protection/gi, stat: 'magicalProtection', isPercentOfStat: false },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\s*Health/gi, stat: 'maxHealth', isPercentOfStat: false },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\%\s*Cooldown/gi, stat: 'cooldownRate', isPercentOfStat: true },
      { regex: /(?:\+)?(\d+(?:\.\d+)?)\%\s*Lifesteal/gi, stat: 'lifesteal', isPercentOfStat: true },
    ];
    
    // First pass: extract flat bonuses
    for (const { regex, stat, isPercentOfStat } of patterns) {
      if (!isPercentOfStat) {
        let match;
        while ((match = regex.exec(passive)) !== null) {
          const value = parseFloat(match[1]) || 0;
          stats[stat] = (stats[stat] || 0) + value;
        }
      }
    }
    
    // Initialize percent bonuses object
    stats._percentBonuses = {};
    
    // Second pass: extract percentage bonuses (to be applied as multipliers)
    for (const { regex, stat, isPercentOfStat } of patterns) {
      if (isPercentOfStat) {
        let match;
        while ((match = regex.exec(passive)) !== null) {
          const percent = parseFloat(match[1]) || 0;
          stats._percentBonuses[stat] = (stats._percentBonuses[stat] || 0) + percent;
        }
      }
    }
    
    // Debug: Log what we found
    const flatStats = Object.fromEntries(Object.entries(stats).filter(([k]) => k !== '_percentBonuses'));
    if (Object.keys(flatStats).length > 0 || Object.keys(stats._percentBonuses).length > 0) {
      // eslint-disable-next-line no-console
      console.debug('[Item Passive Parse]', { passive, flatStats, percentBonuses: stats._percentBonuses });
    }
    
    return stats;
  };

  // 2. Combat Stats (For Damage Calculation - Includes Passive Stance Bonuses + Item Passives)
  const combatStats = useMemo(() => {
    if (!selectedGod) return DEFAULT_GOD_STATS;

    // Start with display stats
    let stats = { ...displayStats };

    // Apply passive stance bonuses if applicable (e.g., Unarmored Strength)
    if (passiveStance) {
      const activeKit = aspectId ? selectedGod.aspects.find(a => a.id === aspectId) || selectedGod : selectedGod;
      stats = applyPassiveStanceBonuses(stats, activeKit.passive, passiveStance, level);
    }

    // Collect all percentage bonuses to apply additively (like Smite does)
    const percentBonusesTotal: Record<string, number> = {};

    // Apply active item passive bonuses
    if (activeItemPassives.size > 0) {
      // Get equipped items
      const items = [
        build.starter ? ITEMS.find(i => i.id === build.starter) || null : null,
        ...build.items.map(id => id ? ITEMS.find(i => i.id === id) || null : null),
        build.relic ? ITEMS.find(i => i.id === build.relic) || null : null
      ].filter(Boolean);

      for (const item of items) {
        if (item && item.passive && activeItemPassives.has(item.id)) {
          const bonuses = parseItemPassiveStats(item.passive);

          // Apply flat bonuses immediately
          for (const [stat, value] of Object.entries(bonuses)) {
            if (stat === '_percentBonuses') continue; // Skip the metadata object
            if (stat in stats) {
              (stats as any)[stat] = ((stats as any)[stat] || 0) + value;
            }
          }

          // Collect percentage bonuses (to be applied additively later)
          const percentBonuses = bonuses._percentBonuses;
          if (percentBonuses) {
            for (const [stat, percent] of Object.entries(percentBonuses)) {
              percentBonusesTotal[stat] = (percentBonusesTotal[stat] || 0) + (percent as number);
            }
          }
        }
      }
    }

    // Collect ability 2 temporary buff percentages (e.g., Radiant Glory protections + strength)
    if (ability2Active) {
      // Find active kit (aspect or base)
      const activeKit = aspectId ? selectedGod.aspects.find(a => a.id === aspectId) || selectedGod : selectedGod;
      const abilityTwo = activeKit.abilities[2];
      if (abilityTwo && abilityTwo.attributes) {
        // Look for Strength attribute (value like '10%')
        const strAttr = abilityTwo.attributes.find(a => a.label.toLowerCase() === 'strength');
        if (strAttr && strAttr.value) {
          const match = strAttr.value.match(/(\d+(?:\.\d+)?)%/);
          if (match) {
            const pct = parseFloat(match[1]) || 0;
            percentBonusesTotal['strength'] = (percentBonusesTotal['strength'] || 0) + pct;
          }
        }

        // Look for protections attribute (value like '20%')
        const protAttr = abilityTwo.attributes.find(a => a.label.toLowerCase().includes('protect'));
        if (protAttr && protAttr.value) {
          const match = protAttr.value.match(/(\d+(?:\.\d+)?)%/);
          if (match) {
            const pct = parseFloat(match[1]) || 0;
            percentBonusesTotal['physicalProtection'] = (percentBonusesTotal['physicalProtection'] || 0) + pct;
            percentBonusesTotal['magicalProtection'] = (percentBonusesTotal['magicalProtection'] || 0) + pct;
          }
        }
      }
    }

    // Apply all percentage bonuses additively (e.g., 25% + 10% = 35% total)
    for (const [stat, totalPercent] of Object.entries(percentBonusesTotal)) {
      if (stat in stats) {
        const currentValue = (stats as any)[stat] || 0;
        (stats as any)[stat] = currentValue * (1 + totalPercent / 100);
      }
    }

    return stats;
  }, [displayStats, passiveStance, aspectId, selectedGod, level, ability2Active, activeItemPassives, build, ITEMS]);

  // Handlers
  const handleGodSelect = (god: God) => {
    setSelectedGodId(god.id);
    setAspectId(null); // Reset aspect
    setBuild({ starter: null, items: [null, null, null, null, null, null], relic: null });
    setIsGodPickerOpen(false);
  };

  const handleItemSelect = (item: Item) => {
    if (!pickerSlot) return;

    if (pickerSlot.type === 'Starter') {
      setBuild(prev => ({ ...prev, starter: item.id }));
    } else if (pickerSlot.type === 'Relic') {
      setBuild(prev => ({ ...prev, relic: item.id }));
    } else if (typeof pickerSlot.index === 'number') {
      const newItems = [...build.items];
      newItems[pickerSlot.index] = item.id;
      setBuild(prev => ({ ...prev, items: newItems }));
    }
    
    setIsItemPickerOpen(false);
    setPickerSlot(null);
  };

  const removeItem = (type: 'Starter' | 'Item' | 'Relic', index?: number) => {
    if (type === 'Starter') setBuild(prev => ({ ...prev, starter: null }));
    else if (type === 'Relic') setBuild(prev => ({ ...prev, relic: null }));
    else if (typeof index === 'number') {
      const newItems = [...build.items];
      newItems[index] = null;
      setBuild(prev => ({ ...prev, items: newItems }));
    }
  };

  const randomizeItems = () => {
    // Get T3 items (final items)
    const t3Items = ITEMS.filter(item => item.type === 'Item' && item.tier === 3);
    const starters = ITEMS.filter(item => item.type === 'Starter');
    const relics = ITEMS.filter(item => item.type === 'Relic');

    if (t3Items.length === 0 || starters.length === 0 || relics.length === 0) return;

    // Randomize starter
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    
    // Randomize 6 items
    const randomItems = Array.from({ length: 6 }, () => 
      t3Items[Math.floor(Math.random() * t3Items.length)].id
    );

    // Randomize relic
    const randomRelic = relics[Math.floor(Math.random() * relics.length)];

    setBuild({
      starter: randomStarter.id,
      items: randomItems,
      relic: randomRelic.id
    });
  };

  const openItemPicker = (type: 'Starter' | 'Item' | 'Relic', index?: number) => {
    setPickerSlot({ type, index });
    setPickerSearch('');
    setActiveStatFilters([]);
    setIsItemPickerOpen(true);
  };

  // Filtered lists for pickers
  const filteredGods = useMemo(() => {
    return GODS.filter(g => 
      g.name.toLowerCase().includes(pickerSearch.toLowerCase()) &&
      (pickerFilter === 'All' || g.damageType === pickerFilter)
    );
  }, [GODS, pickerSearch, pickerFilter]);

  const filteredItems = useMemo(() => {
    if (!pickerSlot) return [];
    
    // Get all items currently in the build
    const itemsInBuild = new Set<string>();
    if (build.starter) itemsInBuild.add(build.starter);
    if (build.relic) itemsInBuild.add(build.relic);
    build.items.forEach(id => {
      if (id) itemsInBuild.add(id);
    });
    
    return ITEMS.filter(item => {
      // Don't show items already in the build (unless we're replacing the same slot)
      if (pickerSlot.type === 'Starter') {
        if (item.type !== 'Starter') return false;
      } else if (pickerSlot.type === 'Relic') {
        if (item.type !== 'Relic') return false;
        // Allow showing current relic (so user can replace it)
        if (itemsInBuild.has(item.id) && item.id !== build.relic) return false;
      } else {
        // Item slot - allow Items and Tier 3s
        if (item.type !== 'Item') return false;
        // Only Tier 3 usually for final build
        if (item.tier !== 3) return false;
        // Hide items already in build items slots
        if (itemsInBuild.has(item.id)) return false;
      }

      // Search check
      if (pickerSearch && !item.name.toLowerCase().includes(pickerSearch.toLowerCase())) return false;

      // Stat filters
      if (activeStatFilters.length > 0) {
        const hasStats = activeStatFilters.every(filterId => {
          const filter = STAT_FILTERS.find(f => f.id === filterId);
          if (!filter) return false;
          return Object.keys(item.stats).some(key => 
            filter.keys.some(k => key.toLowerCase().includes(k.toLowerCase()))
          );
        });
        if (!hasStats) return false;
      }

      return true;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [ITEMS, pickerSlot, pickerSearch, activeStatFilters, build]);

  // --- RENDER ---

  if (!selectedGod) {
    return (
      <div className="container mx-auto px-4 py-6 max-w-[1920px]">
        {/* Disclaimer Banner */}
        <div className="mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-sm text-yellow-100">
          Select a god to create your build. Use the filters to narrow down by damage type.
        </div>

        {/* Lucky Buttons */}
        <div className="mb-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              const randomGod = GODS[Math.floor(Math.random() * GODS.length)];
              handleGodSelect(randomGod);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <Sparkles size={18} />
            Feeling Lucky? (Random God)
          </button>
          <button
            onClick={() => {
              const randomGod = GODS[Math.floor(Math.random() * GODS.length)];
              handleGodSelect(randomGod);
              // Randomize items too
              setTimeout(() => {
                randomizeItems();
              }, 100);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <Dices size={18} />
            Full Random (God + Items)
          </button>
        </div>

        {/* God Selection Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Sword size={24} className="text-mythic-gold" />
            Select a God
          </h2>
          
          {/* Filter */}
          <div className="mb-4 flex gap-2">
            <button
              onClick={() => setPickerFilter('All')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                pickerFilter === 'All'
                  ? 'bg-mythic-gold text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setPickerFilter('Physical')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                pickerFilter === 'Physical'
                  ? 'bg-orange-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Physical
            </button>
            <button
              onClick={() => setPickerFilter('Magical')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                pickerFilter === 'Magical'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Magical
            </button>
          </div>

          {/* Search */}
          <div className="mb-6 flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
            <Search className="text-slate-500" size={18} />
            <input
              autoFocus
              placeholder="Search gods..."
              className="bg-transparent text-white w-full focus:outline-none"
              value={pickerSearch}
              onChange={e => setPickerSearch(e.target.value)}
            />
          </div>

          {/* Gods Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {filteredGods.map(god => (
              <button
                key={god.id}
                onClick={() => handleGodSelect(god)}
                className="group relative aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700 hover:border-mythic-gold transition-all hover:shadow-lg hover:shadow-mythic-gold/50"
              >
                <img src={god.image} alt={god.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-sm font-bold text-white leading-tight">{god.name}</div>
                  <div className="text-xs text-slate-300 mt-1">{god.role}</div>
                  <div className={`text-[10px] font-semibold mt-1 ${god.damageType === 'Physical' ? 'text-orange-400' : 'text-blue-400'}`}>
                    {god.damageType}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const equippedItems = [
    build.starter ? ITEMS.find(i => i.id === build.starter) || null : null,
    ...build.items.map(id => id ? ITEMS.find(i => i.id === id) || null : null),
    build.relic ? ITEMS.find(i => i.id === build.relic) || null : null
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-[1920px]">
      
      {/* Work-in-Progress Disclaimer */}
      <div className="mb-6 bg-blue-500/10 border border-blue-500/40 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Sparkles size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-blue-200 mb-1">🚀 Builder System in Development</h3>
            <p className="text-xs text-blue-100">We're actively working on this feature! Currently adding passives, abilities, and item effects to create a fully functional build optimization system for mid-maxing. More features coming soon!</p>
          </div>
        </div>
      </div>
      
      {/* Disclaimer & Lucky Buttons */}
      <div className="mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-yellow-100">Build your ultimate god with items and relics</p>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={randomizeItems}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm rounded-lg transition-all transform hover:scale-105"
            title="Randomize items only"
          >
            <Shuffle size={14} />
            Randomize Items
          </button>
          <button
            onClick={() => {
              const randomGod = GODS[Math.floor(Math.random() * GODS.length)];
              handleGodSelect(randomGod);
              randomizeItems();
            }}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm rounded-lg transition-all transform hover:scale-105"
            title="Randomize god and items"
          >
            <Dices size={14} />
            Full Random
          </button>
        </div>
      </div>
      
      {/* Top Bar: God Info & Controls */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
        {/* God Card */}
        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-mythic-gold shadow-lg cursor-pointer" onClick={() => setIsGodPickerOpen(true)}>
            <img src={selectedGod.image} alt={selectedGod.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-white leading-none">{selectedGod.name}</h2>
            <p className="text-xs text-slate-400 font-bold uppercase mt-1">{selectedGod.role} • {selectedGod.damageType}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setIsGodPickerOpen(true)} className="text-[10px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 transition-colors">
                Change God
              </button>
              {selectedGod.aspects.length > 0 && (
                <div className="relative group">
                  <select 
                    value={aspectId || ''} 
                    onChange={(e) => setAspectId(e.target.value || null)}
                    className="text-[10px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 transition-colors appearance-none pr-6 cursor-pointer focus:outline-none"
                  >
                    <option value="">Base Kit</option>
                    {selectedGod.aspects.map(a => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </select>
                  <ChevronDown size={10} className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Level Slider */}
        <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase">God Level</span>
            <span className="text-xl font-mono font-bold text-mythic-gold">{level}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="20" 
            value={level} 
            onChange={(e) => setLevel(parseInt(e.target.value))} 
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-mythic-gold"
          />
          <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
            <span>1</span><span>10</span><span>20</span>
          </div>
        </div>

        {/* Share Button */}
        <div className="hidden md:block">
          <button className="flex flex-col items-center justify-center w-24 h-24 bg-slate-900 border border-slate-800 hover:border-mythic-gold rounded-xl transition-all group">
            <Share2 className="text-slate-400 group-hover:text-mythic-gold mb-2" />
            <span className="text-xs font-bold text-slate-500 group-hover:text-white">Share</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Items & Stats (4/12) */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* Item Build Grid */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Swords size={16} className="text-mythic-gold" /> Equipment
              </h3>
              <button 
                onClick={() => setBuild({ starter: null, items: [null,null,null,null,null,null], relic: null })}
                className="text-[10px] text-red-400 hover:text-red-300 flex items-center gap-1"
              >
                <X size={12} /> Clear
              </button>
            </div>

            <div className="flex gap-4 mb-4">
              {/* Starter */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[9px] text-slate-500 font-bold uppercase">Starter</span>
                <div 
                  onClick={() => openItemPicker('Starter')}
                  className={`w-14 h-14 rounded-lg border-2 ${build.starter ? 'border-purple-500/50' : 'border-slate-700 border-dashed'} bg-slate-800 flex items-center justify-center cursor-pointer hover:border-purple-400 transition-all relative group overflow-hidden`}
                >
                  {build.starter ? (
                    <>
                      <img src={ITEMS.find(i => i.id === build.starter)?.image} className="w-full h-full object-cover" />
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeItem('Starter'); }}
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                      >
                        <X size={20} className="text-white" />
                      </button>
                    </>
                  ) : <Plus size={20} className="text-slate-600" />}
                </div>
              </div>

              {/* Relic */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[9px] text-slate-500 font-bold uppercase">Relic</span>
                <div 
                  onClick={() => openItemPicker('Relic')}
                  className={`w-14 h-14 rounded-full border-2 ${build.relic ? 'border-cyan-500/50' : 'border-slate-700 border-dashed'} bg-slate-800 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-all relative group overflow-hidden`}
                >
                  {build.relic ? (
                    <>
                      <img src={ITEMS.find(i => i.id === build.relic)?.image} className="w-full h-full object-cover" />
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeItem('Relic'); }}
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                      >
                        <X size={20} className="text-white" />
                      </button>
                    </>
                  ) : <div className="w-3 h-3 bg-slate-700 rounded-full" />}
                </div>
              </div>
            </div>

            {/* Main Items */}
            <div className="grid grid-cols-3 gap-3">
              {build.items.map((itemId, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div 
                    onClick={() => openItemPicker('Item', idx)}
                    className={`w-full aspect-square rounded-xl border-2 ${itemId ? 'border-slate-600' : 'border-slate-800 border-dashed'} bg-slate-800 flex items-center justify-center cursor-pointer hover:border-mythic-gold transition-all relative group overflow-hidden shadow-lg`}
                  >
                    {itemId ? (
                      <>
                        <img src={ITEMS.find(i => i.id === itemId)?.image} className="w-full h-full object-cover" />
                        <button 
                          onClick={(e) => { e.stopPropagation(); removeItem('Item', idx); }}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                        >
                          <X size={24} className="text-white" />
                        </button>
                      </>
                    ) : <Plus size={24} className="text-slate-700" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Panel - Using combatStats (Includes Passive) */}
          <BuilderStatsPanel 
            god={selectedGod} 
            level={level} 
            items={equippedItems} 
            stats={combatStats}
          />

        </div>

        {/* CENTER COLUMN: Abilities (4/12) */}
        <div className="xl:col-span-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sticky top-24">
            <AbilitiesPanel 
              god={selectedGod}
              aspectId={aspectId}
              level={level}
              stats={combatStats} // Using combatStats (Includes Passive) for damage
              passiveStance={passiveStance}
              onPassiveStanceChange={setPassiveStance}
              ability2Active={ability2Active}
              onAbility2Toggle={hasAbility2Toggle ? (v) => setAbility2Active(v) : undefined}
              ability2Shield={ability2Shield}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Analysis & Passives (4/12) */}
        <div className="xl:col-span-4 space-y-6">
          {/* Item Passives */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <ItemPassivesPanel 
              items={equippedItems}
              godStats={combatStats}
              godDamageType={selectedGod.damageType}
              activePassives={activeItemPassives}
              onPassiveToggle={(itemId) => {
                setActiveItemPassives(prev => {
                  const next = new Set(prev);
                  if (next.has(itemId)) {
                    next.delete(itemId);
                  } else {
                    next.add(itemId);
                  }
                  return next;
                });
              }}
            />
          </div>
        </div>

      </div>

      {/* Item Picker Modal */}
      {isItemPickerOpen && pickerSlot && createPortal(
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 w-full max-w-5xl h-[85vh] rounded-2xl border border-slate-700 flex flex-col overflow-hidden shadow-2xl">
            {/* Picker Header */}
            <div className="p-4 border-b border-slate-800 flex flex-col gap-4 bg-slate-950">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-serif font-bold text-white">
                  Select {pickerSlot.type}
                </h3>
                <button onClick={() => setIsItemPickerOpen(false)} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                  <X size={24} className="text-slate-400" />
                </button>
              </div>
              
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    autoFocus
                    placeholder={`Search ${pickerSlot.type}s...`}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-white focus:border-mythic-gold focus:outline-none"
                    value={pickerSearch}
                    onChange={e => setPickerSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Stat Filters (Only for Items) */}
              {pickerSlot.type === 'Item' && (
                <div className="flex flex-wrap gap-2">
                  {STAT_FILTERS.map(stat => (
                    <button
                      key={stat.id}
                      onClick={() => setActiveStatFilters(prev => 
                        prev.includes(stat.id) ? prev.filter(id => id !== stat.id) : [...prev, stat.id]
                      )}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        activeStatFilters.includes(stat.id) 
                          ? 'bg-mythic-gold text-slate-900 border-mythic-gold' 
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {stat.icon} {stat.label}
                    </button>
                  ))}
                  {activeStatFilters.length > 0 && (
                    <button onClick={() => setActiveStatFilters([])} className="text-xs text-red-400 hover:underline px-2">
                      Clear
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Items Grid */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-900">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredItems.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => handleItemSelect(item)}
                    className="group flex flex-col gap-2 bg-slate-800 p-3 rounded-xl border border-slate-700 hover:border-mythic-gold hover:bg-slate-800/80 transition-all text-left relative"
                  >
                    <div className="aspect-square rounded-lg bg-slate-950 overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      {/* Stat Preview Overlay */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center p-2 text-[10px] text-slate-300 space-y-1">
                        {Object.entries(item.stats).slice(0, 4).map(([key, val]) => (
                          <div key={key} className="flex justify-between w-full">
                            <span className="truncate pr-1 text-slate-500">{key.replace('Max ', '')}</span>
                            <span className="text-white font-mono">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white leading-tight mb-1 line-clamp-2">{item.name}</div>
                      <div className="text-[10px] text-yellow-500 font-mono">{item.cost > 0 ? item.cost : 'Free'}</div>
                    </div>
                  </button>
                ))}
                {filteredItems.length === 0 && (
                  <div className="col-span-full py-20 text-center text-slate-500">
                    No items found matching your criteria.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
