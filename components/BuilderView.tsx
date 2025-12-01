import React, { useState, useEffect } from 'react';
import { Share2, Check, Link as LinkIcon } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { God } from '../types';

interface CurrentBuild {
  starter: string | null;
  items: (string | null)[];
  relic: string | null;
}

// Internal Share Button Component
const ShareBuildButton: React.FC<{
  godId: string | null;
  aspectId: string | null;
  build: CurrentBuild;
}> = ({ godId, aspectId, build }) => {
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
    const url = generateUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isShareable) return null;

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
          copied
            ? 'bg-green-500/20 text-green-400 border border-green-500/40'
            : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-mythic-gold/50'
        }`}
      >
        {copied ? (
          <>
            <Check size={16} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Share2 size={16} />
            <span className="hidden sm:inline">Share Build</span>
          </>
        )}
      </button>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center gap-1.5">
            <LinkIcon size={12} />
            Link copied to clipboard!
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-700 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export const BuilderView: React.FC = () => {
  const { gods: GODS } = useData();
  
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [activeAspectId, setActiveAspectId] = useState<string | null>(null);
  const [build, setBuild] = useState<CurrentBuild>({
    starter: null,
    items: [null, null, null, null, null, null],
    relic: null
  });

  // Load build from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const godId = params.get('g');
    
    if (godId && GODS.length > 0) {
      const god = GODS.find(g => g.id === godId);
      if (god) {
        setSelectedGod(god);
        
        // Set aspect
        const aspectId = params.get('a');
        if (aspectId) setActiveAspectId(aspectId);
        
        // Set build
        const starter = params.get('s');
        const relic = params.get('r');
        const itemStr = params.get('i') || '_,_,_,_,_,_';
        const items = itemStr.split(',').map(i => i === '_' ? null : i);
        
        setBuild({
          starter: starter || null,
          items: items.slice(0, 6) as (string | null)[],
          relic: relic || null
        });
        
        // Clear URL params after loading
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [GODS]);

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      {/* Builder Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 flex flex-wrap gap-4 items-center justify-between rounded-xl mb-6">
        <div className="flex items-center gap-4">
          {selectedGod ? (
            <div className="flex items-center gap-3">
              <img 
                src={selectedGod.image} 
                alt={selectedGod.name} 
                className="w-10 h-10 rounded-lg border border-slate-700 object-cover"
              />
              <div>
                <h2 className="font-bold text-white">{selectedGod.name}</h2>
                <p className="text-xs text-slate-500">Build Creator</p>
              </div>
            </div>
          ) : (
            <h2 className="font-bold text-white">Select a God to Start</h2>
          )}
        </div>

        <div className="flex items-center gap-3">
          <ShareBuildButton 
            godId={selectedGod?.id || null}
            aspectId={activeAspectId}
            build={build}
          />
          
          <button
            onClick={() => {
               setBuild({ starter: null, items: [null,null,null,null,null,null], relic: null });
               setSelectedGod(null);
            }}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg border border-slate-700 text-sm font-bold"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="text-center py-20 text-slate-500">
          <p>Builder Interface</p>
          <p className="text-xs mt-2">Select a god to begin customizing your build.</p>
      </div>
    </div>
  );
};