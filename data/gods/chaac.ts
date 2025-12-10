import { God, DamageType } from '../../types';

export const CHAAC: God = {
  id: 'chaac',
  name: 'Chaac',
  title: 'God of Rain',
  pantheon: 'Mayan',
  role: 'Warrior',
  lanes: ['Solo'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.52, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.64, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.76, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.392, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.88, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.12, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.24, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.224, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.36, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.48, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.72, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.056, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.84, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.96, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.08, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.888, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.32, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.44, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.56, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.68, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.72, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Chaac Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Overflow',
    image: '',
    description: 'After 5 successful basic attacks, the next ability you use:\n\n• Costs 0 Mana\n• Has lower Cooldown\n• Heals you',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Cooldown Reduction', value: '-2s' },
      { label: 'Heal', value: '10' },
      { label: 'Heal Scaling', value: '12.5% Intelligence + 1 Per Level' }
    ]
  },
  abilities: {
    1: {
      name: 'Thunder Strike',
      image: '',
      description: 'Throw your Axe forward, dealing Physical Damage to enemies in the area where it lands.\n\n• The Axe remains deployed to empower Torrent or Rain Dance\n• Reactivate to destroy the Axe early',
      cooldown: '10s',
      cost: '45 | 50 | 55 | 60 | 65',
      attributes: [
        { label: 'Damage', value: '100 | 160 | 220 | 280 | 340' },
        { label: 'Damage Scaling', value: '75% Strength + 60% Intelligence' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    2: {
      name: 'Torrent',
      image: '',
      description: 'Swing your Axe around you, dealing Physical Damage to enemies and gaining Physical Protection and Magical Protection for each enemy hit.\n\n• If the Axe is deployed, first Dash to it and deal Physical Damage to enemies that you pass through\n• This Dash passes through walls\n• If you Dash, you will still do the area attack upon reaching the Axe\n• Minions Provide 1 Stack, Gods Provide 2 Stacks',
      cooldown: '10 | 9.5 | 9 | 8.5 | 8s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
        { label: 'Damage Scaling', value: '70% Strength' },
        { label: 'Dash Damage', value: '35 | 57.5 | 80 | 102.5 | 125' },
        { label: 'Dash Damage Scaling', value: '30% Strength' },
        { label: 'Physical Protection Per Stack', value: '5 | 7 | 9 | 11 | 13' },
        { label: 'Magical Protection Per Stack', value: '5 | 7 | 9 | 11 | 13' },
        { label: 'Max Protection Stacks', value: '4' },
        { label: 'Protection Buff Duration', value: '6s' },
        { label: 'Attack Radius', value: '3.2m' },
        { label: 'Dash Radius', value: '1.28m' }
      ]
    },
    3: {
      name: 'Rain Dance',
      image: '',
      description: 'Create a rainstorm that Heals you over time. Gain 4 Overflow stacks over its duration.\n\n• Enemies caught in the rain are Slowed and have reduced Attack Speed\n• If the Axe is deployed, create a second rainstorm there\n• Enemies in both Rain Storms are Slowed and Debuffed for twice as much\n• Heals 8 times over 6 seconds',
      cooldown: '13s',
      cost: '55 | 65 | 75 | 85 | 95',
      attributes: [
        { label: 'Heal Per Tick', value: '8 | 11 | 14 | 17 | 20' },
        { label: 'Heal Scaling Per Tick', value: '2.5% Intelligence' },
        { label: 'Slow', value: '15 | 17.5 | 20 | 22.5 | 25%' },
        { label: 'Attack Speed Slow', value: '10 | 12.5 | 15 | 17.5 | 20%' },
        { label: 'Duration', value: '6s' },
        { label: 'Self Radius', value: '6.4m' },
        { label: 'Axe Radius', value: '9.6m' }
      ]
    },
    4: {
      name: 'Storm Call',
      image: '',
      description: 'Charge up your lightning axe, then unleash a blast dealing Physical Damage, Knocking Up, and Silencing in an area around you.\n\n• You are CC Immune and gain Damage Mitigation while charging\n• Enemies are Displaced straight up',
      cooldown: '90s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '300 | 360 | 420 | 480 | 540' },
        { label: 'Damage Scaling', value: '120% Strength + 100% Intelligence' },
        { label: 'Damage Mitigation', value: '50 | 55 | 60 | 65 | 70%' },
        { label: 'Silence Duration', value: '1.5s' },
        { label: 'Radius', value: '5.6m' }
      ]
    }
  },
  aspects: [
    {
      id: 'fulmination',
      name: 'Aspect of Fulmination',
      image: '',
      description: 'Rain Dance no longer Heals, but instead deals Physical Damage repeatedly to enemies and reduces their Healing.',
      basicAttack: {
        name: 'Chaac Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Overflow',
        image: '',
        description: 'After 5 successful basic attacks, the next ability you use:\n\n• Costs 0 Mana\n• Has lower Cooldown\n• Heals you',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Cooldown Reduction', value: '-2s' },
          { label: 'Heal', value: '10' },
          { label: 'Heal Scaling', value: '12.5% Intelligence + 1 Per Level' }
        ]
      },
      abilities: {
        1: {
          name: 'Thunder Strike',
          image: '',
          description: 'Throw your Axe forward, dealing Physical Damage to enemies in the area where it lands.\n\n• The Axe remains deployed to empower Torrent or Rain Dance\n• Reactivate to destroy the Axe early',
          cooldown: '10s',
          cost: '45 | 50 | 55 | 60 | 65',
          attributes: [
            { label: 'Damage', value: '100 | 160 | 220 | 280 | 340' },
            { label: 'Damage Scaling', value: '75% Strength + 60% Intelligence' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        2: {
          name: 'Torrent',
          image: '',
          description: 'Swing your Axe around you, dealing Physical Damage to enemies and gaining Physical Protection and Magical Protection for each enemy hit.\n\n• If the Axe is deployed, first Dash to it and deal Physical Damage to enemies that you pass through\n• This Dash passes through walls\n• If you Dash, you will still do the area attack upon reaching the Axe\n• Minions Provide 1 Stack, Gods Provide 2 Stacks',
          cooldown: '10 | 9.5 | 9 | 8.5 | 8s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
            { label: 'Damage Scaling', value: '70% Strength' },
            { label: 'Dash Damage', value: '35 | 57.5 | 80 | 102.5 | 125' },
            { label: 'Dash Damage Scaling', value: '30% Strength' },
            { label: 'Physical Protection Per Stack', value: '5 | 7 | 9 | 11 | 13' },
            { label: 'Magical Protection Per Stack', value: '5 | 7 | 9 | 11 | 13' },
            { label: 'Max Protection Stacks', value: '4' },
            { label: 'Protection Buff Duration', value: '6s' },
            { label: 'Attack Radius', value: '3.2m' },
            { label: 'Dash Radius', value: '1.28m' }
          ]
        },
        3: {
          name: 'Rain Dance',
          image: '',
          description: 'Create a rainstorm dealing Physical Damage repeatedly to enemies in an area.\n\n• Enemies caught in the rain are Slowed and have reduced Attack Speed\n• If the Axe is deployed, create a second rainstorm there\n• Reduces enemy Healing\n• NO LONGER HEALS YOU',
          cooldown: '13s',
          cost: '55 | 65 | 75 | 85 | 95',
          attributes: [
            { label: 'Damage Per Tick', value: '15 | 20 | 25 | 30 | 35' },
            { label: 'Damage Scaling Per Tick', value: '15% Strength + 10% Intelligence' },
            { label: 'Healing Reduction', value: '25%' },
            { label: 'Slow', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Attack Speed Slow', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Duration', value: '6s' },
            { label: 'Self Radius', value: '6.4m' },
            { label: 'Axe Radius', value: '9.6m' }
          ]
        },
        4: {
          name: 'Storm Call',
          image: '',
          description: 'Charge up your lightning axe, then unleash a blast dealing Physical Damage, Knocking Up, and Silencing in an area around you.\n\n• You are CC Immune and gain Damage Mitigation while charging\n• Enemies are Displaced straight up',
          cooldown: '90s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Damage', value: '300 | 360 | 420 | 480 | 540' },
            { label: 'Damage Scaling', value: '120% Strength + 100% Intelligence' },
            { label: 'Damage Mitigation', value: '50 | 55 | 60 | 65 | 70%' },
            { label: 'Silence Duration', value: '1.5s' },
            { label: 'Radius', value: '5.6m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};