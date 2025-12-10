import { God, DamageType } from '../../types';

export const HERCULES: God = {
  id: 'hercules',
  name: 'Hercules',
  title: 'Champion of Rome',
  pantheon: 'Roman',
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
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.52, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.64, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.76, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.392, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.88, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.12, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.24, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.224, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.36, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.48, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.72, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.056, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.84, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.96, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.08, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.888, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.32, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.44, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.56, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.68, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.72, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Hercules Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 1, 1.5x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Apotheosis',
    image: '',
    description: 'Hercules gains Strength when enemy gods damage him. This stacks up to 3 times and lasts 5s. Additionally, hit a target with an ability to gain a stack toward achieving Apotheosis, or 2 stacks from his Ultimate.\n\nAt 4 stacks, enter an empowered state that immediately subtracts 2s from active cooldowns and provides an additional Strength, Protections, and Cleaving basic attacks for the duration.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Strength Per Stack', value: '4' },
      { label: 'Strength Per Level', value: '0.5' },
      { label: 'Max Stacks', value: '3' },
      { label: 'Stack Duration', value: '5s' },
      { label: 'Apotheosis Buff Duration', value: '10s' },
      { label: 'Apotheosis Buff Duration Per Level', value: '1s' },
      { label: 'Apotheosis Protections Per Level', value: '2' }
    ]
  },
  abilities: {
    1: {
      name: 'Driving Strike',
      image: '',
      description: 'Dash forward, dealing Physical Damage, Stunning and Pushing enemies hit.',
      cooldown: '13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '80 | 150 | 220 | 290 | 360' },
        { label: 'Damage Scaling', value: '85% Strength' },
        { label: 'Stun Duration', value: '0.6 | 0.7 | 0.8 | 0.9 | 1.0s' },
        { label: 'Range', value: '5.6m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    2: {
      name: 'Earthbreaker',
      image: '',
      description: 'Create a rift that deals Physical Damage to enemies in front of you. Enemies hit by the end area are Pulled to you.',
      cooldown: '13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '75 | 130 | 185 | 240 | 295' },
        { label: 'Damage Scaling', value: '65% Strength' },
        { label: 'Range', value: '7.2m' },
        { label: 'Radius', value: '1.12m' }
      ]
    },
    3: {
      name: 'Mitigate Wounds',
      image: '',
      description: 'Immediately Heal yourself, and gain Attack Speed and Protections for 4s. At the end of the duration Heal yourself again for a percentage of damage taken during the effect.',
      cooldown: '15s',
      cost: '50',
      attributes: [
        { label: 'Heal', value: '40 | 60 | 80 | 100 | 120' },
        { label: 'Heal % of Damage Taken', value: '25 | 27.5 | 30 | 32.5 | 35%' },
        { label: 'Attack Speed', value: '15 | 17.5 | 20 | 22.5 | 25%' },
        { label: 'Protections', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Additional Protections', value: '30% of Protections from Items' },
        { label: 'Buff Duration', value: '4s' }
      ]
    },
    4: {
      name: 'Excavate',
      image: '',
      description: 'Hurl a boulder at a location, Displacing enemies straight up at the landing spot. The boulder then rolls and bounces off walls, dealing Physical Damage to enemies hit.',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '320 | 430 | 540 | 650 | 760' },
        { label: 'Damage Scaling', value: '100% Strength' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'preservation',
      name: 'Aspect of Preservation',
      image: '',
      description: 'Mitigate Wounds no longer Heals based on damage taken or provides Attack Speed. Instead you gain a stack when you or nearby allied gods take damage from Basic Attacks and when the ability ends, stacks are expended to Heal nearby allied gods.',
      basicAttack: {
        name: 'Hercules Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 1, 1.5x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Apotheosis',
        image: '',
        description: 'Hercules gains Strength when enemy gods damage him. This stacks up to 3 times and lasts 5s. Additionally, hit a target with an ability to gain a stack toward achieving Apotheosis, or 2 stacks from his Ultimate.\n\nAt 4 stacks, enter an empowered state that immediately subtracts 2s from active cooldowns and provides an additional Strength, Protections, and Cleaving basic attacks for the duration.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Strength Per Stack', value: '4' },
          { label: 'Strength Per Level', value: '0.5' },
          { label: 'Max Stacks', value: '3' },
          { label: 'Stack Duration', value: '5s' },
          { label: 'Apotheosis Buff Duration', value: '10s' },
          { label: 'Apotheosis Buff Duration Per Level', value: '1s' },
          { label: 'Apotheosis Protections Per Level', value: '2' }
        ]
      },
      abilities: {
        1: {
          name: 'Driving Strike',
          image: '',
          description: 'Dash forward, dealing Physical Damage, Stunning and Pushing enemies hit.',
          cooldown: '13s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '80 | 150 | 220 | 290 | 360' },
            { label: 'Damage Scaling', value: '85% Strength' },
            { label: 'Stun Duration', value: '0.6 | 0.7 | 0.8 | 0.9 | 1.0s' },
            { label: 'Range', value: '5.6m' },
            { label: 'Radius', value: '0.8m' }
          ]
        },
        2: {
          name: 'Earthbreaker',
          image: '',
          description: 'Create a rift that deals Physical Damage to enemies in front of you. Enemies hit by the end area are Pulled to you.',
          cooldown: '13s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '75 | 130 | 185 | 240 | 295' },
            { label: 'Damage Scaling', value: '65% Strength' },
            { label: 'Range', value: '7.2m' },
            { label: 'Radius', value: '1.12m' }
          ]
        },
        3: {
          name: 'Mitigate Wounds',
          image: '',
          description: 'Immediately Heal yourself and gain Protections for 4s.\n\n• While the Buff is active, each time you or a nearby ally gets hit with a Basic Attack, you gain a stack\n• At the end of the duration, Heal yourself and nearby allies per stack\n\n• NO LONGER HEALS BASED ON DAMAGE TAKEN\n• NO LONGER PROVIDES ATTACK SPEED',
          cooldown: '15s',
          cost: '50',
          attributes: [
            { label: 'Heal', value: '40 | 60 | 80 | 100 | 120' },
            { label: 'Heal Per Stack', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Max Stacks', value: '10' },
            { label: 'Protections', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Additional Protections', value: '30% of Protections from Items' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Radius', value: '8.8m' }
          ]
        },
        4: {
          name: 'Excavate',
          image: '',
          description: 'Hurl a boulder at a location, Displacing enemies straight up at the landing spot. The boulder then rolls and bounces off walls, dealing Physical Damage to enemies hit.',
          cooldown: '90 | 85 | 80 | 75 | 70s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '320 | 430 | 540 | 650 | 760' },
            { label: 'Damage Scaling', value: '100% Strength' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};