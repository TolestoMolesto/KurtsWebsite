import { God, DamageType } from '../../types';

export const BACCHUS: God = {
  id: 'bacchus',
  name: 'Bacchus',
  title: 'God of Wine',
  pantheon: 'Roman',
  role: 'Guardian',
  lanes: ['Support'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 45.96, baseAttackSpeed: 0.93, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.836, maxMana: 307.84, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 48.24, baseAttackSpeed: 0.93, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.76, magicalProtection: 31.32, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.052, maxMana: 351.52, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 50.52, baseAttackSpeed: 0.93, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27.0, magicalProtection: 32.94, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.268, maxMana: 395.2, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52.8, baseAttackSpeed: 0.93, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.24, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.484, maxMana: 438.88, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 55.08, baseAttackSpeed: 0.93, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.48, magicalProtection: 36.18, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.7, maxMana: 482.56, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 57.36, baseAttackSpeed: 0.93, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.72, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.916, maxMana: 526.24, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59.64, baseAttackSpeed: 0.93, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.96, magicalProtection: 39.42, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.132, maxMana: 569.92, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.92, baseAttackSpeed: 0.93, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.04, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.348, maxMana: 613.6, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64.2, baseAttackSpeed: 0.93, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.44, magicalProtection: 42.66, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.564, maxMana: 657.28, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66.48, baseAttackSpeed: 0.93, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.68, magicalProtection: 44.28, damageMitigation: 0, maxHealth: 1620.0, healthRegen: 3.78, maxMana: 700.96, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.76, baseAttackSpeed: 0.93, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.92, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.996, maxMana: 744.64, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71.04, baseAttackSpeed: 0.93, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.16, magicalProtection: 47.52, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.212, maxMana: 788.32, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.32, baseAttackSpeed: 0.93, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.14, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.428, maxMana: 832.0, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.93, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.64, magicalProtection: 50.76, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.644, maxMana: 875.68, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 77.88, baseAttackSpeed: 0.93, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.88, magicalProtection: 52.38, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 919.36, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.16, baseAttackSpeed: 0.93, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.12, magicalProtection: 53.94, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.076, maxMana: 963.04, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.44, baseAttackSpeed: 0.93, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.36, magicalProtection: 55.62, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.292, maxMana: 1006.72, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 84.72, baseAttackSpeed: 0.93, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.24, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.508, maxMana: 1050.4, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.0, baseAttackSpeed: 0.93, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.84, magicalProtection: 58.86, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.724, maxMana: 1094.08, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 89.28, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.08, magicalProtection: 60.48, damageMitigation: 0, maxHealth: 2673.0, healthRegen: 5.94, maxMana: 1137.76, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Bacchus Basic Attack',
    image: '',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Drunk-O-Meter',
    image: '',
    description: 'As you become more Drunk, gain Strength, Intelligence, and Protections.\n\n• You become Tipsy at 30% Drunk\n• You become Smashed at 60%, doubling the buffs\n• Drunkeness depletes over time at a rate of 2% per second',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Tipsy Strength', value: '+5' },
      { label: 'Tipsy Intelligence', value: '+10' },
      { label: 'Tipsy Physical Protection', value: '+6%' },
      { label: 'Tipsy Magical Protection', value: '+6%' },
      { label: 'Smashed Strength', value: '+10' },
      { label: 'Smashed Intelligence', value: '+25' },
      { label: 'Smashed Physical Protection', value: '+12%' },
      { label: 'Smashed Magical Protection', value: '+12%' }
    ]
  },
  abilities: {
    1: {
      name: 'Chug',
      image: '',
      description: 'Take a drink, Healing, and becoming more Drunk.\n\n• You also gain increased Strength and Intelligence\n• Your next basic attack deals additional Magical Damage\n\nEmpowered basic attack effect lasts for 6s or until a target is successfully hit.',
      cooldown: '10s',
      cost: '20',
      attributes: [
        { label: 'Damage', value: '10 | 30 | 50 | 70 | 90' },
        { label: 'Damage Scaling', value: '35% Physical Protection + 35% Magical Protection' },
        { label: 'Heal', value: '30 | 45 | 60 | 75 | 80' },
        { label: 'Strength Buff', value: '8 | 13 | 18 | 23 | 28' },
        { label: 'Intelligence Buff', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Drunk Amount', value: '46% | 52% | 58% | 64% | 70%' },
        { label: 'Buff Duration', value: '6s' }
      ]
    },
    2: {
      name: 'Belly Flop',
      image: '',
      description: 'Leap forward and slam into the ground belly first, Knocking Up enemies.\n\n• Deals Magical Damage\n• If you are Tipsy, enemies are also Slowed after they land\n\nEnemies are Displaced straight up.',
      cooldown: '14s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
        { label: 'Damage Scaling', value: '75% Strength + 30% Physical Protection + 30% Magical Protection' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    3: {
      name: 'Belch Of The Gods',
      image: '',
      description: "Channel a big ol' burp to deal Magical Damage repeatedly to enemies in front of you.\n\n• If you are Tipsy, the final hit will Stun\n• Reduces enemy Healing\n• You are Displacement Immune while Channeling\n\nThis ability hits 3 times, plus the final hit, over 1.5 seconds.",
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage Per Tick', value: '25 | 40 | 55 | 70 | 85' },
        { label: 'Damage Scaling', value: '17.5% Intelligence' },
        { label: 'Stun Duration', value: '0.9 | 0.95 | 1 | 1.05 | 1.1s' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Channel Duration', value: '1.5s' },
        { label: 'Range', value: '5.6m' }
      ]
    },
    4: {
      name: 'Intoxicate',
      image: '',
      description: 'Smash your jug of wine, dealing Magical Damage and Intoxicating enemies around you.\n\n• If you are Smashed, gain Strength and Intelligence in anger over your lost wine',
      cooldown: '90s',
      cost: '90',
      attributes: [
        { label: 'Damage', value: '230 | 300 | 370 | 440 | 510' },
        { label: 'Damage Scaling', value: '65% Intelligence' },
        { label: 'Intoxicate Duration', value: '4s' },
        { label: 'Strength Buff', value: '12 | 20 | 28 | 36 | 44' },
        { label: 'Intelligence Buff', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Radius', value: '5.6m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};