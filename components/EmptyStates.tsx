// components/EmptyStates.tsx
import React from 'react';
import { Search, Tv, Trophy, Sword, Package, Users, AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon,
  action 
}) => (
  <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
    <div className="w-20 h-20 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-6 text-slate-500">
      {icon || <AlertCircle size={32} />}
    </div>
    <h3 className="text-xl font-serif font-bold text-slate-300 mb-2">{title}</h3>
    {description && (
      <p className="text-slate-500 text-sm max-w-md mb-6">{description}</p>
    )}
    {action && (
      <button
        onClick={action.onClick}
        className="px-6 py-2.5 bg-mythic-gold text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
      >
        {action.label}
      </button>
    )}
  </div>
);

// Preset Empty States
export const NoSearchResults: React.FC<{ query: string; onClear?: () => void }> = ({ query, onClear }) => (
  <EmptyState
    icon={<Search size={32} />}
    title="No results found"
    description={`We couldn't find anything matching "${query}". Try adjusting your search or filters.`}
    action={onClear ? { label: 'Clear Search', onClick: onClear } : undefined}
  />
);

export const NoLiveStreamers: React.FC = () => (
  <EmptyState
    icon={<Tv size={32} />}
    title="No one's live right now"
    description="Check back later to catch your favorite streamers, or browse their tier lists below."
  />
);

export const NoTierLists: React.FC<{ onCreate?: () => void }> = ({ onCreate }) => (
  <EmptyState
    icon={<Trophy size={32} />}
    title="No tier lists yet"
    description="Be the first to create a tier list and share your meta insights with the community."
    action={onCreate ? { label: 'Create Tier List', onClick: onCreate } : undefined}
  />
);

export const NoGodsFound: React.FC<{ onReset?: () => void }> = ({ onReset }) => (
  <EmptyState
    icon={<Sword size={32} />}
    title="No gods match your filters"
    description="Try adjusting your role, damage type, or pantheon filters to see more results."
    action={onReset ? { label: 'Reset Filters', onClick: onReset } : undefined}
  />
);

export const NoItemsFound: React.FC<{ onReset?: () => void }> = ({ onReset }) => (
  <EmptyState
    icon={<Package size={32} />}
    title="No items match your filters"
    description="Try changing your type, category, or stat filters to find what you're looking for."
    action={onReset ? { label: 'Reset Filters', onClick: onReset } : undefined}
  />
);

export const NoPlayersRegistered: React.FC<{ onRegister?: () => void }> = ({ onRegister }) => (
  <EmptyState
    icon={<Users size={32} />}
    title="No players registered yet"
    description="Be the first to sign up for the tournament and start climbing the leaderboard!"
    action={onRegister ? { label: 'Register Now', onClick: onRegister } : undefined}
  />
);

export const ErrorState: React.FC<{ message?: string; onRetry?: () => void }> = ({ 
  message = "Something went wrong", 
  onRetry 
}) => (
  <EmptyState
    icon={<AlertCircle size={32} className="text-red-500" />}
    title="Oops!"
    description={message}
    action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}
  />
);