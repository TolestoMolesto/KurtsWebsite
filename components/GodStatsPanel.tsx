import React, { useMemo } from 'react';
import { 
  BicepsFlexed, BookOpen, Swords, Zap, Target, Crosshair, 
  Heart, Shield, Activity, Droplet, RotateCcw, Footprints,
  Skull, Layers, ShieldOff
} from 'lucide-react';
import { God, Item } from '../types';
import { calculateTotalStats, calculateAttackSpeed, getAttackSpeedPercentAtLevel } from './damageCalculations';

interface GodStatsPanelProps {
  god: God;
  level: number;
  items?: (Item | null)[];
}

const StatRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color?: string;
}> = ({ icon, label, value, color = 'text-white' }) => {
  return (
    <div className="flex items-center justify-between py-0.5">
      <div className="flex items-center gap-1.5 text-slate-400">
        <span className="text-slate-500">{icon}</span>
        <span className="text-[10px] font-bold">{label}</span>
      </div>
      <div className={`font-mono text-[10px] font-bold ${color}`}>
        {value}
      </div>
    </div>
  );
};

export const GodStatsPanel: React.FC<GodStatsPanelProps> = ({ 
  god, 
  level, 
  items = []
}) => {
  // Calculate stats with items applied (or just base if items is empty)
  const totalStats = useMemo(() => 
    calculateTotalStats(god, level, items, god.damageType),
    [god, level, items]
  );
  
  const asPercentFromLevel = getAttackSpeedPercentAtLevel(totalStats.attackSpeedPercent, level);
  const actualAS = calculateAttackSpeed(totalStats.baseAttackSpeed, asPercentFromLevel, 0);

  return (
    <div className="space-y-2 text-xs">
      {/* Offensive */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-red-400 uppercase mb-1">Offensive</div>
        <StatRow icon={<BicepsFlexed size={10} />} label="STR" value={Math.round(totalStats.strength)} color="text-orange-400" />
        <StatRow icon={<BookOpen size={10} />} label="INT" value={Math.round(totalStats.intelligence)} color="text-purple-400" />
        <StatRow icon={<Sword size={10} />} label="Basic Power" value={Math.round(totalStats.inhandPower || 0)} color="text-red-400" />
      </div>

      {/* Attack Speed & Crit */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-yellow-400 uppercase mb-1">Speed & Crit</div>
        <StatRow icon={<Zap size={10} />} label="Attack Speed" value={actualAS.toFixed(2)} color="text-yellow-300" />
        <StatRow icon={<Target size={10} />} label="Crit Chance" value={`${totalStats.critChance}%`} color="text-amber-400" />
        <StatRow icon={<Skull size={10} />} label="Crit Damage" value={`${(totalStats.critDamage * 100).toFixed(0)}%`} color="text-amber-400" />
      </div>

      {/* Penetration */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-rose-400 uppercase mb-1">Penetration</div>
        <StatRow icon={<Crosshair size={10} />} label="Flat Pen" value={Math.round(totalStats.flatPenetration || 0)} color="text-rose-400" />
        <StatRow icon={<Layers size={10} />} label="% Pen" value={`${totalStats.percentPenetration || 0}%`} color="text-rose-400" />
        <StatRow icon={<Heart size={10} />} label="Lifesteal" value={`${totalStats.lifesteal}%`} color="text-pink-400" />
      </div>

      {/* Defensive */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-cyan-400 uppercase mb-1">Defensive</div>
        <StatRow icon={<Shield size={10} />} label="Phys Prot" value={Math.round(totalStats.physicalProtection)} color="text-cyan-400" />
        <StatRow icon={<Shield size={10} className="text-purple-400" />} label="Mag Prot" value={Math.round(totalStats.magicalProtection)} color="text-purple-400" />
        <StatRow icon={<ShieldOff size={10} />} label="Mitigation" value={`${totalStats.damageMitigation || 0}%`} color="text-cyan-300" />
      </div>

      {/* Health & Mana */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-green-400 uppercase mb-1">Health & Mana</div>
        <StatRow icon={<Heart size={10} className="text-green-500" />} label="Max HP" value={Math.round(totalStats.maxHealth)} color="text-green-400" />
        <StatRow icon={<Activity size={10} className="text-green-500" />} label="HP Regen" value={totalStats.healthRegen.toFixed(1)} color="text-green-400" />
        <StatRow icon={<Droplet size={10} className="text-blue-500" />} label="Max Mana" value={Math.round(totalStats.maxMana)} color="text-blue-400" />
        <StatRow icon={<Activity size={10} className="text-blue-300" />} label="MP Regen" value={totalStats.manaRegen.toFixed(1)} color="text-blue-400" />
      </div>

      {/* Utility */}
      <div className="bg-slate-800/30 rounded p-2">
        <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Utility</div>
        <StatRow icon={<Footprints size={10} />} label="Move Speed" value={Math.round(totalStats.movementSpeed)} />
        <StatRow icon={<RotateCcw size={10} />} label="CDR" value={`${Math.min(40, totalStats.cooldownRate)}%`} />
      </div>
    </div>
  );
};

// Component for sword icon since it wasn't exported from lucide-react in imports above
function Sword(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" x2="19" y1="19" y2="13" />
      <line x1="16" x2="20" y1="16" y2="20" />
      <line x1="19" x2="21" y1="21" y2="19" />
    </svg>
  )
}