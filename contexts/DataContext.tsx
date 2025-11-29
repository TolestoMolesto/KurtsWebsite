
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { collection, onSnapshot, doc, writeBatch } from 'firebase/firestore';
import { db } from '../services/firebase';
import { God, Item, NamedTierList } from '../types';
import { GODS as STATIC_GODS } from '../data/gods';
import { ITEMS as STATIC_ITEMS } from '../data/items';
import { STREAMER_TIER_LISTS as STATIC_TIER_LISTS } from '../data/tierlists';

interface DataContextType {
  gods: God[];
  items: Item[];
  tierLists: NamedTierList[];
  loading: boolean;
}

const DataContext = createContext<DataContextType>({
  gods: [],
  items: [],
  tierLists: [],
  loading: true,
});

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Store Firestore overrides separately
  const [godOverrides, setGodOverrides] = useState<Record<string, Partial<God>>>({});
  const [firestoreTierLists, setFirestoreTierLists] = useState<NamedTierList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Listen to God Overrides (Builds, Matchups, Leveling)
    const unsubGods = onSnapshot(collection(db, 'gods'), (snap) => {
      const overrides: Record<string, Partial<God>> = {};
      snap.docs.forEach(doc => {
        overrides[doc.id] = doc.data() as Partial<God>;
      });
      setGodOverrides(overrides);
    });

    // 2. Listen to Dynamic Tier Lists (if any)
    const unsubTierLists = onSnapshot(collection(db, 'tierlists'), (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() } as NamedTierList));
      setFirestoreTierLists(data);
    });

    setLoading(false);

    return () => {
      unsubGods();
      unsubTierLists();
    };
  }, []);

  // 3. Merge Static Data with Firestore Overrides
  const gods = useMemo(() => {
    return STATIC_GODS.map(staticGod => {
      const override = godOverrides[staticGod.id];
      if (!override) return staticGod;

      // Merge specific fields that are editable
      return {
        ...staticGod,
        recommendedBuilds: override.recommendedBuilds || staticGod.recommendedBuilds,
        levelingOrder: override.levelingOrder || staticGod.levelingOrder,
        goodAgainst: override.goodAgainst || staticGod.goodAgainst,
        badAgainst: override.badAgainst || staticGod.badAgainst,
        aspectLevelingOrders: override.aspectLevelingOrders || staticGod.aspectLevelingOrders,
        aspectMatchups: override.aspectMatchups || staticGod.aspectMatchups,
        // We do NOT override name, image, base stats, etc. to keep integrity
      };
    });
  }, [godOverrides]);

  // 4. Merge Tier Lists
  const tierLists = useMemo(() => {
      // Avoid duplicates if IDs clash, favor Firestore
      const staticIds = new Set(STATIC_TIER_LISTS.map(l => l.id));
      const dynamicLists = firestoreTierLists.filter(l => !staticIds.has(l.id));
      
      return [...STATIC_TIER_LISTS, ...dynamicLists];
  }, [firestoreTierLists]);

  // Items are currently Static only as requested
  const items = STATIC_ITEMS;

  return (
    <DataContext.Provider value={{ gods, items, tierLists, loading }}>
      {children}
    </DataContext.Provider>
  );
};
