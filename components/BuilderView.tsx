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
import { God, Item, GodStats, Ability, DamageType } from '../types';
import { 
  calculateTotalStats, 
  calculateAttackSpeed, 
  getAttackSpeedPercentAtLevel,
  calculateBasicAttack,
  calculateAbilityDamage,
  extractAbilityDamageInfo,
  getAbilityRank,
  parseScaling
} from './damageCalculations';

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

// Stat filters config
const STAT_FILTERS = [
  { id: 'Strength', label: 'STR', icon: <BicepsFlexed size={12} />, keys: ['Strength', 'Physical Power'] },
  { id: 'Intelligence', label: 'INT', icon: <BookOpen size={12} />, keys: ['Intelligence', 'Magical Power'] },
  { id: 'Attack Speed', label: 'AS', icon: <Zap size={12} />, keys: ['Attack Speed'] },
  { id: 'Crit', label: 'Crit', icon: <Target size={12} />, keys: ['Crit'] },
  { id: 'Pen', label: 'Pen', icon: <Crosshair size={12} />, keys: ['Penetration'] },
  { id: 'Lifesteal', label: 'LS', icon: <Heart size={12} className="text-red-400" />, keys: ['Lifesteal'] },
  { id: 'Cooldown', label: 'CDR', icon: <RotateCcw size={12} />, keys: ['Cooldown'] },
  { id: 'Max Health', label: 'HP', icon: <Heart size={12} className="text-green-500" />, keys: ['Max Health'] },
  { id: 'Max Mana', label: 'Mana', icon: <Droplet size={12} className="text-blue-500" />, keys: ['Max Mana'] },
  { id: 'Physical Protection', label: 'Phys', icon: <Shield size={12} />, keys: ['Phys'] },
  { id: 'Magical Protection', label: 'Mag', icon: <Shield size={12} className="text-purple-400" />, keys: ['Mag'] },
];

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
}

const AbilityCard: React.FC<AbilityCardProps> = ({ 
  ability, 
  abilityNum, 
  rank, 
  godStats, 
  godDamageType,
  level,
  isExpanded,
  onToggle
}) => {
  const isPassive = abilityNum === 'passive';
  const isBasic = abilityNum === 'basic';
  const isUlt = abilityNum === 4;
  
  // Extract damage info from ability
  const damageInfo = useMemo(() => extractAbilityDamageInfo(ability), [ability]);
  
  // Calculate damage if applicable
  const damageResult = useMemo(() => {
    if (isBasic) {
      // Basic attack calculation
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
      return calculateAbilityDamage(
        damageInfo.baseDamageValues,
        rank,
        damageInfo.scaling,
        godStats,
        dummyDefender,
        godDamageType,
        godStats.percentPenetration || 0,
        godStats.flatPenetration || 0
      );
    }
    return null;
  }, [isBasic, damageInfo, rank, godStats, godDamageType]);

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
          {isPassive && (
            <p className="text-[10px] text-slate-400 line-clamp-1 mt-1">{ability.description?.split('\n')[0]}</p>
          )}
        </div>

        {/* Expand/Collapse */}
        <div className="shrink-0 text-slate-500">
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-3 pb-3 border-t border-slate-700/50">
          {/* Description */}
          <div className="mt-3">
            <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
              {ability.description}
            </p>
          </div>

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
                  <span className="text-xs font-mono text-slate-300">{ability.cooldown}</span>
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
}

const AbilitiesPanel: React.FC<AbilitiesPanelProps> = ({ god, aspectId, level, stats }) => {
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
// ITEM PASSIVES PANEL COMPONENT
// ============================================================
interface ItemPassivesPanelProps {
  items: (Item | null)[];
}

const ItemPassivesPanel: React.FC<ItemPassivesPanelProps> = ({ items }) => {
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
      
      {itemsWithPassives.map((item, idx) => (
        <div 
          key={item.id + idx}
          className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-3 hover:border-slate-600 transition-colors"
        >
          <div className="flex items-start gap-3">
            {/* Item Icon */}
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Passive Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-white text-sm">{item.name}</h4>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  item.category === 'Offense' ? 'bg-red-500/20 text-red-400' :
                  item.category === 'Defense' ? 'bg-blue-500/20 text-blue-400' :
                  item.category === 'Utility' ? 'bg-green-500/20 text-green-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.passive}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// ENHANCED STATS PANEL COMPONENT
// ============================================================
interface EnhancedStatsPanelProps {
  god: God;
  level: number;
  items: (Item | null)[];
}

const EnhancedStatsPanel: React.FC<EnhancedStatsPanelProps> = ({ god, level, items }) => {
  const totalStats = useMemo(() => 
    calculateTotalStats(god, level, items, god.damageType),
    [god, level, items]
  );
  
  const baseStats = useMemo(() => 
    god.statsByLevel[Math.max(0, Math.min(19, level - 1))],
    [god, level]
  );

  const asPercentFromLevel = getAttackSpeedPercentAtLevel(totalStats.attackSpeedPercent, level);
  const actualAS = calculateAttackSpeed(totalStats.baseAttackSpeed, asPercentFromLevel, 0);
  const baseAsPercent = getAttackSpeedPercentAtLevel(baseStats.attackSpeedPercent, level);
  const baseActualAS = calculateAttackSpeed(baseStats.baseAttackSpeed, baseAsPercent, 0);

  const hasItems = items.some(item => item !== null);

  const StatRow: React.FC<{
    icon: React.ReactNode;
    label: string;
    value: string | number;
    baseValue?: number;
    color?: string;
  }> = ({ icon, label, value, baseValue, color = 'text-white' }) => {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    const diff = baseValue !== undefined ? numericValue - baseValue : 0;
    const showDiff = baseValue !== undefined && Math.abs(diff) >= 0.1;

    return (
      <div className="flex items-center justify-between py-0.5">
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="text-slate-500">{icon}</span>
          <span className="text-[10px]">{label}</span>
        </div>
        <div className={`font-mono text-[10px] ${color} flex items-center gap-1`}>
          {value}
          {showDiff && (
            <span className={diff > 0 ? 'text-green-400' : 'text-red-400'}>
              ({diff > 0 ? '+' : ''}{typeof value === 'string' ? diff.toFixed(1) : Math.round(diff)})
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-2 text-xs">
      {/* Offensive */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-red-400 uppercase mb-1">Offensive</div>
        <StatRow icon={<BicepsFlexed size={10} />} label="STR" value={Math.round(totalStats.strength)} baseValue={hasItems ? Math.round(baseStats.strength) : undefined} color="text-orange-400" />
        <StatRow icon={<BookOpen size={10} />} label="INT" value={Math.round(totalStats.intelligence)} baseValue={hasItems ? Math.round(baseStats.intelligence) : undefined} color="text-purple-400" />
        <StatRow icon={<Sword size={10} />} label="Basic Power" value={Math.round(totalStats.inhandPower || 0)} baseValue={hasItems ? Math.round(baseStats.inhandPower || 0) : undefined} color="text-red-400" />
      </div>

      {/* Attack Speed & Crit */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-yellow-400 uppercase mb-1">Speed & Crit</div>
        <StatRow icon={<Zap size={10} />} label="Attack Speed" value={actualAS.toFixed(2)} baseValue={hasItems ? baseActualAS : undefined} color="text-yellow-300" />
        <StatRow icon={<Target size={10} />} label="Crit Chance" value={`${totalStats.critChance}%`} baseValue={hasItems ? baseStats.critChance : undefined} color="text-amber-400" />
        <StatRow icon={<Skull size={10} />} label="Crit Damage" value={`${(totalStats.critDamage * 100).toFixed(0)}%`} baseValue={hasItems ? baseStats.critDamage * 100 : undefined} color="text-amber-400" />
      </div>

      {/* Penetration */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-rose-400 uppercase mb-1">Penetration</div>
        <StatRow icon={<Crosshair size={10} />} label="Flat Pen" value={Math.round(totalStats.flatPenetration || 0)} baseValue={hasItems ? Math.round(baseStats.flatPenetration || 0) : undefined} color="text-rose-400" />
        <StatRow icon={<Layers size={10} />} label="% Pen" value={`${totalStats.percentPenetration || 0}%`} baseValue={hasItems ? baseStats.percentPenetration || 0 : undefined} color="text-rose-400" />
        <StatRow icon={<Heart size={10} />} label="Lifesteal" value={`${totalStats.lifesteal}%`} baseValue={hasItems ? baseStats.lifesteal : undefined} color="text-pink-400" />
      </div>

      {/* Defensive */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-cyan-400 uppercase mb-1">Defensive</div>
        <StatRow icon={<Shield size={10} />} label="Phys Prot" value={Math.round(totalStats.physicalProtection)} baseValue={hasItems ? Math.round(baseStats.physicalProtection) : undefined} color="text-cyan-400" />
        <StatRow icon={<Shield size={10} className="text-purple-400" />} label="Mag Prot" value={Math.round(totalStats.magicalProtection)} baseValue={hasItems ? Math.round(baseStats.magicalProtection) : undefined} color="text-purple-400" />
        <StatRow icon={<ShieldOff size={10} />} label="Mitigation" value={`${totalStats.damageMitigation || 0}%`} baseValue={hasItems ? baseStats.damageMitigation || 0 : undefined} color="text-cyan-300" />
      </div>

      {/* Health & Mana */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-green-400 uppercase mb-1">Health & Mana</div>
        <StatRow icon={<Heart size={10} className="text-green-500" />} label="Max HP" value={Math.round(totalStats.maxHealth)} baseValue={hasItems ? Math.round(baseStats.maxHealth) : undefined} color="text-green-400" />
        <StatRow icon={<Activity size={10} className="text-green-500" />} label="HP Regen" value={totalStats.healthRegen.toFixed(1)} baseValue={hasItems ? baseStats.healthRegen : undefined} color="text-green-400" />
        <StatRow icon={<Droplet size={10} className="text-blue-500" />} label="Max Mana" value={Math.round(totalStats.maxMana)} baseValue={hasItems ? Math.round(baseStats.maxMana) : undefined} color="text-blue-400" />
        <StatRow icon={<Activity size={10} className="text-blue-300" />} label="MP Regen" value={totalStats.manaRegen.toFixed(1)} baseValue={hasItems ? baseStats.manaRegen : undefined} color="text-blue-400" />
      </div>

      {/* Utility */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Utility</div>
        <StatRow icon={<Footprints size={10} />} label="Move Speed" value={Math.round(totalStats.movementSpeed)} baseValue={hasItems ? Math.round(baseStats.movementSpeed) : undefined} />
        <StatRow icon={<RotateCcw size={10} />} label="CDR" value={`${Math.min(40, totalStats.cooldownRate)}%`} baseValue={hasItems ? baseStats.cooldownRate : undefined} />
      </div>
    </div>
  );
};

// ============================================================
// BUILDER ITEM INSPECTOR COMPONENT
// ============================================================
const BuilderItemInspector: React.FC<{ 
  item: Item; 
  allItems: Item[]; 
  onClose: () => void; 
  onSelect?: () => void;
  onRemove?: () => void;
  onChange?: () => void;
  mode: 'preview' | 'view';
}> = ({ item, allItems, onClose, onSelect, onRemove, onChange, mode }) => {
  const roots = (item.type === 'Item' || item.type === 'Starter') ? findRoots(item, allItems) : [item];
  const uniqueRoots = Array.from(new Set(roots.map(r => r.id))).map(id => roots.find(r => r.id === id)!);

  const renderNode = (node: Item, targetId: string, isRoot = false): React.ReactNode => {
    const components = getComponents(node, allItems);
    const isTarget = node.id === targetId;
    return (
      <div key={node.id} className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded border overflow-hidden ${isTarget ? 'border-mythic-gold ring-2 ring-mythic-gold/30' : 'border-slate-600'}`}>
          <img src={node.image} alt={node.name} className="w-full h-full object-cover" />
        </div>
        {components.length > 0 && (
          <>
            <div className="w-px h-2 bg-slate-600" />
            <div className="flex gap-2">
              {components.map(c => renderNode(c, targetId))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden flex flex-col max-h-[80vh]">
      {/* Header */}
      <div className="p-4 border-b border-slate-700 flex items-start gap-4 bg-slate-950/50">
        <div className="w-16 h-16 rounded-lg border border-slate-600 overflow-hidden shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-white text-lg">{item.name}</h3>
            {item.tier && <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">T{item.tier}</span>}
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-yellow-400 font-mono font-bold">{item.cost}g</span>
            <span className={`px-2 py-0.5 rounded ${
              item.category === 'Offense' ? 'bg-red-500/20 text-red-400' :
              item.category === 'Defense' ? 'bg-blue-500/20 text-blue-400' :
              item.category === 'Utility' ? 'bg-green-500/20 text-green-400' :
              'bg-purple-500/20 text-purple-400'
            }`}>{item.category}</span>
            <span className="text-slate-500">{item.type}</span>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded transition-colors">
          <X size={18} className="text-slate-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto flex-1 space-y-4">
        {/* Stats */}
        {Object.keys(item.stats).length > 0 && (
          <div>
            <h4 className="text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">Stats</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(item.stats).map(([stat, value]) => (
                <div key={stat} className="flex justify-between bg-slate-800/50 rounded px-2 py-1.5">
                  <span className="text-xs text-slate-400">{stat}</span>
                  <span className="text-xs font-mono text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Passive */}
        {item.passive && (
          <div>
            <h4 className="text-[10px] uppercase font-bold text-purple-400 mb-2 tracking-wider flex items-center gap-1">
              <Sparkle size={10} /> Passive
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
              {item.passive}
            </p>
          </div>
        )}

        {/* Build Path */}
        {(item.type === 'Item' || item.type === 'Starter') && uniqueRoots.length > 0 && (
          <div className="pt-3 border-t border-slate-800">
            <h4 className="text-[10px] uppercase font-bold text-slate-500 mb-3 tracking-wider flex items-center gap-1">
              <Info size={10} /> Build Path
            </h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {uniqueRoots.map(root => (
                <div key={root.id} className="flex justify-center">
                  {renderNode(root, item.id, true)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-3 border-t border-slate-700 shrink-0 flex gap-2">
        {mode === 'preview' && onSelect && (
          <button onClick={onSelect} className="flex-1 py-2 bg-mythic-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
            Select Item
          </button>
        )}
        {mode === 'view' && (
          <>
            {onChange && (
              <button onClick={onChange} className="flex-1 py-2 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors">
                Change Item
              </button>
            )}
            {onRemove && (
              <button onClick={onRemove} className="py-2 px-4 bg-red-900/50 text-red-400 font-bold rounded-lg hover:bg-red-900 transition-colors border border-red-500/30">
                Remove
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================
// SHARE BUILD BUTTON COMPONENT
// ============================================================
const ShareBuildButton: React.FC<{ godId: string | null; aspectId: string | null; build: CurrentBuild }> = ({ godId, aspectId, build }) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const isShareable = godId && (build.starter || build.relic || build.items.some(i => i));

  const generateUrl = () => {
    const params = new URLSearchParams();
    if (godId) params.set('g', godId);
    if (aspectId) params.set('a', aspectId);
    if (build.starter) params.set('s', build.starter);
    if (build.relic) params.set('r', build.relic);
    const itemStr = build.items.map(i => i || '_').join(',');
    if (itemStr !== '_,_,_,_,_,_') params.set('i', itemStr);
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(generateUrl());
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => { setCopied(false); setShowTooltip(false); }, 2000);
    } catch (err) { console.error('Failed to copy:', err); }
  };

  if (!isShareable) return null;

  return (
    <div className="relative">
      <button onClick={handleShare} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${copied ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-mythic-gold/50'}`}>
        {copied ? <><Check size={16} /><span>Copied!</span></> : <><Share2 size={16} /><span className="hidden sm:inline">Share Build</span></>}
      </button>
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap">
          <div className="flex items-center gap-1.5"><LinkIcon size={12} />Link copied!</div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// MAIN BUILDER VIEW COMPONENT
// ============================================================
export const BuilderView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [activeAspectId, setActiveAspectId] = useState<string | null>(null);
  const [build, setBuild] = useState<CurrentBuild>({ starter: null, items: [null, null, null, null, null, null], relic: null });

  // Level and panel states
  const [builderLevel, setBuilderLevel] = useState(20);
  const [showStats, setShowStats] = useState(true);
  const [showAbilities, setShowAbilities] = useState(true);
  const [showPassives, setShowPassives] = useState(true);
  
  // God/Item selection states
  const [godSearch, setGodSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [itemPickerSlot, setItemPickerSlot] = useState<ItemPickerSlot | null>(null);
  
  // Item filter states
  const [itemSearch, setItemSearch] = useState('');
  const [itemCategory, setItemCategory] = useState('All');
  const [itemTier, setItemTier] = useState('All');
  const [activeStats, setActiveStats] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Item preview/view states
  const [previewItem, setPreviewItem] = useState<Item | null>(null);
  const [viewingBuildItem, setViewingBuildItem] = useState<{ item: Item; slot: ItemPickerSlot } | null>(null);

  // Get all equipped items as Item objects for stats calculation
  const equippedItems = useMemo(() => {
    if (!ITEMS) return [];
    return [build.starter, ...build.items, build.relic]
      .map(id => id ? ITEMS.find(i => i.id === id) || null : null);
  }, [build, ITEMS]);

  // Calculate total stats with items
  const totalStats = useMemo(() => {
    if (!selectedGod) return null;
    return calculateTotalStats(selectedGod, builderLevel, equippedItems, selectedGod.damageType);
  }, [selectedGod, builderLevel, equippedItems]);

  // URL parsing for shared builds
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const godId = params.get('g');
    if (godId && (GODS || []).length > 0) {
      const god = (GODS || []).find(g => g.id === godId);
      if (god) {
        setSelectedGod(god);
        const aspectId = params.get('a');
        if (aspectId) setActiveAspectId(aspectId);
        const starter = params.get('s');
        const relic = params.get('r');
        const itemStr = params.get('i') || '_,_,_,_,_,_';
        const items = itemStr.split(',').map(i => i === '_' ? null : i);
        setBuild({ starter: starter || null, items: items.slice(0, 6) as (string | null)[], relic: relic || null });
      }
    }
  }, [GODS]);

  const getItem = (id: string | null) => id ? (ITEMS || []).find(i => i.id === id) || null : null;

  const handleReset = () => {
    setBuild({ starter: null, items: [null, null, null, null, null, null], relic: null });
    setBuilderLevel(20);
    // Clear URL params
    window.history.replaceState({}, '', window.location.pathname);
  };

  const handleRandomize = () => {
    if (!selectedGod || !ITEMS) return;
    
    const starters = ITEMS.filter(i => i.type === 'Starter');
    const regularItems = ITEMS.filter(i => i.type === 'Item' && i.tier === 3);
    const relics = ITEMS.filter(i => i.type === 'Relic');
    
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    const randomRelic = relics[Math.floor(Math.random() * relics.length)];
    
    const shuffled = [...regularItems].sort(() => Math.random() - 0.5);
    const randomItems = shuffled.slice(0, 6).map(i => i.id);
    
    setBuild({
      starter: randomStarter?.id || null,
      items: randomItems as (string | null)[],
      relic: randomRelic?.id || null
    });
  };

  const selectItem = (item: Item) => {
    if (!itemPickerSlot) return;
    if (itemPickerSlot.type === 'Starter') setBuild({ ...build, starter: item.id });
    else if (itemPickerSlot.type === 'Relic') setBuild({ ...build, relic: item.id });
    else if (itemPickerSlot.type === 'Item' && itemPickerSlot.index !== undefined) {
      const newItems = [...build.items];
      newItems[itemPickerSlot.index] = item.id;
      setBuild({ ...build, items: newItems });
    }
    setItemPickerSlot(null);
    setPreviewItem(null);
  };

  const removeItem = (slot?: ItemPickerSlot) => {
    const targetSlot = slot || itemPickerSlot;
    if (!targetSlot) return;
    if (targetSlot.type === 'Starter') setBuild({ ...build, starter: null });
    else if (targetSlot.type === 'Relic') setBuild({ ...build, relic: null });
    else if (targetSlot.type === 'Item' && targetSlot.index !== undefined) {
      const newItems = [...build.items];
      newItems[targetSlot.index] = null;
      setBuild({ ...build, items: newItems });
    }
    setItemPickerSlot(null);
    setViewingBuildItem(null);
  };

  const handleSlotClick = (slot: ItemPickerSlot, currentItemId: string | null) => {
    if (currentItemId) {
      const item = getItem(currentItemId);
      if (item) setViewingBuildItem({ item, slot });
    } else {
      setItemPickerSlot(slot);
    }
  };

  const toggleStat = (statId: string) => {
    setActiveStats(prev => prev.includes(statId) ? prev.filter(s => s !== statId) : [...prev, statId]);
  };

  // Filter items based on current slot and filters
  const filteredItems = (ITEMS || []).filter(item => {
    if (!itemPickerSlot) return false;
    let typeMatch = false;
    if (itemPickerSlot.type === 'Starter') typeMatch = item.type === 'Starter';
    else if (itemPickerSlot.type === 'Relic') typeMatch = item.type === 'Relic';
    else if (itemPickerSlot.type === 'Item') typeMatch = item.type === 'Item' || item.type === 'God Specific';
    const searchMatch = item.name.toLowerCase().includes(itemSearch.toLowerCase());
    const godMatch = item.type !== 'God Specific' || (selectedGod && (item as any).god === selectedGod.name);
    const categoryMatch = itemCategory === 'All' || item.category === itemCategory;
    let tierMatch = true;
    if (itemTier !== 'All' && itemPickerSlot.type === 'Item') {
      const tierNum = parseInt(itemTier.replace('Tier ', ''));
      tierMatch = item.tier === tierNum;
    }
    let statsMatch = true;
    if (activeStats.length > 0) {
      statsMatch = activeStats.every(statId => {
        const filter = STAT_FILTERS.find(f => f.id === statId);
        if (!filter) return false;
        return Object.keys(item.stats).some(itemKey =>
          filter.keys.some(filterKey => itemKey.toLowerCase().includes(filterKey.toLowerCase()))
        );
      });
    }
    return typeMatch && searchMatch && godMatch && categoryMatch && tierMatch && statsMatch;
  }).sort((a, b) => a.name.localeCompare(b.name));

  // Filter gods
  const filteredGods = (GODS || [])
    .filter(god => god.name.toLowerCase().includes(godSearch.toLowerCase()) && (roleFilter === 'All' || god.lanes.includes(roleFilter)))
    .sort((a, b) => a.name.localeCompare(b.name));

  const hasActiveFilters = itemCategory !== 'All' || itemTier !== 'All' || activeStats.length > 0;

  // ============================================================
  // RENDER: GOD NOT SELECTED
  // ============================================================
  if (!selectedGod) {
    return (
      <div className="container mx-auto px-4 py-8 pb-24">
        {/* Header */}
        <div className="bg-slate-900 border border-slate-800 p-4 flex flex-wrap gap-4 items-center justify-between rounded-xl mb-6">
          <h2 className="font-bold text-white text-lg">Build Creator</h2>
        </div>

        {/* Current Build Preview (if any items selected) */}
        {(build.starter || build.items.some(i => i) || build.relic) && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
            <h3 className="text-sm font-bold text-slate-400 mb-4">Current Build Preview</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {build.starter && (
                <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => { const item = getItem(build.starter); if (item) setViewingBuildItem({ item, slot: { type: 'Starter' } }); }}>
                  <span className="text-[9px] text-purple-400 font-bold">Starter</span>
                  <img src={getItem(build.starter)?.image} className="w-12 h-12 rounded border border-slate-600 hover:border-purple-400 transition-colors" />
                </div>
              )}
              {build.items.filter(Boolean).map((itemId, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => { const item = getItem(itemId); if (item) setViewingBuildItem({ item, slot: { type: 'Item', index: idx } }); }}>
                  <span className="text-[9px] text-slate-500 font-bold">Slot {idx + 1}</span>
                  <img src={getItem(itemId)?.image} className="w-12 h-12 rounded border border-slate-600 hover:border-mythic-gold transition-colors" />
                </div>
              ))}
              {build.relic && (
                <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => { const item = getItem(build.relic); if (item) setViewingBuildItem({ item, slot: { type: 'Relic' } }); }}>
                  <span className="text-[9px] text-cyan-400 font-bold">Relic</span>
                  <img src={getItem(build.relic)?.image} className="w-12 h-12 rounded-full border border-slate-600 hover:border-cyan-400 transition-colors" />
                </div>
              )}
            </div>
            <p className="text-[10px] text-slate-600 mt-3 text-center">Select a god to complete your build • Click items to view details</p>
          </div>
        )}
        
        {/* God Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              placeholder="Search gods..." 
              value={godSearch} 
              onChange={e => setGodSearch(e.target.value)} 
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-slate-500 focus:border-mythic-gold focus:outline-none" 
            />
          </div>
          <div className="flex gap-1 flex-wrap">
            {['All', 'Solo', 'Jungle', 'Mid', 'Carry', 'Support'].map(role => (
              <button 
                key={role} 
                onClick={() => setRoleFilter(role)} 
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${roleFilter === role ? 'bg-mythic-gold text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* God Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
          {filteredGods.map(god => (
            <div 
              key={god.id} 
              onClick={() => setSelectedGod(god)} 
              className="flex flex-col items-center gap-2 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-transparent hover:border-mythic-gold/50 cursor-pointer transition-all group"
            >
              <div className="w-14 h-14 rounded-lg overflow-hidden border-2 border-slate-700 group-hover:border-mythic-gold transition-colors">
                <img src={god.image} alt={god.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold text-slate-300 text-center truncate w-full group-hover:text-mythic-gold transition-colors">
                {god.name}
              </span>
            </div>
          ))}
        </div>

        {/* Item Viewing Modal */}
        {viewingBuildItem && createPortal(
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setViewingBuildItem(null)}>
            <div onClick={e => e.stopPropagation()} className="w-full max-w-md">
              <BuilderItemInspector 
                item={viewingBuildItem.item} 
                allItems={ITEMS || []} 
                onClose={() => setViewingBuildItem(null)}
                onRemove={() => removeItem(viewingBuildItem.slot)}
                onChange={() => { setItemPickerSlot(viewingBuildItem.slot); setViewingBuildItem(null); }}
                mode="view"
              />
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  }

  // ============================================================
  // RENDER: GOD SELECTED - FULL BUILDER
  // ============================================================
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      {/* Builder Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 flex flex-wrap gap-4 items-center justify-between rounded-xl mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <button onClick={() => { setSelectedGod(null); setActiveAspectId(null); }} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <ChevronLeft size={20} className="text-slate-400" />
            </button>
            <img src={selectedGod.image} alt={selectedGod.name} className="w-10 h-10 rounded-lg border border-slate-700 object-cover" />
            <div>
              <h2 className="font-bold text-white">{selectedGod.name}</h2>
              <p className="text-xs text-slate-500">{activeAspectId ? selectedGod.aspects.find(a => a.id === activeAspectId)?.name || 'Base Kit' : 'Base Kit'}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <ShareBuildButton godId={selectedGod?.id || null} aspectId={activeAspectId} build={build} />
          <button onClick={handleReset} className="px-3 py-2 bg-red-900/30 hover:bg-red-900/50 rounded-lg text-red-400 text-sm border border-red-500/30">Reset</button>
        </div>
      </div>

      {/* Randomizer Section */}
      <div className="mb-6 relative overflow-hidden">
        <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-orange-900/40 border border-purple-500/30 rounded-xl p-4 sm:p-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="hidden sm:flex w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
                <Dices size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                  <span className="sm:hidden"><Dices size={18} className="text-purple-400" /></span>
                  Feeling Lucky?
                </h3>
                <p className="text-xs text-slate-400">Generate a random build instantly</p>
              </div>
            </div>
            <button 
              onClick={handleRandomize}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-105 active:scale-95"
            >
              <Shuffle size={18} />
              <span>Randomize Build</span>
              <Sparkles size={14} className="text-yellow-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Aspect Selection + Build Slots */}
        <div className="lg:col-span-3 space-y-4">
          {/* Aspect Selection */}
          {selectedGod.aspects.length > 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Aspect</h3>
              <button 
                onClick={() => setActiveAspectId(null)} 
                className={`w-full text-left p-3 rounded-lg border mb-2 transition-colors ${!activeAspectId ? 'border-mythic-gold bg-mythic-gold/10 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
              >
                <span className="font-bold">Base Kit</span>
                <p className="text-xs mt-1 opacity-70">Original abilities</p>
              </button>
              {selectedGod.aspects.map(aspect => (
                <button 
                  key={aspect.id} 
                  onClick={() => setActiveAspectId(aspect.id)} 
                  className={`w-full text-left p-3 rounded-lg border mb-2 transition-colors ${activeAspectId === aspect.id ? 'border-mythic-gold bg-mythic-gold/10 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
                >
                  <span className="font-bold">{aspect.name}</span>
                  <p className="text-xs mt-1 opacity-70 line-clamp-2">{aspect.description}</p>
                </button>
              ))}
            </div>
          )}

          {/* Build Slots */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase">Your Build</h4>
              <p className="text-[10px] text-slate-600">Tap item to view</p>
            </div>
            
            {/* Starter & Relic */}
            <div className="flex justify-center gap-6 mb-6">
              <div onClick={() => handleSlotClick({ type: 'Starter' }, build.starter)} className="flex flex-col items-center gap-2 cursor-pointer group">
                <span className="text-[10px] font-bold text-purple-400 uppercase">Starter</span>
                <div className={`w-16 h-16 bg-slate-800 rounded-lg border-2 overflow-hidden transition-all group-hover:border-purple-400 ${build.starter ? 'border-purple-500/50' : 'border-slate-600'}`}>
                  {build.starter ? <img src={getItem(build.starter)?.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-slate-600"><Plus size={20} /></div>}
                </div>
              </div>
              <div onClick={() => handleSlotClick({ type: 'Relic' }, build.relic)} className="flex flex-col items-center gap-2 cursor-pointer group">
                <span className="text-[10px] font-bold text-cyan-400 uppercase">Relic</span>
                <div className={`w-16 h-16 bg-slate-800 rounded-full border-2 overflow-hidden transition-all group-hover:border-cyan-400 ${build.relic ? 'border-cyan-500/50' : 'border-slate-600'}`}>
                  {build.relic ? <img src={getItem(build.relic)?.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-slate-600"><Plus size={20} /></div>}
                </div>
              </div>
            </div>
            
            {/* Item Slots */}
            <div className="grid grid-cols-3 gap-3">
              {build.items.map((itemId, index) => (
                <div key={index} onClick={() => handleSlotClick({ type: 'Item', index }, itemId)} className="flex flex-col items-center gap-2 cursor-pointer group">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Slot {index + 1}</span>
                  <div className={`w-16 h-16 bg-slate-800 rounded-lg border-2 overflow-hidden transition-all group-hover:border-mythic-gold/50 ${itemId ? 'border-slate-500' : 'border-slate-600'}`}>
                    {itemId ? <img src={getItem(itemId)?.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-slate-600"><Plus size={20} /></div>}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Total Cost */}
            <div className="mt-6 pt-4 border-t border-slate-700 text-center">
              <span className="text-slate-500 text-sm">Total Cost: </span>
              <span className="text-yellow-400 font-bold">
                {[build.starter, ...build.items, build.relic].filter(Boolean).reduce((sum, id) => sum + (getItem(id)?.cost || 0), 0)}g
              </span>
            </div>
          </div>

          {/* Level Slider */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase">God Level</span>
              <span className="text-mythic-gold font-mono font-bold text-lg">{builderLevel}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={builderLevel} 
              onChange={(e) => setBuilderLevel(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-mythic-gold"
            />
            <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
              <span>1</span><span>5</span><span>10</span><span>15</span><span>20</span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Stats + Abilities + Passives */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Stats Panel */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <button 
              onClick={() => setShowStats(!showStats)}
              className="w-full p-4 flex justify-between items-center hover:bg-slate-800/50 transition-colors"
            >
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <BarChart3 size={16} className="text-mythic-gold" />
                Stats Overview
              </span>
              {showStats ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
            </button>
            {showStats && totalStats && (
              <div className="px-4 pb-4">
                <EnhancedStatsPanel god={selectedGod} level={builderLevel} items={equippedItems} />
              </div>
            )}
          </div>

          {/* Abilities Panel */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <button 
              onClick={() => setShowAbilities(!showAbilities)}
              className="w-full p-4 flex justify-between items-center hover:bg-slate-800/50 transition-colors"
            >
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Flame size={16} className="text-orange-400" />
                Abilities & Damage
              </span>
              {showAbilities ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
            </button>
            {showAbilities && totalStats && (
              <div className="px-4 pb-4">
                <AbilitiesPanel 
                  god={selectedGod} 
                  aspectId={activeAspectId} 
                  level={builderLevel} 
                  stats={totalStats} 
                />
              </div>
            )}
          </div>

          {/* Item Passives Panel */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <button 
              onClick={() => setShowPassives(!showPassives)}
              className="w-full p-4 flex justify-between items-center hover:bg-slate-800/50 transition-colors"
            >
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkle size={16} className="text-purple-400" />
                Item Passives
              </span>
              {showPassives ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
            </button>
            {showPassives && (
              <div className="px-4 pb-4">
                <ItemPassivesPanel items={equippedItems} />
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Item Picker */}
        <div className="lg:col-span-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden sticky top-24">
            {itemPickerSlot ? (
              <>
                {/* Item Picker Header */}
                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white">
                      Select {itemPickerSlot.type === 'Item' ? `Item (Slot ${(itemPickerSlot.index || 0) + 1})` : itemPickerSlot.type}
                    </h3>
                    <p className="text-xs text-slate-500">{filteredItems.length} items available</p>
                  </div>
                  <button onClick={() => setItemPickerSlot(null)} className="p-2 hover:bg-slate-800 rounded-lg">
                    <X size={18} className="text-slate-400" />
                  </button>
                </div>

                {/* Search & Filters */}
                <div className="p-3 border-b border-slate-800 space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input 
                      placeholder="Search items..." 
                      value={itemSearch} 
                      onChange={e => setItemSearch(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-mythic-gold focus:outline-none"
                    />
                  </div>

                  {/* Filter Toggle */}
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${hasActiveFilters ? 'bg-mythic-gold/20 text-mythic-gold' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                  >
                    <Filter size={14} />
                    Filters {hasActiveFilters && `(${(itemCategory !== 'All' ? 1 : 0) + (itemTier !== 'All' ? 1 : 0) + activeStats.length})`}
                  </button>

                  {/* Expanded Filters */}
                  {showFilters && (
                    <div className="space-y-3 pt-2">
                      {/* Category */}
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Category</label>
                        <div className="flex gap-1 flex-wrap">
                          {['All', 'Offense', 'Defense', 'Utility', 'Hybrid'].map(cat => (
                            <button 
                              key={cat} 
                              onClick={() => setItemCategory(cat)}
                              className={`px-2 py-1 rounded text-xs font-bold transition-colors ${itemCategory === cat ? 'bg-mythic-gold text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tier (only for regular items) */}
                      {itemPickerSlot.type === 'Item' && (
                        <div>
                          <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Tier</label>
                          <div className="flex gap-1">
                            {['All', 'Tier 1', 'Tier 2', 'Tier 3'].map(tier => (
                              <button 
                                key={tier} 
                                onClick={() => setItemTier(tier)}
                                className={`px-2 py-1 rounded text-xs font-bold transition-colors ${itemTier === tier ? 'bg-mythic-gold text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                              >
                                {tier}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Stat Filters */}
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Stats</label>
                        <div className="flex gap-1 flex-wrap">
                          {STAT_FILTERS.map(stat => (
                            <button 
                              key={stat.id}
                              onClick={() => toggleStat(stat.id)}
                              className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-bold transition-colors ${activeStats.includes(stat.id) ? 'bg-mythic-gold text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                              {stat.icon}
                              {stat.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Item Grid */}
                <div className="p-3 max-h-[400px] overflow-y-auto">
                  <div className="grid grid-cols-5 gap-2">
                    {filteredItems.map(item => (
                      <div 
                        key={item.id}
                        onClick={() => setPreviewItem(item)}
                        className={`relative cursor-pointer group ${previewItem?.id === item.id ? 'ring-2 ring-mythic-gold' : ''}`}
                      >
                        <div className="w-full aspect-square rounded-lg border border-slate-700 overflow-hidden bg-slate-800 group-hover:border-mythic-gold transition-colors">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        {item.tier && (
                          <div className="absolute top-0 right-0 bg-black/80 text-[8px] text-white px-1 rounded-bl font-mono">
                            T{item.tier}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {filteredItems.length === 0 && (
                    <div className="text-center py-8 text-slate-500">
                      <p className="text-sm">No items match your filters</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="p-8 text-center">
                <Shield size={32} className="mx-auto text-slate-600 mb-3" />
                <h3 className="font-bold text-white mb-2">Item Picker</h3>
                <p className="text-xs text-slate-500">Click on a build slot to select an item</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODALS */}
      
      {/* Item Preview Modal */}
      {previewItem && createPortal(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setPreviewItem(null)}>
          <div onClick={e => e.stopPropagation()} className="w-full max-w-md">
            <BuilderItemInspector 
              item={previewItem} 
              allItems={ITEMS || []} 
              onClose={() => setPreviewItem(null)}
              onSelect={() => { selectItem(previewItem); setPreviewItem(null); }}
              mode="preview"
            />
          </div>
        </div>,
        document.body
      )}

      {/* Item View Modal (for items already in build) */}
      {viewingBuildItem && createPortal(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setViewingBuildItem(null)}>
          <div onClick={e => e.stopPropagation()} className="w-full max-w-md">
            <BuilderItemInspector 
              item={viewingBuildItem.item} 
              allItems={ITEMS || []} 
              onClose={() => setViewingBuildItem(null)}
              onRemove={() => removeItem(viewingBuildItem.slot)}
              onChange={() => { setItemPickerSlot(viewingBuildItem.slot); setViewingBuildItem(null); }}
              mode="view"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default BuilderView;