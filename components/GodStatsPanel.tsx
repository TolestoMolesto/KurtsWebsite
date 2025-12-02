// ============================================================
// GodStatsPanel.tsx - Full Stats Display Component
// ============================================================

import React from 'react';
import { 
  BicepsFlexed, BookOpen, Swords, Zap, Target, Crosshair, 
  Heart, Shield, Activity, Droplet, RotateCcw, Footprints,
  Skull, Star
} from 'lucide-react';
import { GodStats, God } from '../types';
import { calculateAttackSpeed, getAttackSpeedPercentAtLevel } from './damageCalculations';

interface GodStatsPanelProps {
  god: God;
  level: number;
  stats: GodStats;
  showBaseValues?: boolean; // Show base (level 1) values in parentheses
}

// Individual stat row component
const StatRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
  baseValue?: string | number;
  color?: string;
}> = ({ icon, label, value, baseValue, color = 'text-white' }) => (
  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50 last:border-0">
    <div className="flex items-center gap-2 text-slate-400">
      <span className="text-slate-500">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
    <div className={`font-mono text-sm ${color}`}>
      {value}
      {baseValue !== undefined && (
        <span className="text-slate-500 ml-1">({baseValue})</span>
      )}
    </div>
  </div>
);

// Section header
const SectionHeader: React.FC<{ title: string; color: string }> = ({ title, color }) => (
  <div className={`text-xs font-bold uppercase tracking-widest ${color} mt-4 mb-2 first:mt-0`}>
    {title}
  </div>
);

export const GodStatsPanel: React.FC<GodStatsPanelProps> = ({ 
  god, 
  level, 
  stats,
  showBaseValues = true 
}) => {
  const baseStats = god.statsByLevel[0]; // Level 1 stats for comparison
  
  // Calculate actual attack speed
  const asPercentFromLevel = getAttackSpeedPercentAtLevel(stats.attackSpeedPercent, level);
  const actualAttackSpeed = calculateAttackSpeed(stats.baseAttackSpeed, asPercentFromLevel, 0);
  const baseActualAS = calculateAttackSpeed(baseStats.baseAttackSpeed, 0, 0);

  return (
    <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-700">
        <span className="text-xs uppercase font-bold text-slate-500">God Stats</span>
        <span className="text-mythic-gold font-mono font-bold text-lg">Lv. {level}</span>
      </div>

      {/* === OFFENSIVE === */}
      <SectionHeader title="Offensive" color="text-red-400" />
      
      <StatRow 
        icon={<BicepsFlexed size={14} />}
        label="Strength"
        value={Math.round(stats.strength)}
        baseValue={showBaseValues ? Math.round(baseStats.strength) : undefined}
        color="text-red-400"
      />
      <StatRow 
        icon={<BookOpen size={14} />}
        label="Intelligence"
        value={Math.round(stats.intelligence)}
        baseValue={showBaseValues ? Math.round(baseStats.intelligence) : undefined}
        color="text-blue-400"
      />
      <StatRow 
        icon={<Swords size={14} />}
        label="Inhand Power"
        value={stats.inhandPower.toFixed(1)}
        baseValue={showBaseValues ? baseStats.inhandPower.toFixed(1) : undefined}
        color="text-orange-400"
      />

      {/* === ATTACK SPEED === */}
      <SectionHeader title="Attack Speed" color="text-yellow-400" />
      
      <StatRow 
        icon={<Zap size={14} />}
        label="Base Attack Speed"
        value={stats.baseAttackSpeed.toFixed(2)}
        baseValue={showBaseValues ? baseStats.baseAttackSpeed.toFixed(2) : undefined}
      />
      <StatRow 
        icon={<Zap size={14} />}
        label="Attack Speed %"
        value={`${asPercentFromLevel.toFixed(2)}%`}
        baseValue={showBaseValues ? `${baseStats.attackSpeedPercent.toFixed(2)}` : undefined}
        color="text-yellow-400"
      />
      <StatRow 
        icon={<Zap size={14} className="text-green-400" />}
        label="Actual Attack Speed"
        value={`${actualAttackSpeed.toFixed(2)}/s`}
        baseValue={showBaseValues ? `${baseActualAS.toFixed(2)}` : undefined}
        color="text-green-400"
      />

      {/* === CRITICAL === */}
      <SectionHeader title="Critical Strikes" color="text-yellow-500" />
      
      <StatRow 
        icon={<Target size={14} />}
        label="Crit Chance"
        value={`${stats.critChance}%`}
        baseValue={showBaseValues ? `${baseStats.critChance}%` : undefined}
        color="text-yellow-400"
      />
      <StatRow 
        icon={<Skull size={14} />}
        label="Crit Damage"
        value={`${(stats.critDamage * 100).toFixed(0)}%`}
        baseValue={showBaseValues ? `${(baseStats.critDamage * 100).toFixed(0)}%` : undefined}
        color="text-yellow-400"
      />

      {/* === PENETRATION === */}
      <SectionHeader title="Penetration" color="text-orange-400" />
      
      <StatRow 
        icon={<Crosshair size={14} />}
        label="Flat Penetration"
        value={Math.round(stats.flatPenetration)}
        baseValue={showBaseValues ? Math.round(baseStats.flatPenetration) : undefined}
        color="text-orange-400"
      />
      <StatRow 
        icon={<Crosshair size={14} />}
        label="% Penetration"
        value={`${stats.percentPenetration}%`}
        baseValue={showBaseValues ? `${baseStats.percentPenetration}%` : undefined}
        color="text-orange-400"
      />

      {/* === SUSTAIN === */}
      <SectionHeader title="Sustain" color="text-pink-400" />
      
      <StatRow 
        icon={<Heart size={14} className="text-pink-400" />}
        label="Lifesteal"
        value={`${stats.lifesteal}%`}
        baseValue={showBaseValues ? `${baseStats.lifesteal}%` : undefined}
        color="text-pink-400"
      />

      {/* === DEFENSIVE === */}
      <SectionHeader title="Defensive" color="text-slate-300" />
      
      <StatRow 
        icon={<Shield size={14} className="text-orange-300" />}
        label="Physical Protection"
        value={Math.round(stats.physicalProtection)}
        baseValue={showBaseValues ? Math.round(baseStats.physicalProtection) : undefined}
        color="text-orange-300"
      />
      <StatRow 
        icon={<Shield size={14} className="text-purple-400" />}
        label="Magical Protection"
        value={Math.round(stats.magicalProtection)}
        baseValue={showBaseValues ? Math.round(baseStats.magicalProtection) : undefined}
        color="text-purple-400"
      />
      <StatRow 
        icon={<Shield size={14} className="text-cyan-400" />}
        label="Damage Mitigation"
        value={`${stats.damageMitigation}%`}
        baseValue={showBaseValues ? `${baseStats.damageMitigation}%` : undefined}
        color="text-cyan-400"
      />

      {/* === HEALTH === */}
      <SectionHeader title="Health" color="text-green-400" />
      
      <StatRow 
        icon={<Heart size={14} className="text-red-500" />}
        label="Max Health"
        value={Math.round(stats.maxHealth)}
        baseValue={showBaseValues ? Math.round(baseStats.maxHealth) : undefined}
        color="text-green-400"
      />
      <StatRow 
        icon={<Activity size={14} className="text-green-500" />}
        label="Health Per Time"
        value={stats.healthRegen.toFixed(2)}
        baseValue={showBaseValues ? baseStats.healthRegen.toFixed(2) : undefined}
        color="text-green-400"
      />

      {/* === MANA === */}
      <SectionHeader title="Mana" color="text-blue-400" />
      
      <StatRow 
        icon={<Droplet size={14} className="text-blue-500" />}
        label="Max Mana"
        value={Math.round(stats.maxMana)}
        baseValue={showBaseValues ? Math.round(baseStats.maxMana) : undefined}
        color="text-blue-400"
      />
      <StatRow 
        icon={<Activity size={14} className="text-blue-300" />}
        label="Mana Per Time"
        value={stats.manaRegen.toFixed(2)}
        baseValue={showBaseValues ? baseStats.manaRegen.toFixed(2) : undefined}
        color="text-blue-400"
      />

      {/* === UTILITY === */}
      <SectionHeader title="Utility" color="text-slate-400" />
      
      <StatRow 
        icon={<Footprints size={14} />}
        label="Movement Speed"
        value={Math.round(stats.movementSpeed)}
        baseValue={showBaseValues ? Math.round(baseStats.movementSpeed) : undefined}
      />
      <StatRow 
        icon={<RotateCcw size={14} />}
        label="Cooldown Rate"
        value={`${stats.cooldownRate}%`}
        baseValue={showBaseValues ? `${baseStats.cooldownRate}%` : undefined}
      />

      {/* === PROGRESSION === */}
      <SectionHeader title="Progression" color="text-mythic-gold" />
      
      <StatRow 
        icon={<Star size={14} className="text-mythic-gold" />}
        label="XP Requirement"
        value={Math.round(stats.xpRequirement)}
        baseValue={showBaseValues ? Math.round(baseStats.xpRequirement) : undefined}
        color="text-mythic-gold"
      />
    </div>
  );
};

export default GodStatsPanel;