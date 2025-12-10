import { God, DamageType } from '../../types';

export const ODIN: God = {
  id: 'odin',
  name: 'Odin',
  title: 'The Allfather',
  pantheon: 'Norse',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.52, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.64, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.76, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.392, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.88, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.12, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.24, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.224, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.36, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.48, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.72, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.056, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.84, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.96, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.08, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.888, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.32, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.44, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.56, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.68, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.72, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Odin Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of 1, 1, 1, 1.5x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Path to Valhalla',
    image: '',
    description: 'When a god dies, gain a brief increase to Movement Speed, Strength, and Intelligence.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Movement Speed', value: '4% Per Stack' },
      { label: 'Strength', value: '10% Per Stack' },
      { label: 'Intelligence', value: '10% Per Stack' },
      { label: 'Buff Duration', value: '10s' },
      { label: 'Max Buff Stacks', value: '2' }
    ]
  },
  abilities: {
    1: {
      name: 'Lunge',
      image: '',
      description: 'Leap forward, dealing Physical Damage to nearby enemies as you land.\n\n• If you have a Shield from Raven Shout, it explodes upon landing',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Damage', value: '120 | 170 | 220 | 270 | 320' },
        { label: 'Damage Scaling', value: '75% Strength' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    2: {
      name: 'Raven Shout',
      image: '',
      description: 'Gain a Health Shield for a duration.\n\n• After the duration, the Shield explodes dealing Physical Damage equal to the remaining Shield Health to nearby enemies\n• If the Shield is at full HP when it explodes, it deals Bonus Physical Damage instead',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '45 | 50 | 55 | 60 | 65',
      attributes: [
        { label: 'Shield Health', value: '100 | 155 | 210 | 265 | 320' },
        { label: 'Shield Health Scaling', value: '40% Strength + 50% Intelligence' },
        { label: 'Bonus Damage Multiplier', value: '115.1%' },
        { label: 'Explode Radius', value: '3.2m' }
      ]
    },
    3: {
      name: "Gungnir's Might",
      image: '',
      description: 'Charge up, pulsing damage around you twice, then throw your spear.\n\n• The pulses deal Physical Damage and Slow\n• The spear deals Physical Damage and Stuns if fired after two pulses. Can only stun the first god hit\n• If you refire the spear early, nearby allies get Attack Speed and this ability has a 40% reduced cooldown\n\nProjectile passes through and damages all targets but stops on walls.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Pulse Damage', value: '50 | 80 | 110 | 140 | 170' },
        { label: 'Pulse Damage Scaling', value: '60% Intelligence' },
        { label: 'Projectile Damage', value: '60 | 115 | 170 | 225 | 280' },
        { label: 'Projectile Damage Scaling', value: '75% Strength' },
        { label: 'Stun Duration', value: '0.9s' },
        { label: 'Attack Speed Buff', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Buff Duration', value: '4s' },
        { label: 'Pulse Radius', value: '3.2m' },
        { label: 'Projectile Range', value: '8.8m' },
        { label: 'Projectile Radius', value: '0.48m' }
      ]
    },
    4: {
      name: 'Ring Of Spears',
      image: '',
      description: 'Create a spear ring of walls that impedes enemies. Enemy gods who die in the ring grant Odin a permanent STR and INT buff. Max 10 Stacks. Gain a stack of Path to Valhalla.\n\n• Enemies in the area cannot Heal, and have reduced Strength and Intelligence\n• Enemies who leave the area take Physical Damage and are Slowed, unless exiting through segment of the ring destroyed by basic attacks\n\nRing of Spears does not block ally movement or projectiles, only enemy basic attacks and enemy god movement.\n\nThe Ring is made of 8 Segments that each have 5 Hit Points, an enemy basic attack will deal 1 Hit Point per hit.\n\nYou are immune to Slows and Roots while in the Ring.',
      cooldown: '100 | 95 | 90 | 85 | 80s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '120 | 190 | 260 | 330 | 400' },
        { label: 'Damage Scaling', value: '75% Strength' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '5s' },
        { label: 'Strength Debuff', value: '-15 | -17.5 | -20 | -22.5 | -25%' },
        { label: 'Intelligence Debuff', value: '-15 | -17.5 | -20 | -22.5 | -25%' },
        { label: 'Strength Buff Per Stack', value: '5' },
        { label: 'Max Stacks', value: '10' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};