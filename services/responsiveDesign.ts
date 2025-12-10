/**
 * Responsive design utilities and hooks
 */

import React, { useState, useEffect } from 'react';

export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const BREAKPOINTS: Record<BreakpointKey, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Hook to get current breakpoint
 */
export const useBreakpoint = (): BreakpointKey => {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>('md');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < BREAKPOINTS.sm) {
        setBreakpoint('xs');
      } else if (width < BREAKPOINTS.md) {
        setBreakpoint('sm');
      } else if (width < BREAKPOINTS.lg) {
        setBreakpoint('md');
      } else if (width < BREAKPOINTS.xl) {
        setBreakpoint('lg');
      } else if (width < BREAKPOINTS['2xl']) {
        setBreakpoint('xl');
      } else {
        setBreakpoint('2xl');
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    // Also listen for window resize for broader compatibility
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

/**
 * Hook to check if screen is at least a certain breakpoint
 */
export const useIsAtLeast = (breakpoint: BreakpointKey): boolean => {
  const currentBreakpoint = useBreakpoint();
  const breakpoints: BreakpointKey[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  
  return (
    breakpoints.indexOf(currentBreakpoint) >=
    breakpoints.indexOf(breakpoint)
  );
};

/**
 * Hook to check if screen is less than a certain breakpoint
 */
export const useIsLessThan = (breakpoint: BreakpointKey): boolean => {
  const currentBreakpoint = useBreakpoint();
  const breakpoints: BreakpointKey[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  
  return (
    breakpoints.indexOf(currentBreakpoint) <
    breakpoints.indexOf(breakpoint)
  );
};

/**
 * Hook to check if viewport is mobile size
 */
export const useIsMobile = (): boolean => {
  return useIsLessThan('md');
};

/**
 * Hook to check if viewport is desktop size
 */
export const useIsDesktop = (): boolean => {
  return useIsAtLeast('lg');
};

/**
 * Hook to check if viewport is tablet size
 */
export const useIsTablet = (): boolean => {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  return !isMobile && !isDesktop;
};

/**
 * Responsive margin/padding utility
 */
export const getResponsiveSpacing = (
  mobile: string | number,
  tablet?: string | number,
  desktop?: string | number
): string => {
  const breakpoint = useBreakpoint();
  
  if (breakpoint === 'xs' || breakpoint === 'sm') {
    return String(mobile);
  }
  
  if ((breakpoint === 'md' || breakpoint === 'lg') && tablet !== undefined) {
    return String(tablet);
  }
  
  if (desktop !== undefined) {
    return String(desktop);
  }
  
  return String(mobile);
};

/**
 * Responsive font size utility
 */
export const getResponsiveFontSize = (
  mobile: string,
  tablet?: string,
  desktop?: string
): string => {
  const breakpoint = useBreakpoint();
  
  if (breakpoint === 'xs' || breakpoint === 'sm') {
    return mobile;
  }
  
  if ((breakpoint === 'md' || breakpoint === 'lg') && tablet) {
    return tablet;
  }
  
  return desktop || mobile;
};

/**
 * Responsive grid columns utility
 */
export const getResponsiveGridCols = (
  mobile: number,
  tablet?: number,
  desktop?: number
): number => {
  const breakpoint = useBreakpoint();
  
  if (breakpoint === 'xs' || breakpoint === 'sm') {
    return mobile;
  }
  
  if ((breakpoint === 'md' || breakpoint === 'lg') && tablet !== undefined) {
    return tablet;
  }
  
  return desktop ?? mobile;
};

/**
 * Responsive container query support check
 */
export const supportsContainerQueries = (): boolean => {
  if (typeof window === 'undefined') return false;
  return CSS.supports('container-type', 'inline-size');
};

/**
 * Safe area utilities for notched devices
 */
export const getSafeAreaInsets = (): {
  top: string;
  right: string;
  bottom: string;
  left: string;
} => {
  if (typeof getComputedStyle === 'undefined') {
    return { top: '0', right: '0', bottom: '0', left: '0' };
  }

  const root = document.documentElement;
  const style = getComputedStyle(root);

  return {
    top: style.getPropertyValue('env(safe-area-inset-top)') || '0',
    right: style.getPropertyValue('env(safe-area-inset-right)') || '0',
    bottom: style.getPropertyValue('env(safe-area-inset-bottom)') || '0',
    left: style.getPropertyValue('env(safe-area-inset-left)') || '0',
  };
};

/**
 * Media query helpers for styled components or dynamic styling
 */
export const media = {
  mobile: (styles: string) => `@media (max-width: ${BREAKPOINTS.md - 1}px) { ${styles} }`,
  tablet: (styles: string) => 
    `@media (min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px) { ${styles} }`,
  desktop: (styles: string) => `@media (min-width: ${BREAKPOINTS.lg}px) { ${styles} }`,
  at: (breakpoint: BreakpointKey, styles: string) => 
    `@media (min-width: ${BREAKPOINTS[breakpoint]}px) { ${styles} }`,
  below: (breakpoint: BreakpointKey, styles: string) => 
    `@media (max-width: ${BREAKPOINTS[breakpoint] - 1}px) { ${styles} }`,
};

/**
 * Get viewport dimensions
 */
export const useViewportSize = (): { width: number; height: number } => {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

/**
 * Detect landscape/portrait orientation
 */
export const useOrientation = (): 'portrait' | 'landscape' => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    typeof window !== 'undefined' && window.innerHeight > window.innerWidth
      ? 'portrait'
      : 'landscape'
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(
        window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
      );
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return orientation;
};
