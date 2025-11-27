import React from 'react';
import { Snowflake, Gift, Bell } from 'lucide-react';

export const NewsBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-slate-900 to-green-900 text-slate-200 text-xs font-bold py-1.5 border-b border-white/10 overflow-hidden relative z-50">
      <div className="flex animate-marquee whitespace-nowrap gap-12 items-center justify-center">
        <span className="flex items-center gap-2">
           <Snowflake size={12} className="text-cyan-300" /> WINTER SOLSTICE EVENT IS LIVE: 2X WORSHIPERS
        </span>
        <span className="flex items-center gap-2">
           <Gift size={12} className="text-red-400" /> LOG IN TODAY FOR A FREE YMIR SKIN
        </span>
        <span className="flex items-center gap-2">
           <Bell size={12} className="text-mythic-gold" /> PATCH 2.4: MORDRED BUFFS & NEW ITEMS
        </span>
        <span className="flex items-center gap-2">
           <Snowflake size={12} className="text-cyan-300" /> WINTER SOLSTICE EVENT IS LIVE: 2X WORSHIPERS
        </span>
        <span className="flex items-center gap-2">
           <Gift size={12} className="text-red-400" /> LOG IN TODAY FOR A FREE YMIR SKIN
        </span>
      </div>
      
      {/* Add custom keyframes for marquee if not in tailwind config, 
          using inline style for simplicity in this component context or assume tailwind config
          Since we can't edit tailwind config easily, we use a simpler centering approach or standard transform
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        /* Override animation for a cleaner centered look on desktop if preferred, 
           but for a "ticker" feel, movement is good. */
        @media (min-width: 768px) {
           .animate-marquee {
             animation: none;
             width: 100%;
             justify-content: center;
           }
        }
      `}</style>
    </div>
  );
};