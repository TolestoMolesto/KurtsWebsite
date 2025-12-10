import { God, DamageType } from '../../types';

export const MEDUSA: God = {
  id: 'medusa',
  name: 'Medusa',
  title: 'The Gorgon',
  pantheon: 'Greek',
  role: 'Hunter',
  lanes: ['Carry', 'Mid'],
  damageType: DamageType.Physical,
  image: '', // TODO: Add image URL
  videoGuideUrl: '', // TODO: Add video guide URL
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 46.176, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.1375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 48.672, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 51.168, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.625, healthRegen: 2.1, maxMana: 380, manaRegen: 2.6125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 53.664, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.25, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 56.16, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.875, healthRegen: 2.5, maxMana: 464, manaRegen: 3.0875, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 58.656, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 506, manaRegen: 3.325, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 61.152, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1147.125, healthRegen: 2.9, maxMana: 548, manaRegen: 3.5625, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 63.648, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.75, healthRegen: 3.1, maxMana: 590, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 66.144, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1332.375, healthRegen: 3.3, maxMana: 632, manaRegen: 4.0375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 68.64, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1425, healthRegen: 3.5, maxMana: 674, manaRegen: 4.275, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 71.136, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1517.625, healthRegen: 3.7, maxMana: 716, manaRegen: 4.5125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 73.632, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.25, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 76.128, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1702.875, healthRegen: 4.1, maxMana: 800, manaRegen: 4.9875, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 78.624, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 842, manaRegen: 5.225, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 81.12, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1888.125, healthRegen: 4.5, maxMana: 884, manaRegen: 5.4625, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 83.616, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.75, healthRegen: 4.7, maxMana: 926, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 86.112, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2073.375, healthRegen: 4.9, maxMana: 968, manaRegen: 5.9375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 88.608, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2166, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.175, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 91.104, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2258.625, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.4125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 93.6, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Medusa Basic Attack',
    image: '', // TODO: Add image URL
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
    name: 'Sidewinder',
    image: '', // TODO: Add image URL
    description: 'You suffer no movement penalty when strafing and half the movement penalty when backpedaling.',
    cooldown: '-',
    cost: '-',
    attributes: []
  },
  abilities: {
    1: {
      name: 'Viper Shot',
      image: '', // TODO: Add image URL
      description: 'Gain increased Attack Speed and augment your next 4 Basic Attacks, shooting vipers that poison the targets hit, dealing Physical Damage every 0.5s for 1.5s.\n\n• Each successful hit on an enemy god reduces the Cooldown of this ability by 0.5s',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '50',
      attributes: [
        { label: 'Attack Speed', value: '40 | 45 | 50 | 55 | 60%' },
        { label: 'Attack Speed Scaling', value: '15% Strength' },
        { label: 'Damage Per Tick', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Damage Scaling Per Tick', value: '8% Strength + 8% Intelligence' },
        { label: 'Tick Interval', value: '0.5s' },
        { label: 'Poison Duration', value: '1.5s' },
        { label: 'Enhanced Shots', value: '4' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    2: {
      name: 'Acid Spray',
      image: '', // TODO: Add image URL
      description: 'Spit acid that deals Physical Damage to the first enemy hit, then spraying out in a cone behind them.\n\n• Enemies hit have their Healing Taken reduced for 5s\n• Acid Spray will explode on statues Medusa has created',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Damage', value: '90 | 145 | 200 | 255 | 310' },
        { label: 'Damage Scaling', value: '50% Strength + 80% Intelligence' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Debuff Duration', value: '5s' },
        { label: 'Range', value: '7.2m' },
        { label: 'Radius', value: '0.64m' },
        { label: 'Cone Range', value: '7.2m' },
        { label: 'Cone Angle', value: '70 degrees' }
      ]
    },
    3: {
      name: 'Lacerate',
      image: '', // TODO: Add image URL
      description: 'TODO: A03 data file was not provided. Please add Lacerate ability data.',
      cooldown: '-',
      cost: '-',
      attributes: []
    },
    4: {
      name: 'Petrify',
      image: '', // TODO: Add image URL
      description: 'Remove your mask, revealing your true face to deliver a powerful blast from your horrifying gorgon gaze.\n\n• Enemies are dealt Physical Damage and Stunned if they look at you\n• Enemies are dealt reduced Physical Damage and Slowed if they are not looking at you\n• You are CC Immune while using this ability\n• This ability does not hit through map walls and player made walls that block abilities\n• Enemy gods that are killed while affected by this ability are turned into a stone statue and remain behind as a reminder to others\n• Statues last indefinitely but may be killed with 4 Basic Attacks or by Lacerate\n• When a statue is destroyed, the cooldown of Lacerate is reduced by 5s, you gain a temporary Strength and Intelligence buff, and you gain a permanent stack of Strength and Intelligence',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage (Facing)', value: '270 | 365 | 460 | 555 | 650' },
        { label: 'Damage Scaling (Facing)', value: '65% Strength + 95% Intelligence' },
        { label: 'Damage (Not Facing)', value: '85% of Full Damage' },
        { label: 'Damage Scaling (Not Facing)', value: '55.25% Strength + 80.75% Intelligence' },
        { label: 'Stun Duration (Facing)', value: '2s' },
        { label: 'Slow (Not Facing)', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Statue Destroy - Temp Strength Buff', value: '10%' },
        { label: 'Statue Destroy - Temp Intelligence Buff', value: '10%' },
        { label: 'Buff Duration', value: '10s' },
        { label: 'Statue Destroy - Permanent Strength', value: '+5 Per Stack' },
        { label: 'Statue Destroy - Permanent Intelligence', value: '+5 Per Stack' },
        { label: 'Range', value: '11.2m' },
        { label: 'Cone Angle', value: '40 degrees' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};