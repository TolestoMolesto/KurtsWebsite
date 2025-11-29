

import { God, Item, DamageType, NamedTierList, TierRank, GodStats, Tournament } from './types';

// Helper to generate placeholder images
const getGodImage = (id: number) => `https://picsum.photos/seed/god${id}/400/600`;
const getItemImage = (id: number | string) => `https://picsum.photos/seed/item${id}/128/128`;

// Helper function to generate 20 levels of stats based on linear growth
// Used as fallback for gods without manual data
const generateStats = (base: Partial<GodStats>, perLevel: Partial<GodStats>): GodStats[] => {
  const levels: GodStats[] = [];
  const defaultStats: GodStats = {
    strength: 0, intelligence: 0, attackSpeed: 1.0, lifesteal: 0, critChance: 0, critDamage: 1.65,
    penetration: 0, physicalProtection: 0, magicalProtection: 0, maxHealth: 500, healthRegen: 0,
    maxMana: 200, manaRegen: 0, cooldownRate: 0, movementSpeed: 360,
    ...base
  };

  for (let i = 0; i < 20; i++) {
    levels.push({
      strength: defaultStats.strength + ((perLevel.strength || 0) * i),
      intelligence: defaultStats.intelligence + ((perLevel.intelligence || 0) * i),
      attackSpeed: defaultStats.attackSpeed + ((perLevel.attackSpeed || 0) * i),
      lifesteal: defaultStats.lifesteal + ((perLevel.lifesteal || 0) * i),
      critChance: defaultStats.critChance + ((perLevel.critChance || 0) * i),
      critDamage: defaultStats.critDamage + ((perLevel.critDamage || 0) * i),
      penetration: defaultStats.penetration + ((perLevel.penetration || 0) * i),
      physicalProtection: defaultStats.physicalProtection + ((perLevel.physicalProtection || 0) * i),
      magicalProtection: defaultStats.magicalProtection + ((perLevel.magicalProtection || 0) * i),
      maxHealth: defaultStats.maxHealth + ((perLevel.maxHealth || 0) * i),
      healthRegen: defaultStats.healthRegen + ((perLevel.healthRegen || 0) * i),
      maxMana: defaultStats.maxMana + ((perLevel.maxMana || 0) * i),
      manaRegen: defaultStats.manaRegen + ((perLevel.manaRegen || 0) * i),
      cooldownRate: defaultStats.cooldownRate + ((perLevel.cooldownRate || 0) * i),
      movementSpeed: defaultStats.movementSpeed + ((perLevel.movementSpeed || 0) * i),
    });
  }
  return levels;
};

export const GODS: God[] = [
  {
    id: 'zeus',
    name: 'Zeus',
    title: 'God of the Sky',
    pantheon: 'Greek',
    role: 'Mage',
    lanes: ['Mid', 'Carry'],
    damageType: DamageType.Magical,
    image: 'https://image2url.com/images/1764297903067-d12435dd-9847-4167-8b86-978cc13f46ce.jpg',
    statsByLevel: [
      { strength: 0, intelligence: 0, attackSpeed: 1, physicalProtection: 18, magicalProtection: 27, maxHealth: 591, healthRegen: 2, maxMana: 296, manaRegen: 2, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 3, physicalProtection: 20, magicalProtection: 29, maxHealth: 684, healthRegen: 2, maxMana: 338, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 4, physicalProtection: 23, magicalProtection: 30, maxHealth: 777, healthRegen: 2, maxMana: 380, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 6, physicalProtection: 26, magicalProtection: 32, maxHealth: 869, healthRegen: 2, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 7, physicalProtection: 29, magicalProtection: 33, maxHealth: 962, healthRegen: 2, maxMana: 464, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 9, physicalProtection: 32, magicalProtection: 35, maxHealth: 1054, healthRegen: 3, maxMana: 506, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 10, physicalProtection: 35, magicalProtection: 36, maxHealth: 1147, healthRegen: 3, maxMana: 548, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 12, physicalProtection: 38, magicalProtection: 37, maxHealth: 1240, healthRegen: 3, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 13, physicalProtection: 40, magicalProtection: 39, maxHealth: 1332, healthRegen: 3, maxMana: 632, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 15, physicalProtection: 43, magicalProtection: 40, maxHealth: 1425, healthRegen: 4, maxMana: 674, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 16, physicalProtection: 46, magicalProtection: 42, maxHealth: 1518, healthRegen: 4, maxMana: 716, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 17, physicalProtection: 49, magicalProtection: 43, maxHealth: 1610, healthRegen: 4, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 19, physicalProtection: 52, magicalProtection: 45, maxHealth: 1703, healthRegen: 4, maxMana: 800, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 20, physicalProtection: 55, magicalProtection: 46, maxHealth: 1796, healthRegen: 4, maxMana: 842, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 22, physicalProtection: 57, magicalProtection: 47, maxHealth: 1888, healthRegen: 4, maxMana: 884, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 23, physicalProtection: 60, magicalProtection: 49, maxHealth: 1981, healthRegen: 5, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 25, physicalProtection: 63, magicalProtection: 50, maxHealth: 2073, healthRegen: 5, maxMana: 968, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 26, physicalProtection: 66, magicalProtection: 52, maxHealth: 2166, healthRegen: 5, maxMana: 1010, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 28, physicalProtection: 69, magicalProtection: 53, maxHealth: 2259, healthRegen: 5, maxMana: 1052, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
      { strength: 0, intelligence: 0, attackSpeed: 29, physicalProtection: 72, magicalProtection: 54, maxHealth: 2351, healthRegen: 6, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0 },
    ],
    basicAttack: {
      name: 'Zeus Basic Attack',
      description: 'Fire a projectile that deals Magical Damage to the first enemy hit. Projectile stops on first target hit, and does not pass through walls. Basic attacks apply Charges.',
      cooldown: '-',
      cost: '-',
      attributes: [
        { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence + 100% Basic Attack Power' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    passive: {
      name: 'Overcharge',
      description: "Deal damage to apply Charges.\n\n• Enemies take increased basic attack damage from you for each Charge they have\n• Non-god enemies immediately take 3 stacks.\n\nOvercharge's effect stacks with Critical Strikes.",
      cooldown: '-',
      cost: '-',
      attributes: [
        { label: 'Damage Increase', value: '15% Per Stack' },
        { label: 'Debuff Duration', value: '5s' },
        { label: 'Max Debuff Stacks', value: '3' }
      ]
    },
    abilities: {
      1: { 
        name: 'Chain Lightning', 
        description: 'Hurl a bolt of lightning that arcs between enemies. Deals Magical Damage and Slows. Projectile stops on walls.', 
        cooldown: '12 | 11.5 | 11 | 10.5 | 10s', 
        cost: '50 | 55 | 60 | 65 | 70',
        attributes: [
          { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
          { label: 'Damage Scaling', value: '60% Intelligence' },
          { label: 'Slow', value: '20%' },
          { label: 'Bounces', value: '5 | 5 | 5 | 6 | 6' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.56m' }
        ]
      },
      2: { 
        name: 'Thunderclap', 
        description: 'Call down lightning, dealing Magical Damage to nearby enemies. You also gain increased Attack Speed, Movement Speed, and Haste for 5s.', 
        cooldown: '12s', 
        cost: '60 | 65 | 70 | 75 | 80',
        attributes: [
          { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
          { label: 'Damage Scaling', value: '75% Intelligence' },
          { label: 'Attack Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
          { label: 'Movement Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
          { label: 'Haste', value: '10 | 11.25 | 12.5 | 13.75 | 15%' },
          { label: 'Buff Duration', value: '5s' },
          { label: 'Radius', value: '3.2m' }
        ]
      },
      3: { 
        name: 'Detonate Charge', 
        description: 'Detonate the Charges on all enemies, dealing Magical Damage for each Charge. Enemies at Max Charges are Stunned. This ability cannot be activated unless an enemy has a Charge. Damage is multiplied by 1/1.7/2.4 based on number of Charges.', 
        cooldown: '12 | 11.5 | 11 | 10.5 | 10s', 
        cost: '70 | 75 | 80 | 85 | 90',
        attributes: [
          { label: 'Damage', value: '40 | 65 | 90 | 115 | 140' },
          { label: 'Damage Scaling', value: '30% Intelligence' },
          { label: 'Stun Duration', value: '0.5s' }
        ]
      },
      4: { 
        name: 'Lightning Storm', 
        description: 'Conjure a lightning storm that deals Magical Damage repeatedly in an area. This ability hits 5 times over 4.5 seconds.', 
        cooldown: '90 | 85 | 80 | 75 | 70s', 
        cost: '100',
        attributes: [
          { label: 'Damage Per Tick', value: '100 | 130 | 160 | 190 | 220' },
          { label: 'Damage Scaling Per Tick', value: '75% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '4.8m' }
        ]
      }
    },
    recommendedBuilds: [
      {
        name: 'Burst Mid',
        author: 'Weak3n',
        role: 'Mid',
        aspectId: 'base',
        starterId: 'sands-of-time',
        itemIds: ['killing-stone', 'chronos-pendant', 'rod-of-tahuti', 'obsidian-shard', 'soul-reaver', 'staff-of-myrddin'],
        relicId: 'beads'
      }
    ],
    aspects: []
  },
 {
  id: 'bellona',
  name: 'Bellona',
  title: 'Goddess of War',
  pantheon: 'Roman',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: 'https://image2url.com/images/1764245135551-88023a41-1d37-4125-9314-03ba669deb09.jpg',
  statsByLevel: [
    { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 20, magicalProtection: 29, maxHealth: 647, healthRegen: 2, maxMana: 281, manaRegen: 2, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 3, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 24, magicalProtection: 30, maxHealth: 749, healthRegen: 2, maxMana: 321, manaRegen: 2, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 27, magicalProtection: 32, maxHealth: 850, healthRegen: 2, maxMana: 361, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 6, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 30, magicalProtection: 33, maxHealth: 952, healthRegen: 2, maxMana: 401, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 33, magicalProtection: 35, maxHealth: 1053, healthRegen: 3, maxMana: 441, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 9, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 36, magicalProtection: 36, maxHealth: 1154, healthRegen: 3, maxMana: 481, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 10, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 39, magicalProtection: 38, maxHealth: 1256, healthRegen: 3, maxMana: 521, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 12, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 42, magicalProtection: 40, maxHealth: 1357, healthRegen: 3, maxMana: 560, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 13, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 45, magicalProtection: 41, maxHealth: 1459, healthRegen: 3, maxMana: 600, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 15, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 48, magicalProtection: 43, maxHealth: 1560, healthRegen: 4, maxMana: 640, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 16, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 52, magicalProtection: 44, maxHealth: 1661, healthRegen: 4, maxMana: 680, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 55, magicalProtection: 46, maxHealth: 1763, healthRegen: 4, maxMana: 720, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 19, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 58, magicalProtection: 47, maxHealth: 1864, healthRegen: 4, maxMana: 760, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 61, magicalProtection: 49, maxHealth: 1966, healthRegen: 4, maxMana: 800, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 64, magicalProtection: 50, maxHealth: 2067, healthRegen: 5, maxMana: 840, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 23, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 67, magicalProtection: 52, maxHealth: 2168, healthRegen: 5, maxMana: 880, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 70, magicalProtection: 54, maxHealth: 2270, healthRegen: 5, maxMana: 920, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 26, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 73, magicalProtection: 55, maxHealth: 2371, healthRegen: 5, maxMana: 960, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 77, magicalProtection: 57, maxHealth: 2473, healthRegen: 6, maxMana: 999, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 29, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 80, magicalProtection: 58, maxHealth: 2574, healthRegen: 6, maxMana: 1039, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
  ],
  basicAttack: {
    name: 'Bellona Basic Attack',
    description: 'Deal Physical Damage to an enemy in front of you. You have 4 different weapons to attack with, depending on the most recent ability used.\n\nIf multiple enemies are in the area, the enemy closest to the center will be hit. Bellona remains in her current basic attacks until she goes 7 seconds without dealing or taking damage.\n\n• Greatsword: 3 hit chain (1, 1, 1.5x damage/swing time). No special effects.\n• Sword and Shield: 3 hit chain (0.5, 1, 1x damage/swing time). Provides 1 block stack per god hit. Max 3 Stacks.\n• Hammer: 3 hit chain (1.5, 1, 1.5x damage / 1.5, 1, 1.25x swing time). Hits all enemies in range.\n• Scourge: 3 hit chain (1, 0.5, 1x damage/swing time). Heals on every successful hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence + 100% Basic Attack Power' },
      { label: 'Scourge Heal Per Hit', value: '5 | 6 | 7 | 8 | 9' },
      { label: 'Scourge Heal Scaling', value: '7% Physical Protection' },
      { label: 'Range', value: '1.92m' },
      { label: 'Scourge Range', value: '2.56m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Master Of War',
    description: 'When you hit or are hit by basic attacks, you gain stacks of Movement Speed.\n\n• If using Sword and Shield, you also get Protection stacks\n• If using Scourge, you also get Attack Speed stacks\n• If using Hammer, you also get Strength stacks\n\nAll basic attacks still gain the Movement Speed per stack.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Movement Speed', value: '1.5% Per Stack' },
      { label: 'Physical Protection', value: '4 Per Stack' },
      { label: 'Magical Protection', value: '4 Per Stack' },
      { label: 'Strength', value: '3% Per Stack' },
      { label: 'Attack Speed', value: '5% Per Stack' },
      { label: 'Buff Duration', value: '7s' },
      { label: 'Max Buff Stacks', value: '5' }
    ]
  },
  abilities: {
    1: {
      name: 'Shield Bash',
      description: 'Dash forward with your shield to deal Physical Damage and Slow enemies in front of you.\n\n• Gain 1 Block stack for each enemy god hit\n• Change to Sword and Shield basic attacks\n• Every third successful basic attack against a god grants a Block stack, reflecting damage\n\nBlock absorbs all damage from one God\'s Basic Attack per stack. Blocks also reflect back a portion of the blocked damage to enemies around her.',
      cooldown: '14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '75 | 115 | 155 | 195 | 235' },
        { label: 'Damage Scaling', value: '50% Strength + 30% Physical Protection or Magical Protection' },
        { label: 'Reflect Damage', value: '25% of damage blocked' },
        { label: 'Reflect Scaling', value: '7% Physical Protection or Magical Protection' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Range', value: '2.8m' },
        { label: 'Radius', value: '4m' }
      ]
    },
    2: {
      name: 'Bludgeon',
      description: 'Spin your hammer to deal Physical Damage to enemies around you, then slam to deal Physical Damage to enemies in a line.\n\n• Change to Hammer basic attacks\n• Your basic attacks now hit nearby enemies\n\nFinal Slam damage increases by 0.35 for each enemy god hit by the Spin attack.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Spin Damage', value: '45 | 80 | 115 | 155 | 190' },
        { label: 'Spin Damage Scaling', value: '25% Strength' },
        { label: 'Slam Damage', value: '70 | 130 | 190 | 250 | 310' },
        { label: 'Slam Damage Scaling', value: '70% Strength' },
        { label: 'Slam Damage Increase', value: '0.35x per enemy god hit by Spin' },
        { label: 'Spin Radius', value: '4m' },
        { label: 'Slam Range', value: '4.8m' },
        { label: 'Slam Radius', value: '1.92m' }
      ]
    },
    3: {
      name: 'Scourge',
      description: 'Lash out with your Scourge to deal Physical Damage and Disarm enemies.\n\n• Change to Scourge basic attacks\n• Your basic attacks Heal you',
      cooldown: '16 | 15 | 14 | 13 | 12s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling', value: '50% Strength' },
        { label: 'Heal', value: '10' },
        { label: 'Heal Scaling', value: '6% Physical Protection' },
        { label: 'Disarm Duration', value: '1.25 | 1.4 | 1.55 | 1.7 | 1.85s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    4: {
      name: "Eagle's Rally",
      description: 'Leap forward and plant your flag to deal Physical Damage and Stun enemies.\n\n• The flag empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection\n• You are CC Immune while Leaping',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '300 | 370 | 440 | 510 | 580' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Stun Duration', value: '0.75s' },
        { label: 'Strength Buff', value: '16 | 24 | 32 | 40 | 48 + 10% Protections' },
        { label: 'Intelligence Buff', value: '30 | 38 | 46 | 54 | 62 + 10% Protections' },
        { label: 'Physical Protection Buff', value: '15 | 20 | 25 | 30 | 35 + 10% Physical Protections' },
        { label: 'Magical Protection Buff', value: '15 | 20 | 25 | 30 | 35 + 10% Magical Protections' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'vindication',
      name: 'Aspect of Vindication',
      description: 'Bludgeon no longer deals bonus Final Slam Damage but whenever you gain Block stacks with Sword and Shield or gain Healing from Scourge, nearby allied gods also gain those benefits.',
      basicAttack: {
        name: 'Bellona Basic Attack',
        description: 'Deal Physical Damage to an enemy in front of you. You have 4 different weapons to attack with, depending on the most recent ability used.\n\nIf multiple enemies are in the area, the enemy closest to the center will be hit. Bellona remains in her current basic attacks until she goes 7 seconds without dealing or taking damage.\n\n• Greatsword: 3 hit chain (1, 1, 1.5x damage/swing time). No special effects.\n• Sword and Shield: 3 hit chain (0.5, 1, 1x damage/swing time). Provides 1 block stack per god hit. Max 3 Stacks. NEARBY ALLIED GODS ALSO GAIN BLOCK STACKS.\n• Hammer: 3 hit chain (1.5, 1, 1.5x damage / 1.5, 1, 1.25x swing time). Hits all enemies in range.\n• Scourge: 3 hit chain (1, 0.5, 1x damage/swing time). Heals on every successful hit. NEARBY ALLIED GODS ALSO HEAL.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence + 100% Basic Attack Power' },
          { label: 'Scourge Heal Per Hit', value: '5 | 6 | 7 | 8 | 9' },
          { label: 'Scourge Heal Scaling', value: '7% Physical Protection' },
          { label: 'Range', value: '1.92m' },
          { label: 'Scourge Range', value: '2.56m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Master Of War',
        description: 'When you hit or are hit by basic attacks, you gain stacks of Movement Speed.\n\n• If using Sword and Shield, you also get Protection stacks\n• If using Scourge, you also get Attack Speed stacks\n• If using Hammer, you also get Strength stacks\n\nAll basic attacks still gain the Movement Speed per stack.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Movement Speed', value: '1.5% Per Stack' },
          { label: 'Physical Protection', value: '4 Per Stack' },
          { label: 'Magical Protection', value: '4 Per Stack' },
          { label: 'Strength', value: '3% Per Stack' },
          { label: 'Attack Speed', value: '5% Per Stack' },
          { label: 'Buff Duration', value: '7s' },
          { label: 'Max Buff Stacks', value: '5' }
        ]
      },
      abilities: {
        1: {
          name: 'Shield Bash',
          description: 'Dash forward with your shield to deal Physical Damage and Slow enemies in front of you.\n\n• Gain 1 Block stack for each enemy god hit\n• Change to Sword and Shield basic attacks\n• Every third successful basic attack against a god grants a Block stack, reflecting damage\n• WHENEVER YOU GAIN A BLOCK STACK, NEARBY ALLIED GODS ALSO GAIN ONE\n\nBlock absorbs all damage from one God\'s Basic Attack per stack. Blocks also reflect back a portion of the blocked damage to enemies around her.',
          cooldown: '14s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '75 | 115 | 155 | 195 | 235' },
            { label: 'Damage Scaling', value: '50% Strength + 30% Physical Protection or Magical Protection' },
            { label: 'Reflect Damage', value: '25% of damage blocked' },
            { label: 'Reflect Scaling', value: '7% Physical Protection or Magical Protection' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Range', value: '2.8m' },
            { label: 'Radius', value: '4m' }
          ]
        },
        2: {
          name: 'Bludgeon',
          description: 'Spin your hammer to deal Physical Damage to enemies around you, then slam to deal Physical Damage to enemies in a line.\n\n• Change to Hammer basic attacks\n• Your basic attacks now hit nearby enemies\n• NO LONGER DEALS BONUS FINAL SLAM DAMAGE',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Spin Damage', value: '45 | 80 | 115 | 155 | 190' },
            { label: 'Spin Damage Scaling', value: '25% Strength' },
            { label: 'Slam Damage', value: '70 | 130 | 190 | 250 | 310' },
            { label: 'Slam Damage Scaling', value: '70% Strength' },
            { label: 'Spin Radius', value: '4m' },
            { label: 'Slam Range', value: '4.8m' },
            { label: 'Slam Radius', value: '1.92m' }
          ]
        },
        3: {
          name: 'Scourge',
          description: 'Lash out with your Scourge to deal Physical Damage and Disarm enemies.\n\n• Change to Scourge basic attacks\n• Your basic attacks Heal you\n• YOUR BASIC ATTACKS ALSO HEAL NEARBY ALLIED GODS',
          cooldown: '16 | 15 | 14 | 13 | 12s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Damage Scaling', value: '50% Strength' },
            { label: 'Heal', value: '10' },
            { label: 'Heal Scaling', value: '6% Physical Protection' },
            { label: 'Disarm Duration', value: '1.25 | 1.4 | 1.55 | 1.7 | 1.85s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '1.6m' }
          ]
        },
        4: {
          name: "Eagle's Rally",
          description: 'Leap forward and plant your flag to deal Physical Damage and Stun enemies.\n\n• The flag empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection\n• You are CC Immune while Leaping',
          cooldown: '90s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '300 | 370 | 440 | 510 | 580' },
            { label: 'Damage Scaling', value: '60% Strength' },
            { label: 'Stun Duration', value: '0.75s' },
            { label: 'Strength Buff', value: '16 | 24 | 32 | 40 | 48 + 10% Protections' },
            { label: 'Intelligence Buff', value: '30 | 38 | 46 | 54 | 62 + 10% Protections' },
            { label: 'Physical Protection Buff', value: '15 | 20 | 25 | 30 | 35 + 10% Physical Protections' },
            { label: 'Magical Protection Buff', value: '15 | 20 | 25 | 30 | 35 + 10% Magical Protections' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
},
{
  id: 'ymir',
  name: 'Ymir',
  title: 'Father of the Frost Giants',
  pantheon: 'Norse',
  role: 'Guardian',
  lanes: ['Support', 'Solo'],
  damageType: DamageType.Magical,
  image: 'https://image2url.com/images/1764245164697-963c1d7d-be40-453b-a59a-ad970ba17cc7.jpg',
  statsByLevel: [
    { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 21, magicalProtection: 30, maxHealth: 672, healthRegen: 2, maxMana: 296, manaRegen: 2, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 3, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 24, magicalProtection: 31, maxHealth: 778, healthRegen: 2, maxMana: 338, manaRegen: 2, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 27, magicalProtection: 33, maxHealth: 883, healthRegen: 2, maxMana: 380, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 5, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 30, magicalProtection: 35, maxHealth: 988, healthRegen: 2, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 33, magicalProtection: 36, maxHealth: 1094, healthRegen: 3, maxMana: 464, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 8, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 37, magicalProtection: 38, maxHealth: 1199, healthRegen: 3, maxMana: 506, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 9, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 40, magicalProtection: 39, maxHealth: 1304, healthRegen: 3, maxMana: 548, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 11, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 43, magicalProtection: 41, maxHealth: 1409, healthRegen: 3, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 12, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 46, magicalProtection: 43, maxHealth: 1515, healthRegen: 4, maxMana: 632, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 13, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 50, magicalProtection: 44, maxHealth: 1620, healthRegen: 4, maxMana: 674, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 15, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 53, magicalProtection: 46, maxHealth: 1725, healthRegen: 4, maxMana: 716, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 16, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 56, magicalProtection: 48, maxHealth: 1831, healthRegen: 4, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 59, magicalProtection: 49, maxHealth: 1936, healthRegen: 4, maxMana: 800, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 19, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 63, magicalProtection: 51, maxHealth: 2041, healthRegen: 5, maxMana: 842, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 66, magicalProtection: 52, maxHealth: 2146, healthRegen: 5, maxMana: 884, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 21, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 69, magicalProtection: 54, maxHealth: 2252, healthRegen: 5, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 23, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 72, magicalProtection: 56, maxHealth: 2357, healthRegen: 5, maxMana: 968, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 24, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 76, magicalProtection: 57, maxHealth: 2462, healthRegen: 6, maxMana: 1010, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 79, magicalProtection: 59, maxHealth: 2568, healthRegen: 6, maxMana: 1052, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 27, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 82, magicalProtection: 60, maxHealth: 2673, healthRegen: 6, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
  ],
  basicAttack: {
    name: 'Ymir Basic Attack',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence + 100% Basic Attack Power' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Frostbite',
    description: 'Your abilities apply Frostbite when they damage or CC enemies.\n\n• Frostbitten enemies take more basic attack damage from you and deal less damage to you\n• Frostbitten enemies also have decreased Attack Speed\n\nFrostbite\'s effect stacks with Critical Strikes.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '175% Strength + 35% Intelligence' },
      { label: 'Reduced Damage Dealt', value: '15%' },
      { label: 'Attack Speed Slow', value: '10%' }
    ]
  },
  abilities: {
    1: {
      name: 'Ice Wall',
      description: 'Create a Wall that Knocks Back enemies on creation.\n\n• Reactivate to destroy the Wall early\n\nThe Wall Impedes all characters. Create the Wall at your feet to Displace yourself up and forward. Displaces Enemies up and away from the Wall.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Lifetime', value: '2.5 | 3 | 3.5 | 4 | 4.5s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '3.25m' }
      ]
    },
    2: {
      name: 'Glacial Strike',
      description: 'Smash your club into the ground, creating a field of ice that deals Magical Damage and Slows.\n\nDamaging area starts at Ymir and moves away over time. You are Slowed by 42.5% during activation.',
      cooldown: '8 | 7.5 | 7 | 6.5 | 6s',
      cost: '45 | 50 | 55 | 60 | 65',
      attributes: [
        { label: 'Damage', value: '90 | 150 | 210 | 270 | 330' },
        { label: 'Damage Scaling', value: '70% Intelligence + 45% Strength' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '6m' },
        { label: 'Radius', value: '3.6m' }
      ]
    },
    3: {
      name: 'Frost Breath',
      description: 'Unleash your freezing breath, Stunning enemies in front of you and dealing Magical Damage.\n\nYou are Rooted during activation.',
      cooldown: '14s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '50 | 85 | 120 | 155 | 190' },
        { label: 'Damage Scaling', value: '55% Intelligence' },
        { label: 'Stun Duration', value: '1 | 1.1 | 1.2 | 1.3 | 1.4s' },
        { label: 'Stun Duration Scaling', value: '0.2s per 100 Item Protections (Max 2 stacks)' },
        { label: 'Cone Angle', value: '90 degrees' }
      ]
    },
    4: {
      name: 'Shards Of Ice',
      description: 'Freeze the air around you, Slowing enemies as you Channel.\n\n• After 3 seconds, erupt with a burst of Magical Damage to all enemies in range\n• You may cancel this ability early, dealing less damage\n• You are CC Immune while using this ability\n\nDamage scales linearly from 35% to 100% based on Channel time. Max Channel time of 3 seconds. You are Rooted while Channeling.',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '550 | 750 | 950 | 1150 | 1350' },
        { label: 'Damage Scaling', value: '160% Intelligence + 45% Protections' },
        { label: 'Slow', value: '40%' },
        { label: 'Radius', value: '5.6m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
},
{
  id: 'anubis',
  name: 'Anubis',
  title: 'God of the Dead',
  pantheon: 'Egyptian',
  role: 'Mage',
  lanes: ['Mid'],
  damageType: DamageType.Magical,
  image: 'https://image2url.com/images/1764245604669-8ce611e2-f558-4c62-b972-d29e8a2a21e2.jpg',
  statsByLevel: [
    { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 18, magicalProtection: 27, maxHealth: 591, healthRegen: 2, maxMana: 320, manaRegen: 2, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 3, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 20, magicalProtection: 29, maxHealth: 684, healthRegen: 2, maxMana: 365, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 23, magicalProtection: 30, maxHealth: 777, healthRegen: 2, maxMana: 410, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 6, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 26, magicalProtection: 32, maxHealth: 869, healthRegen: 2, maxMana: 456, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 29, magicalProtection: 33, maxHealth: 962, healthRegen: 2, maxMana: 501, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 8, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 32, magicalProtection: 35, maxHealth: 1054, healthRegen: 3, maxMana: 546, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 10, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 35, magicalProtection: 36, maxHealth: 1147, healthRegen: 3, maxMana: 592, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 11, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 38, magicalProtection: 37, maxHealth: 1240, healthRegen: 3, maxMana: 637, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 13, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 40, magicalProtection: 39, maxHealth: 1332, healthRegen: 3, maxMana: 683, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 14, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 43, magicalProtection: 40, maxHealth: 1425, healthRegen: 4, maxMana: 728, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 15, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 46, magicalProtection: 42, maxHealth: 1518, healthRegen: 4, maxMana: 773, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 49, magicalProtection: 43, maxHealth: 1610, healthRegen: 4, maxMana: 819, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 18, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 52, magicalProtection: 45, maxHealth: 1703, healthRegen: 4, maxMana: 864, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 55, magicalProtection: 46, maxHealth: 1796, healthRegen: 4, maxMana: 909, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 21, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 57, magicalProtection: 47, maxHealth: 1888, healthRegen: 4, maxMana: 955, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 60, magicalProtection: 49, maxHealth: 1981, healthRegen: 5, maxMana: 1000, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 24, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 63, magicalProtection: 50, maxHealth: 2073, healthRegen: 5, maxMana: 1045, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 66, magicalProtection: 52, maxHealth: 2166, healthRegen: 5, maxMana: 1091, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 27, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 69, magicalProtection: 53, maxHealth: 2259, healthRegen: 5, maxMana: 1136, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 72, magicalProtection: 54, maxHealth: 2351, healthRegen: 6, maxMana: 1182, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
  ],
  basicAttack: {
    name: 'Anubis Basic Attack',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence + 100% Basic Attack Power' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'The Scales',
    description: 'Gain bonus Lifesteal, Physical Protection, and Magical Protection. These bonuses increase as your health declines.\n\nGain 1 Stack of this buff for each 10% Health missing. At maximum stacks, bonus Protections are doubled. At maximum stacks, bonus Lifesteal is tripled.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Protections', value: '10 + 0.5 Per Level' },
      { label: 'Lifesteal', value: '2%' },
      { label: 'Max Buff Stacks', value: '8' }
    ]
  },
  abilities: {
    1: {
      name: 'Plague Of Locusts',
      description: 'Locusts fly from your mouth, repeatedly dealing Magical Damage in an area in front of you.\n\n• This is a Channeled ability\n• You are Displacement Immune and move at reduced Movement Speed while Channeling\n\nThis ability hits 12 times over 2.5 seconds.',
      cooldown: '10 | 9.5 | 9 | 8.5 | 8s',
      cost: '30 | 40 | 50 | 60 | 70',
      attributes: [
        { label: 'Damage Per Tick', value: '15 | 22 | 29 | 36 | 43' },
        { label: 'Damage Scaling Per Tick', value: '18 | 19 | 20 | 21 | 22% Intelligence' },
        { label: 'Self Slow', value: '35 | 30 | 25 | 20 | 15%' },
        { label: 'Radius', value: '5.6m' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    },
    2: {
      name: 'Mummify',
      description: 'Fire a bandage projectile, mummifying and Stunning the first god hit.\n\n• This ability deals Magical Damage, only to gods\n\nProjectile ignores minions, and stops on walls.',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '60 | 85 | 110 | 135 | 160' },
        { label: 'Damage Scaling', value: '55% Intelligence' },
        { label: 'Stun Duration', value: '0.85 | 0.9 | 0.95 | 1 | 1.05s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.56m' }
      ]
    },
    3: {
      name: 'Grasping Hands',
      description: 'Summon allies from the underworld, dealing Magical Damage repeatedly to enemies in an area.\n\n• This also Slows enemies in the area\n\nThis ability hits 4 times over 1.5 seconds. Slow is refreshed on each hit, and does not stack.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage Per Tick', value: '25 | 45 | 65 | 85 | 105' },
        { label: 'Damage Scaling Per Tick', value: '35% Intelligence' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Death Gaze',
      description: 'Your piercing gaze burns enemies in a line.\n\n• This deals an initial burst of Magical Damage\n• Then Channels to repeatedly deal Magical Damage\n• You are CC Immune while using this ability\n\nAbility hits 24 times, plus the initial burst, over 2.4 seconds. You are Rooted while Channeling.',
      cooldown: '90s',
      cost: '90',
      attributes: [
        { label: 'Initial Damage', value: '140 | 170 | 200 | 230 | 260' },
        { label: 'Initial Damage Scaling', value: '90% Intelligence' },
        { label: 'Damage Per Tick', value: '27 | 32 | 37 | 42 | 47' },
        { label: 'Damage Scaling Per Tick', value: '20% Intelligence' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.72m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
},
{
  id: 'loki',
  name: 'Loki',
  title: 'The Trickster God',
  pantheon: 'Norse',
  role: 'Assassin',
  lanes: ['Jungle'],
  damageType: DamageType.Physical,
  image: 'https://image2url.com/images/1764247224117-ab817d1f-c59d-4580-862c-5cdf35817f78.jpg',
  statsByLevel: [
    { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 18, magicalProtection: 26, maxHealth: 618, healthRegen: 2, maxMana: 296, manaRegen: 2, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 3, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 21, magicalProtection: 28, maxHealth: 710, healthRegen: 2, maxMana: 338, manaRegen: 2, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 24, magicalProtection: 29, maxHealth: 803, healthRegen: 2, maxMana: 380, manaRegen: 3, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 6, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 27, magicalProtection: 30, maxHealth: 896, healthRegen: 2, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 29, magicalProtection: 32, maxHealth: 988, healthRegen: 2, maxMana: 464, manaRegen: 3, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 9, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 32, magicalProtection: 33, maxHealth: 1081, healthRegen: 3, maxMana: 506, manaRegen: 4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 10, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 35, magicalProtection: 35, maxHealth: 1173, healthRegen: 3, maxMana: 548, manaRegen: 4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 12, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 38, magicalProtection: 36, maxHealth: 1266, healthRegen: 3, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 13, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 41, magicalProtection: 38, maxHealth: 1359, healthRegen: 3, maxMana: 632, manaRegen: 4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 15, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 44, magicalProtection: 39, maxHealth: 1451, healthRegen: 4, maxMana: 674, manaRegen: 4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 16, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 47, magicalProtection: 40, maxHealth: 1544, healthRegen: 4, maxMana: 716, manaRegen: 5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 49, magicalProtection: 42, maxHealth: 1636, healthRegen: 4, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 19, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 52, magicalProtection: 43, maxHealth: 1729, healthRegen: 4, maxMana: 800, manaRegen: 5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 55, magicalProtection: 45, maxHealth: 1822, healthRegen: 4, maxMana: 842, manaRegen: 6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 58, magicalProtection: 46, maxHealth: 1914, healthRegen: 4, maxMana: 884, manaRegen: 6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 23, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 61, magicalProtection: 48, maxHealth: 2007, healthRegen: 5, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 64, magicalProtection: 49, maxHealth: 2100, healthRegen: 5, maxMana: 968, manaRegen: 6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 26, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 66, magicalProtection: 50, maxHealth: 2192, healthRegen: 5, maxMana: 1010, manaRegen: 6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 69, magicalProtection: 52, maxHealth: 2285, healthRegen: 5, maxMana: 1052, manaRegen: 7, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 29, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 72, magicalProtection: 53, maxHealth: 2378, healthRegen: 6, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365 },
  ],
  basicAttack: {
    name: 'Loki Basic Attack',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit. Has a 5 hit chain. Attacks in order of 1, 0.5, 0.5, 0.5, 1.5x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence + 100% Basic Attack Power' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Behind You',
    description: 'Hitting enemies from behind deals bonus damage.\n\nThe increased damage from this effect also triggers on enemies Blinded by Agonizing Visions.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '115%' }
    ]
  },
  abilities: {
    1: {
      name: 'Vanish',
      description: 'Disappear in a puff of smoke, become Stealthed and gain Movement Speed.\n\n• Your next basic attack deals additional Physical Damage over time\n• Killing a god resets the cooldown of this ability\n• You are Immune to Slows while Stealthed\n\nHits 4 times over 2 seconds. Stealthed gods are invisible to enemies unless they enter an enemy structure\'s attack area. Taking damage while in Stealth partially reveals you for 0.165 seconds. Stealth is broken when hit by Hard CC.',
      cooldown: '15s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage Per Tick', value: '30 | 45 | 60 | 75 | 90' },
        { label: 'Damage Scaling Per Tick', value: '15% Strength' },
        { label: 'Movement Speed', value: '35%' },
        { label: 'Buff Duration', value: '4s' }
      ]
    },
    2: {
      name: 'Agonizing Visions',
      description: 'Summon a vision of Loki that repeatedly deals Physical Damage to nearby enemies.\n\n• Damaged enemies have reduced damage\n• Enemies hit four times are Blinded\n\nThis ability hits 8 times over 3.5 seconds. Blinded players have their game camera obscured. The Vision impedes enemy characters only. Loki benefits from Behind You on Blinded enemies from all directions.',
      cooldown: '13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '13 | 18 | 23 | 28 | 33' },
        { label: 'Damage Scaling', value: '15% Strength' },
        { label: 'Blind Duration', value: '3s' },
        { label: 'Damage Dealt Reduction', value: '5%' },
        { label: 'Debuff Duration', value: '2.5s' },
        { label: 'Max Debuff Stacks', value: '3' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '4m' }
      ]
    },
    3: {
      name: 'Flurry Strike',
      description: 'Unleash a flurry of dagger strikes, dealing Physical Damage repeatedly and Slowing enemies in front of you.\n\n• The final hit deals bonus Physical Damage and applies a stronger Slow\n\n• This is a Channeled ability\n• You are Displacement Immune while Channeling\n\nHits 6 times over 1.5 seconds. Slow is refreshed with each hit but does not stack. This ability can benefit from Behind You.',
      cooldown: '9s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling', value: '25% Strength' },
        { label: 'Final Damage', value: '55 | 75 | 95 | 115 | 135' },
        { label: 'Final Damage Scaling', value: '60% Strength' },
        { label: 'Slow', value: '15%' },
        { label: 'Final Slow', value: '30%' },
        { label: 'Slow Duration', value: '2.25s' },
        { label: 'Cone Angle', value: '90 degrees' }
      ]
    },
    4: {
      name: 'Assassinate',
      description: 'Teleport to the target location, then strike twice to assassinate a foe.\n\n• The first strike deals Physical Damage and Cripples enemies in the area\n• The second strike deals Physical Damage and Stuns enemies in front of you\n\nLoki locks onto the enemy god closest to the center of the teleport location, if there is one.',
      cooldown: '90s',
      cost: '90',
      attributes: [
        { label: 'Damage', value: '70 | 105 | 140 | 175 | 210' },
        { label: 'Damage Scaling', value: '35% Strength' },
        { label: 'Final Damage', value: '100 | 145 | 190 | 235 | 280' },
        { label: 'Final Damage Scaling', value: '80% Strength' },
        { label: 'Stun Duration', value: '0.75s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Cone Angle', value: '105 degrees' }
      ]
    }
  },
  aspects: [
    {
      id: 'agony',
      name: 'Aspect of Agony',
      description: 'Vanish no longer grants Stealth; its attack now inflicts Blind instead of Bleed. Agonizing Visions can be cast on allies, providing damage mitigation while slowing enemies. Behind You now deals bonus damage scaling with your Health and Protections rather than its percentage increase.',
      basicAttack: {
        name: 'Loki Basic Attack',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit. Has a 5 hit chain. Attacks in order of 1, 0.5, 0.5, 0.5, 1.5x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence + 100% Basic Attack Power' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Behind You',
        description: 'Hitting enemies from behind deals bonus damage.\n\n• The increased damage from this effect also triggers on enemies Blinded by Agonizing Visions\n• BONUS DAMAGE NOW SCALES WITH YOUR HEALTH AND PROTECTIONS RATHER THAN ITS PERCENTAGE INCREASE',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '2% Max Health + 10% Physical Protection or Magical Protection' }
        ]
      },
      abilities: {
        1: {
          name: 'Vanish',
          description: 'Disappear in a puff of smoke and gain Movement Speed.\n\n• Your next basic attack inflicts Blind on enemies\n• Killing a god resets the cooldown of this ability\n• You are Immune to Slows\n• NO LONGER GRANTS STEALTH\n• ATTACK NOW INFLICTS BLIND INSTEAD OF BLEED',
          cooldown: '15s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Movement Speed', value: '35%' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Blind Duration', value: '3s' }
          ]
        },
        2: {
          name: 'Agonizing Visions',
          description: 'Summon a vision of Loki that repeatedly deals Physical Damage to nearby enemies.\n\n• Damaged enemies have reduced damage\n• Enemies hit four times are Blinded\n• CAN BE CAST ON ALLIES, PROVIDING DAMAGE MITIGATION WHILE SLOWING ENEMIES\n\nThis ability hits 8 times over 3.5 seconds. Blinded players have their game camera obscured. The Vision impedes enemy characters only. Loki benefits from Behind You on Blinded enemies from all directions.',
          cooldown: '13s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '13 | 18 | 23 | 28 | 33' },
            { label: 'Damage Scaling', value: '15% Strength' },
            { label: 'Blind Duration', value: '3s' },
            { label: 'Damage Dealt Reduction', value: '5%' },
            { label: 'Debuff Duration', value: '2.5s' },
            { label: 'Max Debuff Stacks', value: '3' },
            { label: 'Damage Mitigation', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Slow', value: '15%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '4m' }
          ]
        },
        3: {
          name: 'Flurry Strike',
          description: 'Unleash a flurry of dagger strikes, dealing Physical Damage repeatedly and Slowing enemies in front of you.\n\n• The final hit deals bonus Physical Damage and applies a stronger Slow\n• This is a Channeled ability\n• You are Displacement Immune while Channeling\n\nHits 6 times over 1.5 seconds. Slow is refreshed with each hit but does not stack. This ability can benefit from Behind You.',
          cooldown: '9s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Damage Scaling', value: '25% Strength' },
            { label: 'Final Damage', value: '55 | 75 | 95 | 115 | 135' },
            { label: 'Final Damage Scaling', value: '60% Strength' },
            { label: 'Slow', value: '15%' },
            { label: 'Final Slow', value: '30%' },
            { label: 'Slow Duration', value: '2.25s' },
            { label: 'Cone Angle', value: '90 degrees' }
          ]
        },
        4: {
          name: 'Assassinate',
          description: 'Teleport to the target location, then strike twice to assassinate a foe.\n\n• The first strike deals Physical Damage and Cripples enemies in the area\n• The second strike deals Physical Damage and Stuns enemies in front of you\n\nLoki locks onto the enemy god closest to the center of the teleport location, if there is one.',
          cooldown: '90s',
          cost: '90',
          attributes: [
            { label: 'Damage', value: '70 | 105 | 140 | 175 | 210' },
            { label: 'Damage Scaling', value: '35% Strength' },
            { label: 'Final Damage', value: '100 | 145 | 190 | 235 | 280' },
            { label: 'Final Damage Scaling', value: '80% Strength' },
            { label: 'Stun Duration', value: '0.75s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Cone Angle', value: '105 degrees' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
},
];

export const ITEMS: Item[] = [
    // --- CURIOS ---
    { id: 'meditation', name: 'Meditation', cost: 0, type: 'Curio', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764300811971-e6792e67-1d2a-4b5b-acb9-3e3a6f64f9ba.png', passive: 'ACTIVE: You and allies within 6.4m gain +10 (+2.5% missing Health) Heal per second and +10 (+3% missing Mana) Mana per second for 4s.' },
    { id: 'heimdallrs-sight', name: "Heimdallr's Sight", cost: 0, type: 'Curio', category: 'Utility', stats: { Cooldown: '90s' }, image: 'https://image2url.com/images/1764300826747-a4570ab2-b3a3-4422-b436-504406b9ee46.png', passive: 'ACTIVE: Pulse a reveal area 4 times over 4s. Reveals enemies within 8.8m. Reveals Stealthed enemies and Wards.' },
    { id: 'gjallarflare', name: 'Gjallarflare', cost: 0, type: 'Curio', category: 'Utility', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764300841786-3182ddf9-a904-4b3b-a118-413eb1c612ff.png', passive: 'ACTIVE: Fire a traveling flare. Reveals enemies within 8.8m. Travels for 5s up to 44m. On Refire/Expire: Detonate Flare. Reveals enemies within 13.2m for 6s.' },
    { id: 'bifrost-shard', name: 'Bifrost Shard', cost: 0, type: 'Curio', category: 'Utility', stats: { Cooldown: '90s' }, image: 'https://image2url.com/images/1764300859786-bb65df79-792a-4502-b6c8-4b6ece449e24.png', passive: 'ACTIVE: Place a Ward. Reveals enemies within 7.2m. Lasts 90s or until destroyed.' },
    { id: 'battle-cry', name: 'Battle Cry', cost: 0, type: 'Curio', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764300875037-3b162def-81f6-42da-b7c8-91698f18165a.png', passive: 'PASSIVE: On God Kill or Death: Gain 1 Stack (Max 5). ACTIVE: Consume all Stacks. Per Stack: +3% of all Stats from Items & +3% Movement Speed. Buff lasts 6s. Stacks fall off one at a time.' },

    // --- RELICS ---
    { id: 'beads', name: 'Purification Beads', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '150s' }, image: 'https://image2url.com/images/1764301241677-32065ec4-dfa1-4d2f-9656-b624425afdd8.png', passive: 'ACTIVE: Become Immune to Crowd Control for 2s.' },
    { id: 'aegis', name: 'Aegis of Acceleration', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '140s' }, image: 'https://image2url.com/images/1764301228981-6b08accd-b990-4225-bb7c-619122ef06cf.png', passive: 'ACTIVE: Become Immune to damage and healing for 1.5s. Can only Move. On god Damage prevented: +7% Movement Speed for 6s (Max 3x).' },
    { id: 'blink', name: 'Blink Rune', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '140s' }, image: 'https://image2url.com/images/1764301216527-943eeb78-a296-4f93-bcf9-b67bbc9ad474.png', passive: 'ACTIVE: Teleport up to 5.6m. Cannot be used for 3s after dealing or taking God damage. Can be used while casting. Damage or Kill a God within 4s of use: -30s Cooldown.' },
    { id: 'phantom', name: 'Phantom Shell', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764301202457-7238a56f-335b-4a93-945c-d359c4f8b9be.png', passive: 'ACTIVE: Shield yourself and allies within 5.6m for +100 (+10 per Level) for 3s. Affected Gods: Take 20% (+1% per Level) reduced Attack Damage. Can pass through players and player-made walls.' },
    { id: 'sundering', name: 'Sundering Arc', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764301188191-afb6d8d5-c82c-4373-b07d-f94b07bc21b4.png', passive: 'ACTIVE: Deal 175 (+25 per Level, caps at 500 at Level 13) True Damage to Jungle Monsters/Bosses. Bleed Gods, dealing 25 (+4 per Level) True Damage 3 times over 2s. -30s Cooldown if only used on Jungle Monsters/Bosses.' },
    { id: 'agility', name: 'Agility Relic', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '20s' }, image: 'https://image2url.com/images/1764301175084-a0a47b02-42a4-468e-afc7-1bfb319a4c60.png', passive: 'PASSIVE: Ranged Gods: +40% Attack projectile speed. Melee Gods: -15% Attack movement penalty. ACTIVE: Dash in the direction you are currently moving.' },

    // --- CONSUMABLES ---
    { id: 'eyes-jungle', name: 'Eyes of the Jungle', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764385961853-89a46611-064e-4c62-a6be-e98305e45590.png', passive: 'Consume: Ping all enemy God locations on the minimap.' },
    { id: 'runic-bomb', name: 'Runic Bomb', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764385987284-0077977c-c053-4f83-952f-7828623d22ca.png', passive: 'One Use: Throw a Bomb. After a delay: Deals 1000 True Damage to Minions and Structures. Deals 300 Physical Damage to enemies. Applies Knockback. Reduces enemy Attack Speed by 35% for 10s.' },
    { id: 'crystal-egg', name: 'Crystalline Egg', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386077353-8f330650-a922-46ee-8b12-1d5365850f8b.png', passive: 'Consume: Summon two Naga familiars. They attack your target.' },
    { id: 'obsidian-dagger', name: 'Obsidian Dagger', cost: 0, type: 'Map Droppable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386098577-a026bc86-a947-48e6-bbfd-76c9ff7ea3e4.png', passive: 'Consume: Take 500 True Damage. Gain +15% Damage and Attack Speed for 9s. If this Damage would kill you, instead become Immune and fully Heal over 3s.' },
    { id: 'hp-pot', name: 'Health Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386136844-6ed8f99f-a224-428e-9237-3083c3a0accb.png', passive: 'Consume: +10 Heal per second for 22s.' },
    { id: 'ward', name: 'Vision Ward', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386177380-8ac00a84-dfe6-4a0d-b7a8-00f660cc7ad0.png', passive: 'Consume: Place a Ward. Reveals enemies within 7.2m. Lasts 120s or until destroyed.' },
    { id: 'multi-pot', name: 'Multi Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386252123-8dff038a-2feb-4b8b-8a5b-3eae8bc8df75.png', passive: 'Consume: +5 Heal per second for 22s. +5 Mana per second for 22s.' },
    { id: 'mana-pot', name: 'Mana Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386267031-fc356186-6e89-41f7-983c-fd87f0db8517.png', passive: 'Consume: +12 Mana per second for 14s.' },
    { id: 'sentry', name: 'Sentry Ward', cost: 120, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386279896-7453a62f-6478-47b3-a4c6-3cf4b9b12543.png', passive: 'Consume: Place a Ward. Reveals enemies and enemy wards within 7.2m. Lasts 120s or until destroyed.' },
    { id: 'hp-chalice', name: 'Health Chalice', cost: 300, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386293391-d8b1b83b-2db0-4bfd-b182-d94d774f7250.png', passive: 'Consume Charge: +10 Heal per second for 22s. Starts with 3 charges. Refilled when returning to base.' },
    { id: 'ward-chalice', name: 'Warding Chalice', cost: 400, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386307773-55f1bfd8-2892-4041-91c3-09b619913df7.png', passive: 'Consume Charge: Place a Ward. Reveals enemies within 7.2m. Lasts 120s or until destroyed. Starts with 2 charges. Refilled when returning to base.' },
    { id: 'elixir-strength', name: 'Elixir of Strength', cost: 3000, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764392995270-59bac129-fdca-49ec-bcaf-aaff2b89d93d.png', passive: 'Consume: +50 Strength. Buff that lasts for 360s (6 minutes). Can\'t be stacked.' },
    { id: 'elixir-intelligence', name: 'Elixir of Intelligence', cost: 3000, type: 'Consumable', category: 'Utility', stats: {}, image: 'https://image2url.com/images/1764386331746-33a2640f-a1dd-4af5-9d42-9a2c04c49db0.png', passive: 'Consume: +80 Intelligence. Buff that lasts for 360s (6 minutes). Can\'t be stacked.' },

    // --- TIER 1 STARTERS ---
    { id: 'selflessness', name: 'Selflessness', cost: 550, type: 'Starter', category: 'Defense', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10', 'Max Health': '60' }, image: 'https://image2url.com/images/1764386574228-16d65928-7aee-46f9-b1b8-f3e765c99e62.png', passive: 'Assist Minion/Jungle: +7 Gold, +8 Heal, +5 Mana. Ally Hard CC\'d within 8.8m: Shield for 25 +5% Max HP. CD 30s.' },
    { id: 'war-flag', name: 'War Flag', cost: 550, type: 'Starter', category: 'Utility', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10', 'Max Health': '60' }, image: 'https://image2url.com/images/1764386588025-fa33d927-a316-4c7d-b889-6a823956e6ba.png', passive: 'Assist Minion/Jungle: +7 Gold, +8 Heal, +5 Mana. You and allies within 8.8m gain +0.5% Move Speed and +1.25% Atk Speed. Stacks 6x, lasts 10s.' },
    { id: 'bumbas-cudgel', name: 'Bumba\'s Cudgel', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Max Health': '75', 'Max Mana': '50', 'Adaptive': '15|20' }, image: 'https://image2url.com/images/1764386602627-82d98dcc-2d53-46cc-ba72-dba627cce70f.png', passive: '+50% Dmg to Jungle, -25% to Minions. Ability: Buff next Attack in 8s. +15 True Dmg, +90 to Jungle in 1.92m. -0.5s CDs. Jungle Kill: Heal 10% HP, +30 Mana.' },
    { id: 'warriors-axe', name: 'Warrior\'s Axe', cost: 650, type: 'Starter', category: 'Defense', stats: { 'Strength': '12', 'Phys. Prot': '10', 'Mag. Prot': '10' }, image: 'https://image2url.com/images/1764386614946-51465c3b-62e3-4409-8a4d-86fe17da39b2.png', passive: 'Damage a God: +30 (+2/Lvl) Bonus True Dmg, +30 (+1/Lvl) Heal. 1 God per activation. CD 8s.' },
    { id: 'bluestone', name: 'Bluestone Pendant', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'HP5': '2.5', 'MP5': '2' }, image: 'https://image2url.com/images/1764386614946-51465c3b-62e3-4409-8a4d-86fe17da39b2.png', passive: 'Ability Hit: +32 Physical Dmg over 2s. Subsequent hits on same target: 50% bonus damage for 3s.' },
    { id: 'gilded-arrow', name: 'Gilded Arrow', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Atk Speed': '10%', 'Basic Atk Power': '20' }, image: 'https://image2url.com/images/1764386628485-ae968c98-087b-4ed5-8db2-49ac84bff81b.png', passive: 'Every 10s: Mark highest HP enemy minion/jungle within 12.8m. Kill marked target: +3 Gold, +15% Atk Speed for 8s, +30 Mana.' },
    { id: 'bumbas-dagger', name: 'Bumba\'s Golden Dagger', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Max Health': '50', 'Atk Speed': '10%', 'Adaptive': '15|20' }, image: 'https://image2url.com/images/1764386752950-0ab4e987-54e0-41c9-9eab-00d8be2a27ea.png', passive: '+50% Dmg to Jungle, -25% to Minions. Attacks: 20% bonus Physical Dmg to Jungle in 1.92m. Jungle Kill: Heal 10% HP, +30 Mana.' },
    { id: 'leather-cowl', name: 'Leather Cowl', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'Lifesteal': '4%' }, image: 'https://image2url.com/images/1764386765956-1eca1565-598b-411f-982d-47508d21d3f5.png', passive: 'Within 8.8m of ally God: +15% Atk Speed. Alone: +5% Move Speed.' },
    { id: 'sands-time', name: 'Sands of Time', cost: 650, type: 'Starter', category: 'Utility', stats: { 'Intelligence': '25', 'MP5': '2', 'Cooldown': '10%' }, image: 'https://image2url.com/images/1764386778216-5a54d0c8-9f14-429a-b5b2-acf382ccb51d.png', passive: '+0.6 Mana/s per 10% missing Mana. Damaging Abilities deal +10 True Dmg to Minions.' },
    { id: 'vampiric', name: 'Vampiric Shroud', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '20', 'Max Health': '100' }, image: 'https://image2url.com/images/1764386790874-02b7094d-b77e-45b9-8d31-175741bbf492.png', passive: 'Ability Hit: +3 Health, +4 Mana. If target is a God: Triple the effect. Once per target per Ability.' },
    { id: 'conduit', name: 'Conduit Gem', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '30', 'Max Mana': '100', 'MP5': '1' }, image: 'https://image2url.com/images/1764386801245-793a7c16-f271-494b-b9d2-400694e81f4a.png', passive: 'Every 0.5s: Gain 1 Stack (max 20). Damaging Abilities deal 3 True Dmg per Stack (half vs Gods), then remove all Stacks.' },
    { id: 'deaths-toll', name: 'Death\'s Toll', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'Max Health': '100' }, image: 'https://image2url.com/images/1764386812304-49d457d9-3c8c-44d7-bd2c-c45ceddabb59.png', passive: 'Attack Hit: +2 (+0.3% Max HP) Heal, +1 (+0.1% Max Mana) Restore.' },

    // --- TIER 2 STARTERS (UPGRADED) ---
    { id: 'heroism', name: 'Heroism', cost: 1800, type: 'Starter', category: 'Defense', stats: { 'Phys. Prot': '30', 'Mag. Prot': '30', 'Max Health': '200', 'GP5': '1' }, image: 'https://image2url.com/images/1764386919912-4fba1bda-f992-4c40-b1a7-453ae48de391.png', passive: 'Ally within 8.8m hit by Hard CC: Shield them (50+10% Max HP). CD: 15s.', buildsFrom: ['selflessness'] },
    { id: 'war-banner', name: 'War Banner', cost: 1800, type: 'Starter', category: 'Utility', stats: { 'Phys. Prot': '30', 'Mag. Prot': '30', 'Max Health': '200', 'GP5': '1' }, image: 'https://image2url.com/images/1764392115403-09bfa6ec-e40b-4a46-960e-6d4876bc7ea4.png', passive: 'Assist Minion/Jungle: You and allies within 8.8m gain +1% Health Heal, +1.25% Mana Restore, +3.5% Move Speed, +6.5% Atk Speed. Move/Atk buff lasts 10s, stacks 6x.', buildsFrom: ['war-flag'] },
    { id: 'sundering-axe', name: 'Sundering Axe', cost: 2150, type: 'Starter', category: 'Defense', stats: { 'Strength': '30', 'Phys. Prot': '30', 'Mag. Prot': '30' }, image: 'https://image2url.com/images/1764386978295-67d72a7f-cceb-431f-bba6-d60ec0a69fe7.png', passive: 'Damage a God: +150 (+10% Protections from Items) Bonus True Dmg, +125 Heal. Hits one God per activation. CD: 8s.', buildsFrom: ['warriors-axe'] },
    { id: 'bluestone-brooch', name: 'Bluestone Brooch', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '30', 'Max Health': '200', 'HP5': '7', 'MP5': '5' }, image: 'https://image2url.com/images/1764386987399-9a864f30-0818-40a6-aaa9-7fd1e951a806.png', passive: 'Ability Hit: +100 Physical Damage over 2s. Gods take additional damage = 7.5% of their current Health. Subsequent hits on same target: 50% bonus damage for 3s.', buildsFrom: ['bluestone'] },
    { id: 'hunters-cowl', name: 'Hunter\'s Cowl', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '45', 'Lifesteal': '5%' }, image: 'https://image2url.com/images/1764387001217-0968d1b2-2bf3-42e6-852f-bc97991e4245.png', passive: 'Within 8.8m of allied God: +30% Atk Speed and +5% Lifesteal. Buff shared with allies within 8.8m. Alone: +10% Move Speed.', buildsFrom: ['leather-cowl'] },
    { id: 'deaths-embrace', name: 'Death\'s Embrace', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '40', 'Max Health': '150', 'Lifesteal': '5%' }, image: 'https://image2url.com/images/1764387014654-e7b829d4-f97a-47e1-8e04-5b5558e7938b.png', passive: 'Attack Hit: +1% Max Health Heal, +2% Max Mana Restore, -0.33s Non Ultimate Cooldowns.', buildsFrom: ['deaths-toll'] },
    { id: 'pendulum-ages', name: 'Pendulum Of The Ages', cost: 2150, type: 'Starter', category: 'Utility', stats: { 'Intelligence': '70', 'MP5': '4', 'Cooldown': '20' }, image: 'https://image2url.com/images/1764387030446-919d226b-7740-41d7-8414-bec4b0e9aece.png', passive: '+4 Mana per second per 10% of missing Mana. +7 Intelligence per 10% of available Mana.', buildsFrom: ['sands-time'] },
    { id: 'archmages-gem', name: 'Archmage\'s Gem', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '90', 'Max Mana': '150', 'MP5': '4' }, image: 'https://image2url.com/images/1764387045286-3f177da9-c306-400a-93ea-99d0b785d6e2.png', passive: 'Ability Hit a God: Deal bonus Magical Damage = 40% of your Intelligence. CD: 20s.', buildsFrom: ['conduit'] },
    { id: 'sharpshooter', name: 'Sharpshooter\'s Arrow', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Basic Power': '40', 'Atk Speed': '15%', 'Crit Chance': '15%' }, image: 'https://image2url.com/images/1764387057482-ca919513-76e3-41bf-8116-6759861fda72.png', passive: '+5% Gold Gain from Kills and Assists. +10% Attack Damage against enemy Gods over 7.5m away.', buildsFrom: ['gilded-arrow'] },
    { id: 'bumbas-spear', name: 'Bumba\'s Spear', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Max Health': '200', 'Atk Speed': '25%', 'Adaptive': '+35 Str or +60 Int' }, image: 'https://image2url.com/images/1764387069657-979989b1-1086-47cd-92d5-c0ae581c6755.png', passive: '+50% damage to Jungle Monsters & Bosses, -25% damage to Minions. On Attack Hit: 20% bonus Physical Damage to enemies within 1.92m. On Jungle/Bosses Slain: +10% Strength & Intelligence for 30s.', buildsFrom: ['bumbas-dagger'] },
    { id: 'bumbas-hammer', name: 'Bumba\'s Hammer', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Max Health': '200', 'Cooldown': '10', 'Adaptive': '+35 Str or +60 Int' }, image: 'https://image2url.com/images/1764387083777-727537f7-0bc7-4bbd-b091-25f685e4ae8a.png', passive: '+50% damage to Jungle Monsters & Bosses, -25% damage to Minions. Ability Used: Next Attack deals +40 True Damage, +240 to Jungle Monsters & Bosses to enemies within 1.92m. Hit this Attack: -0.75s Cooldowns, +60 Heal. On Jungle/Bosses Slain: +10 Cooldown Rate for 30s.', buildsFrom: ['bumbas-cudgel'] },
    { id: 'blood-soaked-shroud', name: 'Blood-soaked Shroud', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '60', 'Max Health': '275' }, image: 'https://image2url.com/images/1764387095161-77f7a216-6f91-4301-b05d-c0327fe1de84.png', passive: 'Ability Hit: +1% Max Health Heal, +1% Max Mana Recovery. If target is a god: +2% Max Health Heal, +2% Max Mana Recovery. Heal increases by +0.1% per Kill you have this match.', buildsFrom: ['vampiric'] },

    // --- TIER 1 ITEMS ---
    { id: 'bow', name: 'Bow', cost: 300, tier: 1, type: 'Item', category: 'Offense', stats: { 'Attack Speed': '5%' }, image: 'https://image2url.com/images/1764300473285-75232b1a-9715-4131-84d2-86df45e9bc4c.webp'},
    { id: 'circlet', name: 'Circlet', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'Max Mana': '150' }, image: 'https://image2url.com/images/1764300446371-4508f190-4aa1-49ef-b269-d3152c46a5f5.webp'},
    { id: 'medallion', name: 'Medallion', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Max Health': '75' }, image: 'https://image2url.com/images/1764300409667-c6bcc9ff-5574-4d6b-86cc-0cd7ea741693.webp'},
    { id: 'rune', name: 'Rune', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '7' }, image: 'https://image2url.com/images/1764300358591-e4963a19-98a2-4d5f-ac5f-1bba2b4b5085.webp'},
    { id: 'shield', name: 'Shield', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '6' }, image: 'https://image2url.com/images/1764300276797-a211e51b-ce8f-4d7e-aacf-1fa4d3986ff9.webp'},
    { id: 'reliquary', name: 'Reliquary', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'MP5': '2' }, image: 'https://image2url.com/images/1764300393312-24ed5e08-e67f-4fd2-9efa-34be108595f3.webp'},
    { id: 'sash', name: 'Sash', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'HP5': '2' }, image: 'https://image2url.com/images/1764300323569-45636ba7-4e96-44c9-9f86-8808315c2e1b.webp'},
    { id: 'ring', name: 'Ring', cost: 400, tier: 1, type: 'Item', category: 'Utility', stats: { 'Cooldown': '5' }, image: 'https://image2url.com/images/1764300372648-4aa67ffc-8b8f-4031-a518-9566176e25fd.webp'},
    { id: 'axe', name: 'Axe', cost: 450, tier: 1, type: 'Item', category: 'Offense', stats: { 'Strength': '10' }, image: 'https://image2url.com/images/1764299986685-0b247359-c8fb-4120-ab2a-a3dec285b243.webp'},
    { id: 'gem', name: 'Gem', cost: 450, tier: 1, type: 'Item', category: 'Offense', stats: { 'Intelligence': '15' }, image: 'https://image2url.com/images/1764300431615-91c5aa11-7f97-443a-ba1c-e6ae087670eb.webp'},
    { id: 'scythe', name: 'Scythe', cost: 550, tier: 1, type: 'Item', category: 'Offense', stats: { 'Lifesteal': '4%' }, image: 'https://image2url.com/images/1764300304236-1349a875-8c93-49ea-881b-41597dfb8275.webp'},
    { id: 'sabre', name: 'Sabre', cost: 550, tier: 1, type: 'Item', category: 'Offense', stats: { 'Crit Chance': '7%' }, image: 'https://image2url.com/images/1764392011528-4336b3c2-8157-4eac-a76d-86cf6017efd4.png'},

    // --- TIER 2 ITEMS ---
    { id: 'mana-tome', name: 'Mana Tome', cost: 500, tier: 2, type: 'Item', category: 'Utility', stats: { 'Max Mana': '250', 'Mana Regen': '2' }, image: 'https://image2url.com/images/1764387134571-9557b31c-8fce-4d0f-bea6-dabc066e0493.png', buildsFrom: ['circlet'] },
    { id: 'adroit-ring', name: 'Adroit Ring', cost: 650, tier: 2, type: 'Item', category: 'Utility', stats: { 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387158605-e899363c-6bf5-42c5-a6a2-2538d7ee8b05.png', buildsFrom: ['ring'] },
    { id: 'olmec-blue', name: 'Olmec Blue', cost: 700, tier: 2, type: 'Item', category: 'Defense', stats: { 'Max Health': '185', 'Health Regen': '2' }, image: 'https://image2url.com/images/1764387190842-da30644a-7677-4cdd-8def-b67aced18951.png', buildsFrom: ['medallion', 'sash'] },
    { id: 'legionnaire-armor', name: 'Legionnaire Armor', cost: 750, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '18' }, image: 'https://image2url.com/images/1764387254070-d5a99e2e-c501-4354-a9a7-d74d31a9377a.png', buildsFrom: ['shield'] },
    { id: 'hunter-bow', name: 'Hunter\'s Bow', cost: 750, tier: 2, type: 'Item', category: 'Offense', stats: { 'Atk Speed': '15%' }, image: 'https://image2url.com/images/1764387348667-1c1c565f-1065-400a-8f9a-d39ab2b14589.png', buildsFrom: ['bow'] },
    { id: 'circle-protection', name: 'Circle of Protection', cost: 750, tier: 2, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '22' }, image: 'https://image2url.com/images/1764387362133-0627014b-8b09-4c24-95d6-0746e70479c5.png', buildsFrom: ['rune'] },
    { id: 'odigba', name: 'Odigba', cost: 800, tier: 2, type: 'Item', category: 'Utility', stats: { 'Max Health': '125', 'Max Mana': '150' }, image: 'https://image2url.com/images/1764387377788-1beff96f-23b0-497b-b719-605a5573fa49.png', passive: 'God Kill or Assist: Heal +5% Max Health over 6s.', buildsFrom: ['medallion', 'circlet'] },
    { id: 'veve-charm', name: 'Veve Charm', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Max Health': '240' }, image: 'https://image2url.com/images/1764387390845-d7c57d2b-17a0-4799-aa23-d12bfdd52167.png', buildsFrom: ['medallion', 'sash'] },
    { id: 'captains-ring', name: 'Captain\'s Ring', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387403104-0dbe9d7e-1b0d-4f41-bd47-28ddffbdf5d0.png', buildsFrom: ['shield', 'ring'] },
    { id: 'sages-ring', name: 'Sage\'s Ring', cost: 800, tier: 2, type: 'Item', category: 'Utility', stats: { 'Mag. Prot': '12', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387415657-f3f2e39b-32df-406e-97a7-23b25e9d4806.png', buildsFrom: ['ring', 'rune'] },
    { id: 'engraved-guard', name: 'Engraved Guard', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10' }, image: 'https://image2url.com/images/1764387426128-6b7b687e-f115-43e1-9e2e-cde87908ad5f.png', buildsFrom: ['shield', 'rune'] },
    { id: 'cursed-sickle', name: 'Cursed Sickle', cost: 850, tier: 2, type: 'Item', category: 'Offense', stats: { 'Lifesteal': '7.5%' }, image: 'https://image2url.com/images/1764387437426-91ff50a0-33e3-49b9-9b7a-4774ecda3336.png', buildsFrom: ['scythe'] },
    { id: 'medal-disruption', name: 'Medal of Disruption', cost: 850, tier: 2, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '12', 'Max Health': '150' }, image: 'https://image2url.com/images/1764388046853-fbbcba76-95c5-4a5b-8721-7f5a783af223.png', buildsFrom: ['rune', 'medallion'] },
    { id: 'medal-defense', name: 'Medal of Defense', cost: 850, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Max Health': '125' }, image: 'https://image2url.com/images/1764388063038-4ef9cf58-59ee-4285-b69c-87e512552017.png', buildsFrom: ['shield', 'medallion'] },
    { id: 'enchanted-bracelet', name: 'Enchanted Bracelet', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '20', 'Atk Speed': '8%' }, image: 'https://image2url.com/images/1764388080105-875ec8dc-7fc3-4de8-af00-20ddece05dac.png', buildsFrom: ['gem', 'bow'] },
    { id: 'killing-stone', name: 'Killing Stone', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '35' }, image: 'https://image2url.com/images/1764387486991-a08ae410-87af-443c-b713-5bbb90ace2c3.png', buildsFrom: ['gem'] },
    { id: 'battle-axe', name: 'Battle Axe', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '15', 'Max Health': '100' }, image: 'https://image2url.com/images/1764387752078-61424bb7-1c4a-462b-a859-afdf64512942.png', buildsFrom: ['axe', 'medallion'] },
    { id: 'soul-reliquary', name: 'Soul Reliquary', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '20', 'Mana Regen': '4' }, image: 'https://image2url.com/images/1764387776995-a3c22624-2f23-433b-815e-b282376972fe.png', buildsFrom: ['gem', 'reliquary'] },
    { id: 'void-shard', name: 'Void Shard', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Penetration': '10%' }, image: 'https://image2url.com/images/1764387788715-81f9d6dd-e6dd-4ef1-9c91-9d8b0883a2a6.png', buildsFrom: [] },
    { id: 'ring-dispel', name: 'Ring of Dispel', cost: 950, tier: 2, type: 'Item', category: 'Utility', stats: { 'Intelligence': '20', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764387848843-8b91e643-ea93-487b-a988-a17dcbb5170b.png', passive: 'Hard Crowd Control a God: Target has -10 Strength and -16 Intelligence for 4s.', buildsFrom: ['gem', 'ring'] },
    { id: 'flaming-pearl', name: 'Flaming Pearl', cost: 950, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '25', 'Max Health': '100' }, image: 'https://image2url.com/images/1764387859643-32849d3a-a841-4f73-8311-7b1ea17ad0da.png', buildsFrom: ['gem', 'medallion'] },
    { id: 'oracle-staff', name: 'Oracle Staff', cost: 950, tier: 2, type: 'Item', category: 'Utility', stats: { 'Intelligence': '20', 'Max Mana': '150', 'Mana Regen': '1' }, image: 'https://image2url.com/images/1764387870708-4ab9c417-dcdf-40d3-8115-e3f2fe6c2b75.png', passive: 'Kill or Assist a God: +25% Mana', buildsFrom: ['gem', 'circlet'] },
    { id: 'manchu-bow', name: 'Manchu Bow', cost: 950, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Atk Speed': '8%' }, image: 'https://image2url.com/images/1764387885611-2a181cc5-b04c-42e0-bf8b-3f903cdbf3dd.png', passive: 'Attacks deal +10 Physical Damage.', buildsFrom: ['axe', 'bow'] },
    { id: 'skeggox', name: 'Skeggox', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '25' }, image: 'https://image2url.com/images/1764392257039-2ed01c8b-25b7-41ac-a16f-d42c7d06807c.png', buildsFrom: ['axe'] },
    { id: 'survivors-sash', name: 'Survivor\'s Sash', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: {}, image: 'https://image2url.com/images/1764388194578-85dc52a0-9e0c-4cf0-9038-94a0a334354d.png', passive: 'Adaptive Stat: +25 Strength or +35 Intelligence (based on highest item stat).', buildsFrom: [] },
    { id: 'caestus', name: 'Caestus', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Cooldown': '10' }, image: 'https://image2url.com/images/1764388216880-c07e1f47-ce8d-4701-9292-e4c1bce4b274.png', passive: 'When Hard Crowd Controlled: +15 Physical and Magical Protection for 4s.', buildsFrom: ['axe', 'ring'] },
    { id: 'hooked-sword', name: 'Hooked Sword', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Crit Chance': '15%' }, image: 'https://image2url.com/images/1764387897097-175e602b-1f51-456f-bec2-8a78e6bdd655.png', buildsFrom: ['sabre'] },
    { id: 'infused-axe', name: 'Infused Axe', cost: 1050, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '15', 'Max Mana': '150', 'Mana Regen': '1' }, image: 'https://image2url.com/images/1764388216880-c07e1f47-ce8d-4701-9292-e4c1bce4b274.png', passive: 'Kill or Assist a God: +25% Mana', buildsFrom: ['axe', 'circlet'] },
    { id: 'zither', name: 'Zither', cost: 1100, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '12', 'Intelligence': '20' }, image: 'https://image2url.com/images/1764388264117-4b409fbc-dbea-4b0e-8ad6-8a7ff16939d2.png', buildsFrom: ['axe', 'gem'] },
    { id: 'stalwart-sigil', name: 'Stalwart Sigil', cost: 1150, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '15', 'Mag. Prot': '15' }, image: 'https://image2url.com/images/1764388280971-5f2958e9-ae7d-4e0a-92f3-4773cc3e20cc.png', buildsFrom: ['shield', 'rune'] },
    { id: 'evil-eye', name: 'Evil Eye', cost: 1200, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '45' }, image: 'https://image2url.com/images/1764388295440-5d717be6-0ee1-4418-850d-22eb3f7df044.png', buildsFrom: ['gem'] },
    { id: 'adamantine-sickle', name: 'Adamantine Sickle', cost: 1200, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Lifesteal': '5%' }, image: 'https://image2url.com/images/1764388306135-e156dc01-7818-415d-8414-19d05a7ed1e6.png', passive: 'While Below 50% Health: +15 Strength.', buildsFrom: ['axe', 'scythe'] },
    { id: 'lucerne-hammer', name: 'Lucerne Hammer', cost: 1250, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '35' }, image: 'https://image2url.com/images/1764388317698-8b1098b7-8496-46cf-9d32-833967b6a124.png', buildsFrom: ['skeggox'] },
    { id: 'kopesh', name: 'Kopesh', cost: 1250, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Crit Chance': '10%' }, image: 'https://image2url.com/images/1764388329537-aa1373bb-38cd-4c7b-a516-a9b6a9b3028b.png', passive: 'Critically Strike a God: +5% Movement Speed for 4s.', buildsFrom: ['axe', 'sabre'] },

    // --- TIER 3 ITEMS Offence
    { id: 'blood-bound-book', name: 'Blood-Bound Book', cost: 2250, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '60', 'Lifesteal': '7.5%' }, image: 'https://image2url.com/images/1764394815581-67481d7e-7a72-47cc-818a-36eed4711e0e.png', passive: 'On Use: +Health Shield for 6s. Shield = 7.5% Max Health & 75% Intelligence from items. While Shielded: +10% Lifesteal. Cooldown: 80s. Kill a God: -25% Cooldown.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'book-of-thoth', name: 'Book of Thoth', cost: 2300, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '30', 'Max Mana': '200', 'Mana Regen': '4' }, image: 'https://image2url.com/images/1764393958233-60285360-5bbc-47f3-a87b-b39d34fc2714.png', passive: '+Intelligence equal to 5% of Mana from items. Deal 900 Damage to Minions or Jungle Monsters: +1 Stack. Damage dealt to Gods counts double. Per Stack: +10 Mana. At 50 Stacks, item evolves and gains: Additional +Intelligence equal to 2% of Mana from Items, +20 Intelligence, +100 Mana.', buildsFrom: ['mana-tome', 'oracle-staff' ] },
    { id: 'eros-bow', name: "Eros' Bow", cost: 2300, tier: 3, type: 'Item', category: 'Offense', stats: { 'Max Health': '300', 'Attack Speed': '30%' }, image: 'https://image2url.com/images/1764394133046-a77f83c2-2d58-4d0a-b091-7d67737411ab.png', passive: 'On Use: Mark an ally god. Only one ally may be Marked at a time. Mark breaks if ally is more than 20m away. On Attack Hit: Heal the Marked ally for +1.5% of your Max Health. Cooldown: 1s.', buildsFrom: ['veve-charm', 'hunter-bow'] },
    { id: 'bancrofts-talon', name: "Bancroft's Talon", cost: 2300, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '55', 'Max Mana': '150', 'Mana Regen': '2', 'Lifesteal': '7.5%' }, image: 'https://image2url.com/images/1764394589407-952c258d-d94b-4092-806e-b92582f4c8ee.png', passive: 'Gain bonus Intelligence and Lifesteal scaled from missing Health. Caps at +60 Intelligence and +10% Lifesteal at 40% Health.', buildsFrom: ['enchanted-bracelet', 'cursed-sickle'] },
    { id: 'gem-of-focus', name: 'Gem of Focus', cost: 2350, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '50', 'Cooldown Rate': '20%' }, image: 'https://image2url.com/images/1764396611532-8c44df53-6ae2-45d4-8006-80da664355ac.png', passive: 'Ability Used: Gain a stack of Momentum. Momentum grants +4% Movement Speed for 6s. Stacks up to 3 times.', buildsFrom: ['adroit-ring', 'killing-stone' ] },
    { id: 'chronos-pendant', name: "Chronos' Pendant", cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '55', 'Cooldown Rate': '25%' }, image: getItemImage('chronos-pendant'), passive: 'Every 10s: -1s Ability Cooldowns.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'jotunns-revenge', name: "Jotunn's Revenge", cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '40', 'Cooldown Rate': '25%' }, image: getItemImage('jotunns-revenge'), passive: 'God Kill or Assist: -1s Cooldown for Non-Ultimate Abilities, -5s Cooldown for Ultimate Abilities.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'dagger-of-frenzy', name: 'Dagger of Frenzy', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Attack Speed': '10%' }, image: getItemImage('dagger-of-frenzy'), passive: 'On Use: +10 (+4 per Level) Attack Damage, +50% Attack Speed. Buff lasts 6s. Cooldown: 15s. Killing a God refreshes Cooldown.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'sun-beam-bow', name: 'Sun Beam Bow', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Attack Speed': '10%' }, image: getItemImage('sun-beam-bow'), passive: 'Adaptive Stat: +40 Strength or +55 Intelligence (based on highest item stat). On Use: Fire +2 Projectiles per Attack. Deals 10 +30% Attack Damage as Magical Damage. 8.8m Range. Toggleable. -5% Max Mana per second while active. Structures and Bosses take 25% damage from Sun Beam Bow.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'transcendence', name: 'Transcendence', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Max Mana': '400', 'Mana Regen': '4' }, image: getItemImage('transcendence'), passive: '+Strength equal to 3% of Mana from Items. Deal 700 Damage to Minions or Jungle Monsters: +1 Stack. Damage dealt to Gods counts double. Per Stack: +7 Mana. At 50 Stacks, item evolves and gains: +15 Strength, +100 Mana.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'odysseus-bow', name: "Odysseus' Bow", cost: 2450, tier: 3, type: 'Item', category: 'Offense', stats: { 'Attack Speed': '45%' }, image: getItemImage('odysseus-bow'), passive: 'Every fourth Attack Hit: Trigger Chain Lightning. Damage = 15 (+60% Attack Damage) Physical Damage. Hits target and up to 4 nearby enemies. Bounce Range: 4.8m. Can hit the same target more than once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'hydras-lament', name: "Hydra's Lament", cost: 2450, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Max Mana': '200', 'Mana Regen': '4', 'Cooldown Rate': '10%' }, image: getItemImage('hydras-lament'), passive: 'Ability Used: +30% Damage on your next Attack. Buff lasts 8s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'rage', name: 'Rage', cost: 2450, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '30', 'Critical Chance': '20%' }, image: getItemImage('rage'), passive: 'God Kill or Assist: +4% Critical Strike Chance (Max 20%). After 5 God Kills or Assists: +10% additional Critical Strike Chance.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'barbed-carver', name: 'Barbed Carver', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '40', 'Lifesteal': '7.5%' }, image: getItemImage('barbed-carver'), passive: 'Ability Hit: Target gains +1 Stack of Jagged Wounds for 5s (max 3). Triggers once per Ability, per target. Each Stack: +8% (+1% per 10% Lifesteal) Attack and Ability Damage as Physical Damage.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'daybreak-gavel', name: 'Daybreak Gavel', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Max Health': '300' }, image: getItemImage('daybreak-gavel'), passive: 'Adaptive Stat: +60 Strength or +80 Intelligence (based on highest item stat). Each unique god Healed by a Healing Ability: +1 Stack (max 4). Non Healing Ability Use: Consume all Stacks, +13 Strength or +16 Intelligence (based on highest item stat) for 8s per Stack (max 4).', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'bracer-of-the-abyss', name: 'Bracer of The Abyss', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '45', 'Attack Speed': '30%' }, image: getItemImage('bracer-of-the-abyss'), passive: 'Hit enemy Gods or Jungle Bosses: +10 Attack Damage for 10s. Stacks up to 8 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'vital-amplifier', name: 'Vital Amplifier', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Max Health': '200', 'Health Regen': '3', 'Attack Speed': '10%' }, image: getItemImage('vital-amplifier'), passive: 'Adaptive Stat: +30 Strength or +45 Intelligence (based on highest item stat). Heal yourself or an ally with an Ability: +7.5% Attack Speed, +5% Attack Damage. Buff lasts 6s, Stacks up to 3x.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'nimble-ring', name: 'Nimble Ring', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '35', 'Attack Speed': '20%', 'Lifesteal': '7.5%' }, image: getItemImage('nimble-ring'), passive: 'For every 10 Intelligence: +1 Attack Damage, +1% Attack Speed.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'lernaean-bow', name: 'Lernaean Bow', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '40', 'Attack Speed': '30%' }, image: getItemImage('lernaean-bow'), passive: 'On Use: Fire 3 arrows that pierce enemies in a 10.5m line. Deals 40% of your Attack Damage as Physical Damage. -50% Shield. Can Critically Strike. Cooldown: 30s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'divine-ruin', name: 'Divine Ruin', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '95' }, image: getItemImage('divine-ruin'), passive: 'Ability or Attack Hit Enemy God: Trigger Chain Lightning. Magical Damage = 40 + 20% Intelligence. Hits enemy and up to 4 nearby enemies, Marking them for 6s. Bounce Range: 4.8m. Can hit the same target more than once. Cooldown: 15s. Mark: On target Heals 50 Health: -0.25 Cooldown.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'devourers-gauntlet', name: "Devourer's Gauntlet", cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Lifesteal': '5%' }, image: getItemImage('devourers-gauntlet'), passive: 'Kill Minion or Jungle Monsters: +1 Stack. Each Stack grants: +.4 Strength, +0.05% Lifesteal. At 75 Stacks, gain: +10 Strength, +3% Lifesteal. Continue to stack more Slowly; 10 Minion Kills: +1 Stack, Jungle Boss Kill or Assist: +5 Stacks.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'soul-gem', name: 'Soul Gem', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '60', 'Lifesteal': '7.5%', 'Cooldown Rate': '10%' }, image: getItemImage('soul-gem'), passive: 'Ability Hit: +1 Stack. Three Stacks: Next Ability Hit: Deals Bonus Damage (40% Intelligence), +20(+6 per Level) Heal you and allies within 3.2m. Removes the Stacks.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'the-executioner', name: 'The Executioner', cost: 2550, tier: 3, type: 'Item', category: 'Offense', stats: { 'Attack Speed': '15%' }, image: getItemImage('the-executioner'), passive: 'Adaptive Stat: +30 Strength or +55 Intelligence (based on highest item stat). Attack a God or Boss: Apply 1 Stack of Piercing. Piercing reduces 6% Protections for 4s. Stacks up to 5 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'polynomicon', name: 'Polynomicon', cost: 2550, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '75', 'Max Mana': '200', 'Mana Regen': '3' }, image: getItemImage('polynomicon'), passive: 'Ability Used: Your next Attack deals bonus Magical Damage. Damage = 60% of your Intelligence.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'bloodforge', name: 'Bloodforge', cost: 2550, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Lifesteal': '7.5%' }, image: getItemImage('bloodforge'), passive: 'On Use: +Health Shield for 6s. Shield = 10% Max Health & 150% Strength from Items. While Shielded: +10% Lifesteal. Cooldown: 80s. Kill a God: -25% Cooldown.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'oath-sworn-spear', name: 'Oath-Sworn Spear', cost: 2550, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '60' }, image: getItemImage('oath-sworn-spear'), passive: 'Ability Hit: Target is -1 Physical Protection per your Level for 4s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'bragis-harp', name: "Bragi's Harp", cost: 2550, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Intelligence': '25', 'Attack Speed': '10%' }, image: getItemImage('bragis-harp'), passive: 'Attack Hit: +10 (+3 per Level) bonus Magical Damage. Structures and Bosses take half damage from Bragi\'s Harp.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'necronomicon', name: 'Necronomicon', cost: 2550, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '50', 'Max Mana': '300', 'Mana Regen': '5' }, image: getItemImage('necronomicon'), passive: 'God Kill or Assist: +1 Stack of: +30 Intelligence. Stacks up to 6 times. On Death: Lose 4 Stacks.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'typhons-heart', name: "Typhon's Heart", cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '50', 'Lifesteal': '12.5%' }, image: getItemImage('typhons-heart'), passive: 'On Minion or Jungle Kill: +1 Stack. On God Kill: +30 Stacks. On Assist: +15 Stacks. At 30 Stacks: Summon a Monster of Typhon. Health = 200 (+55 per Level). Damage = 300% of your Lifesteal and 30% of your Intelligence. Your Lifesteal heals the monster. If another would be summoned: Fully Heal current monster, Buff it with +25% Health, Attack Speed, and Movement Speed (Stacks up to 5x).', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'the-reaper', name: 'The Reaper', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '65', 'Lifesteal': '10%' }, image: getItemImage('the-reaper'), passive: 'Kill a God: Heal +15% of Slain God\'s Max Health. Assist a God: Heal +7.5% of Slain God\'s Max Health. During Moonlight Phase: Heal +15% of Slain God\'s Max Health, on Kill or Assist.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'qins-blade', name: "Qin's Blade", cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '20', 'Attack Speed': '25%' }, image: getItemImage('qins-blade'), passive: 'Enemies within 12.8m gain 1 Stack of Qin\'s Mark for every 100 Health they heal. Lasts 6s (Max 6). Attack Hit: +Bonus Physical Damage. Bonus Damage = 1.5% Target Maximum Health + Choose Highest: 7.5% of the difference in Maximum Health, 0.5% Target Maximum Health (Per stack of Qin\'s Mark).', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'ancient-signet', name: 'Ancient Signet', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '80', 'Max Mana': '250' }, image: getItemImage('ancient-signet'), passive: 'Ability Hit: +20 (+12 per Level) bonus Magical Damage. Cooldown: 15s. -2s Cooldown for each minion kill or assist.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'gluttonous-grimoire', name: 'Gluttonous Grimoire', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '40', 'Max Health': '150', 'Lifesteal': '7.5%' }, image: getItemImage('gluttonous-grimoire'), passive: 'Store 25% of your Lifesteal healing as bonus Magical Damage on your next Attack. If at full Health: Store 40% instead. Stored damage is capped to 33% of your Max Health.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'death-metal', name: 'Death Metal', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Intelligence': '40', 'Critical Chance': '15%' }, image: getItemImage('death-metal'), passive: 'On Use: You and Allies within 6.4m gain: +25% Crit Chance, +25% Attack Speed. Buff lasts 6s. Cooldown: 45s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'tyrfing', name: 'Tyrfing', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Attack Speed': '10%' }, image: getItemImage('tyrfing'), passive: 'Attacks deal +15 bonus Physical Damage. On God hit: Increase bonus Damage by +15 for 4s. Stacks once, +1 Stack per 4 Levels (Max 6 Stacks).', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'the-cosmic-horror', name: 'The Cosmic Horror', cost: 2650, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '85', 'Max Mana': '200', 'Mana Regen': '3', 'Cooldown Rate': '10%' }, image: getItemImage('the-cosmic-horror'), passive: 'Have 275+ Item Intelligence: +10 Cooldown Rate.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'hastened-fatalis', name: 'Hastened Fatalis', cost: 2650, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '20', 'Attack Speed': '25%' }, image: getItemImage('hastened-fatalis'), passive: 'Attack Hits a God: -12.5% Attack Movement Penalty. Melee hits grants 2 Stacks. Stacks up to 4 times. Buff lasts 2s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'avenging-blade', name: 'Avenging Blade', cost: 2650, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '60', 'Max Health': '200' }, image: getItemImage('avenging-blade'), passive: 'Attack hit a God: Debuff that God. -3.5% Protections. When Debuffed God is in Jungle OR Heals 5% of their Health: Stacks become twice as effective. Debuff lasts 4s, Stacks up to 3 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'spear-of-desolation', name: 'Spear of Desolation', cost: 2650, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '100', 'Cooldown Rate': '10%' }, image: getItemImage('spear-of-desolation'), passive: 'God Kill or Assist: -3s Non Ultimate Cooldowns, -10s Ultimate Cooldowns.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'arondight', name: 'Arondight', cost: 2650, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '55', 'Cooldown Rate': '15%' }, image: getItemImage('arondight'), passive: 'On Use: Reveal enemy Gods within 17.6m for 6s. Reveal persists through Stealth. If any God is revealed, +25% Movement Speed for 6s. First time you damage a revealed God: +30 (+50% Strength) Physical Damage. Cooldown: 60s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'riptalon', name: 'Riptalon', cost: 2700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Attack Speed': '20%', 'Lifesteal': '7.5%', 'Basic Attack Power': '25%' }, image: getItemImage('riptalon'), passive: 'While Above 50% Health: +10% Attack Damage. While Below 50% Health: +25% Attack Damage, +7.5% Lifesteal.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'musashis-dual-swords', name: "Musashi's Dual Swords", cost: 2700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Critical Chance': '30%' }, image: getItemImage('musashis-dual-swords'), passive: 'Critically Strike: +15% Movement Speed for 5s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'tekko-kagi', name: 'Tekko-Kagi', cost: 2700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '60', 'Cooldown Rate': '10%' }, image: getItemImage('tekko-kagi'), passive: 'Ability Used: Gain a stack of Momentum. Momentum grants +4% Movement Speed for 6s. Stacks up to 3 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'doom-orb', name: 'Doom Orb', cost: 2700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '90', 'Max Mana': '200', 'Mana Regen': '2' }, image: getItemImage('doom-orb'), passive: 'Kill or Assist a Minion: +1 Stack. Kill or Assist a God: +5 Stacks. Per Stack: +8 Intelligence. Max 5 Stacks. Stacks last 10s. Stacks fall off one at a time.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'jade-scepter', name: 'Jade Scepter', cost: 2750, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '90', 'Max Health': '150' }, image: getItemImage('jade-scepter'), passive: 'On Use: Displace enemy Gods in front of you, pushing them away. Cooldown: 60s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'demon-blade', name: 'Demon Blade', cost: 2750, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '30', 'Attack Speed': '15%', 'Critical Chance': '15%' }, image: getItemImage('demon-blade'), passive: 'Critically Strike: +30% Attack Speed for 3s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'staff-of-myrddin', name: 'Staff of Myrddin', cost: 2750, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '70', 'Cooldown Rate': '10%' }, image: getItemImage('staff-of-myrddin'), passive: 'On Use: Next non-Ultimate Ability used will have no cooldown. Cooldown: 80s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'the-crusher', name: 'The Crusher', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '60', 'Cooldown Rate': '15%' }, image: getItemImage('the-crusher'), passive: 'Ability Hit: +Physical Damage. Damage = 35% of your Strength. Damage is dealt over 1s. Subsequent hits on the same target deal 50% bonus Damage, over 3s.', buildsFrom: ['cursed-sickle', 'killing-stone' ]},
    { id: 'totem-of-death', name: 'Totem of Death', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '60', 'Cooldown Rate': '15%' }, image: getItemImage('totem-of-death'), passive: 'Ability Hit a God or Boss: Apply 1 Stack of Piercing. Piercing reduces 6% Protections for 4s. Stacks up to 5 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'the-world-stone', name: 'The World Stone', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '70', 'Max Mana': '250', 'Mana Regen': '3' }, image: getItemImage('the-world-stone'), passive: '-30% Cooldown for your Ultimate Ability.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'pendulum-blade', name: 'Pendulum Blade', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Cooldown Rate': '10%' }, image: getItemImage('pendulum-blade'), passive: 'On Use: -4s Ability Cooldowns. Cooldown: 40s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'deathbringer', name: 'Deathbringer', cost: 2900, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Critical Chance': '20%' }, image: getItemImage('deathbringer'), passive: '+35% Critical Strike Damage.', buildsFrom: ['cursed-sickle', 'killing-stone' ]},
    { id: 'soul-reaver', name: 'Soul Reaver', cost: 2950, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '60', 'Max Mana': '250', 'Mana Regen': '5' }, image: getItemImage('soul-reaver'), passive: 'Abilities deal bonus Magical Damage to Gods with more Maximum Health than you. Damage = 8% of Maximum Health difference + 5% of your Intelligence, dealt 4 times over 2s. Triggers once per Ability Cast, per God.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'heartseeker', name: 'Heartseeker', cost: 3000, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '55', 'Max Mana': '250', 'Mana Regen': '2' }, image: getItemImage('heartseeker'), passive: 'Ability Hit: +%Health Physical Damage. Damage = 2.5% of your Strength, as a % of the target\'s Max Health.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'rod-of-tahuti', name: 'Rod of Tahuti', cost: 3000, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '85', 'Max Mana': '250', 'Mana Regen': '2' }, image: getItemImage('rod-of-tahuti'), passive: '+Intelligence equal to 25% of your Intelligence from items.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'obsidian-shard', name: 'Obsidian Shard', cost: 3050, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '60' }, image: getItemImage('obsidian-shard'), passive: 'Gain the Shattering effect: +35% Penetration. Does not stack with itself.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'titans-bane', name: "Titan's Bane", cost: 3100, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '50' }, image: getItemImage('titans-bane'), passive: 'Gain the Shattering effect: +35% Penetration. Does not stack with itself.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'dreamers-idol', name: "Dreamer's Idol", cost: 3500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intelligence': '140' }, image: getItemImage('dreamers-idol'), passive: 'On Use: +25% Intelligence, Become Immune to Displacement. Buff lasts 10s. Cooldown: 120s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'avatars-parashu', name: "Avatar's Parashu", cost: 3700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '100' }, image: getItemImage('avatars-parashu'), passive: 'On Use: +25% Strength and Immune to Displacement for 10s. Cooldown: 120s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },

    // --- TIER 3 Def
    { id: 'gauntlet-of-thebes', name: "Gauntlet of Thebes", cost: 2200, tier: 3, type: 'Item', category: 'Defense', stats: { 'Max Health': '200', 'Max Mana': '150' }, image: getItemImage('gauntlet-of-thebes'), passive: 'Assist a Minion: +1 Stack. God Kill or Assist: +5 Stacks. Stacks grant +15 Max Health (max 40 Stacks). At 40 Stacks, Item evolves: +200 Max Health.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'yogis-necklace', name: "Yogi's Necklace", cost: 2250, tier: 3, type: 'Item', category: 'Defense', stats: { 'Max Health': '400', 'Max Mana': '250', 'Health Regen': '6', 'Mana Regen': '6' }, image: getItemImage('yogis-necklace'), passive: 'Heal +0.5% of your Max Health per second.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'chandras-grace', name: "Chandra's Grace", cost: 2300, tier: 3, type: 'Item', category: 'Defense', stats: { 'Max Health': '350', 'Cooldown Rate': '20' }, image: getItemImage('chandras-grace'), passive: 'Every 30s: Lowest Health Ally within 8.8m gain: +20 Health Regen, +20 Mana Regen, 0.2s off Cooldowns every 0.2s for 4s. Buff lasts 3s. During Moonlight Phase: On trigger, you also gain the Buff.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'eye-of-providence', name: "Eye of Providence", cost: 2300, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '25', 'Magical Protection': '25', 'Max Health': '250' }, image: getItemImage('eye-of-providence'), passive: 'Destroy a Ward: +50 Gold. On Use: Place a Ward. Reveals enemies and enemy wards within 7.2m. Lasts 120s or until destroyed. Cooldown: 60s. (Max 2 Wards can be Placed) You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'spectral-armor', name: "Spectral Armor", cost: 2300, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '30', 'Max Health': '400' }, image: getItemImage('spectral-armor'), passive: 'Enemies within 8.8m: -25% Attack Speed, Deal -25% Damage with Critical Strikes.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'amanita-charm', name: "Amanita Charm", cost: 2350, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '15', 'Magical Protection': '15', 'Max Health': '300', 'Health Regen': '4' }, image: getItemImage('amanita-charm'), passive: 'On Use: Create a Healing Mushroom (6.4m radius) for 4.5s. +3% Health Heal every 1.5s, +1 Stack of Damage Reduction per Heal, 10% Basic and Ability Damage Reduction per Stack, 5% Ultimate Damage Reduction per Stack. All Stacks removed after triggering. Cooldown: 60s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'genjis-guard', name: "Genji's Guard", cost: 2350, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '50', 'Max Mana': '200', 'Mana Regen': '5', 'Cooldown Rate': '15' }, image: getItemImage('genjis-guard'), passive: 'Hit by Magical Ability Damage: -3s Cooldowns. Cooldown: 15s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'erosion', name: "Erosion", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '30', 'Magical Protection': '20', 'Max Health': '250' }, image: getItemImage('erosion'), passive: '-30% Shields applied to enemy Gods within 11.2m. When this occurs: +10% of your Physical and Magical Protections for 6s. Can stack up to 2 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'shield-of-the-phoenix', name: "Shield of the Phoenix", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '15', 'Max Health': '225', 'Cooldown Rate': '10' }, image: getItemImage('shield-of-the-phoenix'), passive: 'Ability Hit a God: +1.5% Health Heal, +2% Mana Restore. Triggers once per Ability, per God hit.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'contagion', name: "Contagion", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Max Health': '425', 'Health Regen': '6' }, image: getItemImage('contagion'), passive: 'Damaged by an Attack or Ability: Apply +1 Stack of Contagion (1 per hit). If an enemy Lifesteals 100 Health from you: Apply +5 Stacks. Attack or Hard Crowd Control an afflicted enemy: Deal Magical Damage = 1% Max Health per stack in a 4m radius, Remove the Stacks.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'breastplate-of-valor', name: "Breastplate of Valor", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '35', 'Max Mana': '200', 'Mana Regen': '2', 'Cooldown Rate': '20' }, image: getItemImage('breastplate-of-valor'), passive: 'Lose 500 (+25 per Level) Health: -1s Ability Cooldowns. 25% of Self-Healing from Abilities counts towards the lost health trigger.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'magis-cloak', name: "Magi's Cloak", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '35', 'Magical Protection': '35' }, image: getItemImage('magis-cloak'), passive: 'Every 90s: Gain a Hard Crowd Control protective bubble. When triggered, gain Crowd Control Immunity for 1.5s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'screeching-gargoyle', name: "Screeching Gargoyle", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '50', 'Cooldown Rate': '15' }, image: getItemImage('screeching-gargoyle'), passive: 'On Use: Enemies in front of you: Silenced for 1s, -10% Protections for 4s. Cooldown: 90s. During Moonlight Phase: Hits enemies around you, Silence lasts 1.5s, -15% Protections. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'phoenix-feather', name: "Phoenix Feather", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '35', 'Max Health': '300' }, image: getItemImage('phoenix-feather'), passive: 'On Use: Fire 3 Pulses that Heal you and True Damage enemies within 3.2m. Heal = +75 Health +7.5 Missing Health. True Damage = +3% Max Health from Items. Cooldown: 120s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'prophetic-cloak', name: "Prophetic Cloak", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '22', 'Magical Protection': '22', 'Cooldown Rate': '10' }, image: getItemImage('prophetic-cloak'), passive: 'Damage a God: +1 Protection Stack against the damage type they deal. Cooldown: 5s. At +20 of each Protection Stack, item evolves: +5 Physical Protection and Magical Protection, +6% Damage Mitigation (or +12% if total Protections > 300).', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'stampede', name: "Stampede", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '30', 'Max Health': '250', 'Health Regen': '5' }, image: getItemImage('stampede'), passive: 'On Use: You and allies within 6.4m gain: Slow Immunity, +60% Movement Speed that decays to +20% over 4s. Cooldown: 90s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'berserkers-shield', name: "Berserker's Shield", cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '30', 'Magical Protection': '15', 'Attack Speed': '20%' }, image: getItemImage('berserkers-shield'), passive: 'When falling below 60% Health: Become Berserk for 8s. While Berserk: +65% Protections from Items, +25% Attack Speed.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'pharaohs-curse', name: "Pharaoh's Curse", cost: 2450, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '35', 'Magical Protection': '25', 'Attack Speed': '15%' }, image: getItemImage('pharaohs-curse'), passive: 'On Use: Enemies within 5.6m: -50% Shields, -20% Movement Speed, -40% Attack Speed. Debuff lasts 4s. Cooldown: 45s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'gladiators-shield', name: "Gladiator's Shield", cost: 2450, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '25', 'Max Health': '200', 'Cooldown Rate': '10' }, image: getItemImage('gladiators-shield'), passive: 'Abilities deal bonus Physical Damage. Damage = +10 + 40 of your Item Protections. Triggers once per Ability Cast, per God.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'umbral-link', name: "Umbral Link", cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '40', 'Lifesteal': '10%' }, image: getItemImage('umbral-link'), passive: 'Above 50% Health: Split your Lifesteal Healing with allies within 11.2m. +10 Physical and Magical Protections for 8s per unique ally Healed.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'shoguns-ofuda', name: "Shogun's Ofuda", cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '30', 'Max Health': '200', 'Attack Speed': '15%' }, image: getItemImage('shoguns-ofuda'), passive: '+20% Attack Speed for you and allies within 8.8m.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'ancile', name: "Ancile", cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '45', 'Max Health': '250' }, image: getItemImage('ancile'), passive: '-10% Attack Damage taken. On Use: Your next Ability that damages a god Silences them for 1.5s. Cooldown: 70s. Take Attack Damage: -2s Item Cooldown. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'spirit-robe', name: "Spirit Robe", cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '25', 'Magical Protection': '25' }, image: getItemImage('spirit-robe'), passive: 'Hit by Hard Crowd Control: +40 Physical Protection, +40 Magical Protection, +4% Health Heal over time. Buff lasts 6s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'oni-hunters-garb', name: "Oni Hunter's Garb", cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '40', 'Max Health': '150', 'Max Mana': '200', 'Mana Regen': '8' }, image: getItemImage('oni-hunters-garb'), passive: 'For each enemy god within 8.8m: +4% Damage Mitigation. Max 3 stacks.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'leviathans-hide', name: "Leviathan's Hide", cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '40', 'Max Health': '250' }, image: getItemImage('leviathans-hide'), passive: 'Damaged by God Attack: That God is -10% Strength & Attack Damage for 4s. Attack an Enemy God: +8 Max Health Permanently. Cooldown: 10s. Damaged by Enemy God: -0.5s once per Ability Cast or Attack.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'talisman-of-purification', name: "Talisman of Purification", cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '30', 'Max Health': '300', 'Cooldown Rate': '10' }, image: getItemImage('talisman-of-purification'), passive: 'On Use: You and Allies within 6.4m: Are Cleansed of all Crowd Control, Gain Crowd Control Immunity for 1s. Cooldown: 140s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'stone-of-binding', name: "Stone of Binding", cost: 2550, tier: 3, type: 'Item', category: 'Defense', stats: { 'Magical Protection': '25', 'Physical Protection': '35' }, image: getItemImage('stone-of-binding'), passive: 'Hard Crowd Control an Enemy: Apply -7 Physical and Magical Protections for 6s. Stacks up to 3 times. Stacks fall off one at a time.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'regrowth-striders', name: "Regrowth Striders", cost: 2550, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '35', 'Mana Regen': '3', 'Cooldown Rate': '15' }, image: getItemImage('regrowth-striders'), passive: 'Heal yourself with an Ability: +25% Movement Speed (decays to 0%) for 4s. Cooldown: 10s. Gain any Movement Speed buff: +5% Health Heal over 10s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'glorious-pridwen', name: "Glorious Pridwen", cost: 2550, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '20', 'Magical Protection': '20', 'Cooldown Rate': '12' }, image: getItemImage('glorious-pridwen'), passive: 'On Use: Explode (4.8m radius): Deal Magical Damage (40% of Protections), +25% Slow for 3s. Gain a Shield (125% of Protections) for 5s. When the Shield expires or breaks: Explode again: Deal Magic Damage (70% of your Protections). Cooldown: 45s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'stygian-anchor', name: "Stygian Anchor", cost: 2550, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '35', 'Magical Protection': '30' }, image: getItemImage('stygian-anchor'), passive: 'On God Damage Dealt: Apply 1 Stack of Stygian Sludge for 1.25s. (Max 5) Stacks fall off one at a time. Per Stack: -3% Movement Speed, -3% Attack Speed, 4% of their Healing Echoed to you.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'hide-of-the-nemean-lion', name: "Hide of the Nemean Lion", cost: 2550, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '35', 'Max Health': '350', 'Health Regen': '4' }, image: getItemImage('hide-of-the-nemean-lion'), passive: 'On Use: Reflect: 40% of pre-mitigated Attack Damage, 20% of pre-mitigated Ability Damage. Damage is Reflected as Physical Damage. Buff lasts 4s. Cooldown: 60s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'mystical-mail', name: "Mystical Mail", cost: 2550, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '25', 'Max Health': '300' }, image: getItemImage('mystical-mail'), passive: 'Enemies within 4m: 15 (+1 per Level) Magical Damage per 1s. Range Scaling Debuff: +50% at Close Range, -50% at Maximum Range.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'mantle-of-discord', name: "Mantle Of Discord", cost: 2600, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '30', 'Magical Protection': '20', 'Cooldown Rate': '10' }, image: getItemImage('mantle-of-discord'), passive: 'Damaged while below 40% Health: Stuns enemies within 3.2m for 1s, +Crowd Control Immunity for 1s. Cooldown: 110s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'freyas-tears', name: "Freya's Tears", cost: 2600, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '20', 'Magical Protection': '25', 'Cooldown Rate': '20' }, image: getItemImage('freyas-tears'), passive: 'Lose 25% of your Health: +15 Physical and Magical Protections from items for 5s. Can stack up to 2 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'heartwood-charm', name: "Heartwood Charm", cost: 2650, tier: 3, type: 'Item', category: 'Defense', stats: { 'Max Health': '400', 'Max Mana': '250', 'Cooldown Rate': '10' }, image: getItemImage('heartwood-charm'), passive: '-20% Cooldowns for your Healing Abilities. On Use: Your next non-Ultimate Healing Ability has no cooldown. -50% Damage on this Ability. Cooldown: 120s. -6s Cooldown on each Healing Ability Cast. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'draconic-scale', name: "Draconic Scale", cost: 2700, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '20', 'Magical Protection': '20', 'Max Health': '300' }, image: getItemImage('draconic-scale'), passive: 'Damaged by a God: Gain 2 Protections (+3% bonus Protections from items) against that God\'s damage type. Stacks last 1.5s (max 7). Stacks decay 1 at a time.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'xibalban-effigy', name: "Xibalban Effigy", cost: 2750, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '30', 'Magical Protection': '30', 'Max Mana': '300', 'Mana Regen': '4' }, image: getItemImage('xibalban-effigy'), passive: 'On Use: Take 50% Damage for 4s. After: Take Physical Damage equal to mitigated Damage. Cannot drop below 5% Health. During Moonlight Phase: Only 50% of the mitigated Damage is dealt back. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'circes-hexstone', name: "Circe's Hexstone", cost: 2750, tier: 3, type: 'Item', category: 'Defense', stats: { 'Max Health': '250', 'Health Regen': '4', 'Cooldown Rate': '10' }, image: getItemImage('circes-hexstone'), passive: 'On Use: Become Polymorphed, Dash Forward dealing 50 Physical Damage, +CC Immune, +60 Physical and Magical Protection. On Enemy God Hit: Knock Up, Bonus Damage equal to 10% of Current Health, -40s Cooldown. Cooldown: 120s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'dwarven-plate', name: "Dwarven Plate", cost: 2800, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '35', 'Magical Protection': '35' }, image: getItemImage('dwarven-plate'), passive: '+12.5% bonus Physical Protections from items. +25% bonus Magical Protections from items. On Use: Switch which Protection is increased more. Cooldown: 30s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'hussars-wings', name: "Hussar's Wings", cost: 3500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Physical Protection': '25', 'Magical Protection': '25', 'Max Health': '500' }, image: getItemImage('hussars-wings'), passive: 'You are Immune to Slows.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },

    // --- TIER 3 Hybrid
    { id: 'rod-of-asclepius', name: "Rod Of Asclepius", cost: 2350, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '55', 'Max Health': '225', 'Health Regen': '3' }, image: getItemImage('rod-of-asclepius'), passive: 'On Use: Heal all allies within 8.8m. +10% Health Heal over 10s. Counts as Ability healing. If target has 6 debuffs: +10% Health Heal instantly, Grants all non-damage immunities for 1s. Costs 35% Mana. Cooldown: 90s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'scepter-of-dominion', name: "Scepter of Dominion", cost: 2400, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '30', 'Max Health': '150', 'Max Mana': '200', 'Mana Regen': '3' }, image: getItemImage('scepter-of-dominion'), passive: 'On Use: Create a zone that puts gods into Stasis. The Zone appears after 1.5s. The Stasis lasts 2s. Cooldown: 90s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'lifebinder', name: "Lifebinder", cost: 2400, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '60', 'Max Health': '300', 'Health Regen': '3' }, image: getItemImage('lifebinder'), passive: 'On Use: Fire a Projectile that deals 60 (+8 per Level) Magical Damage. Marks enemy Gods for 6s. First ally to damage a Marked target: +60 (+8 per Level) Heal, +60 (+8 per Level) Shield. Consumes the Mark. Cooldown: 20s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'shield-splitter', name: "Shield Splitter", cost: 2400, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Physical Protection': '25', 'Magical Protection': '20', 'Strength': '40' }, image: getItemImage('shield-splitter'), passive: 'On Use: Fire a projectile 11.2m forward. +40 (+5 per Level) True Damage. If an enemy is Shielded: -65% Shield, You gain a Shield equal to the amount of Shield reduced. Cooldown: 15s. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'golden-blade', name: "Golden Blade", cost: 2450, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Strength': '30', 'Max Health': '200', 'Attack Speed': '20%' }, image: getItemImage('golden-blade'), passive: 'Attacks deal bonus Physical Damage. Damage = +20 + +15% of your Item Protections. Damages all Enemies within 2.5m.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'eye-of-the-storm', name: "Eye of the Storm", cost: 2500, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Strength': '25', 'Magical Protection': '35', 'Max Health': '200' }, image: getItemImage('eye-of-the-storm'), passive: 'On Use: Toggle Vortex around you. Pulls enemies toward you. Deals 6% of your Max Health to yourself as Magical Damage. Automatically deactivates at 200 Health. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'helm-of-radiance', name: "Helm of Radiance", cost: 2500, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '65', 'Physical Protection': '35' }, image: getItemImage('helm-of-radiance'), passive: 'Take Physical Damage: +7 Physical Protection for 6s. Stacks up to 4 times.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'gem-of-isolation', name: "Gem of Isolation", cost: 2500, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '50', 'Max Health': '250' }, image: getItemImage('gem-of-isolation'), passive: 'Damaging Ability Hit: 15% Slow. The Slow lasts for 2s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'brawlers-beat-stick', name: "Brawler's Beat Stick", cost: 2550, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Physical Protection': '15', 'Magical Protection': '15' }, image: getItemImage('brawlers-beat-stick'), passive: 'Adaptive Stat: +40 Strength or +55 Intelligence (based on highest item stat). If no God damage taken/dealt in last 5s: +75% bonus of above Stat for 4s on damage dealt. If damaged by a God, instead: +20 Physical and Magical Protections. If enemy within 7.2m uses a Healing Ability: Gain both effects.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'runeforged-hammer', name: "Runeforged Hammer", cost: 2550, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Strength': '45', 'Max Health': '350', 'Health Regen': '3' }, image: getItemImage('runeforged-hammer'), passive: 'Hard Crowd Control a God: Mark them with a Rune for 5s. Attack to forge the Rune, dealing +50 (+65% of your Item Protections) as Magical Damage. Cooldown: 30s. Hard Crowd Control a God: -6s Item Cooldown.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'eye-of-erebus', name: "Eye of Erebus", cost: 2600, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Max Health': '250', 'Cooldown Rate': '15' }, image: getItemImage('eye-of-erebus'), passive: 'Adaptive Stat: +35 Strength or +50 Intelligence (based on highest item stat). On Use: Spawn a Watchful Eye that lasts 40s. Enemy enters range: Fires a seeking projectile: Magical Damage equal to 15% of Enemy Max Health, +25% Slow for 1.5s. Cooldown: 60s. During Moonlight Phase: Each time you deal damage to a god: -2s Cooldown of this item (Once per target, per Attack or Ability). You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'void-shield', name: "Void Shield", cost: 2600, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Strength': '25', 'Physical Protection': '30', 'Max Health': '150' }, image: getItemImage('void-shield'), passive: 'Enemies within 8.8m: -10% Physical Protection. Range Scaling Debuff: +50% at Close Range, -50% at Maximum Range.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
    { id: 'sanguine-lash', name: "Sanguine Lash", cost: 2650, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Magical Protection': '30', 'Strength': '35', 'Lifesteal': '5%' }, image: getItemImage('sanguine-lash'), passive: 'Enemies Within 4m: -0.75% Health (Max 200) as Physical Damage per 1s. +1% for every 10% Lifesteal. On Use: +5% Lifesteal for 4s, Now damages every 0.33s for 4s. Cooldown: 40s.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'shifters-shield', name: "Shifter's Shield", cost: 2650, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Physical Protection': '15', 'Magical Protection': '15', 'Max Health': '300' }, image: getItemImage('shifters-shield'), passive: 'Over 75% Health: +45 Strength or +55 Intelligence (whichever is higher). Under 75% Health: +20 Physical and Magical Protection.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'void-stone', name: "Void Stone", cost: 2650, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '40', 'Magical Protection': '35', 'Max Health': '150' }, image: getItemImage('void-stone'), passive: 'Enemies Within 8.8m: -10% Magical Protection. Range Scaling Debuff: +50% at Close Range, -50% at Maximum Range.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'tritons-conch', name: "Triton's Conch", cost: 2700, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Strength': '25', 'Intelligence': '40', 'Max Health': '250' }, image: getItemImage('tritons-conch'), passive: 'You and allies within 8.8m: +10 (+0.5 per Level) Strength, +10 (+1 per Level) Intelligence.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'helm-of-darkness', name: "Helm of Darkness", cost: 2700, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '40', 'Physical Protection': '20', 'Magical Protection': '25' }, image: getItemImage('helm-of-darkness'), passive: 'On Use: Become Stealthed and pass through players and walls for 6s. Cannot use while Casting. Cooldown: 90s. During Moonlight Phase: While Stealthed: +15% Movement Speed. Pass through an enemy god: Physical Damage equal to 15% of your Max Health. You can own up to 3 active items at once.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'sphere-of-negation', name: "Sphere of Negation", cost: 2750, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Magical Protection': '70', 'Intelligence': '40' }, image: getItemImage('sphere-of-negation'), passive: 'Gain +2.5% Max Health Magical Shield every 3s, up to a maximum of +15% Max Health.', buildsFrom: ['cursed-sickle', 'killing-stone' ] },
		{ id: 'wish-granting-pearl', name: "Wish-Granting Pearl", cost: 3550, tier: 3, type: 'Item', category: 'Hybrid', stats: { 'Intelligence': '120', 'Max Health': '425', 'Max Mana': '200' }, image: getItemImage('wish-granting-pearl'), passive: '' },
];

export const STREAMER_TIER_LISTS: NamedTierList[] = [
  {
    id: 'weak3n-s1',
    name: 'Weak3n S1 Jungle Tier List',
    author: 'Weak3n',
    description: 'The definitive jungle tier list for Season 1. Based on high MMR ranked play and competitive scrims.',
    date: 'Jan 2025',
    streamerInfo: {
      platform: 'twitch',
      url: 'https://www.twitch.tv/weak3n',
      isLive: true,
      secondaryUrl: 'https://www.youtube.com/@Weak3n'
    },
    data: {
      [TierRank.S]: ['loki:base', 'bellona:base'],
      [TierRank.A]: ['ymir:base'],
      [TierRank.B]: ['zeus:base', 'anubis:base'],
      [TierRank.C]: [],
      [TierRank.D]: [],
      pool: []
    }
  },
    {
    id: 'weak3n-s2',
    name: 'Weak3n S1 Jungle Tier List',
    author: 'Weak3n',
    description: 'The definitive jungle tier list for Season 1. Based on high MMR ranked play and competitive scrims.',
    date: 'Jan 2025',
    streamerInfo: {
      platform: 'twitch',
      url: 'https://www.twitch.tv/weak3n',
      isLive: true,
      secondaryUrl: 'https://www.youtube.com/@Weak3n'
    },
    data: {
      [TierRank.S]: ['loki:base', 'bellona:base'],
      [TierRank.A]: ['ymir:base'],
      [TierRank.B]: ['zeus:base', 'anubis:base'],
      [TierRank.C]: [],
      [TierRank.D]: [],
      pool: []
    }
  }
];