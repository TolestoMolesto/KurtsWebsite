// ============================================================
// PassiveStanceToggle.tsx - Data-Driven Toggle Component
// ============================================================

import React from 'react';
import { Shield, Sword, Zap, Target, Flame, Snowflake } from 'lucide-react';
import { Ability, PassiveStance } from '../types';
import { 
  getPassiveStances, 
  getStanceColors, 
  formatStanceBonus,
  StanceId 
} from './passiveStanceUtils';

// Icon mapping
const IconMap = {
  shield: Shield,
  sword: Sword,
  zap: Zap,
  target: Target,
  flame: Flame,
  snowflake: Snowflake,
};

interface PassiveStanceToggleProps {
  passive: Ability;
  currentStance: StanceId;
  onStanceChange: (stanceId: StanceId) => void;
  level: number;
}

export const PassiveStanceToggle: React.FC<PassiveStanceToggleProps> = ({
  passive,
  currentStance,
  onStanceChange,
  level,
}) => {
  const stances = getPassiveStances(passive);
  
  if (stances.length === 0) return null;

  const activeStance = stances.find(s => s.id === currentStance) || stances[0];
  const colors = getStanceColors(activeStance);

  return (
    <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          Passive Stance
        </span>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-1 p-1 bg-slate-800 rounded-lg mb-3">
        {stances.map((stance) => {
          const isActive = stance.id === currentStance;
          const stanceColors = getStanceColors(stance);
          const Icon = IconMap[stance.icon] || Zap;

          return (
            <button
              key={stance.id}
              onClick={() => onStanceChange(stance.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-xs font-bold transition-all ${
                isActive
                  ? `${stanceColors.bg} ${stanceColors.text} border ${stanceColors.border} shadow-lg`
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <Icon size={14} />
              <span>{stance.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stance Bonuses */}
      <div className={`rounded-lg p-2 ${colors.bg} border ${colors.border}`}>
        <div className={`text-[10px] font-bold uppercase mb-1.5 ${colors.text}`}>
          {activeStance.name} Bonuses (Lv.{level})
        </div>
        <div className="space-y-1">
          {activeStance.statBonuses.map((bonus, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs">
              <span className="text-slate-400 capitalize">
                {bonus.stat.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className={`font-mono font-bold ${colors.text}`}>
                {formatStanceBonus(bonus, level)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ability Effects */}
      {activeStance.abilityEffects && activeStance.abilityEffects.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-700">
          <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">
            Ability Effects
          </div>
          <div className="space-y-1.5 text-[10px]">
            {activeStance.abilityEffects.map((effect, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className={`font-bold shrink-0 ${colors.text}`}>
                  {effect.abilityNum}:
                </span>
                <span className="text-slate-300">{effect.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// COMPACT BADGE VERSION
// ============================================================

interface StanceBadgeProps {
  passive: Ability;
  currentStance: StanceId;
  onClick?: () => void;
}

export const StanceBadge: React.FC<StanceBadgeProps> = ({ 
  passive, 
  currentStance, 
  onClick 
}) => {
  const stances = getPassiveStances(passive);
  const stance = stances.find(s => s.id === currentStance);
  
  if (!stance) return null;

  const colors = getStanceColors(stance);
  const Icon = IconMap[stance.icon] || Zap;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold transition-all ${colors.bg} ${colors.text} border ${colors.border} hover:opacity-80`}
    >
      <Icon size={10} />
      {stance.name}
    </button>
  );
};