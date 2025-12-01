
import { GODS } from '../data/gods';
import { ITEMS } from '../data/items';
import { STREAMER_TIER_LISTS } from '../data/tierlists';
import { God, Item, NamedTierList } from '../types';

// Simulate API delay for realistic loading states
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchGods = async (): Promise<God[]> => {
  await delay(100); 
  return GODS;
};

export const fetchItems = async (): Promise<Item[]> => {
  await delay(100);
  return ITEMS;
};

export const fetchTierLists = async (): Promise<NamedTierList[]> => {
  await delay(100);
  return STREAMER_TIER_LISTS;
};
