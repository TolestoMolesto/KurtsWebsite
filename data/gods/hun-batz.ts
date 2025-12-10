import { God, DamageType } from '../../types';

export const HUN_BATZ: God = {
  id: 'hun-batz',
  name: 'Hun Batz',
  title: 'The Howler Monkey God',
  pantheon: 'Maya',
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
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.97, attackSpeedPercent: 1.46, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 622.5, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.97, attackSpeedPercent: 2.92, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22, magicalProtection: 29, damageMitigation: 0, maxHealth: 720, healthRegen: 1.908, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.97, attackSpeedPercent: 4.38, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 817.5, healthRegen: 2.116, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.97, attackSpeedPercent: 5.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28, magicalProtection: 32, damageMitigation: 0, maxHealth: 915, healthRegen: 2.324, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 1012.5, healthRegen: 2.532, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.97, attackSpeedPercent: 8.76, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34, magicalProtection: 35, damageMitigation: 0, maxHealth: 1110, healthRegen: 2.74, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.97, attackSpeedPercent: 10.22, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1207.5, healthRegen: 2.948, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.97, attackSpeedPercent: 11.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 38, damageMitigation: 0, maxHealth: 1305, healthRegen: 3.156, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.97, attackSpeedPercent: 13.14, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1402.5, healthRegen: 3.364, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46, magicalProtection: 41, damageMitigation: 0, maxHealth: 1500, healthRegen: 3.572, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.97, attackSpeedPercent: 16.06, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1597.5, healthRegen: 3.78, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.97, attackSpeedPercent: 17.52, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52, magicalProtection: 44, damageMitigation: 0, maxHealth: 1695, healthRegen: 3.988, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.97, attackSpeedPercent: 18.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1792.5, healthRegen: 4.196, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.97, attackSpeedPercent: 20.44, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 47, damageMitigation: 0, maxHealth: 1890, healthRegen: 4.404, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.9, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1987.5, healthRegen: 4.612, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.97, attackSpeedPercent: 23.36, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64, magicalProtection: 50, damageMitigation: 0, maxHealth: 2085, healthRegen: 4.82, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.97, attackSpeedPercent: 24.82, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2182.5, healthRegen: 5.028, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.97, attackSpeedPercent: 26.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70, magicalProtection: 53, damageMitigation: 0, maxHealth: 2280, healthRegen: 5.236, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.97, attackSpeedPercent: 27.74, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.444, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 29.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76, magicalProtection: 56, damageMitigation: 0, maxHealth: 2475, healthRegen: 5.652, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Hun Batz Basic Attack',
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
    name: 'Infused Strikes',
    image: '',
    description: 'After using an ability, Hun Batz\'s next Basic Attack will deal 1.2x damage and grants Hun Batz a stacking Strength buff on successful hit. Stacks up to 4 times.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Multiplier', value: '1.2x' },
      { label: 'Strength Per Stack', value: '2' },
      { label: 'Strength Per Level', value: '0.2' },
      { label: 'Buff Duration', value: '4s' },
      { label: 'Max Stacks', value: '4' }
    ]
  },
  abilities: {
    1: {
      name: 'Somersault',
      image: '',
      description: 'Leap forward, dealing Physical Damage and Slowing enemies in the area where you land.\n\n• Enemies hit when taking off take 25% damage.',
      cooldown: '13s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '75 | 115 | 155 | 195 | 235' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Overhand Smash',
      image: '',
      description: 'Channel for a short duration. At the end of the Channel, deal Physical Damage to enemies in front of you and apply a Physical Protection debuff.\n\n• While channelling you are Displacement Immune and Immune to strafe and backpedal movement penalties.',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '75 | 130 | 185 | 240 | 295' },
        { label: 'Damage Scaling', value: '75% Strength' },
        { label: 'Physical Protection Reduced', value: '8 | 10 | 12 | 14 | 16' },
        { label: 'Debuff Duration', value: '2s' },
        { label: 'Range', value: '5.6m' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    },
    3: {
      name: 'Sacred Monkey',
      image: '',
      description: 'Throw a projectile monkey that deals Physical Damage to any enemies it hits. After hitting, it will bounce to nearby enemies applying a Mark to only the most recently hit enemy.\n\nReactivate this ability to Teleport to the Marked enemy.',
      cooldown: '13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
        { label: 'Damage Scaling', value: '55% Strength' },
        { label: 'Mark Duration', value: '2s' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    4: {
      name: 'Fear No Evil',
      image: '',
      description: 'Create a Totem that repeatedly Fears and deals Physical Damage to all enemies around it.\n\n• Hits every 0.25s\n• Fear can only last a maximum of 1s.',
      cooldown: '120 | 115 | 110 | 105 | 100s',
      cost: '60',
      attributes: [
        { label: 'Damage Per Tick', value: '35' },
        { label: 'Damage Scaling Per Tick', value: '10% Strength' },
        { label: 'Feared Duration', value: '0.5s' },
        { label: 'Lifetime', value: '1 | 1.25 | 1.5 | 1.75 | 2s' },
        { label: 'Range', value: '7.2m' },
        { label: 'Radius', value: '5.6m and 2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'disruption',
      name: 'Aspect of Disruption',
      image: '',
      description: 'Infused Strikes Slow gods hit by them, but do not grant Hun Batz the stacking Strength buff. Overhand Smash Stuns gods hit by it, but deals reduced damage.',
      basicAttack: {
        name: 'Hun Batz Basic Attack',
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
        name: 'Infused Strikes',
        image: '',
        description: 'After using an ability, Hun Batz\'s next Basic Attack will deal 1.1x damage and Slow the target.\n\n• NO LONGER GRANTS STACKING STRENGTH BUFF',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Multiplier', value: '1.1x' },
          { label: 'Slow', value: '10%' },
          { label: 'Slow Duration', value: '2s' }
        ]
      },
      abilities: {
        1: {
          name: 'Somersault',
          image: '',
          description: 'Leap forward, dealing Physical Damage and Slowing enemies in the area where you land.\n\n• Enemies hit when taking off take 25% damage.',
          cooldown: '13s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '75 | 115 | 155 | 195 | 235' },
            { label: 'Damage Scaling', value: '60% Strength' },
            { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        2: {
          name: 'Overhand Smash',
          image: '',
          description: 'Channel for a short duration. At the end of the Channel, deal Physical Damage to enemies in front of you, apply a Physical Protection debuff, and Stun gods hit by the attack.\n\n• While channelling you are Displacement Immune and Immune to strafe and backpedal movement penalties.\n• STUNS GODS HIT BUT DEALS REDUCED DAMAGE',
          cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '60 | 100 | 140 | 180 | 220' },
            { label: 'Damage Scaling', value: '20% Strength' },
            { label: 'Stun Duration', value: '0.55 | 0.6 | 0.65 | 0.7 | 0.75s' },
            { label: 'Physical Protection Reduced', value: '8 | 10 | 12 | 14 | 16' },
            { label: 'Debuff Duration', value: '2s' },
            { label: 'Range', value: '5.6m' },
            { label: 'Cone Angle', value: '110 degrees' }
          ]
        },
        3: {
          name: 'Sacred Monkey',
          image: '',
          description: 'Throw a projectile monkey that deals Physical Damage to any enemies it hits. After hitting, it will bounce to nearby enemies applying a Mark to only the most recently hit enemy.\n\nReactivate this ability to Teleport to the Marked enemy.',
          cooldown: '13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
            { label: 'Damage Scaling', value: '55% Strength' },
            { label: 'Mark Duration', value: '2s' },
            { label: 'Range', value: '8.8m' }
          ]
        },
        4: {
          name: 'Fear No Evil',
          image: '',
          description: 'Create a Totem that repeatedly Fears and deals Physical Damage to all enemies around it.\n\n• Hits every 0.25s\n• Fear can only last a maximum of 1s.',
          cooldown: '120 | 115 | 110 | 105 | 100s',
          cost: '60',
          attributes: [
            { label: 'Damage Per Tick', value: '35' },
            { label: 'Damage Scaling Per Tick', value: '10% Strength' },
            { label: 'Feared Duration', value: '0.5s' },
            { label: 'Lifetime', value: '1 | 1.25 | 1.5 | 1.75 | 2s' },
            { label: 'Range', value: '7.2m' },
            { label: 'Radius', value: '5.6m and 2.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};