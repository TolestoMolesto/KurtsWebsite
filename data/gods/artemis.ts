import { God, DamageType } from '../../types';

export const ARTEMIS: God = {
  id: 'artemis',
  name: 'Artemis',
  title: 'Goddess of the Hunt',
  pantheon: 'Greek',
  role: 'Hunter',
  lanes: ['Carry'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 47.952, baseAttackSpeed: 1.0, attackSpeedPercent: 1.512, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.1375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 50.544, baseAttackSpeed: 1.0, attackSpeedPercent: 3.024, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53.136, baseAttackSpeed: 1.0, attackSpeedPercent: 4.536, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.625, healthRegen: 2.1, maxMana: 380, manaRegen: 2.6125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 55.728, baseAttackSpeed: 1.0, attackSpeedPercent: 6.048, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.25, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58.32, baseAttackSpeed: 1.0, attackSpeedPercent: 7.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.875, healthRegen: 2.5, maxMana: 464, manaRegen: 3.0875, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 60.912, baseAttackSpeed: 1.0, attackSpeedPercent: 9.072, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 506, manaRegen: 3.325, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 63.504, baseAttackSpeed: 1.0, attackSpeedPercent: 10.584, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1147.125, healthRegen: 2.9, maxMana: 548, manaRegen: 3.5625, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66.096, baseAttackSpeed: 1.0, attackSpeedPercent: 12.096, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.75, healthRegen: 3.1, maxMana: 590, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 68.688, baseAttackSpeed: 1.0, attackSpeedPercent: 13.608, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1332.375, healthRegen: 3.3, maxMana: 632, manaRegen: 4.0375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71.28, baseAttackSpeed: 1.0, attackSpeedPercent: 15.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1425, healthRegen: 3.5, maxMana: 674, manaRegen: 4.275, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 73.872, baseAttackSpeed: 1.0, attackSpeedPercent: 16.632, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1517.625, healthRegen: 3.7, maxMana: 716, manaRegen: 4.5125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76.464, baseAttackSpeed: 1.0, attackSpeedPercent: 18.144, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.25, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79.056, baseAttackSpeed: 1.0, attackSpeedPercent: 19.656, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1702.875, healthRegen: 4.1, maxMana: 800, manaRegen: 4.9875, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 81.648, baseAttackSpeed: 1.0, attackSpeedPercent: 21.168, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 842, manaRegen: 5.225, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84.24, baseAttackSpeed: 1.0, attackSpeedPercent: 22.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1888.125, healthRegen: 4.5, maxMana: 884, manaRegen: 5.4625, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 86.832, baseAttackSpeed: 1.0, attackSpeedPercent: 24.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.75, healthRegen: 4.7, maxMana: 926, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89.424, baseAttackSpeed: 1.0, attackSpeedPercent: 25.704, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2073.375, healthRegen: 4.9, maxMana: 968, manaRegen: 5.9375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92.016, baseAttackSpeed: 1.0, attackSpeedPercent: 27.216, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2166, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.175, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 94.608, baseAttackSpeed: 1.0, attackSpeedPercent: 28.728, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2258.625, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.4125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97.2, baseAttackSpeed: 1.0, attackSpeedPercent: 30.24, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Artemis Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Physical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Still Target',
    image: '',
    description: 'Artemis deals 15% increased Basic Attack Damage to gods and 30% to minions that are afflicted by Crowd Control.\n\nYou are able to detect nearby enemy Gods in stealth grass.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Bonus Damage to Gods (CC)', value: '15%' },
      { label: 'Bonus Damage to Minions (CC)', value: '30%' }
    ]
  },
  abilities: {
    1: {
      name: "Transgressor's Fate",
      image: '',
      description: 'Place a trap on the ground. Enemy gods that come in contact with it activate it, Rooting, Crippling, and repeatedly dealing Physical Damage over 3s.\n\n• A max of 4 traps can be placed at the same time.\n• The trap deals damage every 1s for 3s.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '45',
      attributes: [
        { label: 'Damage Per Tick', value: '26 | 36 | 46 | 56 | 66' },
        { label: 'Damage Scaling', value: '30% Strength' },
        { label: 'Root Duration', value: '1.75s' },
        { label: 'Cripple Duration', value: '1.75s' },
        { label: 'Range', value: '6.4m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    2: {
      name: 'Vengeful Assault',
      image: '',
      description: 'Greatly increase your Movement Speed and Attack Speed.\n\n• On activation you are cleansed of slows and become Slow Immune for 0.6s.\n• While the buff is active, gain a charge each time you hit an enemy god with a basic attack.\n• After reaching 4 charges they are consumed, extending the duration of the buff by 3s.',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Movement Speed', value: '25%' },
        { label: 'Attack Speed', value: '25 | 35 | 45 | 55 | 65%' },
        { label: 'Buff Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' }
      ]
    },
    3: {
      name: 'Suppress the Insolent',
      image: '',
      description: 'Fire a volley at a target area dealing Physical Damage and Slowing enemies.',
      cooldown: '9s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '100 | 150 | 200 | 250 | 300' },
        { label: 'Damage Scaling', value: '65% Strength' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    4: {
      name: 'Calydonian Boar',
      image: '',
      description: 'Summon the great Calydonian Boar that charges the nearest enemy god.\n\n• Deals Physical Damage and Stuns enemies.\n• The boar is immune until it hits the first god and then continues to charge other gods for its lifetime.\n• You are CC Immune for 1.5s after activating this ability.\n• The boar will basic attack minions if there are no nearby gods.',
      cooldown: '90s',
      cost: '45',
      attributes: [
        { label: 'Dash Damage', value: '150 | 220 | 290 | 360 | 430' },
        { label: 'Damage Scaling', value: '90% Strength' },
        { label: 'Stun Duration', value: '0.9 | 1.0 | 1.1 | 1.2 | 1.3s' },
        { label: 'Boar HP', value: '350 | 450 | 550 | 650 | 750' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '9.6m' }
      ]
    }
  },
  aspects: [
    {
      id: 'wild',
      name: 'Aspect of the Wild',
      image: '',
      description: "Transgressor's Fate no longer roots or cripples gods but can now target minions. Triggered traps now also heal Artemis and deal damage to enemies in a larger area.",
      basicAttack: {
        name: 'Artemis Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Physical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Still Target',
        image: '',
        description: 'Artemis deals 15% increased Basic Attack Damage to gods and 30% to minions that are afflicted by Crowd Control.\n\nYou are able to detect nearby enemy Gods in stealth grass.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Bonus Damage to Gods (CC)', value: '15%' },
          { label: 'Bonus Damage to Minions (CC)', value: '30%' }
        ]
      },
      abilities: {
        1: {
          name: "Transgressor's Fate",
          image: '',
          description: 'Place a trap on the ground. Enemies that come in contact with it activate it, causing it to repeatedly deal Physical Damage in an area over 3s.\n\n• A max of 4 traps can be placed at the same time.\n• The trap deals damage every 0.5s for 3s.\n• You are Healed 3 times over 3s when a trap is triggered.\n• NO LONGER ROOTS OR CRIPPLES GODS\n• CAN NOW TARGET MINIONS\n• DEALS DAMAGE IN A LARGER AREA',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '45',
          attributes: [
            { label: 'Damage Per Tick', value: '12 | 24 | 36 | 48 | 60' },
            { label: 'Damage Scaling Per Tick', value: '35% Strength' },
            { label: 'Heal Per Tick', value: '12 | 17 | 22 | 27 | 32' },
            { label: 'Heal Scaling Per Tick', value: '3% Strength' },
            { label: 'Range', value: '6.4m' },
            { label: 'Trap Radius', value: '0.8m' },
            { label: 'Damage Radius', value: '2.56m' }
          ]
        },
        2: {
          name: 'Vengeful Assault',
          image: '',
          description: 'Greatly increase your Movement Speed and Attack Speed.\n\n• On activation you are cleansed of slows and become Slow Immune for 0.6s.\n• While the buff is active, gain a charge each time you hit an enemy god with a basic attack.\n• After reaching 4 charges they are consumed, extending the duration of the buff by 3s.',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Movement Speed', value: '25%' },
            { label: 'Attack Speed', value: '25 | 35 | 45 | 55 | 65%' },
            { label: 'Buff Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' }
          ]
        },
        3: {
          name: 'Suppress the Insolent',
          image: '',
          description: 'Fire a volley at a target area dealing Physical Damage and Slowing enemies.',
          cooldown: '9s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '100 | 150 | 200 | 250 | 300' },
            { label: 'Damage Scaling', value: '65% Strength' },
            { label: 'Slow', value: '25%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        4: {
          name: 'Calydonian Boar',
          image: '',
          description: 'Summon the great Calydonian Boar that charges the nearest enemy god.\n\n• Deals Physical Damage and Stuns enemies.\n• The boar is immune until it hits the first god and then continues to charge other gods for its lifetime.\n• You are CC Immune for 1.5s after activating this ability.\n• The boar will basic attack minions if there are no nearby gods.',
          cooldown: '90s',
          cost: '45',
          attributes: [
            { label: 'Dash Damage', value: '150 | 220 | 290 | 360 | 430' },
            { label: 'Damage Scaling', value: '90% Strength' },
            { label: 'Stun Duration', value: '0.9 | 1.0 | 1.1 | 1.2 | 1.3s' },
            { label: 'Boar HP', value: '350 | 450 | 550 | 650 | 750' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '9.6m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};