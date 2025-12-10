import { Item } from '../../types';

// --- TIER 1 ITEMS ---
export const bow: Item = { id: 'bow', name: 'Bow', cost: 300, tier: 1, type: 'Item', category: 'Offense', stats: { 'Attack Speed': '5%' }, image: 'https://image2url.com/images/1764300473285-75232b1a-9715-4131-84d2-86df45e9bc4c.webp'};
export const circlet: Item = { id: 'circlet', name: 'Circlet', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'Max Mana': '150' }, image: 'https://image2url.com/images/1764300446371-4508f190-4aa1-49ef-b269-d3152c46a5f5.webp'};
export const medallion: Item = { id: 'medallion', name: 'Medallion', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Max Health': '75' }, image: 'https://image2url.com/images/1764300409667-c6bcc9ff-5574-4d6b-86cc-0cd7ea741693.webp'};
export const rune: Item = { id: 'rune', name: 'Rune', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '7' }, image: 'https://image2url.com/images/1764300358591-e4963a19-98a2-4d5f-ac5f-1bba2b4b5085.webp'};
export const shield: Item = { id: 'shield', name: 'Shield', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '6' }, image: 'https://image2url.com/images/1764300276797-a211e51b-ce8f-4d7e-aacf-1fa4d3986ff9.webp'};
export const reliquary: Item = { id: 'reliquary', name: 'Reliquary', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'MP5': '2' }, image: 'https://image2url.com/images/1764300393312-24ed5e08-e67f-4fd2-9efa-34be108595f3.webp'};
export const sash: Item = { id: 'sash', name: 'Sash', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'HP5': '2' }, image: 'https://image2url.com/images/1764300323569-45636ba7-4e96-44c9-9f86-8808315c2e1b.webp'};
export const ring: Item = { id: 'ring', name: 'Ring', cost: 400, tier: 1, type: 'Item', category: 'Utility', stats: { 'Cooldown': '5' }, image: 'https://image2url.com/images/1764300372648-4aa67ffc-8b8f-4031-a518-9566176e25fd.webp'};
export const axe: Item = { id: 'axe', name: 'Axe', cost: 450, tier: 1, type: 'Item', category: 'Offense', stats: { 'Strength': '10' }, image: 'https://image2url.com/images/1764299986685-0b247359-c8fb-4120-ab2a-a3dec285b243.webp'};
export const gem: Item = { id: 'gem', name: 'Gem', cost: 450, tier: 1, type: 'Item', category: 'Offense', stats: { 'Intelligence': '15' }, image: 'https://image2url.com/images/1764300431615-91c5aa11-7f97-443a-ba1c-e6ae087670eb.webp'};
export const scythe: Item = { id: 'scythe', name: 'Scythe', cost: 550, tier: 1, type: 'Item', category: 'Offense', stats: { 'Lifesteal': '4%' }, image: 'https://image2url.com/images/1764300304236-1349a875-8c93-49ea-881b-41597dfb8275.webp'};
export const sabre: Item = { id: 'sabre', name: 'Sabre', cost: 550, tier: 1, type: 'Item', category: 'Offense', stats: { 'Crit Chance': '7%' }, image: 'https://image2url.com/images/1764392011528-4336b3c2-8157-4eac-a76d-86cf6017efd4.png'};

export const TIER1_ITEMS: Item[] = [
  bow,
  circlet,
  medallion,
  rune,
  shield,
  reliquary,
  sash,
  ring,
  axe,
  gem,
  scythe,
  sabre,
];
