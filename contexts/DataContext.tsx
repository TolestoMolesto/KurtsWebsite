
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { God, Item, NamedTierList } from '../types';
// Import your data sources using relative path
import { fetchGods, fetchItems, fetchTierLists } from '../services/dataService';

interface DataContextType {
  gods: God[];
  items: Item[];
  tierLists: NamedTierList[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gods, setGods] = useState<God[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [tierLists, setTierLists] = useState<NamedTierList[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Fetch all data in parallel
      const [godsData, itemsData, tierListsData] = await Promise.all([
        fetchGods(),
        fetchItems(),
        fetchTierLists()
      ]);
      
      setGods(godsData);
      setItems(itemsData);
      setTierLists(tierListsData);
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Failed to load data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const value: DataContextType = {
    gods,
    items,
    tierLists,
    isLoading,
    error,
    refetch: fetchAllData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Optional: Error boundary wrapper
export const DataErrorFallback: React.FC<{ error: string; onRetry: () => void }> = ({ 
  error, 
  onRetry 
}) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Something went wrong</h3>
    <p className="text-slate-400 mb-6 max-w-md">{error}</p>
    <button
      onClick={onRetry}
      className="px-6 py-2.5 bg-mythic-gold text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
    >
      Try Again
    </button>
  </div>
);
