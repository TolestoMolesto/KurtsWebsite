import { Item } from '../../types';

// Curios
export const meditation: Item = { id: 'meditation', name: 'Meditation', cost: 0, type: 'Curio', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764300811971-e6792e67-1d2a-4b5b-acb9-3e3a6f64f9ba.png', passive: 'ACTIVE: You and allies within 6.4m gain +10 (+2.5% missing Health) Heal per second and +10 (+3% missing Mana) Mana per second for 4s.' };
export const heimdallrsSight: Item = { id: 'heimdallrs-sight', name: "Heimdallr's Sight", cost: 0, type: 'Curio', category: 'Utility', stats: { Cooldown: '90s' }, image: 'https://image2url.com/images/1764300826747-a4570ab2-b3a3-4422-b436-504406b9ee46.png', passive: 'ACTIVE: Pulse a reveal area 4 times over 4s. Reveals enemies within 8.8m. Reveals Stealthed enemies and Wards.' };
export const gjallarflare: Item = { id: 'gjallarflare', name: 'Gjallarflare', cost: 0, type: 'Curio', category: 'Utility', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764300841786-3182ddf9-a904-4b3b-a118-413eb1c612ff.png', passive: 'ACTIVE: Fire a traveling flare. Reveals enemies within 8.8m. Travels for 5s up to 44m. On Refire/Expire: Detonate Flare. Reveals enemies within 13.2m for 6s.' };
export const bifrostShard: Item = { id: 'bifrost-shard', name: 'Bifrost Shard', cost: 0, type: 'Curio', category: 'Utility', stats: { Cooldown: '90s' }, image: 'https://image2url.com/images/1764300859786-bb65df79-792a-4502-b6c8-4b6ece449e24.png', passive: 'ACTIVE: Place a Ward. Reveals enemies within 7.2m. Lasts 90s or until destroyed.' };
export const battleCry: Item = { id: 'battle-cry', name: 'Battle Cry', cost: 0, type: 'Curio', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764300875037-3b162def-81f6-42da-b7c8-91698f18165a.png', passive: 'PASSIVE: On God Kill or Death: Gain 1 Stack (Max 5). ACTIVE: Consume all Stacks. Per Stack: +3% of all Stats from Items & +3% Movement Speed. Buff lasts 6s. Stacks fall off one at a time.' };

// Relics
export const beads: Item = { id: 'beads', name: 'Purification Beads', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '150s' }, image: 'https://image2url.com/images/1764301241677-32065ec4-dfa1-4d2f-9656-b624425afdd8.png', passive: 'ACTIVE: Become Immune to Crowd Control for 2s.' };
export const aegis: Item = { id: 'aegis', name: 'Aegis of Acceleration', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '140s' }, image: 'https://image2url.com/images/1764301228981-6b08accd-b990-4225-bb7c-619122ef06cf.png', passive: 'ACTIVE: Become Immune to damage and healing for 1.5s. Can only Move. On god Damage prevented: +7% Movement Speed for 6s (Max 3x).' };
export const blink: Item = { id: 'blink', name: 'Blink Rune', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '140s' }, image: 'https://image2url.com/images/1764301216527-943eeb78-a296-4f93-bcf9-b67bbc9ad474.png', passive: 'ACTIVE: Teleport up to 5.6m. Cannot be used for 3s after dealing or taking God damage. Can be used while casting. Damage or Kill a God within 4s of use: -30s Cooldown.' };
export const phantom: Item = { id: 'phantom', name: 'Phantom Shell', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764301202457-7238a56f-335b-4a93-945c-d359c4f8b9be.png', passive: 'ACTIVE: Shield yourself and allies within 5.6m for +100 (+10 per Level) for 3s. Affected Gods: Take 20% (+1% per Level) reduced Attack Damage. Can pass through players and player-made walls.' };
export const sundering: Item = { id: 'sundering', name: 'Sundering Arc', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764301188191-afb6d8d5-c82c-4373-b07d-f94b07bc21b4.png', passive: 'ACTIVE: Deal 175 (+25 per Level, caps at 500 at Level 13) True Damage to Jungle Monsters/Bosses. Bleed Gods, dealing 25 (+4 per Level) True Damage 3 times over 2s. -30s Cooldown if only used on Jungle Monsters/Bosses.' };
export const agility: Item = { id: 'agility', name: 'Agility Relic', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '20s' }, image: 'https://image2url.com/images/1764301175084-a0a47b02-42a4-468e-afc7-1bfb319a4c60.png', passive: 'PASSIVE: Ranged Gods: +40% Attack projectile speed. Melee Gods: -15% Attack movement penalty. ACTIVE: Dash in the direction you are currently moving.' };

export const RELICS_CURIOS: Item[] = [
  meditation,
  heimdallrsSight,
  gjallarflare,
  bifrostShard,
  battleCry,
  beads,
  aegis,
  blink,
  phantom,
  sundering,
  agility,
];
