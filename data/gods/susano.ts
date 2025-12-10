import { God, DamageType } from '../../types';

export const SUSANO: God = {
  id: 'susano',
  name: 'Susano',
  title: 'God of the Summer Storm',
  pantheon: 'Japanese',
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
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 683.89, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.41, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 868.93, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0044, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.45, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1053.97, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1146.49, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.01, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1331.53, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0044, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1424.05, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1516.57, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1609.09, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1701.61, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1794.13, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0044, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1886.65, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1979.17, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2071.69, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2164.21, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2256.73, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 1.0044, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Susano Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 1, 1.25x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: "Storm's Edge",
    image: '',
    description: "After using an ability, your next basic attack will add a Storm's Edge debuff stack to an enemy.\n\n• At 1 stack, enemies have reduced Strength\n• At 2 stacks, enemies are also Slowed\n• At 3 stacks, enemies also take 10% increased Damage",
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Strength Reduction (1 Stack)', value: '10%' },
      { label: 'Slow (2 Stacks)', value: '15%' },
      { label: 'Increased Damage Taken (3 Stacks)', value: '10%' },
      { label: 'Debuff Duration', value: '5s' },
      { label: 'Buff Duration', value: '5s' }
    ]
  },
  abilities: {
    1: {
      name: 'Storm Kata',
      image: '',
      description: 'Strike three times in quick succession.\n\n• The first attack deals Physical Damage to enemies in front of you\n• The second attack spins, dealing Physical Damage to enemies around you\n• The third attack Dashes forward dealing Physical Damage\n\nThis ability Cooldown is increased by 1s for each additional attack used. Dash passes through all enemies. Each attack of Storm Kata can trigger ability item effects.',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Strike Damage', value: '50 | 75 | 100 | 125 | 150' },
        { label: 'Strike Damage Scaling', value: '55% Strength' },
        { label: 'Spin Damage', value: '50 | 75 | 100 | 125 | 150' },
        { label: 'Spin Damage Scaling', value: '55% Strength' },
        { label: 'Dash Damage', value: '20 | 32.5 | 45 | 57.5 | 70' },
        { label: 'Dash Damage Scaling', value: '25% Strength' },
        { label: 'Strike Range', value: '4.8m' },
        { label: 'Strike Cone Angle', value: '60 degrees' },
        { label: 'Spin Radius', value: '4.8m' },
        { label: 'Dash Range', value: '7m' },
        { label: 'Dash Radius', value: '0.5m' }
      ],
      subAbilities: [
        {
          name: 'Storm Kata (Strike)',
          description: 'The first attack deals Physical Damage to enemies in front of you.',
          image: '',
          attributes: [
            { label: 'Damage', value: '50 | 75 | 100 | 125 | 150' },
            { label: 'Damage Scaling', value: '55% Strength' },
            { label: 'Range', value: '4.8m' },
            { label: 'Cone Angle', value: '60 degrees' }
          ]
        },
        {
          name: 'Storm Kata (Spin)',
          description: 'The second attack spins, dealing Physical Damage to enemies around you.',
          image: '',
          attributes: [
            { label: 'Damage', value: '50 | 75 | 100 | 125 | 150' },
            { label: 'Damage Scaling', value: '55% Strength' },
            { label: 'Radius', value: '4.8m' }
          ]
        },
        {
          name: 'Storm Kata (Dash)',
          description: 'The third attack Dashes forward dealing Physical Damage. Dash passes through all enemies.',
          image: '',
          attributes: [
            { label: 'Damage', value: '20 | 32.5 | 45 | 57.5 | 70' },
            { label: 'Damage Scaling', value: '25% Strength' },
            { label: 'Dash Range', value: '7m' },
            { label: 'Dash Radius', value: '0.5m' }
          ]
        }
      ]
    },
    2: {
      name: 'Wind Siphon',
      image: '',
      description: 'Command the winds to blow, dealing Physical Damage to enemies in front of you.\n\n• Enemies in the inner area are also Pulled towards you\n\nEnemies are Pulled to the location in front of you at the start of the attack.',
      cooldown: '15s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '90 | 130 | 170 | 210 | 250' },
        { label: 'Damage Scaling', value: '70% Strength' },
        { label: 'Range', value: '5.6m' },
        { label: 'Cone Angle', value: '105 degrees' },
        { label: 'Inner Cone Angle', value: '40 degrees' }
      ]
    },
    3: {
      name: 'Jet Stream',
      image: '',
      description: 'Throw a gust of wind projectile that stops on walls or the first enemy hit, creating a whirlwind.\n\n• The whirlwind deals Physical Damage repeatedly\n• You can reactivate this ability to Teleport to the whirlwind\n\nThe Whirlwind will travel with the enemy hit. This ability Cooldown is reduced by 4s when Teleporting to an enemy. Ability hits 6 times, over 3 seconds.',
      cooldown: '15s',
      cost: '45 | 50 | 55 | 60 | 65',
      attributes: [
        { label: 'Damage Per Tick', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling Per Tick', value: '25% Strength' },
        { label: 'Range', value: '7.2m' },
        { label: 'Projectile Radius', value: '0.64m' },
        { label: 'Whirlwind Radius', value: '1.6m' },
        { label: 'Whirlwind Duration', value: '3s' },
        { label: 'Total Hits', value: '6' },
        { label: 'Cooldown Reduction on Teleport', value: '4s' }
      ]
    },
    4: {
      name: 'Typhoon',
      image: '',
      description: 'Summon a typhoon which repeatedly deals Physical Damage as it grows in size.\n\n• After reaching full size, the typhoon is launched in the direction you are facing, dealing Physical Damage and Knocking Up enemies\n• Reactivate this ability to fire the typhoon at its current size, dealing less damage\n\nThis ability automatically refires after 2s. This ability starts at 50% Size and 80% Damage and increases over the duration. The Typhoon will travel in the direction Susano is facing on refire.',
      cooldown: '90s',
      cost: '80 | 85 | 90 | 95 | 100',
      attributes: [
        { label: 'Damage Per Tick', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'Damage Scaling Per Tick', value: '12% Strength' },
        { label: 'Max Damage', value: '250 | 310 | 370 | 430 | 490' },
        { label: 'Max Damage Scaling', value: '115% Strength' },
        { label: 'Start Radius', value: '4m' },
        { label: 'Max Radius', value: '8m' },
        { label: 'Charge Duration', value: '2s' },
        { label: 'Start Size', value: '50%' },
        { label: 'Start Damage', value: '80%' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};