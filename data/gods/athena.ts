import { God, DamageType } from '../../types';

export const ATHENA: God = {
  id: 'athena',
  name: 'Athena',
  title: 'Goddess of Wisdom',
  pantheon: 'Greek',
  role: 'Guardian',
  lanes: ['Support', 'Solo'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.836, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.76, magicalProtection: 31.32, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.052, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27, magicalProtection: 32.94, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.268, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.24, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.484, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.48, magicalProtection: 36.18, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.7, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.72, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.916, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 56.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.96, magicalProtection: 39.42, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.132, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 59.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.04, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.348, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 61.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.44, magicalProtection: 42.66, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.564, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.68, magicalProtection: 44.28, damageMitigation: 0, maxHealth: 1620, healthRegen: 3.78, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 66.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.92, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.996, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 68.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.16, magicalProtection: 47.52, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.212, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 71.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.14, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.428, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 73.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.64, magicalProtection: 50.76, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.644, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 75.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.88, magicalProtection: 52.38, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 78.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.12, magicalProtection: 54, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.076, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 80.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.36, magicalProtection: 55.62, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.292, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 83.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.24, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.508, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.84, magicalProtection: 58.86, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.724, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 87.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.08, magicalProtection: 60.48, damageMitigation: 0, maxHealth: 2673, healthRegen: 5.94, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Athena Basic Attack',
    image: '',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 1, 2x damage and swing time. The final hit of the chain hits all targets in the area for 2x damage.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Reach',
    image: '',
    description: 'After using an ability, your next basic attack becomes a ranged projectile that deals Magical Damage.\n\n• Deals 1.25x damage to the first target hit, passes through and damages all enemies, and passes through walls.\n• This basic attack can Critically Strike.\n• This basic attack can trigger Item Effects.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '125% Strength + 70% Intelligence' }
    ]
  },
  abilities: {
    1: {
      name: 'Preemptive Strike',
      image: '',
      description: 'Charge up, then Dash forward.\n\n• Deals Magical Damage and Slows enemies\n• Gain Physical Protection and Magical Protection when you hit an enemy god\n\nBuildup takes 0.66 seconds.',
      cooldown: '14s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Damage Scaling', value: '55% Strength' },
        { label: 'Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Physical Protection', value: '15 | 20 | 25 | 30 | 35 + 10% Physical Protections' },
        { label: 'Magical Protection', value: '15 | 20 | 25 | 30 | 35 + 10% Magical Protections' },
        { label: 'Buff Duration', value: '4s' }
      ]
    },
    2: {
      name: 'Confound',
      image: '',
      description: 'Taunt enemies in front of you.\n\n• Deals Magical Damage\n• Taunted enemies are Slowed by 25%',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '40 | 65 | 90 | 115 | 140' },
        { label: 'Damage Scaling', value: '20% Intelligence' },
        { label: 'Taunt Duration', value: '0.75 | 0.9 | 1.05 | 1.2 | 1.35s' },
        { label: 'Taunt Duration Scaling', value: '0.2s per 115 Item Protections, stacking up to 2 times' },
        { label: 'Radius', value: '5.6m' },
        { label: 'Cone Angle', value: '90 degrees' }
      ]
    },
    3: {
      name: 'Shield Wall',
      image: '',
      description: 'Create a Phalanx of Soldiers that strike twice in an area.\n\n• Deals Magical Damage initially\n• After a brief delay, deals additional Magical Damage\n• Applies a 20% Slow on each hit\n\nThe delay between the first and second attack is 2 seconds.',
      cooldown: '12s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Initial Damage', value: '60 | 100 | 140 | 180 | 220' },
        { label: 'Initial Damage Scaling', value: '45% Intelligence' },
        { label: 'Final Damage', value: '80 | 140 | 200 | 260 | 320' },
        { label: 'Final Damage Scaling', value: '55% Intelligence' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Defender Of Olympus',
      image: '',
      description: 'Teleport to the aid of target ally god, anywhere on the map.\n\n• Apply a Health Shield and Movement Speed to your ally\n• Deal Magical Damage to nearby enemies upon landing\n• You are CC Immune while using this ability\n\nChannel lasts for 3.34 seconds. If your target dies before your channel completes you will still go to their location.',
      cooldown: '120 | 115 | 110 | 105 | 100s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '340 | 415 | 490 | 565 | 640' },
        { label: 'Damage Scaling', value: '90% Intelligence' },
        { label: 'Shield', value: '200 | 225 | 250 | 275 | 300 + 15% Max Health' },
        { label: 'Movement Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
        { label: 'Damage Mitigation', value: '20%' },
        { label: 'Range', value: 'Global' }
      ]
    }
  },
  aspects: [
    {
      id: 'war',
      name: 'Aspect of War',
      image: '',
      description: 'Defender of Olympus now targets enemy gods instead of allies. While channeling, the enemy targeted is Debuffed and takes increased damage. After teleporting, you gain a Health Shield instead of granting one to an ally.',
      basicAttack: {
        name: 'Athena Basic Attack',
        image: '',
        description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 1, 2x damage and swing time. The final hit of the chain hits all targets in the area for 2x damage.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Reach',
        image: '',
        description: 'After using an ability, your next basic attack becomes a ranged projectile that deals Magical Damage.\n\n• Deals 1.25x damage to the first target hit, passes through and damages all enemies, and passes through walls.\n• This basic attack can Critically Strike.\n• This basic attack can trigger Item Effects.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '125% Strength + 70% Intelligence' }
        ]
      },
      abilities: {
        1: {
          name: 'Preemptive Strike',
          image: '',
          description: 'Charge up, then Dash forward.\n\n• Deals Magical Damage and Slows enemies\n• Gain Physical Protection and Magical Protection when you hit an enemy god\n\nBuildup takes 0.66 seconds.',
          cooldown: '14s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
            { label: 'Damage Scaling', value: '55% Strength' },
            { label: 'Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Physical Protection', value: '15 | 20 | 25 | 30 | 35 + 10% Physical Protections' },
            { label: 'Magical Protection', value: '15 | 20 | 25 | 30 | 35 + 10% Magical Protections' },
            { label: 'Buff Duration', value: '4s' }
          ]
        },
        2: {
          name: 'Confound',
          image: '',
          description: 'Taunt enemies in front of you.\n\n• Deals Magical Damage\n• Taunted enemies are Slowed by 25%',
          cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '40 | 65 | 90 | 115 | 140' },
            { label: 'Damage Scaling', value: '20% Intelligence' },
            { label: 'Taunt Duration', value: '0.75 | 0.9 | 1.05 | 1.2 | 1.35s' },
            { label: 'Taunt Duration Scaling', value: '0.2s per 115 Item Protections, stacking up to 2 times' },
            { label: 'Radius', value: '5.6m' },
            { label: 'Cone Angle', value: '90 degrees' }
          ]
        },
        3: {
          name: 'Shield Wall',
          image: '',
          description: 'Create a Phalanx of Soldiers that strike twice in an area.\n\n• Deals Magical Damage initially\n• After a brief delay, deals additional Magical Damage\n• Applies a 20% Slow on each hit\n\nThe delay between the first and second attack is 2 seconds.',
          cooldown: '12s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Initial Damage', value: '60 | 100 | 140 | 180 | 220' },
            { label: 'Initial Damage Scaling', value: '45% Intelligence' },
            { label: 'Final Damage', value: '80 | 140 | 200 | 260 | 320' },
            { label: 'Final Damage Scaling', value: '55% Intelligence' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        4: {
          name: 'Defender Of Olympus',
          image: '',
          description: 'Teleport to an enemy god, anywhere on the map.\n\n• While channeling, the enemy targeted is Debuffed and takes increased damage\n• After teleporting, you gain a Health Shield\n• You are CC Immune while using this ability\n• NO LONGER SHIELDS OR BUFFS ALLIES\n• TARGETS ENEMIES INSTEAD OF ALLIES\n\nChannel lasts for 3.34 seconds.',
          cooldown: '120 | 115 | 110 | 105 | 100s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Shield', value: '200 | 225 | 250 | 275 | 300 + 15% Max Health' },
            { label: 'Damage Taken Increase (Enemy)', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Range', value: 'Global' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};