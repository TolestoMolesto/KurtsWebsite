

import { God, DamageType, GodStats } from '../types';

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
    goodAgainst: [],
    badAgainst: [],
    levelingOrder: [],
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
    recommendedBuilds: [],
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
  videoGuideUrl: 'https://www.youtube.com/watch?v=cNbS6-7Sksg',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
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
    image: 'https://image2url.com/images/1764409904723-cd9b89e9-fedf-4742-bd08-b0ccf54a64f1.webp',
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
    image: 'https://image2url.com/images/1764409923658-b798eb39-6d17-41dc-bf56-aceaa59ad961.webp',
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
      image: 'https://image2url.com/images/1764409937440-591318f4-4eb0-46c0-b976-0719ac6b1612.webp',
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
      image: 'https://image2url.com/images/1764409953969-60e9eb70-f657-4832-860a-7702a4a9cbd4.webp',
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
      image: 'https://image2url.com/images/1764409973858-80965ddd-7f7f-4b53-8dac-41d1a5cd6267.webp',
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
      image: 'https://image2url.com/images/1764409989324-625cdae8-de38-4630-90b8-4c2f257853f7.webp',
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
      image: 'https://image2url.com/images/1764410014059-3ae5b6f4-af72-401b-8d1d-1ad88bf87f46.webp',
      description: 'Bludgeon no longer deals bonus Final Slam Damage but whenever you gain Block stacks with Sword and Shield or gain Healing from Scourge, nearby allied gods also gain those benefits.',
      basicAttack: {
        name: 'Bellona Basic Attack',
        image: 'https://image2url.com/images/1764409904723-cd9b89e9-fedf-4742-bd08-b0ccf54a64f1.webp',
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
        image: 'https://image2url.com/images/1764409923658-b798eb39-6d17-41dc-bf56-aceaa59ad961.webp',
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
         image: 'https://image2url.com/images/1764409937440-591318f4-4eb0-46c0-b976-0719ac6b1612.webp',
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
          image: 'https://image2url.com/images/1764409953969-60e9eb70-f657-4832-860a-7702a4a9cbd4.webp',
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
          image: 'https://image2url.com/images/1764409973858-80965ddd-7f7f-4b53-8dac-41d1a5cd6267.webp',
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
          image: 'https://image2url.com/images/1764409989324-625cdae8-de38-4630-90b8-4c2f257853f7.webp',
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
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
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
  videoGuideUrl: '', // Add YouTube URL when available
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
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
    { strength: 0, intelligence: 0, attackSpeed: 14, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 43, magicalProtection: 40, maxHealth: 1425, healthRegen: 3, maxMana: 728, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 16, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 46, magicalProtection: 42, maxHealth: 1518, healthRegen: 4, maxMana: 773, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 49, magicalProtection: 43, maxHealth: 1610, healthRegen: 4, maxMana: 819, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 19, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 52, magicalProtection: 45, maxHealth: 1703, healthRegen: 4, maxMana: 864, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 54, magicalProtection: 46, maxHealth: 1796, healthRegen: 4, maxMana: 909, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 57, magicalProtection: 48, maxHealth: 1888, healthRegen: 5, maxMana: 955, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 60, magicalProtection: 49, maxHealth: 1981, healthRegen: 5, maxMana: 1000, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 24, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 63, magicalProtection: 50, maxHealth: 2073, healthRegen: 5, maxMana: 1045, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 66, magicalProtection: 52, maxHealth: 2166, healthRegen: 5, maxMana: 1091, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 27, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 69, magicalProtection: 53, maxHealth: 2259, healthRegen: 5, maxMana: 1136, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 72, magicalProtection: 54, maxHealth: 2351, healthRegen: 6, maxMana: 1182, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
  ],
  basicAttack: {
    name: 'Anubis Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
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
    image: 'https://static.smite2.live/smite2/GODS/Anubis/Abilities/Icons_Anubis_Passive.webp',
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
      image: 'https://static.smite2.live/smite2/GODS/Anubis/Abilities/Icons_Anubis_A01.webp',
      description: 'Locusts fly from your mouth, repeatedly dealing Magical Damage in an area in front of you.\n\n• This is a Channeled ability\n\n• You are Displacement Immune and move at reduced Movement Speed while Channeling\n\nThis ability hits 12 times over 2.5 seconds.',
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
      image: 'https://static.smite2.live/smite2/GODS/Anubis/Abilities/Icons_Anubis_A02.webp',
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
      image: 'https://static.smite2.live/smite2/GODS/Anubis/Abilities/Icons_Anubis_A03.webp',
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
      image: 'https://static.smite2.live/smite2/GODS/Anubis/Abilities/Icons_Anubis_A04.webp',
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
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
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
{
  id: 'achilles',
  name: 'Achilles',
  title: 'Hero of the Trojan War',
  pantheon: 'Greek',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: '', // Add god portrait image URL
  videoGuideUrl: '', // Add YouTube URL when available
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 19, magicalProtection: 27.5, maxHealth: 622.5, healthRegen: 1.77, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 2, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 22, magicalProtection: 29, maxHealth: 720, healthRegen: 2, maxMana: 336, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 25, magicalProtection: 30.5, maxHealth: 817, healthRegen: 2.2, maxMana: 376, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 5, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 28, magicalProtection: 32, maxHealth: 914, healthRegen: 2.4, maxMana: 416, manaRegen: 3, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 31, magicalProtection: 33.5, maxHealth: 1011, healthRegen: 2.6, maxMana: 456, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 8, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 34, magicalProtection: 35, maxHealth: 1108, healthRegen: 2.8, maxMana: 496, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 10, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 37, magicalProtection: 36.5, maxHealth: 1205, healthRegen: 3, maxMana: 536, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 11, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 40, magicalProtection: 38, maxHealth: 1302, healthRegen: 3.2, maxMana: 576, manaRegen: 4, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 13, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 43, magicalProtection: 39.5, maxHealth: 1399, healthRegen: 3.4, maxMana: 616, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 14, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 46, magicalProtection: 41, maxHealth: 1496, healthRegen: 3.6, maxMana: 656, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 16, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 49, magicalProtection: 42.5, maxHealth: 1593, healthRegen: 3.8, maxMana: 696, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 52, magicalProtection: 44, maxHealth: 1690, healthRegen: 4, maxMana: 736, manaRegen: 5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 19, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 55, magicalProtection: 45.5, maxHealth: 1787, healthRegen: 4.2, maxMana: 776, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 58, magicalProtection: 47, maxHealth: 1884, healthRegen: 4.4, maxMana: 816, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 61, magicalProtection: 48.5, maxHealth: 1981, healthRegen: 4.6, maxMana: 856, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 23, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 64, magicalProtection: 50, maxHealth: 2078, healthRegen: 4.8, maxMana: 896, manaRegen: 6, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 67, magicalProtection: 51.5, maxHealth: 2175, healthRegen: 5, maxMana: 936, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 26, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 70, magicalProtection: 53, maxHealth: 2272, healthRegen: 5.2, maxMana: 976, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 73, magicalProtection: 54.5, maxHealth: 2369, healthRegen: 5.4, maxMana: 1016, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375 },
    { strength: 0, intelligence: 0, attackSpeed: 29, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 76, magicalProtection: 56, maxHealth: 2466, healthRegen: 5.6, maxMana: 1056, manaRegen: 7, cooldownRate: 0, movementSpeed: 375 },
  ],
  basicAttack: {
    name: 'Achilles Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '2.56m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Gift of the Gods',
    image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_Passive.webp',
    description: 'Choose to wear armor or forgo it. Wearing armor grants bonus Health and Protections, while forgoing it grants bonus Strength and Movement Speed.\n\n• Swap between armor states by using Basic Attacks while the Passive targeter is active inside the Fountain.\n• Your chosen armor state also adds effects to Radiant Glory and Combat Dodge.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Armored Health', value: '25 + 10 Per Level' },
      { label: 'Armored Protections', value: '5 + 2 Per Level' },
      { label: 'Unarmored Strength', value: '3 + 1.5 Per Level' },
      { label: 'Unarmored Movement Speed', value: '1% + 0.25% Per Level' }
    ]
  },
  abilities: {
    1: {
      name: 'Shield of Achilles',
      image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_A01.webp',
      description: 'Punch forward with your shield, dealing Physical Damage and Stunning enemies in a short cone. The force of the shield radiates further, dealing reduced damage.\n\n• The radiated force deals 80% Damage\n• Non-God targets take 115% Damage\n• Increased Stun duration when Armored, increased Scaling when forgoing your Armor\n\nThis ability can hit through walls.',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
        { label: 'Damage Scaling', value: '80% Strength' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Bonus Stun Duration (Armored)', value: '0.2s' },
        { label: 'Bonus Damage Scaling (Unarmored)', value: '15% Strength' },
        { label: 'Cone Angle', value: '80 degrees' },
        { label: 'Small Radius', value: '3.2m' },
        { label: 'Large Radius', value: '8m' }
      ]
    },
    2: {
      name: 'Radiant Glory',
      image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_A02.webp',
      description: 'You are blessed by the Gods, gaining bonus Strength, Protections, and Crowd Control Reduction for a short duration. Damaging enemies with abilities during this time Heals you.\n\n• When Armored, the Gods\' blessings also grant you a Physical Shield\n• When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections\n\nYou may only heal up to 4 times per ability hit. Healing 12 times during the buff\'s duration will cause the crowd to cheer for you.',
      cooldown: '9s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Strength', value: '10%' },
        { label: 'Protections', value: '20%' },
        { label: 'Crowd Control Reduction', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Buff Duration', value: '6.1s' },
        { label: 'Heal', value: '16 | 18 | 20 | 22 | 24' },
        { label: 'Physical Shield Health (Armored)', value: '50 + 10 Per Level' },
        { label: 'Protections Reduced (Unarmored)', value: '1 Per Level' },
        { label: 'Debuff Duration', value: '3s' }
      ]
    },
    3: {
      name: 'Combat Dodge',
      image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_B03.webp',
      description: 'Dodge in your current direction and ready your spear to strike enemies for Physical Damage. Hitting an enemy god with the strike allows you to recast the ability once before it goes on cooldown.\n\n• When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times\n• When forgoing your Armor, the speed of your dodge is doubled\n\nYou can use Abilities and Basic Attacks between dashes. After readying your spear, you have 4 seconds to strike before the ability ends.',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '22 | 24 | 26 | 28 | 30',
      attributes: [
        { label: 'Damage', value: '65 | 100 | 135 | 170 | 205' },
        { label: 'Damage Scaling', value: '45% Strength' },
        { label: 'Slow (Armored)', value: '7.5% Per Stack' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Dodge Range', value: '3.2m' },
        { label: 'Spear Strike Range', value: '5.6m' },
        { label: 'Spear Strike Radius', value: '0.96m' }
      ]
    },
    4: {
      name: 'Fatal Strike',
      image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_A04.webp',
      description: 'Prepare briefly, then Dash forward, dealing Physical Damage to enemies and Executing gods that are low health. Killing a god allows you to recast this ability up to five times.\n\n• Each kill exposes your heel, increasing your damage taken\n\nThe dash ends early upon hitting an enemy god. You are immune to Crowd Control during the preparation phase, and while Dashing. The preparation before the dash lasts 1 second.',
      cooldown: '90s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '180 | 270 | 360 | 450 | 540' },
        { label: 'Damage Scaling', value: '100% Strength' },
        { label: 'Execute Health %', value: '35%' },
        { label: 'Increased Damage Taken', value: '5%' },
        { label: 'Debuff Duration', value: '10s' },
        { label: 'Dash Range', value: '5.6m' },
        { label: 'Dash Radius', value: '0.96m' }
      ]
    }
  },
  aspects: [
    {
      id: 'prowess',
      name: 'Aspect of Prowess',
      image: '', // Add aspect image URL when available
      description: 'Combat Dodge can now be recast after striking a Jungle Monster or Boss, with Spear Strike gaining increased Scaling when forgoing your Armor. Radiant Glory no longer grants increased Protections or Crowd Control Reduction.',
      basicAttack: {
        name: 'Achilles Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '2.56m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Gift of the Gods',
        image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_Passive.webp',
        description: 'Choose to wear armor or forgo it. Wearing armor grants bonus Health and Protections, while forgoing it grants bonus Strength and Movement Speed.\n\n• Swap between armor states by using Basic Attacks while the Passive targeter is active inside the Fountain.\n• Your chosen armor state also adds effects to Radiant Glory and Combat Dodge.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Armored Health', value: '25 + 10 Per Level' },
          { label: 'Armored Protections', value: '5 + 2 Per Level' },
          { label: 'Unarmored Strength', value: '3 + 1.5 Per Level' },
          { label: 'Unarmored Movement Speed', value: '1% + 0.25% Per Level' }
        ]
      },
      abilities: {
        1: {
          name: 'Shield of Achilles',
          image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_A01.webp',
          description: 'Punch forward with your shield, dealing Physical Damage and Stunning enemies in a short cone. The force of the shield radiates further, dealing reduced damage.\n\n• The radiated force deals 80% Damage\n• Non-God targets take 115% Damage\n• Increased Stun duration when Armored, increased Scaling when forgoing your Armor\n\nThis ability can hit through walls.',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
            { label: 'Damage Scaling', value: '80% Strength' },
            { label: 'Stun Duration', value: '0.8s' },
            { label: 'Bonus Stun Duration (Armored)', value: '0.2s' },
            { label: 'Bonus Damage Scaling (Unarmored)', value: '15% Strength' },
            { label: 'Cone Angle', value: '80 degrees' },
            { label: 'Small Radius', value: '3.2m' },
            { label: 'Large Radius', value: '8m' }
          ]
        },
        2: {
          name: 'Radiant Glory',
          image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_A02.webp',
          description: 'You are blessed by the Gods, gaining bonus Strength for a short duration. Damaging enemies with abilities during this time Heals you.\n\n• When Armored, the Gods\' blessings also grant you a Physical Shield\n• When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections\n• NO LONGER GRANTS INCREASED PROTECTIONS OR CROWD CONTROL REDUCTION\n\nYou may only heal up to 4 times per ability hit. Healing 12 times during the buff\'s duration will cause the crowd to cheer for you.',
          cooldown: '9s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [
            { label: 'Strength', value: '10%' },
            { label: 'Buff Duration', value: '6.1s' },
            { label: 'Heal', value: '16 | 18 | 20 | 22 | 24' },
            { label: 'Physical Shield Health (Armored)', value: '50 + 10 Per Level' },
            { label: 'Protections Reduced (Unarmored)', value: '1 Per Level' },
            { label: 'Debuff Duration', value: '3s' }
          ]
        },
        3: {
          name: 'Combat Dodge',
          image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_B03.webp',
          description: 'Dodge in your current direction and ready your spear to strike enemies for Physical Damage. Hitting a God or Jungle Monster with the strike allows you to recast the ability once before it goes on cooldown.\n\n• When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times\n• When forgoing your Armor, the speed of your dodge is doubled, AND SPEAR STRIKE HAS INCREASED SCALING\n• CAN NOW RECAST AFTER STRIKING A JUNGLE MONSTER OR BOSS\n\nYou can use Abilities and Basic Attacks between dashes. After readying your spear, you have 4 seconds to strike before the ability ends.',
          cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
          cost: '22 | 24 | 26 | 28 | 30',
          attributes: [
            { label: 'Damage', value: '65 | 105 | 145 | 185 | 225' },
            { label: 'Damage Scaling', value: '45% Strength' },
            { label: 'Slow (Armored)', value: '7.5% Per Stack' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Dodge Range', value: '3.2m' },
            { label: 'Spear Strike Range', value: '5.6m' },
            { label: 'Spear Strike Radius', value: '0.96m' }
          ]
        },
        4: {
          name: 'Fatal Strike',
          image: 'https://static.smite2.live/smite2/GODS/Achilles/Abilities/t_Achilles_A04.webp',
          description: 'Prepare briefly, then Dash forward, dealing Physical Damage to enemies and Executing gods that are low health. Killing a god allows you to recast this ability up to five times.\n\n• Each kill exposes your heel, increasing your damage taken\n\nThe dash ends early upon hitting an enemy god. You are immune to Crowd Control during the preparation phase, and while Dashing. The preparation before the dash lasts 1 second.',
          cooldown: '90s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '180 | 270 | 360 | 450 | 540' },
            { label: 'Damage Scaling', value: '100% Strength' },
            { label: 'Execute Health %', value: '35%' },
            { label: 'Increased Damage Taken', value: '5%' },
            { label: 'Debuff Duration', value: '10s' },
            { label: 'Dash Range', value: '5.6m' },
            { label: 'Dash Radius', value: '0.96m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
},
{
  id: 'agni',
  name: 'Agni',
  title: 'God of Fire',
  pantheon: 'Hindu',
  role: 'Mage',
  lanes: ['Mid'],
  damageType: DamageType.Magical,
  image: '', // Add god portrait image URL
  videoGuideUrl: '', // Add YouTube URL when available
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 17.57, magicalProtection: 27.43, maxHealth: 617.62, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 2, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 20, magicalProtection: 29, maxHealth: 710, healthRegen: 2, maxMana: 336, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 23, magicalProtection: 30, maxHealth: 803, healthRegen: 2, maxMana: 376, manaRegen: 2.9, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 5, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 26, magicalProtection: 32, maxHealth: 896, healthRegen: 2, maxMana: 416, manaRegen: 3.2, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 29, magicalProtection: 33, maxHealth: 989, healthRegen: 3, maxMana: 456, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 8, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 32, magicalProtection: 35, maxHealth: 1082, healthRegen: 3, maxMana: 496, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 9, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 35, magicalProtection: 36, maxHealth: 1175, healthRegen: 3, maxMana: 536, manaRegen: 4.1, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 11, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 38, magicalProtection: 38, maxHealth: 1268, healthRegen: 3, maxMana: 576, manaRegen: 4.4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 12, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 40, magicalProtection: 39, maxHealth: 1361, healthRegen: 3, maxMana: 616, manaRegen: 4.7, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 14, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 43, magicalProtection: 41, maxHealth: 1454, healthRegen: 4, maxMana: 656, manaRegen: 5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 15, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 46, magicalProtection: 42, maxHealth: 1547, healthRegen: 4, maxMana: 696, manaRegen: 5.3, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 49, magicalProtection: 44, maxHealth: 1640, healthRegen: 4, maxMana: 736, manaRegen: 5.6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 18, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 52, magicalProtection: 45, maxHealth: 1733, healthRegen: 4, maxMana: 776, manaRegen: 5.9, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 54, magicalProtection: 47, maxHealth: 1826, healthRegen: 4, maxMana: 816, manaRegen: 6.2, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 21, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 57, magicalProtection: 48, maxHealth: 1919, healthRegen: 5, maxMana: 856, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 60, magicalProtection: 50, maxHealth: 2012, healthRegen: 5, maxMana: 896, manaRegen: 6.8, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 24, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 63, magicalProtection: 51, maxHealth: 2105, healthRegen: 5, maxMana: 936, manaRegen: 7.1, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 66, magicalProtection: 53, maxHealth: 2198, healthRegen: 5, maxMana: 976, manaRegen: 7.4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 27, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 69, magicalProtection: 54, maxHealth: 2291, healthRegen: 5, maxMana: 1016, manaRegen: 7.7, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 72, magicalProtection: 56, maxHealth: 2384, healthRegen: 6, maxMana: 1056, manaRegen: 8, cooldownRate: 0, movementSpeed: 365 },
  ],
  basicAttack: {
    name: 'Agni Basic Attack',
    image: '', // Placeholder
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Combustion',
    image: '', // Placeholder
    description: 'Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni\'s next Flame Wave or Rain Fire will ignite all enemies hit, dealing Magical Damage every 0.5s for 3s.\n\nWhen Agni kills an enemy god, he goes on a Hot Streak. When on a Hot Streak, Combustion is fully charged and using Flame Wave or Rain Fire does not consume Combustion.\n\nCombustion Damage is increased by 25% per additional stack of ignite.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Combustion Damage', value: '5' },
      { label: 'Combustion Scaling', value: '6% Intelligence' },
      { label: 'Hot Streak Duration', value: '10s' }
    ]
  },
  abilities: {
    1: {
      name: 'Noxious Fumes',
      image: '', // Placeholder
      description: 'Summon a cloud of noxious fumes which deals Magical Damage every second. Hitting the fumes with any of your other abilities detonates the gas, Stunning and dealing Magical Damage to enemies in the area.\n\n• Reduces enemy Healing\n\nFumes last for 10s.',
      cooldown: '13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Damage Scaling', value: '5% Intelligence' },
        { label: 'Explode Damage', value: '20 | 40 | 60 | 80 | 100' },
        { label: 'Explode Damage Scaling', value: '20% Intelligence' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    2: {
      name: 'Flame Wave',
      image: '', // Placeholder
      description: 'Summon a wave of fire, dealing Magical Damage.\n\n• Ignites Noxious Fumes\n\nPersists for 1s after reaching max distance.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
        { label: 'Damage Scaling', value: '65% Intelligence' },
        { label: 'Range', value: '8m' },
        { label: 'Radius', value: '2.59m' }
      ]
    },
    3: {
      name: 'Path of Flames',
      image: '', // Placeholder
      description: 'Dash forward and leave a trail of fire behind you. Enemies that enter the area take Magical Damage every 0.5s for 2s.\n\n• You are Displacement Immune while Dashing\n• Ignites Noxious Fumes\n\nFlame trail lasts for 3s. Enemies that are being damaged and touch the area again have their damage duration refreshed.',
      cooldown: '16s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling', value: '15% Intelligence' },
        { label: 'Range', value: '9.6m' }
      ]
    },
    4: {
      name: 'Rain Fire',
      image: '', // Placeholder
      description: 'Summon a meteor, dealing Magical Damage. You can have up to 3 charges of this ability.\n\n• Ignites Noxious Fumes\n\nYou are Slowed by 50% while summoning a meteor.',
      cooldown: '18s',
      cost: '10',
      attributes: [
        { label: 'Damage', value: '135 | 175 | 215 | 255 | 295' },
        { label: 'Damage Scaling', value: '60% Intelligence' },
        { label: 'Range', value: '10.4m' },
        { label: 'Radius', value: '3.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'combustion',
      name: 'Aspect of Combustion',
      image: '', // Placeholder
      description: 'Your Basic Attacks now ignite enemies dealing damage over time and stacking 5 times. Flame Wave and Rain of Fire consume ignites dealing a burst of damage. Rain of Fire deals reduced damage.',
      basicAttack: {
        name: 'Agni Basic Attack',
        image: '', // Placeholder
        description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Combustion',
        image: '', // Placeholder
        description: 'Your Basic Attacks now ignite enemies dealing damage over time and stacking 5 times. Flame Wave and Rain of Fire consume ignites dealing a burst of damage.\n\n• BASIC ATTACKS IGNITE ENEMIES INSTEAD OF BUILDING STACKS\n• IGNITE STACKS UP TO 5 TIMES\n• FLAME WAVE AND RAIN OF FIRE CONSUME IGNITES FOR BURST DAMAGE\n• RAIN OF FIRE DEALS REDUCED DAMAGE',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Ignite Damage', value: '3' },
          { label: 'Ignite Scaling', value: '2% Strength' },
          { label: 'Ignite Duration', value: '3s' },
          { label: 'Max Stacks', value: '5' },
          { label: 'Consume Damage', value: '30' },
          { label: 'Consume Scaling', value: '70% Strength' }
        ]
      },
      abilities: {
        1: {
          name: 'Noxious Fumes',
          image: '', // Placeholder
          description: 'Summon a cloud of noxious fumes which deals Magical Damage every second. Hitting the fumes with any of your other abilities detonates the gas, Stunning and dealing Magical Damage to enemies in the area.\n\n• Reduces enemy Healing\n\nFumes last for 10s.',
          cooldown: '13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Damage Scaling', value: '5% Intelligence' },
            { label: 'Explode Damage', value: '20 | 40 | 60 | 80 | 100' },
            { label: 'Explode Damage Scaling', value: '20% Intelligence' },
            { label: 'Stun Duration', value: '0.8s' },
            { label: 'Healing Reduction', value: '25%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        2: {
          name: 'Flame Wave',
          image: '', // Placeholder
          description: 'Summon a wave of fire, dealing Magical Damage.\n\n• Ignites Noxious Fumes\n• CONSUMES IGNITE STACKS FOR BURST DAMAGE\n\nPersists for 1s after reaching max distance.',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
            { label: 'Damage Scaling', value: '65% Intelligence' },
            { label: 'Range', value: '8m' },
            { label: 'Radius', value: '2.59m' }
          ]
        },
        3: {
          name: 'Path of Flames',
          image: '', // Placeholder
          description: 'Dash forward and leave a trail of fire behind you. Enemies that enter the area take Magical Damage every 0.5s for 2s.\n\n• You are Displacement Immune while Dashing\n• Ignites Noxious Fumes\n\nFlame trail lasts for 3s. Enemies that are being damaged and touch the area again have their damage duration refreshed.',
          cooldown: '16s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Damage Scaling', value: '15% Intelligence' },
            { label: 'Range', value: '9.6m' }
          ]
        },
        4: {
          name: 'Rain Fire',
          image: '', // Placeholder
          description: 'Summon a meteor, dealing Magical Damage. You can have up to 3 charges of this ability.\n\n• Ignites Noxious Fumes\n• CONSUMES IGNITE STACKS FOR BURST DAMAGE\n• DEALS REDUCED DAMAGE\n\nYou are Slowed by 50% while summoning a meteor.',
          cooldown: '18s',
          cost: '10',
          attributes: [
            { label: 'Damage', value: '135 | 175 | 215 | 255 | 295' },
            { label: 'Damage Scaling', value: '60% Intelligence' },
            { label: 'Range', value: '10.4m' },
            { label: 'Radius', value: '3.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
},
{
  id: 'aladdin',
  name: 'Aladdin',
  title: 'The Sultan',
  pantheon: 'Tales Of Arabia',
  role: 'Assassin',
  lanes: ['Jungle', 'Solo', 'Mid'],
  damageType: DamageType.Magical,
  image: '', // Add god portrait image URL
  videoGuideUrl: '', // Add YouTube URL when available
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 18.1, magicalProtection: 26.1, maxHealth: 622.5, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 2, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 21, magicalProtection: 28, maxHealth: 715, healthRegen: 2, maxMana: 336, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 24, magicalProtection: 29, maxHealth: 808, healthRegen: 2, maxMana: 376, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 5, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 27, magicalProtection: 31, maxHealth: 901, healthRegen: 2, maxMana: 416, manaRegen: 3, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 30, magicalProtection: 32, maxHealth: 994, healthRegen: 3, maxMana: 456, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 8, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 33, magicalProtection: 34, maxHealth: 1087, healthRegen: 3, maxMana: 496, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 10, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 36, magicalProtection: 35, maxHealth: 1180, healthRegen: 3, maxMana: 536, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 11, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 39, magicalProtection: 37, maxHealth: 1273, healthRegen: 3, maxMana: 576, manaRegen: 4, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 13, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 42, magicalProtection: 38, maxHealth: 1366, healthRegen: 3, maxMana: 616, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 14, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 45, magicalProtection: 40, maxHealth: 1459, healthRegen: 4, maxMana: 656, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 16, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 48, magicalProtection: 41, maxHealth: 1552, healthRegen: 4, maxMana: 696, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 51, magicalProtection: 43, maxHealth: 1645, healthRegen: 4, maxMana: 736, manaRegen: 5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 19, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 54, magicalProtection: 44, maxHealth: 1738, healthRegen: 4, maxMana: 776, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 57, magicalProtection: 46, maxHealth: 1831, healthRegen: 4, maxMana: 816, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 60, magicalProtection: 47, maxHealth: 1924, healthRegen: 5, maxMana: 856, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 23, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 63, magicalProtection: 49, maxHealth: 2017, healthRegen: 5, maxMana: 896, manaRegen: 6, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 66, magicalProtection: 50, maxHealth: 2110, healthRegen: 5, maxMana: 936, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 26, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 69, magicalProtection: 52, maxHealth: 2203, healthRegen: 5, maxMana: 976, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 72, magicalProtection: 53, maxHealth: 2296, healthRegen: 5, maxMana: 1016, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365 },
    { strength: 0, intelligence: 0, attackSpeed: 29, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 75, magicalProtection: 55, maxHealth: 2389, healthRegen: 6, maxMana: 1056, manaRegen: 7, cooldownRate: 0, movementSpeed: 365 },
  ],
  basicAttack: {
    name: 'Aladdin Basic Attack',
    image: '', // Placeholder
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit. Has a 5 hit chain. Attacks in order of 1, 1, 0.33, 0.33, 0.5x damage and swing time. Final 3 Hits Cleave.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 30% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Three Wishes',
    image: '', // Placeholder
    description: 'Make 3 wishes at any time. Gain a charge of Genie\'s Strength every 10s (-1s per enemy slain, -5s for gods).\n\n• Wish: Wealth. +250 Gold. +10% Gold Gains. God Kills/Assists grant +33 Gold for 3m.\n• Wish: Immortality. While dead, instantly revive. Gain 75% Movement Speed for 10s when leaving fountain.\n• Wish: Power. Reset ability and item cooldowns. Gain a charge of Genie\'s Strength.\n\nThe Lamp also provides bonus stats from all your items (1% + 0.4% Per Level, up to 9% at Level 20).',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Genie Charge Cooldown', value: '10s' },
      { label: 'Cooldown Reduction Per Kill', value: '1s (5s for Gods)' },
      { label: 'Wealth Gold', value: '250' },
      { label: 'Wealth Gold Bonus', value: '+10% Gold Gains' },
      { label: 'Wealth Kill Bonus', value: '+33 Gold for 3m' },
      { label: 'Immortality Move Speed', value: '75% for 10s' },
      { label: 'Lamp Stat Bonus', value: '1% + 0.4% Per Level' }
    ]
  },
  abilities: {
    1: {
      name: 'Kufic Invocation',
      image: '', // Placeholder
      description: 'Fire 5 Kufic symbols dealing Magical Damage in a cone. Charge to narrow the cone. Fully charged symbols merge, dealing Magical Damage.\n\n• When fully charged the symbol travels further and hits a larger area\n• Use a charge of Genie\'s Strength to send symbols back to Aladdin, dealing Magical Damage when small or Magical Damage when large\n\nMust have a charge of Genie\'s Strength when cast to be able to refire. You have 5s to refire. Subsequent hits deal 20% of the initial damage. When sent back, the Kufic symbol(s) will fly to where Aladdin was when he refired.',
      cooldown: '13s',
      cost: '85',
      attributes: [
        { label: 'Small Damage', value: '35 | 65 | 95 | 125 | 155' },
        { label: 'Small Scaling', value: '40% Intelligence + 35% Strength' },
        { label: 'Large Damage', value: '60 | 115 | 170 | 225 | 280' },
        { label: 'Large Scaling', value: '72% Intelligence + 63% Strength' },
        { label: 'Return Small Damage', value: '20 | 40 | 60 | 80 | 100' },
        { label: 'Return Small Scaling', value: '25% Intelligence + 35% Strength' },
        { label: 'Return Large Damage', value: '35 | 70 | 105 | 140 | 175' },
        { label: 'Return Large Scaling', value: '50% Intelligence + 55% Strength' },
        { label: 'Range', value: '8.8m / 11.2m (charged)' },
        { label: 'Radius', value: '0.8m / 1.6m (charged)' },
        { label: 'Max Starting Angle', value: '90 degrees' }
      ]
    },
    2: {
      name: "Sultan's Grace",
      image: '', // Placeholder
      description: 'Dash forward dealing Magical Damage to enemies you pass through.\n\n• Deals 0.5% increased damage to enemies for each % Health below 50%\n• Use a charge of Genie\'s Strength to summon the Genie to unleash a flurry of 5 punches that deal Magical Damage to enemies in front of Aladdin',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Dash Damage', value: '90 | 135 | 180 | 225 | 270' },
        { label: 'Dash Scaling', value: '65% Intelligence + 65% Strength' },
        { label: 'Missing HP Bonus Scaling', value: '0.13% Intelligence' },
        { label: 'Punch Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Punch Scaling', value: '20% Intelligence + 35% Strength' }
      ]
    },
    3: {
      name: 'Agile Run',
      image: '', // Placeholder
      description: 'Dash forward. Dashing into a wall causes you to run along it before leaping to a location, dealing Magical Damage to enemies in the landing area.\n\n• Use a charge of Genie\'s Strength to call the Genie to slam down at the landing location. Enemies take Magical Damage and are knocked straight up\n\nThe angle Aladdin runs along the wall is determined by the angle Aladdin approaches the wall. Aladdin can toggle using a charge of Genie\'s Strength until a landing location is selected. Aladdin runs for 8.8m or until he reaches 5m in height. The wall run will always take 1.25s. Aladdin can wall run along all walls, structures, and player made deployables that he would normally collide with.',
      cooldown: '16s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Landing Damage', value: '60 | 105 | 150 | 195 | 240' },
        { label: 'Landing Scaling', value: '70% Intelligence + 50% Strength' },
        { label: 'Genie Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Genie Scaling', value: '15% Intelligence + 25% Strength' },
        { label: 'Leap Range', value: '8.8m' },
        { label: 'Leap Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Into The Lamp',
      image: '', // Placeholder
      description: 'Throw the Lamp forward, dealing Magical Damage and stopping on first enemy god hit. If successful, Aladdin and the enemy god are pulled into the lamp to challenge each other.\n\n• They gain a 35% MaxHealth Shield. Aladdin\'s non-ultimate cooldowns are reset. The target\'s non-ultimate cooldowns are halved\n• The Lamp is left behind, allowing any god to enter the lamp and join the ongoing challenge\n\nFight lasts 16s; an escape appears at 8s. Everyone is expelled when the timer ends. The fight also ends early if a combatant dies (Aladdin or Target), or if only one team remains. Non-combatants deal and take 33% reduced damage.',
      cooldown: '90s',
      cost: '70 | 80 | 90 | 100 | 110',
      attributes: [
        { label: 'Damage', value: '150 | 250 | 350 | 450 | 550' },
        { label: 'Damage Scaling', value: '65% Strength + 90% Intelligence' },
        { label: 'Self CDR', value: '50 | 55 | 60 | 65 | 70%' },
        { label: 'Enemy CDR', value: '50%' },
        { label: 'Shield', value: '35% Max Health' },
        { label: 'Protections', value: '30 | 35 | 40 | 45 | 50' },
        { label: 'Fight Duration', value: '16s' },
        { label: 'Escape Appears', value: '8s' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
},
];