/**
 * Performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  navigationTiming: {
    pageLoadTime: number;
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
  };
  resourceTiming: {
    totalResources: number;
    totalSize: number;
    slowestResource: string;
  };
}

// Proper type definitions for Web Vitals PerformanceEntry types
interface LargestContentfulPaint extends PerformanceEntry {
  renderTime: number;
  loadTime: number;
  size: number;
  id: string;
  url: string;
  element?: Element;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

export const initPerformanceMonitoring = () => {
  if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as LargestContentfulPaint[];
        const lastEntry = entries[entries.length - 1];
        // Use renderTime if available, fall back to loadTime
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.debug('LCP monitoring not available');
    }

    // Monitor First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceEventTiming[];
        entries.forEach((entry) => {
          // FID is the delay between user input and when processing starts
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.debug('FID monitoring not available');
    }

    // Monitor Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as LayoutShift[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.debug('CLS monitoring not available');
    }
  }

  // Log navigation timing
  if ('navigation' in window.performance) {
    window.addEventListener('load', () => {
      const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navTiming) {
        console.log('Page Load Time:', navTiming.loadEventEnd - navTiming.loadEventStart);
        console.log('DOM Interactive:', navTiming.domInteractive - navTiming.fetchStart);
        console.log('DOM Content Loaded:', navTiming.domContentLoadedEventEnd - navTiming.fetchStart);
      }
    });
  }
};

/**
 * Measure component render time
 */
export const measureRenderTime = (componentName: string, startTime: number) => {
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  if (duration > 16) { // More than one frame at 60fps
    console.warn(`⚠️ ${componentName} took ${duration.toFixed(2)}ms to render`);
  }
};

/**
 * Prefetch resources for better performance
 */
export const prefetchResource = (url: string, type: 'script' | 'style' | 'fetch' = 'fetch') => {
  const link = document.createElement('link');
  
  if (type === 'script' || type === 'style') {
    link.rel = 'prefetch';
    link.href = url;
    if (type === 'style') {
      link.as = 'style';
    } else {
      link.as = 'script';
    }
  } else {
    link.rel = 'prefetch';
    link.href = url;
  }
  
  document.head.appendChild(link);
};

/**
 * Defer non-critical resource loading
 */
export const deferResourceLoad = (callback: () => void, delay: number = 2000) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => callback(), { timeout: delay });
  } else {
    setTimeout(callback, delay);
  }
};

/**
 * Get resource timing information
 */
export const getResourceMetrics = (): PerformanceMetrics | null => {
  try {
    const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    if (!navTiming) return null;

    const totalSize = resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
    const slowestResource = resources.reduce((prev, current) => 
      (prev.duration > current.duration) ? prev : current
    );

    return {
      navigationTiming: {
        pageLoadTime: navTiming.loadEventEnd - navTiming.loadEventStart,
        fcp: 0, // Would need PerformanceObserver
        lcp: 0, // Would need PerformanceObserver
      },
      resourceTiming: {
        totalResources: resources.length,
        totalSize: Math.round(totalSize / 1024), // Convert to KB
        slowestResource: slowestResource.name,
      },
    };
  } catch (error) {
    console.error('Error getting resource metrics:', error);
    return null;
  }
};

/**
 * Cache management utilities
 */
export const CacheManager = {
  /**
   * Set item in localStorage with expiry
   */
  setWithExpiry: (key: string, value: unknown, expiryHours: number = 24) => {
    try {
      const now = new Date();
      const item = {
        value,
        expiry: now.getTime() + expiryHours * 60 * 60 * 1000,
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  },

  /**
   * Get item from localStorage, removing if expired
   */
  getWithExpiry: (key: string) => {
    try {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;

      const item = JSON.parse(itemStr);
      const now = new Date().getTime();

      if (now > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }

      return item.value;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  },

  /**
   * Clear expired cache items
   */
  clearExpired: () => {
    const now = new Date().getTime();
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
      try {
        const itemStr = localStorage.getItem(key);
        if (itemStr) {
          const item = JSON.parse(itemStr);
          if (item.expiry && now > item.expiry) {
            localStorage.removeItem(key);
          }
        }
      } catch (error) {
        // Ignore parse errors
      }
    });
  },
};