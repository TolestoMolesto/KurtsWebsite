import { Item } from '../../types';

// --- TIER 2 ITEMS ---
export const manaTome: Item = { id: 'mana-tome', name: 'Mana Tome', cost: 500, tier: 2, type: 'Item', category: 'Utility', stats: { 'Max Mana': '250', 'Mana Regen': '2' }, image: 'https://image2url.com/images/1764387134571-9557b31c-8fce-4d0f-bea6-dabc066e0493.png', buildsFrom: ['circlet'] };
export const adroitRing: Item = { id: 'adroit-ring', name: 'Adroit Ring', cost: 650, tier: 2, type: 'Item', category: 'Utility', stats: { 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387158605-e899363c-6bf5-42c5-a6a2-2538d7ee8b05.png', buildsFrom: ['ring'] };
export const olmecBlue: Item = { id: 'olmec-blue', name: 'Olmec Blue', cost: 700, tier: 2, type: 'Item', category: 'Defense', stats: { 'Max Health': '185', 'Health Regen': '2' }, image: 'https://image2url.com/images/1764387190842-da30644a-7677-4cdd-8def-b67aced18951.png', buildsFrom: ['medallion', 'sash'] };
export const legionnaireArmor: Item = { id: 'legionnaire-armor', name: 'Legionnaire Armor', cost: 750, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '18' }, image: 'https://image2url.com/images/1764387254070-d5a99e2e-c501-4354-a9a7-d74d31a9377a.png', buildsFrom: ['shield'] };
export const hunterBow: Item = { id: 'hunter-bow', name: 'Hunter\'s Bow', cost: 750, tier: 2, type: 'Item', category: 'Offense', stats: { 'Atk Speed': '15%' }, image: 'https://image2url.com/images/1764387348667-1c1c565f-1065-400a-8f9a-d39ab2b14589.png', buildsFrom: ['bow'] };
export const circleProtection: Item = { id: 'circle-protection', name: 'Circle of Protection', cost: 750, tier: 2, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '22' }, image: 'https://image2url.com/images/1764387362133-0627014b-8b09-4c24-95d6-0746e70479c5.png', buildsFrom: ['rune'] };
export const odigba: Item = { id: 'odigba', name: 'Odigba', cost: 800, tier: 2, type: 'Item', category: 'Utility', stats: { 'Max Health': '125', 'Max Mana': '150' }, image: 'https://image2url.com/images/1764387377788-1beff96f-23b0-497b-b719-605a5573fa49.png', passive: 'God Kill or Assist: Heal +5% Max Health over 6s.', buildsFrom: ['medallion', 'circlet'] };
export const veveCharm: Item = { id: 'veve-charm', name: 'Veve Charm', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Max Health': '240' }, image: 'https://image2url.com/images/1764387390845-d7c57d2b-17a0-4799-aa23-d12bfdd52167.png', buildsFrom: ['medallion', 'sash'] };
export const captainsRing: Item = { id: 'captains-ring', name: 'Captain\'s Ring', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387403104-0dbe9d7e-1b0d-4f41-bd47-28ddffbdf5d0.png', buildsFrom: ['shield', 'ring'] };
export const sagesRing: Item = { id: 'sages-ring', name: 'Sage\'s Ring', cost: 800, tier: 2, type: 'Item', category: 'Utility', stats: { 'Mag. Prot': '12', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387415657-f3f2e39b-32df-406e-97a7-23b25e9d4806.png', buildsFrom: ['ring', 'rune'] };
export const engravedGuard: Item = { id: 'engraved-guard', name: 'Engraved Guard', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10' }, image: 'https://image2url.com/images/1764387426128-6b7b687e-f115-43e1-9e2e-cde87908ad5f.png', buildsFrom: ['shield', 'rune'] };
export const cursedSickle: Item = { id: 'cursed-sickle', name: 'Cursed Sickle', cost: 850, tier: 2, type: 'Item', category: 'Offense', stats: { 'Lifesteal': '7.5%' }, image: 'https://image2url.com/images/1764387437426-91ff50a0-33e3-49b9-9b7a-4774ecda3336.png', buildsFrom: ['scythe'] };
export const medalDisruption: Item = { id: 'medal-disruption', name: 'Medal of Disruption', cost: 850, tier: 2, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '12', 'Max Health': '150' }, image: 'https://image2url.com/images/1764388046853-fbbcba76-95c5-4a5b-8721-7f5a783af223.png', buildsFrom: ['rune', 'medallion'] };
export const medalDefense: Item = { id: 'medal-defense', name: 'Medal of Defense', cost: 850, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Max Health': '125' }, image: 'https://image2url.com/images/1764388063038-4ef9cf58-59ee-4285-b69c-87e512552017.png', buildsFrom: ['shield', 'medallion'] };
export const enchantedBracelet: Item = { id: 'enchanted-bracelet', name: 'Enchanted Bracelet', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '20', 'Atk Speed': '8%' }, image: 'https://image2url.com/images/1764388080105-875ec8dc-7fc3-4de8-af00-20ddece05dac.png', buildsFrom: ['gem', 'bow'] };
export const killingStone: Item = { id: 'killing-stone', name: 'Killing Stone', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '35' }, image: 'https://image2url.com/images/1764387486991-a08ae410-87af-443c-b713-5bbb90ace2c3.png', buildsFrom: ['gem'] };
export const battleAxe: Item = { id: 'battle-axe', name: 'Battle Axe', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '15', 'Max Health': '100' }, image: 'https://image2url.com/images/1764387752078-61424bb7-1c4a-462b-a859-afdf64512942.png', buildsFrom: ['axe', 'medallion'] };
export const soulReliquary: Item = { id: 'soul-reliquary', name: 'Soul Reliquary', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '20', 'Mana Regen': '4' }, image: 'https://image2url.com/images/1764387776995-a3c22624-2f23-433b-815e-b282376972fe.png', buildsFrom: ['gem', 'reliquary'] };
export const voidShard: Item = { id: 'void-shard', name: 'Void Shard', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Penetration': '10%' }, image: 'https://image2url.com/images/1764387788715-81f9d6dd-e6dd-4ef1-9c91-9d8b0883a2a6.png', buildsFrom: [] };
export const ringDispel: Item = { id: 'ring-dispel', name: 'Ring of Dispel', cost: 950, tier: 2, type: 'Item', category: 'Utility', stats: { 'Intelligence': '20', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387848843-8b91e643-ea93-487b-a988-a17dcbb5170b.png', passive: 'Hard Crowd Control a God: Target has -10 Strength and -16 Intelligence for 4s.', buildsFrom: ['gem', 'ring'] };
export const flamingPearl: Item = { id: 'flaming-pearl', name: 'Flaming Pearl', cost: 950, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '25', 'Max Health': '100' }, image: 'https://image2url.com/images/1764387859643-32849d3a-a841-4f73-8311-7b1ea17ad0da.png', buildsFrom: ['gem', 'medallion'] };
export const oracleStaff: Item = { id: 'oracle-staff', name: 'Oracle Staff', cost: 950, tier: 2, type: 'Item', category: 'Utility', stats: { 'Intelligence': '20', 'Max Mana': '150', 'Mana Regen': '1' }, image: 'https://image2url.com/images/1764387870708-4ab9c417-dcdf-40d3-8115-e3f2fe6c2b75.png', passive: 'Kill or Assist a God: +25% Mana', buildsFrom: ['gem', 'circlet'] };
export const manchuBow: Item = { id: 'manchu-bow', name: 'Manchu Bow', cost: 950, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Atk Speed': '8%' }, image: 'https://image2url.com/images/1764387885611-2a181cc5-b04c-42e0-bf8b-3f903cdbf3dd.png', passive: 'Attacks deal +10 Physical Damage.', buildsFrom: ['axe', 'bow'] };
export const skeggox: Item = { id: 'skeggox', name: 'Skeggox', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '25' }, image: 'https://image2url.com/images/1764392257039-2ed01c8b-25b7-41ac-a16f-d42c7d06807c.png', buildsFrom: ['axe'] };
export const survivorsSash: Item = { id: 'survivors-sash', name: 'Survivor\'s Sash', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: {}, image: 'https://image2url.com/images/1764388194578-85dc52a0-9e0c-4cf0-9038-94a0a334354d.png', passive: 'Adaptive Stat: +25 Strength or +35 Intelligence (based on highest item stat).', buildsFrom: [] };
export const caestus: Item = { id: 'caestus', name: 'Caestus', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764388216880-c07e1f47-ce8d-4701-9292-e4c1bce4b274.png', passive: 'When Hard Crowd Controlled: +15 Physical and Magical Protection for 4s.', buildsFrom: ['axe', 'ring'] };
export const hookedSword: Item = { id: 'hooked-sword', name: 'Hooked Sword', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Crit Chance': '15%' }, image: 'https://image2url.com/images/1764387897097-175e602b-1f51-456f-bec2-8a78e6bdd655.png', buildsFrom: ['sabre'] };
export const infusedAxe: Item = { id: 'infused-axe', name: 'Infused Axe', cost: 1050, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '15', 'Max Mana': '150', 'Mana Regen': '1' }, image: 'https://image2url.com/images/1764388216880-c07e1f47-ce8d-4701-9292-e4c1bce4b274.png', passive: 'Kill or Assist a God: +25% Mana', buildsFrom: ['axe', 'circlet'] };
export const zither: Item = { id: 'zither', name: 'Zither', cost: 1100, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '12', 'Intelligence': '20' }, image: 'https://image2url.com/images/1764388264117-4b409fbc-dbea-4b0e-8ad6-8a7ff16939d2.png', buildsFrom: ['axe', 'gem'] };
export const stalwartSigil: Item = { id: 'stalwart-sigil', name: 'Stalwart Sigil', cost: 1150, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '15', 'Mag. Prot': '15' }, image: 'https://image2url.com/images/1764388280971-5f2958e9-ae7d-4e0a-92f3-4773cc3e20cc.png', buildsFrom: ['shield', 'rune'] };
export const evilEye: Item = { id: 'evil-eye', name: 'Evil Eye', cost: 1200, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '45' }, image: 'https://image2url.com/images/1764388295440-5d717be6-0ee1-4418-850d-22eb3f7df044.png', buildsFrom: ['gem'] };
export const adamantineSickle: Item = { id: 'adamantine-sickle', name: 'Adamantine Sickle', cost: 1200, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Lifesteal': '5%' }, image: 'https://image2url.com/images/1764388306135-e156dc01-7818-415d-8414-19d05a7ed1e6.png', passive: 'While Below 50% Health: +15 Strength.', buildsFrom: ['axe', 'scythe'] };
export const lucerneHammer: Item = { id: 'lucerne-hammer', name: 'Lucerne Hammer', cost: 1250, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '35' }, image: 'https://image2url.com/images/1764388317698-8b1098b7-8496-46cf-9d32-833967b6a124.png', buildsFrom: ['skeggox'] };
export const kopesh: Item = { id: 'kopesh', name: 'Kopesh', cost: 1250, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Crit Chance': '10%' }, image: 'https://image2url.com/images/1764388329537-aa1373bb-38cd-4c7b-a516-a9b6a9b3028b.png', passive: 'Critically Strike a God: +5% Movement Speed for 4s.', buildsFrom: ['axe', 'sabre'] };

export const TIER2_ITEMS: Item[] = [
  manaTome,
  adroitRing,
  olmecBlue,
  legionnaireArmor,
  hunterBow,
  circleProtection,
  odigba,
  veveCharm,
  captainsRing,
  sagesRing,
  engravedGuard,
  cursedSickle,
  medalDisruption,
  medalDefense,
  enchantedBracelet,
  killingStone,
  battleAxe,
  soulReliquary,
  voidShard,
  ringDispel,
  flamingPearl,
  oracleStaff,
  manchuBow,
  skeggox,
  survivorsSash,
  caestus,
  hookedSword,
  infusedAxe,
  zither,
  stalwartSigil,
  evilEye,
  adamantineSickle,
  lucerneHammer,
  kopesh,
];
