/**
 * Image optimization utilities for better mobile and desktop performance
 */

interface ImageOptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}

/**
 * Generate optimized image URL for different screen sizes
 * Supports lazy loading and responsive images
 */
export const optimizeImageUrl = (
  originalUrl: string,
  options: ImageOptimizationOptions = {}
): string => {
  // If URL is external or data URL, return as-is
  if (originalUrl.startsWith('http') || originalUrl.startsWith('data:')) {
    // Add optimization parameters if it's an image service (like Cloudinary, etc.)
    // For now, return as-is
    return originalUrl;
  }

  return originalUrl;
};

/**
 * Create srcset for responsive images
 */
export const createImageSrcSet = (
  baseUrl: string,
  sizes: number[] = [320, 640, 1024, 1440]
): string => {
  return sizes
    .map(size => `${baseUrl} ${size}w`)
    .join(', ');
};

/**
 * Get appropriate image size for device
 */
export const getResponsiveImageSize = (): number => {
  if (typeof window === 'undefined') return 1024;
  
  const width = window.innerWidth;
  
  if (width < 640) return 320;
  if (width < 1024) return 640;
  if (width < 1440) return 1024;
  return 1440;
};

/**
 * Prefetch images for better perceived performance
 */
export const prefetchImage = (url: string) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  link.as = 'image';
  document.head.appendChild(link);
};

/**
 * Lazy load images with Intersection Observer
 */
export const createLazyImageObserver = (
  onIntersect: (element: Element) => void
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onIntersect(entry.target);
        }
      });
    },
    {
      rootMargin: '50px', // Start loading 50px before visible
    }
  );
};

/**
 * Image loading utilities for React components
 */
export const useImageOptimization = (imageUrl: string) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setError('Failed to load image');

  return {
    isLoaded,
    error,
    handlers: {
      onLoad: handleLoad,
      onError: handleError,
    },
  };
};

import React from 'react';

/**
 * Get appropriate pixel density for device
 */
export const getDevicePixelRatio = (): '1x' | '2x' | '3x' => {
  if (typeof window === 'undefined') return '1x';
  
  const ratio = window.devicePixelRatio || 1;
  if (ratio >= 3) return '3x';
  if (ratio >= 2) return '2x';
  return '1x';
};

/**
 * Format large numbers for readability on mobile/desktop
 */
export const formatNumberForDisplay = (num: number, maxChars: number = 3): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    typeof navigator !== 'undefined' &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
};

/**
 * Check if device supports touch events
 */
export const supportsTouchEvents = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Debounce function for resize/scroll handlers
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function for performance-critical handlers
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
