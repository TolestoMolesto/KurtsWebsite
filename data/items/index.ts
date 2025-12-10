import { Item } from '../../types';
import { STARTERS } from './starters';
import { TIER1_ITEMS } from './tier1-items';
import { TIER2_ITEMS } from './tier2-items';
import { TIER3_OFFENSIVE_ITEMS } from './tier3-offensive-items';
import { TIER3_DEFENSIVE_ITEMS, TIER3_HYBRID_ITEMS } from './tier3-defensive-hybrid-items';
import { RELICS_CURIOS } from './relics-curios';
import { CONSUMABLES } from './consumables';
import { GOD_SPECIFIC_ITEMS } from './god-specific-items';

export const ITEMS: Item[] = [
  ...STARTERS,
  ...TIER1_ITEMS,
  ...TIER2_ITEMS,
  ...TIER3_OFFENSIVE_ITEMS,
  ...TIER3_DEFENSIVE_ITEMS,
  ...TIER3_HYBRID_ITEMS,
  ...RELICS_CURIOS,
  ...CONSUMABLES,
  ...GOD_SPECIFIC_ITEMS,
];
