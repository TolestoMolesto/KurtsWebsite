import { God, DamageType } from '../../types';

export const ANUBIS: God = {
  id: 'anubis',
  name: 'Anubis',
  title: 'God of the Dead',
  pantheon: 'Egyptian',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 319.68, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 683.99, healthRegen: 1.9, maxMana: 365.04, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.275, damageMitigation: 0, maxHealth: 776.61, healthRegen: 2.1, maxMana: 410.4, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 869.235, healthRegen: 2.3, maxMana: 455.76, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.125, damageMitigation: 0, maxHealth: 961.86, healthRegen: 2.5, maxMana: 501.12, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1054.485, healthRegen: 2.7, maxMana: 546.48, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.975, damageMitigation: 0, maxHealth: 1147.11, healthRegen: 2.9, maxMana: 591.84, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1239.735, healthRegen: 3.1, maxMana: 637.2, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.825, damageMitigation: 0, maxHealth: 1332.36, healthRegen: 3.3, maxMana: 682.56, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1424.985, healthRegen: 3.5, maxMana: 727.92, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.675, damageMitigation: 0, maxHealth: 1517.61, healthRegen: 3.7, maxMana: 773.28, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1610.235, healthRegen: 3.9, maxMana: 818.64, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.525, damageMitigation: 0, maxHealth: 1702.86, healthRegen: 4.1, maxMana: 864.0, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1795.485, healthRegen: 4.3, maxMana: 909.36, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.375, damageMitigation: 0, maxHealth: 1888.11, healthRegen: 4.5, maxMana: 954.72, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1980.735, healthRegen: 4.7, maxMana: 1000.08, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.225, damageMitigation: 0, maxHealth: 2073.36, healthRegen: 4.9, maxMana: 1045.44, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2165.985, healthRegen: 5.1, maxMana: 1090.8, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.075, damageMitigation: 0, maxHealth: 2258.61, healthRegen: 5.3, maxMana: 1136.16, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1181.52, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Anubis Basic Attack',
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
    name: 'The Scales',
    image: '',
    description: 'Gain bonus Lifesteal, Physical Protection, and Magical Protection. These bonuses increase as your health declines.\n\n• Gain 1 Stack of this buff for each 10% Health missing\n• At maximum stacks, bonus Protections are doubled\n• At maximum stacks, bonus Lifesteal is tripled',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Protections Per Stack', value: '10 + 0.5 Per Level' },
      { label: 'Lifesteal Per Stack', value: '2%' },
      { label: 'Max Buff Stacks', value: '8' }
    ]
  },
  abilities: {
    1: {
      name: 'Plague Of Locusts',
      image: '',
      description: 'Locusts fly from your mouth, repeatedly dealing Magical Damage in an area in front of you.\n\n• This is a Channeled ability\n• You are Displacement Immune and move at reduced Movement Speed while Channeling\n• This ability hits 12 times over 2.5 seconds',
      cooldown: '10 | 9.5 | 9 | 8.5 | 8s',
      cost: '30 | 40 | 50 | 60 | 70',
      attributes: [
        { label: 'Damage Per Tick', value: '15 | 22 | 29 | 36 | 43' },
        { label: 'Damage Scaling Per Tick', value: '18% | 19% | 20% | 21% | 22% Intelligence' },
        { label: 'Self Slow', value: '35% | 30% | 25% | 20% | 15%' },
        { label: 'Radius', value: '5.6m' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    },
    2: {
      name: 'Mummify',
      image: '',
      description: 'Fire a bandage projectile, mummifying and Stunning the first god hit.\n\n• This ability deals Magical Damage, only to gods\n• Projectile ignores minions, and stops on walls',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '60 | 85 | 110 | 135 | 160' },
        { label: 'Damage Scaling', value: '55% Intelligence' },
        { label: 'Stun Duration', value: '0.85 | 0.9 | 0.95 | 1 | 1.05s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.56m' }
      ]
    },
    3: {
      name: 'Grasping Hands',
      image: '',
      description: 'Summon allies from the underworld, dealing Magical Damage repeatedly to enemies in an area.\n\n• This also Slows enemies in the area\n• This ability hits 4 times over 1.5 seconds\n• Slow is refreshed on each hit, and does not stack',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage Per Tick', value: '25 | 45 | 65 | 85 | 105' },
        { label: 'Damage Scaling Per Tick', value: '35% Intelligence' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Death Gaze',
      image: '',
      description: 'Your piercing gaze burns enemies in a line.\n\n• This deals an initial burst of Magical Damage\n• Then Channels to repeatedly deal Magical Damage\n• You are CC Immune while using this ability\n• Ability hits 24 times, plus the initial burst, over 2.4 seconds\n• You are Rooted while Channeling',
      cooldown: '90s',
      cost: '90',
      attributes: [
        { label: 'Initial Damage', value: '140 | 170 | 200 | 230 | 260' },
        { label: 'Initial Damage Scaling', value: '90% Intelligence' },
        { label: 'Damage Per Tick', value: '27 | 32 | 37 | 42 | 47' },
        { label: 'Damage Scaling Per Tick', value: '20% Intelligence' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.72m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};