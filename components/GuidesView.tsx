// components/GuidesView.tsx
import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, ChevronRight, ChevronLeft, Zap, Shield, Swords, Target, Calculator, Info } from 'lucide-react';

// --- TYPES ---
interface Guide {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

// --- COLLAPSIBLE SECTION ---
const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, icon, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4 bg-slate-900/80 rounded-xl border border-slate-700/50 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 p-4 text-left hover:bg-slate-800/50 transition-colors">
        {open ? <ChevronDown className="w-5 h-5 text-mythic-gold" /> : <ChevronRight className="w-5 h-5 text-mythic-gold" />}
        <span className="text-mythic-gold">{icon}</span>
        <span className="text-lg font-bold text-white">{title}</span>
      </button>
      {open && <div className="px-6 pb-6 text-slate-300">{children}</div>}
    </div>
  );
};

// --- FORMULA DISPLAY ---
const Formula: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-slate-950 rounded-lg p-4 my-3 font-mono text-sm text-green-400 border border-green-500/20 overflow-x-auto">
    {children}
  </div>
);

// --- EXAMPLE DISPLAY ---
const Example: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-mythic-gold/5 rounded-lg p-4 my-3 border-l-4 border-mythic-gold">
    <span className="text-mythic-gold font-semibold text-xs uppercase tracking-wide">Example</span>
    <div className="mt-2 font-mono text-sm text-slate-300">{children}</div>
  </div>
);

// --- INTERACTIVE DAMAGE CALCULATOR ---
const DamageCalculator: React.FC = () => {
  const [rawDamage, setRawDamage] = useState(500);
  const [isCrit, setIsCrit] = useState(false);
  const [bonusCritDmg, setBonusCritDmg] = useState(0);
  const [penPercent, setPenPercent] = useState(0);
  const [penFlat, setPenFlat] = useState(0);
  const [enemyProts, setEnemyProts] = useState(100);
  const [mitigation, setMitigation] = useState(0);

  const calc = useMemo(() => {
    const critMulti = isCrit ? (1.65 + bonusCritDmg / 100) : 1;
    const afterCrit = rawDamage * critMulti;
    const effectiveProts = Math.max(0, (enemyProts * (1 - penPercent / 100)) - penFlat);
    const afterProts = afterCrit * (100 / (100 + effectiveProts));
    const final = afterProts * (1 - mitigation / 100);
    return {
      critMulti: critMulti.toFixed(2),
      afterCrit: afterCrit.toFixed(1),
      effectiveProts: effectiveProts.toFixed(1),
      afterProts: afterProts.toFixed(1),
      final: Math.floor(final),
      protReduction: ((effectiveProts / (100 + effectiveProts)) * 100).toFixed(1),
    };
  }, [rawDamage, isCrit, bonusCritDmg, penPercent, penFlat, enemyProts, mitigation]);

  const InputField: React.FC<{ label: string; value: number; onChange: (v: number) => void; min?: number; max?: number; suffix?: string }> = 
    ({ label, value, onChange, min = 0, max = 9999, suffix = '' }) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || 0)))}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-mythic-gold focus:outline-none"
        />
        {suffix && <span className="text-slate-500 text-sm">{suffix}</span>}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-900 border border-slate-700/50 rounded-xl overflow-hidden">
      <div className="bg-slate-950/50 p-4 border-b border-slate-800">
        <h3 className="font-bold text-white flex items-center gap-2">
          <Calculator size={18} className="text-mythic-gold" />
          Interactive Damage Calculator
        </h3>
        <p className="text-slate-400 text-sm mt-1">Input your stats to see calculated damage in real-time</p>
      </div>

      <div className="p-4 grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-mythic-gold mb-2">Your Stats</div>
          <InputField label="Raw Damage" value={rawDamage} onChange={setRawDamage} />
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCrit(!isCrit)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${isCrit ? 'bg-mythic-gold text-slate-900' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
            >
              <Target size={14} /> Critical Hit
            </button>
          </div>
          
          {isCrit && (
            <InputField label="Bonus Crit Damage" value={bonusCritDmg} onChange={setBonusCritDmg} max={100} suffix="%" />
          )}

          <InputField label="% Penetration" value={penPercent} onChange={setPenPercent} max={100} suffix="%" />
          <InputField label="Flat Penetration" value={penFlat} onChange={setPenFlat} max={100} />

          <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 mt-6">Enemy Stats</div>
          <InputField label="Protections" value={enemyProts} onChange={setEnemyProts} max={500} />
          <InputField label="Mitigation" value={mitigation} onChange={setMitigation} max={100} suffix="%" />
        </div>

        {/* Results */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-green-400 mb-2">Calculation Breakdown</div>
          
          <div className="bg-slate-950 rounded-lg p-3 space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Raw Damage:</span>
              <span className="text-white">{rawDamage}</span>
            </div>
            {isCrit && (
              <div className="flex justify-between">
                <span className="text-slate-400">× Crit ({calc.critMulti}x):</span>
                <span className="text-yellow-400">{calc.afterCrit}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-400">Effective Prots:</span>
              <span className="text-orange-400">{calc.effectiveProts} ({calc.protReduction}% reduction)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">After Prots:</span>
              <span className="text-white">{calc.afterProts}</span>
            </div>
            {mitigation > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-400">After Mitigation:</span>
                <span className="text-white">{(parseFloat(calc.afterProts) * (1 - mitigation/100)).toFixed(1)}</span>
              </div>
            )}
          </div>

          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="text-xs text-green-400 uppercase tracking-wider mb-1">Final Damage</div>
            <div className="text-4xl font-black text-green-400">{calc.final}</div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-3 flex items-start gap-2">
            <Info size={14} className="text-slate-500 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-400">
              The game floors (rounds down) the final damage value. Internal calculations use decimals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- DAMAGE CALCULATION GUIDE CONTENT ---
const DamageCalculationGuide: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Header */}
      <div className="mb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors">
          <ChevronLeft size={18} /> Back to Guides
        </button>
        <div className="flex items-center gap-2 text-mythic-gold text-sm font-semibold mb-2">
          <BookOpen className="w-4 h-4" /> SMITE 2 GUIDES
        </div>
        <h1 className="text-3xl font-serif font-bold text-white mb-2">Damage Calculation Guide</h1>
        <p className="text-slate-400">Master the math behind every hit</p>
      </div>

      {/* Quick Summary */}
      <div className="bg-gradient-to-r from-mythic-gold/10 to-yellow-600/5 rounded-xl p-6 mb-8 border border-mythic-gold/20">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-mythic-gold" /> Quick Reference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-950/50 rounded-lg p-3">
            <div className="text-mythic-gold font-semibold mb-1">Calculation Order</div>
            <div className="text-slate-300">Penetration → Protections → Mitigation → Floor</div>
          </div>
          <div className="bg-slate-950/50 rounded-lg p-3">
            <div className="text-mythic-gold font-semibold mb-1">Base Crit Multiplier</div>
            <div className="text-slate-300">1.65x (165% damage)</div>
          </div>
        </div>
      </div>

      {/* Interactive Calculator */}
      <div className="mb-8">
        <DamageCalculator />
      </div>

      {/* Guide Sections */}
      <Section title="Attack Speed" icon={<Zap size={18} />} defaultOpen={false}>
        <p className="mb-3">Your attack speed determines how fast you can basic attack.</p>
        <Formula>Attack Speed = floor(Base AS × (1 + Total AS%) × 100) / 100</Formula>
        <Example>
          Base AS: 0.97 | Bonus AS: 42%<br/>
          = floor(0.97 × 1.42 × 100) / 100<br/>
          = floor(137.74) / 100<br/>
          = <span className="text-green-400 font-bold">1.37 attacks/sec</span>
        </Example>
      </Section>

      <Section title="Basic Attack Damage" icon={<Swords size={18} />}>
        <p className="mb-3">Basic attacks scale with your stats based on your god's scaling values.</p>
        <Formula>Basic Attack = Base Power + (Strength × Str Scaling) + (Intelligence × Int Scaling)</Formula>
        <Example>
          Base Power: 44.4 | Scaling: 100% Str, 20% Int<br/>
          Stats: 200 Str, 50 Int<br/>
          = 44.4 + (200 × 1.0) + (50 × 0.2)<br/>
          = <span className="text-green-400 font-bold">254.4 damage</span> (displays as 254)
        </Example>
      </Section>

      <Section title="Critical Hit Damage" icon={<Target size={18} />}>
        <p className="mb-3">Critical hits multiply your basic attack damage. Base crit is 1.65x, items can increase this.</p>
        <Formula>Crit Damage = Basic Attack × (Base Crit + Bonus Crit)</Formula>
        <Example>
          Basic Attack: 254.4 | Bonus Crit Damage: +35%<br/>
          Multiplier = 1.65 + 0.35 = 2.00<br/>
          = 254.4 × 2.00<br/>
          = <span className="text-green-400 font-bold">508.8 damage</span> (displays as 508)
        </Example>
      </Section>

      <Section title="Penetration" icon={<Target size={18} />}>
        <p className="mb-3">Penetration reduces enemy's effective protections. Percentage pen applies first, then flat pen.</p>
        <Formula>Effective Prots = (Protection × (1 - Pen%)) - Flat Pen</Formula>
        <Example>
          Enemy Prots: 300 | Your Pen: 35%<br/>
          = 300 × (1 - 0.35)<br/>
          = 300 × 0.65<br/>
          = <span className="text-green-400 font-bold">195 effective prots</span>
        </Example>
      </Section>

      <Section title="Protection Damage Reduction" icon={<Shield size={18} />}>
        <p className="mb-3">Protections reduce incoming damage with diminishing returns.</p>
        <Formula>Damage After Prots = Raw Damage × (100 / (100 + Effective Prots))</Formula>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-2 text-mythic-gold">Protection</th>
                <th className="text-left py-2 text-mythic-gold">Damage Reduction</th>
                <th className="text-left py-2 text-mythic-gold">Damage Taken</th>
              </tr>
            </thead>
            <tbody>
              {[[0,'0%','100%'],[50,'33.3%','66.7%'],[100,'50%','50%'],[150,'60%','40%'],[200,'66.7%','33.3%'],[300,'75%','25%'],[400,'80%','20%'],[500,'83.3%','16.7%']].map(([prot,red,taken]) => (
                <tr key={String(prot)} className="border-b border-slate-800/50">
                  <td className="py-2 font-mono">{prot}</td>
                  <td className="py-2 text-red-400">{red}</td>
                  <td className="py-2 text-green-400">{taken}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Damage Mitigation" icon={<Shield size={18} />}>
        <p className="mb-3">Mitigation reduces damage AFTER protections. Unlike prots, it's always a flat percentage reduction.</p>
        <Formula>Final Damage = Damage After Prots × (1 - Mitigation%)</Formula>
        <Example>
          Damage After Prots: 172.48 | Mitigation: 4%<br/>
          = 172.48 × (1 - 0.04)<br/>
          = 172.48 × 0.96<br/>
          = <span className="text-green-400 font-bold">165.58</span> (displays as 165)
        </Example>
      </Section>

      {/* Key Takeaways */}
      <div className="mt-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/10 rounded-xl p-6 border border-yellow-500/20">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Key Takeaways</h2>
        <div className="space-y-3 text-slate-300">
          {[
            ['Internal vs Displayed', 'The game keeps decimals internally but shows floored values.'],
            ['Calculation Order', 'Penetration → Protections → Mitigation → Floor'],
            ['Protections vs Mitigation', 'Prots have diminishing returns; mitigation is always flat.'],
            ['Penetration is Powerful', 'Against high protection targets, pen dramatically increases damage.'],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3">
              <span className="text-yellow-400 font-bold">{i + 1}.</span>
              <span><strong className="text-white">{title}</strong> — {desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN GUIDES VIEW ---
export const GuidesView: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const guides: Guide[] = [
    { id: 'damage-calc', title: 'Damage Calculation', description: 'Master the math behind every hit - attack speed, crits, penetration, and more.', icon: <Calculator size={24} />, category: 'Mechanics' },
    // Future guides can be added here
    // { id: 'conquest-roles', title: 'Conquest Roles', description: 'Learn each role in Conquest mode.', icon: <Users size={24} />, category: 'Game Modes' },
  ];

  if (selectedGuide === 'damage-calc') {
    return (
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <DamageCalculationGuide onBack={() => setSelectedGuide(null)} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-mythic-gold text-sm font-semibold mb-2">
          <BookOpen className="w-4 h-4" /> KNOWLEDGE BASE
        </div>
        <h1 className="text-3xl font-serif font-bold text-white mb-2">SMITE 2 Guides</h1>
        <p className="text-slate-400">Level up your game with in-depth guides and strategies</p>
      </div>

      {/* Guide Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => setSelectedGuide(guide.id)}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-left hover:border-mythic-gold/50 hover:bg-slate-900/80 transition-all group"
          >
            <div className="w-12 h-12 bg-mythic-gold/10 rounded-xl flex items-center justify-center text-mythic-gold mb-4 group-hover:bg-mythic-gold/20 transition-colors">
              {guide.icon}
            </div>
            <div className="text-xs text-mythic-gold font-semibold uppercase tracking-wider mb-1">{guide.category}</div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-mythic-gold transition-colors">{guide.title}</h3>
            <p className="text-slate-400 text-sm">{guide.description}</p>
          </button>
        ))}

        {/* Coming Soon Placeholder */}
        <div className="bg-slate-900/50 border border-slate-800/50 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-600 mb-4">
            <BookOpen size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-600 mb-1">More Coming Soon</h3>
          <p className="text-slate-600 text-sm">New guides added regularly</p>
        </div>
      </div>
    </div>
  );
};