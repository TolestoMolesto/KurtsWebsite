import { God, DamageType } from '../../types';

export const ULLR: God = {
  id: 'ullr',
  name: 'Ullr',
  title: 'The Glorious One',
  pantheon: 'Norse',
  role: 'Hunter',
  lanes: ['Carry', 'Mid'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 1.0, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 617.6, healthRegen: 1.7, maxMana: 296, manaRegen: 2.14, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 710.3, healthRegen: 1.9, maxMana: 338, manaRegen: 2.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53, baseAttackSpeed: 1.0, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 29.0, damageMitigation: 0, maxHealth: 802.9, healthRegen: 2.1, maxMana: 380, manaRegen: 2.61, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 895.5, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 988.1, healthRegen: 2.5, maxMana: 464, manaRegen: 3.09, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1080.8, healthRegen: 2.7, maxMana: 506, manaRegen: 3.33, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.7, damageMitigation: 0, maxHealth: 1173.4, healthRegen: 2.9, maxMana: 548, manaRegen: 3.56, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1266.0, healthRegen: 3.1, maxMana: 590, manaRegen: 3.80, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 1.0, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1358.6, healthRegen: 3.3, maxMana: 632, manaRegen: 4.04, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 13.30, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39.0, damageMitigation: 0, maxHealth: 1451.3, healthRegen: 3.5, maxMana: 674, manaRegen: 4.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.4, damageMitigation: 0, maxHealth: 1543.9, healthRegen: 3.7, maxMana: 716, manaRegen: 4.51, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1636.5, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1729.1, healthRegen: 4.1, maxMana: 800, manaRegen: 4.99, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 82, baseAttackSpeed: 1.0, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1821.8, healthRegen: 4.3, maxMana: 842, manaRegen: 5.23, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 1.0, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.0, magicalProtection: 46.1, damageMitigation: 0, maxHealth: 1914.4, healthRegen: 4.5, maxMana: 884, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 87, baseAttackSpeed: 1.0, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 2007.0, healthRegen: 4.7, maxMana: 926, manaRegen: 5.70, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89, baseAttackSpeed: 1.0, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2099.6, healthRegen: 4.9, maxMana: 968, manaRegen: 5.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92, baseAttackSpeed: 1.0, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2192.3, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.18, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 95, baseAttackSpeed: 1.0, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2284.9, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.41, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97, baseAttackSpeed: 1.0, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Ullr Basic Attack',
    image: '',
    description: 'Ullr\'s Basic attacks change depending on his current stance.\n\nBow: Fire a projectile that deals Physical Damage to the first enemy hit.\n\nAxe: Deal Physical Damage to an enemy in front of you.\n\n• Bow projectile stops on first target hit, and does not pass through walls\n• If Axe cone area contains multiple enemies, the enemy closest to the center of the area will be hit',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Bow Range', value: '8.8m' },
      { label: 'Bow Radius', value: '0.48m' },
      { label: 'Axe Range', value: '1.92m' },
      { label: 'Axe Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Weapon Master',
    image: '',
    description: 'When you use an ability in either stance your Cooldowns in the opposite stance are reduced.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Cooldown Reduction', value: '-1s' }
    ]
  },
  abilities: {
    1: {
      name: 'Bladed Arrow / Thrown Axe',
      image: '',
      description: 'Bow: Fire an arrow that passes through enemies and deals Physical Damage to all targets hit.\n\nAxe: Throw an axe that Stuns and deals Physical Damage to the first enemy it hits.',
      cooldown: '14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage (Bow)', value: '70 | 120 | 170 | 220 | 270' },
        { label: 'Damage (Axe)', value: '50 | 80 | 110 | 140 | 170' },
        { label: 'Damage Scaling', value: '75% Strength' },
        { label: 'Stun Duration (Axe)', value: '0.8 | 0.9 | 1.0 | 1.1 | 1.2s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.48m' }
      ],
      subAbilities: [
        {
          name: 'Bladed Arrow',
          description: 'Fire an arrow that passes through enemies and deals Physical Damage to all targets hit.',
          image: '',
          attributes: [
            { label: 'Damage', value: '70 | 120 | 170 | 220 | 270' },
            { label: 'Damage Scaling', value: '75% Strength' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        {
          name: 'Thrown Axe',
          description: 'Throw an axe that Stuns and deals Physical Damage to the first enemy it hits.',
          image: '',
          attributes: [
            { label: 'Damage', value: '50 | 80 | 110 | 140 | 170' },
            { label: 'Damage Scaling', value: '75% Strength' },
            { label: 'Stun Duration', value: '0.8 | 0.9 | 1.0 | 1.1 | 1.2s' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.48m' }
          ]
        }
      ]
    },
    2: {
      name: 'Expose Weakness / Invigorate',
      image: '',
      description: 'Bow: Gain bonus Attack Speed.\n\nAxe: Gain bonus Movement Speed.\n\n• The buff persists after switching stances',
      cooldown: '14s',
      cost: '50',
      attributes: [
        { label: 'Attack Speed (Bow)', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Movement Speed (Axe)', value: '8 | 10 | 12 | 14 | 16%' },
        { label: 'Buff Duration', value: '4s' }
      ],
      subAbilities: [
        {
          name: 'Expose Weakness',
          description: 'Gain bonus Attack Speed. The buff persists after switching stances.',
          image: '',
          attributes: [
            { label: 'Attack Speed', value: '20 | 25 | 30 | 35 | 40%' },
            { label: 'Buff Duration', value: '4s' }
          ]
        },
        {
          name: 'Invigorate',
          description: 'Gain bonus Movement Speed. The buff persists after switching stances.',
          image: '',
          attributes: [
            { label: 'Movement Speed', value: '8 | 10 | 12 | 14 | 16%' },
            { label: 'Buff Duration', value: '4s' }
          ]
        }
      ]
    },
    3: {
      name: 'Hail of Arrows / Glory Bound',
      image: '',
      description: 'Bow: Fire a volley, dealing Physical Damage.\n\n• The arrow remains in the ground for 3s\n• If you activate Wield Axes while the arrow is deployed, the area around it becomes snowy for 3s, Slowing enemies.\n\nAxe: Leap to deal Physical Damage.\n\n• The axes remain in the ground for 3s\n• If you activate Wield Bow while the axes are deployed, the axes tear open the ground, reducing Physical Protections of enemies hit.',
      cooldown: '15s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage (Bow)', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling (Bow)', value: '100% Strength' },
        { label: 'Damage (Axe)', value: '50 | 80 | 110 | 140 | 170' },
        { label: 'Damage Scaling (Axe)', value: '65% Strength' },
        { label: 'Slow (Bow)', value: '30%' },
        { label: 'Physical Protections Reduced (Axe)', value: '5 | 10 | 15 | 20 | 25' },
        { label: 'Debuff Duration', value: '4s' },
        { label: 'Range (Bow)', value: '12.8m' },
        { label: 'Range (Axe)', value: '8.8m' },
        { label: 'Damage Radius', value: '1.6m' },
        { label: 'Slow Field Radius', value: '2.4m' }
      ],
      subAbilities: [
        {
          name: 'Hail of Arrows',
          description: 'Fire a volley, dealing Physical Damage. The arrow remains in the ground for 3s. If you activate Wield Axes while the arrow is deployed, the area around it becomes snowy for 3s, Slowing enemies.',
          image: '',
          attributes: [
            { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Damage Scaling', value: '100% Strength' },
            { label: 'Slow', value: '30%' },
            { label: 'Range', value: '12.8m' },
            { label: 'Damage Radius', value: '1.6m' },
            { label: 'Slow Field Radius', value: '2.4m' }
          ]
        },
        {
          name: 'Glory Bound',
          description: 'Leap to deal Physical Damage. The axes remain in the ground for 3s. If you activate Wield Bow while the axes are deployed, the axes tear open the ground, reducing Physical Protections of enemies hit.',
          image: '',
          attributes: [
            { label: 'Damage', value: '50 | 80 | 110 | 140 | 170' },
            { label: 'Damage Scaling', value: '65% Strength' },
            { label: 'Physical Protections Reduced', value: '5 | 10 | 15 | 20 | 25' },
            { label: 'Debuff Duration', value: '4s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        }
      ]
    },
    4: {
      name: 'Wield Axes / Wield Bow',
      image: '',
      description: 'Change stance, remove Disarms and gain benefits depending on which stance you are in.\n\nBow: Ranged Basic Attacks and additional Strength.\n\nAxe: Melee Basic Attacks and additional Lifesteal.\n\n• You also gain half of the benefit of the opposing stance',
      cooldown: '1s',
      cost: '0',
      attributes: [
        { label: 'Strength (Bow)', value: '7.5 | 10 | 12.5 | 15 | 17.5' },
        { label: 'Lifesteal (Axe)', value: '5 | 8 | 11 | 14 | 17%' }
      ],
      subAbilities: [
        {
          name: 'Wield Axes',
          description: 'Change to Axe stance, remove Disarms. Gain Melee Basic Attacks and additional Lifesteal. You also gain half the Strength bonus.',
          image: '',
          attributes: [
            { label: 'Lifesteal', value: '5 | 8 | 11 | 14 | 17%' },
            { label: 'Half Strength Bonus', value: '3.75 | 5 | 6.25 | 7.5 | 8.75' }
          ]
        },
        {
          name: 'Wield Bow',
          description: 'Change to Bow stance, remove Disarms. Gain Ranged Basic Attacks and additional Strength. You also gain half the Lifesteal bonus.',
          image: '',
          attributes: [
            { label: 'Strength', value: '7.5 | 10 | 12.5 | 15 | 17.5' },
            { label: 'Half Lifesteal Bonus', value: '2.5 | 4 | 5.5 | 7 | 8.5%' }
          ]
        }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};