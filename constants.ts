

import { God, Item, DamageType, NamedTierList, TierRank, GodStats, Tournament } from './types';

// Helper to generate placeholder images
const getGodImage = (id: number) => `https://picsum.photos/seed/god${id}/400/600`;
const getItemImage = (id: number) => `https://picsum.photos/seed/item${id}/128/128`;

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
    { id: 'beads', name: 'Purification Beads', cost: 0, type: 'Relic', category: 'Defense', stats: { Cooldown: '150s' }, image: 'https://image2url.com/images/1764301241677-32065ec4-dfa1-4d2f-9656-b624425afdd8.png', passive: 'ACTIVE: Become Immune to Crowd Control for 2s.' },
    { id: 'aegis', name: 'Aegis of Acceleration', cost: 0, type: 'Relic', category: 'Defense', stats: { Cooldown: '140s' }, image: 'https://image2url.com/images/1764301228981-6b08accd-b990-4225-bb7c-619122ef06cf.png', passive: 'ACTIVE: Become Immune to damage and healing for 1.5s. Can only Move. On god Damage prevented: +7% Movement Speed for 6s (Max 3x).' },
    { id: 'blink', name: 'Blink Rune', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '140s' }, image: 'https://image2url.com/images/1764301216527-943eeb78-a296-4f93-bcf9-b67bbc9ad474.png', passive: 'ACTIVE: Teleport up to 5.6m. Cannot be used for 3s after dealing or taking God damage. Can be used while casting. Damage or Kill a God within 4s of use: -30s Cooldown.' },
    { id: 'phantom', name: 'Phantom Shell', cost: 0, type: 'Relic', category: 'Defense', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764301202457-7238a56f-335b-4a93-945c-d359c4f8b9be.png', passive: 'ACTIVE: Shield yourself and allies within 5.6m for +100 (+10 per Level) for 3s. Affected Gods: Take 20% (+1% per Level) reduced Attack Damage. Can pass through players and player-made walls.' },
    { id: 'sundering', name: 'Sundering Arc', cost: 0, type: 'Relic', category: 'Offense', stats: { Cooldown: '120s' }, image: 'https://image2url.com/images/1764301188191-afb6d8d5-c82c-4373-b07d-f94b07bc21b4.png', passive: 'ACTIVE: Deal 175 (+25 per Level, caps at 500 at Level 13) True Damage to Jungle Monsters/Bosses. Bleed Gods, dealing 25 (+4 per Level) True Damage 3 times over 2s. -30s Cooldown if only used on Jungle Monsters/Bosses.' },
    { id: 'agility', name: 'Agility Relic', cost: 0, type: 'Relic', category: 'Utility', stats: { Cooldown: '20s' }, image: 'https://image2url.com/images/1764301175084-a0a47b02-42a4-468e-afc7-1bfb319a4c60.png', passive: 'PASSIVE: Ranged Gods: +40% Attack projectile speed. Melee Gods: -15% Attack movement penalty. ACTIVE: Dash in the direction you are currently moving.' },

    // --- CONSUMABLES ---
    { id: 'hp-pot', name: 'Health Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(12), passive: 'Consume: +10 Heal/s for 22s.' },
    { id: 'mana-pot', name: 'Mana Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(13), passive: 'Consume: +12 Mana/s for 14s.' },
    { id: 'multi-pot', name: 'Multi Potion', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(14), passive: 'Consume: +5 Heal/s and +5 Mana/s for 22s.' },
    { id: 'ward', name: 'Vision Ward', cost: 50, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(15), passive: 'Place Ward (7.2m). Lasts 120s.' },
    { id: 'sentry', name: 'Sentry Ward', cost: 120, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(16), passive: 'Place Ward (7.2m). Reveals enemies AND wards. Lasts 120s.' },
    { id: 'ward-chalice', name: 'Warding Chalice', cost: 400, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(17), passive: 'Place Ward. Refills at base (2 charges).' },
    { id: 'hp-chalice', name: 'Health Chalice', cost: 300, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(18), passive: 'Heal 10/s for 22s. Refills at base (3 charges).' },
    { id: 'elixir-strength', name: 'Elixir of Strength', cost: 3000, type: 'Consumable', category: 'Offense', stats: {}, image: getItemImage(64), passive: 'Grants +50 Strength. Lasts 6m.' },
    { id: 'elixir-intelligence', name: 'Elixir of Intelligence', cost: 3000, type: 'Consumable', category: 'Offense', stats: {}, image: getItemImage(65), passive: 'Grants +80 Intelligence. Lasts 6m.' },
    { id: 'eyes-jungle', name: 'Eyes of the Jungle', cost: 0, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(19), passive: 'Ping all enemy Gods on minimap.' },
    { id: 'runic-bomb', name: 'Runic Bomb', cost: 0, type: 'Map Droppable', category: 'Offense', stats: {}, image: getItemImage(20), passive: 'Throw bomb: 1000 True Dmg to structures, 300 Phys to enemies + Knockback.' },
    { id: 'crystal-egg', name: 'Crystalline Egg', cost: 0, type: 'Consumable', category: 'Utility', stats: {}, image: getItemImage(21), passive: 'Summon 2 Naga familiars to attack target.' },
    { id: 'obsidian-dagger', name: 'Obsidian Dagger', cost: 0, type: 'Map Droppable', category: 'Offense', stats: {}, image: getItemImage(22), passive: 'Take 500 True Dmg. Gain +15% Dmg/Atk Speed for 9s. If you would die, heal instead.' },

    // --- TIER 1 STARTERS ---
    { id: 'selflessness', name: 'Selflessness', cost: 550, type: 'Starter', category: 'Defense', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10', 'Max Health': '60' }, image: getItemImage(100), passive: 'Assist: Bonus Gold/Heal. Ally CC\'d: Shield them.' },
    { id: 'war-flag', name: 'War Flag', cost: 550, type: 'Starter', category: 'Utility', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10', 'Max Health': '60' }, image: getItemImage(101), passive: 'Assist: Gold/Heal/Mana. Allies gain Move/Atk Speed.' },
    { id: 'bumbas-cudgel', name: 'Bumba\'s Cudgel', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Max Health': '75', 'Max Mana': '50', 'Adaptive': '15|20' }, image: getItemImage(102), passive: '+50% Dmg to Jungle. Heal on Jungle kill.' },
    { id: 'warriors-axe', name: 'Warrior\'s Axe', cost: 650, type: 'Starter', category: 'Defense', stats: { 'Strength': '12', 'Phys. Prot': '10', 'Mag. Prot': '10' }, image: getItemImage(103), passive: 'Damage God: Steal 30 Health/Mana + True Dmg. CD 8s.' },
    { id: 'bluestone', name: 'Bluestone Pendant', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'HP5': '2.5', 'MP5': '2' }, image: getItemImage(104), passive: 'Abilities deal bonus Physical DoT.' },
    { id: 'gilded-arrow', name: 'Gilded Arrow', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Atk Speed': '10%', 'Basic Dmg': '20' }, image: getItemImage(105), passive: 'Mark Minion. Kill for bonus Gold/Atk Speed.' },
    { id: 'bumbas-dagger', name: 'Bumba\'s Golden Dagger', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Max Health': '50', 'Atk Speed': '10%', 'Adaptive': '15|20' }, image: getItemImage(106), passive: 'Jungle Dmg + Cleave Basics.' },
    { id: 'leather-cowl', name: 'Leather Cowl', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'Lifesteal': '4%' }, image: getItemImage(107), passive: 'Near Ally: Atk Speed. Alone: Move Speed.' },
    { id: 'sands-time', name: 'Sands of Time', cost: 650, type: 'Starter', category: 'Utility', stats: { 'Intelligence': '25', 'MP5': '2', 'Cooldown': '10' }, image: getItemImage(108), passive: 'Mana Regen increases with missing Mana.' },
    { id: 'vampiric', name: 'Vampiric Shroud', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '20', 'Max Health': '100' }, image: getItemImage(109), passive: 'Ability Hit: Restore Health/Mana.' },
    { id: 'conduit', name: 'Conduit Gem', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '30', 'Max Mana': '100', 'MP5': '1' }, image: getItemImage(110), passive: 'Gain stacks. Abilities deal bonus True Dmg per stack.' },
    { id: 'deaths-toll', name: 'Death\'s Toll', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'Max Health': '100' }, image: getItemImage(111), passive: 'Basics restore Health/Mana.' },

    // --- TIER 2 STARTERS (UPGRADED) ---
    { id: 'heroism', name: 'Heroism', cost: 1800, type: 'Starter', category: 'Defense', stats: { 'Phys. Prot': '30', 'Mag. Prot': '30', 'Max Health': '200' }, image: getItemImage(112), passive: 'Ally Hard CC: Shield them (50+10% HP).', buildsFrom: ['selflessness'] },
    { id: 'war-banner', name: 'War Banner', cost: 1800, type: 'Starter', category: 'Utility', stats: { 'Phys. Prot': '30', 'Mag. Prot': '30', 'Max Health': '200' }, image: getItemImage(113), passive: 'Assist: Buff team Move/Atk Speed.', buildsFrom: ['war-flag'] },
    { id: 'sundering-axe', name: 'Sundering Axe', cost: 2150, type: 'Starter', category: 'Defense', stats: { 'Strength': '30', 'Phys. Prot': '30', 'Mag. Prot': '30' }, image: getItemImage(114), passive: 'Dmg God: Steal Health + Bonus True Dmg.', buildsFrom: ['warriors-axe'] },
    { id: 'bluestone-brooch', name: 'Bluestone Brooch', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '30', 'Max Health': '200', 'HP5': '7', 'MP5': '5' }, image: getItemImage(115), passive: 'Abilities deal % Current HP Dmg.', buildsFrom: ['bluestone'] },
    { id: 'sharpshooter', name: 'Sharpshooter\'s Arrow', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Basic Power': '40', 'Atk Speed': '15%', 'Crit Chance': '15%' }, image: getItemImage(116), passive: 'Gold Gain. +Atk Dmg to far targets.', buildsFrom: ['gilded-arrow'] },
    { id: 'bumbas-spear', name: 'Bumba\'s Spear', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Max Health': '200', 'Atk Speed': '25%', 'Adaptive': '35|60' }, image: getItemImage(117), passive: 'Jungle Dmg. Kill Jungle: +Power.', buildsFrom: ['bumbas-cudgel'] },
    { id: 'bumbas-hammer', name: 'Bumba\'s Hammer', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Max Health': '200', 'Cooldown': '10', 'Adaptive': '35|60' }, image: getItemImage(118), passive: 'Ability -> Basic: True Dmg + CD Reduction + Heal.', buildsFrom: ['bumbas-cudgel'] },
    { id: 'hunters-cowl', name: 'Hunter\'s Cowl', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '45', 'Lifesteal': '5%' }, image: getItemImage(119), passive: 'Aura: Atk Speed/Lifesteal. Alone: Move Speed.', buildsFrom: ['leather-cowl'] },
    { id: 'deaths-embrace', name: 'Death\'s Embrace', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '40', 'Max Health': '150', 'Lifesteal': '5%' }, image: getItemImage(120), passive: 'Basics restore % Health/Mana. Reduce CD.', buildsFrom: ['deaths-toll'] },
    { id: 'pendulum', name: 'Pendulum of Ages', cost: 2150, type: 'Starter', category: 'Utility', stats: { 'Intelligence': '70', 'MP5': '4', 'Cooldown': '20' }, image: getItemImage(121), passive: 'MP5 per missing Mana. Int per Mana.', buildsFrom: ['sands-time'] },
    { id: 'archmage', name: 'Archmage\'s Gem', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '90', 'Max Mana': '150', 'MP5': '4' }, image: getItemImage(122), passive: 'Ability Hit: Bonus % Int Dmg (CD 20s).', buildsFrom: ['conduit'] },
    { id: 'blood-shroud', name: 'Blood-soaked Shroud', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '60', 'Max Health': '275' }, image: getItemImage(123), passive: 'Ability Hit: Heal %HP/Mana. Heal increases with kills.', buildsFrom: ['vampiric'] },

    // --- TIER 1 ITEMS ---
    { id: 'bow', name: 'Bow', cost: 300, tier: 1, type: 'Item', category: 'Offense', stats: { 'Attack Speed': '5%' }, image: 'https://image2url.com/images/1764300473285-75232b1a-9715-4131-84d2-86df45e9bc4c.webp',
    { id: 'circlet', name: 'Circlet', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'Max Mana': '150' }, image: 'https://image2url.com/images/1764300446371-4508f190-4aa1-49ef-b269-d3152c46a5f5.webp',
    { id: 'medallion', name: 'Medallion', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Max Health': '75' }, image: 'https://image2url.com/images/1764300409667-c6bcc9ff-5574-4d6b-86cc-0cd7ea741693.webp',
    { id: 'rune', name: 'Rune', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '7' }, image: 'https://image2url.com/images/1764300358591-e4963a19-98a2-4d5f-ac5f-1bba2b4b5085.webp',
    { id: 'shield', name: 'Shield', cost: 300, tier: 1, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '6' }, image: 'https://image2url.com/images/1764300276797-a211e51b-ce8f-4d7e-aacf-1fa4d3986ff9.webp',
    { id: 'reliquary', name: 'Reliquary', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'MP5': '2' }, image: 'https://image2url.com/images/1764300393312-24ed5e08-e67f-4fd2-9efa-34be108595f3.webp',
    { id: 'sash', name: 'Sash', cost: 300, tier: 1, type: 'Item', category: 'Utility', stats: { 'HP5': '2' }, image: 'https://image2url.com/images/1764300323569-45636ba7-4e96-44c9-9f86-8808315c2e1b.webp',
    { id: 'ring', name: 'Ring', cost: 400, tier: 1, type: 'Item', category: 'Utility', stats: { 'Cooldown': '5' }, image: 'https://image2url.com/images/1764300372648-4aa67ffc-8b8f-4031-a518-9566176e25fd.webp',
    { id: 'axe', name: 'Axe', cost: 450, tier: 1, type: 'Item', category: 'Offense', stats: { 'Strength': '10' }, image: 'https://image2url.com/images/1764299986685-0b247359-c8fb-4120-ab2a-a3dec285b243.webp',
    { id: 'gem', name: 'Gem', cost: 450, tier: 1, type: 'Item', category: 'Offense', stats: { 'Intelligence': '15' }, image: 'https://image2url.com/images/1764300431615-91c5aa11-7f97-443a-ba1c-e6ae087670eb.webp',
    { id: 'scythe', name: 'Scythe', cost: 550, tier: 1, type: 'Item', category: 'Offense', stats: { 'Lifesteal': '4%' }, image: 'https://image2url.com/images/1764300304236-1349a875-8c93-49ea-881b-41597dfb8275.webp',
    { id: 'sabre', name: 'Sabre', cost: 550, tier: 1, type: 'Item', category: 'Offense', stats: { 'Crit Chance': '7%' }, image: 'https://image2url.com/images/1764300323569-45636ba7-4e96-44c9-9f86-8808315c2e1b.webp',

    // --- TIER 2 ITEMS ---
    { id: 'manchu-bow', name: 'Manchu Bow', cost: 950, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Atk Speed': '8%' }, image: getItemImage(300), passive: 'Attacks deal +10 Phys Dmg.', buildsFrom: ['axe', 'bow'] },
    { id: 'hunter-bow', name: 'Hunter\'s Bow', cost: 750, tier: 2, type: 'Item', category: 'Offense', stats: { 'Atk Speed': '15%' }, image: getItemImage(301), passive: 'Attack Speed', buildsFrom: ['bow'] },
    { id: 'mana-tome', name: 'Mana Tome', cost: 500, tier: 2, type: 'Item', category: 'Utility', stats: { 'Max Mana': '250', 'MP5': '2' }, image: getItemImage(302), passive: 'Mana & Regen', buildsFrom: ['circlet'] },
    { id: 'oracle-staff', name: 'Oracle Staff', cost: 950, tier: 2, type: 'Item', category: 'Utility', stats: { 'Intelligence': '20', 'Max Mana': '150', 'MP5': '1' }, image: getItemImage(303), passive: 'Kill/Assist: +25% Mana', buildsFrom: ['gem', 'circlet'] },
    { id: 'killing-stone', name: 'Killing Stone', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '35' }, image: getItemImage(304), passive: 'Intelligence', buildsFrom: ['gem'] },
    { id: 'enchanted-bracelet', name: 'Enchanted Bracelet', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Intelligence': '20', 'Atk Speed': '8%' }, image: getItemImage(305), passive: 'Int & Atk Speed', buildsFrom: ['gem', 'bow'] },
    { id: 'battle-axe', name: 'Battle Axe', cost: 1050, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '15', 'Max Health': '100', 'MP5': '1' }, image: getItemImage(306), passive: 'Kill/Assist: +25% Mana', buildsFrom: ['axe', 'medallion'] },
    { id: 'infused-axe', name: 'Infused Axe', cost: 900, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '15', 'Max Mana': '150', 'MP5': '1' }, image: getItemImage(307), passive: 'Kill/Assist: +25% Mana', buildsFrom: ['axe', 'circlet'] },
    { id: 'skeggox', name: 'Skeggox', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '25' }, image: getItemImage(308), passive: 'Strength', buildsFrom: ['axe'] },
    { id: 'kopesh', name: 'Kopesh', cost: 1250, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Crit Chance': '10%' }, image: getItemImage(309), passive: 'Crit Strike: +Move Speed', buildsFrom: ['axe', 'sabre'] },
    { id: 'caestus', name: 'Caestus', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Cooldown': '10' }, image: getItemImage(310), passive: 'Hard CC: +Prots', buildsFrom: ['axe', 'ring'] },
    { id: 'zither', name: 'Zither', cost: 1100, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '12', 'Intelligence': '20' }, image: getItemImage(311), passive: 'Omni-Power', buildsFrom: ['axe', 'gem'] },
    { id: 'stalwart-sigil', name: 'Stalwart Sigil', cost: 1150, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '15', 'Mag. Prot': '15' }, image: getItemImage(312), passive: 'Omni-Protect', buildsFrom: ['shield', 'rune'] },
    { id: 'sages-ring', name: 'Sage\'s Ring', cost: 800, tier: 2, type: 'Item', category: 'Utility', stats: { 'Mag. Prot': '12', 'Cooldown': '10' }, image: getItemImage(313), passive: 'CDR & Prot', buildsFrom: ['ring', 'rune'] },
    { id: 'medal-defense', name: 'Medal of Defense', cost: 850, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Max Health': '125' }, image: getItemImage(314), passive: 'Defense', buildsFrom: ['shield', 'medallion'] },
    { id: 'veve-charm', name: 'Veve Charm', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Max Health': '240' }, image: getItemImage(315), passive: 'Health', buildsFrom: ['medallion', 'sash'] },
    { id: 'odigba', name: 'Odigba', cost: 800, tier: 2, type: 'Item', category: 'Utility', stats: { 'Max Health': '125', 'Max Mana': '150' }, image: getItemImage(316), passive: 'Assist: Heal', buildsFrom: ['medallion', 'circlet'] },
    { id: 'medal-disruption', name: 'Medal of Disruption', cost: 850, tier: 2, type: 'Item', category: 'Defense', stats: { 'Mag. Prot': '12', 'Max Health': '150' }, image: getItemImage(317), passive: 'Defense', buildsFrom: ['rune', 'medallion'] },
    { id: 'adamantine-sickle', name: 'Adamantine Sickle', cost: 1000, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '10', 'Lifesteal': '5%' }, image: getItemImage(318), passive: 'Low HP: +Strength', buildsFrom: ['axe', 'scythe'] },
    { id: 'cursed-sickle', name: 'Cursed Sickle', cost: 850, tier: 2, type: 'Item', category: 'Offense', stats: { 'Lifesteal': '7.5%' }, image: getItemImage(319), passive: 'Lifesteal', buildsFrom: ['scythe'] },
    { id: 'lucerne-hammer', name: 'Lucerne Hammer', cost: 1250, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '35' }, image: getItemImage(320), passive: 'Heavy Hitter', buildsFrom: ['skeggox'] },
    { id: 'hooked-sword', name: 'Hooked Sword', cost: 950, tier: 2, type: 'Item', category: 'Offense', stats: { 'Crit Chance': '15%' }, image: getItemImage(321), passive: 'Crit', buildsFrom: ['sabre'] },
    { id: 'adroit-ring', name: 'Adroit Ring', cost: 800, tier: 2, type: 'Item', category: 'Utility', stats: { 'Cooldown': '10' }, image: getItemImage(322), passive: 'CDR', buildsFrom: ['ring'] },
    { id: 'legionnaire-armor', name: 'Legionnaire Armor', cost: 750, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '18' }, image: getItemImage(323), passive: 'Prot', buildsFrom: ['shield'] },
    { id: 'captains-ring', name: 'Captain\'s Ring', cost: 800, tier: 2, type: 'Item', category: 'Defense', stats: { 'Phys. Prot': '10', 'Cooldown': '10' }, image: getItemImage(324), passive: 'Prot & CDR', buildsFrom: ['shield', 'ring'] },
    { id: 'amulet-power', name: 'Amulet of Power', cost: 1100, tier: 2, type: 'Item', category: 'Offense', stats: { 'Strength': '20', 'Intelligence': '30' }, image: getItemImage(325), passive: 'Omni', buildsFrom: ['axe', 'gem'] },

    // --- TIER 3 ITEMS ---
    // Books
   { 
  id: 'blood-bound', 
  name: 'Blood-Bound Book', 
  cost: 2250, 
  tier: 3, 
  type: 'Item', 
  category: 'Offense', 
  stats: { 'Intelligence': '60', 'Lifesteal': '7.5%' }, 
  image: 'https://image2url.com/images/1764299602168-50dc4c45-cb88-4d32-89e7-9391d6ed9e4e.png', 
  passive: 'Active: +Health Shield for 6s. Shield = 7.5% Max Health & 75% Intelligence from items. While Shielded: +10% Lifesteal. Cooldown: 80s. Kill a God: -25% Cooldown.', 
  buildsFrom: ['cursed-sickle', 'killing-stone'] 
},
    { id: 'book-thoth', name: 'Book of Thoth', cost: 2650, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '30', 'Mana': '350', 'MP5': '4' }, image: getItemImage(502), passive: 'Gain Int (5% Mana). Stacks on kill: +10 Mana (Max 50). Evolve: +20 Int +100 Mana + 2% Mana to Int.', buildsFrom: ['mana-tome'] },
    { id: 'bancrofts', name: 'Bancroft\'s Talon', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '55', 'Mana': '150', 'MP5': '2', 'Lifesteal': '7.5%' }, image: getItemImage(503), passive: 'Gain Int/Lifesteal from missing HP.', buildsFrom: ['cursed-sickle', 'mana-tome'] },
    { id: 'gluttonous', name: 'Gluttonous Grimoire', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '40', 'Health': '150', 'Lifesteal': '7.5%' }, image: getItemImage(504), passive: 'Store Lifesteal healing as bonus Dmg on next attack.', buildsFrom: ['cursed-sickle', 'medallion'] },
    { id: 'necronomicon', name: 'Necronomicon', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '50', 'Mana': '300', 'MP5': '5' }, image: getItemImage(505), passive: 'God Kill/Assist: +30 Int (Max 6 stacks). Lose 4 on death.', buildsFrom: ['mana-tome'] },
    { id: 'soul-reaver', name: 'Soul Reaver', cost: 2750, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '60', 'Mana': '250', 'MP5': '5' }, image: getItemImage(506), passive: 'Abilities deal % Max Health Dmg.', buildsFrom: ['mana-tome', 'killing-stone'] },

    // Bows
    { id: 'eros-bow', name: 'Eros\' Bow', cost: 2300, tier: 3, type: 'Item', category: 'Offense', stats: { 'Health': '300', 'Atk Speed': '30%' }, image: getItemImage(507), passive: 'Active: Mark ally. Heal marked ally on hit.', buildsFrom: ['hunter-bow', 'medallion'] },
    { id: 'sun-beam', name: 'Sun Beam Bow', cost: 2450, tier: 3, type: 'Item', category: 'Offense', stats: { 'Atk Speed': '10%', 'Adaptive': '40|55' }, image: getItemImage(508), passive: 'Active: Fire +2 projectiles per attack. Drains Mana.', buildsFrom: ['manchu-bow'] },
    { id: 'odysseus-bow', name: 'Odysseus\' Bow', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Atk Speed': '45%' }, image: getItemImage(509), passive: 'Every 4th hit: Chain Lightning (15+60% Dmg).', buildsFrom: ['hunter-bow', 'bow'] },
    { id: 'lernaean-bow', name: 'Lernaean Bow', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '40', 'Atk Speed': '30%' }, image: getItemImage(510), passive: 'Active: Fire 3 piercing arrows.', buildsFrom: ['manchu-bow'] },

    // Blades & Crit
    { id: 'rage', name: 'Rage', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '30', 'Crit Chance': '20%' }, image: getItemImage(511), passive: 'Kill/Assist: +4% Crit (Max 20%). Evolve: +10% Crit.', buildsFrom: ['hooked-sword', 'skeggox'] },
    { id: 'deathbringer', name: 'Deathbringer', cost: 2900, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Crit Chance': '20%' }, image: getItemImage(512), passive: '+35% Crit Damage.', buildsFrom: ['kopesh'] },
    { id: 'demon-blade', name: 'Demon Blade', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '30', 'Atk Speed': '15%', 'Crit Chance': '15%' }, image: getItemImage(513), passive: 'Crit: +30% Atk Speed for 3s.', buildsFrom: ['kopesh', 'bow'] },
    { id: 'musashi', name: 'Musashi\'s Dual Swords', cost: 2700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Crit Chance': '30%' }, image: getItemImage(514), passive: 'Crit: +15% Move Speed.', buildsFrom: ['hooked-sword'] },
    { id: 'crusher', name: 'The Crusher', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '60', 'Cooldown': '15' }, image: getItemImage(515), passive: 'Ability Hit: Phys DoT (35% Str).', buildsFrom: ['caestus', 'skeggox'] },
    { id: 'arondight', name: 'Arondight', cost: 2700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '55', 'Cooldown': '15' }, image: getItemImage(516), passive: 'Active: Reveal enemies. Speed towards them. First hit bonus dmg.', buildsFrom: ['caestus', 'skeggox'] },

    // Cooldown & Magic
    { id: 'chronos-pendant', name: 'Chronos\' Pendant', cost: 2600, tier: 3, type: 'Item', category: 'Utility', stats: { 'Intell': '55', 'Cooldown': '25' }, image: getItemImage(517), passive: 'Every 10s: -1s Cooldowns.', buildsFrom: ['adroit-ring', 'killing-stone'] },
    { id: 'gem-focus', name: 'Gem of Focus', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '50', 'Cooldown': '20' }, image: getItemImage(518), passive: 'Cast Ability: +4% Move Speed (Stack 3x).', buildsFrom: ['adroit-ring', 'gem'] },
    { id: 'staff-myrddin', name: 'Staff of Myrddin', cost: 2650, tier: 3, type: 'Item', category: 'Utility', stats: { 'Intell': '70', 'Cooldown': '10' }, image: getItemImage(519), passive: 'Active: Next Ability has no CD.', buildsFrom: ['adroit-ring', 'killing-stone'] },
    { id: 'spear-deso', name: 'Spear of Desolation', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '100', 'Cooldown': '10' }, image: getItemImage(520), passive: 'Kill/Assist: -3s CD (-10s Ult).', buildsFrom: ['killing-stone', 'adroit-ring'] },
    { id: 'world-stone', name: 'The World Stone', cost: 2700, tier: 3, type: 'Item', category: 'Utility', stats: { 'Intell': '70', 'Mana': '250', 'MP5': '3' }, image: getItemImage(521), passive: '-30% Ult Cooldown.', buildsFrom: ['mana-tome', 'killing-stone'] },
    { id: 'jotunns', name: 'Jotunn\'s Revenge', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '40', 'Cooldown': '25' }, image: getItemImage(522), passive: 'Kill/Assist: -1s CD (-5s Ult).', buildsFrom: ['caestus'] },
    { id: 'hydra', name: 'Hydra\'s Lament', cost: 2450, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Mana': '200', 'MP5': '4', 'Cooldown': '10' }, image: getItemImage(523), passive: 'Ability -> Basic: +30% Dmg.', buildsFrom: ['caestus', 'infused-axe'] },
    { id: 'pendulum-blade', name: 'Pendulum Blade', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '45', 'Cooldown': '10' }, image: getItemImage(524), passive: 'Active: -4s Cooldowns.', buildsFrom: ['caestus'] },

    // Attack Speed / Proc
    { id: 'frenzy', name: 'Dagger of Frenzy', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Atk Speed': '10%' }, image: getItemImage(525), passive: 'Active: +10 Dmg, +50% Atk Speed (6 attacks).', buildsFrom: ['manchu-bow'] },
    { id: 'hastened', name: 'Hastened Fatalis', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '20', 'Atk Speed': '25%' }, image: getItemImage(526), passive: 'Hit God: Remove Move Penalty.', buildsFrom: ['hunter-bow'] },
    { id: 'devourer', name: 'Devourer\'s Gauntlet', cost: 2450, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Lifesteal': '5%' }, image: getItemImage(527), passive: 'Stacks on minion kill (+Str/Life). Evolve at 75.', buildsFrom: ['adamantine-sickle'] },
    { id: 'reaper', name: 'The Reaper', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '65', 'Lifesteal': '10%' }, image: getItemImage(528), passive: 'Kill God: Heal 15% HP.', buildsFrom: ['adamantine-sickle', 'skeggox'] },
    { id: 'riptalon', name: 'Riptalon', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Atk Speed': '20%', 'Lifesteal': '7.5%', 'Basic Power': '25' }, image: getItemImage(529), passive: 'HP Thresholds boost Dmg/Lifesteal.', buildsFrom: ['hunter-bow', 'scythe'] },

    // Pen / Anti-Tank
    { id: 'titan', name: 'Titan\'s Bane', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '50' }, image: getItemImage(530), passive: 'Shattering: +35% Pen.', buildsFrom: ['lucerne-hammer'] },
    { id: 'obsidian', name: 'Obsidian Shard', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '60' }, image: getItemImage(531), passive: 'Shattering: +35% Pen.', buildsFrom: ['killing-stone', 'gem'] },
    { id: 'totem-death', name: 'Totem of Death', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '60', 'Cooldown': '15' }, image: getItemImage(532), passive: 'Ability Hit: Apply Piercing (Shred Prots).', buildsFrom: ['adroit-ring', 'killing-stone'] },
    { id: 'divine', name: 'Divine Ruin', cost: 2350, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '95' }, image: getItemImage(533), passive: 'Hit God: Chain Lightning + Mark.', buildsFrom: ['killing-stone'] },
    { id: 'qins', name: 'Qin\'s Blade', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '20', 'Atk Speed': '25%' }, image: getItemImage(534), passive: 'Basics deal % Max Health dmg.', buildsFrom: ['manchu-bow'] },
    { id: 'heartseeker', name: 'Heartseeker', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '55', 'Mana': '250', 'MP5': '2' }, image: getItemImage(535), passive: 'Ability Hit: % Max Health Phys Dmg.', buildsFrom: ['skeggox', 'infused-axe'] },
    { id: 'transcendence', name: 'Transcendence', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '35', 'Mana': '400', 'MP5': '4' }, image: getItemImage(536), passive: 'Gain Str (3% Mana). Stacks on kill. Evolve: +15 Str +100 Mana.', buildsFrom: ['infused-axe'] },
    { id: 'rod-tahuti', name: 'Rod of Tahuti', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '85', 'Mana': '250', 'MP5': '2' }, image: getItemImage(537), passive: '+25% Intelligence.', buildsFrom: ['killing-stone', 'oracle-staff'] },

    // Defense & Tank
    { id: 'thebes', name: 'Gauntlet of Thebes', cost: 2600, tier: 3, type: 'Item', category: 'Defense', stats: { 'Health': '200', 'Mana': '150' }, image: getItemImage(601), passive: 'Stacks on Assist. Evolve: +200 HP, +10 Prot Aura.', buildsFrom: ['medal-defense'] },
    { id: 'prophetic', name: 'Prophetic Cloak', cost: 2700, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '22', 'Mag Prot': '22', 'Cooldown': '10' }, image: getItemImage(602), passive: 'Dmg God: Stack Prots. Evolve: Mitigation Aura.', buildsFrom: ['stalwart-sigil'] },
    { id: 'spirit-robe', name: 'Spirit Robe', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '25', 'Mag Prot': '25' }, image: getItemImage(603), passive: 'Hit by Hard CC: Gain Prots + Heal.', buildsFrom: ['stalwart-sigil'] },
    { id: 'magi', name: 'Magi\'s Cloak', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '35', 'Mag Prot': '35' }, image: getItemImage(604), passive: 'Every 90s: Block Hard CC + Immunity.', buildsFrom: ['stalwart-sigil'] },
    { id: 'contagion', name: 'Contagion', cost: 2350, tier: 3, type: 'Item', category: 'Defense', stats: { 'Health': '425', 'HP5': '6' }, image: getItemImage(605), passive: 'Anti-Lifesteal Aura + Damage.', buildsFrom: ['veve-charm'] },
    { id: 'spectral', name: 'Spectral Armor', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '30', 'Health': '400' }, image: getItemImage(606), passive: 'Nearby Enemies: -Crit Dmg, -Atk Speed.', buildsFrom: ['legionnaire-armor', 'medallion'] },
    { id: 'shogun', name: 'Shogun\'s Ofuda', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '30', 'Health': '200', 'Atk Speed': '15%' }, image: getItemImage(607), passive: 'Aura: +20% Atk Speed.', buildsFrom: ['medal-disruption', 'hunter-bow'] },
    { id: 'genji', name: 'Genji\'s Guard', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '50', 'Mana': '200', 'MP5': '5', 'Cooldown': '15' }, image: getItemImage(608), passive: 'Hit by Magic Dmg: -3s Cooldowns.', buildsFrom: ['sages-ring'] },
    { id: 'oni', name: 'Oni Hunter\'s Garb', cost: 2450, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '40', 'Health': '150', 'Mana': '200', 'MP5': '8' }, image: getItemImage(609), passive: 'Enemy God nearby: +Mitigation.', buildsFrom: ['medal-disruption', 'mana-tome'] },
    { id: 'mantle', name: 'Mantle of Discord', cost: 2800, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '30', 'Mag Prot': '20', 'Cooldown': '10' }, image: getItemImage(610), passive: 'Low HP: Stun Burst + CC Immune.', buildsFrom: ['stalwart-sigil'] },
    { id: 'pridwen', name: 'Glorious Pridwen', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '20', 'Mag Prot': '20', 'Cooldown': '12' }, image: getItemImage(611), passive: 'Active: Explode Dmg, Shield, Explode again.', buildsFrom: ['stalwart-sigil'] },
    { id: 'regrowth', name: 'Regrowth Striders', cost: 2300, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '35', 'MP5': '3', 'Cooldown': '15' }, image: getItemImage(612), passive: 'Heal Self: +Move Speed. Speed Buff: +Heal.', buildsFrom: ['captains-ring'] },
    { id: 'stygian', name: 'Stygian Anchor', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '35', 'Mag Prot': '30' }, image: getItemImage(613), passive: 'Deal God Dmg: Reduce their Speed/Heal.', buildsFrom: ['stalwart-sigil'] },
    { id: 'midgardian', name: 'Midgardian Mail', cost: 2300, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '40', 'Health': '300' }, image: getItemImage(658), passive: 'Hit by Basic: Slow Attacker Move/Atk Speed.', buildsFrom: ['legionnaire-armor', 'medallion'] },
    { id: 'leviathan', name: 'Leviathan\'s Hide', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '40', 'Health': '250' }, image: getItemImage(659), passive: 'Hit by God: Reduce their Dmg. Attack God: Gain Health.', buildsFrom: ['legionnaire-armor', 'medallion'] },
    { id: 'ancile', name: 'Ancile', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '45', 'Health': '250' }, image: getItemImage(660), passive: 'Active: Silence next ability hit. Reduce Dmg taken.', buildsFrom: ['medal-disruption'] },
    { id: 'stampede', name: 'Stampede', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '30', 'Health': '250', 'HP5': '5' }, image: getItemImage(661), passive: 'Active: Team Speed Buff + Slow Immune.', buildsFrom: ['legionnaire-armor', 'veve-charm'] },
    
    // Hybrids & Others
    { id: 'gladiator', name: 'Gladiator\'s Shield', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '25', 'Health': '200', 'Cooldown': '10' }, image: getItemImage(614), passive: 'Abilities deal Bonus Phys Dmg based on Prots.', buildsFrom: ['captains-ring'] },
    { id: 'berserker', name: 'Berserker\'s Shield', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '30', 'Mag Prot': '15', 'Atk Speed': '20%' }, image: getItemImage(615), passive: 'Low HP: Berserk (+Prots, +Atk Speed).', buildsFrom: ['stalwart-sigil'] },
    { id: 'void-stone', name: 'Void Stone', cost: 2350, tier: 3, type: 'Item', category: 'Defense', stats: { 'Intell': '40', 'Mag Prot': '35', 'Health': '150' }, image: getItemImage(616), passive: 'Aura: Reduce Enemy Mag Prot.', buildsFrom: ['medal-disruption'] },
    { id: 'void-shield', name: 'Void Shield', cost: 2350, tier: 3, type: 'Item', category: 'Defense', stats: { 'Strength': '25', 'Phys Prot': '30', 'Health': '150' }, image: getItemImage(617), passive: 'Aura: Reduce Enemy Phys Prot.', buildsFrom: ['medal-defense'] },
    { id: 'shifter', name: 'Shifter\'s Shield', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '15', 'Mag Prot': '15', 'Health': '300', 'Adaptive': '45|55' }, image: getItemImage(618), passive: 'High HP: Power. Low HP: Prots.', buildsFrom: ['stalwart-sigil'] },
    { id: 'binding', name: 'Stone of Binding', cost: 2300, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '25', 'Phys Prot': '35' }, image: getItemImage(619), passive: 'Hard CC: Shred Enemy Prots.', buildsFrom: ['stalwart-sigil'] },
    { id: 'asclepius', name: 'Rod of Asclepius', cost: 2500, tier: 3, type: 'Item', category: 'Utility', stats: { 'Intell': '55', 'Health': '225', 'HP5': '3' }, image: getItemImage(620), passive: 'Active: Heal Allies. Bonus if debuffed.', buildsFrom: ['veve-charm', 'gem'] },
    { id: 'pharaohs', name: 'Pharaoh\'s Curse', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '35', 'Mag Prot': '25', 'Atk Speed': '15%' }, image: getItemImage(662), passive: 'Active: Debuff enemies (-Shields, -Speed, -Atk Speed).', buildsFrom: ['stalwart-sigil', 'hunter-bow'] },
    { id: 'erosion', name: 'Erosion', cost: 2350, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '30', 'Mag Prot': '20', 'Health': '250' }, image: getItemImage(663), passive: 'Aura: Reduce enemy shields. Gain Prots when reducing shields.', buildsFrom: ['stalwart-sigil'] },
    { id: 'polynomicon', name: 'Polynomicon', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '75', 'Mana': '200', 'MP5': '3' }, image: getItemImage(664), passive: 'Ability -> Basic: Bonus Magical Dmg (60% Int).', buildsFrom: ['mana-tome'] },
    
    // New Actives
    { id: 'dominion', name: 'Scepter of Dominion', cost: 2600, tier: 3, type: 'Item', category: 'Utility', stats: { 'Intell': '30', 'Health': '150', 'Mana': '200', 'MP5': '3' }, image: getItemImage(621), passive: 'Active: Stasis Zone.', buildsFrom: ['oracle-staff'] },
    { id: 'lifebinder', name: 'Lifebinder', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '60', 'Health': '300', 'HP5': '3' }, image: getItemImage(622), passive: 'Active: Mark Enemy. Ally Hit Heals/Shields.', buildsFrom: ['veve-charm', 'killing-stone'] },
    { id: 'shield-splitter', name: 'Shield Splitter', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '40', 'Phys Prot': '25', 'Mag Prot': '20' }, image: getItemImage(623), passive: 'Active: True Dmg + Shred Shields.', buildsFrom: ['stalwart-sigil', 'axe'] },
    { id: 'hexstone', name: 'Circe\'s Hexstone', cost: 2600, tier: 3, type: 'Item', category: 'Defense', stats: { 'Health': '250', 'HP5': '4', 'Cooldown': '10' }, image: getItemImage(624), passive: 'Active: Self Poly + Dash + Dmg.', buildsFrom: ['veve-charm'] },
    { id: 'effigy', name: 'Xibalban Effigy', cost: 2600, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '30', 'Mag Prot': '30', 'Mana': '300', 'MP5': '4' }, image: getItemImage(625), passive: 'Active: Take % Dmg later (Mitigation).', buildsFrom: ['stalwart-sigil'] },
    { id: 'radiance', name: 'Helm of Radiance', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Intell': '65', 'Phys Prot': '35' }, image: getItemImage(626), passive: 'Take Phys Dmg: +Phys Prot.', buildsFrom: ['legionnaire-armor', 'killing-stone'] },
    { id: 'darkness', name: 'Helm of Darkness', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Intell': '40', 'Phys Prot': '20', 'Mag Prot': '25' }, image: getItemImage(627), passive: 'Active: Stealth + Pass Through.', buildsFrom: ['stalwart-sigil'] },
    { id: 'negation', name: 'Sphere of Negation', cost: 2600, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '70', 'Intell': '40' }, image: getItemImage(628), passive: 'Gain Magical Shield periodically.', buildsFrom: ['medal-disruption', 'killing-stone'] },
    { id: 'wish-pearl', name: 'Wish-Granting Pearl', cost: 2800, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '120', 'Health': '425', 'Mana': '200' }, image: getItemImage(629), passive: 'Just massive stats.', buildsFrom: ['killing-stone', 'odigba'] },
    { id: 'erebus', name: 'Eye of Erebus', cost: 2500, tier: 3, type: 'Item', category: 'Utility', stats: { 'Health': '250', 'Cooldown': '15', 'Adaptive': '35|50' }, image: getItemImage(630), passive: 'Active: Sentry Eye shoots Enemies.', buildsFrom: ['veve-charm'] },
    { id: 'draconic', name: 'Draconic Scale', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '20', 'Mag Prot': '20', 'Health': '300' }, image: getItemImage(631), passive: 'Dmg by God: Adaptively gain Prots against them.', buildsFrom: ['stalwart-sigil'] },
    { id: 'dreamer', name: 'Dreamer\'s Idol', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '140' }, image: getItemImage(632), passive: 'Active: +25% Int + Immune Displacement.', buildsFrom: ['killing-stone'] },
    { id: 'avatar-parashu', name: 'Avatar\'s Parashu', cost: 2600, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '100' }, image: getItemImage(633), passive: 'Active: +25% Str + Immune Displacement.', buildsFrom: ['skeggox'] },
    { id: 'jade-scepter', name: 'Jade Scepter', cost: 2500, tier: 3, type: 'Item', category: 'Utility', stats: { 'Intell': '90', 'Health': '150' }, image: getItemImage(634), passive: 'Active: Push enemies away.', buildsFrom: ['killing-stone'] },
    { id: 'daybreak', name: 'Daybreak Gavel', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Health': '300', 'Adaptive': '60|80' }, image: getItemImage(635), passive: 'Heal God: Stack Stats. Dmg Ability: Consume stacks for buff.', buildsFrom: ['veve-charm'] },
    { id: 'vital', name: 'Vital Amplifier', cost: 2450, tier: 3, type: 'Item', category: 'Offense', stats: { 'Health': '200', 'HP5': '3', 'Atk Speed': '10%', 'Adaptive': '30|45' }, image: getItemImage(636), passive: 'Heal: +Atk Speed/Dmg.', buildsFrom: ['veve-charm'] },
    { id: 'tekko', name: 'Tekko-Kagi', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '60', 'Cooldown': '10' }, image: getItemImage(637), passive: 'Gain Momentum (Move Speed).', buildsFrom: ['caestus', 'skeggox'] },
    { id: 'bracer-abyss', name: 'Bracer of The Abyss', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '45', 'Atk Speed': '30%' }, image: getItemImage(638), passive: 'Hit God: +Atk Dmg.', buildsFrom: ['enchanted-bracelet'] },
    { id: 'soul-gem', name: 'Soul Gem', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '60', 'Lifesteal': '7.5%', 'Cooldown': '10' }, image: getItemImage(639), passive: '4 Stacks: Deal Bonus Dmg + Heal.', buildsFrom: ['cursed-sickle', 'adroit-ring'] },
    { id: 'typhon', name: 'Typhon\'s Heart', cost: 2700, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '50', 'Lifesteal': '12.5%' }, image: getItemImage(640), passive: 'Stacks on kill. Summon Monster.', buildsFrom: ['cursed-sickle', 'killing-stone'] },
    { id: 'barbed', name: 'Barbed Carver', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '40', 'Lifesteal': '7.5%' }, image: getItemImage(641), passive: 'Ability Hit: Bleed.', buildsFrom: ['scythe', 'skeggox'] },
    { id: 'nimble', name: 'Nimble Ring', cost: 2400, tier: 3, type: 'Item', category: 'Offense', stats: { 'Intell': '35', 'Atk Speed': '20%', 'Lifesteal': '7.5%' }, image: getItemImage(642), passive: 'Int -> Atk Dmg/Speed conversion.', buildsFrom: ['enchanted-bracelet'] },
    { id: 'avenging', name: 'Avenging Blade', cost: 2500, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '60', 'Health': '200' }, image: getItemImage(643), passive: 'Hit God: Debuff Prots. If in Jungle: Double Effect.', buildsFrom: ['battle-axe'] },
    { id: 'golden-blade', name: 'Golden Blade', cost: 2200, tier: 3, type: 'Item', category: 'Offense', stats: { 'Strength': '30', 'Health': '200', 'Atk Speed': '20%' }, image: getItemImage(644), passive: 'AoE Basic Attacks.', buildsFrom: ['manchu-bow'] },
    { id: 'yogi', name: 'Yogi\'s Necklace', cost: 2400, tier: 3, type: 'Item', category: 'Support', stats: { 'Health': '400', 'Mana': '250', 'HP5': '6', 'MP5': '6' }, image: getItemImage(645), passive: 'Aura: Heal % HP.', buildsFrom: ['odigba'] },
    { id: 'eye-providence', name: 'Eye of Providence', cost: 2300, tier: 3, type: 'Item', category: 'Support', stats: { 'Phys Prot': '25', 'Mag Prot': '25', 'Health': '250' }, image: getItemImage(646), passive: 'Active: Place Ward. Destroy Ward: Gold.', buildsFrom: ['stalwart-sigil'] },
    { id: 'chandra', name: 'Chandra\'s Grace', cost: 2350, tier: 3, type: 'Item', category: 'Support', stats: { 'Health': '350', 'Cooldown': '20' }, image: getItemImage(647), passive: 'Aura: Regen + CDR.', buildsFrom: ['veve-charm'] },
    { id: 'amanita', name: 'Amanita Charm', cost: 2400, tier: 3, type: 'Item', category: 'Support', stats: { 'Phys Prot': '15', 'Mag Prot': '15', 'Health': '300', 'HP5': '4' }, image: getItemImage(648), passive: 'Active: Healing Mushroom.', buildsFrom: ['stalwart-sigil', 'sash'] },
    { id: 'screeching', name: 'Screeching Gargoyle', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '50', 'Cooldown': '15' }, image: getItemImage(649), passive: 'Active: Silence + Shred.', buildsFrom: ['sages-ring'] },
    { id: 'phoenix-feather', name: 'Phoenix Feather', cost: 2450, tier: 3, type: 'Item', category: 'Defense', stats: { 'Mag Prot': '35', 'Health': '300' }, image: getItemImage(650), passive: 'Active: Pulse Heal/True Dmg.', buildsFrom: ['medal-disruption'] },
    { id: 'shield-phoenix', name: 'Shield of the Phoenix', cost: 2450, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '15', 'Health': '225', 'Cooldown': '10' }, image: getItemImage(651), passive: 'Hit God: Heal + Mana.', buildsFrom: ['captains-ring'] },
    { id: 'umbral', name: 'Umbral Link', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '40', 'Lifesteal': '10%' }, image: getItemImage(652), passive: 'Split Lifesteal with Allies.', buildsFrom: ['legionnaire-armor', 'scythe'] },
    { id: 'nemean', name: 'Hide of the Nemean Lion', cost: 2600, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '35', 'Health': '350', 'HP5': '4' }, image: getItemImage(653), passive: 'Active: Reflect Damage.', buildsFrom: ['legionnaire-armor', 'medallion'] },
    { id: 'mystical', name: 'Mystical Mail', cost: 2450, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '25', 'Health': '300' }, image: getItemImage(654), passive: 'Aura: Magical Damage DoT.', buildsFrom: ['legionnaire-armor'] },
    { id: 'triton', name: 'Triton\'s Conch', cost: 2500, tier: 3, type: 'Item', category: 'Support', stats: { 'Strength': '25', 'Intell': '40', 'Health': '250' }, image: getItemImage(655), passive: 'Aura: Power.', buildsFrom: ['amulet-power', 'medallion'] },
    { id: 'dwarven', name: 'Dwarven Plate', cost: 2500, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '35', 'Mag Prot': '35' }, image: getItemImage(656), passive: 'Active: Swap Prot focus.', buildsFrom: ['stalwart-sigil'] },
    { id: 'hussar', name: 'Hussar\'s Wings', cost: 2400, tier: 3, type: 'Item', category: 'Defense', stats: { 'Phys Prot': '25', 'Mag Prot': '25', 'Health': '500' }, image: getItemImage(657), passive: 'Immune to Slows.', buildsFrom: ['stalwart-sigil', 'medallion'] },
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