import { God, DamageType } from '../../types';

export const KUKULKAN: God = {
  id: 'kukulkan',
  name: 'Kukulkan',
  title: 'Serpent of the Nine Winds',
  pantheon: 'Maya',
  role: 'Mage',
  lanes: ['Mid'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.48, magicalProtection: 26.08, damageMitigation: 0, maxHealth: 572.7, healthRegen: 1.7, maxMana: 319.68, manaRegen: 2.43, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.24, magicalProtection: 27.46, damageMitigation: 0, maxHealth: 662.4, healthRegen: 1.9, maxMana: 365.04, manaRegen: 2.7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23, magicalProtection: 28.84, damageMitigation: 0, maxHealth: 752.1, healthRegen: 2.1, maxMana: 410.4, manaRegen: 2.97, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25.76, magicalProtection: 30.22, damageMitigation: 0, maxHealth: 841.8, healthRegen: 2.3, maxMana: 455.76, manaRegen: 3.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 7, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.52, magicalProtection: 31.6, damageMitigation: 0, maxHealth: 931.5, healthRegen: 2.5, maxMana: 501.12, manaRegen: 3.51, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.28, magicalProtection: 32.98, damageMitigation: 0, maxHealth: 1021.2, healthRegen: 2.7, maxMana: 546.48, manaRegen: 3.78, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.04, magicalProtection: 34.36, damageMitigation: 0, maxHealth: 1110.9, healthRegen: 2.9, maxMana: 591.84, manaRegen: 4.05, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.8, magicalProtection: 35.74, damageMitigation: 0, maxHealth: 1200.6, healthRegen: 3.1, maxMana: 637.2, manaRegen: 4.32, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.56, magicalProtection: 37.12, damageMitigation: 0, maxHealth: 1290.3, healthRegen: 3.3, maxMana: 682.56, manaRegen: 4.59, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 14, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.32, magicalProtection: 38.5, damageMitigation: 0, maxHealth: 1380, healthRegen: 3.5, maxMana: 727.92, manaRegen: 4.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.08, magicalProtection: 39.88, damageMitigation: 0, maxHealth: 1469.7, healthRegen: 3.7, maxMana: 773.28, manaRegen: 5.13, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.84, magicalProtection: 41.26, damageMitigation: 0, maxHealth: 1559.4, healthRegen: 3.9, maxMana: 818.64, manaRegen: 5.4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 50.6, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1649.1, healthRegen: 4.1, maxMana: 864, manaRegen: 5.67, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 53.36, magicalProtection: 44.02, damageMitigation: 0, maxHealth: 1738.8, healthRegen: 4.3, maxMana: 909.36, manaRegen: 5.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 21, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.12, magicalProtection: 45.4, damageMitigation: 0, maxHealth: 1828.5, healthRegen: 4.5, maxMana: 954.72, manaRegen: 6.21, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.88, magicalProtection: 46.78, damageMitigation: 0, maxHealth: 1918.2, healthRegen: 4.7, maxMana: 1000.08, manaRegen: 6.48, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61.64, magicalProtection: 48.16, damageMitigation: 0, maxHealth: 2007.9, healthRegen: 4.9, maxMana: 1045.44, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.4, magicalProtection: 49.54, damageMitigation: 0, maxHealth: 2097.6, healthRegen: 5.1, maxMana: 1090.8, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.16, magicalProtection: 50.92, damageMitigation: 0, maxHealth: 2187.3, healthRegen: 5.3, maxMana: 1136.16, manaRegen: 7.29, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.92, magicalProtection: 52.3, damageMitigation: 0, maxHealth: 2277, healthRegen: 5.5, maxMana: 1181.52, manaRegen: 7.56, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Kukulkan Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Power Of The Wind Jewel',
    image: '',
    description: 'As you build items that provide Mana, you gain bonus Intelligence.\n\n• This effect does not scale off Base God Mana.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Intelligence from Item Mana', value: '7%' }
    ]
  },
  abilities: {
    1: {
      name: 'Zephyr',
      image: '',
      description: 'Fire a projectile that explodes on the first enemy hit. The explosion deals Magical Damage and Slows enemies in the area.\n\n• Damaged enemies are also Slowed\n• Projectile stops on walls.',
      cooldown: '7s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '85 | 135 | 185 | 235 | 285' },
        { label: 'Damage Scaling', value: '80% Intelligence' },
        { label: 'Slow', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.64m' },
        { label: 'Explode Radius', value: '2.25m' }
      ]
    },
    2: {
      name: 'Slipstream',
      image: '',
      description: 'Summon the wind to become Slow Immune and gain Movement Speed that fades over time.\n\n• Activate this within a Whirlwind to Dash, dealing Magical Damage and Slowing enemies hit\n• Movement Speed Buff is applied as 4 stacks, stacks are lost one at a time\n• Dash passes through all enemies\n• You can cancel this ability at any time.',
      cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Movement Speed', value: '7 | 9 | 11 | 13 | 15% Per Stack' },
        { label: 'Buff Duration', value: '4s' },
        { label: 'Dash Damage', value: '95 | 145 | 195 | 245 | 295' },
        { label: 'Dash Damage Scaling', value: '80% Intelligence' },
        { label: 'Dash Slow', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Dash Slow Duration', value: '3s' },
        { label: 'Dash Range', value: '8.8m' },
        { label: 'Dash Radius', value: '2m' }
      ]
    },
    3: {
      name: 'Whirlwind',
      image: '',
      description: 'Create a Whirlwind, which spreads onto all enemies that enter its area.\n\n• Affected enemies repeatedly take Magical Damage over time, even if they leave the area\n• The Whirlwind attempts to apply the effect every 0.35 seconds for 4 seconds\n• Damage over Time is refreshed on each hit\n• Damage over Time hits 6 times over 2.5 seconds.',
      cooldown: '15 | 14 | 13 | 12 | 11s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage Per Tick', value: '12 | 19 | 26 | 33 | 40' },
        { label: 'Damage Scaling Per Tick', value: '20% Intelligence' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Spirit Of The Nine Winds',
      image: '',
      description: 'Summon the Spirit of the Nine Winds to deal Magical Damage in a large path.\n\n• Enemies hit are also Knocked Back\n• Projectile passes through and damages all enemy targets, and passes through walls\n• Enemies are Displaced up and away from the projectile.',
      cooldown: '90s',
      cost: '120',
      attributes: [
        { label: 'Damage', value: '400 | 500 | 600 | 700 | 800' },
        { label: 'Damage Scaling', value: '115% Intelligence' },
        { label: 'Range', value: '20.8m' },
        { label: 'Radius', value: '1.4m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};