import { God, DamageType } from '../../types';

export const NEMESIS: God = {
  id: 'nemesis',
  name: 'Nemesis',
  title: 'Goddess of Vengeance',
  pantheon: 'Greek',
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
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 1.512, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 622.5, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 3.024, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22, magicalProtection: 29, damageMitigation: 0, maxHealth: 720, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 4.536, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 817.5, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 6.048, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28, magicalProtection: 32, damageMitigation: 0, maxHealth: 915, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 370, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0044, attackSpeedPercent: 7.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 1012.5, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 9.072, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34, magicalProtection: 35, damageMitigation: 0, maxHealth: 1110, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 10.584, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1207.5, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 12.096, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 38, damageMitigation: 0, maxHealth: 1305, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 370, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 13.608, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1402.5, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0044, attackSpeedPercent: 15.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46, magicalProtection: 41, damageMitigation: 0, maxHealth: 1500, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 16.632, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1597.5, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 18.144, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52, magicalProtection: 44, damageMitigation: 0, maxHealth: 1695, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 19.656, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1792.5, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 21.168, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 47, damageMitigation: 0, maxHealth: 1890, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0044, attackSpeedPercent: 22.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1987.5, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 24.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64, magicalProtection: 50, damageMitigation: 0, maxHealth: 2085, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 370, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 25.704, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2182.5, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 27.216, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70, magicalProtection: 53, damageMitigation: 0, maxHealth: 2280, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 28.728, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 1.0044, attackSpeedPercent: 30.24, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76, magicalProtection: 56, damageMitigation: 0, maxHealth: 2475, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 370, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Nemesis Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of 1, 1, 0.75, 1.25x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength or Inhand Power + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Scales of Fate',
    image: '',
    description: 'Hitting enemies with Basic Attacks reduces the target\'s Inhand Power, Strength, and Intelligence while increasing yours.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Reduction per Stack', value: '7%' },
      { label: 'Increase per Stack', value: '7%' },
      { label: 'Max Stacks', value: '3' },
      { label: 'Duration', value: '5s' }
    ]
  },
  abilities: {
    1: {
      name: 'Swift Vengeance',
      image: '',
      description: 'Dash in a line, passing through all enemies.\n\n• Deals Physical Damage to all enemies hit.\n• May dash again within 2s.\n\nMay use Basic Attacks and Abilities between dashes.',
      cooldown: '11s',
      cost: '50',
      attributes: [
        { label: 'Damage', value: '60 | 90 | 120 | 150 | 180' },
        { label: 'Damage Scaling', value: '45% Strength' },
        { label: 'Range', value: '4.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    2: {
      name: 'Slice and Dice',
      image: '',
      description: 'Slash in a cone, dealing Physical Damage to all enemies hit.\n\n• Enemies in the center of the slash take additional damage and are Slowed.',
      cooldown: '10s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '70 | 100 | 130 | 160 | 190' },
        { label: 'Damage Scaling', value: '40% Strength + 25% Intelligence' },
        { label: 'Center Damage', value: '85 | 145 | 205 | 265 | 325' },
        { label: 'Center Damage Scaling', value: '90% Strength + 75% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '5.6m' },
        { label: 'Cone Angle', value: '150 degrees' },
        { label: 'Center Cone Angle', value: '45 degrees' }
      ]
    },
    3: {
      name: 'Retribution',
      image: '',
      description: 'Gain a Health Shield for a duration.\n\n• Heal for a percentage of the damage taken during the effect.\n• Reflect a percentage of the damage taken from gods as Physical Damage.\n\nHard Crowd Control effects remove the Shield.',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Shield Health', value: '100 | 150 | 200 | 250 | 300' },
        { label: 'Shield Health Scaling', value: '7.5% Max Health' },
        { label: 'Reflect Damage', value: '40% of the damage blocked' },
        { label: 'Reflect Damage Scaling', value: '20% Strength' },
        { label: 'Heal', value: '40% of the damage blocked' },
        { label: 'Heal Scaling', value: '5% Intelligence' },
        { label: 'Shield Duration', value: '2s' }
      ]
    },
    4: {
      name: 'Divine Judgement',
      image: '',
      description: 'Choose a single enemy god, dealing Physical Damage to them and all enemies in an area around them.\n\n• Gain Movement Speed and a percentage of the enemy\'s Protections.\n• Reduce enemy\'s Movement Speed and Protections by the same amount.\n\nGain Protections equal to the enemy with the most Protections. On hitting an enemy, a homing projectile spawns from them, granting the buffs when it reaches you.',
      cooldown: '90s',
      cost: '90 | 95 | 100 | 105 | 110',
      attributes: [
        { label: 'Damage', value: '15 | 17.5 | 20 | 22.5 | 25% of enemy\'s Current Health' },
        { label: 'Damage Scaling', value: '45% Strength + 65% Intelligence' },
        { label: 'Protection Steal', value: '25%' },
        { label: 'Movement Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
        { label: 'Duration', value: '5s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    }
  },
  aspects: [
    {
      id: 'justice',
      name: 'Aspect of Justice',
      image: '',
      description: 'Divine Judgement no longer does damage in an area or steals Protections, but instead moves your and the enemy god\'s current Health 75% of the way toward each other, as long as you have less Health than the target.',
      basicAttack: {
        name: 'Nemesis Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of 1, 1, 0.75, 1.25x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength or Inhand Power + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Scales of Fate',
        image: '',
        description: 'Hitting enemies with Basic Attacks reduces the target\'s Inhand Power, Strength, and Intelligence while increasing yours.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Reduction per Stack', value: '7%' },
          { label: 'Increase per Stack', value: '7%' },
          { label: 'Max Stacks', value: '3' },
          { label: 'Duration', value: '5s' }
        ]
      },
      abilities: {
        1: {
          name: 'Swift Vengeance',
          image: '',
          description: 'Dash in a line, passing through all enemies.\n\n• Deals Physical Damage to all enemies hit.\n• May dash again within 2s.\n\nMay use Basic Attacks and Abilities between dashes.',
          cooldown: '11s',
          cost: '50',
          attributes: [
            { label: 'Damage', value: '60 | 90 | 120 | 150 | 180' },
            { label: 'Damage Scaling', value: '45% Strength' },
            { label: 'Range', value: '4.8m' },
            { label: 'Radius', value: '1.6m' }
          ]
        },
        2: {
          name: 'Slice and Dice',
          image: '',
          description: 'Slash in a cone, dealing Physical Damage to all enemies hit.\n\n• Enemies in the center of the slash take additional damage and are Slowed.',
          cooldown: '10s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '70 | 100 | 130 | 160 | 190' },
            { label: 'Damage Scaling', value: '40% Strength + 25% Intelligence' },
            { label: 'Center Damage', value: '85 | 145 | 205 | 265 | 325' },
            { label: 'Center Damage Scaling', value: '90% Strength + 75% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Range', value: '5.6m' },
            { label: 'Cone Angle', value: '150 degrees' },
            { label: 'Center Cone Angle', value: '45 degrees' }
          ]
        },
        3: {
          name: 'Retribution',
          image: '',
          description: 'Gain a Health Shield for a duration.\n\n• Heal for a percentage of the damage taken during the effect.\n• Reflect a percentage of the damage taken from gods as Physical Damage.\n\nHard Crowd Control effects remove the Shield.',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Shield Health', value: '100 | 150 | 200 | 250 | 300' },
            { label: 'Shield Health Scaling', value: '7.5% Max Health' },
            { label: 'Reflect Damage', value: '40% of the damage blocked' },
            { label: 'Reflect Damage Scaling', value: '20% Strength' },
            { label: 'Heal', value: '40% of the damage blocked' },
            { label: 'Heal Scaling', value: '5% Intelligence' },
            { label: 'Shield Duration', value: '2s' }
          ]
        },
        4: {
          name: 'Divine Judgement',
          image: '',
          description: 'Choose a single enemy god, averaging the current Health between you and the target. This Damages the enemy and Heals yourself as long as your current Health is lower than the target\'s.\n\n• Gain Movement Speed.\n• Reduce enemy\'s Movement Speed by the same amount.\n• NO LONGER DOES DAMAGE IN AN AREA OR STEALS PROTECTIONS\n• INSTEAD MOVES YOUR AND THE ENEMY GOD\'S CURRENT HEALTH 75% OF THE WAY TOWARD EACH OTHER\n\nHealing from this ability is unaffected by Anti-Heal.',
          cooldown: '90s',
          cost: '90 | 95 | 100 | 105 | 110',
          attributes: [
            { label: 'Health Averaging', value: '75% toward each other' },
            { label: 'Movement Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Duration', value: '5s' },
            { label: 'Range', value: '8.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};