import { God, DamageType } from '../../types';

export const RAMA: God = {
  id: 'rama',
  name: 'Rama',
  title: 'Seventh Avatar of Vishnu',
  pantheon: 'Hindu',
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
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 1.0, attackSpeedPercent: 1.512, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 296, manaRegen: 2.14, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 3.024, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53, baseAttackSpeed: 1.0, attackSpeedPercent: 4.536, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 29.0, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 380, manaRegen: 2.61, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 6.048, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 7.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 962, healthRegen: 2.5, maxMana: 464, manaRegen: 3.09, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 9.072, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 506, manaRegen: 3.33, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 10.584, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.7, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 548, manaRegen: 3.56, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 12.096, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 590, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 1.0, attackSpeedPercent: 13.608, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1332.5, healthRegen: 3.3, maxMana: 632, manaRegen: 4.04, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 15.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39.0, damageMitigation: 0, maxHealth: 1425.3, healthRegen: 3.5, maxMana: 674, manaRegen: 4.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 16.632, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.4, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 716, manaRegen: 4.51, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 18.144, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 19.656, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1703, healthRegen: 4.1, maxMana: 800, manaRegen: 4.99, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 82, baseAttackSpeed: 1.0, attackSpeedPercent: 21.168, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1795.8, healthRegen: 4.3, maxMana: 842, manaRegen: 5.23, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 1.0, attackSpeedPercent: 22.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.0, magicalProtection: 46.1, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 884, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 87, baseAttackSpeed: 1.0, attackSpeedPercent: 24.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 926, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89, baseAttackSpeed: 1.0, attackSpeedPercent: 25.704, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2073.5, healthRegen: 4.9, maxMana: 968, manaRegen: 5.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92, baseAttackSpeed: 1.0, attackSpeedPercent: 27.216, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2166.3, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.18, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 95, baseAttackSpeed: 1.0, attackSpeedPercent: 28.728, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.41, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97, baseAttackSpeed: 1.0, attackSpeedPercent: 30.24, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Rama Basic Attack',
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
    name: 'Astral Quiver',
    image: '',
    description: 'Your Astral Quiver generates an Astral Arrow every 12s.\n\n• The first time your Basic Attack hits reduce the time to generate an Astral Arrow by 3s.\n• The first time a fired Astral Arrow hits an enemy, it has a chance to drop to the ground.\n• Dropped Astral Arrows last for 10s, and picking one up restores 10 Mana.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Max Astral Arrows', value: '5' },
      { label: 'Drop Chance', value: '30% + 1% per level' }
    ]
  },
  abilities: {
    1: {
      name: 'Astral Strike',
      image: '',
      description: 'Switch to a more powerful arrow that deals bonus Physical Damage, pierces, and Slows enemies.\n\n• While this ability is active, each Basic Attack consumes 1 Astral Arrow and Mana.\n• This ability allows your Basic Attacks to pass through all enemies and walls.\n• This ability\'s bonus damage is reduced by 20% to each target hit after the first.\n• You cannot toggle this ability if you have no Astral Arrows.',
      cooldown: '12s',
      cost: '15 + 1 Astral Arrow per shot',
      attributes: [
        { label: 'Bonus Damage', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Bonus Damage Scaling', value: '20% Strength' },
        { label: 'Slow', value: '10%' },
        { label: 'Max Stacks', value: '3' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    2: {
      name: 'Infinite Arrows',
      image: '',
      description: 'Focus your mind and gain increased Attack Speed.\n\n• When activating this ability, if there are any dropped Astral Arrows within 8.8m of you, automatically collect them.\n• While this buff is active, every third successful Basic Attack on an enemy god will immediately generate an Astral Arrow.',
      cooldown: '15 | 14 | 13 | 12 | 11s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Attack Speed', value: '40 | 45 | 50 | 55 | 60%' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Radius', value: '8.8m' }
      ]
    },
    3: {
      name: 'Rolling Assault',
      image: '',
      description: 'Roll in the direction you are currently traveling.\n\n• For the next 5s after rolling, your next Basic Attack will have Haste and consume an Astral Arrow, Crippling all enemies hit and dealing bonus Physical Damage.',
      cooldown: '11s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Bonus Damage', value: '50 | 70 | 90 | 110 | 130' },
        { label: 'Bonus Damage Scaling', value: '55% Strength' },
        { label: 'Cripple Duration', value: '1 | 1.25 | 1.5 | 1.75 | 2s' },
        { label: 'Range', value: '7.2m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    4: {
      name: 'Astral Barrage',
      image: '',
      description: 'Launch yourself into the air for up to 5s and shoot 3 powerful arrows at the ground, with each successive shot dealing increasing Physical Damage while decreasing in size.\n\n• Each time you pick up an Astral Arrow, the cooldown of this ability is reduced by 0.4s.',
      cooldown: '90s',
      cost: '80',
      attributes: [
        { label: 'Damage', value: '250 | 330 | 410 | 490 | 570' },
        { label: 'Damage Scaling', value: '75% Strength' },
        { label: 'Damage Per Shot', value: '70/85/100%' },
        { label: 'Range', value: '32m' },
        { label: 'Radius', value: '2.4m | 1.6m | 1.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'precision',
      name: 'Aspect of Precision',
      image: '',
      description: 'Your Basic Attacks now cost Astral Arrows and pierce through enemies. When you run out of Astral Arrows, you automatically reload. Astral Strike no longer pierces but gains increased damage and slow effects.',
      basicAttack: {
        name: 'Rama Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Physical Damage to the first enemy hit. Basic Attacks pierce through enemies.\n\nProjectile passes through targets.',
        cooldown: '-',
        cost: '1 Astral Arrow',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Astral Quiver',
        image: '',
        description: 'Your Basic Attacks cost Astral Arrows.\n\n• When you run out of Astral Arrows, you automatically reload.\n• You can reload at any time by using the cancel input.\n• Reload time is scaled down with Attack Speed.\n• The first time a fired Astral Arrow hits an enemy, it has a chance to drop to the ground.\n• Dropped Astral Arrows last for 10s, and picking one up restores 10 Mana.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Max Astral Arrows', value: '5' },
          { label: 'Drop Chance', value: '30% + 1% per level' }
        ]
      },
      abilities: {
        1: {
          name: 'Astral Strike',
          image: '',
          description: 'Switch to a more powerful arrow that deals bonus Physical Damage and Slows enemies.\n\n• While this ability is active, each Basic Attack consumes Mana.\n• BASIC ATTACKS NO LONGER PIERCE\n• INCREASED DAMAGE AND SLOW EFFECTS',
          cooldown: '12s',
          cost: '15 per shot',
          attributes: [
            { label: 'Bonus Damage', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Bonus Damage Scaling', value: '20% Strength' },
            { label: 'Slow', value: '10%' },
            { label: 'Max Stacks', value: '3' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        2: {
          name: 'Infinite Arrows',
          image: '',
          description: 'Focus your mind and gain increased Attack Speed.\n\n• When activating this ability, if there are any dropped Astral Arrows within 8.8m of you, automatically collect them.\n• While this buff is active, every third successful Basic Attack on an enemy god will immediately generate an Astral Arrow.',
          cooldown: '15 | 14 | 13 | 12 | 11s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [
            { label: 'Attack Speed', value: '40 | 45 | 50 | 55 | 60%' },
            { label: 'Buff Duration', value: '6s' },
            { label: 'Radius', value: '8.8m' }
          ]
        },
        3: {
          name: 'Rolling Assault',
          image: '',
          description: 'Roll in the direction you are currently traveling.\n\n• For the next 5s after rolling, your next Basic Attack will have Haste and consume an Astral Arrow, Crippling all enemies hit and dealing bonus Physical Damage.',
          cooldown: '11s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Bonus Damage', value: '50 | 70 | 90 | 110 | 130' },
            { label: 'Bonus Damage Scaling', value: '55% Strength' },
            { label: 'Cripple Duration', value: '1 | 1.25 | 1.5 | 1.75 | 2s' },
            { label: 'Range', value: '7.2m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        4: {
          name: 'Astral Barrage',
          image: '',
          description: 'Launch yourself into the air for up to 5s and shoot 3 powerful arrows at the ground, with each successive shot dealing increasing Physical Damage while decreasing in size.\n\n• Each time you pick up an Astral Arrow, the cooldown of this ability is reduced by 0.4s.',
          cooldown: '90s',
          cost: '80',
          attributes: [
            { label: 'Damage', value: '250 | 330 | 410 | 490 | 570' },
            { label: 'Damage Scaling', value: '75% Strength' },
            { label: 'Damage Per Shot', value: '70/85/100%' },
            { label: 'Range', value: '32m' },
            { label: 'Radius', value: '2.4m | 1.6m | 1.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};