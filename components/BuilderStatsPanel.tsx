// ============================================================
// BuilderStatsPanel.tsx - Stats Panel for Builder with Items
// ============================================================

import React, { useMemo } from 'react';
import { 
  BicepsFlexed, BookOpen, Swords, Zap, Target, Crosshair, 
  Heart, Shield, Activity, Droplet, RotateCcw, Footprints,
  Skull, Layers, ShieldOff, ChevronUp, ChevronDown, Minus
} from 'lucide-react';
import { GodStats, God, Item, DamageType } from '../types';
import { calculateTotalStats, calculateAttackSpeed, getAttackSpeedPercentAtLevel } from './damageCalculations';

interface BuilderStatsPanelProps {
  god: God;
  level: number;
  items: (Item | null)[];
  compact?: boolean;
}

// Stat difference indicator
const StatDiff: React.FC<{ diff: number; isPercent?: boolean }> = ({ diff, isPercent = false }) => {
  if (Math.abs(diff) < 0.01) return null;
  
  const isPositive = diff > 0;
  const formatted = isPercent 
    ? `${isPositive ? '+' : ''}${diff.toFixed(1)}%` 
    : `${isPositive ? '+' : ''}${Math.round(diff)}`;
  
  return (
    <span className={`text-xs ml-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
      {isPositive ? <ChevronUp size={10} className="inline" /> : <ChevronDown size={10} className="inline" />}
      {formatted}
    </span>
  );
};

const StatRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
  baseValue?: number;
  color?: string;
  isPercent?: boolean;
}> = ({ icon, label, value, baseValue, color = 'text-white', isPercent }) => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  const diff = baseValue !== undefined ? numericValue - baseValue : 0;
  
  return (
    <div className="flex items-center justify-between py-1 border-b border-slate-800/50 last:border-0">
      <div className="flex items-center gap-1.5 text-slate-400">
        <span className="text-slate-500">{icon}</span>
        <span className="text-xs">{label}</span>
      </div>
      <div className={`font-mono text-xs ${color} flex items-center`}>
        {value}
        {baseValue !== undefined && <StatDiff diff={diff} isPercent={isPercent} />}
      </div>
    </div>
  );
};

const SectionHeader: React.FC<{ title: string; color: string }> = ({ title, color }) => (
  <div className={`text-[10px] font-bold uppercase tracking-widest ${color} mt-3 mb-1 first:mt-0`}>
    {title}
  </div>
);

export const BuilderStatsPanel: React.FC<BuilderStatsPanelProps> = ({ 
  god, 
  level, 
  items,
  compact = false
}) => {
  // Calculate stats with items applied
  const totalStats = useMemo(() => 
    calculateTotalStats(god, level, items, god.damageType),
    [god, level, items]
  );
  
  // Base stats at current level (no items)
  const baseStats = useMemo(() => 
    god.statsByLevel[Math.max(0, Math.min(19, level - 1))],
    [god, level]
  );

  // Calculate actual attack speeds
  const asPercentFromLevel = getAttackSpeedPercentAtLevel(totalStats.attackSpeedPercent, level);
  const actualAS = calculateAttackSpeed(totalStats.baseAttackSpeed, asPercentFromLevel, 0);
  
  const baseAsPercent = getAttackSpeedPercentAtLevel(baseStats.attackSpeedPercent, level);
  const baseActualAS = calculateAttackSpeed(baseStats.baseAttackSpeed, baseAsPercent, 0);

  // Check if we have any items equipped
  const hasItems = items.some(item => item !== null);

  return (
    <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-700">
        <div>
          <span className="text-xs uppercase font-bold text-slate-500">Total Stats</span>
          {hasItems && <span className="text-[10px] text-mythic-gold ml-2">(with items)</span>}
        </div>
        <span className="text-mythic-gold font-mono font-bold">Lv. {level}</span>
      </div>

      {/* === OFFENSIVE === */}
      <SectionHeader title="Offensive" color="text-red-400" />
      
      <StatRow 
        icon={<BicepsFlexed size={12} />}
        label="Strength"
        value={Math.round(totalStats.strength)}
        baseValue={hasItems ? Math.round(baseStats.strength) : undefined}
        color="text-orange-400"
      />
      <StatRow 
        icon={<BookOpen size={12} />}
        label="Intelligence"
        value={Math.round(totalStats.intelligence)}
        baseValue={hasItems ? Math.round(baseStats.intelligence) : undefined}
        color="text-purple-400"
      />
      <StatRow 
        icon={<Swords size={12} />}
        label="Basic Attack Power"
        value={Math.round(totalStats.inhandPower || 0)}
        baseValue={hasItems ? Math.round(baseStats.inhandPower || 0) : undefined}
        color="text-red-400"
      />

      {/* === ATTACK SPEED === */}
      <SectionHeader title="Attack Speed" color="text-yellow-400" />
      
      <StatRow 
        icon={<Zap size={12} />}
        label="Actual AS"
        value={actualAS.toFixed(2)}
        baseValue={hasItems ? baseActualAS : undefined}
        color="text-yellow-300"
      />
      <StatRow 
        icon={<Zap size={12} />}
        label="AS %"
        value={`+${totalStats.attackSpeedPercent.toFixed(1)}%`}
        baseValue={hasItems ? baseStats.attackSpeedPercent : undefined}
        color="text-yellow-400"
        isPercent
      />

      {/* === CRITICAL === */}
      <SectionHeader title="Critical" color="text-amber-400" />
      
      <StatRow 
        icon={<Target size={12} />}
        label="Crit Chance"
        value={`${totalStats.critChance}%`}
        baseValue={hasItems ? baseStats.critChance : undefined}
        color="text-amber-400"
        isPercent
      />
      <StatRow 
        icon={<Skull size={12} />}
        label="Crit Damage"
        value={`${(totalStats.critDamage * 100).toFixed(0)}%`}
        baseValue={hasItems ? baseStats.critDamage * 100 : undefined}
        color="text-amber-400"
        isPercent
      />

      {/* === PENETRATION === */}
      <SectionHeader title="Penetration" color="text-rose-400" />
      
      <StatRow 
        icon={<Crosshair size={12} />}
        label="Flat Pen"
        value={Math.round(totalStats.flatPenetration || 0)}
        baseValue={hasItems ? Math.round(baseStats.flatPenetration || 0) : undefined}
        color="text-rose-400"
      />
      <StatRow 
        icon={<Layers size={12} />}
        label="% Pen"
        value={`${totalStats.percentPenetration || 0}%`}
        baseValue={hasItems ? baseStats.percentPenetration || 0 : undefined}
        color="text-rose-400"
        isPercent
      />

      {/* === SUSTAIN === */}
      <SectionHeader title="Sustain" color="text-pink-400" />
      
      <StatRow 
        icon={<Heart size={12} className="text-pink-400" />}
        label="Lifesteal"
        value={`${totalStats.lifesteal}%`}
        baseValue={hasItems ? baseStats.lifesteal : undefined}
        color="text-pink-400"
        isPercent
      />

      {/* === DEFENSIVE === */}
      <SectionHeader title="Defensive" color="text-cyan-400" />
      
      <StatRow 
        icon={<Shield size={12} />}
        label="Phys Prot"
        value={Math.round(totalStats.physicalProtection)}
        baseValue={hasItems ? Math.round(baseStats.physicalProtection) : undefined}
        color="text-cyan-400"
      />
      <StatRow 
        icon={<Shield size={12} className="text-purple-400" />}
        label="Mag Prot"
        value={Math.round(totalStats.magicalProtection)}
        baseValue={hasItems ? Math.round(baseStats.magicalProtection) : undefined}
        color="text-purple-400"
      />
      <StatRow 
        icon={<ShieldOff size={12} />}
        label="Mitigation"
        value={`${totalStats.damageMitigation || 0}%`}
        baseValue={hasItems ? baseStats.damageMitigation || 0 : undefined}
        color="text-cyan-300"
        isPercent
      />

      {/* === HEALTH & MANA === */}
      <SectionHeader title="Health & Mana" color="text-green-400" />
      
      <StatRow 
        icon={<Heart size={12} className="text-green-500" />}
        label="Max Health"
        value={Math.round(totalStats.maxHealth)}
        baseValue={hasItems ? Math.round(baseStats.maxHealth) : undefined}
        color="text-green-400"
      />
      <StatRow 
        icon={<Activity size={12} className="text-green-500" />}
        label="HP Regen"
        value={totalStats.healthRegen.toFixed(1)}
        baseValue={hasItems ? baseStats.healthRegen : undefined}
        color="text-green-400"
      />
      <StatRow 
        icon={<Droplet size={12} className="text-blue-500" />}
        label="Max Mana"
        value={Math.round(totalStats.maxMana)}
        baseValue={hasItems ? Math.round(baseStats.maxMana) : undefined}
        color="text-blue-400"
      />
      <StatRow 
        icon={<Activity size={12} className="text-blue-300" />}
        label="MP Regen"
        value={totalStats.manaRegen.toFixed(1)}
        baseValue={hasItems ? baseStats.manaRegen : undefined}
        color="text-blue-400"
      />

      {/* === UTILITY === */}
      <SectionHeader title="Utility" color="text-slate-400" />
      
      <StatRow 
        icon={<Footprints size={12} />}
        label="Move Speed"
        value={Math.round(totalStats.movementSpeed)}
        baseValue={hasItems ? Math.round(baseStats.movementSpeed) : undefined}
      />
      <StatRow 
        icon={<RotateCcw size={12} />}
        label="CDR"
        value={`${Math.min(40, totalStats.cooldownRate)}%`}
        baseValue={hasItems ? baseStats.cooldownRate : undefined}
        isPercent
      />
    </div>
  );
};

export default BuilderStatsPanel;