import { God, DamageType } from '../../types';

export const APOLLO: God = {
  id: 'apollo',
  name: 'Apollo',
  title: 'God of Music',
  pantheon: 'Greek',
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
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 1.0, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 296, manaRegen: 2.14, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53, baseAttackSpeed: 1.0, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 28.3, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 380, manaRegen: 2.61, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 961.9, healthRegen: 2.5, maxMana: 464, manaRegen: 3.09, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 506, manaRegen: 3.33, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.7, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 548, manaRegen: 3.56, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 590, manaRegen: 3.80, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 1.0, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1332.4, healthRegen: 3.3, maxMana: 632, manaRegen: 4.04, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39.0, damageMitigation: 0, maxHealth: 1425, healthRegen: 3.5, maxMana: 674, manaRegen: 4.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.4, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 716, manaRegen: 4.51, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 800, manaRegen: 4.99, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 82, baseAttackSpeed: 1.0, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 842, manaRegen: 5.23, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 1.0, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.0, magicalProtection: 46.1, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 884, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 87, baseAttackSpeed: 1.0, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 926, manaRegen: 5.70, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89, baseAttackSpeed: 1.0, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2073.4, healthRegen: 4.9, maxMana: 968, manaRegen: 5.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92, baseAttackSpeed: 1.0, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2166, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.18, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 95, baseAttackSpeed: 1.0, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.41, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97, baseAttackSpeed: 1.0, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Apollo Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Physical Damage to the first enemy hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Audacity',
    image: '',
    description: 'Gain a stack of Audacity for each successful Basic Attack on any enemy and for each successful damaging ability on Enemy gods. At 10 stacks you gain 100% Attack Speed and Increased Basic Attack Projectile Speed for his next 5 Basic Attacks.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Stacks Required', value: '10' },
      { label: 'Attack Speed Buff', value: '100%' },
      { label: 'Empowered Attacks', value: '5' }
    ]
  },
  abilities: {
    1: {
      name: 'So Beautiful',
      image: '',
      description: 'Send a projectile forward that deals Physical Damage.',
      cooldown: '11s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '90 | 150 | 210 | 270 | 330' },
        { label: 'Damage Scaling', value: '90% Strength' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    2: {
      name: 'Serenade',
      image: '',
      description: 'Sing to Mesmerize all nearby enemies and gain additional protections.\n\n• Any damage done breaks the Mesmerize',
      cooldown: '15s',
      cost: '60',
      attributes: [
        { label: 'Mesmerize Duration', value: '1.5 | 1.7 | 1.9 | 2.1 | 2.3s' },
        { label: 'Protections', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Protection Buff Duration', value: '5s' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'The Moves',
      image: '',
      description: 'Dash forward dealing Physical Damage and Knocking aside all enemies. At the end of the Dash all nearby allies gain a Speed Buff and all nearby enemies are Slowed.\n\n• Any enemy hit provides 1 stack of Audacity.',
      cooldown: '15s',
      cost: '70',
      attributes: [
        { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Speed Buff', value: '15 | 17.5 | 20 | 22.5 | 25%' },
        { label: 'Slow', value: '15 | 17.5 | 20 | 22.5 | 25%' },
        { label: 'Buff/Debuff Duration', value: '5s' },
        { label: 'Range', value: '7.2m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Across the Sky',
      image: '',
      description: 'Ride your chariot across the sky, choosing when to land. When descending you deal Physical Damage every 0.15s for 0.6s, Knocking back enemies on the last tick.\n\n• 2 Allies can join the Chariot ride by interacting with his takeoff location. Allies have until Apollo reaches max height to join\n• Carrying an Ally costs additional mana',
      cooldown: '110s',
      cost: '20',
      attributes: [
        { label: 'Damage Per Tick', value: '70 | 95 | 120 | 145 | 170' },
        { label: 'Damage Scaling', value: '25% Strength' },
        { label: 'Cost Per Second', value: '35 | 40 | 45 | 50 | 55' },
        { label: 'Carrying Ally Bonus Cost', value: '5% Mana' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'harmony',
      name: 'Aspect of Harmony',
      image: '',
      description: 'Audacity now grants a free usage of So Beautiful at 10 stacks instead of bonus Attack Speed. So Beautiful deals reduced damage but scales with Item Health, debuffs enemy Attack Speed, and buffs ally Attack Speed on hit. Serenade now grants allies a shield while providing protections.',
      basicAttack: {
        name: 'Apollo Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Physical Damage to the first enemy hit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Audacity',
        image: '',
        description: 'Gain a stack of Audacity for each successful Basic Attack on any enemy and for each successful damaging ability on Enemy gods. At 10 stacks you gain a free usage of So Beautiful.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Stacks Required', value: '10' }
        ]
      },
      abilities: {
        1: {
          name: 'So Beautiful',
          image: '',
          description: 'Send a projectile forward that deals Physical Damage. Enemies hit have their Attack Speed reduced.\n\n• On first successful god or boss hit, send an Attack Speed buff to nearby allies.',
          cooldown: '11s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '60 | 100 | 140 | 180 | 220' },
            { label: 'Damage Scaling', value: '10% Item Health' },
            { label: 'Attack Speed Buff', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Attack Speed Slow', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '0.8m' }
          ]
        },
        2: {
          name: 'Serenade',
          image: '',
          description: 'Sing to Mesmerize all nearby enemies. Nearby allies gain a shield. While the shield holds they gain additional protections.\n\n• Any damage done breaks the Mesmerize',
          cooldown: '15s',
          cost: '60',
          attributes: [
            { label: 'Shield Health', value: '50 | 85 | 120 | 155 | 190' },
            { label: 'Mesmerize Duration', value: '1.5 | 1.7 | 1.9 | 2.1 | 2.3s' },
            { label: 'Protections', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Shield Duration', value: '5s' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'The Moves',
          image: '',
          description: 'Dash forward dealing Physical Damage and Knocking aside all enemies. At the end of the Dash all nearby allies gain a Speed Buff and all nearby enemies are Slowed.\n\n• Any enemy hit provides 1 stack of Audacity.',
          cooldown: '15s',
          cost: '70',
          attributes: [
            { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
            { label: 'Damage Scaling', value: '60% Strength' },
            { label: 'Speed Buff', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Slow', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Buff/Debuff Duration', value: '5s' },
            { label: 'Range', value: '7.2m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        4: {
          name: 'Across the Sky',
          image: '',
          description: 'Ride your chariot across the sky, choosing when to land. When descending you deal Physical Damage every 0.15s for 0.6s, Knocking back enemies on the last tick.\n\n• 2 Allies can join the Chariot ride by interacting with his takeoff location. Allies have until Apollo reaches max height to join\n• Carrying an Ally costs additional mana',
          cooldown: '110s',
          cost: '20',
          attributes: [
            { label: 'Damage Per Tick', value: '70 | 95 | 120 | 145 | 170' },
            { label: 'Damage Scaling', value: '25% Strength' },
            { label: 'Cost Per Second', value: '35 | 40 | 45 | 50 | 55' },
            { label: 'Carrying Ally Bonus Cost', value: '5% Mana' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};