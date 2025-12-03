import React, { useMemo } from 'react';
import { Swords, Zap, Skull, Shield, Target, TrendingUp, AlertTriangle, Heart, Hexagon } from 'lucide-react';
import { God, GodStats, Item, Ability, DamageType } from '../types';
import {
  calculateTotalStats,
  calculateAbilityDamage,
  calculateBasicAttack,
  extractAbilityDamageInfo,
  getAbilityRank,
  DamageResult,
  BasicAttackResult,
} from '../utils/damageCalculations';

interface DamageAnalysisPanelProps {
  yourGod: God | null;
  yourLevel: number;
  yourItems: (Item | null)[];
  yourAspectId: string | null;
  enemyGod: God | null;
  enemyLevel: number;
  enemyItems: (Item | null)[];
}

// Stat Display Row
const StatRow: React.FC<{ label: string; value: string | number; color?: string }> = ({ label, value, color = 'text-white' }) => (
  <div className="flex justify-between text-xs">
    <span className="text-slate-400">{label}</span>
    <span className={`font-mono ${color}`}>{value}</span>
  </div>
);

// Ability Damage Card
const AbilityDamageCard: React.FC<{
  num: number | 'basic' | 'passive';
  ability: Ability;
  rank: number;
  damageResult: DamageResult | null;
  basicResult?: BasicAttackResult;
  damageInfo: ReturnType<typeof extractAbilityDamageInfo>;
  enemyMaxHealth?: number;
}> = ({ num, ability, rank, damageResult, basicResult, damageInfo, enemyMaxHealth }) => {
  const isUlt = num === 4;
  const isBasic = num === 'basic';
  const isPassive = num === 'passive';
  
  const getIcon = () => {
    if (isPassive) return <Hexagon size={16} className="text-blue-400" />;
    if (isBasic) return <Swords size={16} className="text-slate-300" />;
    if (isUlt) return <Skull size={16} className="text-red-400" />;
    return <Zap size={16} className="text-mythic-gold" />;
  };

  const getLabel = () => {
    if (isPassive) return 'Passive';
    if (isBasic) return 'Basic Attack';
    return `Ability ${num}`;
  };

  return (
    <div className={`bg-slate-800/50 rounded-lg border ${isUlt ? 'border-red-500/30' : 'border-slate-700/50'} overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 border-b border-slate-700/30">
        <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-bold uppercase">{getLabel()}</span>
            {!isPassive && !isBasic && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-mythic-gold/20 text-mythic-gold font-bold">
                Rank {rank}
              </span>
            )}
          </div>
          <p className="text-sm text-white font-semibold truncate">{ability.name}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-3 space-y-2">
        {/* Basic Attack Special Display */}
        {isBasic && basicResult && (
          <>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/50 rounded p-2">
                <div className="text-slate-500 mb-1">Hit Damage</div>
                <div className="text-xl font-bold text-white">{basicResult.damage}</div>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <div className="text-slate-500 mb-1">Crit Damage</div>
                <div className="text-xl font-bold text-yellow-400">{basicResult.critDamage}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/50 rounded p-2">
                <div className="text-slate-500 mb-1">Attack Speed</div>
                <div className="text-lg font-bold text-white">{basicResult.attacksPerSecond}/s</div>
              </div>
              <div className="bg-green-900/30 rounded p-2 border border-green-500/20">
                <div className="text-green-400 mb-1 flex items-center gap-1">
                  <TrendingUp size={10} /> Weighted DPS
                </div>
                <div className="text-lg font-bold text-green-400">{basicResult.critWeightedDps}</div>
              </div>
            </div>
          </>
        )}

        {/* Ability Damage Display */}
        {!isBasic && damageInfo.hasDamage && damageResult && (
          <>
            <div className="space-y-1 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Base Damage:</span>
                <span className="text-white">{damageResult.baseDamage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">+ Scaling:</span>
                <span className="text-blue-400">+{damageResult.scalingDamage}</span>
              </div>
              <div className="flex justify-between border-t border-slate-700/50 pt-1">
                <span className="text-slate-500">Raw Damage:</span>
                <span className="text-white">{damageResult.rawDamage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Enemy Prots:</span>
                <span className="text-orange-400">{damageResult.effectiveProtections} ({damageResult.protectionReduction}% reduction)</span>
              </div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-2 border border-green-500/20 text-center">
              <div className="text-xs text-green-400 uppercase tracking-wider mb-1">Final Damage</div>
              <div className="text-2xl font-black text-green-400">{damageResult.finalDamage}</div>
            </div>
          </>
        )}

        {/* Execute Warning */}
        {damageInfo.isExecute && enemyMaxHealth && (
          <div className="flex items-center gap-2 text-xs bg-red-900/30 text-red-400 rounded p-2 border border-red-500/20">
            <AlertTriangle size={14} />
            <span>Executes below {damageInfo.executeThreshold}% HP ({Math.floor(enemyMaxHealth * damageInfo.executeThreshold / 100)} health)</span>
          </div>
        )}

        {/* Heal Display */}
        {damageInfo.isHeal && damageInfo.healValues.length > 0 && (
          <div className="flex items-center gap-2 text-xs bg-emerald-900/30 text-emerald-400 rounded p-2 border border-emerald-500/20">
            <Heart size={14} />
            <span>Heal: {damageInfo.healValues[Math.min(rank - 1, damageInfo.healValues.length - 1)]} per hit</span>
          </div>
        )}

        {/* Utility Only */}
        {!isBasic && damageInfo.isUtility && !damageInfo.isHeal && (
          <div className="text-xs text-slate-500 italic text-center py-2">
            Utility ability — no direct damage
          </div>
        )}
      </div>
    </div>
  );
};

export const DamageAnalysisPanel: React.FC<DamageAnalysisPanelProps> = ({
  yourGod,
  yourLevel,
  yourItems,
  yourAspectId,
  enemyGod,
  enemyLevel,
  enemyItems,
}) => {
  // Get active kit based on aspect
  const activeKit = useMemo(() => {
    if (!yourGod) return null;
    if (!yourAspectId) return yourGod;
    const aspect = yourGod.aspects.find(a => a.id === yourAspectId);
    return aspect || yourGod;
  }, [yourGod, yourAspectId]);

  // Calculate aggregated stats
  const yourStats = useMemo(() => {
    if (!yourGod) return null;
    return calculateTotalStats(yourGod, yourLevel, yourItems, yourGod.damageType);
  }, [yourGod, yourLevel, yourItems]);

  const enemyStats = useMemo(() => {
    if (!enemyGod) return null;
    return calculateTotalStats(enemyGod, enemyLevel, enemyItems, enemyGod.damageType);
  }, [enemyGod, enemyLevel, enemyItems]);

  // Get leveling order
  const levelingOrder = useMemo(() => {
    if (!yourGod) return [];
    if (yourAspectId && yourGod.aspectLevelingOrders?.[yourAspectId]) {
      return yourGod.aspectLevelingOrders[yourAspectId];
    }
    const aspect = yourGod.aspects.find(a => a.id === yourAspectId);
    if (aspect?.levelingOrder) return aspect.levelingOrder;
    return yourGod.levelingOrder || [];
  }, [yourGod, yourAspectId]);

  if (!yourGod || !activeKit) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
        <Swords size={48} className="mx-auto text-slate-600 mb-4" />
        <h3 className="text-slate-400 font-semibold mb-2">Select a God to Begin</h3>
        <p className="text-slate-500 text-sm">Choose your god and build to see damage calculations</p>
      </div>
    );
  }

  // Create default enemy stats if no enemy god selected (Target Dummy)
  const defaultEnemyStats: GodStats = {
    strength: 0, intelligence: 0, attackSpeed: 0, lifesteal: 0, critChance: 0, critDamage: 1.65,
    penetration: 0, physicalProtection: 0, magicalProtection: 0, maxHealth: 10000,
    healthRegen: 0, maxMana: 500, manaRegen: 0, cooldownRate: 0, movementSpeed: 365,
  };

  const finalEnemyStats = enemyStats || defaultEnemyStats;
  const enemyMaxHealth = finalEnemyStats.maxHealth;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 px-4 py-3 border-b border-slate-800">
        <h3 className="font-bold text-white flex items-center gap-2">
          <Target size={18} className="text-red-400" />
          Damage Analysis
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          {yourGod.name} (Lv.{yourLevel}) vs {enemyGod?.name || 'Target Dummy'} (Lv.{enemyGod ? enemyLevel : '—'})
        </p>
      </div>

      {/* Stats Comparison */}
      <div className="grid grid-cols-2 gap-4 p-4 border-b border-slate-800">
        {/* Your Stats */}
        <div className="bg-slate-800/50 rounded-lg p-3">
          <h4 className="text-xs font-bold text-mythic-gold uppercase tracking-wider mb-2 flex items-center gap-1">
            <Shield size={12} /> Your Stats
          </h4>
          {yourStats && (
            <div className="space-y-1">
              <StatRow label="Strength" value={Math.round(yourStats.strength)} color="text-red-400" />
              <StatRow label="Intelligence" value={Math.round(yourStats.intelligence)} color="text-blue-400" />
              <StatRow label="Penetration" value={`${yourStats.penetration}%`} color="text-orange-400" />
              <StatRow label="Crit Chance" value={`${yourStats.critChance}%`} color="text-yellow-400" />
              <StatRow label="Attack Speed" value={`${yourStats.attackSpeed}%`} />
            </div>
          )}
        </div>

        {/* Enemy Stats */}
        <div className="bg-slate-800/50 rounded-lg p-3">
          <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Target size={12} /> Enemy Stats
          </h4>
          <div className="space-y-1">
            <StatRow label="Phys Prot" value={Math.round(finalEnemyStats.physicalProtection)} color="text-orange-400" />
            <StatRow label="Mag Prot" value={Math.round(finalEnemyStats.magicalProtection)} color="text-purple-400" />
            <StatRow label="Max Health" value={Math.round(finalEnemyStats.maxHealth).toLocaleString()} color="text-green-400" />
          </div>
        </div>
      </div>

      {/* Abilities Grid */}
      <div className="p-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ability Damage Breakdown</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {/* Abilities 1-4 */}
          {[1, 2, 3, 4].map((num) => {
            // @ts-ignore
            const ability = activeKit.abilities[num];
            const rank = getAbilityRank(levelingOrder, yourLevel, num);
            const damageInfo = extractAbilityDamageInfo(ability);
            
            let damageResult: DamageResult | null = null;
            if (damageInfo.hasDamage && yourStats) {
              damageResult = calculateAbilityDamage(
                damageInfo.baseDamageValues,
                rank,
                damageInfo.scaling,
                yourStats,
                finalEnemyStats,
                yourGod.damageType,
                yourStats.penetration,
                0 // flat pen - could parse from items
              );
            }

            return (
              <AbilityDamageCard
                key={num}
                num={num}
                ability={ability}
                rank={rank}
                damageResult={damageResult}
                damageInfo={damageInfo}
                enemyMaxHealth={enemyMaxHealth}
              />
            );
          })}

          {/* Basic Attack */}
          {yourStats && (
            <AbilityDamageCard
              num="basic"
              ability={activeKit.basicAttack}
              rank={1}
              damageResult={null}
              basicResult={calculateBasicAttack(yourStats, finalEnemyStats, yourGod.damageType)}
              damageInfo={{ hasDamage: false, baseDamageValues: [], scaling: [], isExecute: false, executeThreshold: 0, isHeal: false, healValues: [], isUtility: false }}
            />
          )}
        </div>
      </div>
    </div>
  );
};