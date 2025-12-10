import { God, DamageType } from '../../types';

export const MERCURY: God = {
  id: 'mercury',
  name: 'Mercury',
  title: 'Messenger of the Gods',
  pantheon: 'Roman',
  role: 'Assassin',
  lanes: ['Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 0.97, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 381, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.97, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22, magicalProtection: 29, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 381, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 0.97, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 381, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 0.97, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28, magicalProtection: 32, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 381, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 961.9, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 381, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 0.97, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34, magicalProtection: 35, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 381, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 0.97, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 381, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 0.97, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 38, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 381, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 0.97, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1332.5, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 381, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46, magicalProtection: 41, damageMitigation: 0, maxHealth: 1425.1, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 381, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 0.97, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 381, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 0.97, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52, magicalProtection: 44, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 381, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 0.97, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 381, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.97, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 47, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 381, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 381, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 0.97, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64, magicalProtection: 50, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 381, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.97, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2073.3, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 381, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 0.97, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70, magicalProtection: 53, damageMitigation: 0, maxHealth: 2165.9, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 381, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 0.97, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 381, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76, magicalProtection: 56, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 381, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Mercury Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.75, 1.25x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Fastest God Alive',
    image: '',
    description: 'For every 1cm traveled, gain 0.04% damage bonus on his next Basic Attack (max 20%).\n\nYou also gain additional Strength equal to 25% of Movement Speed from items or abilities.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Bonus Per 1cm', value: '0.04%' },
      { label: 'Max Damage Bonus', value: '20%' },
      { label: 'Strength from Movement Speed', value: '25%' }
    ]
  },
  abilities: {
    1: {
      name: 'Made You Look',
      image: '',
      description: 'Move in the blink of an eye, dealing Physical Damage to every enemy within a target area.\n\n• This ability can Critically Hit, apply Ability Item effects, and apply Basic Attack item effects',
      cooldown: '9s',
      cost: '50',
      attributes: [
        { label: 'Damage', value: '80 | 115 | 150 | 185 | 220' },
        { label: 'Damage Scaling', value: '70% Strength' },
        { label: 'Range', value: '7.68m' },
        { label: 'Radius', value: '1.4 | 1.6 | 1.8 | 2.0 | 2.2m' }
      ]
    },
    2: {
      name: 'Maximum Velocity',
      image: '',
      description: 'Passive: Gain increased Movement Speed.\n\nActive: Gain increased Attack Speed, cleanse yourself of Slows, and become immune to Slows for the duration.\n\n• Movement Speed from ranking this ability contributes power due to Fastest God Alive',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Movement Speed', value: '2 | 4 | 6 | 8 | 10%' },
        { label: 'Attack Speed', value: '30 | 40 | 50 | 60 | 70%' },
        { label: 'Buff Duration', value: '5s' }
      ]
    },
    3: {
      name: 'Special Delivery',
      image: '',
      description: 'Dash forward. Knock minions aside and deal Physical Damage to them. Grab the first enemy god encountered, spinning them. The enemy god takes Physical Damage every 0.25s until the effect ends. They are then thrown in the direction you are facing.\n\n• Can be cancelled after hitting a god to throw them early',
      cooldown: '15s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'God Damage (per tick)', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'God Damage Scaling', value: '20% Strength' },
        { label: 'Minion Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Minion Damage Scaling', value: '64% Strength' },
        { label: 'Stun Duration', value: '1s' },
        { label: 'Tick Rate', value: '0.25s' }
      ]
    },
    4: {
      name: 'Sonic Boom',
      image: '',
      description: 'Gather energy for a powerful Dash. The range increases as you charge. Dash forward, dealing Physical Damage and spinning enemies hit along the dash.\n\n• Gain Movement Speed for 5s after the dash that scales based on the energy gathered\n• The spin is treated as a Stun',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '80 | 85 | 90 | 95 | 100',
      attributes: [
        { label: 'Damage', value: '200 | 275 | 350 | 425 | 500' },
        { label: 'Damage Scaling', value: '100% Strength' },
        { label: 'Stun Duration', value: '1.25s' },
        { label: 'Minimum Speed Buff', value: '15%' },
        { label: 'Maximum Speed Buff', value: '30%' },
        { label: 'Speed Buff Duration', value: '5s' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};