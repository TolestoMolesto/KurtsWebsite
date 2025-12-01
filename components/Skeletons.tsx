// components/Skeletons.tsx
import React from 'react';

// Base shimmer animation class
const shimmer = "animate-pulse bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%]";

// Generic skeleton box
export const SkeletonBox: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`${shimmer} rounded-lg ${className}`} />
);

// God Card Skeleton
export const GodCardSkeleton: React.FC = () => (
  <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
    <div className={`${shimmer} aspect-[3/4]`} />
    <div className="p-3 space-y-2">
      <SkeletonBox className="h-5 w-3/4" />
      <div className="flex gap-1">
        <SkeletonBox className="h-4 w-12" />
        <SkeletonBox className="h-4 w-16" />
      </div>
    </div>
  </div>
);

// Item Card Skeleton
export const ItemCardSkeleton: React.FC = () => (
  <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-3 flex items-center gap-3">
    <SkeletonBox className="w-14 h-14 rounded-lg shrink-0" />
    <div className="flex-1 space-y-2">
      <SkeletonBox className="h-4 w-2/3" />
      <SkeletonBox className="h-3 w-1/3" />
    </div>
  </div>
);

// Tier List Row Skeleton
export const TierRowSkeleton: React.FC = () => (
  <div className="flex gap-2 items-center bg-slate-900/40 rounded-lg p-2">
    <SkeletonBox className="w-10 h-10 rounded" />
    <div className="flex-1 flex gap-2 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <SkeletonBox key={i} className="w-12 h-12 rounded shrink-0" />
      ))}
    </div>
  </div>
);

// Full page God Grid skeleton
export const GodsGridSkeleton: React.FC<{ count?: number }> = ({ count = 12 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {[...Array(count)].map((_, i) => (
      <GodCardSkeleton key={i} />
    ))}
  </div>
);

// Full page Item Grid skeleton
export const ItemsGridSkeleton: React.FC<{ count?: number }> = ({ count = 12 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(count)].map((_, i) => (
      <ItemCardSkeleton key={i} />
    ))}
  </div>
);

// Streamer Card Skeleton
export const StreamerCardSkeleton: React.FC = () => (
  <div className="bg-slate-900/80 rounded-xl overflow-hidden border border-slate-800">
    <div className="p-4 border-b border-slate-800 flex items-center gap-3">
      <SkeletonBox className="w-10 h-10 rounded-full" />
      <div className="space-y-1.5">
        <SkeletonBox className="h-4 w-24" />
        <SkeletonBox className="h-3 w-16" />
      </div>
    </div>
    <SkeletonBox className="aspect-video w-full" />
    <div className="p-3">
      <SkeletonBox className="h-3 w-20 ml-auto" />
    </div>
  </div>
);

// Leaderboard Row Skeleton
export const LeaderboardRowSkeleton: React.FC = () => (
  <div className="flex items-center gap-4 p-4 bg-slate-900/60 rounded-lg border border-slate-800">
    <SkeletonBox className="w-8 h-8 rounded-full" />
    <SkeletonBox className="w-10 h-10 rounded-lg" />
    <div className="flex-1 space-y-1.5">
      <SkeletonBox className="h-4 w-32" />
      <SkeletonBox className="h-3 w-20" />
    </div>
    <SkeletonBox className="h-6 w-16 rounded-full" />
  </div>
);

// Loading Spinner (alternative to skeletons for actions)
export const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizes = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' };
  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg className="animate-spin text-mythic-gold" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>
  );
};