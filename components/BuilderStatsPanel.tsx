// ============================================================
// BuilderStatsPanel.tsx - Stats Panel for Builder with Items
// ============================================================

import React, { useMemo } from 'react';
import { 
  BicepsFlexed, BookOpen, Swords, Zap, Target, Crosshair, 
  Heart, Shield, Activity, Droplet, RotateCcw, Footprints,
  Skull, Layers, ShieldOff
} from 'lucide-react';
import { GodStats, God, Item } from '../types';
import { calculateTotalStats, calculateAttackSpeed, getAttackSpeedPercentAtLevel } from './damageCalculations';

interface BuilderStatsPanelProps {
  god: God;
  level: number;
  items: (Item | null)[];
  stats?: GodStats; // NEW: Allow passing pre-calculated stats (includes Stances)
  compact?: boolean;
}

const StatRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color?: string;
}> = ({ icon, label, value, color = 'text-white' }) => {
  return (
    <div className="flex items-center justify-between py-1 border-b border-slate-800/50 last:border-0">
      <div className="flex items-center gap-1.5 text-slate-400">
        <span className="text-slate-500">{icon}</span>
        <span className="text-xs">{label}</span>
      </div>
      <div className={`font-mono text-xs ${color}`}>
        {value}
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
  stats: providedStats // Optional prop
}) => {
  // Use provided stats (which include Passive Stances) if available, otherwise calculate from items
  const totalStats = useMemo(() => {
    if (providedStats) return providedStats;
    return calculateTotalStats(god, level, items, god.damageType);
  }, [god, level, items, providedStats]);
  
  // Calculate actual attack speed
  const asPercentFromLevel = getAttackSpeedPercentAtLevel(totalStats.attackSpeedPercent, level);
  const actualAS = calculateAttackSpeed(totalStats.baseAttackSpeed, asPercentFromLevel, 0);
  
  return (
    <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-700">
        <span className="text-xs uppercase font-bold text-slate-500">Total Stats</span>
        <span className="text-mythic-gold font-mono font-bold">Lv. {level}</span>
      </div>

      {/* === OFFENSIVE === */}
      <SectionHeader title="Offensive" color="text-red-400" />
      
      <StatRow 
        icon={<BicepsFlexed size={12} />}
        label="Strength"
        value={Math.round(totalStats.strength)}
        color="text-orange-400"
      />
      <StatRow 
        icon={<BookOpen size={12} />}
        label="Intelligence"
        value={Math.round(totalStats.intelligence)}
        color="text-purple-400"
      />
      <StatRow 
        icon={<Swords size={12} />}
        label="Basic Attack Power"
        value={Math.round(totalStats.inhandPower || 0)}
        color="text-red-400"
      />

      {/* === ATTACK SPEED === */}
      <SectionHeader title="Attack Speed" color="text-yellow-400" />
      
      <StatRow 
        icon={<Zap size={12} />}
        label="Attacks / Sec"
        value={actualAS.toFixed(2)}
        color="text-yellow-300"
      />
      <StatRow 
        icon={<Zap size={12} />}
        label="AS %"
        value={`${totalStats.attackSpeedPercent.toFixed(1)}%`}
        color="text-yellow-400"
      />

      {/* === CRITICAL === */}
      <SectionHeader title="Critical" color="text-amber-400" />
      
      <StatRow 
        icon={<Target size={12} />}
        label="Crit Chance"
        value={`${totalStats.critChance}%`}
        color="text-amber-400"
      />
      <StatRow 
        icon={<Skull size={12} />}
        label="Crit Damage"
        value={`${(totalStats.critDamage * 100).toFixed(0)}%`}
        color="text-amber-400"
      />

      {/* === PENETRATION === */}
      <SectionHeader title="Penetration" color="text-rose-400" />
      
      <StatRow 
        icon={<Crosshair size={12} />}
        label="Flat Pen"
        value={Math.round(totalStats.flatPenetration || 0)}
        color="text-rose-400"
      />
      <StatRow 
        icon={<Layers size={12} />}
        label="% Pen"
        value={`${totalStats.percentPenetration || 0}%`}
        color="text-rose-400"
      />

      {/* === SUSTAIN === */}
      <SectionHeader title="Sustain" color="text-pink-400" />
      
      <StatRow 
        icon={<Heart size={12} className="text-pink-400" />}
        label="Lifesteal"
        value={`${totalStats.lifesteal}%`}
        color="text-pink-400"
      />

      {/* === DEFENSIVE === */}
      <SectionHeader title="Defensive" color="text-cyan-400" />
      
      <StatRow 
        icon={<Shield size={12} />}
        label="Phys Prot"
        value={Math.round(totalStats.physicalProtection)}
        color="text-cyan-400"
      />
      <StatRow 
        icon={<Shield size={12} className="text-purple-400" />}
        label="Mag Prot"
        value={Math.round(totalStats.magicalProtection)}
        color="text-purple-400"
      />
      <StatRow 
        icon={<ShieldOff size={12} />}
        label="Mitigation"
        value={`${totalStats.damageMitigation || 0}%`}
        color="text-cyan-300"
      />

      {/* === HEALTH & MANA === */}
      <SectionHeader title="Health & Mana" color="text-green-400" />
      
      <StatRow 
        icon={<Heart size={12} className="text-green-500" />}
        label="Max Health"
        value={Math.round(totalStats.maxHealth)}
        color="text-green-400"
      />
      <StatRow 
        icon={<Activity size={12} className="text-green-500" />}
        label="HP Regen"
        value={totalStats.healthRegen.toFixed(1)}
        color="text-green-400"
      />
      <StatRow 
        icon={<Droplet size={12} className="text-blue-500" />}
        label="Max Mana"
        value={Math.round(totalStats.maxMana)}
        color="text-blue-400"
      />
      <StatRow 
        icon={<Activity size={12} className="text-blue-300" />}
        label="MP Regen"
        value={totalStats.manaRegen.toFixed(1)}
        color="text-blue-400"
      />

      {/* === UTILITY === */}
      <SectionHeader title="Utility" color="text-slate-400" />
      
      <StatRow 
        icon={<Footprints size={12} />}
        label="Move Speed"
        value={Math.round(totalStats.movementSpeed)}
      />
      <StatRow 
        icon={<RotateCcw size={12} />}
        label="CDR"
        value={`${Math.min(40, totalStats.cooldownRate)}%`}
      />
    </div>
  );
};