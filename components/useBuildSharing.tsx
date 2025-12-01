// components/useBuildSharing.tsx
import React, { useState, useEffect, useCallback } from 'react';

interface BuildState {
  godId: string | null;
  aspectId: string | null;
  starter: string | null;
  items: (string | null)[];
  relic: string | null;
}

interface UseBuildSharingReturn {
  // Load build from URL on mount
  loadedBuild: BuildState | null;
  // Generate shareable URL
  generateShareUrl: (build: BuildState) => string;
  // Copy URL to clipboard
  copyShareUrl: (build: BuildState) => Promise<boolean>;
  // Check if a build is shareable (has at least god + 1 item)
  isShareable: (build: BuildState) => boolean;
}

// Encode build to compact URL params
const encodeBuild = (build: BuildState): string => {
  const params = new URLSearchParams();
  
  if (build.godId) params.set('g', build.godId);
  if (build.aspectId) params.set('a', build.aspectId);
  if (build.starter) params.set('s', build.starter);
  if (build.relic) params.set('r', build.relic);
  
  // Encode items as comma-separated, using '_' for empty slots
  const itemStr = build.items.map(i => i || '_').join(',');
  if (itemStr !== '_,_,_,_,_,_') {
    params.set('i', itemStr);
  }
  
  return params.toString();
};

// Decode build from URL params
const decodeBuild = (search: string): BuildState | null => {
  const params = new URLSearchParams(search);
  
  const godId = params.get('g');
  if (!godId) return null; // Must have at least a god
  
  const aspectId = params.get('a');
  const starter = params.get('s');
  const relic = params.get('r');
  
  // Decode items
  const itemStr = params.get('i') || '_,_,_,_,_,_';
  const items = itemStr.split(',').map(i => i === '_' ? null : i);
  
  // Pad to 6 items if needed
  while (items.length < 6) items.push(null);
  
  return {
    godId,
    aspectId: aspectId || null,
    starter: starter || null,
    items: items.slice(0, 6),
    relic: relic || null
  };
};

export const useBuildSharing = (): UseBuildSharingReturn => {
  const [loadedBuild, setLoadedBuild] = useState<BuildState | null>(null);

  // On mount, check URL for build params
  useEffect(() => {
    const search = window.location.search;
    if (search) {
      const build = decodeBuild(search);
      if (build) {
        setLoadedBuild(build);
        // Optionally clear the URL params after loading
        // window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, []);

  const generateShareUrl = useCallback((build: BuildState): string => {
    const encoded = encodeBuild(build);
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?${encoded}`;
  }, []);

  const copyShareUrl = useCallback(async (build: BuildState): Promise<boolean> => {
    const url = generateShareUrl(build);
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        return true;
      } catch {
        return false;
      } finally {
        document.body.removeChild(textArea);
      }
    }
  }, [generateShareUrl]);

  const isShareable = useCallback((build: BuildState): boolean => {
    if (!build.godId) return false;
    // Convert to boolean to satisfy return type
    const hasAnyItem = !!(build.starter || build.relic || build.items.some(i => i !== null));
    return hasAnyItem;
  }, []);

  return {
    loadedBuild,
    generateShareUrl,
    copyShareUrl,
    isShareable
  };
};

// Share Button Component
export const ShareBuildButton: React.FC<{
  build: BuildState;
  className?: string;
}> = ({ build, className = '' }) => {
  const { copyShareUrl, isShareable } = useBuildSharing();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const success = await copyShareUrl(build);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isShareable(build)) return null;

  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
        copied 
          ? 'bg-green-500 text-white' 
          : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
      } ${className}`}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share Build
        </>
      )}
    </button>
  );
};
