import { Item } from '../../types';

// Map Droppables
export const eyesJungle: Item = { id: 'eyes-jungle', name: 'Eyes of the Jungle', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764385961853-89a46611-064e-4c62-a6be-e98305e45590.png', passive: 'Consume: Ping all enemy God locations on the minimap.' };
export const runicBomb: Item = { id: 'runic-bomb', name: 'Runic Bomb', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764385987284-0077977c-c053-4f83-952f-7828623d22ca.png', passive: 'One Use: Throw a Bomb. After a delay: Deals 1000 True Damage to Minions and Structures. Deals 300 Physical Damage to enemies. Applies Knockback. Reduces enemy Attack Speed by 35% for 10s.' };
export const crystallineEgg: Item = { id: 'crystal-egg', name: 'Crystalline Egg', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386077353-8f330650-a922-46ee-8b12-1d5365850f8b.png', passive: 'Consume: Summon two Naga familiars. They attack your target.' };
export const obsidianDagger: Item = { id: 'obsidian-dagger', name: 'Obsidian Dagger', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386098577-a026bc86-a947-48e6-bbfd-76c9ff7ea3e4.png', passive: 'Consume: Take 500 True Damage. Gain +15% Damage and Attack Speed for 9s. If this Damage would kill you, instead become Immune and fully Heal over 3s.' };

// Consumables
export const hpPot: Item = { id: 'hp-pot', name: 'Health Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386136844-6ed8f99f-a224-428e-9237-3083c3a0accb.png', passive: 'Consume: +10 Heal per second for 22s.' };
export const ward: Item = { id: 'ward', name: 'Vision Ward', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386177380-8ac00a84-dfe6-4a0d-b7a8-00f660cc7ad0.png', passive: 'Consume: Place a Ward. Reveals enemies within 7.2m. Lasts 120s or until destroyed.' };
export const multiPot: Item = { id: 'multi-pot', name: 'Multi Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386252123-8dff038a-2feb-4b8b-8a5b-3eae8bc8df75.png', passive: 'Consume: +5 Heal per second for 22s. +5 Mana per second for 22s.' };
export const manaPot: Item = { id: 'mana-pot', name: 'Mana Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386267031-fc356186-6e89-41f7-983c-fd87f0db8517.png', passive: 'Consume: +12 Mana per second for 14s.' };
export const sentry: Item = { id: 'sentry', name: 'Sentry Ward', cost: 120, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386279896-7453a62f-6478-47b3-a4c6-3cf4b9b12543.png', passive: 'Consume: Place a Ward. Reveals enemies and enemy wards within 7.2m. Lasts 120s or until destroyed.' };
export const hpChalice: Item = { id: 'hp-chalice', name: 'Health Chalice', cost: 300, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386293391-d8b1b83b-2db0-4bfd-b182-d94d774f7250.png', passive: 'Consume Charge: +10 Heal per second for 22s. Starts with 3 charges. Refilled when returning to base.' };
export const wardChalice: Item = { id: 'ward-chalice', name: 'Warding Chalice', cost: 400, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386307773-55f1bfd8-2892-4041-91c3-09b619913df7.png', passive: 'Consume Charge: Place a Ward. Reveals enemies within 7.2m. Lasts 120s or until destroyed. Starts with 2 charges. Refilled when returning to base.' };
export const elixirStrength: Item = { id: 'elixir-strength', name: 'Elixir of Strength', cost: 3000, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764392995270-59bac129-fdca-49ec-bcaf-aaff2b89d93d.png', passive: 'Consume: +50 Strength. Buff that lasts for 360s (6 minutes). Can\'t be stacked.' };
export const elixirIntelligence: Item = { id: 'elixir-intelligence', name: 'Elixir of Intelligence', cost: 3000, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386331746-33a2640f-a1dd-4af5-9d42-9a2c04c49db0.png', passive: 'Consume: +80 Intelligence. Buff that lasts for 360s (6 minutes). Can\'t be stacked.' };

export const CONSUMABLES: Item[] = [
  eyesJungle,
  runicBomb,
  crystallineEgg,
  obsidianDagger,
  hpPot,
  ward,
  multiPot,
  manaPot,
  sentry,
  hpChalice,
  wardChalice,
  elixirStrength,
  elixirIntelligence,
];
