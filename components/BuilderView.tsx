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
import { 
  calculateTotalStats, 
  calculateAttackSpeed, 
  getAttackSpeedPercentAtLevel,
  calculateBasicAttack,
  calculateAbilityDamage,
  extractAbilityDamageInfo,
  getAbilityRank,
  parseScaling,
  ScalingComponent
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
  passiveStance?: string | null;  // NEW
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
  passiveStance
}) => {
  const isPassive = abilityNum === 'passive';
  const isBasic = abilityNum === 'basic';
  const isUlt = abilityNum === 4;
  
  // Extract damage info from ability
  const damageInfo = useMemo(() => extractAbilityDamageInfo(ability), [ability]);
  
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
      
      // Separate base scaling from potential bonus scaling
      // This ensures we never mutate the original damageInfo.scaling array
      const baseScaling = damageInfo.scaling;
      let bonusScaling: ScalingComponent[] = [];
      
      // Handle conditional scaling from attributes (e.g. Unarmored Bonus)
      if (passiveStance === 'unarmored' && ability.attributes) {
        const bonusScalingAttr = ability.attributes.find(a => 
          a.label.toLowerCase().includes('bonus') && 
          a.label.toLowerCase().includes('scaling') &&
          a.label.toLowerCase().includes('unarmored')
        );
        if (bonusScalingAttr) {
          bonusScaling = parseScaling(bonusScalingAttr.value);
        }
      }
      
      // Combine base and bonus for this calculation only
      const finalScaling = [...baseScaling, ...bonusScaling];
      
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

          {/* Damage Variants for Abilities */}
          {!isBasic && !isPassive && damageResult && 'finalDamage' in damageResult && (
            <div className="mt-3 bg-slate-900/50 rounded-lg p-3">
              <h5 className="text-[10px] font-bold text-mythic-gold uppercase mb-2">Damage Variants</h5>
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
}

const AbilitiesPanel: React.FC<AbilitiesPanelProps> = ({ 
  god, 
  aspectId, 
  level, 
  stats,
  passiveStance,
  onPassiveStanceChange 
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

      {/* Passive Stance Toggle */}
      {hasPassiveStances(activeKit.passive) && onPassiveStanceChange && (
        <PassiveStanceToggle
          passive={activeKit.passive}
          currentStance={passiveStance || 'armored'}
          onStanceChange={onPassiveStanceChange}
          level={level}
        />
      )}

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
            passiveStance={passiveStance}
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
            
            <div>
              <h4 className="font-bold text-xs text-white mb-1">{item.name}</h4>
              <p className="text-[10px] text-slate-300 leading-relaxed">
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
// MAIN BUILDER VIEW
// ============================================================

export const BuilderView: React.FC = () => {
  const { gods: GODS, items: ITEMS } = useData();
  
  // State
  const [selectedGodId, setSelectedGodId] = useState<string | null>(null);
  const [aspectId, setAspectId] = useState<string | null>(null);
  const [level, setLevel] = useState(20);
  const [passiveStance, setPassiveStance] = useState<StanceId | null>(null);
  
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

  const activeStats = useMemo(() => {
    if (!selectedGod) return DEFAULT_GOD_STATS;
    
    // Get base stats
    const allItems = [
      build.starter ? ITEMS.find(i => i.id === build.starter) || null : null,
      ...build.items.map(id => id ? ITEMS.find(i => i.id === id) || null : null),
      build.relic ? ITEMS.find(i => i.id === build.relic) || null : null
    ].filter(Boolean);

    // Initial stats
    let stats = calculateTotalStats(selectedGod, level, allItems, selectedGod.damageType);

    // Apply passive stance bonuses if applicable
    if (passiveStance) {
      const activeKit = aspectId ? selectedGod.aspects.find(a => a.id === aspectId) || selectedGod : selectedGod;
      stats = applyPassiveStanceBonuses(stats, activeKit.passive, passiveStance, level);
    }

    return stats;
  }, [selectedGod, aspectId, level, build, ITEMS, passiveStance]);

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
    
    return ITEMS.filter(item => {
      // Type check
      if (pickerSlot.type === 'Starter') {
        if (item.type !== 'Starter') return false;
      } else if (pickerSlot.type === 'Relic') {
        if (item.type !== 'Relic') return false;
      } else {
        // Item slot - allow Items and Tier 3s
        if (item.type !== 'Item') return false;
        // Only Tier 3 usually for final build
        if (item.tier !== 3) return false;
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
  }, [ITEMS, pickerSlot, pickerSearch, activeStatFilters]);

  // --- RENDER ---

  if (!selectedGod) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center max-w-lg shadow-2xl">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sword size={40} className="text-slate-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-2">Divine Builder</h2>
          <p className="text-slate-400 mb-8">Select a God to start theorycrafting your build.</p>
          <button 
            onClick={() => setIsGodPickerOpen(true)}
            className="px-8 py-3 bg-mythic-gold text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            Select God
          </button>
        </div>
        
        {/* God Picker Modal (Immediate render for selection) */}
        {isGodPickerOpen && createPortal(
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 w-full max-w-5xl h-[80vh] rounded-2xl border border-slate-700 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex gap-4 items-center">
                <Search className="text-slate-500" />
                <input 
                  autoFocus
                  placeholder="Search Gods..."
                  className="bg-transparent text-white text-lg w-full focus:outline-none"
                  value={pickerSearch}
                  onChange={e => setPickerSearch(e.target.value)}
                />
                <button onClick={() => setIsGodPickerOpen(false)} className="p-2 hover:bg-slate-800 rounded-full">
                  <X size={24} className="text-slate-400" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {filteredGods.map(god => (
                  <button 
                    key={god.id}
                    onClick={() => handleGodSelect(god)}
                    className="group relative aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-mythic-gold transition-all"
                  >
                    <img src={god.image} alt={god.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-xs font-bold text-white uppercase">{god.name}</div>
                      <div className="text-[10px] text-slate-400">{god.role}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
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

          {/* Stats Panel - Now receives fully calculated stats */}
          <BuilderStatsPanel 
            god={selectedGod} 
            level={level} 
            items={equippedItems} 
            stats={activeStats}
          />

        </div>

        {/* CENTER COLUMN: Abilities (4/12) */}
        <div className="xl:col-span-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sticky top-24">
            <AbilitiesPanel 
              god={selectedGod}
              aspectId={aspectId}
              level={level}
              stats={activeStats}
              passiveStance={passiveStance}
              onPassiveStanceChange={setPassiveStance}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Analysis & Passives (4/12) */}
        <div className="xl:col-span-4 space-y-6">
          {/* Item Passives */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <ItemPassivesPanel items={equippedItems} />
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