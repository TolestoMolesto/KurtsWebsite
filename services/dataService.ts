import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { GODS } from '../data/gods';
import { ITEMS } from '../data/items';
import { God, Item, NamedTierList } from '../types';

/**
 * Fetch all gods
 * Currently loads from static data file
 * Can be switched to Firestore if needed
 */
export const fetchGods = async (): Promise<God[]> => {
  // Option A: Load from static file (current)
  return GODS;
  
  // Option B: Load from Firestore (uncomment to enable)
  // try {
  //   const snapshot = await getDocs(collection(db, 'gods'));
  //   if (snapshot.empty) return GODS; // Fallback to static
  //   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as God));
  // } catch (error) {
  //   console.error('Failed to fetch gods from Firestore:', error);
  //   return GODS; // Fallback to static
  // }
};

/**
 * Fetch all items
 * Currently loads from static data file
 */
export const fetchItems = async (): Promise<Item[]> => {
  return ITEMS;
};

/**
 * Fetch tier lists from Firestore
 * This was previously returning an empty static array - NOW FIXED!
 */
export const fetchTierLists = async (): Promise<NamedTierList[]> => {
  try {
    const tierListsRef = collection(db, 'tierlists');
    // Order by date descending (newest first)
    const q = query(tierListsRef, orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log('No tier lists found in Firestore');
      return [];
    }
    
    const tierLists = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as NamedTierList));
    
    console.log(`Loaded ${tierLists.length} tier lists from Firestore`);
    return tierLists;
  } catch (error) {
    console.error('Failed to fetch tier lists from Firestore:', error);
    return [];
  }
};