// components/DisclaimerBanner.tsx
import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface DisclaimerBannerProps {
  id: string; // Unique ID for this disclaimer (for storage)
  message: string;
  type?: 'warning' | 'info' | 'success';
  dismissable?: boolean;
  expiresInDays?: number; // How long before showing again
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({
  id,
  message,
  type = 'warning',
  dismissable = true,
  expiresInDays = 7
}) => {
  const [isDismissed, setIsDismissed] = useState(true); // Start hidden to prevent flash

  const storageKey = `disclaimer_dismissed_${id}`;

  useEffect(() => {
    // Check if previously dismissed and not expired
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const { timestamp } = JSON.parse(stored);
        const expiresAt = timestamp + (expiresInDays * 24 * 60 * 60 * 1000);
        if (Date.now() < expiresAt) {
          setIsDismissed(true);
          return;
        }
      }
      setIsDismissed(false);
    } catch {
      setIsDismissed(false);
    }
  }, [storageKey, expiresInDays]);

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      localStorage.setItem(storageKey, JSON.stringify({ timestamp: Date.now() }));
    } catch {
      // localStorage not available, just dismiss for session
    }
  };

  if (isDismissed) return null;

  const styles = {
    warning: {
      bg: 'bg-yellow-950/40',
      border: 'border-yellow-600/40',
      text: 'text-yellow-200/90',
      icon: 'text-yellow-500',
      highlight: 'text-yellow-500'
    },
    info: {
      bg: 'bg-blue-950/40',
      border: 'border-blue-600/40',
      text: 'text-blue-200/90',
      icon: 'text-blue-500',
      highlight: 'text-blue-400'
    },
    success: {
      bg: 'bg-green-950/40',
      border: 'border-green-600/40',
      text: 'text-green-200/90',
      icon: 'text-green-500',
      highlight: 'text-green-400'
    }
  };

  const s = styles[type];

  return (
    <div className={`${s.bg} border ${s.border} ${s.text} p-3 rounded-lg flex items-start gap-3 text-sm animate-in fade-in slide-in-from-top-2 duration-300`}>
      <AlertTriangle className={`${s.icon} shrink-0 mt-0.5`} size={18} />
      <p className="flex-1">
        <span className={`font-bold ${s.highlight} uppercase tracking-wider mr-1`}>
          {type === 'warning' ? 'Notice:' : type === 'info' ? 'Info:' : 'Success:'}
        </span>
        {message}
      </p>
      {dismissable && (
        <button
          onClick={handleDismiss}
          className="text-slate-400 hover:text-white transition-colors p-1 -m-1 rounded hover:bg-white/10"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

// Global banner that appears at the top of the app
export const GlobalPatchBanner: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-4">
      <DisclaimerBanner
        id="patch-disclaimer-v1"
        message="DATA MAY BE INCORRECT WORKING WITH HI-REZ TO OBTAIN CORRECT AMOUNTS Till Then Data is manually updated each patch and may contain inaccuracies (Will Be Updated To API Once Permission Has Been Obtained) Please report any issues via Discord!"
        type="warning"
        expiresInDays={3}
      />
    </div>
  );
};